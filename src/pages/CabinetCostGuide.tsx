import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  Star, 
  ShieldCheck, 
  Calendar,
  Layers,
  Sparkles,
  Zap,
  Truck,
  Hammer,
  Quote,
  Calculator,
  Maximize2,
  ChevronRight,
  Phone,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useCalculator } from '../context/CalculatorContext';

// Import images
import cabinetsHero from '../assets/images/cabinets_hero.png';
import modernTwoTone from '../assets/images/modern_two_tone.png';
import highGlossKitchen from '../assets/images/high_gloss_kitchen.png';
import luxuryKitchen from '../assets/images/luxury_kitchen.png';
import highGlossDoors from '../assets/images/high_gloss_doors.png';
import matteDoors from '../assets/images/matte_doors.png';
import shakerDoors from '../assets/images/shaker_doors.png';
import slimShakerDoors from '../assets/images/slim_shaker_doors.png';
import eliteKitchenBanner from '../assets/images/elite_kitchen_banner.jpg';
import premiumKitchenBanner from '../assets/images/premium_kitchen_banner.png';
import essentialKitchenBanner from '../assets/images/essential_kitchen_banner.jpg';
import flatPanelDoors from '../assets/images/flat_panel_doors.png';
import whyChooseUs from '../assets/images/why_choose_us.png';
import condoKitchen from '../assets/images/condo_kitchen.png';

// Import door card images
import pureWhiteSlab from '../assets/images/pure_white_slab.png';
import whitishMapleFlat from '../assets/images/whitish_maple_flat.png';
import naturalWoodSlab from '../assets/images/natural_wood_slab.png';
import smokedOakSlab from '../assets/images/smoked_oak_slab.png';
import mattWhiteSlab from '../assets/images/matt_white_slab.png';
import mattAshSlab from '../assets/images/matt_ash_slab.png';
import whiteSingleShaker from '../assets/images/White_single_shaker.jpg';
import woodShakerDoor from '../assets/images/wood_shaker_door.png';
import premiumGlossyWhite from '../assets/images/premium_glossy_white.png';

// New Shaker image uploads
import whiteShakerNew from '../assets/images/white_shaker_new.jpg';
import blueShakerNew from '../assets/images/blue_shaker_new.png';
import grayShakerNew from '../assets/images/gray_shaker_new.png';

