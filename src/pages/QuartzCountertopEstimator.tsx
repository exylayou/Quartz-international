import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import {
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Maximize, 
  Calculator,
  CheckCircle2,
  Info,
  Layers,
  Sparkles,
  Timer,
  Plus,
  Box,
  Crown,
  MapPin,
  Truck,
  Hammer,
  Loader2,
  FileText,
  Star,
  Clock,
  ShieldCheck,
  ChefHat,
  Download,
  ChevronLeft,
  X,
  ChevronDown
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn, trackLeadConversion } from '../lib/utils';
import { PRICING_CONSTANTS } from '../constants';
import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';

// Import images
import pureWhiteStyle from '../assets/images/pure_white_style.png';
import matteWhiteStyle from '../assets/images/matte_white_style.png';
import choose3 from '../assets/images/choose_3.png';
import condoKitchen from '../assets/images/condo_kitchen.png';
import suburbanRemodel from '../assets/images/suburban_remodel.png';
import familyKitchen from '../assets/images/family_kitchen.png';
import modernKitchenQuartz from '../assets/images/modern_kitchen_quartz.png';
import rtaDelivery from '../assets/images/rta_delivery.png';
import rtiDelivery from '../assets/images/rti_delivery.png';
import installedDelivery from '../assets/images/installed_delivery.png';
import essentialKitchenBanner from '../assets/images/essential_kitchen_banner.jpg';
import premiumKitchenBanner from '../assets/images/premium_kitchen_banner.png';
import eliteKitchenBanner from '../assets/images/elite_kitchen_banner.jpg';
import howToMeasure from '../assets/images/how-to-measure.jpg';

