
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
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
  Timer,
  Calculator
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useCalculator } from '../context/CalculatorContext';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

import { materials } from '../data/materials';

const slabs = materials
  .filter(m => m.brand === 'Silestone')
  .map(m => ({
    name: m.name,
    price: m.priceRange,
    img: m.img,
    desc: m.description,
  }));

const kitchens = [
  { title: 'Luxury Condo', price: '$5,200 – $7,500', img: 'https://images.unsplash.com/photo-1556186675-9005bc18b10f?auto=format&fit=crop&q=80&w=600' },
  { title: 'Chef\'s Kitchen', price: '$7,800 – $11,000', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600' },
  { title: 'Modern Townhome', price: '$4,200 – $6,000', img: 'https://images.unsplash.com/photo-1556912167-75b84294edf3?auto=format&fit=crop&q=80&w=600' },
];

const faqs = [
  { q: 'What makes Silestone different from other quartz?', a: 'Silestone is the only brand that includes HybriQ+ technology, a sustainable manufacturing process using recycled materials and 100% renewable energy, while maintaining industry-leading durability.' },
  { q: 'How does Silestone compare to granite?', a: 'Silestone is non-porous, meaning it never needs to be sealed. It is more resistant to stains, scratches, and impact than natural granite, making it ideal for high-traffic Toronto kitchens.' },
  { q: 'Is Silestone more expensive than Caesarstone?', a: 'They are in a similar premium price tier. Prices vary depending on the specific collection, but both offer high value and 25-year warranties.' },
  { q: 'Can I use Silestone for my backsplash?', a: 'Yes, Silestone is excellent for backsplashes, especially in jumbo slab formats for a seamless, grout-free look.' },
];

export default function Silestone() {
  const { openCalculator } = useCalculator();
  
  return (
    <div className="bg-background transition-colors duration-500">
      <SEO title="Silestone | Quartz International" description="Learn more about Silestone at Quartz International. We provide premium countertops and cabinetry in Toronto and the GTA." />

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
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none underline decoration-accent/30 underline-offset-4">Premium Toronto Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-8 tracking-tighter leading-[0.95]">
              Silestone Quartz <br />
              <span className="text-accent underline decoration-accent/10 underline-offset-8">Cost & Models 2026</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
              Discover the latest Silestone collections including Miami Vena and Halcyon. 
              <br className="hidden md:block" /> Professional installation in the GTA from <span className="text-text-primary font-bold underline decoration-accent/20">$75 – $120 per sq ft.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => openCalculator({ brand: 'Silestone' })} className="btn-primary px-12 py-6 h-auto text-lg font-bold shadow-2xl shadow-accent/20 group">
                Estimate My Project <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/contact" className="flex items-center justify-center bg-white border border-border-custom px-10 py-5 rounded-full text-base font-bold text-text-primary hover:border-accent transition-all">
                Book Showroom Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUICK ANSWER */}
      <section className="py-24 bg-[#F8F9FA] border-y border-border-custom">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="bg-white p-12 rounded-[3rem] border border-border-custom shadow-xl text-center md:text-left">
             <h2 className="text-3xl font-bold text-text-primary mb-6 tracking-tight">Toronto Silestone Pricing Guide</h2>
             <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
               <p>
                 In 2026, Silestone countertops in the Greater Toronto Area typically range from <span className="text-text-primary font-bold">$75–$120 per square foot fully installed</span>.
               </p>
               <p>
                 Popular models like <span className="text-text-primary font-medium italic">Miami Vena</span> and <span className="text-text-primary font-medium italic">Silestone Yukon</span> are currently trending for their clean aesthetics and high durability.
               </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED MODELS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight leading-none">Silestone Slab Models</h2>
            <p className="text-gray-500">Premium surfaces for modern Toronto living.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {slabs.map((slab, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="group flex flex-col h-full rounded-[2.5rem] overflow-hidden border border-border-custom hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <Link to={`/slab/${slab.name.toLowerCase().replace(/\s+/g, '-')}`} className="aspect-video overflow-hidden block relative">
                  <img src={slab.img} alt={slab.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 group-hover:block hidden">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                      <Plus size={16} className="text-accent" />
                    </div>
                  </div>
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <Link to={`/slab/${slab.name.toLowerCase().replace(/\s+/g, '-')}`} className="block group/link">
                      <h3 className="text-2xl font-bold text-text-primary tracking-tight group-hover/link:text-accent transition-colors">{slab.name}</h3>
                    </Link>
                    <ShieldCheck size={20} className="text-accent/40" />
                  </div>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">{slab.desc}</p>
                  <p className="text-lg font-bold text-accent mb-8">{slab.price} <span className="text-xs text-gray-400 font-medium">/ sq ft installed</span></p>
                  <button 
                    onClick={() => openCalculator({ slab: slab.name, brand: 'Silestone' })}
                    className="mt-auto inline-flex items-center justify-center bg-background border border-border-custom py-4 rounded-full text-sm font-bold text-text-primary hover:bg-accent hover:text-white hover:border-accent transition-all group/btn"
                  >
                    Estimate My Kitchen <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DESIGN APPLICATIONS */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4 tracking-tight leading-none">Designed for Better Living</h2>
            <p className="text-gray-500">See Silestone in actual high-end kitchen installations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {kitchens.map((k, i) => (
              <motion.div key={i} {...fadeIn} className="relative group rounded-[2rem] overflow-hidden h-96">
                <img src={k.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 shadow-inner" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent p-8 flex flex-col justify-end">
                   <h3 className="text-xl font-bold text-white mb-1">{k.title}</h3>
                   <p className="text-accent font-bold mb-6">{k.price} installed</p>
                   <button onClick={() => openCalculator()} className="bg-white text-text-primary px-6 py-3 rounded-full font-bold text-xs w-fit hover:bg-accent hover:text-white transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300">
                     View Details
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY SILESTONE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
                <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs">
                  <Star size={24} className="text-accent mb-2" />
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Architect's Choice</p>
                  <p className="text-sm font-medium text-text-primary italic">"Silestone is my top recommendation for clients who want uncompromising style and sustainability."</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-text-primary mb-8 tracking-tight">The Silestone Advantage</h2>
              <div className="space-y-6">
                {[
                  { title: 'HybriQ+ Technology', desc: 'A new manufacturing process that uses 100% renewable energy and 99% recycled water.' },
                  { title: 'Extreme Stalwartness', desc: 'High resistance to impacts, scratches, and common household stains.' },
                  { title: 'Stunning Color Depth', desc: 'Over 80 colors available, with unmatched clarity and definition.' },
                  { title: '25-Year Warranty', desc: 'Peace of mind with a transferable limited warranty on all Silestone surfaces.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-background transition-colors group">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1 transition-colors group-hover:bg-accent/20">
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
          </div>
        </div>
      </section>

      {/* 6. CALCULATOR CTA */}
      <section className="py-32 bg-[#F8F9FA] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-text-primary mb-8 tracking-tight">Calculate Your Silestone Project</h2>
              <p className="text-gray-600 mb-12 text-lg">Our smart pricing engine is calibrated for the 2026 Toronto market. Get a precise estimate in seconds.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-12">
                {[
                  { icon: <Plus size={20} />, label: 'Custom Slab Choice' },
                  { icon: <ShieldCheck size={20} />, label: 'Certified Install' },
                ].map((f, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-border-custom flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-accent">{f.icon}</div>
                    <span className="font-bold text-text-primary text-xs tracking-tight">{f.label}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => openCalculator()} className="btn-primary w-full md:w-fit px-12">Price My Kitchen Now</button>
            </div>
            <div className="lg:w-1/2 bg-white rounded-[3rem] p-12 border border-border-custom shadow-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               <h3 className="text-3xl font-bold mb-6 tracking-tight">Instant Estimator</h3>
               <p className="text-gray-500 mb-10 leading-relaxed">No guesswork. No hidden fees. Just transparent Silestone pricing based on your kitchen\'s specific dimensions.</p>
               <button onClick={() => openCalculator({ brand: 'Silestone' })} className="w-full p-8 border-2 border-accent/20 rounded-3xl flex items-center justify-between hover:border-accent hover:bg-accent/5 transition-all">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-white shadow-xl shadow-accent/20">
                       <Calculator size={24} />
                    </div>
                    <div className="text-left">
                       <p className="font-black text-xl text-text-primary uppercase tracking-tight">Start Estimate</p>
                       <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Free for Toronto Homeowners</p>
                    </div>
                  </div>
                  <ChevronRight className="text-accent group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-primary tracking-tight underline decoration-accent/20 underline-offset-8">Silestone FAQ</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 rounded-[2rem] border border-border-custom bg-background/30 hover:bg-white hover:shadow-lg transition-all group">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <HelpCircle size={20} className="text-accent group-hover:text-white" />
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
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready for Your Silestone Upgrade?</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Get your instant Silestone quote and schedule your final measurement. Toronto\'s trusted surface experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => openCalculator({ brand: 'Silestone' })} className="bg-white text-accent px-12 py-6 rounded-full font-bold text-lg hover:bg-text-primary hover:text-white transition-all shadow-2xl">
              Calculate My Price
            </button>
            <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-white hover:text-accent transition-all">
              Contact an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