// Gloss swatch uploads
import glossWhite from '../assets/images/gloss_white.jpg';
import glossAsh from '../assets/images/gloss_ash.jpg';
import glossGray from '../assets/images/gloss_gray.jpg';
import slimShakerWhiteNew from '../assets/images/slim_shaker_white_new.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function CabinetCostGuide() {
  const { openCalculator } = useCalculator();

  // Helper to identify white door finishes to omit active gold highlight borders
  const isWhiteOption = (name: string) => {
    return name.toLowerCase().includes('white');
  };

  // Swatch / door card definitions
  const essentialSwatches = [
    { name: 'Pure White', img: pureWhiteSlab, border: true },
    { name: 'Whitish Maple', img: whitishMapleFlat },
    { name: 'Natural Wood', img: naturalWoodSlab },
    { name: 'Smoked Oak', img: smokedOakSlab }
  ];

  const premiumSwatches = [
    { name: 'White Shaker', img: whiteShakerNew, border: true },
    { name: 'Blue Shaker', img: blueShakerNew },
    { name: 'Gray Shaker', img: grayShakerNew },
    { name: 'Gloss White', img: glossWhite, border: true, gloss: true },
    { name: 'Gloss Ash', img: glossAsh, gloss: true },
    { name: 'Gloss Gray', img: glossGray, gloss: true },
    { name: 'Matt White', img: mattWhiteSlab, border: true },
    { name: 'Matt Ash', img: mattAshSlab }
  ];

  const eliteSwatches = [
    { name: 'White Slim Shaker', img: slimShakerWhiteNew, border: true },
    { name: 'Natural Slim Shaker', img: woodShakerDoor }
  ];



  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-accent/30 selection:text-text-primary">
      
      {/* --------------------------------------------------
         SECTION 1 — HERO
      -------------------------------------------------- */}
      <section className="relative pt-10 md:pt-16 pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column: Text & Price Anchor */}
            <div className="w-full lg:w-1/2 text-black">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col"
              >
                {/* Highlighted text badge */}
                <div className="inline-flex flex-wrap items-center gap-2 mb-6">
                  <span className="bg-accent/10 text-accent font-bold uppercase tracking-[0.25em] text-[10px] px-4 py-2 rounded-full border border-accent/20">
                    Semi-Custom. Built Around Your Budget.
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-[4.25rem] font-bold text-text-primary leading-[1.05] mb-6 tracking-tight font-sans">
                  Modern European <br className="hidden sm:inline" />
                  Kitchen Cabinets <br />
                  <span className="text-accent underline decoration-accent/10 underline-offset-8">in Toronto & GTA</span>
                </h1>
                
                <p className="text-gray-600 text-lg md:text-xl font-medium mb-10 max-w-xl leading-relaxed">
                  Premium European-style kitchen cabinets available as Ready-To-Assemble, Ready-To-Install, or Fully Installed solutions.
                </p>
                
                {/* Pricing Card */}
                <div className="bg-[#FBFBFA] border border-border-custom p-8 rounded-[2rem] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 max-w-xl">
                  <div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-2 block">
                      Typical Installed Price
                    </span>
                    <p className="text-sm font-semibold text-text-primary mb-1">Most Kitchens</p>
                    <p className="text-3xl md:text-4xl font-black text-accent tracking-tighter">
                      $8,000 – $18,000+ <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Installed</span>
                    </p>
                  </div>
                  
                  {/* Supporting vertical checklist */}
                  <div className="flex flex-col gap-2.5 pt-2 sm:pt-0 sm:border-l sm:border-border-custom sm:pl-8">
                    {[
                      'Fast turnaround',
                      'Transparent pricing',
                      'Professional installation available'
                    ].map((text, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-text-primary uppercase tracking-wider">
                        <Check size={14} className="text-accent shrink-0" strokeWidth={3} />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call To Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button 
                    onClick={() => openCalculator({ type: 'full-kitchen' })} 
                    className="btn-primary px-10 py-5 text-base font-bold shadow-xl shadow-accent/20 group cursor-pointer"
                  >
                    Get Kitchen Budget Estimate 
                    <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('collections')} 
                    className="flex items-center justify-center bg-white border border-border-custom hover:border-accent px-10 py-5 rounded-full text-base font-bold text-text-primary hover:text-accent transition-all shadow-sm cursor-pointer"
                  >
                    Browse Collections
                  </button>
                </div>
              </motion.div>
            </div>
            
            {/* Right Column: Hero Image */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-[var(--radius-card)] overflow-hidden shadow-2xl relative border border-border-custom"
              >
                <img 
                  src={cabinetsHero} 
                  alt="Beautiful modern kitchen with quartz countertops and frameless cabinetry" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 2 — THREE WAYS TO BUY
      -------------------------------------------------- */}
      <section className="py-24 bg-white border-t border-border-custom" id="ways-to-buy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Purchase Models
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight font-sans">
              Choose The Service That Fits Your Project
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Card 1: RTA */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-[2.5rem] p-8 border border-border-custom shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative"
            >
              <div className="absolute top-6 right-6 bg-[#E5F5EB] text-[#2E7D32] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Best Value
              </div>
              
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <Layers size={24} />
                </div>
                <h3 className="text-2xl font-black text-text-primary mb-1">RTA</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Ready To Assemble</p>
                
                <div className="mb-6">
                  <p className="text-xs font-bold text-text-primary uppercase tracking-wider mb-2">Perfect For:</p>
                  <div className="flex flex-wrap gap-2">
                    {['DIY homeowners', 'Contractors', 'Investors'].map((p, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border-custom pt-6">
                  <p className="text-xs font-bold text-text-primary uppercase tracking-wider mb-3">Key Benefits:</p>
                  <ul className="space-y-3">
                    {['Lowest cost', 'Flat-packed delivery', 'Fast pickup'].map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <Check size={12} className="text-accent" strokeWidth={3} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <button onClick={() => openCalculator({ type: 'full-kitchen' })} className="w-full bg-gray-50 hover:bg-accent hover:text-white text-text-primary font-bold py-4 px-6 rounded-full text-xs uppercase tracking-widest transition-all">
                  Select RTA Service
                </button>
              </div>
            </motion.div>

            {/* Card 2: RTI */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-[2.5rem] p-8 border-2 border-accent shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative ring-4 ring-accent/5"
            >
              <div className="absolute top-6 right-6 bg-accent text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </div>

              <div>
                <div className="w-12 h-12 bg-accent/15 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <Truck size={24} />
                </div>
                <h3 className="text-2xl font-black text-text-primary mb-1">RTI</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Ready To Install</p>
                
                <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed">
                  Factory assembled and delivered ready for installation.
                </p>

                <div className="border-t border-border-custom pt-6">
                  <p className="text-xs font-bold text-text-primary uppercase tracking-wider mb-3">Key Benefits:</p>
                  <ul className="space-y-3">
                    {['No assembly required', 'Faster installation', 'Contractor friendly'].map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <Check size={12} className="text-accent" strokeWidth={3} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <button onClick={() => openCalculator({ type: 'full-kitchen' })} className="w-full bg-accent text-white font-bold py-4 px-6 rounded-full text-xs uppercase tracking-widest transition-all hover:bg-accent-hover">
                  Select RTI Service
                </button>
              </div>
            </motion.div>

            {/* Card 3: Fully Installed */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-[2.5rem] p-8 border border-border-custom shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative"
            >
              <div className="absolute top-6 right-6 bg-[#E8EBF4] text-[#1E3A8A] text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Stress Free
              </div>

              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <Hammer size={24} />
                </div>
                <h3 className="text-2xl font-black text-text-primary mb-1">Fully Installed</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Full Turnkey Service</p>
                
                <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed">
                  Complete turnkey service. We manage the entire project.
                </p>

                <div className="border-t border-border-custom pt-6">
                  <p className="text-xs font-bold text-text-primary uppercase tracking-wider mb-3">Key Benefits:</p>
                  <ul className="space-y-3">
                    {['Measurement', 'Delivery', 'Installation', 'Final adjustments'].map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <Check size={12} className="text-accent" strokeWidth={3} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <button onClick={() => openCalculator({ type: 'full-kitchen' })} className="w-full bg-gray-50 hover:bg-accent hover:text-white text-text-primary font-bold py-4 px-6 rounded-full text-xs uppercase tracking-widest transition-all">
                  Select Installed Service
                </button>
              </div>
            </motion.div>

          </div>

          {/* Service Comparison Table (Premium Details) */}
          <div className="bg-[#FBFBFA] border border-border-custom rounded-3xl p-6 md:p-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6 text-center lg:text-left">
              Service Comparison
            </h4>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-border-custom">
                    <th className="py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest w-1/4">Features</th>
                    <th className="py-4 text-xs font-bold text-text-primary uppercase tracking-widest text-center w-1/4">RTA</th>
                    <th className="py-4 text-xs font-bold text-text-primary uppercase tracking-widest text-center w-1/4">RTI</th>
                    <th className="py-4 text-xs font-bold text-accent uppercase tracking-widest text-center w-1/4">Fully Installed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm">
                  <tr>
                    <td className="py-4 font-bold text-text-primary uppercase text-[10px] tracking-wider">Factory Assembled</td>
                    <td className="py-4 text-center text-gray-400">—</td>
                    <td className="py-4 text-center text-accent"><Check size={16} className="inline-block" strokeWidth={3} /></td>
                    <td className="py-4 text-center text-accent"><Check size={16} className="inline-block" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-text-primary uppercase text-[10px] tracking-wider">Delivered to Home</td>
                    <td className="py-4 text-center text-accent"><Check size={16} className="inline-block" strokeWidth={3} /></td>
                    <td className="py-4 text-center text-accent"><Check size={16} className="inline-block" strokeWidth={3} /></td>
                    <td className="py-4 text-center text-accent"><Check size={16} className="inline-block" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-text-primary uppercase text-[10px] tracking-wider">Installation Included</td>
                    <td className="py-4 text-center text-gray-400">—</td>
                    <td className="py-4 text-center text-gray-400">—</td>
                    <td className="py-4 text-center text-accent"><Check size={16} className="inline-block" strokeWidth={3} /></td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-text-primary uppercase text-[10px] tracking-wider">Best For</td>
                    <td className="py-4 text-center text-xs font-semibold text-gray-600">DIY & Contractors</td>
                    <td className="py-4 text-center text-xs font-semibold text-gray-600">Contractors</td>
                    <td className="py-4 text-center text-xs font-semibold text-text-primary">Homeowners</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-text-primary uppercase text-[10px] tracking-wider">Starting Price</td>
                    <td className="py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Lowest</td>
                    <td className="py-4 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">Mid</td>
                    <td className="py-4 text-center text-xs font-bold text-accent uppercase tracking-wider">Highest</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-6 border-t border-border-custom flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">
                Available across Toronto and GTA.
              </span>
              <button 
                onClick={() => openCalculator({ type: 'full-kitchen' })} 
                className="text-xs font-bold text-text-primary flex items-center gap-2 hover:text-accent transition-colors uppercase tracking-widest cursor-pointer"
              >
                Go to Kitchen Budget Estimator 
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 3 — CABINET COLLECTIONS
      -------------------------------------------------- */}
      <section className="py-24 bg-gray-50 border-t border-border-custom" id="collections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Pricing Collections
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight font-sans">
              Choose Your Collection
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-semibold uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
              Collections determine pricing. Styles determine appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Essential Collection */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-border-custom shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
            >
              {/* Collection Image */}
              <div className="aspect-[16/10] overflow-hidden relative border-b border-border-custom bg-gray-100">
                <img 
                  src={essentialKitchenBanner} 
                  alt="Essential Collection Flat Panel Cabinetry" 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-black text-text-primary uppercase tracking-tight mb-2">Essential Collection</h3>
                  <p className="text-xs text-gray-500 font-medium mb-6 leading-relaxed">
                    Affordable modern flat-panel cabinetry with durable finishes.
                  </p>

                  {/* Swatches/Door Cards Container */}
                  <div className="mb-8">
                    <div className="flex gap-3 flex-wrap">
                      {essentialSwatches.map((swatch, idx) => (
                        <div
                          key={idx}
                          title={swatch.name}
                          className="w-[68px] flex flex-col items-center group shrink-0"
                        >
                          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden relative bg-[#F9F9FB] flex items-center justify-center border border-transparent group-hover:scale-102 group-hover:shadow-sm transition-all duration-300">
                            <img 
                              src={swatch.img} 
                              alt={swatch.name} 
                              className="w-full h-full object-contain p-1" 
                            />
                          </div>
                          <span className="text-[8px] font-extrabold tracking-wider mt-2 uppercase transition-colors text-center leading-tight line-clamp-3 min-h-[30px] text-gray-500 group-hover:text-text-primary">
                            {swatch.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border-custom">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                    Typical 10x10 Kitchen Range
                  </span>
                  <p className="text-2xl font-black text-text-primary mb-6 tracking-tight">
                    $8,000 – $12,000
                  </p>
                  
                  <button 
                    onClick={() => openCalculator({ type: 'full-kitchen' })} 
                    className="w-full bg-[#F4F4F5] hover:bg-accent hover:text-white text-text-primary font-bold py-4 px-6 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Explore Essential Collection
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Premium Collection */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-[2.5rem] overflow-hidden border-2 border-accent shadow-sm hover:shadow-xl transition-all flex flex-col h-full relative"
            >
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 bg-accent text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">
                Most Popular
              </div>

              {/* Collection Image */}
              <div className="aspect-[16/10] overflow-hidden relative border-b border-border-custom bg-gray-100">
                <img 
                  src={premiumKitchenBanner} 
                  alt="Premium Collection Matte and Gloss Finishes" 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-black text-text-primary uppercase tracking-tight mb-2">Premium Collection</h3>
                  <p className="text-xs text-gray-500 font-medium mb-6 leading-relaxed">
                    Designer matte and gloss finishes for modern homes.
                  </p>

                  {/* Swatches/Door Cards Container */}
                  <div className="mb-8">
                    <div className="flex gap-3 flex-wrap">
                      {premiumSwatches.map((swatch, idx) => (
                        <div
                          key={idx}
                          title={swatch.name}
                          className="w-[68px] flex flex-col items-center group shrink-0"
                        >
                          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden relative bg-[#F9F9FB] flex items-center justify-center border border-transparent group-hover:scale-102 group-hover:shadow-sm transition-all duration-300">
                            <img 
                              src={swatch.img} 
                              alt={swatch.name} 
                              className="w-full h-full object-contain p-1" 
                            />
                            {swatch.gloss && (
                              <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 pointer-events-none" />
                            )}
                          </div>
                          <span className="text-[8px] font-extrabold tracking-wider mt-2 uppercase transition-colors text-center leading-tight line-clamp-3 min-h-[30px] text-gray-500 group-hover:text-text-primary">
                            {swatch.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border-custom">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                    Typical 10x10 Kitchen Range
                  </span>
                  <p className="text-2xl font-black text-accent mb-6 tracking-tight">
                    $12,000 – $18,000
                  </p>

                  <button 
                    onClick={() => openCalculator({ type: 'full-kitchen' })} 
                    className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 px-6 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer animate-pulse"
                  >
                    Explore Premium Collection
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Elite Collection */}
            <motion.div 
              variants={fadeIn}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-border-custom shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
            >
              {/* Collection Image */}
              <div className="aspect-[16/10] overflow-hidden relative border-b border-border-custom bg-gray-100">
                <img 
                  src={eliteKitchenBanner} 
                  alt="Elite Collection Designer Shaker Detailing" 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-black text-text-primary uppercase tracking-tight mb-2">Elite Collection</h3>
                  <div className="text-xs text-gray-500 font-medium mb-6 space-y-2 leading-relaxed">
                    <p>
                      <strong>White Slim Shaker:</strong> Clean, modern painted finish with delicate stiles and rails for a refined, minimalist border.
                    </p>
                    <p>
                      <strong>Natural Oak Slim Shaker:</strong> Luxury rift-cut natural wood showing organic grain and premium craftsmanship.
                    </p>
                  </div>

                  {/* Swatches/Door Cards Container */}
                  <div className="mb-8">
                    <div className="flex gap-3 flex-wrap">
                      {eliteSwatches.map((swatch, idx) => (
                        <div
                          key={idx}
                          title={swatch.name}
                          className="w-[68px] flex flex-col items-center group shrink-0"
                        >
                          <div className="w-full aspect-[3/4] rounded-xl overflow-hidden relative bg-[#F9F9FB] flex items-center justify-center border border-transparent group-hover:scale-102 group-hover:shadow-sm transition-all duration-300">
                            <img 
                              src={swatch.img} 
                              alt={swatch.name} 
                              className="w-full h-full object-contain p-1" 
                            />
                          </div>
                          <span className="text-[8px] font-extrabold tracking-wider mt-2 uppercase transition-colors text-center leading-tight line-clamp-3 min-h-[30px] text-gray-500 group-hover:text-text-primary">
                            {swatch.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border-custom">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                    Typical 10x10 Kitchen Range
                  </span>
                  <p className="text-2xl font-black text-text-primary mb-6 tracking-tight">
                    $18,000 – $30,000+
                  </p>

                  <button 
                    onClick={() => openCalculator({ type: 'full-kitchen' })} 
                    className="w-full bg-[#F4F4F5] hover:bg-accent hover:text-white text-text-primary font-bold py-4 px-6 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Explore Elite Collection
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 4 — REAL KITCHEN BUDGETS
      -------------------------------------------------- */}
      <section className="py-24 bg-white border-t border-border-custom" id="real-budgets">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-2/3">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                Price Transparency
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-12 tracking-tight font-sans">
                What Real Kitchens Typically Cost
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Small Kitchen Card */}
                <div className="bg-[#FBFBFA] border border-border-custom rounded-3xl p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2">Small Kitchen</h3>
                    <p className="text-2xl font-black text-accent tracking-tight mb-4">$8,000 – $12,000</p>
                  </div>
                  <div className="border-t border-border-custom/50 pt-4">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Examples</p>
                    <ul className="space-y-1">
                      {['Condo kitchens', 'Galley layouts'].map((item, i) => (
                        <li key={i} className="text-xs text-gray-500 font-semibold uppercase tracking-wide flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Standard Kitchen Card */}
                <div className="bg-[#FBFBFA] border-2 border-accent rounded-3xl p-6 flex flex-col justify-between h-full relative">
                  <div className="absolute -top-3.5 right-6 bg-accent text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Typical Home
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2">Standard Kitchen</h3>
                    <p className="text-2xl font-black text-accent tracking-tight mb-4">$12,000 – $18,000</p>
                  </div>
                  <div className="border-t border-border-custom/50 pt-4">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Examples</p>
                    <ul className="space-y-1">
                      {['Most GTA homes'].map((item, i) => (
                        <li key={i} className="text-xs text-gray-500 font-semibold uppercase tracking-wide flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Large Kitchen Card */}
                <div className="bg-[#FBFBFA] border border-border-custom rounded-3xl p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2">Large Kitchen</h3>
                    <p className="text-2xl font-black text-accent tracking-tight mb-4">$18,000 – $30,000+</p>
                  </div>
                  <div className="border-t border-border-custom/50 pt-4">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Examples</p>
                    <ul className="space-y-1">
                      {['Open concept homes', 'Large islands'].map((item, i) => (
                        <li key={i} className="text-xs text-gray-500 font-semibold uppercase tracking-wide flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Action Column */}
            <div className="w-full lg:w-1/3 bg-[#0E1116] rounded-[2.5rem] p-8 text-white text-center flex flex-col items-center justify-center py-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/15 rounded-full blur-[60px] -mr-24 -mt-24" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent mx-auto">
                  <Calculator size={24} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Need a Custom Estimate?</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
                  Get a personalized, realistic kitchen budget range in under 30 seconds using our budget range calculator.
                </p>
                <button 
                  onClick={() => openCalculator({ type: 'full-kitchen' })} 
                  className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-widest shadow-lg shadow-accent/20 hover:scale-102 transition-transform cursor-pointer"
                >
                  Get My Budget Estimate
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 5 — CHOOSE YOUR STYLE
      -------------------------------------------------- */}
      <section className="py-24 bg-gray-50 border-t border-border-custom" id="styles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Aesthetic Styles
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight font-sans">
              Choose Your Cabinet Style
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-semibold uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
              Your style affects appearance. Collection affects pricing.
            </p>
          </div>

          {/* Style Cards Grid (No pricing shown in this section) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {[
              {
                title: 'Flat Panel',
                img: flatPanelDoors,
                description: 'Sleek slab cabinetry that creates clean lines and a minimalist look.'
              },
              {
                title: 'Shaker',
                img: shakerDoors,
                description: 'Recessed center panels that give a timeless, classic transitional aesthetic.'
              },
              {
                title: 'Slim Shaker',
                img: slimShakerDoors,
                description: 'Thin framing detailing that blends modern trends with transitional design.'
              },
              {
                title: 'High Gloss',
                img: highGlossDoors,
                description: 'Bright reflective doors that maximize light and create an spacious feel.'
              },
              {
                title: 'Matte Finish',
                img: matteDoors,
                description: 'Smooth, fingerprint-resistant matte coating with premium soft-touch texture.'
              }
            ].map((style, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-white rounded-3xl overflow-hidden border border-border-custom shadow-sm flex flex-col hover:shadow-md transition-all h-full"
              >
                {/* Door Sample image container */}
                <div className="aspect-[4/3] overflow-hidden relative bg-gray-100 border-b border-border-custom">
                  <img src={style.img} alt={style.title} className="w-full h-full object-cover" />
                </div>
                
                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2 leading-tight">
                      {style.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {style.description}
                    </p>
                  </div>
                  
                  {/* Subtle decorative check icon indicating selection */}
                  <div className="mt-4 pt-4 border-t border-gray-50 flex items-center gap-1.5 text-[9px] font-black text-accent uppercase tracking-widest">
                    <Sparkles size={10} />
                    Available Finish Style
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 6 — WHY HOMEOWNERS CHOOSE QUARTZ INTERNATIONAL
      -------------------------------------------------- */}
      <section className="py-24 bg-white border-t border-border-custom" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              The Quartz International Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight font-sans">
              Why GTA Homeowners Choose Quartz International
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              {
                title: 'One Contractor For Cabinets + Countertops',
                desc: 'Simplify coordination by sourcing your entire kitchen package from a single expert team.',
                icon: Layers
              },
              {
                title: 'European Frameless Construction',
                desc: 'Premium full-overlay modern look with maximum interior storage capacity and durability.',
                icon: ShieldCheck
              },
              {
                title: 'Soft-Close Drawers & Doors',
                desc: 'Top-tier German/Austrian standard hardware for silent, smooth daily operation.',
                icon: Zap
              },
              {
                title: 'Professional Installation',
                desc: 'Highly experienced, licensed in-house team ensures precise alignment and seamless seams.',
                icon: Hammer
              },
              {
                title: 'Fast Turnaround',
                desc: 'Streamlined design-to-delivery logistics keep renovation disruptions to a bare minimum.',
                icon: Truck
              },
              {
                title: 'Better Pricing than Custom',
                desc: 'Get modern, semi-custom cabinets direct-to-home without the extreme price tag of custom shops.',
                icon: Sparkles
              },
              {
                title: '18+ Years Experience',
                desc: 'Crafting beautiful kitchen renovations across Toronto and the Greater Toronto Area since 2006.',
                icon: Calendar
              },
              {
                title: '5,000+ Installations',
                desc: 'A proven track record of thousands of happy homeowners, glowing reviews, and perfect results.',
                icon: Star
              }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-[#FBFBFA] border border-border-custom rounded-3xl p-6 hover:border-accent hover:bg-white transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4 shrink-0">
                    <benefit.icon size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2 leading-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 7 — REAL PROJECTS
      -------------------------------------------------- */}
      <section className="py-24 bg-gray-50 border-t border-border-custom" id="real-projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <div>
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block text-center md:text-left">
                Gallery Showcase
              </span>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-text-primary tracking-tight font-sans text-center md:text-left">
                Real Kitchen Transformations
              </h2>
            </div>
            
            <Link 
              to="/gallery" 
              className="text-xs font-bold text-text-primary px-8 py-4 border border-border-custom rounded-full hover:border-accent transition-all flex items-center gap-2 uppercase tracking-widest bg-white"
            >
              View All Projects <ChevronRight size={14} />
            </Link>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {[
              {
                location: 'North York',
                collection: 'Premium Collection',
                style: 'Matt White',
                budget: '$14,000–$18,000',
                img: highGlossKitchen
              },
              {
                location: 'Vaughan',
                collection: 'Essential Collection',
                style: 'Natural Wood',
                budget: '$9,500–$13,000',
                img: modernTwoTone
              },
              {
                location: 'Markham',
                collection: 'Elite Collection',
                style: 'Slim Shaker',
                budget: '$22,000–$30,000',
                img: luxuryKitchen
              },
              {
                location: 'Etobicoke',
                collection: 'Essential Collection',
                style: 'Flat Panel',
                budget: '$9,000–$12,000',
                img: condoKitchen
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="group bg-white rounded-3xl overflow-hidden border border-border-custom shadow-sm hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  <img 
                    src={project.img} 
                    alt={`${project.location} Kitchen Cabinet Installation`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-border-custom shadow-sm">
                    <span className="text-[10px] font-bold text-text-primary uppercase tracking-wider">
                      {project.location}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-2">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                      Project Details
                    </p>
                    
                    <div className="flex justify-between items-center text-xs font-semibold text-text-primary">
                      <span className="uppercase text-[9px] text-gray-500">Collection:</span>
                      <span>{project.collection}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-semibold text-text-primary">
                      <span className="uppercase text-[9px] text-gray-500">Style:</span>
                      <span>{project.style}</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 mt-5 pt-4 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                      Estimated Budget
                    </span>
                    <span className="text-base font-black text-accent">
                      {project.budget}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 8 — CABINETS + QUARTZ
      -------------------------------------------------- */}
      <section className="py-24 bg-white border-t border-border-custom" id="complete-packages">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#FBFBFA] border border-border-custom rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center shadow-sm">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 p-8 md:p-16 lg:p-20 space-y-8">
              <div>
                <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                  Package Bundles
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight font-sans leading-tight">
                  Cabinets + Countertops.<br />
                  Better Together.
                </h2>
                <p className="text-gray-500 font-medium text-sm md:text-base mt-4 leading-relaxed">
                  Save time and simplify your renovation by sourcing cabinets and countertops from one trusted team.
                </p>
              </div>

              {/* Package benefits list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'One Point Of Contact',
                  'Coordinated Installation',
                  'Faster Completion',
                  'Better Project Value'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs font-bold text-text-primary uppercase tracking-widest">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div className="pt-4">
                <button 
                  onClick={() => openCalculator({ type: 'full-kitchen' })} 
                  className="btn-primary px-10 py-5 text-base font-bold shadow-xl shadow-accent/20 group cursor-pointer"
                >
                  Get Full Kitchen Estimate 
                  <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full lg:w-1/2 aspect-video lg:aspect-square h-full">
              <img 
                src={whyChooseUs} 
                alt="Bundled kitchen package showing frameless cabinets and custom quartz countertops" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 9 — REVIEWS
      -------------------------------------------------- */}
      <section className="py-24 bg-gray-50 border-t border-border-custom" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 bg-[#4285F4]/10 border border-[#4285F4]/20 px-3.5 py-1.5 rounded-full mb-4">
              <svg className="w-3.5 h-3.5 fill-[#4285F4]" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113A5.99 5.99 0 018 12.527a5.99 5.99 0 015.99-5.99c2.51 0 4.29 1.09 5.25 2l3.24-3.24C20.53 3.32 17.56 2 13.99 2 7.92 2 3 6.92 3 13s4.92 11 11 11c6.28 0 10.45-4.41 10.45-10.63 0-.715-.065-1.425-.195-2.085H12.24z"/>
              </svg>
              <span className="text-[10px] font-bold text-[#4285F4] uppercase tracking-widest leading-none">Google Reviews</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-4 font-sans">
              Trusted By Homeowners Across Toronto & GTA
            </h2>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-sm font-bold text-text-primary">4.9★</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-text-muted font-bold uppercase tracking-widest">Customer Rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              {
                name: 'Sarah M.',
                location: 'North York',
                text: 'The cabinets are beautiful and the quality is outstanding. Installation was quick and professional.'
              },
              {
                name: 'Jason T.',
                location: 'Vaughan',
                text: 'Great value and even better service. The RTI cabinets were perfect for our renovation.'
              },
              {
                name: 'Priyas S.',
                location: 'Markham',
                text: 'We love our new kitchen! Quartz International made the whole process so easy.'
              },
              {
                name: 'Michael R.',
                location: 'Mississauga',
                text: 'Highly recommend. Transparent pricing and amazing attention to detail.'
              }
            ].map((review, idx) => (
              <div 
                key={idx}
                className="bg-white border border-border-custom p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex text-amber-400 gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" className="text-amber-400 animate-pulse" />
                    ))}
                  </div>
                  <p className="text-sm text-text-primary leading-relaxed mb-6 font-medium italic">
                    “{review.text}”
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-gray-100 pt-4 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-black text-accent shrink-0">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary leading-none mb-1">{review.name}</h4>
                    <p className="text-[9px] text-text-muted font-semibold tracking-wider uppercase leading-none">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* --------------------------------------------------
         SECTION 10 — FINAL CTA
      -------------------------------------------------- */}
      <section className="bg-[#0E1116] py-24 relative overflow-hidden text-center mx-4 sm:mx-8 mb-8 rounded-[3rem]">
        {/* Glow backgrounds */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -ml-48 -mb-48" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none font-sans">
              Ready To Plan Your Kitchen?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed">
              Get a personalized kitchen budget range in under 30 seconds.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={() => openCalculator({ type: 'full-kitchen' })} 
              className="btn-primary px-12 py-5 text-base font-black shadow-2xl shadow-accent/25 w-full sm:w-auto hover:scale-102 transition-transform cursor-pointer"
            >
              Get Kitchen Budget Estimate
            </button>
            <a 
              href="tel:6473706938"
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-accent text-white px-12 py-5 rounded-full text-base font-bold bg-white/5 hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              <Phone size={16} className="text-accent" />
              Call (647) 370-6938
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-4">
            {[
              { label: '30 Seconds Calculator', icon: Sparkles },
              { label: 'Realistic Budget Range', icon: ShieldCheck },
              { label: 'No Pressure consultation', icon: Star }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white/40 text-[9px] font-bold uppercase tracking-widest">
                <span className="text-accent/50"><item.icon size={12} /></span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
