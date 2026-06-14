import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  Check, 
  Sparkles, 
  Calculator, 
  Info,
  Layers,
  Star,
  ExternalLink,
  Filter,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

import calacattaNuvo from '../assets/images/regenerated_image_1778024505255.jpg';
import { materials } from '../data/materials';
import browseHero from '../assets/images/browse_hero.png';

import look1 from '../assets/images/regenerated_image_1777929280141.png';
import look2 from '../assets/images/regenerated_image_1777929281733.png';
import look3 from '../assets/images/concrete_look.jpg';
import look4 from '../assets/images/warm_look.jpg';
import look5 from '../assets/images/regenerated_image_1777929286737.png';

import choose1 from '../assets/images/choose_1.png';
import choose2 from '../assets/images/choose_2.png';
import choose3 from '../assets/images/choose_3.png';
import choose4 from '../assets/images/choose_4.png';

import condoKitchen from '../assets/images/condo_kitchen.png';
import familyKitchen from '../assets/images/family_kitchen.png';
import luxuryKitchen from '../assets/images/luxury_kitchen.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const looks = [
  { id: 'white', label: 'White & Light', img: look1 },
  { id: 'marble', label: 'Marble Look', img: look2 },
  { id: 'grey', label: 'Concrete & Grey', img: look3 },
  { id: 'warm', label: 'Warm & Beige', img: look4 },
  { id: 'dark', label: 'Bold & Dark', img: look5 },
];

const slabs = [
  ...materials.map(m => ({
    name: m.name,
    brand: m.brand,
    price: m.priceRange,
    category: m.category,
    img: m.name.includes('5131') ? calacattaNuvo : m.img
  })),
  { name: 'Skara Brae', brand: 'Lucent Quartz', price: '$115–$140', category: 'marble', img: 'https://images.unsplash.com/photo-1556909172-fd60538a7956?auto=format&fit=crop&q=80&w=600' }
];

const brands = [
  { 
    name: 'Caesarstone', 
    path: '/quartz-countertops-caesarstone',
    logo: (
      <img 
        src="/images/logos/caesarstone.png" 
        alt="Caesarstone Logo" 
        className="max-h-5 object-contain" 
      />
    )
  },
  { 
    name: 'Kasa Quartz', 
    path: '/quartz-countertops-kasa',
    logo: (
      <div className="flex items-center gap-1.5 justify-center">
        <div className="w-5 h-5 rounded bg-[#ee8b2b] text-white flex items-center justify-center font-serif font-black text-[9px] leading-none shrink-0">
          K
        </div>
        <span className="text-[11px] font-bold tracking-tight text-text-primary">
          KASA <span className="font-light text-text-muted">QUARTZ</span>
        </span>
      </div>
    )
  },
  { 
    name: 'Lucent Quartz', 
    path: '/quartz-countertops-lucent',
    logo: (
      <img 
        src="/images/logos/lucent.png" 
        alt="Lucent Quartz Logo" 
        className="max-h-7 object-contain" 
      />
    )
  },
  { 
    name: 'TCE Stone', 
    path: '/quartz-countertops-tce',
    logo: (
      <img 
        src="/images/logos/tce.svg" 
        alt="TCE Stone Logo" 
        className="max-h-7 object-contain filter invert-[20%] sepia-[10%] saturate-[10%] hue-rotate-[180deg]" 
      />
    )
  },
  { 
    name: 'Kstone', 
    path: '/quartz-countertops-kstone',
    logo: (
      <img 
        src="/images/logos/kstone.png" 
        alt="Kstone Logo" 
        className="max-h-8 object-contain" 
      />
    )
  },
];

const examples = [
  { title: 'Modern Condo Kitchen', price: '$1,500–$3,500', img: condoKitchen, level: 'standard' as const, sqFt: 30, step: 2 },
  { title: 'Family Kitchen', price: '$2,000–$5,000', img: familyKitchen, level: 'premium' as const, sqFt: 40, step: 2 },
  { title: 'Luxury Kitchen', price: '$5,000–$11,000', img: luxuryKitchen, level: 'luxury' as const, sqFt: 55, step: 2 },
];

