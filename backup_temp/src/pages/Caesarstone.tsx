
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Star, 
  Plus, 
  Info, 
  HelpCircle,
  Sparkles,
  ShieldCheck,
  TrendingDown,
  Timer
} from 'lucide-react';
import { cn } from '../lib/utils';
import calacattaNuvo from '../assets/images/regenerated_image_1778024505255.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const slabs = [
  { name: 'Calacatta Gold', price: '$90–$110', img: 'https://images.unsplash.com/photo-1565183928294-7065123ee2e4?auto=format&fit=crop&q=80&w=600' },
  { name: 'Empira White', price: '$85–$105', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=600' },
  { name: 'White Attica', price: '$80–$100', img: 'https://images.unsplash.com/photo-1527352723440-27ef86909772?auto=format&fit=crop&q=80&w=600' },
  { name: 'Calacatta Nuvo', price: '$90–$110', img: calacattaNuvo },
  { name: 'Rugged Concrete', price: '$85–$100', img: 'https://images.unsplash.com/photo-1556912167-75b84294edf3?auto=format&fit=crop&q=80&w=600' },
  { name: 'Vanilla Noir', price: '$95–$115', img: 'https://images.unsplash.com/photo-1565183928271-e009405d6884?auto=format&fit=crop&q=80&w=600' },
];

