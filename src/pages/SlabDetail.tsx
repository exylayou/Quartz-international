
import { motion } from 'motion/react';
import { useParams, Navigate } from 'react-router-dom';
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
  TrendingUp,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { materials } from '../data/materials';
import { useCalculator } from '../context/CalculatorContext';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export default function SlabDetail() {
  const { id } = useParams<{ id: string }>();
  const { openCalculator } = useCalculator();
  
  const material = materials.find(m => m.id === id);

  if (!material) {
    return <Navigate to="/quartz-countertops-toronto" />;
  }

  const similarSlabs = materials
    .filter(m => m.category === material.category && m.id !== material.id)
    .slice(0, 3);

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
                  {material.name} <span className="text-accent italic lowercase font-medium">{material.brand}</span> <br />
                  <span className="text-text-primary">Countertops in Toronto</span>
                </h1>
                <p className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed">
                  {material.description} Get your instant estimate for this premium surface today.
                </p>
                
                <div className="bg-background border-2 border-accent/20 p-8 rounded-[2.5rem] mb-12 max-w-md shadow-xl shadow-accent/5 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4">
                      <TrendingUp className="text-accent/20 w-12 h-12" />
                   </div>
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Price Anchor (Installed)</p>
                   <p className="text-5xl font-bold text-text-primary mb-2">{material.priceRange} <span className="text-base text-gray-400 font-medium">/ sq ft</span></p>
                   <p className="text-accent font-bold">Typical kitchen: {material.typicalCost}</p>
                </div>

                <button 
                  onClick={() => openCalculator({ slab: material.name, brand: material.brand })}
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
                  src={material.img} 
                  alt={`${material.name} Kitchen Toronto`} 
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
             <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 tracking-tight">How Much Does {material.name} Cost?</h2>
             <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed">
               <p>
                 {material.name} quartz countertops in Toronto typically cost between <span className="text-text-primary font-bold underline decoration-accent/30 decoration-4 underline-offset-4">{material.priceRange} per square foot installed</span>.
               </p>
               <p>
                 Most kitchen projects range from <span className="text-text-primary font-bold">{material.typicalCost}</span> depending on the total square footage, slab thickness, and complexity of the layout.
               </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY THIS SLAB */}
      <section className="py-32 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tighter">Why Choose {material.name}</h2>
              <p className="text-xl text-gray-400 mb-16 leading-relaxed">
                A top choice for Toronto homeowners seeking a blend of {material.category} aesthetics and unmatched durability.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
                {material.features.map((feature, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
                       {idx === 0 ? <Sparkles size={24} className="text-accent" /> : 
                        idx === 1 ? <Zap size={24} className="text-accent" /> :
                        idx === 2 ? <Check size={24} className="text-accent" /> :
                        <Star size={24} className="text-accent" />}
                    </div>
                    <p className="text-lg font-bold text-gray-200 mt-2">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square rounded-[4rem] overflow-hidden border-[16px] border-white/5 relative group">
                <img src={material.img} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
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
        </div>
      </section>

      {/* 6. CALCULATOR CTA */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
           <div className="bg-text-primary rounded-[4rem] p-12 md:p-20 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center gap-12">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] -mr-48 -mt-48" />
              <div className="relative z-10 md:w-3/5">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight">Price Your {material.name} Kitchen</h2>
                <p className="text-xl text-gray-400 mb-0">
                  Instant transparent pricing for the GTA. No registration required.
                </p>
              </div>
              <div className="relative z-10 md:w-2/5 flex justify-center md:justify-end">
                 <button 
                   onClick={() => openCalculator({ slab: material.name })}
                   className="btn-primary h-auto px-16 py-8 text-2xl font-black group shadow-3xl shadow-accent/20"
                 >
                   Start Estimate
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* 7. SIMILAR STYLES */}
      {similarSlabs.length > 0 && (
        <section className="py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-16 text-center tracking-tight">Similar Designs</h2>
            
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
      )}

      {/* 8. FINAL CTA */}
      <section className="py-32 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter uppercase italic">Ready to Start?</h2>
          <button 
            onClick={() => openCalculator({ slab: material.name, brand: material.brand })}
            className="bg-white text-accent px-16 py-8 rounded-full font-black text-2xl hover:bg-text-primary hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.3)] inline-flex items-center gap-4"
          >
            Get Instant Estimate <ArrowRight size={28} />
          </button>
        </div>
      </section>
    </div>
  );
}