export default function QuartzBrowse() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeLook, setActiveLook] = useState<string | null>(null);
  const [activePrice, setActivePrice] = useState<string | null>(null);
  const slabsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const styleParam = searchParams.get('style');
    if (styleParam && looks.some(l => l.id === styleParam)) {
      setActiveLook(styleParam);
    } else {
      setActiveLook(null);
    }

    const priceParam = searchParams.get('price');
    if (priceParam && ['standard', 'premium', 'luxury'].includes(priceParam)) {
      setActivePrice(priceParam);
    } else {
      setActivePrice(null);
    }
  }, [searchParams]);

  const filteredSlabs = slabs.filter(slab => {
    // 1. Look/Style Filter
    const matchesLook = activeLook ? slab.category === activeLook : true;
    
    // 2. Price Tier Filter (mapped dynamically based on our actual price ranges using midpoint)
    const priceRange = slab.price;
    const numbers = priceRange.match(/\d+/g);
    let slabTier = 'standard';
    if (numbers && numbers.length >= 1) {
      const low = parseInt(numbers[0]);
      const high = numbers[1] ? parseInt(numbers[1]) : low;
      const midpoint = (low + high) / 2;
      
      if (midpoint > 95) slabTier = 'luxury';
      else if (midpoint > 68) slabTier = 'premium';
    }
    
    const matchesPrice = activePrice ? slabTier === activePrice : true;
    
    return matchesLook && matchesPrice;
  });

  const handleLookClick = (lookId: string | null) => {
    const newParams: Record<string, string> = {};
    if (lookId) newParams.style = lookId;
    if (activePrice) newParams.price = activePrice;
    setSearchParams(newParams);
    setTimeout(() => {
      slabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handlePriceClick = (priceId: string | null) => {
    const newParams: Record<string, string> = {};
    if (activeLook) newParams.style = activeLook;
    if (priceId) newParams.price = priceId;
    setSearchParams(newParams);
    setTimeout(() => {
      slabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const getLabelFromId = (id: string) => {
    return looks.find(l => l.id === id)?.label || id;
  };

  return (
    <div className="bg-background">
      {/* 1. QuartzBrowseHero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-8">
                  <Sparkles size={14} className="text-accent" />
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none">Browse Our 2026 Collection</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-8 tracking-tighter leading-[0.95]">
                  Browse Quartz <br />
                  <span className="text-accent">Countertops by Style</span>
                </h1>
                <p className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed">
                  Explore popular quartz designs and get instant pricing for your kitchen. No hidden fees, just premium surfaces.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/quartz-countertop-estimator" className="btn-primary px-10 py-5 h-auto text-base font-bold shadow-xl shadow-accent/20 group text-center flex items-center justify-center">
                    Get My Countertop Price <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/cost" className="flex items-center justify-center bg-white border border-border-custom px-10 py-5 rounded-full text-base font-bold text-text-primary hover:border-accent transition-all shadow-sm text-center">
                    View Cost Guide
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 w-full relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="aspect-video lg:aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden shadow-2xl relative"
              >
                <img 
                  src={browseHero} 
                  alt="Modern Kitchen with Quartz Countertops and Backsplash" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PopularSlabsSection */}
      <section id="browse" ref={slabsRef} className="py-32 bg-[#F8F9FA] scroll-mt-24 border-t border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight">
                {activeLook ? `${getLabelFromId(activeLook)} Designs` : 'Most Popular Quartz Designs in Toronto'}
              </h2>
              <p className="text-gray-500 max-w-xl">
                {activeLook 
                  ? `Showing our curated collection of ${getLabelFromId(activeLook).toLowerCase()} slabs.` 
                  : 'Selected by interior designers for their timeless appeal and performance.'}
                {activePrice && ` Filtered by ${activePrice} budget.`}
              </p>
            </div>
            {(activeLook || activePrice) && (
              <button 
                onClick={() => setSearchParams({})}
                className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-[0.2em] hover:text-text-primary transition-colors pb-1 border-b-2 border-accent/20"
              >
                <X size={14} /> Clear All Filters
              </button>
            )}
          </div>

          {/* SaaS-style Filter Toolbar */}
          <div className="flex flex-col gap-4 mb-12 p-6 bg-white border border-border-custom rounded-2xl shadow-sm">
            {/* Style Filter Row */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleLookClick(null)}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-bold border transition-all duration-300",
                  activeLook === null
                    ? "bg-text-primary border-text-primary text-white"
                    : "bg-white border-border-custom text-text-primary hover:border-text-primary"
                )}
              >
                All Looks
              </button>
              {looks.map((look) => (
                <button
                  key={look.id}
                  onClick={() => handleLookClick(look.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-xs font-bold border transition-all duration-300",
                    activeLook === look.id
                      ? "bg-text-primary border-text-primary text-white"
                      : "bg-white border-border-custom text-text-primary hover:border-text-primary"
                  )}
                >
                  {look.label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-border-custom" />

            {/* Price Filter Row */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handlePriceClick(null)}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-bold border transition-all duration-300",
                  activePrice === null
                    ? "bg-text-primary border-text-primary text-white"
                    : "bg-white border-border-custom text-text-primary hover:border-text-primary"
                )}
              >
                All Budgets
              </button>
              {[
                { id: 'standard', label: 'Standard ($48 – $68)' },
                { id: 'premium', label: 'Premium ($69 – $95)' },
                { id: 'luxury', label: 'Luxury ($100 – $170)' },
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => handlePriceClick(tier.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-xs font-bold border transition-all duration-300",
                    activePrice === tier.id
                      ? "bg-text-primary border-text-primary text-white"
                      : "bg-white border-border-custom text-text-primary hover:border-text-primary"
                  )}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[400px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredSlabs.map((slab) => {
                const matchedMaterial = materials.find(m => 
                  m.name.toLowerCase() === slab.name.toLowerCase() || 
                  m.name.toLowerCase().replace(/–/g, '-').replace(/\s+/g, '') === slab.name.toLowerCase().replace(/–/g, '-').replace(/\s+/g, '')
                );
                const slabId = matchedMaterial ? matchedMaterial.id : slab.name.toLowerCase().replace(/\s+/g, '-');
                const detailLink = `/slab/${slabId}`;
                
                return (
                  <motion.div
                    key={slab.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-[2rem] overflow-hidden border border-border-custom shadow-sm flex flex-col hover:shadow-xl transition-all h-full"
                    data-category={slab.category}
                  >
                    <Link to={detailLink} className="aspect-video overflow-hidden block">
                      <img src={slab.img} alt={slab.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </Link>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <Link to={detailLink} className="block group/link">
                          <h3 className="text-xl font-bold text-text-primary leading-tight group-hover/link:text-accent transition-colors">{slab.name}</h3>
                        </Link>
                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none">{slab.brand}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1 leading-none">Installed Price</p>
                      <p className="text-lg font-bold text-text-primary">{slab.price} <span className="text-[10px] text-gray-400 font-medium">/ sq ft</span></p>
                    </div>
                    <Link 
                      to="/quartz-countertop-estimator"
                      className="mt-auto flex items-center justify-center w-full bg-background border border-border-custom py-4 rounded-full text-xs font-bold text-text-primary hover:border-accent hover:bg-accent/5 transition-all gap-2 group text-center"
                    >
                      Get This Countertop Price <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )})}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 4. PopularBrandsSection */}
      <section className="py-24 bg-white" id="brands">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight">Shop by Quartz Brand</h2>
            <p className="text-gray-500">We work with the world's most trusted surface manufacturers.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {brands.map((brand, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                className="group"
              >
                <Link to={brand.path || '#'} className={cn(
                  "bg-background border border-border-custom rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 transition-all h-full block",
                  brand.path ? "hover:border-accent" : "opacity-60 cursor-not-allowed"
                )}>
                  <div className="h-12 flex items-center justify-center w-full transition-transform group-hover:scale-105">
                    {brand.logo}
                  </div>
                  <span className="font-bold text-sm text-text-primary">{brand.name}</span>
                  {brand.path && (
                    <span className="text-[9px] font-bold text-accent uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">View Brand Info</span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HowToChooseQuartzSection */}
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">How to Choose the Right Quartz</h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Most kitchens fall into 3 price tiers based on the design complexity and scarcity of the pattern.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  { level: 'Standard', desc: 'Clean, simple surfaces with minimal patterns. Best for budget-conscious upgrades.' },
                  { level: 'Premium', desc: 'Subtle veining and popular marble looks. Our most requested tier for family homes.' },
                  { level: 'Luxury', desc: 'Bold, statement designs with high-definition veining and elite brand exclusives.' }
                ].map((tier, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Check size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{tier.level}</h4>
                      <p className="text-sm text-gray-400">{tier.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/quartz-countertop-estimator" className="btn-primary w-fit px-10 text-center flex items-center justify-center">
                Calculate My Cost
              </Link>
            </div>
             <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                   <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                     <img src={choose1} alt="Modern Kitchen" className="w-full h-full object-cover" />
                   </div>
                   <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                     <img src={choose2} alt="Modern Kitchen Island" className="w-full h-full object-cover" />
                   </div>
                </div>
                <div className="space-y-4 pt-12">
                   <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                     <img src={choose3} alt="Family Lifestyle in Modern Kitchen" className="w-full h-full object-cover" />
                   </div>
                   <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                     <img src={choose4} alt="Couple Lifestyle in Modern Kitchen" className="w-full h-full object-cover" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. FeaturedKitchenExamplesSection */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">See These Styles in Real Kitchens</h2>
            <p className="text-gray-500">Real projects completed across the GTA.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((ex, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden"
              >
                <img src={ex.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-10 flex flex-col justify-end">
                   <h3 className="text-2xl font-bold text-white mb-2">{ex.title}</h3>
                   <div className="flex items-center gap-2 text-accent font-bold mb-8">
                      <Star size={16} fill="currentColor" />
                      <span>{ex.price} est.</span>
                   </div>
                   <Link to="/quartz-countertop-estimator" className="bg-white text-text-primary px-8 py-4 rounded-full font-bold text-sm w-fit hover:bg-accent hover:text-white transition-all transform group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100 duration-500 flex items-center justify-center">
                      Get This Kitchen Price
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FinalCTASection */}
      <section className="py-32 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Not Sure Which Quartz to Choose?</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Get your kitchen price in 30 seconds — we'll guide you through slabs, levels, and materials from there.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Link to="/quartz-countertop-estimator" className="bg-white text-accent px-12 py-6 rounded-full font-bold text-lg hover:bg-text-primary hover:text-white transition-all shadow-2xl text-center flex items-center justify-center">
              Start Estimate
            </Link>
            <Link to="/cost" className="bg-text-primary/20 backdrop-blur-sm border border-white/20 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-text-primary transition-all text-center">
              View Full Cost Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
