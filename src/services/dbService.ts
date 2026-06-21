import fs from 'fs/promises';
import path from 'path';
import { kv } from '@vercel/kv';
import Redis from 'ioredis';

export interface QuoteItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface CustomerFile {
  id: string;
  name: string;
  size: string;
  uploadedAt: string;
  url: string;
}

export interface Customer {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  files?: CustomerFile[];
}

export interface Message {
  id: string;
  customerId: string;
  channel: 'email' | 'sms' | 'whatsapp';
  direction: 'inbound' | 'outbound';
  sender: string;
  text: string;
  timestamp: string;
  isRead?: boolean;
}

export interface UserPageView {
  path: string;
  enteredAt: number;
  durationMs?: number;
}

export interface UserBehavior {
  sessionStart: string;
  pageViews: UserPageView[];
  calculatorOpenedCount: number;
  totalInteractions: number;
  timeSpentMs: number;
}

export type LeadStatus =
  | 'New Estimate Lead'
  | 'Estimate Sent'
  | 'Awaiting Drawings'
  | 'Drawings Received'
  | 'Design & Pricing'
  | 'Quote Sent'
  | 'Site Measure'
  | 'Deposit Received'
  | 'Installation Scheduled'
  | 'Completed';

export interface Lead {
  id: string;
  createdAt: string;
  leadStatus?: LeadStatus;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  layout?: string;
  quartzLevel?: string;
  selectedSlab?: string;
  countertopSqFt?: number;
  countertopLinearFt?: number;
  hasIsland?: boolean;
  islandType?: string;
  includeCabinets?: boolean;
  cabinetLinearFt?: number;
  cabinetStyle?: string;
  deliveryMethod?: string;
  selectedCabinetStyle?: string;
  timeline?: string;
  extras?: string[];
  cabinetExtras?: string[];
  countertopCostLow?: number;
  countertopCostHigh?: number;
  cabinetCostLow?: number;
  cabinetCostHigh?: number;
  totalCostLow?: number;
  totalCostHigh?: number;
  includeCountertops?: boolean;

  // UTM Attribution & User Behavior Fields
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  behavior?: UserBehavior;
  
  // Quote / Invoicing System Fields
  quoteStatus?: 'draft' | 'sent' | 'approved' | 'invoiced' | 'paid';
  quoteNumber?: string;
  quoteItems?: QuoteItem[];
  quoteTaxRate?: number;
  quoteDiscount?: number;
  quoteSubtotal?: number;
  quoteTax?: number;
  quoteTotal?: number;
  quoteSentAt?: string;
  clientSignedAt?: string;
  clientSignatureName?: string;
  customerId?: string; // Links lead/quote to a specific customer profile
  followupsLog?: string[]; // Array to track sent automations: e.g. ['estimate_day3', 'quote_day6']
}

const isVercel = !!process.env.VERCEL;
const useKV = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
const useRedis = !!process.env.REDIS_URL;

const DB_DIR = isVercel ? '/tmp/data' : path.resolve(process.cwd(), 'data');
const DB_FILE = path.resolve(DB_DIR, 'leads.json');
const CUSTOMERS_FILE = path.resolve(DB_DIR, 'customers.json');
const MESSAGES_FILE = path.resolve(DB_DIR, 'messages.json');
const ANALYTICS_FILE = path.resolve(DB_DIR, 'analytics.json');

// Promise chain to serialise database writes and prevent race conditions/corruption
let writeQueue = Promise.resolve();

let redisClient: Redis | null = null;
if (useRedis) {
  try {
    redisClient = new Redis(process.env.REDIS_URL!);
    redisClient.on('error', (err: any) => {
      console.error('Redis connection error:', err);
    });
  } catch (err) {
    console.error('Failed to create Redis client:', err);
  }
}

// Unified Get helper — treats KV/Redis as authoritative when available.
// Does NOT fall through to ephemeral file if a persistent store is configured.
async function getDbKey<T>(key: string, fileFallbackPath: string): Promise<T | null> {
  if (useKV) {
    try {
      const result = await kv.get<T>(key);
      return result; // null means "key doesn't exist in KV" — that's valid, don't fall through
    } catch (err) {
      console.error(`KV Get failed for ${key}:`, err);
      // KV connection error — fall through to Redis or file
    }
  }
  if (useRedis && redisClient) {
    try {
      const val = await redisClient.get(key);
      return val ? JSON.parse(val) as T : null; // null means "key doesn't exist in Redis" — that's valid
    } catch (err) {
      console.error(`Redis Get failed for ${key}:`, err);
      // Redis connection error — fall through to file
    }
  }
  // Only use file system if NO persistent store (KV/Redis) is configured,
  // or if all configured stores had connection errors
  if (!useKV && !(useRedis && redisClient)) {
    try {
      const data = await fs.readFile(fileFallbackPath, 'utf-8');
      return JSON.parse(data) as T;
    } catch (err) {
      return null;
    }
  }
  return null;
}

