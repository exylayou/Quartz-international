import React from 'react';

// Load mock leads from database to verify with real database records
import fs from 'fs';
import path from 'path';

const leadsPath = path.resolve(process.cwd(), 'data/leads.json');
const customersPath = path.resolve(process.cwd(), 'data/customers.json');
const messagesPath = path.resolve(process.cwd(), 'data/messages.json');

const leads = JSON.parse(fs.readFileSync(leadsPath, 'utf-8'));
const customers = JSON.parse(fs.readFileSync(customersPath, 'utf-8'));
const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf-8'));

// Precise order of useState hooks inside src/pages/Admin.tsx
const stateKeys = [
  'isAuthenticated', 'secret', 'leads', 'loading', 'error', 'searchQuery', 'selectedLead',
  'quoteItems', 'quoteNumber', 'quoteStatus', 'quoteDiscount', 'quoteTaxRate', 'savingQuote', 'copied',
  'activeTab', 'adSpend', 'closeRate', 'customers', 'loadingCustomers', 'quoteInvoiceFilter',
  'messages', 'selectedCustomerId', 'messageInput', 'messageChannel', 'inboxChannelFilter',
  'customerDetailTab', 'newMockFileName', 'uploadingMockFile', 'sidebarNotes', 'savingSidebarNotes', 'showMobileSidebar',
  'isAddCustomerOpen', 'isEditCustomerOpen', 'editingCustomer', 'customerFormName', 'customerFormEmail',
  'customerFormPhone', 'customerFormNotes', 'customerSaving', 'isCreateQuoteOpen', 'quoteWizardStep',
  'selectedQuoteCustomer', 'customerSearchQuery', 'specIncludeCountertops', 'specLayout', 'specQuartzLevel',
  'specSelectedSlab', 'specCountertopSqFt', 'specCountertopLinearFt', 'specIslandType', 'specCabinetLinearFt',
  'specCabinetStyle', 'specDeliveryMethod', 'specCabinetStyleName', 'specExtras', 'specCabinetExtras',
  'specTimeline', 'wizardQuoteNumber', 'wizardQuoteItems', 'wizardQuoteStatus', 'wizardQuoteDiscount',
  'wizardQuoteTaxRate', 'creatingQuote'
];

const mockStateValues: Record<string, any> = {
  isAuthenticated: true,
  secret: 'qi-admin-2026',
  leads: leads,
  loading: false,
  error: '',
  searchQuery: '',
  selectedLead: null,
  quoteItems: [],
  quoteNumber: '',
  quoteStatus: 'draft',
  quoteDiscount: 0,
  quoteTaxRate: 0.13,
  savingQuote: false,
  copied: false,
  activeTab: 'inbox',
  adSpend: 1500,
  closeRate: 15,
  customers: customers,
  loadingCustomers: false,
  quoteInvoiceFilter: 'all',
  messages: messages,
  selectedCustomerId: null,
  messageInput: '',
  messageChannel: 'whatsapp',
  inboxChannelFilter: 'all',
  customerDetailTab: 'spec',
  newMockFileName: '',
  uploadingMockFile: false,
  sidebarNotes: '',
  savingSidebarNotes: false,
  showMobileSidebar: false,
  isAddCustomerOpen: false,
  isEditCustomerOpen: false,
  editingCustomer: null,
  customerFormName: '',
  customerFormEmail: '',
  customerFormPhone: '',
  customerFormNotes: '',
  customerSaving: false,
  isCreateQuoteOpen: false,
  quoteWizardStep: 1,
  selectedQuoteCustomer: null,
  customerSearchQuery: '',
  specIncludeCountertops: true,
  specLayout: 'L-Shape',
  specQuartzLevel: 'premium',
  specSelectedSlab: '',
  specCountertopSqFt: 35,
  specCountertopLinearFt: 20,
  specIslandType: 'none',
  specCabinetLinearFt: 20,
  specCabinetStyle: 'premium',
  specDeliveryMethod: 'installed',
  specCabinetStyleName: '',
  specExtras: { sink: false, cooktop: false, backsplash: false, waterfall: false, removal: false },
  specCabinetExtras: { island: false, pantry: false, decorativePanels: false },
  specTimeline: '1-3-months',
  wizardQuoteNumber: '',
  wizardQuoteItems: [],
  wizardQuoteStatus: 'draft',
  wizardQuoteDiscount: 0,
  wizardQuoteTaxRate: 0.13,
  creatingQuote: false
};

// Override React hooks
let stateIndex = 0;

React.useState = ((initialValue: any) => {
  const key = stateKeys[stateIndex++];
  if (!key) {
    return [initialValue, (newVal: any) => {}];
  }
  const val = mockStateValues[key] !== undefined ? mockStateValues[key] : initialValue;
  const setter = (newVal: any) => {
    mockStateValues[key] = typeof newVal === 'function' ? newVal(mockStateValues[key]) : newVal;
  };
  return [val, setter];
}) as any;

React.useRef = ((initialValue: any) => {
  return { current: initialValue };
}) as any;

React.useMemo = ((fn: any) => {
  return fn();
}) as any;

React.useEffect = (() => {}) as any;

console.log("React hooks successfully mocked with 63 explicit states!");

// Import Admin component
import Admin from '../src/pages/Admin';

console.log("Admin component imported successfully. Attempting to render as authenticated...");

try {
  stateIndex = 0; // Reset state index for rendering
  const result = Admin();
  console.log("SUCCESS: Rendered authenticated Admin dashboard without crashing!");
} catch (err: any) {
  console.error("CRASH DETECTED during authenticated render:", err);
}

// Test with selected lead rendering for every lead in the database
console.log("\nAttempting to render with a selected lead...");
for (const lead of leads) {
  try {
    stateIndex = 0;
    mockStateValues.selectedLead = lead;
    // Preset values that would get initialized by useEffect in a real component
    mockStateValues.quoteItems = lead.quoteItems || [];
    mockStateValues.quoteNumber = lead.quoteNumber || '';
    mockStateValues.quoteStatus = lead.quoteStatus || 'draft';
    mockStateValues.quoteDiscount = lead.quoteDiscount || 0;
    mockStateValues.quoteTaxRate = lead.quoteTaxRate ?? 0.13;

    const result = Admin();
    console.log(`Rendered successfully with lead ID: ${lead.id}`);
  } catch (err: any) {
    console.error(`CRASH DETECTED for lead ID ${lead.id}:`, err);
  }
}