const kitchens = [
  { title: 'Modern Condo', price: '$4,800 – $6,200', img: 'https://images.unsplash.com/photo-1556186675-9005bc18b10f?auto=format&fit=crop&q=80&w=600' },
  { title: 'Family Kitchen', price: '$6,200 – $8,500', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=600' },
  { title: 'Custom Kitchen', price: '$9,000 – $12,000', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600' },
];

const faqs = [
  { q: 'Is Caesarstone expensive?', a: 'Caesarstone is considered a premium quartz brand. While more expensive than entry-level stones, it offers superior durability and a world-class design palette that maintains high resale value.' },
  { q: 'Is it better than granite?', a: 'Quartz is non-porous and never requires sealing, unlike granite. It is more stain-resistant and offers more consistent patterns, making it the preferred choice for modern Toronto kitchens.' },
  { q: 'How long does installation take?', a: 'Typically, it takes 7-10 business days from the day of final template/measurement to the actual installation in your home.' },
  { q: 'Does it stain or scratch?', a: 'Caesarstone is highly resistant to both stains and scratches. However, we always recommend using cutting boards and trivets to maintain the surface for decades.' },
];

import { useCalculator } from '../context/CalculatorContext';

export default function Caesarstone() {
  const { openCalculator } = useCalculator();
  return (
    <div className="bg-background transition-colors duration-500">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
             <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 px-4 py-2 rounded-full mb-8">
              <Sparkles size={14} className="text-accent" />
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none underline decoration-accent/30 underline-offset-4">Authorized Toronto Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-8 tracking-tighter leading-[0.95]">
              Caesarstone Quartz <br />
              <span className="text-accent underline decoration-accent/10 underline-offset-8">Cost & Designs 2026</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
              Explore Caesarstone quartz styles and see real kitchen pricing in the GTA. 
              <br className="hidden md:block" /> Most Caesarstone kitchens: <span className="text-text-primary font-bold underline decoration-accent/20">$5,000 – $9,000 installed.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => openCalculator({ brand: 'Caesarstone' })} className="btn-primary px-12 py-6 h-auto text-lg font-bold shadow-2xl shadow-accent/20 group">
                Get My Kitchen Price <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUICK ANSWER */}
      <section className="py-24 bg-[#F8F9FA] border-y border-border-custom">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="bg-white p-12 rounded-[3rem] border border-border-custom shadow-xl">
             <h2 className="text-3xl font-bold text-text-primary mb-6 tracking-tight">How Much Does Caesarstone Quartz Cost?</h2>
             <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
               <p>
                 Caesarstone quartz countertops in Toronto typically cost <span className="text-text-primary font-bold">$70–$110 per square foot installed</span>.
               </p>
               <p>
                 Most kitchens fall between <span className="text-text-primary font-bold">$5,000 and $9,000</span> depending on total square footage, design complexity, and specific installation details.
               </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. POPULAR DESIGNS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight leading-none">Popular Caesarstone Designs</h2>
            <p className="text-gray-500">The most sought-after slabs for Toronto home transformations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {slabs.map((slab, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="group flex flex-col h-full rounded-[2.5rem] overflow-hidden border border-border-custom hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <Link to={slab.name === 'Calacatta Gold' ? '/caesarstone-calacatta-gold-price' : `/slab/${slab.name.toLowerCase().replace(/\s+/g, '-')}`} className="aspect-video overflow-hidden block">
                  <img src={slab.img} alt={slab.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <Link to={slab.name === 'Calacatta Gold' ? '/caesarstone-calacatta-gold-price' : `/slab/${slab.name.toLowerCase().replace(/\s+/g, '-')}`} className="block group/link">
                    <h3 className="text-2xl font-bold text-text-primary mb-2 tracking-tight group-hover/link:text-accent transition-colors">{slab.name}</h3>
                  </Link>
                  <p className="text-lg font-bold text-accent mb-8">{slab.price} <span className="text-xs text-gray-400 font-medium">/ sq ft installed</span></p>
                  <button 
                    onClick={() => openCalculator({ slab: slab.name, brand: 'Caesarstone' })}
                    className="mt-auto inline-flex items-center justify-center bg-background border border-border-custom py-4 rounded-full text-sm font-bold text-text-primary hover:bg-accent hover:text-white hover:border-accent transition-all group/btn"
                  >
                    Get This Kitchen Price <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REAL KITCHENS */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4 tracking-tight leading-none">Caesarstone Kitchens in Toronto</h2>
            <p className="text-gray-500">See what local homeowners are paying for their installations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kitchens.map((k, i) => (
              <motion.div key={i} {...fadeIn} className="relative group rounded-[2rem] overflow-hidden h-96">
                <img src={k.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                   <h3 className="text-xl font-bold text-white mb-1">{k.title} Project</h3>
                   <p className="text-accent font-bold mb-6">{k.price} installed</p>
                   <button onClick={() => openCalculator()} className="bg-white text-text-primary px-6 py-3 rounded-full font-bold text-xs w-fit hover:bg-accent hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300">
                     Get This Look
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE CAESARSTONE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-8 tracking-tight">Why Homeowners Choose Caesarstone</h2>
              <div className="space-y-6">
                {[
                  { title: 'Consistent Quality', desc: 'Superior engineering ensures every slab meets rigid standards.' },
                  { title: 'Modern Designs', desc: 'Industry-leading color palette from marble to concrete looks.' },
                  { title: 'Low Maintenance', desc: 'Non-porous surfaces never needs sealing or deep treatments.' },
                  { title: 'Trusted Global Brand', desc: 'The original quartz surface brand with a lifetime warranty.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                      <Check size={14} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. COST FACTORS */}
      <section className="py-32 bg-[#F8F9FA] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-text-primary mb-8 tracking-tight">What Affects the Cost?</h2>
              <p className="text-gray-600 mb-12 text-lg">Every project is unique. These five factors drive your final quote.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-center md:text-left">
                {[
                  { icon: <Plus size={20} />, label: 'Kitchen Size' },
                  { icon: <Sparkles size={20} />, label: 'Slab Design' },
                  { icon: <TrendingDown size={20} />, label: 'Edge Details' },
                  { icon: <Info size={20} />, label: 'Cutouts' },
                  { icon: <Timer size={20} />, label: 'Complexity' },
                ].map((f, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-border-custom flex flex-col items-center justify-center gap-3">
                    <div className="text-accent">{f.icon}</div>
                    <span className="font-bold text-text-primary text-sm tracking-tight">{f.label}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => openCalculator()} className="btn-primary w-fit px-10">Calculate My Cost</button>
            </div>
            <div className="lg:w-1/2 bg-white rounded-[3rem] p-12 border border-border-custom shadow-xl flex flex-col justify-center">
               <h3 className="text-3xl font-bold mb-6 tracking-tight">Price Your Project in 30 Seconds</h3>
               <p className="text-gray-500 mb-10 leading-relaxed">Our calculator is mapped to 2026 GTA pricing for Caesarstone collections.</p>
               <button onClick={() => openCalculator({ brand: 'Caesarstone' })} className="group p-8 border-2 border-accent/20 rounded-3xl flex items-center justify-between hover:border-accent hover:bg-accent/5 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white shadow-xl shadow-accent/20">
                       <Plus size={24} />
                    </div>
                    <div className="text-left">
                       <p className="font-black text-xl text-text-primary">Start New Estimate</p>
                       <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Caesarstone Pricing Tier</p>
                    </div>
                  </div>
                  <ChevronRight className="text-accent group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-border-custom bg-background/50 hover:bg-background transition-colors">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <HelpCircle size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-text-primary mb-3 leading-tight tracking-tight">{faq.q}</h4>
                    <p className="text-gray-500 leading-relaxed text-sm">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-32 bg-accent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready to Price Your Kitchen?</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Get your instant Caesarstone quote today. No showrooms required, just transparent Toronto pricing.
          </p>
          <button onClick={() => openCalculator({ brand: 'Caesarstone' })} className="bg-white text-accent px-12 py-6 rounded-full font-bold text-lg hover:bg-text-primary hover:text-white transition-all shadow-2xl inline-block">
            Get Instant Estimate
          </button>
        </div>
      </section>
    </div>
  );
}