// Unified Set helper — writes to all configured stores.
// File is always written as a local cache but is not authoritative when KV/Redis is active.
async function setDbKey<T>(key: string, value: T, fileFallbackPath: string): Promise<boolean> {
  let persisted = false;
  if (useKV) {
    try {
      await kv.set(key, value);
      persisted = true;
    } catch (err) {
      console.error(`KV Set failed for ${key}:`, err);
    }
  }
  if (useRedis && redisClient) {
    try {
      await redisClient.set(key, JSON.stringify(value));
      persisted = true;
    } catch (err) {
      console.error(`Redis Set failed for ${key}:`, err);
    }
  }
  // Always write file as local cache / fallback for local dev
  return new Promise((resolve) => {
    writeQueue = writeQueue.then(async () => {
      try {
        await fs.writeFile(fileFallbackPath, JSON.stringify(value, null, 2), 'utf-8');
        resolve(persisted || true);
      } catch (err) {
        console.error(`File write failed for ${fileFallbackPath}:`, err);
        resolve(persisted);
      }
    });
  });
}

let dbInitialized = false;

async function ensureDbInitialized() {
  if (dbInitialized) return;
  dbInitialized = true;

  // 1. Seed KV if needed (only if key doesn't exist yet)
  if (useKV) {
    try {
      const leads = await kv.get('leads');
      if (leads === null) {
        console.log('Initializing Vercel KV with seed database...');
        const srcDir = path.resolve(process.cwd(), 'seeds');
        
        let leadsSeed: Lead[] = [];
        try {
          const content = await fs.readFile(path.resolve(srcDir, 'leads.json'), 'utf-8');
          leadsSeed = JSON.parse(content);
        } catch {}
        await kv.set('leads', leadsSeed);

        let customersSeed: Customer[] = [];
        try {
          const content = await fs.readFile(path.resolve(srcDir, 'customers.json'), 'utf-8');
          customersSeed = JSON.parse(content);
        } catch {}
        await kv.set('customers', customersSeed);

        let messagesSeed: Message[] = [];
        try {
          const content = await fs.readFile(path.resolve(srcDir, 'messages.json'), 'utf-8');
          messagesSeed = JSON.parse(content);
        } catch {}
        await kv.set('messages', messagesSeed);
        
        await kv.set('analytics', []);
        console.log('Seeded Vercel KV successfully');
      }
    } catch (err) {
      console.error('Failed to initialize Vercel KV seeds:', err);
    }
  }
  
  // 2. Seed Redis if needed (only if key doesn't exist yet)
  if (useRedis && redisClient) {
    try {
      const leads = await redisClient.get('leads');
      if (leads === null) {
        console.log('Initializing Redis with seed database...');
        const srcDir = path.resolve(process.cwd(), 'seeds');
        
        let leadsSeed: Lead[] = [];
        try {
          const content = await fs.readFile(path.resolve(srcDir, 'leads.json'), 'utf-8');
          leadsSeed = JSON.parse(content);
        } catch {}
        await redisClient.set('leads', JSON.stringify(leadsSeed));

        let customersSeed: Customer[] = [];
        try {
          const content = await fs.readFile(path.resolve(srcDir, 'customers.json'), 'utf-8');
          customersSeed = JSON.parse(content);
        } catch {}
        await redisClient.set('customers', JSON.stringify(customersSeed));

        let messagesSeed: Message[] = [];
        try {
          const content = await fs.readFile(path.resolve(srcDir, 'messages.json'), 'utf-8');
          messagesSeed = JSON.parse(content);
        } catch {}
        await redisClient.set('messages', JSON.stringify(messagesSeed));
        
        await redisClient.set('analytics', JSON.stringify([]));
        console.log('Seeded Redis successfully');
      }
    } catch (err) {
      console.error('Failed to initialize Redis seeds:', err);
    }
  }

  // 3. Fallback/Local File Initialization — only when NO persistent store is active.
  // On Vercel with Redis, /tmp files are ephemeral and NOT authoritative.
  if (!useKV && !(useRedis && redisClient)) {
    try {
      await fs.mkdir(DB_DIR, { recursive: true });
    
    // Initialize leads database
    try {
      await fs.access(DB_FILE);
    } catch {
      await fs.writeFile(DB_FILE, JSON.stringify([], null, 2), 'utf-8');
    }

    // Initialize customers database
    try {
      await fs.access(CUSTOMERS_FILE);
      const customersData = await fs.readFile(CUSTOMERS_FILE, 'utf-8');
      const parsed = JSON.parse(customersData);
      if (parsed.length === 0) {
        // Auto-migrate unique clients from leads
        const leadsData = await fs.readFile(DB_FILE, 'utf-8');
        const leads = JSON.parse(leadsData) as Lead[];
        const uniqueCustomersMap = new Map<string, Customer>();
        
        let needsLeadsUpdate = false;
        for (const lead of leads) {
          if (lead.email) {
            const emailKey = lead.email.toLowerCase();
            if (!uniqueCustomersMap.has(emailKey)) {
              const customerId = lead.customerId || Math.random().toString(36).substr(2, 9);
              if (!lead.customerId) {
                lead.customerId = customerId;
                needsLeadsUpdate = true;
              }
              
              const mockFiles: CustomerFile[] = [
                {
                  id: Math.random().toString(36).substr(2, 9),
                  name: "kitchen_layout_schematics.pdf",
                  size: "1.4 MB",
                  uploadedAt: new Date(Date.now() - 2 * 24 * 3600000).toISOString(),
                  url: "#"
                },
                {
                  id: Math.random().toString(36).substr(2, 9),
                  name: "veining_selection_photo.jpg",
                  size: "2.8 MB",
                  uploadedAt: new Date(Date.now() - 1 * 24 * 3600000).toISOString(),
                  url: "#"
                }
              ];

              uniqueCustomersMap.set(emailKey, {
                id: customerId,
                createdAt: lead.createdAt || new Date().toISOString(),
                name: lead.name || "Customer",
                email: lead.email,
                phone: lead.phone || "",
                notes: lead.notes || "Imported from past lead inquiry.",
                files: mockFiles
              });
            } else {
              // Same customer, ensure lead has same customerId
              const existingCust = uniqueCustomersMap.get(emailKey)!;
              if (lead.customerId !== existingCust.id) {
                lead.customerId = existingCust.id;
                needsLeadsUpdate = true;
              }
            }
          }
        }
        
        if (uniqueCustomersMap.size > 0) {
          const initialCustomers = Array.from(uniqueCustomersMap.values());
          await fs.writeFile(CUSTOMERS_FILE, JSON.stringify(initialCustomers, null, 2), 'utf-8');
          if (needsLeadsUpdate) {
            await fs.writeFile(DB_FILE, JSON.stringify(leads, null, 2), 'utf-8');
          }
          console.log(`Auto-migration complete: Synced ${uniqueCustomersMap.size} customer records from leads database.`);
        }
      }
    } catch {
      await fs.writeFile(CUSTOMERS_FILE, JSON.stringify([], null, 2), 'utf-8');
    }

    // Initialize messages database
    try {
      await fs.access(MESSAGES_FILE);
      const data = await fs.readFile(MESSAGES_FILE, 'utf-8');
      if (JSON.parse(data).length === 0) {
        throw new Error('initialize');
      }
    } catch {
      const customersData = await fs.readFile(CUSTOMERS_FILE, 'utf-8');
      const customers = JSON.parse(customersData) as Customer[];
      const mockMessages: Message[] = [];
      
      for (const customer of customers) {
        const name = customer.name || "Customer";
        if (name.toLowerCase().includes("ken")) {
          mockMessages.push(
            {
              id: Math.random().toString(36).substr(2, 9),
              customerId: customer.id,
              channel: 'email',
              direction: 'inbound',
              sender: customer.email,
              text: "Hi Quartz International, I am planning a kitchen renovation in Markham. Do you have a rough timeline for measurements? I'm looking at standard or premium quartz.",
              timestamp: new Date(Date.now() - 3 * 3600000).toISOString()
            },
            {
              id: Math.random().toString(36).substr(2, 9),
              customerId: customer.id,
              channel: 'email',
              direction: 'outbound',
              sender: 'info@quartzinternational.ca',
              text: "Hi Ken, thanks for reaching out! We can schedule a technician for a precision site scan within 5-7 days. Are you looking to bundle countertops with custom cabinetry?",
              timestamp: new Date(Date.now() - 2.5 * 3600000).toISOString()
            },
            {
              id: Math.random().toString(36).substr(2, 9),
              customerId: customer.id,
              channel: 'whatsapp',
              direction: 'inbound',
              sender: customer.phone,
              text: "Hey! Ken here, following up from my email. Can we do WhatsApp instead? It's easier to send photos here. I'm thinking of standard layout with a mitered waterfall edge.",
              timestamp: new Date(Date.now() - 2 * 3600000).toISOString()
            },
            {
              id: Math.random().toString(36).substr(2, 9),
              customerId: customer.id,
              channel: 'whatsapp',
              direction: 'outbound',
              sender: 'info@quartzinternational.ca',
              text: "Absolutely, Ken! WhatsApp works great. We've received your dimensions. A waterfall edge looks stunning in modern layouts. I've drafted an initial proposal for you.",
              timestamp: new Date(Date.now() - 1.8 * 3600000).toISOString()
            },
            {
              id: Math.random().toString(36).substr(2, 9),
              customerId: customer.id,
              channel: 'sms',
              direction: 'inbound',
              sender: customer.phone,
              text: "Thanks, just saw the quote link. Monday at 10 AM works for the site measure. Let me know if that's confirmed.",
              timestamp: new Date(Date.now() - 1 * 3600000).toISOString(),
              isRead: false
            }
          );
        } else {
          mockMessages.push(
            {
              id: Math.random().toString(36).substr(2, 9),
              customerId: customer.id,
              channel: 'email',
              direction: 'inbound',
              sender: customer.email,
              text: `Hi, I submitted an estimate request for my kitchen countertop. Can you tell me if the price includes removal of my old countertops? Thank you. - ${name}`,
              timestamp: new Date(Date.now() - 5 * 3600000).toISOString()
            },
            {
              id: Math.random().toString(36).substr(2, 9),
              customerId: customer.id,
              channel: 'email',
              direction: 'outbound',
              sender: 'info@quartzinternational.ca',
              text: "Hello! Our base estimator provides options to add demolition and disposal. Standard removal is generally $400. Let me know if you would like me to add this to your proposal details.",
              timestamp: new Date(Date.now() - 4 * 3600000).toISOString()
            },
            {
              id: Math.random().toString(36).substr(2, 9),
              customerId: customer.id,
              channel: 'whatsapp',
              direction: 'inbound',
              sender: customer.phone || customer.name,
              text: "Yes please, let's include removal. Also interested in looking at TCE 4052 Pure White slabs in your showroom.",
              timestamp: new Date(Date.now() - 20 * 60000).toISOString(),
              isRead: false
            }
          );
        }
      }
      
      await fs.writeFile(MESSAGES_FILE, JSON.stringify(mockMessages, null, 2), 'utf-8');
      console.log(`Initialized messages database with ${mockMessages.length} mock communications.`);
    }

    // Initialize analytics database
    try {
      await fs.access(ANALYTICS_FILE);
      const data = await fs.readFile(ANALYTICS_FILE, 'utf-8');
      if (JSON.parse(data).length === 0) {
        throw new Error('seed');
      }
    } catch {
      // Seed analytics data for the last 30 days
      const seededEvents: AnalyticEvent[] = [];
      const paths = ['/', '/quartz-countertops-toronto', '/caesarstone', '/estimate', '/results'];
      const sources = ['google', 'facebook', 'direct', 'instagram'];
      const mediums = ['cpc', 'social', 'organic', 'referral'];
      
      const now = Date.now();
      // Generate events for 30 days
      for (let day = 30; day >= 0; day--) {
        const dayMs = now - day * 24 * 3600000;
        const numSessions = Math.floor(Math.random() * 8) + 4; // 4 to 11 sessions per day
        
        for (let s = 0; s < numSessions; s++) {
          const sessionId = 'session-' + Math.random().toString(36).substr(2, 9);
          // Random offset within the day
          const sessionTime = new Date(dayMs + Math.floor(Math.random() * 24 * 3600000)).toISOString();
          
          const isPaid = Math.random() > 0.5;
          const utmSource = isPaid ? sources[Math.floor(Math.random() * sources.length)] : undefined;
          const utmMedium = isPaid ? (utmSource === 'direct' ? 'direct' : mediums[Math.floor(Math.random() * mediums.length)]) : undefined;
          
          seededEvents.push({
            id: Math.random().toString(36).substr(2, 9),
            sessionId,
            type: 'session_start',
            timestamp: sessionTime,
            utmSource,
            utmMedium,
            utmCampaign: utmSource ? 'quartz-promo' : undefined
          });
          
          // Generate 1-5 page views for this session
          const numPages = Math.floor(Math.random() * 4) + 1;
          let pageTime = new Date(sessionTime).getTime();
          for (let p = 0; p < numPages; p++) {
            pageTime += Math.floor(Math.random() * 120000) + 30000; // 30s to 2.5m later
            seededEvents.push({
              id: Math.random().toString(36).substr(2, 9),
              sessionId,
              type: 'page_view',
              path: paths[Math.floor(Math.random() * paths.length)],
              timestamp: new Date(pageTime).toISOString()
            });
          }
        }
      }
      
      await fs.writeFile(ANALYTICS_FILE, JSON.stringify(seededEvents, null, 2), 'utf-8');
      console.log(`Seeded ${seededEvents.length} analytics events for the last 30 days.`);
    }

    } catch (error) {
      console.error('Failed to initialize local database:', error);
    }
  }
}

