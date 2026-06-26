import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, FileText, Calendar, User, Mail, Phone, ArrowRight, ShieldCheck, Download, MessageCircle, CreditCard, Loader2 } from 'lucide-react';

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
  quoteNotes?: string;
  clientSignedAt?: string;
  clientSignatureName?: string;
  quoteDepositPercent?: number;
}

export default function QuoteView() {
  const { id } = useParams<{ id: string }>();
  const [quote, setQuote] = React.useState<QuoteData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [signatureName, setSignatureName] = React.useState('');
  const [signing, setSigning] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');
  const [verifyingPayment, setVerifyingPayment] = React.useState(false);
  const [paymentVerificationSuccess, setPaymentVerificationSuccess] = React.useState(false);
  const [paymentVerificationError, setPaymentVerificationError] = React.useState('');
  const [redirectingToStripe, setRedirectingToStripe] = React.useState(false);

  React.useEffect(() => {
    if (!id) return;
    const query = new URLSearchParams(window.location.search);
    const success = query.get('success');
    const sessionId = query.get('session_id');

    if (success === 'true' && sessionId) {
      const verifyPayment = async () => {
        setVerifyingPayment(true);
        try {
          const response = await fetch(`/api/quotes/${id}/verify-payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sessionId })
          });

          if (response.ok) {
            setPaymentVerificationSuccess(true);
            setSuccessMessage('Payment completed and verified successfully!');
            // Clean up the URL query parameters
            window.history.replaceState({}, document.title, `/quote/${id}`);
            // Refetch quote to display updated paid state
            await fetchQuote();
          } else {
            const data = await response.json();
            setPaymentVerificationError(data.error || 'Payment verification failed. Please contact support.');
          }
        } catch (err) {
          setPaymentVerificationError('Connection failure. Failed to verify payment.');
        } finally {
          setVerifyingPayment(false);
        }
      };

      verifyPayment();
    }
  }, [id]);

  const handlePayWithStripe = async () => {
    setRedirectingToStripe(true);
    try {
      const response = await fetch(`/api/quotes/${id}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        if (data.url) {
          window.location.href = data.url;
        } else {
          alert('Failed to get payment checkout session.');
        }
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to initiate checkout session.');
      }
    } catch (err) {
      alert('Error connecting to server. Please try again.');
    } finally {
      setRedirectingToStripe(false);
    }
  };

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

  if (verifyingPayment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4 pt-32">
        <SEO title="Verifying Payment | Quartz International" description="Verifying your transaction with Stripe. Please wait." />
        <div className="flex flex-col items-center gap-4 text-center">
          <Loader2 className="w-12 h-12 text-accent animate-spin" />
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest animate-pulse">Verifying Transaction with Stripe...</p>
          <p className="text-xs text-gray-400">Do not refresh or close this window.</p>
        </div>
      </div>
    );
  }

  if (paymentVerificationError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4 pt-32">
        <div className="glass-panel p-8 max-w-md w-full rounded-3xl shadow-xl border border-red-200 text-center space-y-6 bg-white">
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto">
            <AlertCircle size={32} />
          </div>
          <h1 className="text-2xl font-bold text-text-primary">Payment Verification Failed</h1>
          <p className="text-gray-500 text-sm leading-relaxed">{paymentVerificationError}</p>
          <button onClick={() => setPaymentVerificationError('')} className="btn-primary inline-flex h-12 px-8 items-center rounded-xl text-sm justify-center w-full">
            Back to Proposal
          </button>
        </div>
      </div>
    );
  }

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

            {/* Financial Summary & Notes */}
            <div className="flex flex-col md:flex-row justify-between items-start pt-4 gap-8">
              {/* Additional Notes */}
              <div className="w-full md:w-1/2">
                {quote.quoteNotes && (
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Additional Information / Notes</h3>
                    <p className="text-sm text-gray-600 whitespace-pre-wrap leading-relaxed">
                      {quote.quoteNotes}
                    </p>
                  </div>
                )}
              </div>

              {/* Financial Summary */}
              <div className="w-full md:w-80 space-y-2 text-xs sm:text-sm border-t md:border-t-0 border-border-custom pt-6 md:pt-0">
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
              {quote.quoteStatus === 'paid' ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-[2rem] p-8 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 size={24} className="text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="font-black text-emerald-900 text-lg uppercase tracking-wider">Invoice Paid & Confirmed</h3>
                    <p className="text-emerald-700 text-sm mt-1 leading-relaxed">
                      Thank you! We have successfully received and processed your payment for proposal <strong>{quote.quoteNumber}</strong>.
                    </p>
                    <p className="text-[10px] text-emerald-600 mt-2 font-medium tracking-wide">
                      Our project coordinator has locked your slot and will confirm site laser templating times shortly.
                    </p>
                  </div>
                </div>
              ) : isApproved ? (
                <div className="space-y-6">
                  {/* Approval Banner */}
                  <div className="bg-green-50 border border-green-200 rounded-[2rem] p-8 text-center space-y-4">
                    <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-black text-green-900 text-lg uppercase tracking-wider">Proposal Electronically Signed & Approved</h3>
                      <p className="text-green-700 text-sm mt-1 leading-relaxed">
                        This quote has been approved by <strong>{quote.clientSignatureName || 'Client'}</strong> on {quote.clientSignedAt ? new Date(quote.clientSignedAt).toLocaleDateString() : new Date().toLocaleDateString()}.
                      </p>
                      <p className="text-[10px] text-green-600 mt-2 font-medium tracking-wide">
                        A copy of this proposal has been locked for fabrication and template scheduling.
                      </p>
                    </div>
                  </div>

                  {/* Payment Deposit CTA Section */}
                  <div className="bg-white border border-border-custom rounded-[2rem] p-8 md:p-10 space-y-8 shadow-sm relative overflow-hidden text-left">
                    {/* Background accent glow */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
                    
                    {(() => {
                      const depositPercent = quote.quoteDepositPercent !== undefined ? quote.quoteDepositPercent : 50;
                      const isDeposit = quote.quoteStatus === 'approved';
                      const paymentAmount = isDeposit 
                        ? Math.round(quote.quoteTotal * (depositPercent / 100))
                        : quote.quoteTotal;
                      
                      return (
                        <>
                          <div className="border-b border-border-custom pb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent block mb-2">
                              {isDeposit ? "Next Step: Confirm Installation Slot" : "Outstanding Invoice Payment"}
                            </span>
                            <h3 className="text-2xl font-black text-text-primary">
                              {isDeposit ? "Securing Your Installation Slot" : "Invoice Payment Due"}
                            </h3>
                            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                              {isDeposit 
                                ? `To lock in your materials, schedule site measurements (laser templates), and reserve your production date, a ${depositPercent}% deposit is required.`
                                : `Please complete payment for the remaining balance of your project.`
                              }
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            
                            {/* Interac e-Transfer panel */}
                            <div className="bg-[#F8F9FA] border border-border-custom rounded-2xl p-6 space-y-5">
                              <div className="flex justify-between items-center">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Interac e-Transfer Instructions</span>
                                <span className="bg-accent/10 text-accent font-semibold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded">Auto-Deposit</span>
                              </div>
                              
                              <div className="space-y-4">
                                <div className="bg-white p-4 rounded-xl border border-border-custom/50 flex justify-between items-center">
                                  <div>
                                    <span className="text-[10px] text-gray-400 font-bold block uppercase">
                                      {isDeposit ? `Deposit Amount (${depositPercent}%)` : "Full Invoice Amount"}
                                    </span>
                                    <span className="text-2xl font-black text-accent">${paymentAmount.toLocaleString()}</span>
                                  </div>
                                  <span className="text-[10px] text-gray-400 font-medium">of total ${quote.quoteTotal.toLocaleString()}</span>
                                </div>

                                <div className="space-y-2 text-xs">
                                  <div className="flex justify-between py-1.5 border-b border-gray-200/50">
                                    <span className="text-gray-400">Recipient:</span>
                                    <span className="font-bold text-gray-800">Quartz International</span>
                                  </div>
                                  <div className="flex justify-between py-1.5 border-b border-gray-200/50">
                                    <span className="text-gray-400">Send To Email:</span>
                                    <span className="font-bold text-accent font-mono">info@quartzinternational.ca</span>
                                  </div>
                                  <div className="flex justify-between py-1.5 border-b border-gray-200/50">
                                    <span className="text-gray-400">Memo Reference:</span>
                                    <span className="font-bold text-gray-800 font-mono">{quote.quoteNumber}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="text-[10px] text-gray-400 leading-relaxed bg-white/50 p-3 rounded-lg border border-border-custom/30">
                                Please include the quote number <strong className="font-mono">{quote.quoteNumber}</strong> in the e-Transfer message field so our finance team can instantly credit your account.
                              </div>
                            </div>

                            {/* Secure Credit Card Payment (Stripe) & Contact Options */}
                            <div className="space-y-6">
                              <div className="space-y-2">
                                <h4 className="text-sm font-bold text-text-primary">Option A: Pay securely via Credit/Debit Card</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                  Pay your {isDeposit ? `${depositPercent}% deposit` : 'invoice balance'} instantly using any major credit card, Visa Debit, or Mastercard via secure Stripe checkout.
                                </p>
                              </div>

                              <button
                                onClick={handlePayWithStripe}
                                disabled={redirectingToStripe}
                                className="bg-accent hover:bg-accent-hover text-white h-12 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent/15 transition-all w-full disabled:opacity-50"
                              >
                                <CreditCard size={18} />
                                {redirectingToStripe ? 'Redirecting to Stripe...' : `Pay $${paymentAmount.toLocaleString()} via Credit Card`}
                              </button>

                              <div className="relative flex py-2 items-center">
                                <div className="flex-grow border-t border-gray-200"></div>
                                <span className="flex-shrink mx-4 text-gray-400 text-[10px] font-bold uppercase tracking-wider">OR</span>
                                <div className="flex-grow border-t border-gray-200"></div>
                              </div>

                              <div className="space-y-2">
                                <h4 className="text-sm font-bold text-text-primary">Option B: Confirm Booking & Scheduling</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                  If sending e-Transfer, notify our team via WhatsApp to instantly book your laser template measurement appointment.
                                </p>
                              </div>

                              <div className="space-y-3">
                                <a 
                                  href={localStorage.getItem('qi_has_contacted') === 'true' 
                                    ? 'https://api.whatsapp.com/send/?phone=16473706684'
                                    : `https://api.whatsapp.com/send/?phone=16473706684&text=${encodeURIComponent(`Hi, I've just approved proposal ${quote.quoteNumber} and sent the deposit. I'd like to confirm the next steps and template timing.`)}`
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                  onClick={() => {
                                    localStorage.setItem('qi_has_contacted', 'true');
                                  }}
                                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white h-12 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 transition-colors w-full"
                                >
                                  <MessageCircle size={18} />
                                  Confirm via WhatsApp
                                </a>
                                
                                <div className="text-center">
                                  <a
                                    href="https://api.whatsapp.com/send/?phone=16473706684"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[10px] text-gray-400 underline hover:text-accent font-semibold"
                                  >
                                    Already chatting with us? Open chat without pre-filled text
                                  </a>
                                </div>
                              </div>

                              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-850">
                                <p className="font-bold flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                                  Prefer to pay another way?
                                </p>
                                <p className="text-amber-700 mt-1 leading-relaxed">
                                  We also accept bank drafts, EFT, and major credit cards (subject to processing fees). Call us at <strong>(647) 370-6938</strong> to complete payment.
                                </p>
                              </div>
                            </div>

                          </div>
                        </>
                      );
                    })()}
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
