
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
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
import brittaniccaWarm from '../assets/images/regenerated_image_1778020564301.jpg';
import calacattaNuvo from '../assets/images/regenerated_image_1778024505255.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const looks = [
  { id: 'white', label: 'White & Light', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800' },
  { id: 'marble', label: 'Marble Look', img: 'https://images.unsplash.com/photo-1565183928294-7065123ee2e4?auto=format&fit=crop&q=80&w=800' },
  { id: 'grey', label: 'Concrete & Grey', img: 'https://images.unsplash.com/photo-1556912167-75b84294edf3?auto=format&fit=crop&q=80&w=800' },
  { id: 'warm', label: 'Warm & Beige', img: 'https://images.unsplash.com/photo-1556909212-d5b604ad056f?auto=format&fit=crop&q=80&w=800' },
  { id: 'dark', label: 'Bold & Dark', img: 'https://images.unsplash.com/photo-1565183928271-e009405d6884?auto=format&fit=crop&q=80&w=800' },
];

const slabs = [
  { name: 'Calacatta Gold', brand: 'Caesarstone', price: '$90–$110', category: 'marble', img: 'https://images.unsplash.com/photo-1565183928294-7065123ee2e4?auto=format&fit=crop&q=80&w=600' },
  { name: 'Empira White', brand: 'Caesarstone', price: '$85–$105', category: 'white', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=600' },
  { name: 'White Attica', brand: 'Caesarstone', price: '$80–$100', category: 'marble', img: 'https://images.unsplash.com/photo-1527352723440-27ef86909772?auto=format&fit=crop&q=80&w=600' },
  { name: 'Brittanicca Warm', brand: 'Cambria', price: '$110–$130', category: 'warm', img: brittaniccaWarm },
  { name: 'Skara Brae', brand: 'Cambria', price: '$115–$140', category: 'marble', img: 'https://images.unsplash.com/photo-1556909172-fd60538a7956?auto=format&fit=crop&q=80&w=600' },
  { name: 'Eternal Statuario', brand: 'Silestone', price: '$95–$115', category: 'marble', img: 'https://images.unsplash.com/photo-1618221652467-33d325785f7a?auto=format&fit=crop&q=80&w=600' },
  { name: 'Calacatta Nuvo', brand: 'Caesarstone', price: '$90–$110', category: 'white', img: calacattaNuvo },
  { name: 'Rugged Concrete', brand: 'Caesarstone', price: '$85–$100', category: 'grey', img: 'https://images.unsplash.com/photo-1556912167-75b84294edf3?auto=format&fit=crop&q=80&w=600' },
  { name: 'Pure White', brand: 'HanStone', price: '$70–$90', category: 'white', img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=600' },
  { name: 'Vanilla Noir', brand: 'Caesarstone', price: '$95–$115', category: 'dark', img: 'https://images.unsplash.com/photo-1565183928271-e009405d6884?auto=format&fit=crop&q=80&w=600' },
  { name: 'Sooty Grey', brand: 'PentalQuartz', price: '$80–$100', category: 'grey', img: 'https://images.unsplash.com/photo-1556912167-75b84294edf3?auto=format&fit=crop&q=80&w=600' },
  { name: 'Marquina', brand: 'Silestone', price: '$110–$140', category: 'dark', img: 'https://images.unsplash.com/photo-1565183928271-e009405d6884?auto=format&fit=crop&q=80&w=600' },
];

const brands = [
  { name: 'Caesarstone', logo: 'CS', path: '/quartz-countertops-caesarstone' },
  { name: 'Silestone', logo: 'SL' },
  { name: 'Cambria', logo: 'CB' },
  { name: 'HanStone', logo: 'HS' },
  { name: 'PentalQuartz', logo: 'PQ' },
];

const examples = [
  { title: 'Modern Condo Kitchen', price: '$4,500–$6,200', img: 'https://images.unsplash.com/photo-1556186675-9005bc18b10f?auto=format&fit=crop&q=80&w=600' },
  { title: 'Family Kitchen', price: '$6,200–$8,400', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=600' },
  { title: 'Luxury Kitchen', price: '$9,000–$13,000', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600' },
];

import { useCalculator } from '../context/CalculatorContext';

export default function QuartzBrowse() {
  const { openCalculator } = useCalculator();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const slabsRef = useRef<HTMLElement>(null);

  const filteredSlabs = activeFilter 
    ? slabs.filter(s => s.category === activeFilter)
    : slabs;

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    slabsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
                  <button onClick={() => openCalculator()} className="btn-primary px-10 py-5 h-auto text-base font-bold shadow-xl shadow-accent/20 group text-center">
                    Get My Kitchen Price <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link to="/cost" className="flex items-center justify-center bg-white border border-border-custom px-10 py-5 rounded-full text-base font-bold text-text-primary hover:border-accent transition-all shadow-sm text-center">
                    View Cost Guide
                  </Link>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden shadow-2xl relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Quartz Countertops" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BrowseByLookSection */}
      <section className="py-24 border-t border-border-custom bg-white" id="browse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight">Browse by Look</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Find the perfect aesthetic match for your cabinetry and design.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {looks.map((look) => (
              <motion.div 
                key={look.id}
                {...fadeIn}
                onClick={() => handleFilterClick(look.id)}
                className={cn(
                  "group cursor-pointer transition-all",
                  activeFilter === look.id ? "scale-[0.98]" : "hover:translate-y-[-4px]"
                )}
                data-filter={look.id}
              >
                <div className={cn(
                  "aspect-[4/5] rounded-[2rem] overflow-hidden mb-4 border relative transition-all",
                  activeFilter === look.id ? "border-accent ring-2 ring-accent ring-offset-4" : "border-border-custom"
                )}>
                  <img src={look.img} alt={look.label} className="w-full h-full object-cover" />
                  <div className={cn(
                    "absolute inset-0 transition-colors",
                    activeFilter === look.id ? "bg-accent/20" : "bg-black/20 group-hover:bg-black/10"
                  )} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-lg text-center px-4 drop-shadow-lg">{look.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PopularSlabsSection */}
      <section id="slabs" ref={slabsRef} className="py-32 bg-[#F8F9FA] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight">
                {activeFilter ? `${getLabelFromId(activeFilter)} Designs` : 'Most Popular Quartz Designs in Toronto'}
              </h2>
              <p className="text-gray-500 max-w-xl">
                {activeFilter 
                  ? `Showing our curated collection of ${getLabelFromId(activeFilter).toLowerCase()} slabs.` 
                  : 'Selected by interior designers for their timeless appeal and performance.'}
              </p>
            </div>
            {activeFilter && (
              <button 
                onClick={() => setActiveFilter(null)}
                className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-[0.2em] hover:text-text-primary transition-colors pb-1 border-b-2 border-accent/20"
              >
                <X size={14} /> Clear Filter
              </button>
            )}
          </div>
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[400px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredSlabs.map((slab) => (
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
                  <Link to={slab.name === 'Calacatta Gold' ? '/caesarstone-calacatta-gold-price' : `/slab/${slab.name.toLowerCase().replace(/\s+/g, '-')}`} className="aspect-video overflow-hidden block">
                    <img src={slab.img} alt={slab.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </Link>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <Link to={slab.name === 'Calacatta Gold' ? '/caesarstone-calacatta-gold-price' : `/slab/${slab.name.toLowerCase().replace(/\s+/g, '-')}`} className="block group/link">
                          <h3 className="text-xl font-bold text-text-primary leading-tight group-hover/link:text-accent transition-colors">{slab.name}</h3>
                        </Link>
                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none">{slab.brand}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1 leading-none">Installed Price</p>
                      <p className="text-lg font-bold text-text-primary">{slab.price} <span className="text-[10px] text-gray-400 font-medium">/ sq ft</span></p>
                    </div>
                    <button 
                      onClick={() => openCalculator({ style: slab.category, slab: slab.name, brand: slab.brand })}
                      className="mt-auto flex items-center justify-center w-full bg-background border border-border-custom py-4 rounded-full text-xs font-bold text-text-primary hover:border-accent hover:bg-accent/5 transition-all gap-2 group text-center"
                    >
                      Get This Kitchen Price <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
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
                  <div className={cn(
                    "w-12 h-12 rounded-full bg-white border border-border-custom flex items-center justify-center font-black text-xs text-text-primary transition-transform",
                    brand.path && "group-hover:scale-110"
                  )}>
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

              <button onClick={() => openCalculator()} className="btn-primary w-fit px-10 text-center">
                Calculate My Cost
              </button>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=600" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1565183928294-7065123ee2e4?auto=format&fit=crop&w=600" className="w-full h-full object-cover" />
                  </div>
               </div>
               <div className="space-y-4 pt-12">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1556912167-75b84294edf3?auto=format&fit=crop&w=600" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600" className="w-full h-full object-cover" />
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
                   <button onClick={() => openCalculator()} className="bg-white text-text-primary px-8 py-4 rounded-full font-bold text-sm w-fit hover:bg-accent hover:text-white transition-all transform group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100 duration-500">
                      Get This Kitchen Price
                   </button>
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
            <button onClick={() => openCalculator()} className="bg-white text-accent px-12 py-6 rounded-full font-bold text-lg hover:bg-text-primary hover:text-white transition-all shadow-2xl text-center">
              Start Estimate
            </button>
            <Link to="/cost" className="bg-text-primary/20 backdrop-blur-sm border border-white/20 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-text-primary transition-all text-center">
              View Full Cost Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
