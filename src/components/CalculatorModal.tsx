import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Info, 
  Clock, 
  ShieldCheck, 
  Star, 
  ArrowRight,
  TrendingUp,
  Layout as LayoutIcon,
  Layers,
  ChefHat,
  Timer,
  Download,
  Loader2,
  FileText,
  MapPin,
  Calendar,
  Sparkles
} from 'lucide-react';

import { useCalculator, QuartzLevel, CabinetStyle } from '../context/CalculatorContext';
import { cn } from '../lib/utils';
import { PRICING_CONSTANTS } from '../constants';
import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';

export default function CalculatorModal() {
  const { state, closeCalculator, setStep, updateState } = useCalculator();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const pdfTemplateRef = useRef<HTMLDivElement>(null);

  const calculateResults = () => {
    const { countertopSqFt, quartzLevel, includeCabinets, cabinetLinearFt, cabinetStyle, extras, includeCountertops, islandType } = state;

    const qRate = PRICING_CONSTANTS.LEVELS[quartzLevel];
    let countertopLow = 0;
    let countertopHigh = 0;

    if (includeCountertops) {
      countertopLow = countertopSqFt * qRate.low;
      countertopHigh = countertopSqFt * qRate.high;

      // Countertop Extras
      if (extras.sink) { countertopLow += PRICING_CONSTANTS.EXTRAS.sink; countertopHigh += PRICING_CONSTANTS.EXTRAS.sink; }
      if (extras.cooktop) { countertopLow += PRICING_CONSTANTS.EXTRAS.cooktop; countertopHigh += PRICING_CONSTANTS.EXTRAS.cooktop; }
      if (extras.backsplash) {
        countertopLow += countertopSqFt * PRICING_CONSTANTS.EXTRAS.backsplash.low;
        countertopHigh += countertopSqFt * PRICING_CONSTANTS.EXTRAS.backsplash.high;
      }
      if (extras.waterfall) { 
        countertopLow += PRICING_CONSTANTS.EXTRAS.waterfall.low; 
        countertopHigh += PRICING_CONSTANTS.EXTRAS.waterfall.high; 
      }
      if (extras.removal) { 
        countertopLow += PRICING_CONSTANTS.EXTRAS.removal.low; 
        countertopHigh += PRICING_CONSTANTS.EXTRAS.removal.high; 
      }
    }

    // Cabinet Logic
    let cabinetLow = 0;
    let cabinetHigh = 0;

    if (includeCabinets) {
      const method = state.deliveryMethod || 'installed';
      const cRate = PRICING_CONSTANTS.CABINETS[method][cabinetStyle];
      const multiplier = PRICING_CONSTANTS.CABINET_EXTRA_MULTIPLIERS[method];
      
      const cabinetLFAdded = { none: 0, small: 4, large: 8, waterfall: 8 }[islandType || 'none'];
      const totalCabinetLF = cabinetLinearFt + cabinetLFAdded;

      cabinetLow = totalCabinetLF * cRate.low;
      cabinetHigh = totalCabinetLF * cRate.high;

      if (extras.pantry) { 
        cabinetLow += PRICING_CONSTANTS.CABINET_EXTRAS.pantry.low * multiplier; 
        cabinetHigh += PRICING_CONSTANTS.CABINET_EXTRAS.pantry.high * multiplier; 
      }
      if (extras.islandCabinets) { 
        cabinetLow += PRICING_CONSTANTS.CABINET_EXTRAS.island.low * multiplier; 
        cabinetHigh += PRICING_CONSTANTS.CABINET_EXTRAS.island.high * multiplier; 
      }
      if (extras.decorativePanels) { 
        cabinetLow += PRICING_CONSTANTS.CABINET_EXTRAS.decorativePanels.low * multiplier; 
        cabinetHigh += PRICING_CONSTANTS.CABINET_EXTRAS.decorativePanels.high * multiplier; 
      }
    }

    const totalLow = Math.round((countertopLow + cabinetLow) / 100) * 100;
    const totalHigh = Math.round((countertopHigh + cabinetHigh) / 100) * 100;

    return {
      countertop: { low: Math.round(countertopLow / 100) * 100, high: Math.round(countertopHigh / 100) * 100 },
      cabinets: { low: Math.round(cabinetLow / 100) * 100, high: Math.round(cabinetHigh / 100) * 100 },
      total: { low: totalLow, high: totalHigh }
    };
  };

  const results = useMemo(calculateResults, [state]);
  const [showForm, setShowForm] = useState(false);

  const handleNext = () => {
    if (state.step === 4 && !state.includeCabinets) {
      setStep(9); // Skip directly to Results (Step 9)
    } else if (state.step === 6) {
      if (state.startedFromCabinets) {
        setStep(8); // Go to "Do you also need countertops?" (Step 8)
      } else {
        setStep(9); // Skip countertop steps and go directly to Results
      }
    } else if (state.step === 7) {
      setStep(9); // Go to Results (Step 9)
    } else if (state.step === 8) {
      if (state.includeCountertops) {
        setStep(1); // Go to Countertop Size (Step 1)
      } else {
        setStep(3); // Go to Island (Step 3)
      }
    } else if (state.step === 3) {
      if (state.startedFromCabinets) {
        setStep(9); // Go to Results (Step 9)
      } else {
        setStep(4); // Go to Do you also need cabinets? (Step 4)
      }
    } else if (state.step === 2 && state.startedFromCabinets) {
      setStep(3); // From Quartz level, go to Island Step (Step 3)
    } else if (state.step < 9) {
      setStep(state.step + 1);
    }
  };

  const handleBack = () => {
    if (state.step === 9) {
      if (state.includeCabinets) {
        if (state.startedFromCabinets) {
          setStep(3); // Go back to Island Step (Step 3)
        } else {
          setStep(7); // Go back to Cabinet Collection (Step 7)
        }
      } else {
        setStep(4); // Go back to "Need cabinets?" (Step 4)
      }
    } else if (state.step === 1 && state.startedFromCabinets) {
      setStep(8); // Go back to Do you also need countertops? (Step 8)
    } else if (state.step === 8) {
      setStep(7); // Go back to Cabinet Collection (Step 7)
    } else if (state.step === 3) {
      if (state.startedFromCabinets) {
        if (state.includeCountertops) {
          setStep(2); // Go back to Quartz Level (Step 2)
        } else {
          setStep(8); // Go back to Do you also need countertops? (Step 8)
        }
      } else {
        setStep(2); // Go back to Quartz Level (Step 2)
      }
    } else if (state.step === 4) {
      setStep(3); // Go back to Island Step (Step 3)
    } else if (state.step > 1) {
      setStep(state.step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailError(false);
    
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
        console.error('Failed to parse analytics data in modal handleSubmit:', err);
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ...utmParams,
          behavior: behaviorMetadata,
          state,
          results
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit lead');
        setEmailError(true);
        setIsSubmitted(true); // Fallback so they can download PDF
      }
    } catch (error) {
      console.error('Error submitting lead:', error);
      setEmailError(true);
      setIsSubmitted(true); // Fallback so they can download PDF
    } finally {
      setIsSubmitting(false);
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

  const isLastStep = state.step === (
    state.startedFromCabinets
      ? 3
      : (state.includeCabinets ? 7 : 4)
  );

  const getProgress = () => {
    if (!state.startedFromCabinets) {
      const totalSteps = state.includeCabinets ? 7 : 4;
      const currentStep = state.includeCabinets 
        ? (state.step === 9 ? 7 : state.step) 
        : (state.step === 9 ? 4 : state.step);
      return (currentStep / totalSteps) * 100;
    } else {
      const totalSteps = state.includeCountertops ? 7 : 5;
      let currentStep = 1;
      if (state.step === 5) currentStep = 1;
      else if (state.step === 6) currentStep = 2;
      else if (state.step === 7) currentStep = 3;
      else if (state.step === 8) currentStep = 4;
      else if (state.step === 1) currentStep = 5;
      else if (state.step === 2) currentStep = 6;
      else if (state.step === 3) currentStep = state.includeCountertops ? 7 : 5;
      else if (state.step === 9) currentStep = state.includeCountertops ? 7 : 5;
      return (currentStep / totalSteps) * 100;
    }
  };
  const progress = getProgress();

  return (
    <AnimatePresence>
      {state.isOpen && (
        <div className="fixed inset-0 z-[1001] flex items-center justify-center p-0 md:p-6 lg:p-12">
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCalculator}
            className="absolute inset-0 bg-[#F7F5F2]/90 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="relative w-full h-full md:h-auto md:max-w-5xl bg-white md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
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
                   {state.selectedSlab && (
                     <div className="inline-flex items-center gap-3 bg-accent/10 px-6 py-3 rounded-2xl mb-8 border border-accent/20">
                        <Star size={16} className="text-accent" fill="currentColor" />
                        <p className="text-sm font-black text-[#1A1A1A] uppercase tracking-widest italic">Specified Selection: {state.selectedSlab}</p>
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
                   {state.includeCountertops && (
                      <div className="group">
                         <div className="flex justify-between items-center mb-8 border-b border-[#E5E2DC] pb-4">
                            <h4 className="text-2xl font-black uppercase tracking-tight">01. Countertops</h4>
                            <p className="text-xl font-black text-accent italic">${results.countertop.low.toLocaleString()} – ${results.countertop.high.toLocaleString()}</p>
                         </div>
                         <div className="grid grid-cols-2 gap-12">
                            <div className="space-y-4">
                               <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                  <span>Project Layout:</span>
                                  <span className="text-[#1A1A1A]">{state.layout}</span>
                               </div>
                               <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                  <span>Slab Selection:</span>
                                  <span className="text-[#1A1A1A]">{state.selectedSlab || state.quartzLevel + ' Tier'}</span>
                               </div>
                               <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                  <span>Dimensions:</span>
                                  <span className="text-[#1A1A1A]">
                                      {Math.floor(state.countertopLinearFt)} ft {Math.round((state.countertopLinearFt - Math.floor(state.countertopLinearFt)) * 12) > 0 ? `${Math.round((state.countertopLinearFt - Math.floor(state.countertopLinearFt)) * 12)} in` : ''} ({state.countertopSqFt} SQ FT)
                                  </span>
                               </div>
                               {state.islandType && state.islandType !== 'none' && (
                                 <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                    <span>Island / Peninsula:</span>
                                    <span className="text-[#1A1A1A]">
                                       {state.islandType === 'small' && 'Small Island (+12 SF)'}
                                       {state.islandType === 'large' && 'Large Island (+20 SF)'}
                                       {state.islandType === 'waterfall' && 'Waterfall Island (+35 SF)'}
                                    </span>
                                 </div>
                               )}
                               <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                  <span>Edge Profile:</span>
                                  <span className="text-[#1A1A1A]">{state.extras.waterfall ? 'Waterfall' : 'Standard'}</span>
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
                   {state.includeCabinets && (
                     <div>
                        <div className="flex justify-between items-center mb-8 border-b border-[#E5E2DC] pb-4">
                           <h4 className="text-2xl font-black uppercase tracking-tight">
                             {state.includeCountertops ? '02. Custom Cabinets' : '01. Custom Cabinets'}
                           </h4>
                           <p className="text-xl font-black text-accent italic">${results.cabinets.low.toLocaleString()} – ${results.cabinets.high.toLocaleString()}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-12">
                           <div className="space-y-4">
                              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                 <span>Cabinet Collection:</span>
                                 <span className="text-[#1A1A1A]">
                                   {state.cabinetStyle === 'essential' && 'Essential Collection'}
                                   {state.cabinetStyle === 'premium' && 'Premium Collection'}
                                   {state.cabinetStyle === 'elite' && 'Elite Collection'}
                                 </span>
                              </div>
                              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                 <span>Delivery Method:</span>
                                  <span className="text-[#1A1A1A]">{(state.deliveryMethod || 'installed').toUpperCase()}</span>
                              </div>
                              {state.selectedCabinetStyle && (
                                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                   <span>Cabinet Style:</span>
                                   <span className="text-[#1A1A1A]">{state.selectedCabinetStyle}</span>
                                </div>
                              )}
                              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                 <span>Cabinet Wall Length:</span>
                                 <span className="text-[#1A1A1A]">
                                   {Math.floor(state.cabinetLinearFt)} ft {Math.round((state.cabinetLinearFt - Math.floor(state.cabinetLinearFt)) * 12) > 0 ? `${Math.round((state.cabinetLinearFt - Math.floor(state.cabinetLinearFt)) * 12)} in` : ''}
                                 </span>
                              </div>
                              {state.islandType && state.islandType !== 'none' && (
                                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                   <span>Island / Peninsula:</span>
                                   <span className="text-[#1A1A1A]">
                                     {state.islandType === 'small' && 'Small Island (+4 LF)'}
                                     {state.islandType === 'large' && 'Large Island (+8 LF)'}
                                     {state.islandType === 'waterfall' && 'Waterfall Island (+8 LF)'}
                                   </span>
                                </div>
                              )}
                              <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                                 <span>Total Linear Footage:</span>
                                 <span className="text-[#1A1A1A]">
                                   {Math.floor(state.cabinetLinearFt + ({ none: 0, small: 4, large: 8, waterfall: 8 }[state.islandType || 'none']))} ft {Math.round((state.cabinetLinearFt - Math.floor(state.cabinetLinearFt)) * 12) > 0 ? `${Math.round((state.cabinetLinearFt - Math.floor(state.cabinetLinearFt)) * 12)} in` : ''}
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
                         {Object.entries(state.extras)
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

            {/* Main Content Area */}
          <div className="flex-grow p-5 pb-32 md:p-12 md:pb-12 overflow-y-auto max-h-screen">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#1A1A1A]">Get Your Kitchen Estimate</h2>
              {state.selectedSlab ? (
                <p className="text-[10px] md:text-xs font-bold text-accent tracking-wide uppercase italic">Slab Selection: {state.selectedSlab}</p>
              ) : (
                <p className="text-[10px] md:text-xs text-gray-400 font-medium tracking-wide">Takes 30 seconds • No obligation</p>
              )}
            </div>
            <button onClick={closeCalculator} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={20} className="text-[#1A1A1A] md:w-6 md:h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E5E2DC] h-1.5 rounded-full mb-6 md:mb-12 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-[#C6A87D] h-full"
            />
          </div>

          {/* Installation Slot Info */}
          {state.step < 8 && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-[#F8FDF9] rounded-2xl border border-[#D1EAD8] mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
              <p className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-[0.15em]">
                Next Install Slot: <span className="text-[#27AE60]">5–7 Days</span> <span className="text-gray-400 font-bold ml-1">(Markham / Vaughan)</span>
              </p>
            </motion.div>
          )}

            {/* Step Content */}
            {state.step === 1 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">What is the total length of your countertop walls?</h3>
                  <p className="text-sm text-gray-500">Measure only the walls that will have countertops.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 max-w-md">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Feet</label>
                    <select 
                      value={Math.floor(state.countertopLinearFt)}
                      onChange={(e) => {
                        const f = parseInt(e.target.value);
                        const inches = Math.round((state.countertopLinearFt - Math.floor(state.countertopLinearFt)) * 12);
                        const linearFt = f + inches / 12;
                        const wallSF = (linearFt * 2) - 5;
                        const addOnSF = { none: 0, small: 12, large: 20, waterfall: 35 }[state.islandType || 'none'];
                        updateState({ 
                          countertopLinearFt: linearFt, 
                          countertopSqFt: Math.max(0, Math.round(wallSF + addOnSF)) 
                        });
                      }}
                      className="w-full h-16 px-8 rounded-2xl bg-[#FAF8F5] border border-[#E5E2DC] focus:border-[#C6A87D] outline-none transition-colors font-bold text-lg cursor-pointer"
                    >
                      {Array.from({ length: 43 }, (_, i) => i + 8).map(f => (
                        <option key={f} value={f}>{f} ft</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Inches</label>
                    <select 
                      value={Math.round((state.countertopLinearFt - Math.floor(state.countertopLinearFt)) * 12)}
                      onChange={(e) => {
                        const f = Math.floor(state.countertopLinearFt);
                        const inches = parseInt(e.target.value);
                        const linearFt = f + inches / 12;
                        const wallSF = (linearFt * 2) - 5;
                        const addOnSF = { none: 0, small: 12, large: 20, waterfall: 35 }[state.islandType || 'none'];
                        updateState({ 
                          countertopLinearFt: linearFt, 
                          countertopSqFt: Math.max(0, Math.round(wallSF + addOnSF)) 
                        });
                      }}
                      className="w-full h-16 px-8 rounded-2xl bg-[#FAF8F5] border border-[#E5E2DC] focus:border-[#C6A87D] outline-none transition-colors font-bold text-lg cursor-pointer"
                    >
                      {Array.from({ length: 12 }, (_, i) => i).map(i => (
                        <option key={i} value={i}>{i} in</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="bg-[#FAF8F5] p-6 rounded-[2.5rem] border border-[#E5E2DC] flex items-center gap-6">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-accent font-bold text-sm">
                      {state.countertopSqFt}
                   </div>
                   <div>
                      <p className="font-bold text-sm text-[#1A1A1A]">Calculated Countertop Area: {state.countertopSqFt} SQ FT</p>
                      <p className="text-xs text-gray-500 font-medium italic">Formula: (Wall length × 2) - 5 appliance allowance + island/peninsula add-on</p>
                   </div>
                </div>
              </div>
            )}

            {state.step === 2 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Choose your quartz level</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 'standard', title: 'Standard Quartz', range: '$48–$68', desc: 'Durable, consistent, and beautiful essentials.' },
                    { id: 'premium', title: 'Premium Quartz', range: '$69–$95', desc: 'Popular marble looks and designer textures.' },
                    { id: 'luxury', title: 'Luxury Quartz', range: '$100–$170', desc: 'Elite aesthetics with complex, through-body veining.' }
                  ].map((level) => (
                    <button 
                      key={level.id}
                      onClick={() => updateState({ quartzLevel: level.id as QuartzLevel })}
                      className={cn(
                        "p-6 text-left rounded-3xl border-2 transition-all group",
                        state.quartzLevel === level.id 
                          ? "border-[#C6A87D] bg-[#C6A87D]/5" 
                          : "border-[#E5E2DC] hover:border-[#C6A87D]/50"
                      )}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-lg">{level.title}</span>
                        <span className="text-[#C6A87D] font-bold">{level.range} <span className="text-[10px] text-gray-400">/ sq ft</span></span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{level.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {state.step === 3 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Do you have an island or peninsula?</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 'none', title: 'No island', desc: 'Typical straight or L-shape/U-shape layout without separate island.', sf: '+0 sq ft', lf: '+0 LF' },
                    { id: 'small', title: 'Small island / peninsula', desc: 'Compact prep island or seating peninsula.', sf: '+12 sq ft', lf: '+4 LF' },
                    { id: 'large', title: 'Large island', desc: 'Spacious central island with room for cabinetry underneath.', sf: '+20 sq ft', lf: '+8 LF' },
                    { id: 'waterfall', title: 'Large island with waterfall', desc: 'Spacious central island with stone side panels cascading to the floor.', sf: '+35 sq ft', lf: '+8 LF' }
                  ].map((option) => (
                    <button 
                      key={option.id}
                      onClick={() => {
                        const hasIsland = option.id !== 'none';
                        const addOnSF = { none: 0, small: 12, large: 20, waterfall: 35 }[option.id];
                        const wallSF = Math.max(0, Math.round((state.countertopLinearFt * 2) - 5));
                        updateState({ 
                          islandType: option.id as IslandType, 
                          hasIsland,
                          countertopSqFt: Math.max(0, Math.round(wallSF + addOnSF))
                        });
                      }}
                      className={cn(
                        "p-6 text-left rounded-3xl border-2 transition-all group",
                        state.islandType === option.id 
                          ? "border-[#C6A87D] bg-[#C6A87D]/5" 
                          : "border-[#E5E2DC] hover:border-[#C6A87D]/50"
                      )}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-lg">{option.title}</span>
                        <span className="text-[#C6A87D] font-bold text-sm">
                          {option.id !== 'none' && `${option.sf} / ${option.lf}`}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{option.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {state.step === 4 && (
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold">Do you also need cabinets?</h3>
                  <div className="hidden sm:block bg-accent/10 px-4 py-2 rounded-2xl border border-accent/20">
                     <p className="text-[10px] font-black text-accent uppercase tracking-widest leading-none mb-1 text-center">Power Tip</p>
                     <p className="text-[11px] font-bold text-[#1A1A1A]">Bundle & Save</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'no', label: 'No, countertops only', value: false },
                    { id: 'yes', label: 'Yes, include cabinets', value: true }
                  ].map((opt) => (
                    <button 
                      key={opt.id}
                      onClick={() => updateState({ includeCabinets: opt.value })}
                      className={cn(
                        "p-8 text-center rounded-[2.5rem] border-2 transition-all relative overflow-hidden group",
                        state.includeCabinets === opt.value 
                          ? "border-[#C6A87D] bg-[#C6A87D]/5" 
                          : "border-[#E5E2DC] hover:border-[#C6A87D]/50"
                      )}
                    >
                      {opt.value && (
                        <div className="absolute top-0 right-0 bg-accent text-white text-[8px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-tighter">
                          Best Value
                        </div>
                      )}
                      <span className="font-bold text-lg">{opt.label}</span>
                    </button>
                  ))}
                </div>

                <div className="bg-[#F8F9FA] p-6 rounded-[2rem] border border-[#E5E2DC] flex items-center gap-6">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <Layers className="text-accent" size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-sm text-[#1A1A1A]">Bundle cabinets + countertops for better value</p>
                      <p className="text-xs text-gray-500 font-medium italic">Typical full kitchen: $12,000 – $25,000</p>
                   </div>
                </div>
              </div>
            )}

            {state.step === 5 && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">Choose Cabinet Delivery & Installation</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { id: 'rta', title: 'RTA (Ready To Assemble)', desc: 'Lowest cost. Flat-packed, easy shipping, self assembly. Perfect for DIYers.' },
                    { id: 'rti', title: 'RTI (Ready To Install)', desc: 'Factory assembled, ready for delivery. Save assembly time and contractor-friendly.' },
                    { id: 'installed', title: 'Fully Installed', desc: 'Complete turnkey service. We measure, deliver, install, and manage the project.' }
                  ].map((item) => (
                    <button 
                      key={item.id}
                      onClick={() => updateState({ deliveryMethod: item.id as any })}
                      className={cn(
                        "p-6 text-left rounded-3xl border-2 transition-all group",
                        state.deliveryMethod === item.id 
                          ? "border-[#C6A87D] bg-[#C6A87D]/5" 
                          : "border-[#E5E2DC] hover:border-[#C6A87D]/50"
                      )}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-lg">{item.title}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {state.step === 6 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">What is the total length of your cabinet walls?</h3>
                  <p className="text-sm text-gray-500">Measure only the walls that will have cabinets.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 max-w-md">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Feet</label>
                    <select 
                      value={Math.floor(state.cabinetLinearFt)}
                      onChange={(e) => {
                        const f = parseInt(e.target.value);
                        const inches = Math.round((state.cabinetLinearFt - Math.floor(state.cabinetLinearFt)) * 12);
                        updateState({ cabinetLinearFt: f + inches / 12 });
                      }}
                      className="w-full h-16 px-8 rounded-2xl bg-[#FAF8F5] border border-[#E5E2DC] focus:border-[#C6A87D] outline-none transition-colors font-bold text-lg cursor-pointer"
                    >
                      {Array.from({ length: 43 }, (_, i) => i + 8).map(f => (
                        <option key={f} value={f}>{f} ft</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Inches</label>
                    <select 
                      value={Math.round((state.cabinetLinearFt - Math.floor(state.cabinetLinearFt)) * 12)}
                      onChange={(e) => {
                        const f = Math.floor(state.cabinetLinearFt);
                        const inches = parseInt(e.target.value);
                        updateState({ cabinetLinearFt: f + inches / 12 });
                      }}
                      className="w-full h-16 px-8 rounded-2xl bg-[#FAF8F5] border border-[#E5E2DC] focus:border-[#C6A87D] outline-none transition-colors font-bold text-lg cursor-pointer"
                    >
                      {Array.from({ length: 12 }, (_, i) => i).map(i => (
                        <option key={i} value={i}>{i} in</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Examples Box */}
                <div className="bg-[#FAF8F5] border border-[#E5E2DC] p-6 rounded-2xl space-y-3">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Examples:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-bold text-gray-600">
                    <div className="bg-white border border-[#E5E2DC] px-4 py-2.5 rounded-xl text-center">10' + 10' = 20'</div>
                    <div className="bg-white border border-[#E5E2DC] px-4 py-2.5 rounded-xl text-center">12' + 10' = 22'</div>
                    <div className="bg-white border border-[#E5E2DC] px-4 py-2.5 rounded-xl text-center">10' + 12' + 10' = 32'</div>
                  </div>
                </div>
              </div>
            )}

            {state.step === 7 && (() => {
              const delivery = state.deliveryMethod || 'installed';
              const cabinetStyleRanges = {
                rta: { essential: '$105–$155', premium: '$153–$210', elite: '$165–$225' },
                rti: { essential: '$112–$165', premium: '$160–$215', elite: '$170–$230' },
                installed: { essential: '$190–$230', premium: '$235–$290', elite: '$245–$310' }
              }[delivery];
              return (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold">Choose Your Collection</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { id: 'essential', title: 'Essential Collection', range: cabinetStyleRanges.essential, desc: 'Affordable modern flat-panel cabinetry with durable finishes.' },
                      { id: 'premium', title: 'Premium Collection', range: cabinetStyleRanges.premium, desc: 'Designer matte and gloss finishes for modern homes.' },
                      { id: 'elite', title: 'Elite Collection', range: cabinetStyleRanges.elite, desc: 'Designer slim shaker cabinetry with elevated detailing.' }
                    ].map((style) => (
                      <button 
                        key={style.id}
                        onClick={() => updateState({ cabinetStyle: style.id as CabinetStyle })}
                        className={cn(
                          "p-6 text-left rounded-3xl border-2 transition-all group",
                          state.cabinetStyle === style.id 
                            ? "border-[#C6A87D] bg-[#C6A87D]/5" 
                            : "border-[#E5E2DC] hover:border-[#C6A87D]/50"
                        )}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-lg">{style.title}</span>
                          <span className="text-[#C6A87D] font-bold">{style.range} <span className="text-[10px] text-gray-400">/ lin ft</span></span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{style.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}

            {state.step === 8 && (
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold">Do you also need countertops?</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'no', label: 'No, cabinets only', value: false },
                    { id: 'yes', label: 'Yes, include countertops', value: true }
                  ].map((opt) => (
                    <button 
                      key={opt.id}
                      onClick={() => updateState({ includeCountertops: opt.value })}
                      className={cn(
                        "p-8 text-center rounded-[2.5rem] border-2 transition-all relative overflow-hidden group",
                        state.includeCountertops === opt.value 
                          ? "border-[#C6A87D] bg-[#C6A87D]/5" 
                          : "border-[#E5E2DC] hover:border-[#C6A87D]/50"
                      )}
                    >
                      <span className="font-bold text-lg">{opt.label}</span>
                    </button>
                  ))}
                </div>

                <div className="bg-[#FAF8F5] p-6 rounded-[2.5rem] border border-[#E5E2DC] flex items-center gap-6">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                   </div>
                   <div>
                      <p className="font-bold text-sm text-[#1A1A1A]">Bundle premium quartz countertops for the best value</p>
                      <p className="text-xs text-gray-500 font-medium italic">Fabrication & professional installation included</p>
                   </div>
                </div>
              </div>
            )}

            {state.step === 9 && (
              <div className="space-y-12">
                {!isSubmitted ? (
                  <>
                    {!showForm ? (
                      /* PHASE 1: THE WOW MOMENT (Result Reveal) */
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                      >
                         <div className="group">
                            {state.selectedSlab && (
                              <div className="flex items-center gap-2 text-xs font-black text-accent uppercase tracking-widest mb-4 justify-center">
                                 <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                 Slab Specified: {state.selectedSlab}
                              </div>
                            )}
                            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6 text-accent">
                              <TrendingUp size={14} />
                              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Estimated Results Table</span>
                            </div>
                         </div>
                        
                        <h3 className="text-3xl md:text-5xl font-black text-[#1A1A1A] mb-4 tracking-tighter italic uppercase">
                          Your Estimated Kitchen Cost
                        </h3>

                         <div className="inline-block bg-[#1A1A1A] px-6 sm:px-12 py-6 sm:py-8 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-2xl mb-8 relative overflow-hidden group w-full max-w-sm sm:max-w-none mx-auto text-center">
                           <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                           <p className="text-3xl sm:text-4xl md:text-7xl font-black text-white tracking-tighter leading-none whitespace-nowrap overflow-hidden">
                             ${results.total.low.toLocaleString()} <span className="text-accent/50 text-xl md:text-5xl">–</span> ${results.total.high.toLocaleString()}
                           </p>
                           {/* BREAKDOWN SECTION */}
                          <div className="max-w-md mx-auto bg-[#F8F9FA] rounded-[2.5rem] border border-[#E5E2DC] p-8 mt-8 space-y-4 text-center sm:text-left">
                             <div className="flex flex-col sm:flex-row justify-between items-center text-sm font-bold border-b border-[#E5E2DC] pb-4 gap-2 sm:gap-0">
                               {state.includeCountertops ? (
                                 <>
                                   <span className="text-gray-400 uppercase tracking-widest text-[10px]">Aesthetic: {state.styleDirection} • Layout: {state.layout}</span>
                                   <span className="text-accent uppercase tracking-widest text-[10px] italic">{state.selectedSlab || 'Custom Stone'}</span>
                                 </>
                               ) : (
                                 <>
                                   <span className="text-gray-400 uppercase tracking-widest text-[10px]">Layout: {state.layout}</span>
                                   <span className="text-accent uppercase tracking-widest text-[10px] italic">Custom Cabinets Only</span>
                                 </>
                               )}
                             </div>
                             {state.includeCountertops && (
                               <div className="flex justify-between items-center text-sm font-bold border-b border-[#E5E2DC] pb-4">
                                  <span className="text-gray-400 uppercase tracking-widest text-[10px]">Countertops</span>
                                  <span className="text-[#1A1A1A]">${results.countertop.low.toLocaleString()} – ${results.countertop.high.toLocaleString()}</span>
                               </div>
                             )}
                            {state.includeCabinets && (
                              <div className="flex justify-between items-center text-sm font-bold">
                                 <span className="text-gray-400 uppercase tracking-widest text-[10px]">
                                    Custom Cabinets ({
                                      state.cabinetStyle === 'essential' ? 'Essential' :
                                      state.cabinetStyle === 'premium' ? 'Premium' : 'Elite'
                                     } • {(state.deliveryMethod || 'installed').toUpperCase()})
                                    {state.selectedCabinetStyle ? ` • ${state.selectedCabinetStyle}` : ''}
                                  </span>
                                 <span className="text-[#1A1A1A]">${results.cabinets.low.toLocaleString()} – ${results.cabinets.high.toLocaleString()}</span>
                              </div>
                            )}
                         </div>
                        </div>
                        
                        {/* EMOTIONAL REINFORCEMENT */}
                        <div className="max-w-sm mx-auto mb-12 flex flex-col gap-4">
                           {state.includeCabinets && state.includeCountertops && (
                             <div className="bg-accent/10 border border-accent/20 p-4 rounded-2xl flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center shrink-0">
                                   <Star size={16} fill="currentColor" />
                                </div>
                                <p className="text-[11px] font-black text-accent uppercase tracking-widest text-left">Bundle Applied: Multi-Service Savings Included</p>
                             </div>
                           )}
                           <div className="flex items-start gap-4 text-left">
                              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                                 <Info className="text-gray-400" size={20} />
                              </div>
                              <p className="text-xs text-gray-500 font-medium leading-relaxed italic">
                                Most kitchens in <span className="text-[#1A1A1A] font-bold">Toronto & GTA</span> fall within this range. Your final pricing depends on exact measurements and slab selection.
                              </p>
                           </div>
                        </div>

                        {/* PHASE 2: CALLS TO ACTION */}
                        <div className="flex flex-col gap-4 max-w-md mx-auto">
                           <button 
                             onClick={() => setShowForm(true)}
                             className="btn-primary h-18 text-xl font-black uppercase tracking-tighter shadow-xl italic"
                           >
                             Get My Exact Quote &rarr;
                           </button>
                           <button 
                             onClick={() => setShowForm(true)}
                             className="h-18 border-2 border-[#1A1A1A] rounded-3xl flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest hover:bg-[#F8F9FA] transition-colors"
                           >
                             <FileText size={18} /> Download My Estimate (PDF)
                           </button>
                        </div>
                      </motion.div>
                    ) : (
                      /* PHASE 3: LEAD CAPTURE FORM */
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-[#F8F9FA] p-8 md:p-12 rounded-[3.5rem] border border-[#E5E2DC]"
                      >
                        <button 
                          onClick={() => setShowForm(false)}
                          className="mb-8 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-[#1A1A1A] transition-colors"
                        >
                          <ChevronLeft size={16} /> Back to Result
                        </button>

                        <div className="text-center mb-10">
                           <h4 className="text-3xl font-black tracking-tighter mb-2 uppercase italic text-[#1A1A1A]">Where should we send your estimate?</h4>
                           <p className="text-xs text-gray-500 font-medium">Provide your details to unlock the detailed cost breakdown PDF.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                           <div className="space-y-1">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Full Name</label>
                              <input 
                                required
                                type="text" 
                                placeholder="e.g. John Doe" 
                                className="w-full h-16 px-8 rounded-2xl bg-white border border-[#E5E2DC] focus:border-[#C6A87D] outline-none transition-colors font-bold"
                                value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                              />
                           </div>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <div className="space-y-1">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Email</label>
                                <input 
                                  required
                                  type="email" 
                                  placeholder="name@email.com" 
                                  className="w-full h-16 px-8 rounded-2xl bg-white border border-[#E5E2DC] focus:border-[#C6A87D] outline-none transition-colors font-bold"
                                  value={formData.email}
                                  onChange={e => setFormData({...formData, email: e.target.value})}
                                />
                             </div>
                             <div className="space-y-1">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Phone</label>
                                <input 
                                  required
                                  type="tel" 
                                  placeholder="(647) 000-0000" 
                                  className="w-full h-16 px-8 rounded-2xl bg-white border border-[#E5E2DC] focus:border-[#C6A87D] outline-none transition-colors font-bold"
                                  value={formData.phone}
                                  onChange={e => setFormData({...formData, phone: e.target.value})}
                                />
                             </div>
                           </div>
                           <button 
                             type="submit" 
                             disabled={isSubmitting}
                             className="w-full h-20 bg-accent text-white rounded-[2rem] font-black text-xl uppercase tracking-tighter hover:bg-[#B5966A] transition-colors shadow-2xl shadow-accent/20 flex items-center justify-center gap-3 mt-4"
                           >
                             {isSubmitting ? (
                               <>
                                 <Loader2 size={24} className="animate-spin" /> Sending...
                               </>
                             ) : (
                               <>
                                 Send My Estimate <ChevronRight size={24} />
                               </>
                             )}
                           </button>
                        </form>
                      </motion.div>
                    )}
                  </>
                ) : (
                  /* PHASE 4: SUCCESS & DOWNLOAD */
                  <div className="text-center py-12 space-y-8">
                    <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-green-200">
                       <Check size={48} strokeWidth={3} />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-4xl font-black tracking-tighter italic uppercase text-[#1A1A1A]">
                         {emailError ? 'Estimate Saved!' : 'Estimate Sent!'}
                       </h3>
                       <p className="text-lg text-gray-500 max-w-xs mx-auto font-medium">
                          {emailError 
                            ? "We've saved your estimate. Download your PDF breakdown below!"
                            : "Check your email for your formal budgetary estimate."}
                       </p>
                    </div>

                    {emailError && (
                      <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs px-4 py-3 rounded-2xl max-w-sm mx-auto text-left flex items-start gap-2.5">
                        <Info size={16} className="text-yellow-600 shrink-0 mt-0.5" />
                        <p style={{ margin: 0 }} className="font-medium">
                          We saved your estimate details, but encountered a connection issue delivering the confirmation email. You can still download your detailed PDF breakdown directly below!
                        </p>
                      </div>
                    )}

                    <div className="max-w-md mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-border-custom shadow-sm space-y-6 text-left">
                      <div>
                        <h4 className="text-base font-bold text-text-primary mb-3">To receive a more accurate estimate, send us:</h4>
                        <ul className="space-y-2.5 text-sm text-text-muted">
                          <li className="flex items-start gap-2.5">
                            <span className="text-accent font-bold">✓</span>
                            <span>Kitchen measurements</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-accent font-bold">✓</span>
                            <span>Sketches</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-accent font-bold">✓</span>
                            <span>Inspiration photos</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-accent font-bold">✓</span>
                            <span>Existing kitchen photos</span>
                          </li>
                          <li className="flex items-start gap-2.5">
                            <span className="text-accent font-bold">✓</span>
                            <span>Architectural drawings <span className="text-xs text-gray-400 font-medium">(if available)</span></span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <span className="block text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">Upload Documents</span>
                        <a 
                          href="https://quartzinternational.ca/contact" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="block bg-white hover:bg-gray-50 border-2 border-dashed border-[#C6A87D] hover:border-[#B5966A] rounded-2xl p-6 text-center cursor-pointer transition-colors"
                        >
                          <span className="block text-lg font-black text-text-primary uppercase tracking-tight">Drag & Drop</span>
                          <span className="block text-xs text-gray-400 font-semibold my-1">or</span>
                          <span className="inline-block btn-primary py-2 px-5 text-xs font-bold uppercase tracking-wider">Browse Files</span>
                        </a>
                      </div>

                      <div className="border-t border-dashed border-border-custom pt-6 text-center space-y-3">
                        <p className="text-xs text-gray-500 font-semibold">Prefer to send photos or files directly?</p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                          <a 
                            href="https://wa.me/16473706684" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-2xl font-bold text-sm tracking-wider uppercase transition-colors"
                          >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.734-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.11 1.94 11.5 1.94c-5.436 0-9.86 4.37-9.864 9.8.001 1.838.503 3.626 1.457 5.187l-1.02 3.733 3.825-.99c1.554.849 3.09 1.284 4.149 1.284z"/></svg>
                            WhatsApp Us
                          </a>
                          <a 
                            href="mailto:info@quartzinternational.ca?subject=Kitchen Estimate Documents" 
                            className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-black text-white px-6 py-3 rounded-2xl font-bold text-sm tracking-wider uppercase transition-colors"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            Email Us
                          </a>
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 text-center leading-relaxed italic border-t border-gray-100 pt-4">
                        Need help with measurements? Let us know and we will guide you through it!
                      </p>

                      <div className="text-center pt-2 border-t border-gray-100">
                        <button 
                          type="button"
                          onClick={generatePdf} 
                          disabled={isGeneratingPdf} 
                          className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-text-primary transition-colors flex items-center gap-1.5 justify-center mx-auto"
                        >
                          {isGeneratingPdf ? 'Generating PDF...' : 'Download PDF Copy'}
                        </button>
                      </div>
                    </div>

                    <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white max-w-lg mx-auto">
                       <h4 className="text-2xl font-black tracking-tighter mb-4 italic uppercase">Want to lock in your price?</h4>
                       <p className="text-sm text-gray-400 mb-8 font-medium">Book a free 15-min consultation and lock in current material rates for 30 days.</p>
                       <button className="btn-primary w-full h-16 text-lg font-black uppercase">Book Free Consultation &rarr;</button>
                    </div>

                    <div className="pt-8 text-center">
                       <button 
                         onClick={closeCalculator}
                         className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-200 hover:text-[#1A1A1A] transition-colors"
                       >
                         Close Window
                       </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            {state.step < 9 && (
              <div className="hidden lg:flex justify-between items-center mt-12 pt-8 border-t border-[#E5E2DC]">
                <button 
                  onClick={handleBack}
                  disabled={state.step === 1 || (state.startedFromCabinets && state.step === 5)}
                  className={cn(
                    "flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-opacity",
                    (state.step === 1 || (state.startedFromCabinets && state.step === 5)) ? "opacity-0 invisible" : "opacity-100"
                  )}
                >
                  <ChevronLeft size={16} /> Back
                </button>
                <button 
                  onClick={handleNext}
                  className="btn-primary h-14 px-10 group"
                >
                  {isLastStep ? 'See My Estimate' : 'Next Step'} 
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

        {/* Live Price Panel (Desktop) */}
        {state.step < 9 && (
          <div className="hidden lg:flex w-80 bg-[#F8F9FA] border-l border-[#E5E2DC] flex-col p-10 overflow-y-auto font-sans">
            <div className="mb-10">
               <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Live Estimate</p>
               <h4 className="text-3xl font-black text-[#1A1A1A] tracking-tighter leading-none mb-2">
                 ${results.total.low.toLocaleString()} – ${results.total.high.toLocaleString()}
               </h4>
               <p className="text-[9px] text-gray-400 font-bold">Estimated GTA Project Total</p>
            </div>

            <div className="space-y-6 flex-grow">
               <div className="space-y-4">
                 {state.includeCountertops && (
                   <>
                     <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-gray-400">Quartz Level:</span>
                        <span className="text-[#C6A87D] uppercase tracking-widest">{state.quartzLevel}</span>
                     </div>
                     <div className="flex justify-between items-center text-xs font-bold">
                        <span className="text-gray-400">Countertops:</span>
                        <span className="text-[#1A1A1A]">
                          {Math.floor(state.countertopLinearFt)} ft {Math.round((state.countertopLinearFt - Math.floor(state.countertopLinearFt)) * 12) > 0 ? `${Math.round((state.countertopLinearFt - Math.floor(state.countertopLinearFt)) * 12)} in` : ''} ({state.countertopSqFt} sq ft)
                        </span>
                     </div>
                   </>
                 )}
                  {state.islandType && state.islandType !== 'none' && (
                    <div className="flex justify-between items-center text-xs font-bold">
                       <span className="text-gray-400">Island/Peninsula:</span>
                       <span className="text-[#1A1A1A] capitalize">{state.islandType === 'waterfall' ? 'Large w/ Waterfall' : state.islandType}</span>
                    </div>
                  )}
                  {state.includeCabinets && (
                    <>
                      <div className="flex justify-between items-center text-xs font-bold">
                         <span className="text-gray-400">Cabinets:</span>
                         <span className="text-[#1A1A1A]">
                            {Math.floor(state.cabinetLinearFt + ({ none: 0, small: 4, large: 8, waterfall: 8 }[state.islandType || 'none']))} ft {Math.round((state.cabinetLinearFt - Math.floor(state.cabinetLinearFt)) * 12) > 0 ? `${Math.round((state.cabinetLinearFt - Math.floor(state.cabinetLinearFt)) * 12)} in` : ''} ({(state.deliveryMethod || 'installed').toUpperCase()})
                         </span>
                      </div>
                      {state.selectedCabinetStyle && (
                        <div className="flex justify-between items-center text-xs font-bold">
                           <span className="text-gray-400">Style:</span>
                           <span className="text-[#1A1A1A]">{state.selectedCabinetStyle}</span>
                        </div>
                      )}
                    </>
                  )}
               </div>

               <div className="pt-6 border-t border-[#E5E2DC] space-y-3">
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Included Breakdown</p>
                  {state.includeCountertops && (
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-gray-500">Countertops</span>
                      <span>${results.countertop.low.toLocaleString()}+</span>
                    </div>
                  )}
                  {state.includeCabinets && (
                    <div className="flex justify-between text-[11px] font-bold">
                      <span className="text-gray-500">Cabinets</span>
                      <span>${results.cabinets.low.toLocaleString()}+</span>
                    </div>
                  )}
               </div>
            </div>

            <div className="mt-auto pt-10 space-y-6">
               <div className="bg-[#F8FDF9] border border-[#D1EAD8] p-5 rounded-[2rem]">
                  <div className="flex items-center gap-2 mb-2">
                     <Calendar size={14} className="text-[#27AE60]" />
                     <span className="text-[10px] font-black text-[#27AE60] uppercase tracking-widest">Live Schedule</span>
                  </div>
                  <p className="text-xs font-black text-[#1A1A1A]">Next Available: <span className="text-[#27AE60]">5–7 Days</span></p>
                  <p className="text-[9px] text-gray-500 font-bold uppercase mt-1 tracking-wider italic">Vaughan / Markham HQ</p>
               </div>

               <div className="bg-white border border-[#E5E2DC] p-6 rounded-[2.5rem] shadow-sm">
                  <ShieldCheck size={20} className="text-accent mx-auto mb-3" />
                  <p className="text-[10px] font-bold text-gray-500 text-center uppercase tracking-tight">Locked to 2026 Direct Pricing</p>
               </div>
            </div>
          </div>
        )}

        {/* Mobile Sticky bottom price bar */}
        {state.step < 9 && (
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E2DC] p-6 flex justify-between items-center z-50">
             <div>
                <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Estimated Total</p>
                <p className="text-xl font-black text-[#C6A87D] tracking-tighter">
                  ${results.total.low.toLocaleString()} – ${results.total.high.toLocaleString()}
                </p>
             </div>
             <div className="flex gap-2">
                {!(state.step === 1 || (state.startedFromCabinets && state.step === 5)) && (
                   <button 
                     onClick={handleBack} 
                     className="flex items-center justify-center border border-[#E5E2DC] text-gray-500 rounded-xl p-3 hover:bg-gray-50 transition-colors"
                     aria-label="Go back"
                   >
                      <ChevronLeft size={16} />
                   </button>
                )}
                <button onClick={handleNext} className="btn-primary py-3 px-6 text-sm">
                   {isLastStep ? 'See Results' : 'Next'}
                </button>
             </div>
          </div>
          )}
        </motion.div>
      </div>
    )}
    </AnimatePresence>
  );
}