export async function getLeads(): Promise<Lead[]> {
  await ensureDbInitialized();
  const leads = await getDbKey<Lead[]>('leads', DB_FILE);
  return leads || [];
}

export async function saveLead(lead: Lead): Promise<boolean> {
  await ensureDbInitialized();
  const leads = await getLeads();
  leads.unshift(lead);
  return await setDbKey('leads', leads, DB_FILE);
}

export async function updateLead(id: string, updates: Partial<Lead>): Promise<boolean> {
  await ensureDbInitialized();
  const leads = await getLeads();
  const index = leads.findIndex(l => l.id === id);
  if (index === -1) return false;
  leads[index] = { ...leads[index], ...updates };
  return await setDbKey('leads', leads, DB_FILE);
}

export async function getCustomers(): Promise<Customer[]> {
  await ensureDbInitialized();
  const customers = await getDbKey<Customer[]>('customers', CUSTOMERS_FILE);
  return customers || [];
}

export async function saveCustomer(customer: Customer): Promise<boolean> {
  await ensureDbInitialized();
  const customers = await getCustomers();
  const exists = customers.some(c => c.id === customer.id || (c.email.toLowerCase() === customer.email.toLowerCase() && c.email !== ''));
  if (exists) return false;
  customers.unshift(customer);
  return await setDbKey('customers', customers, CUSTOMERS_FILE);
}

