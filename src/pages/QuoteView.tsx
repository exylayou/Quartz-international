import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, FileText, Calendar, User, Mail, Phone, ArrowRight, ShieldCheck, Download } from 'lucide-react';

import { SEO } from '../components/SEO';
interface QuoteItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

interface QuoteData {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  layout: string;
  quartzLevel: string;
  selectedSlab: string;
  countertopSqFt: number;
  hasIsland: boolean;
  includeCabinets: boolean;
  cabinetLinearFt: number;
  cabinetStyle: string;
  timeline: string;
  
  quoteStatus: 'draft' | 'sent' | 'approved' | 'invoiced' | 'paid';
  quoteNumber: string;
  quoteItems: QuoteItem[];
  quoteTaxRate: number;
  quoteDiscount: number;
  quoteSubtotal: number;
  quoteTax: number;
  quoteTotal: number;
  clientSignedAt?: string;
  clientSignatureName?: string;
}

export default function QuoteView() {
  const { id } = useParams<{ id: string }>();
  const [quote, setQuote] = React.useState<QuoteData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [signatureName, setSignatureName] = React.useState('');
  const [signing, setSigning] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');

  const fetchQuote = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`/api/quotes/${id}`);
      if (response.ok) {
        const data = await response.json();
        setQuote(data);
      } else {
        setError('The requested quote could not be found or has not been issued yet.');
      }
    } catch (err) {
      setError('Connection failure. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (id) {
      fetchQuote();
    }
  }, [id]);

  const handleApprove = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!signatureName.trim()) return;

    setSigning(true);
    try {
      const response = await fetch(`/api/quotes/${id}/approve`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ signatureName: signatureName.trim() })
      });

      if (response.ok) {
        setSuccessMessage('Proposal approved and signed successfully!');
        await fetchQuote(); // Reload signed status
      } else {
        alert('Failed to approve proposal. Please try again.');
      }
    } catch (err) {
      alert('Error connecting to server. Please try again.');
    } finally {
      setSigning(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4 pt-32">
      <SEO title="Quote View | Quartz International" description="Learn more about Quote View at Quartz International. We provide premium countertops and cabinetry in Toronto and the GTA." />

        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Loading Proposal Details...</p>
        </div>
      </div>
    );
  }

  if (error || !quote) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4 pt-32">
        <div className="glass-panel p-8 max-w-md w-full rounded-3xl shadow-xl border border-red-200 text-center space-y-6 bg-white">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto">
            <AlertCircle size={32} />
          </div>
          <h1 className="text-2xl font-bold text-text-primary">Quote Unavailable</h1>
          <p className="text-gray-500 text-sm leading-relaxed">{error || 'Unable to load quote details.'}</p>
          <Link to="/" className="btn-primary inline-flex h-12 px-8 items-center rounded-xl text-sm justify-center">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  const isApproved = quote.quoteStatus === 'approved' || quote.quoteStatus === 'paid' || quote.quoteStatus === 'invoiced';

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Success Banner */}
        {successMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-2xl flex items-center gap-3 text-sm font-bold shadow-sm"
          >
            <CheckCircle2 className="text-green-500 shrink-0" size={20} />
            {successMessage}
          </motion.div>
        )}

        {/* Branded Web Proposal Sheet */}
        <div className="bg-white rounded-[2.5rem] shadow-xl border border-border-custom overflow-hidden">
          
          {/* Header Block */}
          <div className="bg-[#0E1116] text-white p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent block mb-2">Project Proposal</span>
                <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
                  Quartz <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-4">International</span>
                </h1>
              </div>
              <div className="text-left md:text-right">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Proposal ID</p>
                <p className="text-xl font-black text-accent">{quote.quoteNumber}</p>
                <p className="text-xs text-gray-500 mt-1">Issued: {new Date(quote.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-10">
            
            {/* Customer & Scope Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-border-custom pb-2">Client Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <User size={14} className="text-accent" />
                    <span className="font-bold text-text-primary">{quote.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-accent" />
                    <a href={`mailto:${quote.email}`} className="text-gray-600 hover:underline">{quote.email}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-accent" />
                    <a href={`tel:${quote.phone}`} className="text-gray-600 hover:underline">{quote.phone}</a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-border-custom pb-2">Project Overview</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-400">Layout: </span>
                    <span className="font-semibold capitalize">{quote.layout || 'N/A'}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Slab Selection: </span>
                    <span className="font-semibold">{quote.selectedSlab || `${quote.quartzLevel} Quartz`}</span>
                  </div>
                  {quote.includeCabinets && (
                    <div>
                      <span className="text-gray-400">Cabinets: </span>
                      <span className="font-semibold">{quote.cabinetLinearFt} ft ({
                        quote.cabinetStyle === 'essential' ? 'Essential Collection' :
                        quote.cabinetStyle === 'premium' ? 'Premium Collection' :
                        quote.cabinetStyle === 'elite' ? 'Elite Collection' :
                        quote.cabinetStyle === 'flat' ? 'Flat Panel' :
                        quote.cabinetStyle === 'slim_shaker' ? 'Slim Shaker' :
                        quote.cabinetStyle === 'shaker' ? 'Shaker' : quote.cabinetStyle
                      })</span>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-400">Timeline Target: </span>
                    <span className="font-semibold capitalize">{quote.timeline?.replace('-', ' ') || 'Flexible'}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Line Items Table */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 border-b border-border-custom pb-2">Scope of Work & Pricing</h3>
              
              <div className="border border-border-custom rounded-2xl overflow-hidden bg-white">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-border-custom text-gray-400 font-bold uppercase tracking-wider text-[9px] sm:text-[10px]">
                      <th className="px-4 py-3 w-1/2">Description</th>
                      <th className="px-4 py-3 text-center w-16">Qty</th>
                      <th className="px-4 py-3 text-right w-24 sm:w-32">Unit Price</th>
                      <th className="px-4 py-3 text-right w-24 sm:w-32">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-custom">
                    {quote.quoteItems?.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/30">
                        <td className="px-4 py-4 font-semibold text-text-primary">{item.description}</td>
                        <td className="px-4 py-4 text-center text-gray-500">{item.quantity}</td>
                        <td className="px-4 py-4 text-right text-gray-500">${item.unitPrice.toLocaleString()}</td>
                        <td className="px-4 py-4 text-right font-bold text-gray-800">${item.total.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="flex flex-col items-end pt-4">
              <div className="w-full sm:w-80 space-y-2 text-xs sm:text-sm border-t border-border-custom pt-6">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal:</span>
                  <span className="font-bold text-gray-800">${quote.quoteSubtotal.toLocaleString()}</span>
                </div>
                {quote.quoteDiscount > 0 && (
                  <div className="flex justify-between text-red-500">
                    <span>Discount:</span>
                    <span>-${quote.quoteDiscount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-500">
                  <span>HST ({Math.round(quote.quoteTaxRate * 100)}%):</span>
                  <span className="font-bold text-gray-800">${quote.quoteTax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-base sm:text-lg font-black border-t border-border-custom pt-4 mt-2">
                  <span>Total Amount:</span>
                  <span className="text-accent">${quote.quoteTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Signature & Sign-off Area */}
            <div className="border-t border-border-custom pt-10">
              {isApproved ? (
                <div className="bg-green-50 border border-green-200 rounded-[2rem] p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-green-900 text-lg uppercase tracking-wider">Proposal Electronically Signed & Approved</h3>
                    <p className="text-green-700 text-sm mt-1 leading-relaxed">
                      This quote has been approved by <strong>{quote.clientSignatureName}</strong> on {new Date(quote.clientSignedAt || '').toLocaleDateString()}.
                    </p>
                    <p className="text-[10px] text-green-600 mt-2 font-medium tracking-wide">
                      A copy of this proposal has been locked for fabrication and template scheduling.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-[#F8F9FA] border border-border-custom rounded-[2rem] p-8 md:p-10 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest mb-2">
                      <ShieldCheck size={16} />
                      Formal Sign-off & E-Signature
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">Review & Approve This Proposal</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      By typing your name below and clicking "Approve & Sign Quote", you agree to the project specification details, scope of work, and billing values documented in this proposal. Quartz International will contact you directly to schedule templating measurements.
                    </p>
                  </div>

                  <form onSubmit={handleApprove} className="space-y-4 max-w-md">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Type Your Full Name to Sign</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Jane Doe"
                        className="w-full h-12 px-4 border border-border-custom rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
                        value={signatureName}
                        onChange={(e) => setSignatureName(e.target.value)}
                        required
                      />
                    </div>
                    <button 
                      type="submit"
                      disabled={signing || !signatureName.trim()}
                      className="btn-primary w-full h-12 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent/15"
                    >
                      {signing ? 'Signing...' : 'Approve & Sign Quote'}
                      <ArrowRight size={16} />
                    </button>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
