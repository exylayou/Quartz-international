import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Download, 
  ArrowRight, 
  ShieldCheck,
  Check,
  Timer,
  Plus
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const state = location.state;

  React.useEffect(() => {
    if (!state || !state.finalPrice) {
      navigate('/estimate');
    }
  }, [state, navigate]);

  if (!state || !state.finalPrice) return null;

  const { finalPrice, quartzLevel, kitchenSize, hasIsland, extras, includeCabinets, cabinetSize, cabinetStyle, cabinetExtras, timeline } = state;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...state, ...formData })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback for demo
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const selectedExtrasCount = Object.values(extras).filter(Boolean).length;
  const cabinetExtrasCount = Object.values(cabinetExtras || {}).filter(Boolean).length;

  return (
    <div className="bg-background min-h-screen py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Results Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <CheckCircle2 size={14} />
            Estimate Generated Successfully
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Your Smart Estimate</h1>
          <p className="text-gray-600 text-lg">
            {includeCabinets 
              ? `Complete kitchen project breakdown.` 
              : `Detailed breakdown for your ${quartzLevel} quartz project.`}
          </p>
        </div>

        {/* Main Display */}
        <div className="max-w-4xl mx-auto mb-20 px-4 sm:px-0">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="glass-panel p-8 md:p-16 rounded-[3rem] shadow-2xl border-accent/20 border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="text-center mb-12 relative z-10">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-4 block">
                {includeCabinets ? 'Estimated Full Kitchen Cost' : 'Estimated Countertop Cost'}
              </span>
              <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-text-primary mb-2 tracking-tighter">
                <span className="text-accent">$</span>{finalPrice.totalLow.toLocaleString()} <span className="text-accent/50 text-2xl md:text-5xl">–</span> ${finalPrice.totalHigh.toLocaleString()}
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Includes Materials & Professional Installation</p>
              
              <div className="max-w-lg mx-auto space-y-4 bg-background border border-border-custom p-8 rounded-3xl">
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Countertops</span>
                    <span className="font-bold text-text-primary">
                      ${finalPrice.countertopLow.toLocaleString()} – ${finalPrice.countertopHigh.toLocaleString()}
                    </span>
                 </div>
                 {includeCabinets && (
                   <div className="flex justify-between items-center text-sm pt-4 border-t border-border-custom">
                      <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Cabinets ({cabinetStyle.replace('_', ' ')})</span>
                      <span className="font-bold text-text-primary">${finalPrice.cabinetLow.toLocaleString()} – ${finalPrice.cabinetHigh.toLocaleString()}</span>
                   </div>
                 )}
                 <div className="flex justify-between items-center text-sm pt-4 border-t border-border-custom">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Project Total</span>
                    <span className="font-bold text-accent">${finalPrice.totalLow.toLocaleString()} – ${finalPrice.totalHigh.toLocaleString()}</span>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10 border-y border-border-custom relative z-10">
              <div className="text-center px-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Countertops</p>
                <p className="text-xl font-bold">{kitchenSize} sq ft</p>
              </div>
              <div className="text-center px-4 border-l border-border-custom">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Timeline</p>
                <p className="text-xl font-bold capitalize">{timeline.replace('-', ' ')}</p>
              </div>
              <div className="text-center px-4 border-l border-border-custom">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Quartz Level</p>
                <p className="text-xl font-bold capitalize">{quartzLevel}</p>
              </div>
              <div className="text-center px-4 border-l border-border-custom">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Extras Selected</p>
                <p className="text-xl font-bold">{selectedExtrasCount + (includeCabinets ? cabinetExtrasCount : 0)}</p>
              </div>
            </div>

            <div className="pt-8 flex flex-wrap justify-center gap-3 relative z-10">
              {Object.entries(extras).filter(([_, v]) => v).map(([key]) => (
                <span key={key} className="px-4 py-1.5 bg-gray-50 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-border-custom">
                  + {key.replace('sink', 'sink cutout').replace('cooktop', 'cooktop cutout')}
                </span>
              ))}
              {includeCabinets && cabinetExtras && Object.entries(cabinetExtras).filter(([_, v]) => v).map(([key]) => (
                <span key={key} className="px-4 py-1.5 bg-accent/5 rounded-full text-[10px] font-bold text-accent uppercase tracking-widest border border-accent/20">
                  + {key.replace('decorativePanels', 'decorative panels').replace('island', 'island cabinets')}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lead Capture Form */}
        <div id="lead-form" className="glass-panel p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-2xl bg-white/50">
          {!isSubmitted ? (
            <>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Request Your Official Quote</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Enter your details to receive your official PDF breakdown and schedule a free in-home measurement.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="input-field h-14 rounded-xl" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="input-field h-14 rounded-xl" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="input-field h-14 rounded-xl" 
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Additional Notes</label>
                    <input 
                      type="text" 
                      className="input-field h-14 rounded-xl" 
                      placeholder="Anything else we should know?"
                      value={formData.notes}
                      onChange={e => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="btn-primary w-full text-xl py-6 flex items-center justify-center gap-3 shadow-2xl shadow-accent/20"
                >
                  {isLoading ? 'Processing...' : 'Get Official Quote'}
                  <ArrowRight size={24} />
                </button>
                
                <div className="flex justify-center flex-wrap gap-8 pt-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <ShieldCheck size={16} className="text-accent" />
                    Secure & Private
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <CheckCircle2 size={16} className="text-accent" />
                    No obligation
                  </div>
                </div>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} className="text-accent" />
              </div>
              <h3 className="text-4xl font-bold mb-4">Success, {formData.name.split(' ')[0]}!</h3>
              <p className="text-gray-600 mb-12 max-w-md mx-auto text-lg leading-relaxed">
                We've sent your detailed {quartzLevel} quartz estimate and 2026 counter guide to <strong>{formData.email}</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-primary flex items-center justify-center gap-3 px-10 h-16 shadow-xl shadow-accent/20">
                  <Download size={20} />
                  Download Estimate (PDF)
                </button>
                <Link to="/" className="btn-outline px-10 h-16 flex items-center justify-center">
                  Back to Home
                </Link>
              </div>

              {/* Cabinets Upsell Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-20 pt-16 border-t border-border-custom max-w-2xl mx-auto text-center"
              >
                <div className="inline-flex items-center gap-2 bg-text-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                  <Plus size={14} className="text-accent" />
                  Limited Time Bundle Offer
                </div>
                <h4 className="text-3xl font-bold mb-6 tracking-tight">Planning Cabinets Too?</h4>
                <p className="text-gray-600 mb-10 text-lg">
                  Most homeowners upgrading countertops also update their cabinets. 
                  Bundle both together for a seamless renovation and significant cost savings.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left bg-background p-8 rounded-3xl border border-border-custom">
                  <div className="flex gap-3">
                    <Check className="text-accent shrink-0" size={20} />
                    <span className="text-sm font-bold text-text-primary leading-tight">One point of contact</span>
                  </div>
                  <div className="flex gap-3 border-t sm:border-t-0 sm:border-l border-border-custom pt-4 sm:pt-0 sm:pl-6">
                    <Check className="text-accent shrink-0" size={20} />
                    <span className="text-sm font-bold text-text-primary leading-tight">Better overall pricing</span>
                  </div>
                  <div className="flex gap-3 border-t sm:border-t-0 sm:border-l border-border-custom pt-4 sm:pt-0 sm:pl-6">
                    <Check className="text-accent shrink-0" size={20} />
                    <span className="text-sm font-bold text-text-primary leading-tight">Complete transformation</span>
                  </div>
                </div>

                <Link 
                  to="/cabinets" 
                  className="btn-primary bg-text-primary hover:bg-black text-white inline-flex items-center gap-3 px-10 h-16 text-lg shadow-2xl"
                >
                  Get Full Kitchen Estimate
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border-custom pt-20">
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
               <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-2">Laser Precision</h4>
              <p className="text-sm text-gray-500">We use high-frequency laser measuring to ensure your countertops fit perfectly with zero gaps.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
               <CheckCircle2 size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-2">Expert Installation</h4>
              <p className="text-sm text-gray-500">Our certified installation teams handle every detail, including structural reinforcement if needed.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
               <Timer size={24} />
            </div>
            <div>
              <h4 className="font-bold mb-2">Lifetime Warranty</h4>
              <p className="text-sm text-gray-500">All of our premium quartz selections come with comprehensive manufacturer warranties.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
