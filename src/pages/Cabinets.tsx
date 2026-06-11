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
  ChevronRight,
  User,
  MapPin,
  Clock,
  Palette,
  DollarSign,
  UserCheck,
  Award,
  Home,
  Package,
  HelpCircle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';

// Import images
import cabinetsHero from '../assets/images/cabinets_hero.png';
import condoKitchen from '../assets/images/condo_kitchen.png';
import highGlossKitchen from '../assets/images/high_gloss_kitchen.png';
import modernTwoTone from '../assets/images/modern_two_tone.png';
import suburbanRemodel from '../assets/images/suburban_remodel.png';
import whyChooseUs from '../assets/images/why_choose_us.png';

// Collection previews
import pureWhiteSlab from '../assets/images/pure_white_slab.png';
import whitishMapleFlat from '../assets/images/whitish_maple_flat.png';
import naturalWoodSlab from '../assets/images/natural_wood_slab.png';
import smokedOakSlab from '../assets/images/smoked_oak_slab.png';

import shakerDoors from '../assets/images/shaker_doors.png';
import slimShakerDoors from '../assets/images/slim_shaker_doors.png';
import highGlossDoors from '../assets/images/high_gloss_doors.png';
import matteDoors from '../assets/images/matte_doors.png';

import woodShakerDoor from '../assets/images/wood_shaker_door.png';
import chooseCollectionShared from '../assets/images/choose_collection_shared.jpg';
import essentialTwoToneKitchen from '../assets/images/essential_two_tone_kitchen.png';
import premiumGlossKitchen from '../assets/images/premium_gloss_kitchen.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Cabinets() {
  const { state, updateState, openCalculator } = useCalculator();
  const navigate = useNavigate();
  const [activeGuideTab, setActiveGuideTab] = useState<'standard' | 'small' | 'large'>('standard');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Starting prices based on delivery method
  const collectionPrices = {
    rta: { essential: '$2,100', premium: '$3,060', elite: '$3,300' },
    rti: { essential: '$2,240', premium: '$3,200', elite: '$3,400' },
    installed: { essential: '$3,800', premium: '$4,700', elite: '$4,900' }
  };

  // Price guide structure
  const priceGuides = {
    small: {
      title: 'Small Kitchen (approx. 12 lin ft)',
      desc: 'Ideal for condos, galley kitchens, or rental suites.',
      rta: '$1,260 – $2,700',
      rti: '$1,344 – $2,760',
      installed: '$2,280 – $3,720'
    },
    standard: {
      title: 'Standard Kitchen (approx. 20 lin ft)',
      desc: 'Typical L-shape or medium L-shape + small island layout.',
      rta: '$2,100 – $4,500',
      rti: '$2,240 – $4,600',
      installed: '$3,800 – $6,200'
    },
    large: {
      title: 'Large / Custom Kitchen (approx. 30 lin ft)',
      desc: 'Open-concept luxury setups with large islands and pantries.',
      rta: '$3,150 – $6,750',
      rti: '$3,360 – $6,900',
      installed: '$5,700 – $9,300'
    }
  };

  const handleSelectDelivery = (method: 'rta' | 'rti' | 'installed') => {
    updateState({ deliveryMethod: method });
    // Smooth scroll down to collections
    setTimeout(() => scrollToSection('collections'), 300);
  };

  const handleEstimateCollection = (collection: 'essential' | 'premium' | 'elite') => {
    openCalculator({
      type: 'full-kitchen',
      deliveryMethod: state.deliveryMethod || 'installed',
      cabinetStyle: collection,
      step: 5
    });
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-accent/30 selection:text-text-primary text-[#1A1A1A]">
      
      {/* SECTION 1 — HERO */}
      <section className="relative pt-10 md:pt-16 pb-20 overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column: Value Prop & CTAs */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 md:space-y-8"
              >
                <div>
                  <span className="text-[#C6A87D] font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block">
                    Semi-Custom European Cabinetry
                  </span>
                  <h1 className="text-4xl sm:text-5xl md:text-[4.25rem] font-bold leading-[1.05] tracking-tight text-text-primary font-sans">
                    Modern European <br />
                    Kitchen Cabinets <br />
                    <span className="text-[#C6A87D] italic font-serif font-medium">in Toronto</span>
                  </h1>
                </div>
                
                <p className="text-[#555] text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                  Beautiful semi-custom cabinets available Ready-To-Assemble, Ready-To-Install, or Fully Installed.
                </p>

                <p className="text-gray-500 text-sm max-w-lg">
                  Designed for modern living with exceptional value, premium finishes, and professional project support from design to completion.
                </p>

                {/* Main CTA Block (Removed generic Estimate CTAs) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
                  <button 
                    onClick={() => openCalculator({ 
                      type: 'full-kitchen', 
                      deliveryMethod: state.deliveryMethod || 'installed',
                      step: 5
                    })}
                    className="btn-primary px-10 py-5 text-xs font-bold uppercase tracking-widest shadow-xl shadow-[#C6A87D]/20 hover:scale-102 transition-transform cursor-pointer"
                  >
                    Get My Cabinets Price
                  </button>
                </div>

                {/* Trust Points */}
                <div className="pt-8 border-t border-[#E5E2DC]/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-[#555]">
                  {[
                    { icon: <Award className="text-[#C6A87D] shrink-0" size={24} />, bold: '18+', label: 'Years Experience' },
                    { icon: <Home className="text-[#C6A87D] shrink-0" size={24} />, bold: '5,000+', label: 'Installations' },
                    { icon: <Star className="text-[#C6A87D] shrink-0 fill-[#C6A87D]" size={20} />, bold: '4.9 ★', label: 'Google Rating' },
                    { icon: <ShieldCheck className="text-[#C6A87D] shrink-0" size={24} />, bold: 'Licensed', label: '& Insured' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {item.icon}
                      <div className="flex flex-col">
                        <span className="text-text-primary font-black text-sm md:text-base leading-tight">{item.bold}</span>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 leading-tight">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Right Column: Hero Image */}
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative border border-[#E5E2DC] group"
              >
                <img 
                  src={cabinetsHero} 
                  alt="Modern kitchen featuring Natural Wood and Pure White slab cabinetry with quartz island" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Floating details pill */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl shadow-lg border border-[#E5E2DC] text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C6A87D] animate-pulse" />
                  Featuring Natural Wood + Pure White Slab
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — CHOOSE HOW YOU WANT YOUR CABINETS DELIVERED */}
      <section className="py-24 bg-white border-b border-[#E5E2DC]" id="buy-methods">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[#C6A87D] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Flexible Delivery Options
            </span>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-primary tracking-tight font-sans mb-4">
              Choose How You Want Your Cabinets
            </h2>
            <p className="text-[#777] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Select the delivery option that best fits your project, timeline, and budget.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
          >
            
            {/* Card 1: RTA */}
            <motion.div 
              onClick={() => handleSelectDelivery('rta')}
              variants={fadeIn}
              className={`rounded-[2.5rem] p-10 border transition-all flex flex-col justify-between hover:shadow-xl cursor-pointer group ${
                state.deliveryMethod === 'rta'
                  ? 'border-2 border-[#C6A87D] bg-white ring-8 ring-[#C6A87D]/5 shadow-lg relative'
                  : 'border-[#E5E2DC] bg-[#FAF8F5] hover:border-[#C6A87D]'
              }`}
            >
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#C6A87D] mb-8 border border-[#E5E2DC] group-hover:scale-105 transition-transform duration-300">
                  <Package size={26} />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black text-text-primary mb-1">RTA</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Ready To Assemble</p>
                  </div>
                  {state.deliveryMethod === 'rta' && (
                    <span className="bg-[#C6A87D] text-white p-1 rounded-full"><Check size={14} strokeWidth={3} /></span>
                  )}
                </div>
                
                <div className="space-y-6">
                  {/* Best For */}
                  <div>
                    <h5 className="text-[10px] font-black text-[#C6A87D] uppercase tracking-widest mb-2">Best For:</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {['DIY homeowners', 'Contractors', 'Investors', 'Caribbean shipping'].map((tag, idx) => (
                        <span key={idx} className="bg-white border border-[#E5E2DC] text-gray-600 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 pt-2">
                    {['Flat packed', 'Lowest cost', 'Easy transport', 'Self assembly'].map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-bold text-gray-600 uppercase tracking-wider">
                        <Check size={14} className="text-[#C6A87D] shrink-0" strokeWidth={3} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing starting from */}
                  <div className="pt-6 border-t border-[#E5E2DC]">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Starting from</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-text-primary tracking-tighter">$2,100</span>
                      <span className="text-xs text-gray-400 font-medium tracking-normal">10x10 kitchen*</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-[#E5E2DC]">
                <button 
                  onClick={(e) => { e.stopPropagation(); handleSelectDelivery('rta'); }}
                  className={`w-full font-bold py-4 px-6 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    state.deliveryMethod === 'rta'
                      ? 'bg-[#3D5E3C] hover:bg-[#2c442b] text-white shadow-md'
                      : 'bg-white hover:bg-gray-50 border border-[#E5E2DC] text-text-primary'
                  }`}
                >
                  {state.deliveryMethod === 'rta' ? 'Selected RTA' : 'Select RTA Cabinets →'}
                </button>
              </div>
            </motion.div>

            {/* Card 2: RTI */}
            <motion.div 
              onClick={() => handleSelectDelivery('rti')}
              variants={fadeIn}
              className={`rounded-[2.5rem] p-10 border transition-all flex flex-col justify-between hover:shadow-xl cursor-pointer group ${
                state.deliveryMethod === 'rti'
                  ? 'border-2 border-[#C6A87D] bg-white ring-8 ring-[#C6A87D]/5 shadow-lg relative'
                  : 'border-[#E5E2DC] bg-[#FAF8F5] hover:border-[#C6A87D]'
              }`}
            >
              <div className="absolute top-6 right-6 bg-[#1E3A8A] text-white text-[8px] font-black px-3.5 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                MOST POPULAR
              </div>

              <div>
                <div className="w-14 h-14 bg-[#C6A87D]/10 rounded-2xl flex items-center justify-center text-[#C6A87D] mb-8 border border-[#C6A87D]/25 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M12 3v18" />
                    <path d="M9 12v1.5" />
                    <path d="M15 12v1.5" />
                  </svg>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black text-text-primary mb-1">RTI</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Ready To Install</p>
                  </div>
                  {state.deliveryMethod === 'rti' && (
                    <span className="bg-[#C6A87D] text-white p-1 rounded-full"><Check size={14} strokeWidth={3} /></span>
                  )}
                </div>
                
                <div className="space-y-6">
                  {/* Best For */}
                  <div>
                    <h5 className="text-[10px] font-black text-[#C6A87D] uppercase tracking-widest mb-2">Best For:</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {['Homeowners', 'Renovations', 'Builders'].map((tag, idx) => (
                        <span key={idx} className="bg-white border border-[#E5E2DC] text-gray-600 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 pt-2">
                    {['Factory assembled', 'Faster installation', 'Higher finish quality', 'Ready for delivery'].map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-bold text-gray-700 uppercase tracking-wider">
                        <Check size={14} className="text-[#C6A87D] shrink-0" strokeWidth={3} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing starting from */}
                  <div className="pt-6 border-t border-[#E5E2DC]">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Starting from</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-[#C6A87D] tracking-tighter">$2,240</span>
                      <span className="text-xs text-gray-400 font-medium tracking-normal">10x10 kitchen*</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E2DC]">
                <button 
                  onClick={(e) => { e.stopPropagation(); handleSelectDelivery('rti'); }}
                  className={`w-full font-bold py-4 px-6 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    state.deliveryMethod === 'rti'
                      ? 'bg-[#1E3A8A] hover:bg-[#152960] text-white shadow-md'
                      : 'bg-white hover:bg-gray-50 border border-[#E5E2DC] text-text-primary'
                  }`}
                >
                  {state.deliveryMethod === 'rti' ? 'Selected RTI' : 'Select RTI Cabinets →'}
                </button>
              </div>
            </motion.div>

            {/* Card 3: Fully Installed */}
            <motion.div 
              onClick={() => handleSelectDelivery('installed')}
              variants={fadeIn}
              className={`rounded-[2.5rem] p-10 border transition-all flex flex-col justify-between hover:shadow-xl cursor-pointer group ${
                state.deliveryMethod === 'installed'
                  ? 'border-2 border-[#C6A87D] bg-white ring-8 ring-[#C6A87D]/5 shadow-lg relative'
                  : 'border-[#E5E2DC] bg-[#FAF8F5] hover:border-[#C6A87D]'
              }`}
            >
              <div>
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#C6A87D] mb-8 border border-[#E5E2DC] group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 3H8a15.3 15.3 0 0 1 4-3Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black text-text-primary mb-1">Fully Installed</h3>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Turnkey Solution</p>
                  </div>
                  {state.deliveryMethod === 'installed' && (
                    <span className="bg-[#C6A87D] text-white p-1 rounded-full"><Check size={14} strokeWidth={3} /></span>
                  )}
                </div>
                
                <div className="space-y-6">
                  {/* Best For */}
                  <div>
                    <h5 className="text-[10px] font-black text-[#C6A87D] uppercase tracking-widest mb-2">Best For:</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {['Full renovations', 'Busy homeowners', 'Premium projects'].map((tag, idx) => (
                        <span key={idx} className="bg-white border border-[#E5E2DC] text-gray-600 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 pt-2">
                    {['Measure', 'Delivery', 'Professional installation', 'Project management'].map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-bold text-gray-600 uppercase tracking-wider">
                        <Check size={14} className="text-[#C6A87D] shrink-0" strokeWidth={3} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing starting from */}
                  <div className="pt-6 border-t border-[#E5E2DC]">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Starting from</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-text-primary tracking-tighter">$3,800</span>
                      <span className="text-xs text-gray-400 font-medium tracking-normal">10x10 kitchen*</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E2DC]">
                <button 
                  onClick={(e) => { e.stopPropagation(); handleSelectDelivery('installed'); }}
                  className={`w-full font-bold py-4 px-6 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    state.deliveryMethod === 'installed'
                      ? 'bg-[#C6A87D] hover:bg-[#b09164] text-white shadow-md'
                      : 'bg-white hover:bg-gray-50 border border-[#E5E2DC] text-text-primary'
                  }`}
                >
                  {state.deliveryMethod === 'installed' ? 'Selected Installed' : 'Select Installed Cabinets →'}
                </button>
              </div>
            </motion.div>

          </motion.div>

          {/* Under cards indicator */}
          <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <ShieldCheck size={14} className="text-[#C6A87D]" />
            <span>All options available in Essential, Premium & Elite Collections</span>
          </div>

        </div>
      </section>

      {/* SECTION 3 — CHOOSE YOUR COLLECTION */}
      <section className="py-24 bg-[#FAF8F5] border-b border-[#E5E2DC]" id="collections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
            <div className="text-left">
              <span className="text-[#C6A87D] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                Door lineup
              </span>
              <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-primary tracking-tight font-sans">
                Choose Your Collection
              </h2>
              <p className="text-gray-500 text-sm mt-2 max-w-xl">
                Our cabinets are grouped into three collections to match different styles and budgets.
              </p>
            </div>

            {/* Price dynamic toggle */}
            <div className="bg-white border border-[#E5E2DC] p-2.5 rounded-full flex items-center gap-1.5 shadow-sm text-xs font-bold uppercase tracking-wider shrink-0 w-fit self-start lg:self-auto">
              <span className="text-gray-400 px-3 py-1">Prices shown for:</span>
              {(['rta', 'rti', 'installed'] as const).map((method) => (
                <button
                  key={method}
                  onClick={() => updateState({ deliveryMethod: method })}
                  className={`px-4 py-2 rounded-full cursor-pointer transition-all ${
                    state.deliveryMethod === method 
                      ? 'bg-[#1A1A1A] text-white shadow-sm' 
                      : 'hover:bg-gray-100 text-gray-500'
                  }`}
                >
                  {method === 'rta' && 'RTA'}
                  {method === 'rti' && 'RTI'}
                  {method === 'installed' && 'Installed'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Essential Collection Card */}
            <div className="bg-white border border-[#E5E2DC] rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <div>
                  <h4 className="font-extrabold text-text-primary text-xl tracking-tight">Essential Collection</h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Modern Flat Panel Designs</p>
                </div>

                {/* Collection Preview Image */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#FBFBFA] border border-[#E5E2DC]">
                  <img src={essentialTwoToneKitchen} alt="Essential Collection Preview" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-3">
                  <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Popular Finishes:</h5>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-600">
                    <li className="flex items-center gap-1.5">✓ Pure White</li>
                    <li className="flex items-center gap-1.5">✓ Whitish Maple</li>
                    <li className="flex items-center gap-1.5">✓ Natural Wood</li>
                    <li className="flex items-center gap-1.5">✓ Smoked Oak</li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[#E5E2DC] flex flex-col gap-4">
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Starting from</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#C6A87D] tracking-tight">{collectionPrices[state.deliveryMethod || 'installed'].essential}</span>
                    <span className="text-[10px] text-gray-400 font-medium tracking-normal">10x10 kitchen*</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/cabinet-finishes?collection=essential"
                    className="bg-white hover:bg-gray-50 border border-[#E5E2DC] text-[#1A1A1A] font-extrabold py-3 rounded-full text-[10px] uppercase tracking-wider transition-all cursor-pointer text-center flex items-center justify-center"
                  >
                    View Collection
                  </Link>
                  <button
                    onClick={() => handleEstimateCollection('essential')}
                    className="bg-[#C6A87D] hover:bg-[#b09164] text-white font-extrabold py-3 rounded-full text-[10px] uppercase tracking-wider transition-all cursor-pointer text-center"
                  >
                    Estimate This Collection
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Collection Card */}
            <div className="bg-white border-2 border-[#C6A87D] rounded-3xl p-8 flex flex-col justify-between shadow-md relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#C6A87D] text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                MOST POPULAR COLLECTION
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-extrabold text-text-primary text-xl tracking-tight">Premium Collection</h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Matte, Gloss & Shaker Styling</p>
                </div>

                {/* Collection Preview Image */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#FBFBFA] border border-[#E5E2DC]">
                  <img src={premiumGlossKitchen} alt="Premium Collection Preview" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-3">
                  <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Popular Styles:</h5>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-600">
                    <li className="flex items-center gap-1.5">✓ Classic Shaker</li>
                    <li className="flex items-center gap-1.5">✓ High Gloss White</li>
                    <li className="flex items-center gap-1.5">✓ Designer Matte</li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[#E5E2DC] flex flex-col gap-4">
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Starting from</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#C6A87D] tracking-tight">{collectionPrices[state.deliveryMethod || 'installed'].premium}</span>
                    <span className="text-[10px] text-gray-400 font-medium tracking-normal">10x10 kitchen*</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/cabinet-finishes?collection=premium"
                    className="bg-[#FAF8F5] hover:bg-gray-50 border border-[#E5E2DC] text-[#1A1A1A] font-extrabold py-3 rounded-full text-[10px] uppercase tracking-wider transition-all cursor-pointer text-center flex items-center justify-center"
                  >
                    View Collection
                  </Link>
                  <button
                    onClick={() => handleEstimateCollection('premium')}
                    className="bg-[#C6A87D] hover:bg-[#b09164] text-white font-extrabold py-3 rounded-full text-[10px] uppercase tracking-wider transition-all cursor-pointer text-center"
                  >
                    Estimate This Collection
                  </button>
                </div>
              </div>
            </div>

            {/* Elite Collection Card */}
            <div className="bg-white border border-[#E5E2DC] rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-6">
                <div>
                  <h4 className="font-extrabold text-text-primary text-xl tracking-tight">Elite Collection</h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Designer Cabinetry</p>
                </div>

                {/* Collection Preview Image */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#FBFBFA] border border-[#E5E2DC]">
                  <img src={chooseCollectionShared} alt="Elite Collection Preview" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-3">
                  <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Elite Options:</h5>
                  <ul className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-600">
                    <li className="flex items-center gap-1.5">✓ White Slim Shaker</li>
                    <li className="flex items-center gap-1.5">✓ Natural Oak Slim Shaker</li>
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-[#E5E2DC] flex flex-col gap-4">
                <div>
                  <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Starting from</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#C6A87D] tracking-tight">{collectionPrices[state.deliveryMethod || 'installed'].elite}</span>
                    <span className="text-[10px] text-gray-400 font-medium tracking-normal">10x10 kitchen*</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/cabinet-finishes?collection=elite"
                    className="bg-white hover:bg-gray-50 border border-[#E5E2DC] text-[#1A1A1A] font-extrabold py-3 rounded-full text-[10px] uppercase tracking-wider transition-all cursor-pointer text-center flex items-center justify-center"
                  >
                    View Collection
                  </Link>
                  <button
                    onClick={() => handleEstimateCollection('elite')}
                    className="bg-[#C6A87D] hover:bg-[#b09164] text-white font-extrabold py-3 rounded-full text-[10px] uppercase tracking-wider transition-all cursor-pointer text-center"
                  >
                    Estimate This Collection
                  </button>
                </div>
              </div>
            </div>

          </div>
          <p className="text-[10px] text-gray-400 text-center font-bold uppercase tracking-widest mt-8">
            *Prices are estimated for a standard 10x10 kitchen. Final pricing may vary based on design and layout.
          </p>

        </div>
      </section>

      {/* SECTION 4 — PRICE GUIDE */}
      <section className="py-24 bg-white border-b border-[#E5E2DC]" id="price-guide">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-[#C6A87D] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Budget Anchors
            </span>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-primary tracking-tight font-sans mb-4">
              What Do Kitchen Cabinets Cost?
            </h2>
            <p className="text-[#777] text-sm md:text-base leading-relaxed">
              Budget ranges based on a standard 10x10 kitchen layout in the GTA.
            </p>
          </div>

          {/* Table summary cards for 10x10 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { method: 'RTA (Ready To Assemble)', range: '$2,100 – $3,300', color: 'border-l-4 border-l-[#3D5E3C]' },
              { method: 'RTI (Ready To Install)', range: '$2,240 – $3,400', color: 'border-l-4 border-l-[#1E3A8A]' },
              { method: 'Fully Installed', range: '$3,800 – $4,900', color: 'border-l-4 border-l-[#C6A87D]' }
            ].map((p, idx) => (
              <div key={idx} className={`bg-[#FAF8F5] border border-[#E5E2DC] rounded-2xl p-6 ${p.color}`}>
                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">{p.method}</p>
                <p className="text-2xl font-black text-text-primary tracking-tight">{p.range}</p>
                <p className="text-[8px] text-gray-400 font-bold uppercase mt-1">Based on 10x10 Baseline</p>
              </div>
            ))}
          </div>

          {/* Kitchen Size Tabs Selector */}
          <div className="bg-[#FAF8F5] border border-[#E5E2DC] rounded-[2rem] p-8 md:p-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#E5E2DC] pb-6 mb-6">
              <h4 className="font-extrabold text-base text-text-primary">Compare Kitchen Layout Sizes</h4>
              
              <div className="flex bg-white border border-[#E5E2DC] p-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {(['small', 'standard', 'large'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveGuideTab(tab)}
                    className={`px-4 py-2 rounded-full cursor-pointer transition-all ${
                      activeGuideTab === tab 
                        ? 'bg-[#C6A87D] text-white shadow-sm' 
                        : 'hover:bg-gray-100 text-gray-500'
                    }`}
                  >
                    {tab === 'small' && 'Small'}
                    {tab === 'standard' && 'Standard'}
                    {tab === 'large' && 'Large'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div className="space-y-6">
              <div>
                <h5 className="font-extrabold text-text-primary text-lg">{priceGuides[activeGuideTab].title}</h5>
                <p className="text-xs text-gray-500 mt-1">{priceGuides[activeGuideTab].desc}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#E5E2DC]/50">
                <div className="flex justify-between items-center text-xs py-2">
                  <span className="font-bold uppercase tracking-wider text-gray-400">Delivery Method</span>
                  <span className="font-bold uppercase tracking-wider text-gray-400">Budget Range</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#E5E2DC]/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3D5E3C]" />
                    <span className="text-xs font-black uppercase tracking-wider text-text-primary">RTA (Self Assembly)</span>
                  </div>
                  <span className="text-base font-black text-text-primary">{priceGuides[activeGuideTab].rta}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#E5E2DC]/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" />
                    <span className="text-xs font-black uppercase tracking-wider text-text-primary">RTI (Factory Built)</span>
                  </div>
                  <span className="text-base font-black text-text-primary">{priceGuides[activeGuideTab].rti}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C6A87D]" />
                    <span className="text-xs font-black uppercase tracking-wider text-text-primary">Fully Installed</span>
                  </div>
                  <span className="text-base font-black text-text-primary">{priceGuides[activeGuideTab].installed}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Guide CTA (Now redirects to Choose Delivery Method instead of empty estimator) */}
          <div className="flex flex-col items-center gap-4 mt-12">
            <button 
              onClick={() => scrollToSection('buy-methods')}
              className="btn-primary px-12 py-5 text-xs font-bold uppercase tracking-widest shadow-xl shadow-[#C6A87D]/10 hover:scale-102 transition-transform cursor-pointer"
            >
              Choose Delivery Option
            </button>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              Please choose a delivery option first to anchor your estimate.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 5 — PROJECT GALLERY */}
      <section className="py-24 bg-white border-b border-[#E5E2DC]" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left">
              <span className="text-[#C6A87D] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                GTA TRANSFORMATIONS
              </span>
              <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-primary tracking-tight font-sans">
                Real Kitchens. Real Results.
              </h2>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">
                Toronto • Mississauga • Vaughan • Richmond Hill • Oakville • Markham
              </p>
            </div>
            <Link 
              to="/gallery" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C6A87D] hover:text-text-primary transition-colors cursor-pointer border-b-2 border-[#C6A87D] pb-1"
            >
              View Full Gallery <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                title: "Toronto Condo",
                collection: "Premium Collection",
                style: "Shaker",
                location: "Toronto, ON",
                img: condoKitchen
              },
              {
                title: "Mississauga Renovation",
                collection: "Premium Collection",
                style: "High Gloss White",
                location: "Mississauga, ON",
                img: highGlossKitchen
              },
              {
                title: "Richmond Hill Upgrade",
                collection: "Premium Collection",
                style: "Slim Shaker White",
                location: "Richmond Hill, ON",
                img: modernTwoTone
              },
              {
                title: "Suburban Remodel",
                collection: "Elite Collection",
                style: "Elite Slim Shaker",
                location: "Markham, ON",
                img: suburbanRemodel
              }
            ].map((p, idx) => (
              <div key={idx} className="space-y-4 group flex flex-col justify-between bg-[#FAF8F5] border border-[#E5E2DC] rounded-3xl p-6 hover:shadow-lg transition-all">
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5E2DC] shadow-sm relative">
                    <img 
                      src={p.img} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" 
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-start">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{p.location}</p>
                      <span className="text-[8px] bg-white border border-[#C6A87D]/30 text-[#C6A87D] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded">{p.collection}</span>
                    </div>
                    <h4 className="text-lg font-extrabold text-text-primary mt-1">{p.title}</h4>
                    <p className="text-xs text-gray-500 mt-1 font-semibold">Style: {p.style}</p>
                  </div>
                </div>

                <button
                  onClick={() => openCalculator({ 
                    type: 'full-kitchen', 
                    deliveryMethod: state.deliveryMethod || 'installed',
                    cabinetStyle: p.collection.toLowerCase().includes('essential') ? 'essential' : p.collection.toLowerCase().includes('premium') ? 'premium' : 'elite',
                    cabinetDoorStyle: p.style,
                    step: 5
                  })}
                  className="w-full bg-white hover:bg-gray-100 text-[#1A1A1A] font-bold py-3.5 px-4 rounded-full text-xs uppercase tracking-widest border border-[#E5E2DC] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  View Project / Estimate
                </button>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SECTION 6 — WHY QUARTZ INTERNATIONAL */}
      <section className="py-24 bg-[#FAF8F5] border-b border-[#E5E2DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <span className="text-[#C6A87D] font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
                  Engineered For Value
                </span>
                <h2 className="text-4xl font-extrabold text-text-primary tracking-tight mb-6">
                  The Smart Alternative To Expensive Custom Cabinets
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed font-semibold">
                  Get the exact look, premium hardware, and modern styling of a high-end designer custom kitchen at a fraction of the cost.
                </p>
              </div>

              {/* Grid of benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E5E2DC]">
                {[
                  { title: 'European Frameless', desc: 'Frameless cabinet design provides up to 15% more accessible drawer storage space.' },
                  { title: 'Soft-Close Hardware', desc: 'Premium soft-close hinges and undermount drawer slides come fully standard.' },
                  { title: 'Finish Selection', desc: 'Over 15 designer colorways across textured wood grain, high gloss, and lacquer.' },
                  { title: 'Semi-Custom Fit', desc: 'Flexible modular configurations that match your exact kitchen boundaries.' },
                  { title: 'Rapid Delivery', desc: 'Factory assembled cabinets ready in weeks, not the months demanded by customs.' },
                  { title: 'Professional Support', desc: 'Full architectural layout support and expert design help from our team.' }
                ].map((b, idx) => (
                  <div key={idx} className="space-y-1">
                    <h5 className="font-extrabold text-xs uppercase tracking-wider text-text-primary flex items-center gap-2">
                      <Check size={14} className="text-[#C6A87D]" strokeWidth={3} />
                      {b.title}
                    </h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed pl-5 font-semibold">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Graphic */}
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-[#E5E2DC] shadow-md">
              <img 
                src={whyChooseUs} 
                alt="European frameless kitchen construction features" 
                className="w-full h-full object-cover" 
              />
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7 — FINAL CTA (Clean layout with context-based CTAs) */}
      <section className="py-24 bg-[#0E1116] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A87D]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
          <div className="space-y-4">
            <span className="text-[#C6A87D] font-bold uppercase tracking-[0.3em] text-[10px] block">
              Cabinet lineup
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Ready To Choose Your Cabinet Setup?
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Explore our Collections or view our Cabinet styles & finishes catalog to start an estimate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <button 
              onClick={() => openCalculator({ 
                type: 'full-kitchen', 
                deliveryMethod: state.deliveryMethod || 'installed',
                step: 5
              })}
              className="w-full sm:w-auto bg-[#C6A87D] hover:bg-[#b09164] text-white font-bold py-5 px-10 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#C6A87D]/10"
            >
              Get My Cabinets Price
            </button>
          </div>

          <div className="pt-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            ✓ Free Design Review • ✓ No Obligation • ✓ Instant Breakdown PDF
          </div>
        </div>
      </section>

      {/* Trust Strip Footer Bar */}
      <footer className="bg-white border-t border-[#E5E2DC] py-8 text-gray-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#E5E2DC]/80">
            <div className="pt-4 md:pt-0 md:px-4 space-y-1">
              <h6 className="font-extrabold text-text-primary uppercase tracking-wider text-[10px]">Factory Direct Pricing</h6>
              <p className="text-[11px] text-gray-400">Better quality. Better value.</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-6 space-y-1">
              <h6 className="font-extrabold text-text-primary uppercase tracking-wider text-[10px]">European Materials</h6>
              <p className="text-[11px] text-gray-400">Built for beauty and durability.</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-6 space-y-1">
              <h6 className="font-extrabold text-text-primary uppercase tracking-wider text-[10px]">Expert Installation</h6>
              <p className="text-[11px] text-gray-400">Licensed & insured pros.</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-6 space-y-1">
              <h6 className="font-extrabold text-text-primary uppercase tracking-wider text-[10px]">5,000+ Kitchens</h6>
              <p className="text-[11px] text-gray-400">Proudly completed in the GTA.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
