import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Maximize, 
  Calendar,
  Calculator,
  CheckCircle2,
  Info,
  Layers,
  Sparkles,
  Timer,
  Plus,
  Box,
  Crown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { INITIAL_CALC_STATE, CalculatorState, PRICING_CONSTANTS } from '../constants';
import { cn } from '../lib/utils';

export default function Estimate() {
  const [state, setState] = React.useState<CalculatorState>(INITIAL_CALC_STATE);
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const style = params.get('style');
    const brand = params.get('brand');
    const deliveryMethod = params.get('deliveryMethod');
    const cabinetStyle = params.get('cabinetStyle');
    const selectedCabinetStyle = params.get('selectedCabinetStyle');
    const includeCabinets = params.get('includeCabinets') === 'true' || !!deliveryMethod || !!cabinetStyle || !!selectedCabinetStyle;
    
    setState(prev => {
      let newState = { ...prev };
      
      if (style || brand) {
        // Premium brands or complex styles pre-select premium tier
        const premiumStyles = ['marble', 'luxury', 'dark'];
        const premiumBrands = ['caesarstone', 'cambria', 'silestone', 'kasa quartz', 'lucent quartz', 'kasa-quartz', 'lucent-quartz'];
        
        if (premiumStyles.includes(style || '') || premiumBrands.includes(brand || '')) {
          newState.quartzLevel = 'premium';
        } else if (style === 'white') {
          newState.quartzLevel = 'standard';
        }
      }
      
      if (includeCabinets) {
        newState.includeCabinets = true;
      }
      if (deliveryMethod) {
        newState.deliveryMethod = deliveryMethod as any;
      }
      if (cabinetStyle) {
        newState.cabinetStyle = cabinetStyle as any;
      }
      if (selectedCabinetStyle) {
        newState.selectedCabinetStyle = selectedCabinetStyle;
      }
      
      return newState;
    });
  }, []);

  const nextStep = () => {
    const isLast = state.step === (state.includeCabinets ? 7 : 4);
    
    if (isLast) {
      // Calculate final price and show results
      const finalPrice = calculatePrice(state);
      
      navigate('/results', { 
        state: { 
          ...state, 
          finalPrice 
        } 
      });
    } else {
      let targetStep = state.step + 1;
      setState(prev => ({ ...prev, step: targetStep }));
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    let targetStep = state.step - 1;

    if (state.step > 1) {
      setState(prev => ({ ...prev, step: targetStep }));
      window.scrollTo(0, 0);
    }
  };

  const calculatePrice = (s: CalculatorState) => {
    const levels = PRICING_CONSTANTS.LEVELS[s.quartzLevel];
    let countertopLow = s.kitchenSize * levels.low;
    let countertopHigh = s.kitchenSize * levels.high;

    // Extras Logic (Countertop)
    if (s.extras.sink) {
      countertopLow += PRICING_CONSTANTS.EXTRAS.sink;
      countertopHigh += PRICING_CONSTANTS.EXTRAS.sink;
    }
    
    if (s.extras.cooktop) {
      countertopLow += PRICING_CONSTANTS.EXTRAS.cooktop;
      countertopHigh += PRICING_CONSTANTS.EXTRAS.cooktop;
    }

    if (s.extras.backsplash) {
      countertopLow += (s.kitchenSize * PRICING_CONSTANTS.EXTRAS.backsplash.low);
      countertopHigh += (s.kitchenSize * PRICING_CONSTANTS.EXTRAS.backsplash.high);
    }

    if (s.extras.waterfall) {
      countertopLow += PRICING_CONSTANTS.EXTRAS.waterfall.low;
      countertopHigh += PRICING_CONSTANTS.EXTRAS.waterfall.high;
    }

    if (s.extras.removal) {
      countertopLow += PRICING_CONSTANTS.EXTRAS.removal.low;
      countertopHigh += PRICING_CONSTANTS.EXTRAS.removal.high;
    }

    // Cabinet Logic
    let cabinetLow = 0;
    let cabinetHigh = 0;

    if (s.includeCabinets) {
      const method = s.deliveryMethod || 'installed';
      const cabRates = PRICING_CONSTANTS.CABINETS[method][s.cabinetStyle];
      const multiplier = PRICING_CONSTANTS.CABINET_EXTRA_MULTIPLIERS[method];

      const cabinetLFAdded = { none: 0, small: 4, large: 8, waterfall: 8 }[s.islandType || 'none'];
      const totalCabinetLF = s.cabinetSize + cabinetLFAdded;

      cabinetLow = totalCabinetLF * cabRates.low;
      cabinetHigh = totalCabinetLF * cabRates.high;

      // Cabinet Extras
      if (s.cabinetExtras.pantry) {
        cabinetLow += PRICING_CONSTANTS.CABINET_EXTRAS.pantry.low * multiplier;
        cabinetHigh += PRICING_CONSTANTS.CABINET_EXTRAS.pantry.high * multiplier;
      }
      if (s.cabinetExtras.island) {
        cabinetLow += PRICING_CONSTANTS.CABINET_EXTRAS.island.low * multiplier;
        cabinetHigh += PRICING_CONSTANTS.CABINET_EXTRAS.island.high * multiplier;
      }
      if (s.cabinetExtras.decorativePanels) {
        cabinetLow += PRICING_CONSTANTS.CABINET_EXTRAS.decorativePanels.low * multiplier;
        cabinetHigh += PRICING_CONSTANTS.CABINET_EXTRAS.decorativePanels.high * multiplier;
      }
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

  // Live estimate for the sidebar
  const currentPrice = calculatePrice(state);

  const totalSteps = state.includeCabinets ? 7 : 4;
  const progressPercent = (state.step / totalSteps) * 100;

  return (
    <div className="bg-background min-h-screen py-12 md:py-20 pb-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Form Area */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Step {state.step} of {totalSteps}</span>
                <span className="text-xs font-bold text-gray-400">{Math.round(progressPercent)}% Complete</span>
              </div>
              <div className="h-1 w-full bg-border-custom overflow-hidden">
                <motion.div 
                   className="h-full bg-accent"
                   initial={{ width: 0 }}
                   animate={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={state.step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-8 md:p-12"
              >
                {state.step === 1 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                      <Maximize className="text-accent" />
                      What is the total length of your countertop walls?
                    </h2>
                    <p className="text-gray-600 mb-6">Measure the walls that will have countertops.</p>
                    
                    <div className="space-y-12 py-8">
                      <div className="text-center">
                        <span className="text-7xl font-bold text-text-primary tracking-tighter">
                          {state.kitchenLinearFt} <span className="text-2xl text-accent font-medium uppercase tracking-widest ml-2">linear ft</span>
                        </span>
                        <p className="text-sm text-gray-400 mt-2">({state.kitchenSize} sq ft calculated countertop area)</p>
                      </div>
                      
                      <div className="px-4">
                        <input 
                          type="range" 
                          min="8" 
                          max="40" 
                          step="1"
                          value={state.kitchenLinearFt}
                          onChange={(e) => {
                            const val = parseInt(e.target.value);
                            const wallSF = Math.max(0, (val * 2) - 5);
                            const addOnSF = { none: 0, small: 12, large: 20, waterfall: 35 }[state.islandType || 'none'];
                            setState(prev => ({ ...prev, kitchenLinearFt: val, kitchenSize: Math.round(wallSF + addOnSF) }));
                          }}
                          className="w-full accent-accent h-3 bg-border-custom rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          <span>8 FT</span>
                          <span>40 FT</span>
                        </div>
                      </div>

                      <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-border-custom flex items-center gap-6">
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-accent font-bold text-sm">
                            {state.kitchenSize}
                         </div>
                         <div>
                            <p className="font-bold text-sm text-[#1A1A1A]">Formula: (Wall length × 2) - 5 appliance allowance</p>
                            <p className="text-xs text-gray-500 font-medium italic">Standard 25" depth fabrication allowance included.</p>
                         </div>
                      </div>
                    </div>
                  </div>
                )}

                {state.step === 2 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                      <Sparkles className="text-accent" />
                      Choose Your Quartz Level
                    </h2>
                    <p className="text-gray-600 mb-10">Select the design tier that fits your vision.</p>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { id: 'standard', name: 'Standard Quartz', price: '$48–$68', desc: 'Clean, simple, everyday styles' },
                        { id: 'premium', name: 'Premium Quartz', price: '$69–$95', desc: 'More pattern, movement, and design options' },
                        { id: 'luxury', name: 'Luxury Quartz', price: '$100–$170', desc: 'High-end finishes and statement looks' }
                      ].map((level) => (
                        <button
                          key={level.id}
                          onClick={() => setState(prev => ({ ...prev, quartzLevel: level.id as any }))}
                          className={cn(
                            "p-6 border text-left transition-all rounded-2xl flex items-center justify-between",
                            state.quartzLevel === level.id ? "border-accent bg-accent/5 ring-1 ring-accent" : "border-border-custom hover:border-accent"
                          )}
                        >
                          <div>
                            <h4 className="font-bold text-lg">{level.name}</h4>
                            <p className="text-xs text-gray-500">{level.desc}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-accent">{level.price}</span>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest">/ SQ FT</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {state.step === 3 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                       <Box className="text-accent" />
                       Do you have an island or peninsula?
                    </h2>
                    <p className="text-gray-600 mb-10">Select an option to calculate countertop & cabinet dimensions.</p>
                    
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
                            const wallSF = Math.max(0, Math.round((state.kitchenLinearFt * 2) - 5));
                            setState(prev => ({ 
                              ...prev,
                              islandType: option.id as any, 
                              hasIsland,
                              kitchenSize: Math.max(0, Math.round(wallSF + addOnSF))
                            }));
                          }}
                          className={cn(
                            "p-6 border text-left transition-all rounded-2xl flex items-center justify-between",
                            state.islandType === option.id ? "border-accent bg-accent/5 ring-1 ring-accent" : "border-border-custom hover:border-accent"
                          )}
                        >
                          <div>
                            <h4 className="font-bold text-lg">{option.title}</h4>
                            <p className="text-xs text-gray-500">{option.desc}</p>
                          </div>
                          <div className="text-right whitespace-nowrap ml-4">
                            <span className="text-sm font-bold text-accent">
                              {option.id !== 'none' ? `${option.sf} / ${option.lf}` : 'No Add-on'}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {state.step === 4 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                       <Box className="text-accent" />
                       Do you also need cabinets?
                    </h2>
                    <p className="text-gray-600 mb-10">Bundle cabinets with your countertops for a seamless kitchen renovation.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { id: false, name: 'No, Countertops Only', desc: 'I already have cabinets installed.' },
                        { id: true, name: 'Yes, Include Cabinets', desc: 'I want a full cabinet + countertop estimate.', badge: 'Best Value' },
                      ].map((option) => (
                        <button
                          key={option.id.toString()}
                          onClick={() => setState(prev => ({ ...prev, includeCabinets: option.id }))}
                          className={cn(
                            "p-8 border text-left transition-all rounded-2xl flex flex-col items-center text-center relative overflow-hidden group",
                            state.includeCabinets === option.id ? "border-accent bg-accent/5 ring-1 ring-accent" : "border-border-custom hover:border-accent"
                          )}
                        >
                          {option.badge && (
                            <div className="absolute top-0 right-0 bg-accent text-white py-1 px-4 text-[8px] font-black uppercase tracking-widest rounded-bl-xl">
                              {option.badge}
                            </div>
                          )}
                          <h4 className="font-bold text-xl mb-2">{option.name}</h4>
                          <p className="text-xs text-gray-500">{option.desc}</p>
                        </button>
                      ))}
                    </div>

                    <div className="mt-8 bg-black p-8 rounded-3xl text-white text-center">
                       <p className="text-accent text-[10px] font-black uppercase tracking-[0.2em] mb-4">Bundle & Save</p>
                       <h4 className="text-xl font-bold mb-2 italic">Bundle cabinets + countertops for better value</h4>
                       <p className="text-xs text-gray-400">Typical full kitchens range from <span className="text-white font-bold">$12,000 – $25,000</span></p>
                    </div>
                  </div>
                )}

                {state.step === 5 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                      <Box className="text-accent" />
                      Cabinet Delivery & Installation
                    </h2>
                    <p className="text-gray-600 mb-10">Select your preferred shipping and setup method.</p>
                    
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        { id: 'rta', name: 'RTA (Ready To Assemble)', desc: 'Lowest cost. Flat-packed, easy shipping, self assembly. Perfect for DIYers.' },
                        { id: 'rti', name: 'RTI (Ready To Install)', desc: 'Factory assembled, ready for delivery. Save assembly time.' },
                        { id: 'installed', name: 'Fully Installed', desc: 'Turnkey service. We measure, deliver, install, and manage everything.' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setState(prev => ({ ...prev, deliveryMethod: item.id as any }))}
                          className={cn(
                            "p-6 border text-left transition-all rounded-2xl flex items-center justify-between",
                            state.deliveryMethod === item.id ? "border-accent bg-accent/5 ring-1 ring-accent" : "border-border-custom hover:border-accent"
                          )}
                        >
                          <div>
                            <h4 className="font-bold text-lg">{item.name}</h4>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {state.step === 6 && (
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                      <Maximize className="text-accent" />
                      Cabinet Linear Feet
                    </h2>
                    <p className="text-gray-600 mb-6">How many linear feet of cabinets do you need?</p>
                    
                    <div className="space-y-12 py-8">
                      <div className="text-center">
                        <span className="text-7xl font-bold text-text-primary tracking-tighter">
                          {state.cabinetSize} <span className="text-2xl text-accent font-medium uppercase tracking-widest ml-2">linear ft</span>
                        </span>
                      </div>
                      
                      <div className="px-4">
                        <input 
                          type="range" 
                          min="8" 
                          max="40" 
                          step="1"
                          value={state.cabinetSize}
                          onChange={(e) => setState(prev => ({ ...prev, cabinetSize: parseInt(e.target.value) }))}
                          className="w-full accent-accent h-3 bg-border-custom rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          <span>8 FT</span>
                          <span>40 FT</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-background p-6 rounded-2xl border border-border-custom">
                         <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Small Kitchen</p>
                            <p className="text-xs font-bold text-text-primary">10–15 linear ft</p>
                         </div>
                         <div className="border-t md:border-t-0 md:border-l border-border-custom pt-4 md:pt-0 md:pl-6">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Standard Kitchen</p>
                            <p className="text-xs font-bold text-text-primary">15–25 linear ft</p>
                         </div>
                         <div className="border-t md:border-t-0 md:border-l border-border-custom pt-4 md:pt-0 md:pl-6">
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Large Kitchen</p>
                            <p className="text-xs font-bold text-text-primary">25–40 linear ft</p>
                         </div>
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
                      <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                        <Crown className="text-accent" />
                        Choose Your Collection
                      </h2>
                      <p className="text-gray-600 mb-10">Select the cabinetry collection and pricing tier.</p>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: 'essential', name: 'Essential Collection', price: cabinetStyleRanges.essential, desc: 'Affordable modern flat-panel cabinetry with durable finishes.' },
                          { id: 'premium', name: 'Premium Collection', price: cabinetStyleRanges.premium, desc: 'Designer matte and gloss finishes for modern homes.' },
                          { id: 'elite', name: 'Elite Collection', price: cabinetStyleRanges.elite, desc: 'Designer slim shaker cabinetry with elevated detailing.' }
                        ].map((style) => (
                          <button
                            key={style.id}
                            onClick={() => setState(prev => ({ ...prev, cabinetStyle: style.id as any }))}
                            className={cn(
                              "p-6 border text-left transition-all rounded-2xl flex items-center justify-between",
                              state.cabinetStyle === style.id ? "border-accent bg-accent/5 ring-1 ring-accent" : "border-border-custom hover:border-accent"
                            )}
                          >
                            <div>
                              <h4 className="font-bold text-lg">{style.name}</h4>
                              <p className="text-xs text-gray-500">{style.desc}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-bold text-accent">{style.price}</span>
                              <p className="text-[10px] text-gray-400 uppercase tracking-widest">/ LINEAR FT</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                <div className="hidden lg:flex mt-12 justify-between items-center pt-8 border-t border-border-custom">
                  <button 
                    onClick={prevStep}
                    disabled={state.step === 1}
                    className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-text-primary disabled:opacity-0 transition-all px-4"
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>
                  <button 
                    onClick={nextStep}
                    className="btn-primary flex items-center gap-2 group px-12 h-16 text-lg shadow-xl shadow-accent/20"
                  >
                    {state.step === totalSteps ? 'Get Instant Quote' : 'Continue'}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sticky Price Panel */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="glass-panel p-8 rounded-2xl shadow-xl border-accent/20 border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.2em]">
                    <Calculator size={14} />
                    Smart Estimate
                  </div>
                </div>
                
                <div className="mb-8">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Estimated Total</p>
                  <motion.h3 
                    key={currentPrice.totalLow}
                    initial={{ opacity: 0.5, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-text-primary mb-2 tracking-tighter"
                  >
                    <span className="text-accent">$</span>{currentPrice.totalLow.toLocaleString()} – ${currentPrice.totalHigh.toLocaleString()}
                  </motion.h3>
                  <p className="text-[11px] text-gray-400 font-medium">Includes total project labor & material</p>
                </div>

                <div className="space-y-4 border-t border-border-custom pt-6 mb-8">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500 font-medium">Countertops</span>
                    <span className="font-bold text-text-primary">${currentPrice.countertopLow.toLocaleString()} – ${currentPrice.countertopHigh.toLocaleString()}</span>
                  </div>
                  {state.islandType && state.islandType !== 'none' && (
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 font-medium">Island/Peninsula</span>
                      <span className="font-bold text-text-primary capitalize">{state.islandType}</span>
                    </div>
                  )}
                  {state.includeCabinets && (
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 font-medium">Cabinets</span>
                      <span className="font-bold text-text-primary">${currentPrice.cabinetLow.toLocaleString()} – ${currentPrice.cabinetHigh.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-xs pt-4 border-t border-border-custom">
                    <span className="text-gray-500 font-medium">Timeline</span>
                    <span className="font-bold text-accent uppercase tracking-widest text-[10px]">{state.timeline.replace('-', ' ')}</span>
                  </div>
                </div>

                <div className="bg-background p-5 border border-border-custom rounded-xl space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-accent mt-0.5" />
                    <p className="text-[11px] text-gray-600 font-medium">Bundle savings reflect current promotions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Info size={14} className="text-gray-400 mt-0.5" />
                    <p className="text-[11px] text-gray-400 font-medium leading-relaxed">Exact quote provided after physical measurement.</p>
                  </div>
                </div>

                <div className="p-5 bg-accent/10 border border-accent/20 rounded-2xl">
                   <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-2">Power Tip</p>
                   <p className="text-xs font-medium text-text-primary leading-relaxed italic">
                      Bundling slab fabrication with cabinetry reduction reduces site visits and cuts total renovation time by up to 5 days.
                   </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky Price Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border-custom p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Estimated Total</p>
            <p className="text-xl font-bold text-text-primary">
              ${currentPrice.totalLow.toLocaleString()} – ${currentPrice.totalHigh.toLocaleString()}
            </p>
          </div>
          <div className="flex gap-2">
            {state.step > 1 && (
              <button 
                onClick={prevStep}
                className="flex items-center justify-center border border-border-custom text-gray-500 rounded-[12px] px-3 h-12 hover:bg-gray-50 transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft size={16} />
              </button>
            )}
            <button 
              onClick={nextStep}
              className="btn-primary h-12 px-8 text-sm flex items-center gap-2"
            >
              {state.step === totalSteps ? 'Quote' : 'Next'}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