export default function QuartzCountertopEstimator() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [feet, setFeet] = useState(20);
  const [inches, setInches] = useState(0);
  const [measureMode, setMeasureMode] = useState<'precise' | 'simple'>('precise');
  const [simpleShape, setSimpleShape] = useState('');
  const [simpleSize, setSimpleSize] = useState<'small'|'medium'|'large'|''>('');
  const [islandType, setIslandType] = useState<'none' | 'small' | 'large' | 'waterfall'>('none');
  const [quartzLevel, setQuartzLevel] = useState<'standard' | 'premium' | 'luxury'>('standard');
  
  // Cabinet Bundle Upsell state
  const [includeCabinets, setIncludeCabinets] = useState<boolean | null>(null);
  const [cabinetStyle, setCabinetStyle] = useState<'essential' | 'premium' | 'elite'>('essential');
  const [deliveryMethod, setDeliveryMethod] = useState<'rta' | 'rti' | 'installed'>('installed');
  
  // Lead submission form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    notes: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const pdfTemplateRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slab = params.get('slab');
    const level = params.get('level');
    
    if (level === 'premium' || level === 'luxury' || level === 'standard') {
      setQuartzLevel(level);
    } else if (slab) {
      const slabName = decodeURIComponent(slab).toLowerCase();
      const premiumKeywords = ['gold', 'taj', 'calacatta', 'caesarstone', 'silestone', 'lucent', 'kstone', 'kasa'];
      const luxuryKeywords = ['luxury', 'custom', 'exotic', 'quartzite'];
      
      if (luxuryKeywords.some(kw => slabName.includes(kw))) {
        setQuartzLevel('luxury');
      } else if (premiumKeywords.some(kw => slabName.includes(kw))) {
        setQuartzLevel('premium');
      } else {
        setQuartzLevel('standard');
      }
    }
  }, []);

  // Compute countertop linear feet and square footage
  const linearFt = feet + (inches / 12);
  const wallSF = Math.max(0, (linearFt * 2) - 5);
  const islandSF = { none: 0, small: 12, large: 20, waterfall: 35 }[islandType];
  const countertopSqFt = Math.round(wallSF + islandSF);

  // Pricing calculations
  const calculateEstimate = () => {
    const levels = PRICING_CONSTANTS.LEVELS[quartzLevel];
    let countertopLow = countertopSqFt * levels.low;
    let countertopHigh = countertopSqFt * levels.high;

    // Add waterfall end costs if selected
    if (islandType === 'waterfall') {
      countertopLow += PRICING_CONSTANTS.EXTRAS.waterfall.low;
      countertopHigh += PRICING_CONSTANTS.EXTRAS.waterfall.high;
    }

    let cabinetLow = 0;
    let cabinetHigh = 0;

    if (includeCabinets) {
      const cabRates = PRICING_CONSTANTS.CABINETS[deliveryMethod][cabinetStyle];
      const islandCabinetLF = { none: 0, small: 4, large: 8, waterfall: 8 }[islandType];
      const totalCabinetLF = linearFt + islandCabinetLF;
      
      cabinetLow = totalCabinetLF * cabRates.low;
      cabinetHigh = totalCabinetLF * cabRates.high;
    }

    return {
      countertopLow: Math.round(countertopLow / 100) * 100,
      countertopHigh: Math.round(countertopHigh / 100) * 100,
      cabinetLow: Math.round(cabinetLow / 100) * 100,
      cabinetHigh: Math.round(cabinetHigh / 100) * 100,
      totalLow: Math.round((countertopLow + cabinetLow) / 100) * 100,
      totalHigh: Math.round((countertopHigh + cabinetHigh) / 100) * 100
    };
  };

  const cost = calculateEstimate();

  const getWhatsAppUrl = () => {
    const base = 'https://api.whatsapp.com/send/?phone=16473706684';
    // Returning contacts already have an established chat — skip the pre-fill
    if (localStorage.getItem('qi_has_contacted')) return base;
    let msg = `Hi Quartz International, I just completed the online estimator on your website. Here are my project details:\n\n`;
    msg += `\u2022 Countertops: ${countertopSqFt} SQ FT (${quartzLevel.toUpperCase()} Tier)\n`;
    msg += `\u2022 Layout: ${measureMode === 'precise' ? 'Precise Dimensions' : 'Simple Preset'} (${Math.round(linearFt)} Linear FT)\n`;
    msg += `\u2022 Island: ${islandType === 'none' ? 'No Island' : islandType === 'small' ? 'Small Island' : islandType === 'large' ? 'Large Island' : 'Waterfall Island'}\n`;
    if (includeCabinets) {
      msg += `\u2022 Cabinets: ${cabinetStyle.toUpperCase()} Collection (${deliveryMethod.toUpperCase()})\n`;
    }
    msg += `\u2022 Estimated Range: $${cost.totalLow.toLocaleString()} - $${cost.totalHigh.toLocaleString()}\n\n`;
    if (formData.name) msg += `My name is ${formData.name}. `;
    msg += `Can we discuss next steps?`;
    return `${base}&text=${encodeURIComponent(msg)}`;
  };

  const handleNext = () => {
    if (step === 3 && includeCabinets === null) {
      setStep(4); // Show cabinet upsell step
    } else if (step === 4 && includeCabinets === false) {
      setStep(7); // Skip cabinet choices, go straight to lead capture
    } else if (step === 4 && includeCabinets === true) {
      setStep(5); // Go to cabinet collection select
    } else if (step === 5) {
      setStep(6); // Go to cabinet delivery select
    } else if (step === 6) {
      setStep(7); // Go to lead capture
    } else {
      setStep(prev => prev + 1);
    }
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (step === 7 && includeCabinets === false) {
      setStep(4);
    } else if (step === 5) {
      setStep(4);
    } else {
      setStep(prev => prev - 1);
    }
    window.scrollTo(0, 0);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let utmParams = {};
      let behaviorMetadata = {};
      try {
        const utmRaw = sessionStorage.getItem('qi_utm_data');
        if (utmRaw) utmParams = JSON.parse(utmRaw);

        const behaviorRaw = sessionStorage.getItem('qi_user_behavior');
        if (behaviorRaw) {
          const behavior = JSON.parse(behaviorRaw);
          if (behavior.pageViews && behavior.pageViews.length > 0) {
            const lastPage = behavior.pageViews[behavior.pageViews.length - 1];
            if (!lastPage.durationMs) {
              lastPage.durationMs = Date.now() - lastPage.enteredAt;
            }
          }
          if (behavior.sessionStart) {
            behavior.timeSpentMs = Date.now() - new Date(behavior.sessionStart).getTime();
          }
          behaviorMetadata = behavior;
        }
      } catch {}

      const postBody = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        notes: `Project Location: ${formData.location}\nUser notes: ${formData.notes}`,
        layout: 'L-Shape',
        quartzLevel,
        countertopSqFt,
        countertopLinearFt: Math.round(linearFt),
        hasIsland: islandType !== 'none',
        islandType,
        includeCabinets: !!includeCabinets,
        cabinetLinearFt: includeCabinets ? Math.round(linearFt) : 0,
        cabinetStyle: includeCabinets ? cabinetStyle : '',
        deliveryMethod: includeCabinets ? deliveryMethod : '',
        timeline: 'asap',
        countertopCostLow: cost.countertopLow,
        countertopCostHigh: cost.countertopHigh,
        cabinetCostLow: cost.cabinetLow,
        cabinetCostHigh: cost.cabinetHigh,
        totalCostLow: cost.totalLow,
        totalCostHigh: cost.totalHigh,
        includeCountertops: true,
        ...utmParams,
        behavior: behaviorMetadata
      };

      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postBody)
      });
      localStorage.setItem('qi_has_contacted', '1');
      setIsSubmitted(true);
      trackLeadConversion(cost.totalHigh);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
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
      
      pdf.save(`Quartz_International_Budgetary_Estimate_${formData.name.replace(/\s+/g, '_') || 'Customer'}.pdf`);
    } catch (err) {
      console.error('PDF Generation failed:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const totalSteps = includeCabinets ? 7 : (includeCabinets === false ? 5 : 4);
  const currentStepLabel = step <= 4 ? step : (includeCabinets ? step : step - 2);

  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-6 pb-32">
      <SEO title="Quartz Countertop Estimator | Quartz International" description="Learn more about Quartz Countertop Estimator at Quartz International. We provide premium countertops and cabinetry in Toronto and the GTA." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SMALL HEADER */}
        <div className="flex justify-between items-start mb-4 max-w-7xl mx-auto">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-[#1A1A1A] tracking-tighter uppercase italic">
              Get Your Kitchen Estimate
            </h2>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">
              Takes 30 seconds • No obligation
            </p>
          </div>
          <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-[#1A1A1A] md:w-6 md:h-6" />
          </Link>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full bg-[#E5E2DC] h-1.5 rounded-full mb-6 overflow-hidden max-w-7xl mx-auto">
          <div 
            className="bg-[#C6A87D] h-full transition-all duration-500" 
            style={{ width: `${(currentStepLabel / totalSteps) * 100}%` }}
          />
        </div>

        {/* INSTALLATION SLOT INFO */}
        {step < 7 && (
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#F8FDF9] rounded-2xl border border-[#D1EAD8] mb-8">
            <div className="w-2 h-2 rounded-full bg-[#2ECC71] animate-pulse" />
            <p className="text-[9px] font-black text-[#1A1A1A] uppercase tracking-[0.15em]">
              Next Install Slot: <span className="text-[#27AE60]">5–7 Days</span> <span className="text-gray-400 font-bold ml-1">(Markham / Vaughan)</span>
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-8">
          {/* Left Form Column */}
          <div className={cn(step < 7 ? "lg:col-span-8" : "lg:col-span-12", "w-full")}>
            <div className="bg-white rounded-3xl border border-border-custom p-5 sm:p-8 md:p-12 shadow-sm relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: -15, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* STEP 1: Length */}
                    {step === 1 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary flex items-center gap-3">
                          <Maximize className="text-accent" />
                          What is the total length of your countertop walls?
                        </h2>
                        
                        {measureMode === 'precise' ? (
                          <>
                            <div className="flex justify-between items-center">
                              <p className="text-gray-500 text-sm">Measure only the walls that will have countertops.</p>
                              <button 
                                onClick={() => setMeasureMode('simple')}
                                className="text-xs font-bold text-accent hover:text-accent/80 transition-colors"
                              >
                                I don't know my measurements
                              </button>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 max-w-md py-6">
                              <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Feet</label>
                                <div className="relative">
                                  <select 
                                    value={feet}
                                    onChange={(e) => setFeet(parseInt(e.target.value))}
                                    className="w-full h-16 bg-[#FAF9F6] border border-[#E5E2DC] rounded-2xl pl-4 pr-10 text-lg font-bold text-[#1A1A1A] appearance-none cursor-pointer focus:outline-none focus:border-accent"
                                  >
                                    {Array.from({ length: 101 }, (_, i) => (
                                      <option key={i} value={i}>{i} ft</option>
                                    ))}
                                  </select>
                                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <ChevronDown size={20} />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Inches</label>
                                <div className="relative">
                                  <select 
                                    value={inches}
                                    onChange={(e) => setInches(parseInt(e.target.value))}
                                    className="w-full h-16 bg-[#FAF9F6] border border-[#E5E2DC] rounded-2xl pl-4 pr-10 text-lg font-bold text-[#1A1A1A] appearance-none cursor-pointer focus:outline-none focus:border-accent"
                                  >
                                    {Array.from({ length: 12 }, (_, i) => (
                                      <option key={i} value={i}>{i} in</option>
                                    ))}
                                  </select>
                                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                    <ChevronDown size={20} />
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* How to Measure Visual Guide */}
                            <div className="border border-border-custom rounded-3xl overflow-hidden bg-white max-w-2xl my-6">
                              <div className="bg-[#FAF9F6] border-b border-border-custom p-4 flex items-center gap-2">
                                <Info className="text-accent w-5 h-5 shrink-0" />
                                <h3 className="font-bold text-[#1A1A1A] text-sm uppercase tracking-wider">
                                  Visual Guide: How to Measure
                                </h3>
                              </div>
                              <div className="p-4 sm:p-6 bg-white flex justify-center">
                                <img 
                                  src={howToMeasure} 
                                  alt="How to Measure countertops guide" 
                                  className="w-full max-w-xl h-auto object-contain rounded-2xl"
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="py-2 animate-fadeIn">
                            <div className="flex justify-between items-center mb-6">
                              <p className="text-gray-500 text-sm">Select your rough shape and size, and we'll estimate the length for you.</p>
                              <button 
                                onClick={() => setMeasureMode('precise')}
                                className="text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors"
                              >
                                Actually, I have measurements
                              </button>
                            </div>

                            <h3 className="text-sm font-bold text-gray-800 mb-4">1. Kitchen Shape</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                              {[
                                { 
                                  id: 'l-shape', 
                                  label: 'L-Shape',
                                  svg: (
                                    <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto mb-2 text-current" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M 25 25 L 25 75 L 75 75" />
                                    </svg>
                                  )
                                },
                                { 
                                  id: 'u-shape', 
                                  label: 'U-Shape',
                                  svg: (
                                    <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto mb-2 text-current" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M 25 25 L 25 75 L 75 75 L 75 25" />
                                    </svg>
                                  )
                                },
                                { 
                                  id: 'galley', 
                                  label: 'Galley',
                                  svg: (
                                    <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto mb-2 text-current" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M 25 20 L 25 80 M 75 20 L 75 80" />
                                    </svg>
                                  )
                                },
                                { 
                                  id: 'island-only', 
                                  label: 'Island Only',
                                  svg: (
                                    <svg viewBox="0 0 100 100" className="w-12 h-12 mx-auto mb-2 text-current" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <rect x="25" y="35" width="50" height="30" rx="4" />
                                    </svg>
                                  )
                                }
                              ].map(s => (
                                <button
                                  key={s.id}
                                  type="button"
                                  onClick={() => setSimpleShape(s.id)}
                                  className={`p-5 rounded-2xl border-2 text-sm font-bold flex flex-col items-center justify-center transition-all ${
                                    simpleShape === s.id 
                                      ? 'border-accent bg-accent/5 text-accent ring-2 ring-accent/30' 
                                      : 'border-gray-200 text-gray-400 hover:border-gray-300 hover:text-gray-600 bg-white'
                                  }`}
                                >
                                  {s.svg}
                                  <span className={simpleShape === s.id ? "text-accent" : "text-gray-700"}>{s.label}</span>
                                </button>
                              ))}
                            </div>

                            <h3 className="text-sm font-bold text-gray-800 mb-4">2. Rough Size</h3>
                            <div className="grid grid-cols-3 gap-3 mb-6">
                              {[
                                { id: 'small', label: 'Small', desc: 'Under 50 sqft', feet: 15 },
                                { id: 'medium', label: 'Medium', desc: '50-100 sqft', feet: 25 },
                                { id: 'large', label: 'Large', desc: '100+ sqft', feet: 40 }
                              ].map(s => (
                                <button
                                  key={s.id}
                                  onClick={() => {
                                    setSimpleSize(s.id as any);
                                    setFeet(s.feet);
                                    setInches(0);
                                  }}
                                  className={`p-3 rounded-xl border-2 text-center transition-all ${
                                    simpleSize === s.id ? 'border-accent bg-accent/5' : 'border-gray-200 hover:border-gray-300 bg-white'
                                  }`}
                                >
                                  <div className={`text-sm font-bold mb-1 ${simpleSize === s.id ? 'text-accent' : 'text-gray-800'}`}>{s.label}</div>
                                  <div className="text-[10px] text-gray-500">{s.desc}</div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Calculated Countertop Area Display Box */}
                        <div className="bg-[#FAF9F6] border border-[#E5E2DC] rounded-3xl p-4 sm:p-6 flex items-center gap-4 sm:gap-6 mt-6">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
                            <span className="text-[#C6A87D] font-bold text-base sm:text-lg">{countertopSqFt}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#1A1A1A] text-xs sm:text-base">
                              {measureMode === 'precise' ? 'Calculated' : 'Estimated'} Countertop Area: {countertopSqFt} SQ FT
                            </h4>
                            <p className="text-gray-400 font-semibold text-[10px] sm:text-xs italic mt-1 leading-relaxed">
                              {measureMode === 'precise' ? 'Formula: (Wall length × 2) - 5 appliance allowance + island/peninsula add-on' : `Based on a ${simpleSize || 'typical'} ${simpleShape || 'kitchen'} layout.`}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Island */}
                    {step === 2 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary flex items-center gap-3">
                          <Box className="text-accent" />
                          Do you have an island?
                        </h2>
                        <p className="text-gray-500 text-sm">Visual options with countertop and cabinet impact.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                          {[
                            { id: 'none', title: 'No Island', desc: 'No island is needed for layout.', img: condoKitchen },
                            { id: 'small', title: 'Small Island', desc: 'Compact breakfast bar or peninsula.', img: suburbanRemodel },
                            { id: 'large', title: 'Large Island', desc: 'Sizable island with base cabinetry.', img: familyKitchen },
                            { id: 'waterfall', title: 'Island + Waterfall', desc: 'Cascading stone side panels to floor.', img: modernKitchenQuartz }
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setIslandType(opt.id as any)}
                              className={cn(
                                "group border-2 rounded-2xl overflow-hidden text-left transition-all duration-300 bg-white hover:border-accent hover:shadow-md relative",
                                islandType === opt.id ? "border-accent bg-accent/10 ring-4 ring-accent/40 shadow-[0_0_15px_rgba(198,168,125,0.5)]" : "border-border-custom"
                              )}
                            >
                              {islandType === opt.id && (
                                <div className="absolute top-3 right-3 bg-accent text-white p-1 rounded-full z-10 shadow-sm flex items-center justify-center">
                                  <Check size={14} className="stroke-[3]" />
                                </div>
                              )}
                              <div className="aspect-[16/9] overflow-hidden relative border-b border-border-custom">
                                <img src={opt.img} alt={opt.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                              </div>
                              <div className="p-4">
                                <h4 className="font-bold text-text-primary text-base uppercase tracking-tight">{opt.title}</h4>
                                <p className="text-xs text-gray-400 mt-1">{opt.desc}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Quartz Collections */}
                    {step === 3 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary flex items-center gap-3">
                          <Sparkles className="text-accent" />
                          Choose Your Quartz Collection
                        </h2>
                        <p className="text-gray-500 text-sm">Select the material tier that aligns with your design preferences.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
                          {[
                            { 
                              id: 'standard', 
                              name: 'Standard Collection', 
                              rates: '$48 - $68 / sq ft', 
                              desc: 'Budget-friendly, durable engineered quartz slabs.', 
                              brands: 'TCE Stone, Kasa Quartz', 
                              img: pureWhiteStyle 
                            },
                            { 
                              id: 'premium', 
                              name: 'Premium Collection', 
                              rates: '$69 - $95 / sq ft', 
                              desc: 'Striking patterns, modern vein flows, and elegant marble looks.', 
                              brands: 'Lucent Quartz, Kstone', 
                              img: matteWhiteStyle,
                              badge: 'Most Popular' 
                            },
                            { 
                              id: 'luxury', 
                              name: 'Luxury Collection', 
                              rates: '$100 - $170 / sq ft', 
                              desc: 'Signature collections and high-end natural architectural details.', 
                              brands: 'Silestone, Caesarstone', 
                              img: choose3 
                            }
                          ].map((col) => (
                            <button
                              key={col.id}
                              type="button"
                              onClick={() => setQuartzLevel(col.id as any)}
                              className={cn(
                                "group border-2 rounded-2xl overflow-hidden text-left flex flex-col justify-between transition-all duration-300 bg-white hover:border-accent hover:shadow-md relative",
                                quartzLevel === col.id ? "border-accent bg-accent/10 ring-4 ring-accent/40 shadow-[0_0_15px_rgba(198,168,125,0.5)]" : "border-border-custom"
                              )}
                            >
                              {col.badge && (
                                <div className="absolute top-3 left-3 bg-accent text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10 animate-pulse">
                                  {col.badge}
                                </div>
                              )}
                              {quartzLevel === col.id && (
                                <div className="absolute top-3 right-3 bg-accent text-white p-1 rounded-full z-10 shadow-sm flex items-center justify-center">
                                  <Check size={14} className="stroke-[3]" />
                                </div>
                              )}
                              <div>
                                <div className="aspect-[4/3] overflow-hidden relative border-b border-border-custom bg-gray-50 p-2">
                                  <img src={col.img} alt={col.name} className="w-full h-full object-contain group-hover:scale-103 transition-transform duration-500" />
                                </div>
                                <div className="p-5">
                                  <h4 className="font-bold text-text-primary text-sm uppercase tracking-tight">{col.name}</h4>
                                  <p className="text-xs font-bold text-accent mt-1">{col.rates}</p>
                                  <p className="text-[11px] text-gray-500 mt-3 leading-relaxed">{col.desc}</p>
                                </div>
                              </div>
                              <div className="px-5 pb-5 border-t border-gray-100 pt-3">
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-0.5">Example Brands:</span>
                                <span className="text-[10px] font-bold text-text-primary uppercase tracking-wide">{col.brands}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Cabinet Upsell */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary flex items-center gap-3">
                          <Crown className="text-accent" />
                          Do you also need kitchen cabinets?
                        </h2>
                        <p className="text-gray-500 text-sm">Bundle cabinet and countertop production together to eliminate extra installation fees and save on total labor cost.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
                          <button
                            type="button"
                            onClick={() => setIncludeCabinets(false)}
                            className={cn(
                              "border rounded-2xl p-8 text-center flex flex-col justify-center items-center hover:border-accent hover:shadow-md transition-all duration-300",
                              includeCabinets === false ? "border-accent bg-accent/5" : "border-border-custom"
                            )}
                          >
                            <h3 className="text-xl font-bold text-text-primary mb-2">No</h3>
                            <p className="text-xs text-gray-400">Estimate Countertops Only</p>
                          </button>

                          <button
                            type="button"
                            onClick={() => setIncludeCabinets(true)}
                            className={cn(
                              "border rounded-2xl p-8 text-center flex flex-col justify-center items-center hover:border-accent hover:shadow-md transition-all duration-300 relative overflow-hidden group",
                              includeCabinets === true ? "border-accent bg-accent/5" : "border-border-custom"
                            )}
                          >
                            <div className="absolute top-0 right-0 bg-accent text-white py-1 px-4 text-[8px] font-black uppercase tracking-widest rounded-bl-xl z-10 animate-pulse">
                              Highly Recommended
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-2">Yes</h3>
                            <p className="text-xs text-gray-400">Continue to Cabinet Setup</p>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* STEP 5: Choose Delivery Method (Upsell YES) */}
                    {step === 5 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary flex items-center gap-3">
                          <Truck className="text-accent" />
                          Choose Cabinet Delivery Method
                        </h2>
                        <p className="text-gray-500 text-sm">Select assembly and integration options.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
                          {[
                            { id: 'rta', name: 'Ready to Assemble (RTA)', desc: 'Shipped flat-packed. Low cost assembly, ideal for DIYers and property builders.', icon: Layers, img: rtaDelivery },
                            { id: 'rti', name: 'Ready to Install (RTI)', desc: 'Pre-assembled at the factory. Shipped ready to be anchored onto walls.', icon: Truck, img: rtiDelivery },
                            { id: 'installed', name: 'Fully Installed', desc: 'Turnkey white-glove setup. Includes professional site measures and alignment.', icon: Hammer, img: installedDelivery }
                          ].map((del) => (
                            <button
                              key={del.id}
                              type="button"
                              onClick={() => setDeliveryMethod(del.id as any)}
                              className={cn(
                                "group border-2 rounded-2xl overflow-hidden text-left flex flex-col transition-all duration-300 bg-white hover:border-accent hover:shadow-md relative",
                                deliveryMethod === del.id ? "border-accent bg-accent/10 ring-4 ring-accent/40 shadow-[0_0_15px_rgba(198,168,125,0.5)]" : "border-border-custom"
                              )}
                            >
                              {deliveryMethod === del.id && (
                                <div className="absolute top-3 right-3 bg-accent text-white p-1 rounded-full z-10 shadow-sm flex items-center justify-center">
                                  <Check size={14} className="stroke-[3]" />
                                </div>
                              )}
                              <div className="aspect-[16/10] overflow-hidden relative border-b border-border-custom">
                                <img src={del.img} alt={del.name} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                              </div>
                              <div className="p-5 flex-grow flex flex-col justify-between">
                                <div>
                                  <div className="flex items-center gap-2 mb-2">
                                    <del.icon size={16} className="text-accent" />
                                    <h4 className="font-bold text-text-primary text-sm uppercase tracking-tight">{del.name}</h4>
                                  </div>
                                  <p className="text-[11px] text-gray-500 leading-relaxed">{del.desc}</p>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 6: Choose Cabinet Collection (Upsell YES) */}
                    {step === 6 && (
                      <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary flex items-center gap-3">
                          <Crown className="text-accent" />
                          Choose Cabinet Collection
                        </h2>
                        <p className="text-gray-500 text-sm">Our modern, European frameless cabinetry bundles are categorized in three tiers.</p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4">
                          {[
                            { id: 'essential', title: 'Essential Collection', desc: 'Flat-panel cabinetry with high-density structural laminates.', img: essentialKitchenBanner },
                            { id: 'premium', title: 'Premium Collection', desc: 'Timeless shaker designs, sleek matte, and high-gloss finishes.', img: premiumKitchenBanner, badge: 'Popular' },
                            { id: 'elite', title: 'Elite Collection', desc: 'Luxury slim shaker door styles with painted hardwood cores.', img: eliteKitchenBanner }
                          ].map((cab) => (
                            <button
                              key={cab.id}
                              type="button"
                              onClick={() => setCabinetStyle(cab.id as any)}
                              className={cn(
                                "group border-2 rounded-2xl overflow-hidden text-left flex flex-col transition-all duration-300 bg-white hover:border-accent hover:shadow-md relative",
                                cabinetStyle === cab.id ? "border-accent bg-accent/10 ring-4 ring-accent/40 shadow-[0_0_15px_rgba(198,168,125,0.5)]" : "border-border-custom"
                              )}
                            >
                              {cab.badge && (
                                <div className="absolute top-3 left-3 bg-accent text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10">
                                  {cab.badge}
                                </div>
                              )}
                              {cabinetStyle === cab.id && (
                                <div className="absolute top-3 right-3 bg-accent text-white p-1 rounded-full z-10 shadow-sm flex items-center justify-center">
                                  <Check size={14} className="stroke-[3]" />
                                </div>
                              )}
                              <div className="aspect-[16/10] overflow-hidden relative border-b border-border-custom">
                                <img src={cab.img} alt={cab.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                              </div>
                              <div className="p-5 flex-grow flex flex-col justify-between">
                                <div>
                                  <h4 className="font-bold text-text-primary text-sm uppercase tracking-tight">{cab.title}</h4>
                                  <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">{cab.desc}</p>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 7: Results Reveal & Lead Form */}
                    {step === 7 && (
                      <div className="space-y-6">
                        {!showForm ? (
                          /* PHASE 1: RESULTS REVEAL */
                          <div className="space-y-8 animate-fadeIn">
                            <h2 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tighter italic uppercase text-center">
                              Your Estimated Countertop Cost
                            </h2>

                            <div className="inline-block bg-[#1A1A1A] text-white p-5 xs:p-6 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] text-center relative overflow-hidden group w-full max-w-xl mx-auto shadow-2xl">
                              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                              <span className="text-[10px] font-black text-accent uppercase tracking-[0.25em] mb-4 block">Personalized Estimated Range</span>
                              <p className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
                                ${cost.totalLow.toLocaleString()} <span className="text-accent/50 text-xl md:text-4xl">–</span> ${cost.totalHigh.toLocaleString()}
                              </p>
                              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-2">Pricing valid for 30 days</p>

                              {/* BREAKDOWN SECTION */}
                              <div className="max-w-md mx-auto bg-[#F8F9FA] rounded-3xl border border-[#E5E2DC] p-5 sm:p-8 mt-8 space-y-4 text-center sm:text-left text-[#1A1A1A]">
                                <div className="flex flex-col sm:flex-row justify-between items-center text-sm font-bold border-b border-[#E5E2DC] pb-4 gap-2 sm:gap-0">
                                  <span className="text-gray-400 uppercase tracking-widest text-[10px]">Layout: L-Shape • Length: {Math.round(linearFt)} LF</span>
                                  <span className="text-accent uppercase tracking-widest text-[10px] italic">{quartzLevel} Tier</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-bold border-b border-[#E5E2DC] pb-4">
                                  <span className="text-gray-400 uppercase tracking-widest text-[10px]">Countertops ({countertopSqFt} SQ FT)</span>
                                  <span className="text-[#1A1A1A]">${cost.countertopLow.toLocaleString()} – ${cost.countertopHigh.toLocaleString()}</span>
                                </div>
                                {includeCabinets && (
                                  <div className="flex justify-between items-center text-sm font-bold">
                                    <span className="text-gray-400 uppercase tracking-widest text-[10px]">
                                      Cabinets Bundle ({cabinetStyle} • {deliveryMethod.toUpperCase()})
                                    </span>
                                    <span className="text-[#1A1A1A]">${cost.cabinetLow.toLocaleString()} – ${cost.cabinetHigh.toLocaleString()}</span>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Disclaimer info box */}
                            <div className="max-w-xl mx-auto flex items-start gap-4 text-left bg-[#FAF9F6] border border-border-custom p-5 rounded-2xl">
                              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                                <Info className="text-gray-400" size={20} />
                              </div>
                              <div className="text-xs text-gray-500 font-medium leading-relaxed italic space-y-2">
                                <p>This estimate is based on the information provided and is intended for budgeting purposes.</p>
                                <p>Final pricing may vary based on measurements, layout, material selections and installation requirements.</p>
                              </div>
                            </div>

                            {/* Navigation controls for Results Reveal */}
                            <div className="flex flex-col gap-4 max-w-md mx-auto w-full pt-8 border-t border-gray-100 mt-10">
                              <button
                                type="button"
                                onClick={() => {
                                  setShowForm(true);
                                  window.scrollTo(0, 0);
                                }}
                                className="btn-primary w-full h-16 text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer italic"
                              >
                                Get My Exact Quote &rarr;
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  setShowForm(true);
                                  window.scrollTo(0, 0);
                                }}
                                className="w-full h-16 border-2 border-[#1A1A1A] rounded-3xl flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest hover:bg-[#F8F9FA] transition-colors cursor-pointer"
                              >
                                <FileText size={18} /> Download My Estimate (PDF)
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* PHASE 2: LEAD CAPTURE FORM */
                          <div className="space-y-6 animate-fadeIn">
                            <button
                              type="button"
                              onClick={() => {
                                setShowForm(false);
                                window.scrollTo(0, 0);
                              }}
                              className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-text-primary transition-all cursor-pointer"
                            >
                              <ArrowLeft size={16} />
                              Back to Result
                            </button>


                            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary flex items-center gap-3">
                              <Calculator className="text-accent" />
                              Receive Your Personalized Cost Summary
                            </h2>
                            <p className="text-gray-500 text-sm">Please fill out the form below. We will immediately email your breakdown and reserve current slab promotion pricing for 30 days.</p>
                            
                            <form onSubmit={handleFormSubmit} className="space-y-4 max-w-lg py-4">
                              <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Full Name</label>
                                <input 
                                  type="text" 
                                  required
                                  placeholder="John Doe"
                                  value={formData.name}
                                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                  className="input-field h-12"
                                />
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Address</label>
                                  <input 
                                    type="email" 
                                    required
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    className="input-field h-12"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Phone Number</label>
                                  <input 
                                    type="tel" 
                                    required
                                    placeholder="(647) 555-0199"
                                    value={formData.phone}
                                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                                    className="input-field h-12"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Project Location / City</label>
                                <input 
                                  type="text" 
                                  required
                                  placeholder="e.g. Toronto, Markham, Mississauga"
                                  value={formData.location}
                                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                                  className="input-field h-12"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Optional Project Notes</label>
                                <textarea 
                                  placeholder="e.g. Demolition needed, looking for a mitered waterfall edge, timeline details..."
                                  value={formData.notes}
                                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                                  className="input-field py-3 min-h-[80px]"
                                />
                              </div>
                              
                              <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-primary w-full h-14 text-sm font-bold uppercase tracking-widest shadow-xl shadow-accent/20 cursor-pointer"
                              >
                                {isLoading ? 'Processing...' : 'Email My Estimate'}
                              </button>
                            </form>
                          </div>
                        )}
                      </div>
                    )}


                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-8 py-6"
                  >
                    {/* Estimated Cost Card */}
                    <div className="bg-[#FAF9F5] border border-border-custom p-6 sm:p-8 rounded-3xl text-center space-y-3 max-w-md mx-auto shadow-sm">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Personalized Estimated Range</span>
                      <h3 className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">
                        ${cost.totalLow.toLocaleString()} - ${cost.totalHigh.toLocaleString()}
                      </h3>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Pricing valid for 30 days</p>
                    </div>

                    {/* Success Header */}
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto text-3xl font-bold">✓</div>
                      <h2 className="text-3xl font-bold text-text-primary">Estimate Sent!</h2>
                      <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="text-text-primary font-bold">{formData.name}</span>. We have successfully sent a detailed budgetary calculation to <span className="text-text-primary font-bold">{formData.email}</span>. A project coordinator will review your layout constraints and contact you shortly.
                      </p>
                    </div>

                    {/* Disclaimer */}
                    <div className="text-center px-4 max-w-md mx-auto">
                      <p className="text-[11px] text-gray-400 leading-relaxed">
                        This estimate is based on the information provided and is intended for budgeting purposes.
                      </p>
                      <p className="text-[11px] text-gray-400 leading-relaxed mt-2">
                        Final pricing may vary based on measurements, layout, material selections and installation requirements.
                      </p>
                    </div>

                    {/* Personalized Project Summary List */}
                    <div className="max-w-md mx-auto border border-border-custom rounded-2xl p-6 bg-white space-y-4">
                      <h4 className="text-xs font-bold text-text-primary uppercase tracking-widest border-b border-gray-100 pb-2">Your Specifications</h4>
                      <div className="space-y-3 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-semibold uppercase">Countertop Length</span>
                          <span className="font-bold text-text-primary uppercase">{Math.round(linearFt)} Linear FT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-semibold uppercase">Total Area</span>
                          <span className="font-bold text-text-primary uppercase">{countertopSqFt} SQ FT</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-semibold uppercase">Quartz Collection</span>
                          <span className="font-bold text-accent uppercase tracking-wider">{quartzLevel}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-semibold uppercase">Island Configuration</span>
                          <span className="font-bold text-text-primary uppercase">
                            {islandType.replace('none', 'No Island').replace('small', 'Small Island').replace('large', 'Large Island').replace('waterfall', 'Waterfall')}
                          </span>
                        </div>

                        {includeCabinets && (
                          <div className="border-t border-gray-100 pt-3 space-y-3">
                            <div className="flex justify-between text-accent">
                              <span className="font-bold uppercase">Cabinets Bundle</span>
                              <span className="font-bold uppercase text-[10px]">Included</span>
                            </div>
                            <div className="flex justify-between pl-2">
                              <span className="text-gray-400 font-semibold uppercase">- Collection</span>
                              <span className="font-bold text-text-primary uppercase">{cabinetStyle}</span>
                            </div>
                            <div className="flex justify-between pl-2">
                              <span className="text-gray-400 font-semibold uppercase">- Delivery Method</span>
                              <span className="font-bold text-text-primary uppercase">{deliveryMethod}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

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
                            href={getWhatsAppUrl()}
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-colors"
                          >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.734-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.11 1.94 11.5 1.94c-5.436 0-9.86 4.37-9.864 9.8.001 1.838.503 3.626 1.457 5.187l-1.02 3.733 3.825-.99c1.554.849 3.09 1.284 4.149 1.284z"/></svg>
                            WhatsApp Us
                          </a>
                          <a 
                            href="mailto:info@quartzinternational.ca?subject=Kitchen Estimate Documents" 
                            className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] hover:bg-black text-white px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-colors"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
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

                    <div className="text-center pt-4">
                      <Link to="/" className="btn-primary inline-flex">Return Home</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Sidebar Column */}
          {step < 7 && !isSubmitted && (
            <div className="lg:col-span-4 w-full lg:sticky lg:top-24 mb-24 lg:mb-0">
              <div className="bg-white rounded-3xl border border-border-custom p-6 md:p-8 shadow-sm space-y-6">
                <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.2em] border-b border-gray-100 pb-3">
                  <Calculator size={14} />
                  Live Estimate
                </div>
                
                <div>
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Personalized Estimate Range</span>
                  <div className="text-3xl font-black text-[#1A1A1A] tracking-tight italic">
                    ${cost.totalLow.toLocaleString()} <span className="text-accent/50 text-xl font-normal">–</span> ${cost.totalHigh.toLocaleString()}
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Includes total project labor & material</p>
                </div>
                
                <div className="space-y-3.5 border-t border-gray-100 pt-5">
                  <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <span>Countertops ({countertopSqFt} sq ft)</span>
                    <span className="text-text-primary">${cost.countertopLow.toLocaleString()} – ${cost.countertopHigh.toLocaleString()}</span>
                  </div>
                  {includeCabinets && (
                    <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                      <span>Cabinets ({cabinetStyle})</span>
                      <span className="text-text-primary">${cost.cabinetLow.toLocaleString()} – ${cost.cabinetHigh.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <span>Quartz Level</span>
                    <span className="text-accent">{quartzLevel.toUpperCase()}</span>
                  </div>
                  {islandType !== 'none' && (
                    <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                      <span>Island Profile</span>
                      <span className="text-text-primary capitalize">{islandType}</span>
                    </div>
                  )}
                </div>
                
                {/* Power Tip Box */}
                <div className="bg-[#FAF9F5] p-5 rounded-2xl border border-border-custom space-y-1.5">
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest">Power Tip</p>
                  <p className="text-[11px] text-gray-600 leading-relaxed font-semibold italic">
                    {step === 1 && "Standard countertop depth is 25 inches. If you have an island or bar, select it in the next step to automatically include its square footage."}
                    {step === 2 && "A waterfall island extends the quartz down to the floor on one or both sides, creating a striking architectural centerpiece."}
                    {step === 3 && "Standard collections offer great durability. Premium levels introduce Calacatta veining, and Luxury levels feature high-end custom styles."}
                    {step === 4 && "Bundling cabinetry and countertops together eliminates extra contractor dispatch fees and trims up to 5 days off final installation time."}
                    {step === 5 && "Ready to Assemble (RTA) cabinets arrive flat-packed, while Ready to Install (RTI) cabinets come pre-assembled from the factory."}
                    {step === 6 && "European frameless cabinets maximize internal cabinet volume by up to 10% compared to traditional face-frame options."}
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* FIXED BOTTOM NAVIGATION BAR */}
        {step < 7 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border-custom py-4 px-4 sm:px-6 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <div className="max-w-3xl mx-auto flex items-center justify-between gap-2">
              <div>
                <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest">Estimated Total</span>
                <span className="text-base xs:text-lg sm:text-2xl font-black text-accent italic whitespace-nowrap">
                  ${cost.totalLow.toLocaleString()} – ${cost.totalHigh.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-12 h-12 flex items-center justify-center border border-border-custom rounded-2xl hover:bg-gray-50 transition-colors text-text-primary cursor-pointer"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={step === 4 && includeCabinets === null}
                  className="btn-primary h-12 px-8 rounded-2xl text-xs uppercase tracking-widest font-bold flex items-center justify-center cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}

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
               <p className="text-sm font-bold text-accent uppercase tracking-[0.2em] mb-4">Presented for your project in {formData.location || 'GTA'}</p>
               <h2 className="text-7xl font-black tracking-tighter mb-8 leading-[0.9]">Your Personalized Kitchen Estimate</h2>
               <div className="inline-flex items-center gap-3 bg-accent/10 px-6 py-3 rounded-2xl mb-8 border border-accent/20">
                  <Star size={16} className="text-accent" fill="currentColor" />
                  <p className="text-sm font-black text-[#1A1A1A] uppercase tracking-widest italic">Specified Selection: {quartzLevel.toUpperCase()} Quartz</p>
               </div>
               <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-lg italic">
                  A comprehensive budgetary analysis based on your style, material selection, and project dimensions.
               </p>
            </div>

            <div className="bg-[#1A1A1A] text-white p-16 rounded-[4rem] flex justify-between items-end shadow-2xl">
               <div>
                  <p className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4">Estimated Range</p>
                  <h3 className="text-7xl font-black tracking-tighter leading-none italic">
                     ${cost.totalLow.toLocaleString()} <span className="text-accent/40 text-4xl">–</span> ${cost.totalHigh.toLocaleString()}
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
               <div className="group">
                  <div className="flex justify-between items-center mb-8 border-b border-[#E5E2DC] pb-4">
                     <h4 className="text-2xl font-black uppercase tracking-tight">01. Countertops</h4>
                     <p className="text-xl font-black text-accent italic">${cost.countertopLow.toLocaleString()} – ${cost.countertopHigh.toLocaleString()}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-12">
                     <div className="space-y-4">
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Project Layout:</span>
                           <span className="text-[#1A1A1A]">L-Shape</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Slab Selection:</span>
                           <span className="text-[#1A1A1A]">{quartzLevel.toUpperCase()} Quartz</span>
                        </div>
                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                           <span>Dimensions:</span>
                           <span className="text-[#1A1A1A]">
                               {Math.floor(linearFt)} ft {Math.round((linearFt - Math.floor(linearFt)) * 12) > 0 ? `${Math.round((linearFt - Math.floor(linearFt)) * 12)} in` : ''} ({countertopSqFt} SQ FT)
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
                           <span className="text-[#1A1A1A]">{islandType === 'waterfall' ? 'Waterfall' : 'Standard'}</span>
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

               {/* Cabinets section */}
               {includeCabinets && (
                 <div>
                    <div className="flex justify-between items-center mb-8 border-b border-[#E5E2DC] pb-4">
                       <h4 className="text-2xl font-black uppercase tracking-tight">02. Custom Cabinets</h4>
                       <p className="text-xl font-black text-accent italic">${cost.cabinetLow.toLocaleString()} – ${cost.cabinetHigh.toLocaleString()}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-12">
                       <div className="space-y-4">
                          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                             <span>Cabinet Collection:</span>
                             <span className="text-[#1A1A1A]">
                               {cabinetStyle === 'essential' && 'Essential Collection'}
                               {cabinetStyle === 'premium' && 'Premium Collection'}
                               {cabinetStyle === 'elite' && 'Elite Collection'}
                             </span>
                          </div>
                          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                             <span>Delivery Method:</span>
                              <span className="text-[#1A1A1A]">{(deliveryMethod || 'installed').toUpperCase()}</span>
                          </div>
                          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-400">
                             <span>Cabinet Wall Length:</span>
                             <span className="text-[#1A1A1A]">
                               {Math.floor(linearFt)} ft {Math.round((linearFt - Math.floor(linearFt)) * 12) > 0 ? `${Math.round((linearFt - Math.floor(linearFt)) * 12)} in` : ''}
                             </span>
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
                               {Math.floor(linearFt + ({ none: 0, small: 4, large: 8, waterfall: 8 }[islandType || 'none']))} ft {Math.round((linearFt - Math.floor(linearFt)) * 12) > 0 ? `${Math.round((linearFt - Math.floor(linearFt)) * 12)} in` : ''}
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
                     {islandType !== 'none' && (
                       <div className="flex items-center gap-3 p-4 bg-[#F8F9FA] rounded-2xl border border-[#E5E2DC]">
                          <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                             <Check size={12} className="text-accent" />
                          </div>
                          <span className="text-xs font-bold capitalize">Island / Peninsula Layout</span>
                       </div>
                     )}
                     {islandType === 'waterfall' && (
                       <div className="flex items-center gap-3 p-4 bg-[#F8F9FA] rounded-2xl border border-[#E5E2DC]">
                          <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                             <Check size={12} className="text-accent" />
                          </div>
                          <span className="text-xs font-bold capitalize">Waterfall Stone Ends</span>
                     </div>
                     )}
                     {includeCabinets && (
                       <div className="flex items-center gap-3 p-4 bg-[#F8F9FA] rounded-2xl border border-[#E5E2DC]">
                          <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                             <Check size={12} className="text-accent" />
                          </div>
                          <span className="text-xs font-bold capitalize">Soft-Close Cabinetry</span>
                       </div>
                     )}
                     <div className="flex items-center gap-3 p-4 bg-[#F8F9FA] rounded-2xl border border-[#E5E2DC]">
                        <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                           <Check size={12} className="text-accent" />
                        </div>
                        <span className="text-xs font-bold capitalize">Precision Polished Edges</span>
                     </div>
                     <div className="flex items-center gap-3 p-4 bg-[#F8F9FA] rounded-2xl border border-[#E5E2DC]">
                        <div className="w-6 h-6 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                           <Check size={12} className="text-accent" />
                        </div>
                        <span className="text-xs font-bold capitalize">L-Shape Kitchen Fitting</span>
                     </div>
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
                ))
              }
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
      </div>
    </div>
  );
}
