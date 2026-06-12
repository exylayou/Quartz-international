import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Eye, 
  Download, 
  Search, 
  Calendar, 
  User, 
  Mail, 
  Phone, 
  TrendingUp,
  Calculator as CalcIcon, 
  X, 
  Users, 
  FileText, 
  CheckCircle, 
  Plus, 
  Copy, 
  Trash2, 
  Edit, 
  Check,
  Bot,
  MessageCircle,
  MessageSquare,
  Send,
  ChevronRight,
  ChevronLeft,
  FolderOpen,
  Clock,
  Paperclip
} from 'lucide-react';
import { PRICING_CONSTANTS } from '../constants';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [secret, setSecret] = React.useState('');
  const [leads, setLeads] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedLead, setSelectedLead] = React.useState<any | null>(null);

  const [quoteItems, setQuoteItems] = React.useState<any[]>([]);
  const [quoteNumber, setQuoteNumber] = React.useState('');
  const [quoteStatus, setQuoteStatus] = React.useState<'draft' | 'sent' | 'approved' | 'invoiced' | 'paid'>('draft');
  const [quoteDiscount, setQuoteDiscount] = React.useState(0);
  const [quoteTaxRate, setQuoteTaxRate] = React.useState(0.13);
  const [savingQuote, setSavingQuote] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  // Multi-tab workspace state
  const [activeTab, setActiveTab] = React.useState<'inbox' | 'leads' | 'quotes' | 'customers' | 'analytics'>('inbox');
  const [adSpend, setAdSpend] = React.useState(1500);
  const [closeRate, setCloseRate] = React.useState(15);
  const [customers, setCustomers] = React.useState<any[]>([]);
  const [loadingCustomers, setLoadingCustomers] = React.useState(false);
  const [quoteInvoiceFilter, setQuoteInvoiceFilter] = React.useState<'all' | 'quotes' | 'invoices'>('all');

  // Unified Inbox state
  const [messages, setMessages] = React.useState<any[]>([]);
  const [selectedCustomerId, setSelectedCustomerId] = React.useState<string | null>(null);
  const [messageInput, setMessageInput] = React.useState('');
  const [messageChannel, setMessageChannel] = React.useState<'email' | 'sms' | 'whatsapp'>('whatsapp');
  const [inboxChannelFilter, setInboxChannelFilter] = React.useState<'all' | 'email' | 'sms' | 'whatsapp'>('all');
  
  // Sidebar Detail Page tab state
  const [customerDetailTab, setCustomerDetailTab] = React.useState<'spec' | 'quotes' | 'files' | 'notes' | 'contact'>('spec');
  const [newMockFileName, setNewMockFileName] = React.useState('');
  const [uploadingMockFile, setUploadingMockFile] = React.useState(false);
  const [sidebarNotes, setSidebarNotes] = React.useState('');
  const [savingSidebarNotes, setSavingSidebarNotes] = React.useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);


  // Customer Manager Form States
  const [isAddCustomerOpen, setIsAddCustomerOpen] = React.useState(false);
  const [isEditCustomerOpen, setIsEditCustomerOpen] = React.useState(false);
  const [editingCustomer, setEditingCustomer] = React.useState<any | null>(null);
  const [customerFormName, setCustomerFormName] = React.useState('');
  const [customerFormEmail, setCustomerFormEmail] = React.useState('');
  const [customerFormPhone, setCustomerFormPhone] = React.useState('');
  const [customerFormNotes, setCustomerFormNotes] = React.useState('');
  const [customerSaving, setCustomerSaving] = React.useState(false);

  // Quote Creation Wizard States
  const [isCreateQuoteOpen, setIsCreateQuoteOpen] = React.useState(false);
  const [quoteWizardStep, setQuoteWizardStep] = React.useState(1);
  const [selectedQuoteCustomer, setSelectedQuoteCustomer] = React.useState<any | null>(null);
  const [customerSearchQuery, setCustomerSearchQuery] = React.useState('');
  
  // Spec fields for Quote prepopulation
  const [specIncludeCountertops, setSpecIncludeCountertops] = React.useState(true);
  const [specLayout, setSpecLayout] = React.useState('L-Shape');
  const [specQuartzLevel, setSpecQuartzLevel] = React.useState<'standard' | 'premium' | 'luxury'>('premium');
  const [specSelectedSlab, setSpecSelectedSlab] = React.useState('');
  const [specCountertopSqFt, setSpecCountertopSqFt] = React.useState(35);
  const [specCountertopLinearFt, setSpecCountertopLinearFt] = React.useState(20);
  const [specIslandType, setSpecIslandType] = React.useState<'none' | 'small' | 'large' | 'waterfall'>('none');
  const specHasIsland = specIslandType !== 'none';
  const [specIncludeCabinets, setSpecIncludeCabinets] = React.useState(false);

  const handleCountertopLengthChange = (length: number) => {
    setSpecCountertopLinearFt(length);
    const wallSF = (length * 2) - 5;
    const addOnSF = { none: 0, small: 12, large: 20, waterfall: 35 }[specIslandType];
    setSpecCountertopSqFt(Math.max(0, Math.round(wallSF + addOnSF)));
  };

  const handleIslandTypeChange = (type: 'none' | 'small' | 'large' | 'waterfall') => {
    setSpecIslandType(type);
    const wallSF = (specCountertopLinearFt * 2) - 5;
    const addOnSF = { none: 0, small: 12, large: 20, waterfall: 35 }[type];
    setSpecCountertopSqFt(Math.max(0, Math.round(wallSF + addOnSF)));
  };
  const [specCabinetLinearFt, setSpecCabinetLinearFt] = React.useState(20);
  const [specCabinetStyle, setSpecCabinetStyle] = React.useState<'essential' | 'premium' | 'elite'>('premium');
  const [specDeliveryMethod, setSpecDeliveryMethod] = React.useState<'rta' | 'rti' | 'installed'>('installed');
  const [specCabinetStyleName, setSpecCabinetStyleName] = React.useState('');
  const [specExtras, setSpecExtras] = React.useState({
    sink: false,
    cooktop: false,
    backsplash: false,
    waterfall: false,
    removal: false
  });
  const [specCabinetExtras, setSpecCabinetExtras] = React.useState({
    island: false,
    pantry: false,
    decorativePanels: false
  });
  const [specTimeline, setSpecTimeline] = React.useState('1-3-months');

  // Wizard Quote Line Items Form
  const [wizardQuoteNumber, setWizardQuoteNumber] = React.useState('');
  const [wizardQuoteItems, setWizardQuoteItems] = React.useState<any[]>([]);
  const [wizardQuoteStatus, setWizardQuoteStatus] = React.useState<'draft' | 'sent' | 'approved' | 'invoiced' | 'paid'>('draft');
  const [wizardQuoteDiscount, setWizardQuoteDiscount] = React.useState(0);
  const [wizardQuoteTaxRate, setWizardQuoteTaxRate] = React.useState(0.13);
  const [creatingQuote, setCreatingQuote] = React.useState(false);

  // Stats calculations
  const totalLeads = leads.length;
  const avgProjectSize = Math.round(leads.reduce((acc, l) => acc + (l.countertopSqFt || 0), 0) / (leads.length || 1));
  const newLeads24h = leads.filter(l => new Date(l.createdAt) > new Date(Date.now() - 86400000)).length;

  const quotesList = leads.filter(l => l.quoteNumber);
  const activeQuotesValue = Math.round(quotesList.filter(q => ['draft', 'sent', 'approved'].includes(q.quoteStatus || '')).reduce((acc, q) => acc + (q.quoteTotal || 0), 0));
  const closedInvoicesValue = Math.round(quotesList.filter(q => ['invoiced', 'paid'].includes(q.quoteStatus || '')).reduce((acc, q) => acc + (q.quoteTotal || 0), 0));
  const quotesConversion = totalLeads ? Math.round((quotesList.length / totalLeads) * 100) : 0;

  const totalCustomers = customers.length;
  const newCustomersMonth = customers.filter(c => new Date(c.createdAt) > new Date(Date.now() - 30 * 86400000)).length;
  const customersWithLeadsCount = customers.filter(c => leads.some(l => l.customerId === c.id || (l.email && c.email && l.email.toLowerCase() === c.email.toLowerCase()))).length;
  const customerApprovedConversion = customers.length ? Math.round((leads.filter(l => l.quoteNumber && l.quoteStatus === 'approved').length / customers.length) * 100) : 0;

  // Google Ads UTM & User Behavior Analytics Calculations
  const analyticsData = React.useMemo(() => {
    // 1. Google Ads UTM & attribution counts
    const adAttributedLeads = leads.filter(l => {
      const src = (l.utmSource || '').toLowerCase();
      const med = (l.utmMedium || '').toLowerCase();
      return src.includes('google') || src.includes('ad') || med === 'cpc' || l.gclid;
    });
    const adAttributedLeadsCount = adAttributedLeads.length;
    const attributionRate = totalLeads ? Math.round((adAttributedLeadsCount / totalLeads) * 100) : 0;
    
    // 2. Paid Pipeline Opportunity (using average project value or estimate totals)
    const paidPipelineValue = adAttributedLeads.reduce((acc, l) => acc + (l.totalCostHigh || 0), 0);
    const avgAdLeadValue = adAttributedLeadsCount ? Math.round(paidPipelineValue / adAttributedLeadsCount) : 0;
    
    // 3. Channels split
    const channelsMap: Record<string, { count: number; pipeline: number }> = {};
    leads.forEach(l => {
      const source = l.utmSource || 'organic / direct';
      const medium = l.utmMedium || '';
      const key = `${source}${medium ? ' (' + medium + ')' : ''}`;
      if (!channelsMap[key]) {
        channelsMap[key] = { count: 0, pipeline: 0 };
      }
      channelsMap[key].count += 1;
      channelsMap[key].pipeline += (l.totalCostHigh || 0);
    });
    
    const channels = Object.entries(channelsMap).map(([name, data]) => ({
      name,
      count: data.count,
      pipeline: data.pipeline,
      percentage: totalLeads ? Math.round((data.count / totalLeads) * 100) : 0
    })).sort((a, b) => b.count - a.count);

    // 4. Campaigns split
    const campaignsMap: Record<string, { count: number; pipeline: number }> = {};
    leads.forEach(l => {
      if (l.utmCampaign) {
        if (!campaignsMap[l.utmCampaign]) {
          campaignsMap[l.utmCampaign] = { count: 0, pipeline: 0 };
        }
        campaignsMap[l.utmCampaign].count += 1;
        campaignsMap[l.utmCampaign].pipeline += (l.totalCostHigh || 0);
      }
    });
    
    const campaigns = Object.entries(campaignsMap).map(([name, data]) => ({
      name,
      count: data.count,
      pipeline: data.pipeline
    })).sort((a, b) => b.count - a.count);

    // 5. Keywords split
    const keywordsMap: Record<string, { count: number; pipeline: number }> = {};
    leads.forEach(l => {
      if (l.utmTerm) {
        if (!keywordsMap[l.utmTerm]) {
          keywordsMap[l.utmTerm] = { count: 0, pipeline: 0 };
        }
        keywordsMap[l.utmTerm].count += 1;
        keywordsMap[l.utmTerm].pipeline += (l.totalCostHigh || 0);
      }
    });
    
    const keywords = Object.entries(keywordsMap).map(([name, data]) => ({
      name,
      count: data.count,
      pipeline: data.pipeline
    })).sort((a, b) => b.count - a.count);

    // 6. User page behavior analytics
    let totalPageViews = 0;
    let totalSessionDuration = 0;
    let totalInteractions = 0;
    let leadsWithBehavior = 0;
    const landingPagesMap: Record<string, number> = {};

    leads.forEach(l => {
      if (l.behavior) {
        leadsWithBehavior += 1;
        totalPageViews += l.behavior.pageViews?.length || 0;
        totalSessionDuration += l.behavior.timeSpentMs || 0;
        totalInteractions += l.behavior.totalInteractions || 0;
        
        if (l.behavior.pageViews && l.behavior.pageViews.length > 0) {
          const landing = l.behavior.pageViews[0].path?.split('?')[0] || '/';
          landingPagesMap[landing] = (landingPagesMap[landing] || 0) + 1;
        }
      }
    });

    const avgPageViews = leadsWithBehavior ? (totalPageViews / leadsWithBehavior).toFixed(1) : '0';
    const avgSessionDurationSeconds = leadsWithBehavior ? Math.round((totalSessionDuration / leadsWithBehavior) / 1000) : 0;
    const avgInteractions = leadsWithBehavior ? (totalInteractions / leadsWithBehavior).toFixed(1) : '0';

    const landingPages = Object.entries(landingPagesMap).map(([path, count]) => ({
      path,
      count,
      percentage: totalLeads ? Math.round((count / totalLeads) * 100) : 0
    })).sort((a, b) => b.count - a.count);

    return {
      adAttributedLeadsCount,
      attributionRate,
      paidPipelineValue,
      avgAdLeadValue,
      channels,
      campaigns,
      keywords,
      avgPageViews,
      avgSessionDurationSeconds,
      avgInteractions,
      landingPages,
      leadsWithBehavior
    };
  }, [leads, totalLeads]);

  // Simulator computations
  const activeAdLeads = analyticsData.adAttributedLeadsCount;
  const baselineCpl = activeAdLeads > 0 ? Math.round(1500 / activeAdLeads) : 85;
  const projectedLeadsCount = Math.max(1, Math.round(adSpend / baselineCpl));
  const cpl = Math.round(adSpend / projectedLeadsCount);
  const closingRateDecimal = closeRate / 100;
  const projectedCustomersCount = Math.round(projectedLeadsCount * closingRateDecimal);
  const avgRevenueValue = analyticsData.avgAdLeadValue > 0 ? analyticsData.avgAdLeadValue : 4500;
  const projectedRevenue = projectedCustomersCount * avgRevenueValue;
  const roas = adSpend > 0 ? (projectedRevenue / adSpend).toFixed(1) : '0.0';
  const cac = projectedCustomersCount > 0 ? Math.round(adSpend / projectedCustomersCount) : adSpend;

  const unreadMessagesCount = React.useMemo(() => {
    const unreadCustomerIds = new Set(
      messages.filter(m => m.isRead === false && m.direction === 'inbound').map(m => m.customerId)
    );
    return unreadCustomerIds.size;
  }, [messages]);
  const formatTime = (isoString?: string) => {
    if (!isoString) return '';
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDateTime = (isoString?: string) => {
    if (!isoString) return '';
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleString([], {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (isoString?: string) => {
    if (!isoString) return '';
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString();
  };

  const formatFullDate = (isoString?: string) => {
    if (!isoString) return 'N/A';
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return 'N/A';
    return `${d.toLocaleDateString()} at ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };


  const exportToCSV = () => {
    if (leads.length === 0) return;
    
    const headers = [
      'Date', 'Name', 'Email', 'Phone', 'Notes', 'Layout', 'Quartz Level', 
      'Slab Selection', 'Countertop Size (sq ft)', 'Island Type', 'Countertops Included', 'Include Cabinets', 
      'Cabinet Linear Ft', 'Cabinet Style', 'Timeline', 'Extras', 'Cabinet Extras', 
      'Countertop Cost Low', 'Countertop Cost High', 'Cabinet Cost Low', 'Cabinet Cost High', 
      'Total Cost Low', 'Total Cost High'
    ];

    const rows = leads.map(l => [
      new Date(l.createdAt).toLocaleDateString(),
      l.name || '',
      l.email || '',
      l.phone || '',
      l.notes || '',
      l.layout || '',
      l.quartzLevel || '',
      l.selectedSlab || '',
      l.countertopSqFt || 0,
      l.islandType || (l.hasIsland ? 'Yes' : 'No'),
      l.includeCountertops !== false ? 'Yes' : 'No',
      l.includeCabinets ? 'Yes' : 'No',
      l.cabinetLinearFt || 0,
      l.cabinetStyle || '',
      l.timeline || '',
      Array.isArray(l.extras) ? l.extras.join('; ') : (typeof l.extras === 'object' && l.extras ? Object.keys(l.extras).filter(k => (l.extras as any)[k] === true).join('; ') : ''),
      Array.isArray(l.cabinetExtras) ? l.cabinetExtras.join('; ') : (typeof l.cabinetExtras === 'object' && l.cabinetExtras ? Object.keys(l.cabinetExtras).filter(k => (l.cabinetExtras as any)[k] === true).join('; ') : ''),
      l.countertopCostLow || 0,
      l.countertopCostHigh || 0,
      l.cabinetCostLow || 0,
      l.cabinetCostHigh || 0,
      l.totalCostLow || 0,
      l.totalCostHigh || 0
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.map(val => `"${String(val).replace(/"/g, '""')}"`).join(','))].join('\n');
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Quartz_International_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(lead => {
    const q = searchQuery.toLowerCase();
    return (
      (lead.name || '').toLowerCase().includes(q) ||
      (lead.email || '').toLowerCase().includes(q) ||
      (lead.phone || '').toLowerCase().includes(q)
    );
  });

  const filteredQuotes = leads.filter(lead => {
    if (!lead.quoteNumber) return false;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      (lead.quoteNumber || '').toLowerCase().includes(q) ||
      (lead.name || '').toLowerCase().includes(q) ||
      (lead.email || '').toLowerCase().includes(q) ||
      (lead.phone || '').toLowerCase().includes(q);
    
    if (!matchesSearch) return false;
    
    if (quoteInvoiceFilter === 'quotes') {
      return ['draft', 'sent', 'approved'].includes(lead.quoteStatus || '');
    }
    if (quoteInvoiceFilter === 'invoices') {
      return ['invoiced', 'paid'].includes(lead.quoteStatus || '');
    }
    return true; // 'all'
  });

  const filteredCustomers = customers.filter(c => {
    const q = searchQuery.toLowerCase();
    return (
      (c.name || '').toLowerCase().includes(q) ||
      (c.email || '').toLowerCase().includes(q) ||
      (c.phone || '').toLowerCase().includes(q)
    );
  });

  const fetchCustomers = async (secretKey: string) => {
    try {
      const response = await fetch('/api/customers', {
        headers: {
          'x-admin-secret': secretKey
        }
      });
      if (response.ok) {
        const data = await response.json();
        setCustomers(data);
      }
    } catch (err) {
      console.error('Failed to fetch customers', err);
    }
  };

  const fetchMessages = async (secretKey: string) => {
    try {
      const response = await fetch('/api/messages', {
        headers: {
          'x-admin-secret': secretKey
        }
      });
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      }
    } catch (err) {
      console.error('Failed to fetch messages', err);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/leads', {
        headers: {
          'x-admin-secret': secret
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setLeads(data);
        setIsAuthenticated(true);
        localStorage.setItem('admin_secret', secret);
        await fetchCustomers(secret);
        await fetchMessages(secret);
      } else {
        setError('Invalid secret key');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const savedSecret = localStorage.getItem('admin_secret');
    if (savedSecret === 'aura-admin-2026') {
      localStorage.removeItem('admin_secret');
    } else if (savedSecret) {
      setSecret(savedSecret);
      setLoading(true);
      fetch('/api/leads', {
        headers: { 'x-admin-secret': savedSecret }
      }).then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          setLeads(data);
          setIsAuthenticated(true);
          await fetchCustomers(savedSecret);
          await fetchMessages(savedSecret);
        } else {
          localStorage.removeItem('admin_secret');
        }
      }).catch(() => {
        localStorage.removeItem('admin_secret');
      }).finally(() => {
        setLoading(false);
      });
    }
  }, []);

    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedLead(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    React.useEffect(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [messages, selectedCustomerId]);

    React.useEffect(() => {
      if (selectedCustomerId) {
        const activeCustomer = customers.find(c => c.id === selectedCustomerId);
        setSidebarNotes(activeCustomer?.notes || '');
      } else {
        setSidebarNotes('');
      }
    }, [selectedCustomerId, customers]);

    const handleSaveSidebarNotes = async () => {
      if (!selectedCustomerId) return;
      setSavingSidebarNotes(true);
      try {
        const activeCustomer = customers.find(c => c.id === selectedCustomerId);
        if (!activeCustomer) return;

        const response = await fetch(`/api/customers/${selectedCustomerId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-secret': secret
          },
          body: JSON.stringify({
            name: activeCustomer.name,
            email: activeCustomer.email,
            phone: activeCustomer.phone,
            notes: sidebarNotes
          })
        });

        if (response.ok) {
          setCustomers(prev => prev.map(c => c.id === selectedCustomerId ? { ...c, notes: sidebarNotes } : c));
          // Propagate notes to leads
          setLeads(prev => prev.map(l => {
            if (l.customerId === selectedCustomerId || (activeCustomer.email && l.email?.toLowerCase() === activeCustomer.email.toLowerCase())) {
              return { ...l, notes: sidebarNotes };
            }
            return l;
          }));
        } else {
          alert('Failed to update internal CRM notes');
        }
      } catch (err) {
        console.error('Error saving notes', err);
      } finally {
        setSavingSidebarNotes(false);
      }
    };


  const handleSelectCustomerThread = async (customerId: string) => {
    setSelectedCustomerId(customerId);
    setCustomerDetailTab('spec');
    setShowMobileSidebar(false);
    
    // Optimistic UI read mark
    setMessages(prev => prev.map(m => m.customerId === customerId ? { ...m, isRead: true } : m));
    
    try {
      await fetch('/api/messages/read', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': secret
        },
        body: JSON.stringify({ customerId })
      });
    } catch (err) {
      console.error('Failed to mark messages as read', err);
    }
  };

  const handleSendOutboundMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCustomerId || !messageInput.trim()) return;

    const textToSend = messageInput.trim();
    setMessageInput('');

    // Optimistic outbound UI push
    const tempMsgId = 'temp-' + Math.random().toString(36).substr(2, 9);
    const newMsgObj = {
      id: tempMsgId,
      customerId: selectedCustomerId,
      channel: messageChannel,
      direction: 'outbound',
      sender: 'info@quartzinternational.ca',
      text: textToSend,
      timestamp: new Date().toISOString()
    };
    setMessages(prev => [...prev, newMsgObj]);

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': secret
        },
        body: JSON.stringify({
          customerId: selectedCustomerId,
          channel: messageChannel,
          text: textToSend
        })
      });

      if (response.ok) {
        // Fetch new messages to capture client's automatic reply simulation
        setTimeout(async () => {
          await fetchMessages(secret);
        }, 1600);
      } else {
        alert('Failed to send message');
      }
    } catch (err) {
      console.error('Error sending message', err);
    }
  };

  const handleAddMockFile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCustomerId || !newMockFileName.trim()) return;

    setUploadingMockFile(true);
    const fileName = newMockFileName.trim();
    setNewMockFileName('');

    try {
      const response = await fetch(`/api/customers/${selectedCustomerId}/files`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': secret
        },
        body: JSON.stringify({
          fileName,
          fileSize: `${(Math.random() * 3 + 0.5).toFixed(1)} MB`
        })
      });

      if (response.ok) {
        const data = await response.json();
        setCustomers(prev => prev.map(c => {
          if (c.id === selectedCustomerId) {
            const files = c.files || [];
            return { ...c, files: [data.file, ...files] };
          }
          return c;
        }));
      } else {
        alert('Failed to upload file');
      }
    } catch (err) {
      console.error('Error uploading file', err);
    } finally {
      setUploadingMockFile(false);
    }
  };

    React.useEffect(() => {
      if (selectedLead) {
        setQuoteNumber(selectedLead.quoteNumber || '');
        setQuoteItems(selectedLead.quoteItems || []);
        setQuoteStatus(selectedLead.quoteStatus || 'draft');
        setQuoteDiscount(selectedLead.quoteDiscount || 0);
        setQuoteTaxRate(selectedLead.quoteTaxRate ?? 0.13);
      } else {
        setQuoteNumber('');
        setQuoteItems([]);
        setQuoteStatus('draft');
        setQuoteDiscount(0);
        setQuoteTaxRate(0.13);
      }
      setCopied(false);
    }, [selectedLead]);

    const generateInitialQuote = () => {
      if (!selectedLead) return;
      
      const items: any[] = [];
      
      // 1. Countertop fabrication & installation
      if (selectedLead.countertopSqFt) {
        const countertopAvg = Math.round(((selectedLead.countertopCostLow || 0) + (selectedLead.countertopCostHigh || 0)) / 2);
        const unitPrice = Math.round(countertopAvg / selectedLead.countertopSqFt);
        items.push({
          description: `${selectedLead.selectedSlab || selectedLead.quartzLevel || 'Quartz'} Countertop Fabrication & Installation`,
          quantity: selectedLead.countertopSqFt,
          unitPrice: unitPrice,
          total: countertopAvg
        });
      }
      
      // 2. Cabinets
      if (selectedLead.includeCabinets && selectedLead.cabinetLinearFt) {
        const cabinetAvg = Math.round(((selectedLead.cabinetCostLow || 0) + (selectedLead.cabinetCostHigh || 0)) / 2);
        const unitPrice = Math.round(cabinetAvg / selectedLead.cabinetLinearFt);
        const styleName = selectedLead.cabinetStyle === 'essential' ? 'Essential Collection' :
                          selectedLead.cabinetStyle === 'premium' ? 'Premium Collection' :
                          selectedLead.cabinetStyle === 'elite' ? 'Elite Collection' :
                          selectedLead.cabinetStyle === 'flat' ? 'Flat Panel' : 
                          selectedLead.cabinetStyle === 'slim_shaker' ? 'Slim Shaker' : 
                          selectedLead.cabinetStyle === 'shaker' ? 'Shaker' : 
                          selectedLead.cabinetStyle === 'matte' ? 'Matte / Textured' : 
                          selectedLead.cabinetStyle === 'gloss' ? 'High Gloss' : selectedLead.cabinetStyle;
        items.push({
          description: `Cabinet Supply & Installation (${styleName})`,
          quantity: selectedLead.cabinetLinearFt,
          unitPrice: unitPrice,
          total: cabinetAvg
        });
      }

      // 3. Countertop Extras (Sinks, Waterfall, etc.)
      if (selectedLead.extras && selectedLead.extras.length > 0) {
        selectedLead.extras.forEach((extra: string) => {
          let label = extra;
          let price = 0;
          
          if (extra === 'sink') { label = 'Undermount Sink Cutout & Installation'; price = 350; }
          else if (extra === 'cooktop') { label = 'Cooktop Cutout & Polish'; price = 250; }
          else if (extra === 'backsplash') { label = 'Full Height Slab Backsplash Installation'; price = 1200; }
          else if (extra === 'waterfall') { label = 'Mitered Waterfall Edge Ends (Pair)'; price = 1500; }
          else if (extra === 'removal') { label = 'Old Countertop Demolition & Disposal'; price = 400; }
          else {
            label = extra.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            price = 300;
          }

          items.push({
            description: label,
            quantity: 1,
            unitPrice: price,
            total: price
          });
        });
      }

      // 4. Cabinet Extras
      if (selectedLead.cabinetExtras && selectedLead.cabinetExtras.length > 0) {
        selectedLead.cabinetExtras.forEach((extra: string) => {
          let label = extra;
          let price = 0;
          
          if (extra === 'pantry') { label = 'Tall Utility/Pantry Cabinet Modification'; price = 850; }
          else if (extra === 'island') { label = 'Custom Matching Kitchen Island Cabinet Frame'; price = 1200; }
          else if (extra === 'decorativePanels') { label = 'Decorative Cabinet Matching End Panels'; price = 300; }
          else if (extra === 'trashPullout') { label = 'Integrated Double Trash Bin Pullout'; price = 250; }
          else if (extra === 'spicePullout') { label = 'Base Cabinets Integrated Spice Pullout Drawer'; price = 200; }
          else if (extra === 'lazySusan') { label = 'Corner Cabinet Magic Corner / Lazy Susan Organizer'; price = 450; }
          else {
            label = extra.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
            price = 350;
          }

          items.push({
            description: label,
            quantity: 1,
            unitPrice: price,
            total: price
          });
        });
      }

      // Generate random quote number
      const randNum = Math.floor(1000 + Math.random() * 9000);
      setQuoteNumber(`QI-2026-${randNum}`);
      setQuoteItems(items);
      setQuoteStatus('draft');
    };

    const saveQuote = async () => {
      if (!selectedLead || !quoteNumber) return;
      setSavingQuote(true);
      
      const subtotal = quoteItems.reduce((acc, item) => acc + (item.total || 0), 0);
      const tax = Math.round((subtotal - quoteDiscount) * quoteTaxRate);
      const total = subtotal - quoteDiscount + tax;

      try {
        const response = await fetch(`/api/leads/${selectedLead.id}/quote`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-secret': secret
          },
          body: JSON.stringify({
            quoteStatus,
            quoteNumber,
            quoteItems,
            quoteTaxRate,
            quoteDiscount,
            quoteSubtotal: subtotal,
            quoteTax: tax,
            quoteTotal: total
          })
        });

        if (response.ok) {
          const updatedLeads = leads.map(l => {
            if (l.id === selectedLead.id) {
              return {
                ...l,
                quoteStatus,
                quoteNumber,
                quoteItems,
                quoteTaxRate,
                quoteDiscount,
                quoteSubtotal: subtotal,
                quoteTax: tax,
                quoteTotal: total
              };
            }
            return l;
          });
          setLeads(updatedLeads);
          setSelectedLead({
            ...selectedLead,
            quoteStatus,
            quoteNumber,
            quoteItems,
            quoteTaxRate,
            quoteDiscount,
            quoteSubtotal: subtotal,
            quoteTax: tax,
            quoteTotal: total
          });
          alert('Quote saved successfully!');
        } else {
          alert('Failed to save quote');
        }
      } catch (err) {
        alert('Error connecting to server');
      } finally {
        setSavingQuote(false);
      }
    };

    const copyLink = () => {
      if (!selectedLead) return;
      const link = `${window.location.origin}/quote/${selectedLead.id}`;
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    // Customer Add/Edit Submit handlers
    const handleAddCustomer = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!customerFormName) return;
      setCustomerSaving(true);
      try {
        const response = await fetch('/api/customers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-secret': secret
          },
          body: JSON.stringify({
            name: customerFormName,
            email: customerFormEmail,
            phone: customerFormPhone,
            notes: customerFormNotes
          })
        });
        if (response.ok) {
          const resData = await response.json();
          setCustomers([resData.customer, ...customers]);
          setIsAddCustomerOpen(false);
          // Clear form
          setCustomerFormName('');
          setCustomerFormEmail('');
          setCustomerFormPhone('');
          setCustomerFormNotes('');
        } else {
          const errorData = await response.json();
          alert(errorData.error || 'Failed to add customer');
        }
      } catch (err) {
        alert('Error connecting to server');
      } finally {
        setCustomerSaving(false);
      }
    };

    const handleEditCustomer = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!editingCustomer || !customerFormName) return;
      setCustomerSaving(true);
      try {
        const response = await fetch(`/api/customers/${editingCustomer.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-secret': secret
          },
          body: JSON.stringify({
            name: customerFormName,
            email: customerFormEmail,
            phone: customerFormPhone,
            notes: customerFormNotes
          })
        });
        if (response.ok) {
          setCustomers(customers.map(c => c.id === editingCustomer.id ? {
            ...c,
            name: customerFormName,
            email: customerFormEmail,
            phone: customerFormPhone,
            notes: customerFormNotes
          } : c));
          
          // Propagate changes to leads
          const leadsRes = await fetch('/api/leads', {
            headers: { 'x-admin-secret': secret }
          });
          if (leadsRes.ok) {
            const leadsData = await leadsRes.json();
            setLeads(leadsData);
          }
          setIsEditCustomerOpen(false);
          setEditingCustomer(null);
          // Clear form
          setCustomerFormName('');
          setCustomerFormEmail('');
          setCustomerFormPhone('');
          setCustomerFormNotes('');
        } else {
          alert('Failed to update customer');
        }
      } catch (err) {
        alert('Error connecting to server');
      } finally {
        setCustomerSaving(false);
      }
    };

    const generateWizardQuoteFromSpecs = () => {
      if (!selectedQuoteCustomer) return;

      const items: any[] = [];
      
      // 1. Countertop fabrication & installation
      if (specIncludeCountertops && specCountertopSqFt) {
        const qRate = PRICING_CONSTANTS.LEVELS[specQuartzLevel];
        let low = specCountertopSqFt * qRate.low;
        let high = specCountertopSqFt * qRate.high;
        
        if (specExtras.backsplash) {
          low += specCountertopSqFt * PRICING_CONSTANTS.EXTRAS.backsplash.low;
          high += specCountertopSqFt * PRICING_CONSTANTS.EXTRAS.backsplash.high;
        }
        if (specExtras.waterfall) { low += PRICING_CONSTANTS.EXTRAS.waterfall.low; high += PRICING_CONSTANTS.EXTRAS.waterfall.high; }
        if (specExtras.removal) { low += PRICING_CONSTANTS.EXTRAS.removal.low; high += PRICING_CONSTANTS.EXTRAS.removal.high; }
        if (specExtras.sink) { low += PRICING_CONSTANTS.EXTRAS.sink; high += PRICING_CONSTANTS.EXTRAS.sink; }
        if (specExtras.cooktop) { low += PRICING_CONSTANTS.EXTRAS.cooktop; high += PRICING_CONSTANTS.EXTRAS.cooktop; }

        const avgCountertop = Math.round((low + high) / 2);
        const unitPrice = Math.round(avgCountertop / specCountertopSqFt);

        items.push({
          description: `${specSelectedSlab || specQuartzLevel.charAt(0).toUpperCase() + specQuartzLevel.slice(1)} Quartz Countertop Fabrication & Installation`,
          quantity: specCountertopSqFt,
          unitPrice: unitPrice,
          total: avgCountertop
        });
      }

      // 2. Cabinets
      if (specIncludeCabinets && specCabinetLinearFt) {
        const method = specDeliveryMethod || 'installed';
        const cRate = PRICING_CONSTANTS.CABINETS[method][specCabinetStyle];
        const multiplier = PRICING_CONSTANTS.CABINET_EXTRA_MULTIPLIERS[method];

        const cabinetLFAdded = { none: 0, small: 4, large: 8, waterfall: 8 }[specIslandType || 'none'];
        const totalCabinetLF = specCabinetLinearFt + cabinetLFAdded;

        let low = totalCabinetLF * cRate.low;
        let high = totalCabinetLF * cRate.high;
 
        if (specCabinetExtras.pantry) { low += PRICING_CONSTANTS.CABINET_EXTRAS.pantry.low * multiplier; high += PRICING_CONSTANTS.CABINET_EXTRAS.pantry.high * multiplier; }
        if (specCabinetExtras.island) { low += PRICING_CONSTANTS.CABINET_EXTRAS.island.low * multiplier; high += PRICING_CONSTANTS.CABINET_EXTRAS.island.high * multiplier; }
        if (specCabinetExtras.decorativePanels) { low += PRICING_CONSTANTS.CABINET_EXTRAS.decorativePanels.low * multiplier; high += PRICING_CONSTANTS.CABINET_EXTRAS.decorativePanels.high * multiplier; }
 
        const avgCabinet = Math.round((low + high) / 2);
        const unitPrice = Math.round(avgCabinet / totalCabinetLF);
        const styleName = specCabinetStyle === 'essential' ? 'Essential Collection' :
                          specCabinetStyle === 'premium' ? 'Premium Collection' :
                          specCabinetStyle === 'elite' ? 'Elite Collection' :
                          specCabinetStyle === 'flat' ? 'Flat Panel' : 
                          specCabinetStyle === 'slim_shaker' ? 'Slim Shaker' : 
                          specCabinetStyle === 'shaker' ? 'Shaker' : 
                          specCabinetStyle === 'matte' ? 'Matte / Textured' : 
                          specCabinetStyle === 'gloss' ? 'High Gloss' : specCabinetStyle;

        items.push({
          description: `Cabinet Supply & Installation (${styleName})`,
          quantity: totalCabinetLF,
          unitPrice: unitPrice,
          total: avgCabinet
        });
      }

      // 3. Countertop Extras as separate line items
      if (specIncludeCountertops) {
        if (specExtras.sink) {
          items.push({
            description: 'Undermount Sink Cutout & Installation',
            quantity: 1,
            unitPrice: PRICING_CONSTANTS.EXTRAS.sink,
            total: PRICING_CONSTANTS.EXTRAS.sink
          });
        }
        if (specExtras.cooktop) {
          items.push({
            description: 'Cooktop Cutout & Polish',
            quantity: 1,
            unitPrice: PRICING_CONSTANTS.EXTRAS.cooktop,
            total: PRICING_CONSTANTS.EXTRAS.cooktop
          });
        }
        if (specExtras.waterfall) {
          const price = Math.round((PRICING_CONSTANTS.EXTRAS.waterfall.low + PRICING_CONSTANTS.EXTRAS.waterfall.high) / 2);
          items.push({
            description: 'Mitered Waterfall Edge Ends (Pair)',
            quantity: 1,
            unitPrice: price,
            total: price
          });
        }
        if (specExtras.removal) {
          const price = Math.round((PRICING_CONSTANTS.EXTRAS.removal.low + PRICING_CONSTANTS.EXTRAS.removal.high) / 2);
          items.push({
            description: 'Old Countertop Demolition & Disposal',
            quantity: 1,
            unitPrice: price,
            total: price
          });
        }
      }

      const randNum = Math.floor(1000 + Math.random() * 9000);
      setWizardQuoteNumber(`QI-2026-${randNum}`);
      setWizardQuoteItems(items);
      setWizardQuoteStatus('draft');
      setWizardQuoteDiscount(0);
      setWizardQuoteTaxRate(0.13);
      setQuoteWizardStep(3); // Advance to editor
    };

    const handleSaveWizardQuote = async () => {
      if (!selectedQuoteCustomer || !wizardQuoteNumber) return;
      setCreatingQuote(true);

      const subtotal = wizardQuoteItems.reduce((acc, item) => acc + (item.total || 0), 0);
      const tax = Math.round((subtotal - wizardQuoteDiscount) * wizardQuoteTaxRate);
      const total = subtotal - wizardQuoteDiscount + tax;

      const extras: string[] = [];
      Object.entries(specExtras).forEach(([k, v]) => { if (v) extras.push(k); });
      
      const cabinetExtras: string[] = [];
      Object.entries(specCabinetExtras).forEach(([k, v]) => { if (v) cabinetExtras.push(k); });

      try {
        const response = await fetch('/api/leads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-admin-secret': secret
          },
          body: JSON.stringify({
            customerId: selectedQuoteCustomer.id,
            notes: 'Quote created manually from CRM dashboard.',
            layout: specIncludeCountertops ? specLayout : 'None',
            quartzLevel: specIncludeCountertops ? specQuartzLevel : 'standard',
            selectedSlab: specIncludeCountertops ? specSelectedSlab : '',
            countertopSqFt: specIncludeCountertops ? specCountertopSqFt : 0,
            countertopLinearFt: specIncludeCountertops ? specCountertopLinearFt : 0,
            hasIsland: specIncludeCountertops ? specHasIsland : false,
            islandType: specIncludeCountertops ? specIslandType : 'none',
            includeCountertops: specIncludeCountertops,
            includeCabinets: specIncludeCabinets,
            cabinetLinearFt: specIncludeCabinets ? specCabinetLinearFt : 0,
            cabinetStyle: specIncludeCabinets ? specCabinetStyle : '',
            deliveryMethod: specIncludeCabinets ? specDeliveryMethod : 'installed',
            selectedCabinetStyle: specIncludeCabinets ? specCabinetStyleName : '',
            timeline: specTimeline,
            extras,
            cabinetExtras,
            quoteStatus: wizardQuoteStatus,
            quoteNumber: wizardQuoteNumber,
            quoteItems: wizardQuoteItems,
            quoteTaxRate: wizardQuoteTaxRate,
            quoteDiscount: wizardQuoteDiscount,
            quoteSubtotal: subtotal,
            quoteTax: tax,
            quoteTotal: total
          })
        });

        if (response.ok) {
          const leadsRes = await fetch('/api/leads', {
            headers: { 'x-admin-secret': secret }
          });
          if (leadsRes.ok) {
            const leadsData = await leadsRes.json();
            setLeads(leadsData);
          }
          setIsCreateQuoteOpen(false);
          // Reset states
          setSelectedQuoteCustomer(null);
          setQuoteWizardStep(1);
          setWizardQuoteItems([]);
          setWizardQuoteNumber('');
          alert('Quote created successfully!');
        } else {
          alert('Failed to create quote');
        }
      } catch (err) {
        alert('Error connecting to server');
      } finally {
        setCreatingQuote(false);
      }
    };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-panel p-8 max-w-md w-full rounded-3xl shadow-2xl border border-accent/20"
        >
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-2xl font-bold text-center mb-2">Admin Access</h1>
          <p className="text-gray-500 text-center mb-8 text-sm">Please enter your secure access key to view the lead database.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Access Key</label>
              <input 
                type="password" 
                className="input-field h-14 rounded-xl"
                placeholder="••••••••••••"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
            <button 
              disabled={loading}
              className="btn-primary w-full h-14 rounded-xl font-bold text-base shadow-xl shadow-accent/20"
            >
              {loading ? 'Verifying...' : 'Unlock Database'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-[#0E1116] text-white py-6 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <Shield size={18} className="text-accent" />
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-accent">Protected Admin CRM Workspace</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
                {activeTab === 'inbox' && 'Inbox'}
                {activeTab === 'leads' && 'Lead Management'}
                {activeTab === 'quotes' && 'Quotes & Invoices'}
                {activeTab === 'customers' && 'Customers'}
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              <button 
                onClick={() => {
                  localStorage.removeItem('admin_secret');
                  setIsAuthenticated(false);
                }}
                className="px-4 py-1.5 sm:px-6 sm:py-2 border border-white/20 rounded-lg text-xs sm:text-sm font-bold hover:bg-white/5 transition-colors animate-pulse"
                id="logout-btn"
              >
                Log Out
              </button>
              {activeTab === 'leads' && (
                <button 
                  onClick={exportToCSV}
                  className="btn-primary px-4 py-1.5 sm:px-6 sm:py-2 h-auto text-xs sm:text-sm flex items-center gap-2"
                >
                  <Download size={14} />
                  Export CSV
                </button>
              )}
              {activeTab === 'quotes' && (
                <button 
                  onClick={() => {
                    setSelectedQuoteCustomer(null);
                    setQuoteWizardStep(1);
                    setWizardQuoteItems([]);
                    setWizardQuoteNumber('');
                    setIsCreateQuoteOpen(true);
                  }}
                  className="btn-primary px-4 py-1.5 sm:px-6 sm:py-2 h-auto text-xs sm:text-sm flex items-center gap-2"
                >
                  <Plus size={14} />
                  Create Quote
                </button>
              )}
              {activeTab === 'customers' && (
                <button 
                  onClick={() => {
                    setCustomerFormName('');
                    setCustomerFormEmail('');
                    setCustomerFormPhone('');
                    setCustomerFormNotes('');
                    setEditingCustomer(null);
                    setIsAddCustomerOpen(true);
                  }}
                  className="btn-primary px-4 py-1.5 sm:px-6 sm:py-2 h-auto text-xs sm:text-sm flex items-center gap-2"
                >
                  <Plus size={14} />
                  Add Customer
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tab Sub-Navigation */}
      <div className="border-b border-border-custom bg-[#181D26] text-white/70 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 sm:gap-8 overflow-x-auto no-scrollbar whitespace-nowrap">
            {[
              { id: 'inbox', name: 'Inbox', icon: <MessageSquare size={16} /> },
              { id: 'leads', name: 'Leads & Inquiries', icon: <Mail size={16} /> },
              { id: 'quotes', name: 'Quotes & Invoices', icon: <FileText size={16} /> },
              { id: 'customers', name: 'Customers', icon: <Users size={16} /> },
              { id: 'analytics', name: 'Google Ads & Analytics', icon: <TrendingUp size={16} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 sm:py-4 px-1 text-xs sm:text-sm font-bold border-b-2 transition-all relative shrink-0 ${
                  activeTab === tab.id 
                    ? 'border-accent text-accent' 
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {tab.icon}
                {tab.name}
                {tab.id === 'inbox' && unreadMessagesCount > 0 && (
                  <span className="bg-red-500 text-white px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold animate-pulse">
                    {unreadMessagesCount}
                  </span>
                )}
                {tab.id === 'leads' && leads.length > 0 && (
                  <span className="bg-accent/20 text-accent px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold">
                    {leads.length}
                  </span>
                )}
                {tab.id === 'customers' && customers.length > 0 && (
                  <span className="bg-white/10 text-white/90 px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold">
                    {customers.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Row */}
        {activeTab === 'leads' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Leads', value: totalLeads, icon: <User size={20} /> },
              { label: 'Avg. Project Size', value: `${isNaN(avgProjectSize) ? 0 : avgProjectSize} sq ft`, icon: <CalcIcon size={20} /> },
              { label: 'Last 24 Hours', value: newLeads24h, icon: <Calendar size={20} /> },
              { label: 'Lead Quality', value: 'High', icon: <Search size={20} /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-border-custom flex items-center gap-5 shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'quotes' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Quotes & Invoices', value: quotesList.length, icon: <FileText size={20} /> },
              { label: 'Active Quotes Value', value: `$${activeQuotesValue.toLocaleString()}`, icon: <CalcIcon size={20} /> },
              { label: 'Closed Invoices Value', value: `$${closedInvoicesValue.toLocaleString()}`, icon: <CheckCircle size={20} /> },
              { label: 'Lead Conversion Rate', value: `${quotesConversion}%`, icon: <Users size={20} /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-border-custom flex items-center gap-5 shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'customers' && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total CRM Customers', value: totalCustomers, icon: <Users size={20} /> },
              { label: 'New This Month', value: newCustomersMonth, icon: <Calendar size={20} /> },
              { label: 'Customers With Inquiries', value: customersWithLeadsCount, icon: <Mail size={20} /> },
              { label: 'Client Closed Rate', value: `${customerApprovedConversion}%`, icon: <CheckCircle size={20} /> }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-border-custom flex items-center gap-5 shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab-Specific Content Panels */}
        
        {/* UNIFIED INBOX TAB PANEL */}
        {activeTab === 'inbox' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 h-[calc(100vh-220px)] lg:h-[calc(100vh-280px)] min-h-[500px] lg:min-h-[600px] items-stretch">
            {/* Left Panel: Conversation Threads */}
            <div className={`lg:col-span-3 flex-col bg-white rounded-3xl border border-border-custom shadow-sm overflow-hidden h-full ${
              selectedCustomerId ? 'hidden lg:flex' : 'flex'
            }`}>
              {/* Thread list Header */}
              <div className="p-4 border-b border-border-custom bg-gray-50/50">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base text-gray-800 flex items-center gap-2">
                    <MessageSquare size={18} className="text-accent" />
                    Inbox
                  </h3>
                </div>
                
                {/* Search Bar */}
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                  <input
                    type="text"
                    placeholder="Search threads..."
                    className="w-full pl-9 pr-3 py-1.5 border border-border-custom rounded-xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Channel Filter Tabs */}
                <div className="flex gap-1 bg-gray-200/50 p-1 rounded-xl">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'whatsapp', label: 'WhatsApp' },
                    { id: 'sms', label: 'SMS' },
                    { id: 'email', label: 'Email' }
                  ].map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setInboxChannelFilter(opt.id as any)}
                      className={`flex-1 py-1 rounded-lg text-[10px] font-bold transition-all text-center ${
                        inboxChannelFilter === opt.id
                          ? 'bg-white text-gray-800 shadow-xs'
                          : 'text-gray-500 hover:text-gray-850'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Thread list Items */}
              <div className="overflow-y-auto flex-1 divide-y divide-border-custom">
                {(() => {
                  const filteredInboxCustomers = customers.filter(c => {
                    const matchesSearch = (c.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                      (c.email && c.email.toLowerCase().includes(searchQuery.toLowerCase())) ||
                      (c.phone && c.phone.includes(searchQuery));
                    if (!matchesSearch) return false;

                    if (inboxChannelFilter !== 'all') {
                      return messages.some(m => m.customerId === c.id && m.channel === inboxChannelFilter);
                    }
                    return true;
                  });

                  const getCustomerLatestMessageTime = (cId: string) => {
                    const custMsgs = messages.filter(m => m.customerId === cId);
                    if (custMsgs.length === 0) return 0;
                    return Math.max(...custMsgs.map(m => new Date(m.timestamp || 0).getTime()));
                  };

                  const sortedCustomers = [...filteredInboxCustomers].sort((a, b) => {
                    const timeA = getCustomerLatestMessageTime(a.id);
                    const timeB = getCustomerLatestMessageTime(b.id);
                    if (timeA === 0 && timeB === 0) return (a.name || '').localeCompare(b.name || '');
                    return timeB - timeA;
                  });

                  if (sortedCustomers.length === 0) {
                    return (
                      <div className="p-8 text-center text-gray-500 text-xs flex flex-col items-center gap-2 mt-8">
                        <Users size={32} className="text-gray-300" />
                        <p>No clients found</p>
                      </div>
                    );
                  }

                  return sortedCustomers.map(customer => {
                    const custMsgs = messages.filter(m => m.customerId === customer.id);
                    const latestMsg = custMsgs.length > 0 ? custMsgs[custMsgs.length - 1] : null;
                    const isUnread = messages.some(m => m.customerId === customer.id && m.direction === 'inbound' && !m.isRead);
                    const isSelected = selectedCustomerId === customer.id;

                    const customerChannels = Array.from(new Set(
                      custMsgs.map(m => m.channel)
                    ));

                    return (
                      <button
                        key={customer.id}
                        onClick={() => handleSelectCustomerThread(customer.id)}
                        className={`w-full text-left p-4 transition-all flex flex-col gap-1.5 relative border-l-4 ${
                          isSelected
                            ? 'bg-accent/5 border-accent'
                            : 'bg-white border-transparent hover:bg-gray-50/50'
                        }`}
                      >
                        <div className="flex justify-between items-start w-full">
                          <span className="font-bold text-sm text-gray-800 truncate pr-2 max-w-[140px]">
                            {customer.name}
                          </span>
                          
                          <div className="flex items-center gap-1.5">
                            {/* Unread dot */}
                            {isUnread && (
                              <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse" />
                            )}
                            {latestMsg && (
                              <span className="text-[10px] text-gray-400 font-mono">
                                {formatTime(latestMsg.timestamp)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Snippet */}
                        <p className="text-xs text-gray-500 truncate w-full">
                          {latestMsg ? latestMsg.text : 'No messages yet'}
                        </p>

                        {/* Channel Badges */}
                        <div className="flex gap-1.5 mt-1">
                          {customerChannels.length > 0 ? (
                            customerChannels.map(ch => (
                              <span
                                key={ch}
                                className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[9px] font-bold ${
                                  ch === 'whatsapp' ? 'bg-green-50 text-green-700 ring-1 ring-green-600/10' :
                                  ch === 'sms' ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-600/10' :
                                  'bg-accent/10 text-accent ring-1 ring-accent/20'
                                }`}
                              >
                                {ch === 'whatsapp' ? 'WA' : ch === 'sms' ? 'SMS' : 'Email'}
                              </span>
                            ))
                          ) : (
                            <span className="text-[9px] text-gray-400 italic">No communication history</span>
                          )}
                        </div>
                      </button>
                    );
                  });
                })()}
              </div>
            </div>

            {/* Center Panel: Conversation Thread */}
            <div className={`flex-col bg-white rounded-3xl border border-border-custom shadow-sm overflow-hidden h-full ${
              selectedCustomerId 
                ? showMobileSidebar ? 'hidden lg:flex lg:col-span-5' : 'flex lg:col-span-5'
                : 'hidden lg:flex lg:col-span-9'
            }`}>
              {(() => {
                if (!selectedCustomerId) {
                  return (
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center text-gray-500 bg-gray-50/20">
                      <div className="w-16 h-16 bg-accent/5 rounded-2xl flex items-center justify-center text-accent mb-4 border border-accent/10">
                        <MessageSquare size={32} />
                      </div>
                      <h4 className="font-bold text-lg text-gray-800 mb-1">Select a Conversation</h4>
                      <p className="text-sm text-gray-500 max-w-md">
                        Choose a client thread from the inbox sidebar to view their full chronological unified timeline of WhatsApp, SMS, and Email inquiries.
                      </p>
                    </div>
                  );
                }

                const activeCustomer = customers.find(c => c.id === selectedCustomerId);
                if (!activeCustomer) return null;

                const activeLead = leads.find(l => 
                  l.customerId === selectedCustomerId || 
                  (activeCustomer.email && l.email?.toLowerCase() === activeCustomer.email.toLowerCase())
                );

                const threadMessages = messages.filter(m => m.customerId === selectedCustomerId);
                const sortedMessages = [...threadMessages].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

                return (
                  <>
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-border-custom bg-gray-50/80">
                      <div className="flex items-center gap-2 min-w-0">
                        <button
                          type="button"
                          onClick={() => setSelectedCustomerId(null)}
                          className="lg:hidden p-1.5 -ml-1 text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-xl transition-all shrink-0"
                          title="Back to Conversations"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-sm sm:text-base text-gray-800 truncate">{activeCustomer.name}</h4>
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold shrink-0 ${
                              activeLead?.quoteStatus === 'approved' || activeLead?.quoteStatus === 'paid'
                                ? 'bg-green-50 text-green-700 ring-1 ring-green-600/10'
                                : activeLead?.quoteStatus === 'invoiced' || activeLead?.quoteStatus === 'sent'
                                ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-600/10'
                                : 'bg-accent/10 text-accent ring-1 ring-accent/20'
                            }`}>
                              {activeLead?.quoteStatus
                                ? activeLead.quoteStatus.toUpperCase()
                                : 'NEW LEAD'}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 mt-0.5 truncate">
                            {activeCustomer.phone && <span className="shrink-0">{activeCustomer.phone}</span>}
                            {activeCustomer.phone && activeCustomer.email && <span className="opacity-50 shrink-0">•</span>}
                            {activeCustomer.email && <span className="truncate">{activeCustomer.email}</span>}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => setShowMobileSidebar(true)}
                          className="lg:hidden p-2 text-accent bg-accent/10 hover:bg-accent/20 rounded-xl transition-all"
                          title="View Details"
                        >
                          <User size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedCustomerId(null)}
                          className="hidden lg:flex p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Close Thread"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Chat Bubble List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/10">
                      {sortedMessages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400 text-xs py-12">
                          <Clock size={24} className="mb-2 opacity-50" />
                          <p>No messages in this conversation yet.</p>
                        </div>
                      ) : (
                        sortedMessages.map(msg => {
                          const isOutbound = msg.direction === 'outbound';
                          return (
                            <div key={msg.id} className={`flex w-full ${isOutbound ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm relative border ${
                                isOutbound
                                  ? 'bg-[#0E1116] text-white border-black/10 rounded-tr-none'
                                  : 'bg-white text-gray-800 border-border-custom rounded-tl-none'
                              }`}>
                                {/* Channel badge in bubble */}
                                <div className={`flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider mb-1 ${
                                  isOutbound ? 'text-accent' : 'text-gray-400'
                                }`}>
                                  {msg.channel === 'whatsapp' && <MessageCircle size={10} className={isOutbound ? '' : 'text-green-600'} />}
                                  {msg.channel === 'sms' && <MessageSquare size={10} className={isOutbound ? '' : 'text-blue-600'} />}
                                  {msg.channel === 'email' && <Mail size={10} className={isOutbound ? '' : 'text-accent'} />}
                                  <span>{msg.channel}</span>
                                </div>

                                <p className="whitespace-pre-wrap leading-relaxed break-words">{msg.text}</p>
                                
                                <span className={`text-[9px] text-right mt-1.5 block font-mono ${
                                  isOutbound ? 'text-white/60' : 'text-gray-400'
                                }`}>
                                  {formatDateTime(msg.timestamp)}
                                </span>
                              </div>
                            </div>
                          );
                        })
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Composer Form */}
                    <form onSubmit={handleSendOutboundMessage} className="p-4 border-t border-border-custom bg-white">
                      {/* Channel Switcher */}
                      <div className="flex gap-2 mb-3">
                        {[
                          { id: 'whatsapp', name: 'WhatsApp', icon: <MessageCircle size={14} /> },
                          { id: 'sms', name: 'SMS', icon: <MessageSquare size={14} /> },
                          { id: 'email', name: 'Email', icon: <Mail size={14} /> }
                        ].map(ch => (
                          <button
                            key={ch.id}
                            type="button"
                            onClick={() => setMessageChannel(ch.id as any)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                              messageChannel === ch.id
                                ? ch.id === 'whatsapp'
                                  ? 'bg-green-50 text-green-700 border-green-200'
                                  : ch.id === 'sms'
                                  ? 'bg-blue-50 text-blue-700 border-blue-200'
                                  : 'bg-accent/10 text-accent border-accent/20'
                                : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            {ch.icon}
                            {ch.name}
                          </button>
                        ))}
                      </div>

                      {/* Reply Text Box */}
                      <div className="flex gap-3 items-end">
                        <textarea
                          placeholder={`Reply to client via ${messageChannel === 'whatsapp' ? 'WhatsApp' : messageChannel === 'sms' ? 'SMS' : 'Email'}... (Press Enter to Send)`}
                          rows={2}
                          className="flex-1 px-3 py-2 border border-border-custom rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-gray-50/30 resize-none"
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSendOutboundMessage(e);
                            }
                          }}
                        />
                        <button
                          type="submit"
                          disabled={!messageInput.trim()}
                          className={`btn-primary flex items-center justify-center p-3 rounded-xl transition-all shadow-sm ${
                            !messageInput.trim() ? 'opacity-40 cursor-not-allowed' : 'opacity-100'
                          }`}
                        >
                          <Send size={16} />
                        </button>
                      </div>
                    </form>
                  </>
                );
              })()}
            </div>

            {/* Right Panel: Customer Dossier Sidebar */}
            {selectedCustomerId && (
              <div className={`${showMobileSidebar ? 'flex' : 'hidden lg:flex'} lg:col-span-4 flex-col bg-white rounded-3xl border border-border-custom shadow-sm overflow-hidden h-full`}>
                {(() => {
                  const activeCustomer = customers.find(c => c.id === selectedCustomerId);
                  if (!activeCustomer) return null;

                  const activeLead = leads.find(l => 
                    l.customerId === selectedCustomerId || 
                    (activeCustomer.email && l.email?.toLowerCase() === activeCustomer.email.toLowerCase())
                  );

                  return (
                    <>
                      {/* Mobile Header for Sidebar */}
                      <div className="flex lg:hidden items-center justify-between p-3.5 border-b border-border-custom bg-gray-50 shrink-0">
                        <button 
                          type="button"
                          onClick={() => setShowMobileSidebar(false)} 
                          className="text-xs font-bold text-accent flex items-center gap-1 hover:underline"
                        >
                          <ChevronLeft size={16} /> Back to Chat
                        </button>
                        <span className="text-xs font-bold text-gray-800 font-serif">Client Dossier</span>
                        <div className="w-16"></div>
                      </div>

                      {/* Sidebar Navigation */}
                      <div className="flex border-b border-border-custom bg-gray-50/50 overflow-x-auto no-scrollbar whitespace-nowrap shrink-0">
                        {[
                          { id: 'spec', label: 'Specs' },
                          { id: 'quotes', label: 'Quotes' },
                          { id: 'files', label: 'Files' },
                          { id: 'notes', label: 'Notes' },
                          { id: 'contact', label: 'Contact' }
                        ].map(tb => (
                          <button
                            key={tb.id}
                            type="button"
                            onClick={() => setCustomerDetailTab(tb.id as any)}
                            className={`flex-1 min-w-[70px] shrink-0 py-3 text-center text-[10px] sm:text-xs font-bold border-b-2 transition-all ${
                              customerDetailTab === tb.id
                                ? 'border-accent text-accent'
                                : 'border-transparent text-gray-500 hover:text-gray-850'
                            }`}
                          >
                            {tb.label}
                          </button>
                        ))}
                      </div>

                      {/* Tab panel container */}
                      <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {/* SPECS PANEL */}
                        {customerDetailTab === 'spec' && (
                          <div className="space-y-4">
                            {activeLead && activeLead.layout !== 'Contact Form' ? (
                              <>
                                {/* Cost Estimator Card */}
                                <div className="bg-[#0E1116] text-white p-5 rounded-2xl border border-accent/20 relative overflow-hidden shadow-sm">
                                  <div className="absolute right-0 top-0 w-24 h-24 bg-accent/5 rounded-full blur-xl" />
                                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Estimated Project Price</p>
                                  <p className="text-2xl font-bold font-serif text-accent">
                                    ${activeLead.totalCostLow?.toLocaleString()} - ${activeLead.totalCostHigh?.toLocaleString()}
                                  </p>
                                  <p className="text-[10px] text-gray-400 mt-2 font-mono">
                                    Generated dynamically on {formatDate(activeLead.createdAt)}
                                  </p>
                                </div>

                                {/* Spec List */}
                                {activeLead.includeCountertops !== false && (
                                   <div className="space-y-2">
                                     <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">1. Countertop Specifications</h5>
                                     <div className="bg-gray-50 border border-border-custom rounded-xl p-3 space-y-2 text-xs">
                                       <div className="flex justify-between">
                                         <span className="text-gray-500">Layout Shape:</span>
                                         <span className="font-bold text-gray-800">{activeLead.layout || 'L-Shape'}</span>
                                       </div>
                                       <div className="flex justify-between">
                                         <span className="text-gray-500">Slab Choice:</span>
                                         <span className="font-bold text-accent">{activeLead.selectedSlab || 'Not selected'}</span>
                                       </div>
                                       <div className="flex justify-between">
                                         <span className="text-gray-500">Quartz Grade:</span>
                                         <span className="font-bold text-gray-800 capitalize">{activeLead.quartzLevel || 'Standard'}</span>
                                       </div>
                                       <div className="flex justify-between">
                                         <span className="text-gray-500">Surface Area:</span>
                                         <span className="font-bold text-gray-800">{activeLead.countertopSqFt || 40} sq ft</span>
                                       </div>
                                       <div className="flex justify-between">
                                          <span className="text-gray-500">Island Type:</span>
                                          <span className="font-bold text-gray-800 capitalize text-right">
                                            {activeLead.islandType && activeLead.islandType !== 'none'
                                              ? (activeLead.islandType === 'waterfall' ? 'Large w/ Waterfall' : activeLead.islandType)
                                              : (activeLead.hasIsland ? 'Yes' : 'No')}
                                          </span>
                                        </div>
                                       <div className="flex justify-between">
                                         <span className="text-gray-500">Timeline Target:</span>
                                         <span className="font-bold text-gray-800 capitalize">{activeLead.timeline?.replace('-', ' ') || 'ASAP'}</span>
                                       </div>
                                     </div>
                                   </div>
                                 )}

                                {/* Cabinet Spec */}
                                {activeLead.includeCabinets && (
                                  <div className="space-y-2">
                                    <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                                      {activeLead.includeCountertops !== false ? "2. Cabinet Specifications" : "1. Cabinet Specifications"}
                                    </h5>
                                    <div className="bg-gray-50 border border-border-custom rounded-xl p-3 space-y-2 text-xs">
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Cabinet Style:</span>
                                        <span className="font-bold text-gray-800 capitalize">
                                          {activeLead.cabinetStyle === 'essential' ? 'Essential Collection' :
                                           activeLead.cabinetStyle === 'premium' ? 'Premium Collection' :
                                           activeLead.cabinetStyle === 'elite' ? 'Elite Collection' :
                                           activeLead.cabinetStyle === 'flat' ? 'Flat Panel' :
                                           activeLead.cabinetStyle === 'slim_shaker' ? 'Slim Shaker' :
                                           activeLead.cabinetStyle === 'shaker' ? 'Shaker' : activeLead.cabinetStyle || 'Standard'}
                                        </span>
                                      </div>
                                      {activeLead.deliveryMethod && (
                                        <div className="flex justify-between">
                                          <span className="text-gray-500">Delivery Method:</span>
                                          <span className="font-bold text-gray-800 uppercase">{activeLead.deliveryMethod}</span>
                                        </div>
                                      )}
                                      {activeLead.selectedCabinetStyle && (
                                        <div className="flex justify-between">
                                          <span className="text-gray-500">Aesthetic Style:</span>
                                          <span className="font-bold text-gray-800">{activeLead.selectedCabinetStyle}</span>
                                        </div>
                                      )}
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Linear Footage:</span>
                                        <span className="font-bold text-gray-800">{activeLead.cabinetLinearFt || 20} ft</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-500">Cabinet Estimate:</span>
                                        <span className="font-bold text-gray-800">${activeLead.cabinetCostLow?.toLocaleString()} - ${activeLead.cabinetCostHigh?.toLocaleString()}</span>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* Selected Extras */}
                                <div className="space-y-2">
                                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Selected Add-ons</h5>
                                  <div className="flex flex-wrap gap-1.5">
                                    {Object.entries({
                                      Sink: activeLead.sink || activeLead.specExtras?.sink,
                                      Cooktop: activeLead.cooktop || activeLead.specExtras?.cooktop,
                                      Backsplash: activeLead.backsplash || activeLead.specExtras?.backsplash,
                                      Waterfall: activeLead.waterfall || activeLead.specExtras?.waterfall,
                                      Removal: activeLead.removal || activeLead.specExtras?.removal
                                    }).map(([key, val]) => val && (
                                      <span key={key} className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-[10px] font-bold border border-gray-200">
                                        ✓ {key}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <div className="p-8 text-center text-gray-500 text-xs bg-gray-50 rounded-2xl border border-border-custom border-dashed">
                                <FileText size={28} className="mx-auto mb-2 text-gray-300" />
                                <p className="font-bold text-gray-700">No project specifications registered.</p>
                                <p className="text-gray-400 mt-1">This contact is registered in the directory but has not generated a dynamic project estimate.</p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* QUOTES PANEL */}
                        {customerDetailTab === 'quotes' && (
                          <div className="space-y-4">
                            {(() => {
                              const customerQuotes = leads.filter(l => 
                                l.quoteNumber && 
                                (l.customerId === selectedCustomerId || 
                                 (activeCustomer.email && l.email?.toLowerCase() === activeCustomer.email.toLowerCase()))
                              );

                              if (customerQuotes.length === 0) {
                                return (
                                  <div className="p-8 text-center text-gray-500 text-xs bg-gray-50 rounded-2xl border border-border-custom border-dashed">
                                    <FileText size={28} className="mx-auto mb-2 text-gray-300" />
                                    <p className="font-bold text-gray-700">No proposals created yet.</p>
                                    <p className="text-gray-400 mt-1">Go to the "Customers Directory" or "Quotes & Invoices" tab to generate a custom quote wizard package.</p>
                                  </div>
                                );
                              }

                              return (
                                <div className="space-y-3">
                                  <div className="flex justify-between items-center">
                                    <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">Quotes & Invoices</h5>
                                    <span className="text-[10px] bg-accent/10 text-accent font-bold px-2 py-0.5 rounded-full">{customerQuotes.length} Total</span>
                                  </div>

                                  {customerQuotes.map(quote => (
                                    <div key={quote.id} className="bg-gray-50 border border-border-custom rounded-2xl p-4 flex flex-col gap-2 shadow-xs hover:border-accent/30 transition-all">
                                      <div className="flex justify-between items-center">
                                        <span className="font-bold text-sm text-gray-800">{quote.quoteNumber}</span>
                                        <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold ${
                                          quote.quoteStatus === 'approved' || quote.quoteStatus === 'paid'
                                            ? 'bg-green-50 text-green-700 ring-1 ring-green-600/10'
                                            : quote.quoteStatus === 'invoiced'
                                            ? 'bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/10'
                                            : quote.quoteStatus === 'sent'
                                            ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-600/10'
                                            : 'bg-gray-100 text-gray-500 ring-1 ring-gray-200'
                                        }`}>
                                          {quote.quoteStatus?.toUpperCase() || 'DRAFT'}
                                        </span>
                                      </div>

                                      <div className="flex justify-between items-end mt-1 text-xs">
                                        <div>
                                          <p className="text-gray-400 text-[10px]">Total Amount</p>
                                          <p className="font-bold text-sm text-gray-800">${(quote.quoteTotal || 0).toLocaleString()}</p>
                                        </div>
                                        
                                        <div className="flex gap-1.5">
                                          <button
                                            onClick={() => {
                                              const link = `${window.location.origin}/quote/${quote.id}`;
                                              navigator.clipboard.writeText(link);
                                              alert('Proposal link copied to clipboard!');
                                            }}
                                            className="p-1.5 bg-white border border-border-custom hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
                                            title="Copy Link"
                                          >
                                            <Copy size={12} />
                                          </button>
                                          <a
                                            href={`/quote/${quote.id}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-1.5 bg-white border border-border-custom hover:bg-gray-100 rounded-lg text-gray-600 transition-colors flex items-center justify-center font-bold text-xs"
                                            title="View Online Proposal"
                                          >
                                            ↗
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              );
                            })()}
                          </div>
                        )}

                        {/* FILES PANEL */}
                        {customerDetailTab === 'files' && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">Attached Files</h5>
                              <span className="text-[10px] bg-gray-100 text-gray-600 font-bold px-2 py-0.5 rounded-full">{(activeCustomer.files || []).length} Total</span>
                            </div>

                            {/* File List */}
                            {(activeCustomer.files || []).length === 0 ? (
                              <div className="p-8 text-center text-gray-400 text-xs bg-gray-50 rounded-2xl border border-border-custom border-dashed">
                                <FolderOpen size={28} className="mx-auto mb-2 text-gray-300" />
                                <p>No files attached yet.</p>
                                <p className="text-[10px] opacity-75 mt-0.5">Attach templates, floorplans, or stone photos below.</p>
                              </div>
                            ) : (
                              <div className="space-y-2">
                                {(activeCustomer.files || []).map((file: any, index: number) => (
                                  <div key={index} className="bg-gray-50 border border-border-custom rounded-xl p-3 flex justify-between items-center gap-3">
                                    <div className="flex items-center gap-2.5 min-w-0">
                                      <div className="w-8 h-8 bg-accent/10 text-accent rounded-lg flex items-center justify-center shrink-0">
                                        <Paperclip size={14} />
                                      </div>
                                      <div className="min-w-0">
                                        <p className="text-xs font-bold text-gray-800 truncate" title={file.fileName}>{file.fileName}</p>
                                        <p className="text-[10px] text-gray-400 font-mono mt-0.5">
                                          {file.fileSize || 'Unknown Size'} • {formatDate(file.uploadedAt || file.createdAt)}
                                        </p>
                                      </div>
                                    </div>
                                    <a
                                      href="#"
                                      onClick={(e) => { e.preventDefault(); alert(`Downloading: ${file.fileName} (Simulation)`); }}
                                      className="text-xs text-accent font-bold hover:underline shrink-0 px-2"
                                    >
                                      Download
                                    </a>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Add File Form */}
                            <form onSubmit={handleAddMockFile} className="bg-gray-50 border border-border-custom rounded-2xl p-3 mt-4 space-y-3">
                              <h6 className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Add Mock Attachment</h6>
                              <div className="flex gap-2">
                                <input
                                  type="text"
                                  placeholder="e.g. kitchen_floorplan.pdf"
                                  className="flex-1 px-3 py-1.5 border border-border-custom rounded-lg text-xs bg-white focus:outline-none focus:border-accent"
                                  value={newMockFileName}
                                  onChange={(e) => setNewMockFileName(e.target.value)}
                                  required
                                />
                                <button
                                  type="submit"
                                  disabled={uploadingMockFile || !newMockFileName.trim()}
                                  className="bg-[#0E1116] text-white hover:bg-accent hover:text-[#0E1116] px-3 py-1.5 rounded-lg text-xs font-bold transition-all disabled:opacity-40"
                                >
                                  {uploadingMockFile ? 'Uploading...' : 'Add'}
                                </button>
                              </div>
                            </form>
                          </div>
                        )}

                        {/* NOTES PANEL */}
                        {customerDetailTab === 'notes' && (
                          <div className="space-y-4">
                            <div>
                              <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">Internal CRM Notes</h5>
                              <p className="text-[10px] text-gray-400 mt-0.5">Keep track of client preferences, callback details, or material specifications.</p>
                            </div>

                            <textarea
                              placeholder="Type internal notes about this customer..."
                              className="w-full h-40 p-3 border border-border-custom rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent bg-gray-50/50 resize-none leading-relaxed text-gray-700"
                              value={sidebarNotes}
                              onChange={(e) => setSidebarNotes(e.target.value)}
                            />

                            <div className="flex justify-end">
                              <button
                                type="button"
                                onClick={handleSaveSidebarNotes}
                                disabled={savingSidebarNotes}
                                className="btn-primary px-4 py-2 text-xs flex items-center gap-2"
                              >
                                {savingSidebarNotes ? 'Saving...' : 'Save Notes'}
                              </button>
                            </div>
                          </div>
                        )}

                        {/* CONTACT INFO PANEL */}
                        {customerDetailTab === 'contact' && (
                          <div className="space-y-4">
                            <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">Client Profile Details</h5>
                            
                            <div className="bg-gray-50 border border-border-custom rounded-xl p-4 space-y-3 text-xs">
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Full Name</p>
                                <p className="font-bold text-gray-800 text-sm mt-0.5">{activeCustomer.name}</p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email Address</p>
                                <a href={`mailto:${activeCustomer.email}`} className="font-bold text-accent hover:underline block mt-0.5">
                                  {activeCustomer.email || 'N/A'}
                                </a>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Phone Number</p>
                                <a href={`tel:${activeCustomer.phone}`} className="font-bold text-gray-800 hover:underline block mt-0.5">
                                  {activeCustomer.phone || 'N/A'}
                                </a>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Date Created</p>
                                <p className="font-bold text-gray-800 block mt-0.5">
                                  {formatFullDate(activeCustomer.createdAt)}
                                </p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Unique Customer ID</p>
                                <p className="font-mono text-[10px] text-gray-500 block mt-0.5 break-all select-all">
                                  {activeCustomer.id}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                setEditingCustomer(activeCustomer);
                                setCustomerFormName(activeCustomer.name);
                                setCustomerFormEmail(activeCustomer.email || '');
                                setCustomerFormPhone(activeCustomer.phone || '');
                                setCustomerFormNotes(activeCustomer.notes || '');
                                setIsEditCustomerOpen(true);
                              }}
                              className="w-full py-2 bg-gray-100 hover:bg-gray-200 border border-border-custom rounded-xl text-xs font-bold text-gray-700 transition-colors flex items-center justify-center gap-2"
                            >
                              <Edit size={12} />
                              Edit Contact Details
                            </button>
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        )}

        {/* LEADS TAB PANEL */}
        {activeTab === 'leads' && (

          <div className="bg-white rounded-3xl border border-border-custom shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border-custom bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h3 className="font-bold text-lg text-gray-800">Recent Lead Inquiries</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search leads..." 
                  className="pl-10 pr-4 py-2 border border-border-custom rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border-custom bg-gray-50/50">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Specifications</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Estimate</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Timeline</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-custom">
                  {filteredLeads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-20 text-center text-gray-500">
                        <div className="flex flex-col items-center gap-4">
                          <Eye size={48} className="text-gray-200" />
                          <p className="font-medium">No matching leads found.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <p className="text-xs font-bold text-gray-800">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </p>
                          <p className="text-[10px] text-gray-400">
                            {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-bold text-sm mb-1 text-gray-800">{lead.name}</p>
                          <div className="flex flex-col gap-1">
                            <a href={`mailto:${lead.email}`} className="text-xs text-accent flex items-center gap-1 hover:underline">
                              <Mail size={10} /> {lead.email}
                            </a>
                            <a href={`tel:${lead.phone}`} className="text-xs text-gray-500 flex items-center gap-1 hover:underline">
                              <Phone size={10} /> {lead.phone}
                            </a>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {lead.layout === 'Contact Form' ? (
                            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold ring-1 ring-blue-700/10">
                              Contact Message
                            </span>
                          ) : (
                            <div className="space-y-1">
                              {lead.includeCountertops === false ? (
                                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                                  Cabinets Only (No Countertops)
                                </p>
                              ) : (
                                <>
                                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                        {lead.quartzLevel} Quartz
                                  </p>
                                  <p className="text-xs text-gray-700">
                                    {lead.countertopSqFt} sq ft {lead.islandType && lead.islandType !== 'none' ? `• w/ ${lead.islandType.charAt(0).toUpperCase() + lead.islandType.slice(1)} Island` : (lead.hasIsland && "• w/ Island")}
                                  </p>
                                </>
                              )}
                              {lead.includeCabinets && (
                                <p className="text-[10px] text-gray-400 font-bold mt-1">
                                  Cabinets: {lead.cabinetLinearFt} ft ({
                                    lead.cabinetStyle === 'essential' ? 'Essential Collection' :
                                    lead.cabinetStyle === 'premium' ? 'Premium Collection' :
                                    lead.cabinetStyle === 'elite' ? 'Elite Collection' :
                                    lead.cabinetStyle === 'flat' ? 'Flat Panel' :
                                    lead.cabinetStyle === 'slim_shaker' ? 'Slim Shaker' :
                                    lead.cabinetStyle === 'shaker' ? 'Shaker' : lead.cabinetStyle
                                  } • {lead.deliveryMethod ? lead.deliveryMethod.toUpperCase() : 'INSTALLED'})
                                </p>
                              )}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {lead.layout === 'Contact Form' ? (
                            <span className="text-gray-400 text-xs">—</span>
                          ) : (
                            <div className="inline-flex items-center gap-1 bg-accent/5 text-accent px-3 py-1 rounded-full text-xs font-bold ring-1 ring-accent/10">
                              ${lead.totalCostLow?.toLocaleString()} - ${lead.totalCostHigh?.toLocaleString()}
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-xs font-medium capitalize text-gray-700">
                          {lead.layout === 'Contact Form' ? (
                            <span className="text-gray-400 text-xs">—</span>
                          ) : (
                            lead.timeline?.replace('-', ' ')
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            onClick={() => setSelectedLead(lead)}
                            className="p-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors text-gray-400"
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* QUOTES & INVOICES TAB PANEL */}
        {activeTab === 'quotes' && (
          <div className="bg-white rounded-3xl border border-border-custom shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border-custom bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-2 bg-gray-200/60 p-1 rounded-xl">
                {[
                  { id: 'all', label: 'All Records' },
                  { id: 'quotes', label: 'Quotes' },
                  { id: 'invoices', label: 'Invoices' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setQuoteInvoiceFilter(opt.id as any)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      quoteInvoiceFilter === opt.id 
                        ? 'bg-white text-gray-800 shadow-sm' 
                        : 'text-gray-500 hover:text-gray-800'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search quotes..." 
                  className="pl-10 pr-4 py-2 border border-border-custom rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border-custom bg-gray-50/50">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Quote / Invoice #</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date Created</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Value</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-custom">
                  {filteredQuotes.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-20 text-center text-gray-500">
                        <div className="flex flex-col items-center gap-4">
                          <FileText size={48} className="text-gray-200" />
                          <p className="font-medium text-gray-700">No quotes or invoices found.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredQuotes.map((quote) => (
                      <tr key={quote.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-sm text-gray-850">
                          {quote.quoteNumber}
                        </td>
                        <td className="px-6 py-4 text-xs text-gray-700">
                          {new Date(quote.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <p className="font-bold text-sm text-gray-800">{quote.name}</p>
                          <p className="text-xs text-gray-400">{quote.email}</p>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ring-1 ${
                            quote.quoteStatus === 'approved' ? 'bg-green-50 text-green-700 ring-green-700/10' :
                            quote.quoteStatus === 'paid' ? 'bg-emerald-50 text-emerald-700 ring-emerald-700/10' :
                            quote.quoteStatus === 'invoiced' ? 'bg-yellow-50 text-yellow-700 ring-yellow-700/10' :
                            quote.quoteStatus === 'sent' ? 'bg-blue-50 text-blue-700 ring-blue-700/10' :
                            'bg-gray-50 text-gray-700 ring-gray-700/10'
                          }`}>
                            {quote.quoteStatus === 'approved' && '✓ Approved & Signed'}
                            {quote.quoteStatus === 'paid' && '✓ Paid'}
                            {quote.quoteStatus === 'invoiced' && '📄 Invoiced'}
                            {quote.quoteStatus === 'sent' && '✉ Sent'}
                            {quote.quoteStatus === 'draft' && 'Draft'}
                          </span>
                        </td>
                        <td className="px-6 py-4 font-bold text-sm text-gray-800">
                          ${(quote.quoteTotal || 0).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 flex gap-2">
                          <button 
                            onClick={() => setSelectedLead(quote)}
                            className="p-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors text-gray-400"
                            title="Edit Quote"
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                            onClick={() => {
                              const link = `${window.location.origin}/quote/${quote.id}`;
                              navigator.clipboard.writeText(link);
                              alert('Link copied to clipboard!');
                            }}
                            className="p-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors text-gray-400"
                            title="Copy Proposal Link"
                          >
                            <Copy size={16} />
                          </button>
                          <a 
                            href={`/quote/${quote.id}`}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors text-gray-400 flex items-center justify-center font-bold"
                            title="View Proposal Page"
                          >
                            ↗
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* CUSTOMERS TAB PANEL */}
        {activeTab === 'customers' && (
          <div className="bg-white rounded-3xl border border-border-custom shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border-custom bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <h3 className="font-bold text-lg text-gray-850">Customer Directory</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search customers..." 
                  className="pl-10 pr-4 py-2 border border-border-custom rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border-custom bg-gray-50/50">
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Name</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Contact Details</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date Added</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Notes</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-custom">
                  {filteredCustomers.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-20 text-center text-gray-500">
                        <div className="flex flex-col items-center gap-4">
                          <Users size={48} className="text-gray-200" />
                          <p className="font-medium text-gray-700">No matching customers found.</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredCustomers.map((customer) => (
                      <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-bold text-sm text-gray-800">
                          {customer.name}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-1 text-xs">
                            <span className="text-gray-700 flex items-center gap-1"><Mail size={10} className="text-gray-400" /> {customer.email || 'N/A'}</span>
                            <span className="text-gray-500 flex items-center gap-1"><Phone size={10} className="text-gray-400" /> {customer.phone || 'N/A'}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-gray-700">
                          {new Date(customer.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-xs text-gray-500 max-w-xs truncate">
                          {customer.notes || '—'}
                        </td>
                        <td className="px-6 py-4 flex gap-2">
                          <button 
                            onClick={() => {
                              setEditingCustomer(customer);
                              setCustomerFormName(customer.name);
                              setCustomerFormEmail(customer.email);
                              setCustomerFormPhone(customer.phone);
                              setCustomerFormNotes(customer.notes || '');
                              setIsEditCustomerOpen(true);
                            }}
                            className="p-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors text-gray-400"
                            title="Edit Customer Details"
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                            onClick={() => {
                              setSelectedQuoteCustomer(customer);
                              setQuoteWizardStep(2);
                              // Reset specs fields
                              setSpecSelectedSlab('');
                              setSpecCountertopSqFt(40);
                              setSpecIslandType('none');
                              setSpecIncludeCabinets(false);
                              setIsCreateQuoteOpen(true);
                            }}
                            className="p-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors text-gray-400"
                            title="Create Quote for Customer"
                          >
                            <Plus size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* GOOGLE ADS & BEHAVIOR ANALYTICS PANEL */}
        {activeTab === 'analytics' && (
          <div className="space-y-8 animate-fade-in text-left">
            {/* KPI Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Leads Captured', value: totalLeads, desc: 'Overall inquiries in CRM', icon: <Users className="text-[#3B82F6]" size={20} /> },
                { 
                  label: 'Ad-Attributed Leads', 
                  value: analyticsData.adAttributedLeadsCount, 
                  desc: `${analyticsData.attributionRate}% of total volume`, 
                  icon: <TrendingUp className="text-accent" size={20} /> 
                },
                { 
                  label: 'Paid Pipeline Value', 
                  value: `$${analyticsData.paidPipelineValue.toLocaleString()}`, 
                  desc: 'Inquiries via paid traffic', 
                  icon: <FileText className="text-[#10B981]" size={20} /> 
                },
                { 
                  label: 'Avg. Ad Lead Value', 
                  value: `$${analyticsData.avgAdLeadValue.toLocaleString()}`, 
                  desc: 'Estimated average project size', 
                  icon: <CalcIcon className="text-[#F59E0B]" size={20} /> 
                }
              ].map((kpi, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-border-custom shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{kpi.label}</span>
                    <div className="p-2 bg-gray-50 rounded-xl border border-border-custom/50">
                      {kpi.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-gray-850 mb-1">{kpi.value}</h4>
                  <p className="text-xs text-gray-500 font-semibold">{kpi.desc}</p>
                </div>
              ))}
            </div>

            {/* User Page Behavior Summary Cards */}
            <div className="bg-white p-6 rounded-3xl border border-border-custom shadow-sm">
              <h3 className="font-bold text-base text-gray-850 mb-6 flex items-center gap-2">
                <span>🖱️ User Page Engagement Profile</span>
                <span className="text-[10px] bg-accent/10 text-accent font-semibold px-2 py-0.5 rounded font-mono">
                  Based on {analyticsData.leadsWithBehavior} lead journeys
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-gray-50/50 p-4 rounded-2xl border border-border-custom/60 flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Avg. Pages Visited</span>
                  <div>
                    <h5 className="text-3xl font-black text-gray-850 font-mono mb-1">{analyticsData.avgPageViews}</h5>
                    <p className="text-xs text-gray-500">Pages browsed per session</p>
                  </div>
                </div>
                <div className="bg-gray-50/50 p-4 rounded-2xl border border-border-custom/60 flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Avg. Session Duration</span>
                  <div>
                    <h5 className="text-3xl font-black text-gray-850 font-mono mb-1">{analyticsData.avgSessionDurationSeconds}s</h5>
                    <p className="text-xs text-gray-500">Active engagement time</p>
                  </div>
                </div>
                <div className="bg-gray-50/50 p-4 rounded-2xl border border-border-custom/60 flex flex-col justify-between">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Avg. Calculator Clicks</span>
                  <div>
                    <h5 className="text-3xl font-black text-gray-850 font-mono mb-1">{analyticsData.avgInteractions}</h5>
                    <p className="text-xs text-gray-500">Calculator actions count</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Ad Spend & ROI Simulator */}
            <div className="bg-[#0E1116] text-white p-8 rounded-3xl border border-border-custom/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-mono">Dynamic Performance Analytics</span>
                <h3 className="text-xl font-bold mt-1">Google Ads Spend & Conversion Simulator</h3>
                <p className="text-xs text-gray-400 mt-1 max-w-xl">
                  Simulate ad budgets and contract closing rates to forecast lead volumes, acquisition costs, revenue growth, and Return on Ad Spend (ROAS).
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Sliders (Left) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-400 uppercase tracking-widest text-[9px]">Monthly Google Ads Spend</span>
                      <span className="text-accent font-mono">${adSpend.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="500" 
                      max="10000" 
                      step="250"
                      value={adSpend}
                      onChange={(e) => setAdSpend(parseInt(e.target.value))}
                      className="w-full accent-accent bg-white/10 rounded-lg appearance-none h-2"
                    />
                    <div className="flex justify-between text-[9px] text-gray-500">
                      <span>$500</span>
                      <span>$5,000</span>
                      <span>$10,000</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-400 uppercase tracking-widest text-[9px]">Sales Close Rate</span>
                      <span className="text-accent font-mono">{closeRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="50" 
                      step="1"
                      value={closeRate}
                      onChange={(e) => setCloseRate(parseInt(e.target.value))}
                      className="w-full accent-accent bg-white/10 rounded-lg appearance-none h-2"
                    />
                    <div className="flex justify-between text-[9px] text-gray-500">
                      <span>5% (Conservative)</span>
                      <span>25%</span>
                      <span>50% (High Close Rate)</span>
                    </div>
                  </div>
                </div>

                {/* Metrics Results Grid (Right) */}
                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { label: 'Forecasted Leads', value: projectedLeadsCount, desc: `At $${cpl}/lead`, suffix: '' },
                    { label: 'Projected Closed Deals', value: projectedCustomersCount, desc: `Based on ${closeRate}% close rate`, suffix: '' },
                    { label: 'Projected Revenue', value: `$${projectedRevenue.toLocaleString()}`, desc: `At $${avgRevenueValue.toLocaleString()}/project`, suffix: '' },
                    { label: 'Cost Per Lead (CPL)', value: `$${cpl}`, desc: 'Dynamic CPC calculation', suffix: '' },
                    { label: 'Customer Acq. Cost (CAC)', value: `$${cac}`, desc: 'Total marketing cost per sale', suffix: '' },
                    { 
                      label: 'Return on Ad Spend (ROAS)', 
                      value: `${roas}x`, 
                      desc: parseFloat(roas) > 3.0 ? '🟢 High Performance' : '🟡 Average Performance', 
                      suffix: '', 
                      highlight: true 
                    }
                  ].map((res, idx) => (
                    <div key={idx} className={`p-4 rounded-2xl border ${res.highlight ? 'bg-accent/10 border-accent/30 col-span-2 sm:col-span-1' : 'bg-white/5 border-white/10'} flex flex-col justify-between`}>
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-2">{res.label}</span>
                      <div>
                        <h4 className={`text-xl font-black font-mono ${res.highlight ? 'text-accent' : 'text-white'}`}>{res.value}</h4>
                        <p className="text-[9px] text-gray-400 mt-1 font-semibold">{res.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Channels & Keywords Distribution Panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Traffic Channels Distribution */}
              <div className="bg-white rounded-3xl border border-border-custom shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 border-b border-border-custom bg-gray-50">
                  <h3 className="font-bold text-base text-gray-850">Traffic Channels Distribution</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Where leads are discovering the estimate engine</p>
                </div>
                <div className="p-6 space-y-5 flex-1 overflow-y-auto max-h-[350px]">
                  {analyticsData.channels.length === 0 ? (
                    <div className="text-center py-12 text-gray-400 text-sm">No channel attributions captured.</div>
                  ) : (
                    analyticsData.channels.map((chan, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-bold text-gray-700">
                          <span className="capitalize">{chan.name}</span>
                          <span>{chan.count} leads ({chan.percentage}%)</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-accent h-full rounded-full transition-all duration-500" 
                            style={{ width: `${chan.percentage}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-gray-400">
                          <span>Est. Opportunity Pipeline</span>
                          <span className="font-semibold font-mono">${chan.pipeline.toLocaleString()}</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Active Search Keywords */}
              <div className="bg-white rounded-3xl border border-border-custom shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 border-b border-border-custom bg-gray-50">
                  <h3 className="font-bold text-base text-gray-850">Google Ads Search Keywords</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Terms and keywords generating lead responses</p>
                </div>
                <div className="overflow-x-auto flex-1 max-h-[350px] overflow-y-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-border-custom bg-gray-50/50 font-bold text-gray-400 uppercase tracking-widest text-[9px]">
                        <th className="px-6 py-3">Search Term / Keyword</th>
                        <th className="px-6 py-3 text-center">Lead Count</th>
                        <th className="px-6 py-3 text-right">Pipeline Opportunity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-custom">
                      {analyticsData.keywords.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-12 text-center text-gray-400 font-medium">
                            No keyword analytics captured yet. Add <code>?utm_term=keyword</code> to landing URLs.
                          </td>
                        </tr>
                      ) : (
                        analyticsData.keywords.map((kw, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/50">
                            <td className="px-6 py-3 font-semibold text-gray-700 font-mono">{kw.name}</td>
                            <td className="px-6 py-3 text-center font-bold text-gray-800">{kw.count}</td>
                            <td className="px-6 py-3 text-right font-mono font-semibold text-accent">${kw.pipeline.toLocaleString()}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Campaign Metrics & Page Journey Rankings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Google Ads Active Campaigns */}
              <div className="bg-white rounded-3xl border border-border-custom shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 border-b border-border-custom bg-gray-50">
                  <h3 className="font-bold text-base text-gray-850">Google Ads Campaigns</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Campaign performance mapped to lead volume</p>
                </div>
                <div className="overflow-x-auto flex-1 max-h-[350px] overflow-y-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-border-custom bg-gray-50/50 font-bold text-gray-400 uppercase tracking-widest text-[9px]">
                        <th className="px-6 py-3">Campaign Name</th>
                        <th className="px-6 py-3 text-center">Leads</th>
                        <th className="px-6 py-3 text-right">Avg. Lead Value</th>
                        <th className="px-6 py-3 text-right">Total Pipeline</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-custom">
                      {analyticsData.campaigns.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-12 text-center text-gray-400 font-medium">
                            No active campaign data found in submitted leads.
                          </td>
                        </tr>
                      ) : (
                        analyticsData.campaigns.map((camp, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/50">
                            <td className="px-6 py-3 font-bold text-gray-850">{camp.name}</td>
                            <td className="px-6 py-3 text-center font-bold text-gray-750">{camp.count}</td>
                            <td className="px-6 py-3 text-right font-mono font-medium text-gray-600">${Math.round(camp.pipeline / camp.count).toLocaleString()}</td>
                            <td className="px-6 py-3 text-right font-mono font-bold text-accent">${camp.pipeline.toLocaleString()}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Popular Landing Pages */}
              <div className="bg-white rounded-3xl border border-border-custom shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 border-b border-border-custom bg-gray-50">
                  <h3 className="font-bold text-base text-gray-850">Top Landing Pages for Conversions</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Initial pages visitors land on before submitting</p>
                </div>
                <div className="overflow-x-auto flex-1 max-h-[350px] overflow-y-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-border-custom bg-gray-50/50 font-bold text-gray-400 uppercase tracking-widest text-[9px]">
                        <th className="px-6 py-3">Page Path</th>
                        <th className="px-6 py-3 text-center">Conversions</th>
                        <th className="px-6 py-3 text-right">Conversion Share</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-custom">
                      {analyticsData.landingPages.length === 0 ? (
                        <tr>
                          <td colSpan={3} className="px-6 py-12 text-center text-gray-400 font-medium">
                            No page behavior tracking data found.
                          </td>
                        </tr>
                      ) : (
                        analyticsData.landingPages.map((lp, idx) => (
                          <tr key={idx} className="hover:bg-gray-50/50">
                            <td className="px-6 py-3 font-semibold text-gray-700 font-mono truncate max-w-xs">{lp.path}</td>
                            <td className="px-6 py-3 text-center font-bold text-gray-850">{lp.count}</td>
                            <td className="px-6 py-3 text-right">
                              <span className="inline-block bg-accent/10 text-accent font-semibold px-2 py-0.5 rounded font-mono text-[10px]">
                                {lp.percentage}%
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* ADD CUSTOMER MODAL */}
      {isAddCustomerOpen && (
        <div className="fixed inset-0 bg-[#0E1116]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden flex flex-col border border-border-custom"
          >
            <div className="px-6 py-4 border-b border-border-custom bg-[#0E1116] text-white flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-mono">CRM Directory</span>
                <h2 className="text-xl font-bold">Register New Customer</h2>
              </div>
              <button onClick={() => setIsAddCustomerOpen(false)} className="p-2 hover:bg-white/10 rounded-lg text-white/70 hover:text-white">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleAddCustomer}>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. David Miller"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                    value={customerFormName}
                    onChange={(e) => setCustomerFormName(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="david@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                    value={customerFormEmail}
                    onChange={(e) => setCustomerFormEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input 
                    type="text" 
                    placeholder="416-555-0192"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                    value={customerFormPhone}
                    onChange={(e) => setCustomerFormPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Internal CRM Notes</label>
                  <textarea 
                    placeholder="e.g. Prefers white quartz, requested direct quotes only."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                    value={customerFormNotes}
                    onChange={(e) => setCustomerFormNotes(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-border-custom flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setIsAddCustomerOpen(false)}
                  className="px-4 py-2 border border-border-custom hover:bg-gray-100 rounded-lg text-xs font-bold"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={customerSaving}
                  className="btn-primary px-5 py-2 text-xs"
                >
                  {customerSaving ? 'Saving...' : 'Register Customer'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* EDIT CUSTOMER MODAL */}
      {isEditCustomerOpen && (
        <div className="fixed inset-0 bg-[#0E1116]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden flex flex-col border border-border-custom"
          >
            <div className="px-6 py-4 border-b border-border-custom bg-[#0E1116] text-white flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-mono">CRM Directory</span>
                <h2 className="text-xl font-bold">Edit Customer File</h2>
              </div>
              <button onClick={() => { setIsEditCustomerOpen(false); setEditingCustomer(null); }} className="p-2 hover:bg-white/10 rounded-lg text-white/70 hover:text-white">
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleEditCustomer}>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="David Miller"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                    value={customerFormName}
                    onChange={(e) => setCustomerFormName(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="david@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                    value={customerFormEmail}
                    onChange={(e) => setCustomerFormEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                  <input 
                    type="text" 
                    placeholder="416-555-0192"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                    value={customerFormPhone}
                    onChange={(e) => setCustomerFormPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Internal CRM Notes</label>
                  <textarea 
                    placeholder="Notes..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                    value={customerFormNotes}
                    onChange={(e) => setCustomerFormNotes(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-border-custom flex justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => { setIsEditCustomerOpen(false); setEditingCustomer(null); }}
                  className="px-4 py-2 border border-border-custom hover:bg-gray-100 rounded-lg text-xs font-bold"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={customerSaving}
                  className="btn-primary px-5 py-2 text-xs"
                >
                  {customerSaving ? 'Saving...' : 'Save Updates'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* CREATE QUOTE WIZARD MODAL */}
      {isCreateQuoteOpen && (
        <div className="fixed inset-0 bg-[#0E1116]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-border-custom"
          >
            {/* Wizard Header */}
            <div className="px-6 py-4 border-b border-border-custom bg-[#0E1116] text-white flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent font-mono">Quote Creator Wizard</span>
                <h2 className="text-xl font-bold">
                  {quoteWizardStep === 1 && 'Step 1: Choose Customer'}
                  {quoteWizardStep === 2 && 'Step 2: Specifications (Optional)'}
                  {quoteWizardStep === 3 && 'Step 3: Line Items Detail Editor'}
                </h2>
              </div>
              <button 
                onClick={() => setIsCreateQuoteOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg text-white/70 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Wizard Progress Line */}
            <div className="bg-gray-200 h-1.5 w-full flex">
              <div className={`h-full bg-accent transition-all duration-300 ${
                quoteWizardStep === 1 ? 'w-1/3' : 
                quoteWizardStep === 2 ? 'w-2/3' : 'w-full'
              }`} />
            </div>

            {/* Wizard Body */}
            <div className="p-6 overflow-y-auto flex-1">
              
              {/* STEP 1: SELECT CUSTOMER */}
              {quoteWizardStep === 1 && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <input 
                        type="text" 
                        placeholder="Search customer directory..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-accent"
                        value={customerSearchQuery}
                        onChange={(e) => setCustomerSearchQuery(e.target.value)}
                      />
                    </div>
                    <button
                      onClick={() => {
                        setCustomerFormName('');
                        setCustomerFormEmail('');
                        setCustomerFormPhone('');
                        setCustomerFormNotes('');
                        setEditingCustomer(null);
                        setIsAddCustomerOpen(true);
                      }}
                      className="px-4 py-2 border border-border-custom hover:bg-gray-100 rounded-lg text-xs font-bold flex items-center gap-1.5"
                    >
                      <Plus size={14} /> New Customer
                    </button>
                  </div>

                  <div className="border border-border-custom rounded-xl overflow-hidden bg-white max-h-[350px] overflow-y-auto divide-y divide-border-custom">
                    {customers.filter(c => {
                      const q = customerSearchQuery.toLowerCase();
                      return (c.name || '').toLowerCase().includes(q) || (c.email || '').toLowerCase().includes(q) || (c.phone || '').includes(q);
                    }).length === 0 ? (
                      <p className="text-center text-sm text-gray-500 py-10">No customer records matching search.</p>
                    ) : (
                      customers.filter(c => {
                        const q = customerSearchQuery.toLowerCase();
                        return (c.name || '').toLowerCase().includes(q) || (c.email || '').toLowerCase().includes(q) || (c.phone || '').includes(q);
                      }).map(c => (
                        <div 
                          key={c.id} 
                          onClick={() => {
                            setSelectedQuoteCustomer(c);
                            setQuoteWizardStep(2);
                          }}
                          className="p-4 hover:bg-gray-50 cursor-pointer flex justify-between items-center transition-colors"
                        >
                          <div>
                            <p className="font-bold text-sm text-gray-800">{c.name}</p>
                            <p className="text-xs text-gray-550">{c.email || 'No Email'} • {c.phone || 'No Phone'}</p>
                          </div>
                          <span className="text-xs text-accent font-bold">Select & Continue ➔</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* STEP 2: SPECS FORM (OPTIONAL) */}
              {quoteWizardStep === 2 && selectedQuoteCustomer && (
                <div className="space-y-6">
                  <div className="bg-background p-4 rounded-xl border border-border-custom flex justify-between items-center">
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">Selected Customer</p>
                      <p className="font-bold text-sm text-gray-800">{selectedQuoteCustomer.name}</p>
                      <p className="text-xs text-gray-500">{selectedQuoteCustomer.email} • {selectedQuoteCustomer.phone}</p>
                    </div>
                    <button 
                      onClick={() => setQuoteWizardStep(1)} 
                      className="text-xs text-accent font-bold hover:underline"
                    >
                      Change Customer
                    </button>
                  </div>

                  {specIncludeCountertops && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Layout Option</label>
                        <select 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                          value={specLayout}
                          onChange={(e) => setSpecLayout(e.target.value)}
                        >
                          <option value="L-Shape">L-Shape</option>
                          <option value="U-Shape">U-Shape</option>
                          <option value="Straight Run">Straight Run</option>
                          <option value="Galley">Galley</option>
                          <option value="Contact Form">Custom Layout</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quartz Tier Selection</label>
                        <select 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                          value={specQuartzLevel}
                          onChange={(e) => setSpecQuartzLevel(e.target.value as any)}
                        >
                          <option value="standard">Standard Tier</option>
                          <option value="premium">Premium Tier</option>
                          <option value="luxury">Luxury Tier</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Slab Material Model</label>
                        <input 
                          type="text" 
                          placeholder="e.g. K8803, Statuario Nuvo"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                          value={specSelectedSlab}
                          onChange={(e) => setSpecSelectedSlab(e.target.value)}
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Countertop Length (linear ft)</label>
                        <input 
                          type="number" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                          value={specCountertopLinearFt}
                          onChange={(e) => handleCountertopLengthChange(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-6 py-2 border-t border-b border-gray-100">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded text-accent focus:ring-0"
                        checked={specIncludeCountertops}
                        onChange={(e) => setSpecIncludeCountertops(e.target.checked)}
                      />
                      Includes Countertops
                    </label>

                    {specIncludeCountertops && (
                      <div className="flex items-center gap-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Island / Peninsula:</label>
                        <select 
                          className="px-2 py-1.5 border border-gray-300 rounded-lg bg-white text-xs focus:outline-none focus:border-accent"
                          value={specIslandType}
                          onChange={(e) => handleIslandTypeChange(e.target.value as any)}
                        >
                          <option value="none">No Island</option>
                          <option value="small">Small Island / Peninsula (+12 SF, +4 LF)</option>
                          <option value="large">Large Island (+20 SF, +8 LF)</option>
                          <option value="waterfall">Large Island w/ Waterfall (+35 SF, +8 LF)</option>
                        </select>
                      </div>
                    )}

                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded text-accent focus:ring-0"
                        checked={specIncludeCabinets}
                        onChange={(e) => setSpecIncludeCabinets(e.target.checked)}
                      />
                      Includes Cabinetry
                    </label>
                  </div>

                  {specIncludeCabinets && (
                    <div className="bg-gray-50 p-4 rounded-xl border border-border-custom space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Cabinet Size (linear ft)</label>
                          <input 
                            type="number" 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                            value={specCabinetLinearFt}
                            onChange={(e) => setSpecCabinetLinearFt(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Cabinet Collection</label>
                          <select 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                            value={specCabinetStyle}
                            onChange={(e) => setSpecCabinetStyle(e.target.value as any)}
                          >
                            <option value="essential">Essential Collection</option>
                            <option value="premium">Premium Collection</option>
                            <option value="elite">Elite Collection</option>
                            <option value="flat">Flat Panel</option>
                            <option value="slim_shaker">Slim Shaker</option>
                            <option value="shaker">Shaker</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Delivery & Install Method</label>
                          <select 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                            value={specDeliveryMethod}
                            onChange={(e) => setSpecDeliveryMethod(e.target.value as any)}
                          >
                            <option value="installed">Fully Installed</option>
                            <option value="rti">RTI (Ready To Install)</option>
                            <option value="rta">RTA (Ready To Assemble)</option>
                          </select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Cabinet Style (Design Name)</label>
                          <input 
                            type="text" 
                            placeholder="e.g. Slim Shaker"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                            value={specCabinetStyleName}
                            onChange={(e) => setSpecCabinetStyleName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Countertop Options / Extras</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-semibold text-gray-700">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={specExtras.sink} onChange={(e) => setSpecExtras({...specExtras, sink: e.target.checked})} /> Undermount Sink
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={specExtras.cooktop} onChange={(e) => setSpecExtras({...specExtras, cooktop: e.target.checked})} /> Cooktop Cutout
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={specExtras.backsplash} onChange={(e) => setSpecExtras({...specExtras, backsplash: e.target.checked})} /> Backsplash Slab
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={specExtras.waterfall} onChange={(e) => setSpecExtras({...specExtras, waterfall: e.target.checked})} /> Waterfall Edge
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={specExtras.removal} onChange={(e) => setSpecExtras({...specExtras, removal: e.target.checked})} /> Demolition / Disposal
                      </label>
                    </div>
                  </div>

                  {specIncludeCabinets && (
                    <div className="space-y-2 border-t border-gray-100 pt-4">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Cabinetry Additions / Extras</label>
                      <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-gray-700">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={specCabinetExtras.pantry} onChange={(e) => setSpecCabinetExtras({...specCabinetExtras, pantry: e.target.checked})} /> Tall Pantry Cabinet
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={specCabinetExtras.island} onChange={(e) => setSpecCabinetExtras({...specCabinetExtras, island: e.target.checked})} /> Island Cabinet Wrap
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" checked={specCabinetExtras.decorativePanels} onChange={(e) => setSpecCabinetExtras({...specCabinetExtras, decorativePanels: e.target.checked})} /> Decorative Matching End Panels
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between border-t border-border-custom pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setWizardQuoteNumber(`QI-2026-${Math.floor(1000 + Math.random() * 9000)}`);
                        setWizardQuoteItems([{ description: 'Custom Design Services', quantity: 1, unitPrice: 1000, total: 1000 }]);
                        setQuoteWizardStep(3);
                      }}
                      className="px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-700"
                    >
                      Skip specs pre-population
                    </button>
                    <button
                      type="button"
                      onClick={generateWizardQuoteFromSpecs}
                      className="btn-primary px-6 py-2 text-xs"
                    >
                      Pre-populate Quote Summary ➔
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: WIZARD LINE ITEM EDITOR */}
              {quoteWizardStep === 3 && selectedQuoteCustomer && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quote/Invoice Reference #</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent font-mono font-bold"
                        value={wizardQuoteNumber}
                        onChange={(e) => setWizardQuoteNumber(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quote Status</label>
                      <select 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                        value={wizardQuoteStatus}
                        onChange={(e) => setWizardQuoteStatus(e.target.value as any)}
                      >
                        <option value="draft">Draft</option>
                        <option value="sent">Sent to Client</option>
                        <option value="approved">Approved & Signed</option>
                        <option value="invoiced">Invoiced</option>
                        <option value="paid">Paid</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quote Line Items</label>
                      <button 
                        onClick={() => setWizardQuoteItems([...wizardQuoteItems, { description: 'Custom Extra Service', quantity: 1, unitPrice: 100, total: 100 }])}
                        className="text-xs text-accent font-bold hover:underline"
                      >
                        + Add Line Item
                      </button>
                    </div>

                    <div className="border border-border-custom rounded-xl overflow-hidden bg-white">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="bg-gray-50 border-b border-border-custom text-gray-400 font-bold uppercase tracking-wider text-[9px]">
                            <th className="px-3 py-2 w-1/2">Description</th>
                            <th className="px-3 py-2 text-center w-12">Qty</th>
                            <th className="px-3 py-2 text-right w-24">Unit Price</th>
                            <th className="px-3 py-2 text-right w-24">Total</th>
                            <th className="px-3 py-2 text-center w-10"></th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border-custom">
                          {wizardQuoteItems.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/50">
                              <td className="px-3 py-2">
                                <input 
                                  type="text" 
                                  className="w-full bg-transparent focus:bg-gray-55 px-1 py-0.5 rounded border border-transparent focus:border-gray-200 text-xs text-gray-800"
                                  value={item.description}
                                  onChange={(e) => {
                                    const items = [...wizardQuoteItems];
                                    items[idx].description = e.target.value;
                                    setWizardQuoteItems(items);
                                  }}
                                />
                              </td>
                              <td className="px-3 py-2">
                                <input 
                                  type="number" 
                                  className="w-full text-center bg-transparent focus:bg-gray-55 px-1 py-0.5 rounded border border-transparent focus:border-gray-200 text-xs text-gray-800"
                                  value={item.quantity}
                                  onChange={(e) => {
                                    const items = [...wizardQuoteItems];
                                    items[idx].quantity = Number(e.target.value);
                                    items[idx].total = items[idx].quantity * items[idx].unitPrice;
                                    setWizardQuoteItems(items);
                                  }}
                                />
                              </td>
                              <td className="px-3 py-2 text-right">
                                <input 
                                  type="number" 
                                  className="w-full text-right bg-transparent focus:bg-gray-55 px-1 py-0.5 rounded border border-transparent focus:border-gray-200 text-xs text-gray-800 font-mono"
                                  value={item.unitPrice}
                                  onChange={(e) => {
                                    const items = [...wizardQuoteItems];
                                    items[idx].unitPrice = Number(e.target.value);
                                    items[idx].total = items[idx].quantity * items[idx].unitPrice;
                                    setWizardQuoteItems(items);
                                  }}
                                />
                              </td>
                              <td className="px-3 py-2 text-right font-bold text-gray-700 font-mono">
                                ${(item.total || 0).toLocaleString()}
                              </td>
                              <td className="px-3 py-2 text-center">
                                <button 
                                  onClick={() => setWizardQuoteItems(wizardQuoteItems.filter((_, i) => i !== idx))}
                                  className="text-red-500 hover:text-red-700 font-bold"
                                >
                                  &times;
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Discount Amount ($)</label>
                      <input 
                        type="number" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent font-mono"
                        value={wizardQuoteDiscount}
                        onChange={(e) => setWizardQuoteDiscount(Number(e.target.value))}
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">HST Tax Rate (%)</label>
                      <select 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                        value={wizardQuoteTaxRate}
                        onChange={(e) => setWizardQuoteTaxRate(Number(e.target.value))}
                      >
                        <option value="0.13">13% HST (Ontario)</option>
                        <option value="0.05">5% GST (Federal Only)</option>
                        <option value="0">0% Exempt</option>
                      </select>
                    </div>
                  </div>

                  <div className="border-t border-border-custom pt-4 flex flex-col items-end text-xs space-y-1">
                    <div className="flex justify-between w-64 text-gray-500 font-medium">
                      <span>Subtotal:</span>
                      <span className="font-bold text-gray-700 font-mono">
                        ${wizardQuoteItems.reduce((acc, item) => acc + (item.total || 0), 0).toLocaleString()}
                      </span>
                    </div>
                    {wizardQuoteDiscount > 0 && (
                      <div className="flex justify-between w-64 text-red-500 font-medium font-mono">
                        <span>Discount:</span>
                        <span>-${wizardQuoteDiscount.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between w-64 text-gray-500 font-medium">
                      <span>HST ({Math.round(wizardQuoteTaxRate * 100)}%):</span>
                      <span className="font-bold text-gray-700 font-mono">
                        ${Math.round((wizardQuoteItems.reduce((acc, item) => acc + (item.total || 0), 0) - wizardQuoteDiscount) * wizardQuoteTaxRate).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between w-64 text-sm font-black border-t border-border-custom pt-2 mt-2">
                      <span>Total Quote Value:</span>
                      <span className="text-accent font-mono text-base">
                        ${(
                          wizardQuoteItems.reduce((acc, item) => acc + (item.total || 0), 0) - 
                          wizardQuoteDiscount + 
                          Math.round((wizardQuoteItems.reduce((acc, item) => acc + (item.total || 0), 0) - wizardQuoteDiscount) * wizardQuoteTaxRate)
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between border-t border-border-custom pt-4">
                    <button
                      type="button"
                      onClick={() => setQuoteWizardStep(2)}
                      className="px-4 py-2 border border-border-custom hover:bg-gray-100 rounded-lg text-xs font-bold"
                    >
                      Back to Specs
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveWizardQuote}
                      disabled={creatingQuote}
                      className="btn-primary px-6 py-2 text-xs"
                    >
                      {creatingQuote ? 'Creating Quote...' : 'Save & Publish Quote ➔'}
                    </button>
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LEAD DETAILS & PROPOSAL EDITOR MODAL (ORIGINAL MODAL) */}
      {selectedLead && (
        <div className="fixed inset-0 bg-[#0E1116]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-border-custom"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-border-custom bg-[#0E1116] text-white flex justify-between items-center">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Lead & Quote Inspector</span>
                <h2 className="text-xl font-bold">{selectedLead.name || 'Anonymous'}</h2>
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background p-4 rounded-xl border border-border-custom">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Customer Profile</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-800">
                      <User size={14} className="text-gray-400" />
                      <span className="font-bold">{selectedLead.name || 'N/A'}</span>
                    </div>
                    {selectedLead.email && (
                      <div className="flex items-center gap-2 text-sm">
                        <Mail size={14} className="text-gray-400" />
                        <a href={`mailto:${selectedLead.email}`} className="text-accent hover:underline break-all font-semibold">
                          {selectedLead.email}
                        </a>
                      </div>
                    )}
                    {selectedLead.phone && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={14} className="text-gray-400" />
                        <a href={`tel:${selectedLead.phone}`} className="text-gray-600 hover:underline">
                          {selectedLead.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-background p-4 rounded-xl border border-border-custom">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Submission & Source</p>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>
                      <span className="text-gray-400">Date Added: </span>
                      <span className="font-medium">{new Date(selectedLead.createdAt).toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Project Timeline: </span>
                      <span className="font-bold capitalize text-sm text-gray-800">
                        {selectedLead.layout === 'Contact Form' ? 'General Contact Inquiry' : (selectedLead.timeline?.replace('-', ' ') || 'N/A')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes / Special Instructions */}
              {selectedLead.notes && (
                <div className="bg-background p-4 rounded-xl border border-border-custom">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {selectedLead.layout === 'Contact Form' ? 'Message Details' : 'Notes & Details'}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap">{selectedLead.notes}</p>
                </div>
              )}

              {/* Traffic Attribution & Behavior Journey */}
              {(selectedLead.utmSource || selectedLead.gclid || selectedLead.behavior) && (
                <div className="bg-[#FAFBFD] p-4 rounded-xl border border-border-custom space-y-4 text-left">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1">
                    <TrendingUp size={12} className="text-accent" />
                    🌐 Traffic Attribution & User Behavior Journey
                  </p>
                  
                  {/* UTM Parameters Grid */}
                  {(selectedLead.utmSource || selectedLead.utmMedium || selectedLead.utmCampaign || selectedLead.utmTerm || selectedLead.utmContent || selectedLead.gclid) && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-white p-3 rounded-lg border border-border-custom/50">
                      {selectedLead.utmSource && (
                        <div>
                          <span className="text-gray-400 block text-[9px] uppercase font-bold">Source</span>
                          <span className="font-semibold text-gray-700">{selectedLead.utmSource}</span>
                        </div>
                      )}
                      {selectedLead.utmMedium && (
                        <div>
                          <span className="text-gray-400 block text-[9px] uppercase font-bold">Medium</span>
                          <span className="font-semibold text-gray-700">{selectedLead.utmMedium}</span>
                        </div>
                      )}
                      {selectedLead.utmCampaign && (
                        <div>
                          <span className="text-gray-400 block text-[9px] uppercase font-bold">Campaign</span>
                          <span className="font-semibold text-gray-700">{selectedLead.utmCampaign}</span>
                        </div>
                      )}
                      {selectedLead.utmTerm && (
                        <div>
                          <span className="text-gray-400 block text-[9px] uppercase font-bold">Keyword / Term</span>
                          <span className="font-semibold text-gray-700 font-mono">{selectedLead.utmTerm}</span>
                        </div>
                      )}
                      {selectedLead.utmContent && (
                        <div>
                          <span className="text-gray-400 block text-[9px] uppercase font-bold">Ad Content</span>
                          <span className="font-semibold text-gray-700">{selectedLead.utmContent}</span>
                        </div>
                      )}
                      {selectedLead.gclid && (
                        <div className="col-span-2">
                          <span className="text-gray-400 block text-[9px] uppercase font-bold">Google Click ID (GCLID)</span>
                          <span className="font-mono text-[10px] text-accent font-semibold break-all bg-accent/5 px-1.5 py-0.5 rounded">{selectedLead.gclid}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Behavior Journey Timeline */}
                  {selectedLead.behavior && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs text-gray-500 bg-white px-3 py-1.5 rounded border border-border-custom/50">
                        <span>Session Start: <strong>{new Date(selectedLead.behavior.sessionStart).toLocaleString()}</strong></span>
                        <span>Total Active Time: <strong>{selectedLead.behavior.timeSpentMs ? `${Math.round(selectedLead.behavior.timeSpentMs / 1000)}s` : 'N/A'}</strong></span>
                      </div>
                      
                      <div className="border border-border-custom/50 rounded-lg overflow-hidden bg-white">
                        <div className="bg-gray-50 px-3 py-2 border-b border-border-custom/50 flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                          <span>User Page Flow ({selectedLead.behavior.pageViews?.length || 0})</span>
                          <span className="normal-case font-normal text-gray-500">
                            Interactions: {selectedLead.behavior.totalInteractions || 0} | Opens: {selectedLead.behavior.calculatorOpenedCount || 0}
                          </span>
                        </div>
                        <div className="divide-y divide-border-custom/30 max-h-48 overflow-y-auto text-xs">
                          {selectedLead.behavior.pageViews && selectedLead.behavior.pageViews.length > 0 ? (
                            selectedLead.behavior.pageViews.map((pv: any, index: number) => (
                              <div key={index} className="px-3 py-2 flex justify-between items-center hover:bg-gray-50/50">
                                <span className="font-mono text-gray-700 truncate max-w-[75%]">{pv.path}</span>
                                <span className="text-gray-400 text-[10px] font-semibold bg-gray-100 px-1.5 py-0.5 rounded shrink-0">
                                  {pv.durationMs ? `${Math.round(pv.durationMs / 1000)}s` : 'active / submit'}
                                </span>
                              </div>
                            ))
                          ) : (
                            <div className="p-3 text-center text-gray-400">No page details recorded.</div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {selectedLead.layout !== 'Contact Form' && (
                <>
                  {/* Countertop Details */}
                  {selectedLead.includeCountertops !== false && (
                    <div className="border border-border-custom rounded-2xl overflow-hidden bg-white">
                      <div className="bg-gray-50 px-4 py-2 border-b border-border-custom flex justify-between items-center">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500">1. Countertop Specifications</h4>
                        {selectedLead.countertopCostLow !== undefined && (
                          <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded font-mono">
                            ${selectedLead.countertopCostLow?.toLocaleString()} - ${selectedLead.countertopCostHigh?.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="p-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                        <div>
                          <p className="text-gray-400 text-[10px]">Layout Style</p>
                          <p className="font-semibold capitalize text-gray-800">{selectedLead.layout || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-[10px]">Quartz Tier</p>
                          <p className="font-semibold text-gray-800">{selectedLead.quartzLevel || 'N/A'}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-[10px]">Slab Material</p>
                          <p className="font-semibold text-gray-800">{selectedLead.selectedSlab || 'None'}</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-[10px]">Countertop Size</p>
                          <p className="font-semibold text-gray-800 font-mono">{selectedLead.countertopSqFt || 0} sq ft</p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-[10px]">Island Type</p>
                          <p className="font-semibold text-gray-800 capitalize">
                            {selectedLead.islandType && selectedLead.islandType !== 'none'
                              ? (selectedLead.islandType === 'waterfall' ? 'Large w/ Waterfall' : selectedLead.islandType)
                              : (selectedLead.hasIsland ? 'Yes' : 'No')}
                          </p>
                        </div>
                        {selectedLead.extras && (Array.isArray(selectedLead.extras) ? selectedLead.extras.length > 0 : Object.keys(selectedLead.extras).some(k => (selectedLead.extras as any)[k] === true)) && (
                          <div className="col-span-2">
                            <p className="text-gray-400 text-[10px]">Countertop Extras</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {(Array.isArray(selectedLead.extras) ? selectedLead.extras : Object.keys(selectedLead.extras).filter(k => (selectedLead.extras as any)[k] === true)).map((extra: string, idx: number) => (
                                <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium">
                                  {extra}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Cabinet Details */}
                  {selectedLead.includeCabinets ? (
                    <div className="border border-border-custom rounded-2xl overflow-hidden bg-white">
                      <div className="bg-gray-50 px-4 py-2 border-b border-border-custom flex justify-between items-center">
                        <h4 className="font-bold text-xs uppercase tracking-wider text-gray-500">
                          {selectedLead.includeCountertops !== false ? "2. Cabinet Specifications" : "1. Cabinet Specifications"}
                        </h4>
                        {selectedLead.cabinetCostLow !== undefined && (
                          <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded font-mono">
                            ${selectedLead.cabinetCostLow?.toLocaleString()} - ${selectedLead.cabinetCostHigh?.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="p-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                        <div>
                          <p className="text-gray-400 text-[10px]">Cabinet Collection</p>
                          <p className="font-semibold text-gray-800">
                            {selectedLead.cabinetStyle === 'essential' ? 'Essential Collection' :
                             selectedLead.cabinetStyle === 'premium' ? 'Premium Collection' :
                             selectedLead.cabinetStyle === 'elite' ? 'Elite Collection' :
                             selectedLead.cabinetStyle === 'flat' ? 'Flat Panel' : 
                             selectedLead.cabinetStyle === 'slim_shaker' ? 'Slim Shaker' : 
                             selectedLead.cabinetStyle === 'shaker' ? 'Shaker' : 
                             selectedLead.cabinetStyle || 'N/A'}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 text-[10px]">Cabinet Linear Footage</p>
                          <p className="font-semibold text-gray-800 font-mono">{selectedLead.cabinetLinearFt || 0} ft</p>
                        </div>
                        {selectedLead.deliveryMethod && (
                          <div>
                            <p className="text-gray-400 text-[10px]">Delivery Method</p>
                            <p className="font-semibold text-gray-800 uppercase">{selectedLead.deliveryMethod}</p>
                          </div>
                        )}
                        {selectedLead.selectedCabinetStyle && (
                          <div>
                            <p className="text-gray-400 text-[10px]">Cabinet Design Style</p>
                            <p className="font-semibold text-gray-800">{selectedLead.selectedCabinetStyle}</p>
                          </div>
                        )}
                         {selectedLead.cabinetExtras && (Array.isArray(selectedLead.cabinetExtras) ? selectedLead.cabinetExtras.length > 0 : Object.keys(selectedLead.cabinetExtras).some(k => (selectedLead.cabinetExtras as any)[k] === true)) && (
                          <div className="col-span-2">
                            <p className="text-gray-400 text-[10px]">Cabinet Additions / Extras</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {(Array.isArray(selectedLead.cabinetExtras) ? selectedLead.cabinetExtras : Object.keys(selectedLead.cabinetExtras).filter(k => (selectedLead.cabinetExtras as any)[k] === true)).map((extra: string, idx: number) => (
                                <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium">
                                  {extra}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-50 p-4 rounded-xl border border-border-custom text-center text-xs text-gray-400 font-medium bg-white">
                      No cabinets requested in this inquiry.
                    </div>
                  )}

                  {/* Total Cost Estimate Summary */}
                  <div className="bg-[#0E1116] text-white p-5 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Estimated Budget Range</h4>
                      <p className="text-xs text-gray-400">Values are calculations from estimator inputs.</p>
                    </div>
                    <div className="text-right font-mono">
                      <span className="text-2xl font-bold text-accent">
                        ${selectedLead.totalCostLow?.toLocaleString()} - ${selectedLead.totalCostHigh?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </>
              )}

              {/* QUOTE AND INVOICE EDITOR INSIDE DETAILS MODAL */}
              {selectedLead.layout !== 'Contact Form' && (
                <div className="border border-border-custom rounded-2xl overflow-hidden mt-6 bg-white">
                  <div className="bg-[#0E1116] px-4 py-3 text-white flex justify-between items-center">
                    <h4 className="font-bold text-sm text-accent uppercase tracking-wider">📄 Quote & Invoice Manager</h4>
                    {quoteNumber && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded capitalize ${
                        quoteStatus === 'approved' ? 'bg-green-500/25 text-green-500' :
                        quoteStatus === 'paid' ? 'bg-emerald-500/25 text-emerald-500' :
                        quoteStatus === 'invoiced' ? 'bg-yellow-500/25 text-yellow-600' :
                        quoteStatus === 'sent' ? 'bg-blue-500/25 text-blue-600' : 'bg-gray-500/25 text-gray-500'
                      }`}>
                        Status: {quoteStatus}
                      </span>
                    )}
                  </div>
                  
                  <div className="p-6 bg-gray-50/50 space-y-6">
                    {!quoteNumber ? (
                      <div className="text-center py-6">
                        <p className="text-sm text-gray-500 mb-4 font-medium">No official quote has been generated for this lead.</p>
                        <button 
                          onClick={generateInitialQuote}
                          className="btn-primary px-6 py-3 text-xs font-bold"
                        >
                          Generate Initial Quote Proposal
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quote Reference #</label>
                            <input 
                              type="text" 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent font-mono font-bold text-gray-800"
                              value={quoteNumber}
                              onChange={(e) => setQuoteNumber(e.target.value)}
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quote Status</label>
                            <select 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                              value={quoteStatus}
                              onChange={(e) => setQuoteStatus(e.target.value as any)}
                            >
                              <option value="draft">Draft</option>
                              <option value="sent">Sent to Client</option>
                              <option value="approved">Approved / Signed</option>
                              <option value="invoiced">Invoiced</option>
                              <option value="paid">Paid</option>
                            </select>
                          </div>
                        </div>

                        {/* Line Items Table */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Quote Line Items</label>
                            <button 
                              onClick={() => setQuoteItems([...quoteItems, { description: 'Custom Extra Service', quantity: 1, unitPrice: 100, total: 100 }])}
                              className="text-xs text-accent font-bold hover:underline"
                            >
                              + Add Line Item
                            </button>
                          </div>
                          
                          <div className="border border-border-custom rounded-xl overflow-hidden bg-white">
                            <table className="w-full text-left text-xs">
                              <thead>
                                <tr className="bg-gray-50 border-b border-border-custom text-gray-400 font-bold uppercase tracking-wider text-[9px]">
                                  <th className="px-3 py-2 w-1/2">Description</th>
                                  <th className="px-3 py-2 text-center w-12">Qty</th>
                                  <th className="px-3 py-2 text-right w-24">Unit Price</th>
                                  <th className="px-3 py-2 text-right w-24">Total</th>
                                  <th className="px-3 py-2 text-center w-10"></th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border-custom">
                                {quoteItems.map((item, idx) => (
                                  <tr key={idx} className="hover:bg-gray-50/50">
                                    <td className="px-3 py-2">
                                      <input 
                                        type="text" 
                                        className="w-full bg-transparent focus:bg-gray-50 px-1 py-0.5 rounded border border-transparent focus:border-gray-200 text-xs text-gray-800 font-semibold"
                                        value={item.description}
                                        onChange={(e) => {
                                          const items = [...quoteItems];
                                          items[idx].description = e.target.value;
                                          setQuoteItems(items);
                                        }}
                                      />
                                    </td>
                                    <td className="px-3 py-2">
                                      <input 
                                        type="number" 
                                        className="w-full text-center bg-transparent focus:bg-gray-50 px-1 py-0.5 rounded border border-transparent focus:border-gray-200 text-xs text-gray-800 font-mono"
                                        value={item.quantity}
                                        onChange={(e) => {
                                          const items = [...quoteItems];
                                          items[idx].quantity = Number(e.target.value);
                                          items[idx].total = items[idx].quantity * items[idx].unitPrice;
                                          setQuoteItems(items);
                                        }}
                                      />
                                    </td>
                                    <td className="px-3 py-2 text-right font-mono">
                                      <input 
                                        type="number" 
                                        className="w-full text-right bg-transparent focus:bg-gray-50 px-1 py-0.5 rounded border border-transparent focus:border-gray-200 text-xs text-gray-800"
                                        value={item.unitPrice}
                                        onChange={(e) => {
                                          const items = [...quoteItems];
                                          items[idx].unitPrice = Number(e.target.value);
                                          items[idx].total = items[idx].quantity * items[idx].unitPrice;
                                          setQuoteItems(items);
                                        }}
                                      />
                                    </td>
                                    <td className="px-3 py-2 text-right font-bold text-gray-700 font-mono">
                                      ${(item.total || 0).toLocaleString()}
                                    </td>
                                    <td className="px-3 py-2 text-center">
                                      <button 
                                        onClick={() => setQuoteItems(quoteItems.filter((_, i) => i !== idx))}
                                        className="text-red-500 hover:text-red-700 font-bold"
                                      >
                                        &times;
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* Discount & Tax Options */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Discount Amount ($)</label>
                            <input 
                              type="number" 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent font-mono"
                              value={quoteDiscount}
                              onChange={(e) => setQuoteDiscount(Number(e.target.value))}
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">HST Tax Rate (%)</label>
                            <select 
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:outline-none focus:border-accent"
                              value={quoteTaxRate}
                              onChange={(e) => setQuoteTaxRate(Number(e.target.value))}
                            >
                              <option value="0.13">13% HST (Ontario)</option>
                              <option value="0.05">5% GST (Federal Only)</option>
                              <option value="0">0% Exempt</option>
                            </select>
                          </div>
                        </div>

                        {/* Calculated Summary Table */}
                        <div className="border-t border-border-custom pt-4 flex flex-col items-end text-xs space-y-1">
                          <div className="flex justify-between w-64 text-gray-500 font-medium">
                            <span>Subtotal:</span>
                            <span className="font-bold text-gray-700 font-mono">
                              ${quoteItems.reduce((acc, item) => acc + (item.total || 0), 0).toLocaleString()}
                            </span>
                          </div>
                          {quoteDiscount > 0 && (
                            <div className="flex justify-between w-64 text-red-500 font-medium font-mono">
                              <span>Discount:</span>
                              <span>-${quoteDiscount.toLocaleString()}</span>
                            </div>
                          )}
                          <div className="flex justify-between w-64 text-gray-500 font-medium">
                            <span>HST ({Math.round(quoteTaxRate * 100)}%):</span>
                            <span className="font-bold text-gray-700 font-mono">
                              ${Math.round((quoteItems.reduce((acc, item) => acc + (item.total || 0), 0) - quoteDiscount) * quoteTaxRate).toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between w-64 text-sm font-black border-t border-border-custom pt-2 mt-2">
                            <span>Total Quote Value:</span>
                            <span className="text-accent font-mono text-base">
                              ${(
                                quoteItems.reduce((acc, item) => acc + (item.total || 0), 0) - 
                                quoteDiscount + 
                                Math.round((quoteItems.reduce((acc, item) => acc + (item.total || 0), 0) - quoteDiscount) * quoteTaxRate)
                              ).toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* E-signature Details */}
                        {selectedLead.clientSignatureName && (
                          <div className="bg-green-50 p-4 border border-green-200 rounded-xl flex flex-col md:flex-row justify-between md:items-center text-xs text-green-800 gap-2">
                            <div>
                              <p className="font-bold">✓ Digitally Signed & Approved</p>
                              <p className="text-[10px] text-green-600 mt-0.5 font-mono">
                                Signed electronically as: <strong>{selectedLead.clientSignatureName}</strong>
                              </p>
                            </div>
                            <p className="text-[10px] text-green-600 font-medium">
                              Signed on: {new Date(selectedLead.clientSignedAt || '').toLocaleString()}
                            </p>
                          </div>
                        )}

                        {/* Quote Actions */}
                        <div className="flex flex-wrap gap-3 pt-2">
                          <button 
                            onClick={saveQuote}
                            disabled={savingQuote}
                            className="bg-accent hover:bg-accent-hover text-white px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-md"
                          >
                            {savingQuote ? 'Saving...' : 'Save Quote Details'}
                          </button>
                          
                          <button 
                            onClick={copyLink}
                            className="bg-white hover:bg-gray-50 text-gray-700 border border-border-custom px-5 py-2.5 rounded-lg text-xs font-bold transition-all"
                          >
                            {copied ? 'Copied Link!' : 'Copy Proposal Link'}
                          </button>
                          
                          <a 
                            href={`/quote/${selectedLead.id}`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white hover:bg-gray-50 text-gray-700 border border-border-custom px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center font-bold"
                          >
                            Preview Proposal ↗
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-border-custom bg-gray-50 flex justify-end gap-3">
              <button 
                onClick={() => setSelectedLead(null)}
                className="px-5 py-2 border border-border-custom hover:bg-gray-100 rounded-lg text-sm font-bold transition-colors"
              >
                Close Details
              </button>
              {selectedLead.email && (
                <a 
                  href={`mailto:${selectedLead.email}?subject=Quartz%20International%2520Kitchen%2525Estimate`}
                  className="btn-primary px-5 py-2 text-sm font-bold flex items-center justify-center animate-pulse"
                >
                  Email Customer
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
