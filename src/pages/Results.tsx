import React, { useState, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Download, 
  ArrowRight, 
  ShieldCheck,
  Check,
  Timer,
  Plus,
  Star,
  ChefHat,
  Layers,
  MapPin,
  Loader2
} from 'lucide-react';
import { cn } from '../lib/utils';
import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const pdfTemplateRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
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

  const { finalPrice, quartzLevel, kitchenSize, hasIsland, islandType, extras, includeCabinets, cabinetSize, cabinetStyle, cabinetExtras, timeline, deliveryMethod, selectedCabinetStyle } = state;
  const includeCountertops = state.includeCountertops !== false;

  const results = {
    countertop: {
      low: finalPrice.countertopLow || 0,
      high: finalPrice.countertopHigh || 0
    },
    cabinets: {
      low: finalPrice.cabinetLow || 0,
      high: finalPrice.cabinetHigh || 0
    },
    total: {
      low: finalPrice.totalLow || 0,
      high: finalPrice.totalHigh || 0
    }
  };

  const generatePdf = async () => {
    if (!pdfTemplateRef.current) return;
    setIsGeneratingPdf(true);

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pages = Array.from(pdfTemplateRef.current.children) as HTMLElement[];
      
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const dataUrl = await toPng(page, {
          quality: 1,
          pixelRatio: 2,
          backgroundColor: '#ffffff'
        });

        if (i > 0) pdf.addPage();
        
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      }
      
      pdf.save(`Quartz_International_Budgetary_Estimate_${formData.name.replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error('PDF Generation failed:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Retrieve UTM and behavior tracking details
      let utmParams = {};
      let behaviorMetadata = {};
      try {
        const utmRaw = sessionStorage.getItem('qi_utm_data');
        if (utmRaw) utmParams = JSON.parse(utmRaw);

        const behaviorRaw = sessionStorage.getItem('qi_user_behavior');
        if (behaviorRaw) {
          const behavior = JSON.parse(behaviorRaw);
          const now = Date.now();
          // Finalize duration of the active page view
          if (behavior.pageViews && behavior.pageViews.length > 0) {
            const lastPage = behavior.pageViews[behavior.pageViews.length - 1];
            if (!lastPage.durationMs) {
              lastPage.durationMs = now - lastPage.enteredAt;
            }
          }
          // Calculate total duration since start of tracking
          if (behavior.sessionStart) {
            behavior.timeSpentMs = now - new Date(behavior.sessionStart).getTime();
          }
          behaviorMetadata = behavior;
        }
      } catch (err) {
        console.error('Failed to parse analytics data in results handleSubmit:', err);
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...state,
          ...formData,
          ...utmParams,
          behavior: behaviorMetadata
        })
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

  return (
    <div className="bg-background min-h-screen py-12 md:py-20">
      {/* Multi-Page Hidden PDF Template */}
      <div 
        ref={pdfTemplateRef}
        className="absolute opacity-0 pointer-events-none -left-[5000px] -top-[5000px]"
      >
        {/* PAGE 1: COVER PAGE */}
        <div className="w-[210mm] h-[297mm] bg-white p-20 flex flex-col justify-between text-[#1A1A1A] font-sans">
          <div className="flex justify-between items-start">
             <div>
                <h1 className="text-5xl font-black tracking-tighter mb-2 uppercase">QUARTZ <span className="text-accent underline decoration-accent/30 decoration-8 underline-offset-8">INTERNATIONAL</span></h1>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Kitchens • Countertops • Interiors</p>
             </div>
             <div className="text-right">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Budgetary estimate</p>
                <h2 className="text-2xl font-black text-[#1A1A1A]">#{Math.floor(Math.random() * 10000)}</h2>
             </div>
          </div>

          <div className="max-w-2xl">
             <div className="h-px bg-[#E5E2DC] w-full mb-12" />
             <p className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">Presented for your project in Markham / GTA</p>
             <h2 className="text-7xl font-black tracking-tighter mb-8 leading-[0.9]">Your Personalized Kitchen Estimate</h2>
             {(state.selectedSlab || state.quartzLevel) && (
               <div className="inline-flex items-center gap-3 bg-accent/10 px-6 py-3 rounded-2xl mb-8 border border-accent/20">
                  <Star size={16} className="text-accent" fill="currentColor" />
                  <p className="text-sm font-black text-[#1A1A1A] uppercase tracking-widest italic">Specified Selection: {state.selectedSlab || `${quartzLevel.toUpperCase()} Tier`}</p>
               </div>
             )}
             <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg italic">
                A comprehensive budgetary analysis based on your style, material selection, and project dimensions.
             </p>
          </div>

          <div className="bg-[#1A1A1A] text-white p-16 rounded-[4rem] flex justify-between items-end shadow-2xl">
             <div>
                <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4">Estimated Range</p>
                <h3 className="text-7xl font-black tracking-tighter leading-none italic">
                  ${results.total.low.toLocaleString()} <span className="text-accent/40 text-4xl">–</span> ${results.total.high.toLocaleString()}
                </h3>
             </div>
             <div className="text-right">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Pricing valid through</p>
                <p className="text-lg font-black text-white">{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
             </div>
          </div>

          <div className="flex justify-between items-center pt-12 border-t border-[#E5E2DC]">
             <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Quartz International GTA HQ</p>
                <p className="text-xs font-bold">(647) 370-6938 • quartzinternational.ca</p>
             </div>
             <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                   <ShieldCheck size={16} className="text-accent" /> 5-Year Craftsmanship
                </div>
                <div className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                   <Star size={16} className="text-accent" /> 500+ Projects
                </div>
             </div>
          </div>
        </div>

        {/* PAGE 2: PROJECT BREAKDOWN */}
        <div className="w-[210mm] h-[297mm] bg-white p-20 flex flex-col text-[#1A1A1A] font-sans">
          <div className="mb-20">
             <h3 className="text-4xl font-black tracking-tighter mb-4 italic uppercase">Detailed Project Breakdown</h3>
             <div className="h-px bg-accent/20 w-48" />
          </div>

          <div className="space-y-16 flex-grow">
             {/* Countertops section */}
             {includeCountertops && (
               <div className="group">
                  <div className="flex justify-between items-center mb-8 border-b border-[#E5E2DC] pb-4">
                     <h4 className="text-2xl font-black uppercase tracking-tight">01. Countertops</h4>
                     <p className="text-xl font-black text-accent italic">${results.countertop.low.toLocaleString()} – ${results.countertop.high.toLocaleString()}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-12">
                     <div className="space-y-4">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Project Layout:</span>
                           <span className="text-[#1A1A1A]">{state.layout || 'Custom Kitchen'}</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Slab Selection:</span>
                           <span className="text-[#1A1A1A]">{state.selectedSlab || quartzLevel.toUpperCase() + ' Tier'}</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Dimensions:</span>
                           <span className="text-[#1A1A1A]">
                             {state.kitchenLinearFt ? `${Math.floor(state.kitchenLinearFt)} ft ${Math.round((state.kitchenLinearFt - Math.floor(state.kitchenLinearFt)) * 12) > 0 ? `${Math.round((state.kitchenLinearFt - Math.floor(state.kitchenLinearFt)) * 12)} in` : ''} (${kitchenSize} SQ FT)` : `${kitchenSize} SQ FT`}
                           </span>
                        </div>
                        {islandType && islandType !== 'none' && (
                          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                             <span>Island / Peninsula:</span>
                             <span className="text-[#1A1A1A]">
                                {islandType === 'small' && 'Small Island (+12 SF)'}
                                {islandType === 'large' && 'Large Island (+20 SF)'}
                                {islandType === 'waterfall' && 'Waterfall Island (+35 SF)'}
                             </span>
                          </div>
                        )}
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Edge Profile:</span>
                           <span className="text-[#1A1A1A]">{extras.waterfall ? 'Waterfall' : 'Standard'}</span>
                        </div>
                     </div>
                     <div className="space-y-3 bg-[#F8F9FA] p-6 rounded-3xl border border-[#E5E2DC]">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Standard Inclusions</p>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-600"><Check size={12} className="text-accent" /> Precision site measure</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-600"><Check size={12} className="text-accent" /> Professional Fabrication</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-600"><Check size={12} className="text-accent" /> Expert Installation</div>
                     </div>
                  </div>
               </div>
             )}

             {/* Cabinets section */}
             {includeCabinets && (
               <div>
                  <div className="flex justify-between items-center mb-8 border-b border-[#E5E2DC] pb-4">
                     <h4 className="text-2xl font-black uppercase tracking-tight">
                       {includeCountertops ? '02. Custom Cabinets' : '01. Custom Cabinets'}
                     </h4>
                     <p className="text-xl font-black text-accent italic">${results.cabinets.low.toLocaleString()} – ${results.cabinets.high.toLocaleString()}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-12">
                     <div className="space-y-4">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Cabinet Collection:</span>
                           <span className="text-[#1A1A1A]">
                             {cabinetStyle === 'essential' && 'Essential Collection'}
                             {cabinetStyle === 'premium' && 'Premium Collection'}
                             {cabinetStyle === 'elite' && 'Elite Collection'}
                             {cabinetStyle === 'flat' && 'Flat Panel'}
                             {cabinetStyle === 'flat_panel' && 'Flat Panel'}
                             {cabinetStyle === 'slim_shaker' && 'Slim Shaker'}
                             {cabinetStyle === 'shaker' && 'Shaker'}
                           </span>
                        </div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Delivery Method:</span>
                           <span className="text-[#1A1A1A] uppercase">
                             {deliveryMethod === 'rta' && 'RTA (Ready To Assemble)'}
                             {deliveryMethod === 'rti' && 'RTI (Ready To Install)'}
                             {deliveryMethod === 'installed' && 'Fully Installed'}
                             {!deliveryMethod && 'Fully Installed'}
                           </span>
                        </div>
                        {selectedCabinetStyle && (
                           <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                              <span>Cabinet Style:</span>
                              <span className="text-[#1A1A1A]">{selectedCabinetStyle}</span>
                           </div>
                        )}
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Cabinet Wall Length:</span>
                           <span className="text-[#1A1A1A]">{cabinetSize} LIN FT</span>
                        </div>
                        {islandType && islandType !== 'none' && (
                          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                             <span>Island / Peninsula:</span>
                             <span className="text-[#1A1A1A]">
                               {islandType === 'small' && 'Small Island (+4 LF)'}
                               {islandType === 'large' && 'Large Island (+8 LF)'}
                               {islandType === 'waterfall' && 'Waterfall Island (+8 LF)'}
                             </span>
                          </div>
                        )}
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Total Linear Footage:</span>
                           <span className="text-[#1A1A1A]">
                             {cabinetSize + ({ none: 0, small: 4, large: 8, waterfall: 8 }[islandType || 'none'])} LIN FT
                           </span>
                        </div>
                     </div>
                     <div className="space-y-3 bg-[#F8F9FA] p-6 rounded-3xl border border-[#E5E2DC]">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Standard Inclusions</p>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-600"><Check size={12} className="text-accent" /> Soft-close Hardware</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-600"><Check size={12} className="text-accent" /> Designer Consultation</div>
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-600"><Check size={12} className="text-accent" /> Multi-year Warranty</div>
                     </div>
                  </div>
               </div>
             )}

             {/* Add-ons */}
             <div>
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest whitespace-nowrap">Selected Configuration Details</p>
                  <div className="h-px bg-[#E5E2DC] w-full" />
                </div>
                <div className="grid grid-cols-3 gap-6">
                   {Object.entries(extras)
                     .filter(([_, value]) => value === true)
                     .map(([key]) => (
                       <div key={key} className="flex items-center gap-3 p-4 bg-[#F8F9FA] rounded-2xl border border-[#E5E2DC]">
                          <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                             <Check size={12} className="text-accent" />
                          </div>
                          <span className="text-xs font-bold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                       </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="bg-accent/10 p-10 rounded-[2.5rem] mt-auto">
             <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-4">Note on Pricing</p>
             <p className="text-xs text-gray-600 font-medium leading-relaxed italic">
               * This estimate is intended for budgetary purposes only and does not constitute a formal contract. Final pricing is subject to a physical site measure and slab selection. Our ranges account for typical market fluctuations and complexity tiers for most GTA kitchen layouts.
             </p>
          </div>
        </div>

        {/* PAGE 4: WHY CHOOSE US */}
        <div className="w-[210mm] h-[297mm] bg-white p-20 flex flex-col text-[#1A1A1A] font-sans">
           <div className="mb-20 text-center">
             <h3 className="text-5xl font-black tracking-tighter mb-4 italic uppercase">Why Homeowners Trust Quartz International</h3>
             <p className="text-sm font-bold text-gray-400 uppercase tracking-widest italic">GTA's Premier Interior Surface & Cabinetry Partner</p>
           </div>

           <div className="grid grid-cols-2 gap-12 flex-grow">
              <div className="space-y-12">
                 <div className="p-10 bg-[#F8F9FA] rounded-[3rem] border border-[#E5E2DC] group hover:border-accent transition-colors">
                    <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-accent/20">
                       <ShieldCheck size={32} />
                    </div>
                    <h4 className="text-xl font-black mb-3 italic">18+ Years of Expertise</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                       Serving Toronto, Vaughan, and Markham with unmatched craftsmanship and attention to technical detail.
                    </p>
                 </div>

                 <div className="p-10 bg-[#F8F9FA] rounded-[3rem] border border-[#E5E2DC] group hover:border-accent transition-colors">
                    <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-accent/20">
                       <Timer size={32} />
                    </div>
                    <h4 className="text-xl font-black mb-3 italic">Fast 7-Day Turnaround</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                       We value your time. Our specialized team ensures a rapid transition from site measure to final installation.
                    </p>
                 </div>
              </div>

              <div className="space-y-12 pt-12">
                 <div className="p-10 bg-[#F8F9FA] rounded-[3rem] border border-[#E5E2DC] group hover:border-accent transition-colors">
                    <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-accent/20">
                       <Layers size={32} />
                    </div>
                    <h4 className="text-xl font-black mb-3 italic">5,000+ Kitchens Installed</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                       A proven track record across the GTA. We have handled projects of every scale with total transparency.
                    </p>
                 </div>

                 <div className="p-10 bg-[#F8F9FA] rounded-[3rem] border border-[#E5E2DC] group hover:border-accent transition-colors">
                    <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-accent/20">
                       <ChefHat size={32} />
                    </div>
                    <h4 className="text-xl font-black mb-3 italic">Single-Point Accountability</h4>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                       No third-party confusion. One expert contact manages your countertops and cabinetry from start to finish.
                    </p>
                 </div>
              </div>
           </div>

           <div className="bg-[#1A1A1A] text-white p-16 rounded-[4rem] flex items-center gap-12 mt-12">
              <div className="shrink-0">
                 <Star size={64} className="text-accent" fill="currentColor" />
              </div>
              <div>
                 <p className="text-2xl font-black tracking-tight leading-tight mb-2">
                    "Quartz International took the stress out of our renovation. The transparency in their initial estimate was matched only by the quality of the install."
                 </p>
                 <p className="text-xs font-black text-accent uppercase tracking-widest text-right">— Sarah M., Markham Resident</p>
              </div>
           </div>
        </div>

        {/* PAGE 5: NEXT STEPS */}
        <div className="w-[210mm] h-[297mm] bg-white p-20 flex flex-col text-[#1A1A1A] font-sans">
           <div className="mb-20">
             <h3 className="text-6xl font-black tracking-tighter mb-4 italic uppercase">Your Next Steps</h3>
             <p className="text-xl font-bold text-gray-400 italic">Moving from estimate to reality in 4 simple stages.</p>
           </div>

           <div className="space-y-12 mb-20 flex-grow">
              {[
                { step: '01', title: 'Book Consultation', desc: 'Secure a free 15-minute call with a Quartz International designer to review your needs.' },
                { step: '02', title: 'Confirm Measurements', desc: 'Our technicians visit your home for a sub-millimeter precision site scan.' },
                { step: '03', title: 'Final Slab Selection', desc: 'Visit our showroom to see your specific slabs and confirm cabinet finishes.' },
                { step: '04', title: 'Professional Installation', desc: 'Our white-glove team installs your kitchen in 5–7 business days.' },
              ].map((step) => (
                <div key={step.step} className="flex gap-12 items-start group">
                   <div className="text-5xl font-black text-accent/20 group-hover:text-accent transition-colors leading-[0.8] tracking-tighter italic shrink-0">
                     {step.step}
                   </div>
                   <div className="pt-2">
                      <h4 className="text-2xl font-black mb-2 italic uppercase">{step.title}</h4>
                      <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-md">{step.desc}</p>
                   </div>
                </div>
              ))}
           </div>

           <div className="bg-[#F8F9FA] p-16 rounded-[4rem] border-4 border-dashed border-accent/30 text-center">
              <h4 className="text-3xl font-black tracking-tighter mb-6 uppercase italic">Ready to Lock in Your Price?</h4>
              <p className="text-lg text-gray-500 font-medium mb-10 max-w-md mx-auto italic">
                 Book your consultation this week to guarantee the material rates outlined in this estimate.
              </p>
              <div className="flex flex-col gap-6 items-center">
                 <div className="bg-white px-10 py-6 rounded-[2rem] border border-[#E5E2DC] shadow-xl">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 italic text-center">Contact Priority Line</p>
                    <p className="text-2xl font-black text-[#1A1A1A]">(647) 370-6938</p>
                 </div>
                 <p className="text-xs font-black text-accent uppercase tracking-widest">www.quartzinternational.ca</p>
              </div>
           </div>

           <div className="mt-12 flex justify-between items-center text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <p>© 2026 Quartz International / Solid State Interiors</p>
              <div className="flex items-center gap-2">
                 <MapPin size={12} className="text-accent" /> Toronto • Markham • Vaughan
              </div>
           </div>
        </div>
      </div>

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
                {includeCabinets ? (includeCountertops ? 'Estimated Full Kitchen Cost' : 'Estimated Custom Cabinets Cost') : 'Estimated Countertop Cost'}
              </span>
              <div className="text-4xl sm:text-6xl md:text-8xl font-bold text-text-primary mb-2 tracking-tighter">
                <span className="text-accent">$</span>{finalPrice.totalLow.toLocaleString()} <span className="text-accent/50 text-2xl md:text-5xl">–</span> ${finalPrice.totalHigh.toLocaleString()}
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Includes Materials & Professional Installation</p>
              
              <div className="max-w-lg mx-auto space-y-4 bg-background border border-border-custom p-8 rounded-3xl">
                 {includeCountertops && (
                   <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Countertops</span>
                      <span className="font-bold text-text-primary">
                        ${finalPrice.countertopLow.toLocaleString()} – ${finalPrice.countertopHigh.toLocaleString()}
                      </span>
                   </div>
                 )}
                 {includeCabinets && (
                   <div className={cn(
                     "flex justify-between items-center text-sm",
                     includeCountertops && "pt-4 border-t border-border-custom"
                   )}>
                       <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
                         Cabinets ({
                           cabinetStyle === 'essential' ? 'Essential' :
                           cabinetStyle === 'premium' ? 'Premium' :
                           cabinetStyle === 'elite' ? 'Elite' :
                           cabinetStyle.replace('_', ' ')
                         } • {deliveryMethod ? deliveryMethod.toUpperCase() : 'INSTALLED'})
                       </span>
                       <span className="font-bold text-text-primary">${finalPrice.cabinetLow.toLocaleString()} – ${finalPrice.cabinetHigh.toLocaleString()}</span>
                   </div>
                 )}
                 <div className="flex justify-between items-center text-sm pt-4 border-t border-border-custom">
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Project Total</span>
                    <span className="font-bold text-accent">${finalPrice.totalLow.toLocaleString()} – ${finalPrice.totalHigh.toLocaleString()}</span>
                 </div>
              </div>
            </div>

            <div className={cn(
              "grid grid-cols-1 gap-6 py-10 border-y border-border-custom relative z-10",
              islandType && islandType !== 'none' ? "sm:grid-cols-4" : "sm:grid-cols-3"
            )}>
              <div className="text-center px-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {includeCountertops ? 'Countertops' : 'Cabinetry Length'}
                </p>
                <p className="text-xl font-bold">
                  {includeCountertops 
                    ? (state.kitchenLinearFt ? `${state.kitchenLinearFt} ft` : `${kitchenSize} sq ft`) 
                    : `${cabinetSize + ({ none: 0, small: 4, large: 8, waterfall: 8 }[islandType || 'none'])} ft`}
                </p>
              </div>
              {islandType && islandType !== 'none' && (
                <div className="text-center px-4 border-l border-border-custom">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Island / Peninsula</p>
                  <p className="text-xl font-bold capitalize">{islandType === 'waterfall' ? 'Large w/ Waterfall' : islandType}</p>
                </div>
              )}
              <div className="text-center px-4 border-l border-border-custom">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Timeline</p>
                <p className="text-xl font-bold capitalize">{timeline.replace('-', ' ')}</p>
              </div>
              <div className="text-center px-4 border-l border-border-custom">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                  {includeCountertops ? 'Quartz Level' : 'Collection'}
                </p>
                <p className="text-xl font-bold capitalize">
                  {includeCountertops 
                    ? quartzLevel 
                    : (cabinetStyle === 'essential' ? 'Essential' : cabinetStyle === 'premium' ? 'Premium' : 'Elite')}
                </p>
              </div>
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
                <button 
                  onClick={generatePdf}
                  disabled={isGeneratingPdf}
                  className="btn-primary flex items-center justify-center gap-3 px-10 h-16 shadow-xl shadow-accent/20 disabled:opacity-50"
                >
                  {isGeneratingPdf ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Download size={20} />
                      Download Estimate (PDF)
                    </>
                  )}
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