export async function updateCustomer(id: string, updates: Partial<Customer>): Promise<boolean> {
  await ensureDbInitialized();
  const customers = await getCustomers();
  const index = customers.findIndex(c => c.id === id);
  if (index === -1) return false;
  customers[index] = { ...customers[index], ...updates };
  return await setDbKey('customers', customers, CUSTOMERS_FILE);
}

export async function getMessages(): Promise<Message[]> {
  await ensureDbInitialized();
  const messages = await getDbKey<Message[]>('messages', MESSAGES_FILE);
  return messages || [];
}

export async function saveMessage(message: Message): Promise<boolean> {
  await ensureDbInitialized();
  const messages = await getMessages();
  messages.push(message);
  return await setDbKey('messages', messages, MESSAGES_FILE);
}

export async function markMessagesAsRead(customerId: string): Promise<boolean> {
  await ensureDbInitialized();
  const messages = await getMessages();
  let changed = false;
  for (const msg of messages) {
    if (msg.customerId === customerId && msg.isRead === false) {
      msg.isRead = true;
      changed = true;
    }
  }
  if (changed) {
    return await setDbKey('messages', messages, MESSAGES_FILE);
  }
  return true;
}

export interface AnalyticEvent {
  id: string;
  sessionId: string;
  type: 'session_start' | 'page_view';
  path?: string;
  timestamp: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
}

export async function getAnalyticsEvents(): Promise<AnalyticEvent[]> {
  await ensureDbInitialized();
  const events = await getDbKey<AnalyticEvent[]>('analytics', ANALYTICS_FILE);
  return events || [];
}

export async function saveAnalyticsEvent(event: AnalyticEvent): Promise<boolean> {
  await ensureDbInitialized();
  const events = await getAnalyticsEvents();
  events.push(event);
  return await setDbKey('analytics', events, ANALYTICS_FILE);
}
