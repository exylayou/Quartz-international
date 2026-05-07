
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  CheckCircle2,
  Star, 
  Plus, 
  HelpCircle,
  Sparkles,
  Info,
  ShieldCheck,
  Zap,
  TrendingUp
} from 'lucide-react';
import { cn } from '../lib/utils';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

import { useCalculator } from '../context/CalculatorContext';
import showcaseImage from '../assets/images/regenerated_image_1777924559732.png';

export default function CalacattaGold() {
  const { openCalculator } = useCalculator();
  
  const similarSlabs = [
    { name: 'Statuario', img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=400' },
    { name: 'Carrara White', img: 'https://images.unsplash.com/photo-1628594716762-59552eeef921?auto=format&fit=crop&q=80&w=400' },
    { name: 'Calacatta Laza', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="bg-background">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 px-4 py-2 rounded-full mb-8">
                  <Star size={14} className="text-accent" fill="currentColor" />
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none">Toronto Price Guide 2026</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-8 tracking-tighter leading-[0.95]">
                  Calacatta Gold Quartz <br />
                  <span className="text-accent">Countertops — Price in Toronto</span>
                </h1>
                <p className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed">
                  See real kitchen pricing, examples, and get your instant estimate for the ultimate marble-style quartz.
                </p>
                
                <div className="bg-background border-2 border-accent/20 p-8 rounded-[2.5rem] mb-12 max-w-md shadow-xl shadow-accent/5 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4">
                      <TrendingUp className="text-accent/20 w-12 h-12" />
                   </div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Price Anchor (Installed)</p>
                   <p className="text-5xl font-bold text-text-primary mb-2">$90 – $110 <span className="text-base text-gray-400 font-medium">/ sq ft</span></p>
                   <p className="text-accent font-bold">Most kitchens: $5,000 – $9,000</p>
                </div>

                <button 
                  onClick={() => openCalculator({ slab: 'Calacatta Gold', brand: 'Caesarstone' })}
                  className="btn-primary w-full sm:w-auto px-12 py-6 text-xl font-bold group shadow-2xl shadow-accent/20 flex items-center justify-center gap-3"
                >
                  👉 Get This Kitchen Price <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative border-[12px] border-white ring-1 ring-black/5"
              >
                <img 
                  src="https://images.unsplash.com/photo-1565183928294-7065123ee2e4?auto=format&fit=crop&q=80&w=1200" 
                  alt="Calacatta Gold Kitchen Toronto" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK ANSWER */}
      <section className="py-24 bg-[#F8F9FA] border-y border-border-custom">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeIn} className="bg-white p-12 md:p-16 rounded-[3rem] border border-border-custom shadow-xl relative">
             <div className="absolute -top-6 left-12 bg-text-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Pricing Question</div>
             <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 tracking-tight">How Much Does Calacatta Gold Quartz Cost?</h2>
             <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed">
               <p>
                 Calacatta Gold quartz countertops in Toronto typically cost between <span className="text-text-primary font-bold underline decoration-accent/30 decoration-4 underline-offset-4">$90 and $110 per square foot installed</span>.
               </p>
               <p>
                 Most kitchen projects range from <span className="text-text-primary font-bold">$5,000 to $9,000</span> depending on the total square footage, slab thickness, and complexity of the layout.
               </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. REAL KITCHEN EXAMPLES */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 tracking-tighter">Calacatta Gold Kitchens in Toronto</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">Actual installation price ranges based on local Toronto projects.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Condo Kitchen', price: '$4,800 – $6,200', img: 'https://images.unsplash.com/photo-1556186675-9005bc18b10f?auto=format&fit=crop&w=600' },
              { title: 'Family Kitchen', price: '$6,200 – $8,400', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=600' },
              { title: 'Large Kitchen', price: '$8,500 – $11,500', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600' },
            ].map((k, i) => (
              <motion.div key={i} {...fadeIn} className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl">
                <img src={k.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-10 flex flex-col justify-end">
                   <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{k.title}</h3>
                   <p className="text-accent font-bold text-xl mb-10">{k.price} <span className="text-white/50 text-xs font-medium tracking-normal">Fully Installed</span></p>
                   <button 
                     onClick={() => openCalculator({ slab: 'Calacatta Gold', brand: 'Caesarstone' })}
                     className="bg-white text-text-primary px-8 py-5 rounded-full font-bold text-sm w-full sm:w-fit hover:bg-accent hover:text-white transition-all transform group-hover:translate-y-[-4px] active:scale-95 shadow-xl"
                   >
                     Get This Kitchen Price
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY THIS SLAB */}
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter">Why Choose Calacatta Gold Quartz</h2>
              <p className="text-xl text-gray-400 mb-16 leading-relaxed">
                Toronto design trends show Calacatta Gold as the #1 choice for homeowners seeking a timeless yet modern aesthetic.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
                {[
                  { icon: <Sparkles size={24} className="text-accent" />, text: 'Elegant marble-style veining' },
                  { icon: <Zap size={24} className="text-accent" />, text: 'Brightens kitchen space' },
                  { icon: <Check size={24} className="text-accent" />, text: 'Works with modern and classic designs' },
                  { icon: <Star size={24} className="text-accent" />, text: 'One of the most popular choices' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">{item.icon}</div>
                    <p className="text-lg font-bold text-gray-200 mt-2">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square rounded-[4rem] overflow-hidden border-[16px] border-white/5 relative group">
                <img src={showcaseImage} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. COST FACTORS */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-12 tracking-tight">What Affects the Price?</h2>
          
          <div className="space-y-4 max-w-2xl mx-auto mb-20">
            {[
              "Kitchen size & total linear feet",
              "Slab pattern selection (Simple vs Heavy Veining)",
              "Edge detail choices (Mitered vs Round)",
              "Undermount sink & stove cutouts",
              "Complex installation requirements"
            ].map((factor, i) => (
              <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-background border border-border-custom text-left hover:border-accent transition-all group">
                <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-text-primary text-lg">{factor}</span>
              </div>
            ))}
          </div>
          
          <div className="inline-block p-1 bg-background rounded-full border border-border-custom mb-8">
            <div className="flex items-center gap-2 px-6 py-2">
              <Info size={16} className="text-accent" />
              <span className="text-sm font-bold text-gray-500">Every project is unique — get your exact quote below</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALCULATOR CTA */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
           <div className="bg-text-primary rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-12">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] -mr-48 -mt-48" />
              <div className="relative z-10 md:w-3/5">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">Get Your Calacatta Gold Kitchen Price in 30 Seconds</h2>
                <p className="text-xl text-gray-400 mb-0">
                  Pre-filled for Premium Slabs. No registration required for instant results in the GTA.
                </p>
              </div>
              <div className="relative z-10 md:w-2/5 flex justify-center md:justify-end">
                 <button 
                   onClick={() => openCalculator({ slab: 'Calacatta Gold', tier: 'premium' })}
                   className="btn-primary h-auto px-16 py-8 text-2xl font-black group shadow-3xl shadow-accent/20"
                 >
                   Start Estimate
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* 7. SIMILAR STYLES */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-16 text-center tracking-tight">Similar Quartz Designs</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {similarSlabs.map((slab, i) => (
              <motion.div key={i} {...fadeIn} className="group flex flex-col h-full bg-background border border-border-custom rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden relative">
                   <img src={slab.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={slab.name} />
                   <div className="absolute inset-0 bg-black/5" />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                   <h3 className="text-2xl font-bold text-text-primary mb-10 tracking-tight">{slab.name}</h3>
                   <div className="mt-auto">
                     <button 
                       onClick={() => openCalculator({ slab: slab.name })}
                       className="flex items-center gap-2 text-accent font-bold group/link"
                     >
                       View Price <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                     </button>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-32 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter uppercase italic">Ready to Price Your Kitchen?</h2>
          <button 
            onClick={() => openCalculator({ slab: 'Calacatta Gold', brand: 'Caesarstone' })}
            className="bg-white text-accent px-16 py-8 rounded-full font-black text-2xl hover:bg-text-primary hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.3)] inline-flex items-center gap-4"
          >
            Get Instant Estimate <ArrowRight size={28} />
          </button>
        </div>
      </section>
    </div>
  );
}

