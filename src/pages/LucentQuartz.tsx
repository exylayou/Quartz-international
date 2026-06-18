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
  Timer,
  Calculator
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useCalculator } from '../context/CalculatorContext';
import clientLucentChefKitchen from '../assets/images/client_lucent_chef_kitchen.jpg';
import clientLucentLuxuryCondo from '../assets/images/client_lucent_luxury_condo.jpg';
import clientLucentTownhome from '../assets/images/client_lucent_townhome.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const slabs = [
  { id: 'ciq2003-sleek-cement', name: 'CIQ2003 – Sleek Cement', price: '$53–$61', img: '/images/slabs/ciq2003-sleek-cement.jpg', desc: 'A contemporary grey concrete look featuring a polished matte finish.' },
  { id: 'ciq4211-bianco-carrara', name: 'CIQ4211 – Bianco Carrara', price: '$51–$59', img: '/images/slabs/ciq4211-bianco-carrara.jpg', desc: 'Premium white marble look featuring classic Carrara grey veining.' },
  { id: 'lq6754-serenity-gold', name: 'LQ6754 – Serenity Gold', price: '$78–$102', img: '/images/slabs/lq6754-serenity-gold.jpg', desc: 'White marble quartz accented with subtle golden and grey veins.' },
  { id: 'ciq4111-bianco-oro', name: 'CIQ4111 – Bianco Oro', price: '$51–$59', img: '/images/slabs/ciq4111-bianco-oro.jpg', desc: 'Crisp white base highlighted by warm golden tones.' },
  { id: 'lq4600-arctic-white', name: 'LQ4600 – Arctic White', price: '$63–$78', img: '/images/slabs/lq4600-arctic-white.jpg', desc: 'Solid, brilliant white quartz surface for clean and modern kitchen designs.' },
  { id: 'lq5131-calacatta', name: 'LQ5131 – Calacatta', price: '$56–$65', img: '/images/slabs/lq5131-calacatta.jpg', desc: 'Italian Calacatta style marble look with bold and striking grey veins.' },
];

const kitchens = [
  { title: 'Luxury Condo', price: '$4,000 – $5,000', img: clientLucentLuxuryCondo },
  { title: 'Chef\'s Kitchen', price: '$4,000 – $6,000', img: clientLucentChefKitchen },
  { title: 'Modern Townhome', price: '$2,500 – $3,500', img: clientLucentTownhome },
];

const faqs = [
  { q: 'What makes Lucent Quartz stand out?', a: 'Lucent Quartz delivers exceptionally high-clarity engineered surfaces. Using state-of-the-art compression technology, Lucent slabs show more design depth and are highly stain, heat, and scratch-resistant.' },
  { q: 'How does Lucent Quartz compare in cost to Caesarstone?', a: 'Lucent Quartz offers competitive pricing in the premium bracket. It typically ranges from $51 to $102 per square foot fully installed, providing excellent durability and marble aesthetics comparable to elite European brands.' },
  { q: 'Does Lucent Quartz need to be sealed?', a: 'No. Like all high-quality engineered quartz, Lucent Quartz is completely non-porous and never requires sealing, waxing, or special chemical treatments.' },
  { q: 'What is the warranty on Lucent Quartz countertops?', a: 'Lucent Quartz provides a comprehensive residential warranty to protect against manufacturing defects, giving Toronto homeowners complete peace of mind.' },
];

export default function LucentQuartz() {
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
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none underline decoration-accent/30 underline-offset-4">Authorized Toronto Supplier</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-8 tracking-tighter leading-[0.95]">
              Lucent Quartz <br />
              <span className="text-accent underline decoration-accent/10 underline-offset-8">Cost & Models 2026</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
              Discover premium Lucent Quartz surfaces including Bianco Carrara and Calacatta. 
              <br className="hidden md:block" /> Professional GTA installation from <span className="text-text-primary font-bold underline decoration-accent/20">$51 – $102 per sq ft.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => openCalculator({ brand: 'Lucent Quartz' })} className="btn-primary px-12 py-6 h-auto text-lg font-bold shadow-2xl shadow-accent/20 group">
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
             <h2 className="text-3xl font-bold text-text-primary mb-6 tracking-tight">Toronto Lucent Quartz Pricing Guide</h2>
             <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
               <p>
                 In 2026, Lucent Quartz countertops in the Greater Toronto Area range from <span className="text-text-primary font-bold">$51–$102 per square foot fully installed</span>.
               </p>
               <p>
                 Premium models like <span className="text-text-primary font-medium italic">Bianco Carrara</span>, <span className="text-text-primary font-medium italic">Serenity Gold</span>, and the contemporary <span className="text-text-primary font-medium italic">CIQ2003 – Sleek Cement</span> are highly popular for upscale Toronto kitchen designs.
               </p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SLAB MODELS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight leading-none">Lucent Quartz Slab Models</h2>
            <p className="text-gray-500">Premium design surfaces engineered for Toronto modern spaces.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {slabs.map((slab, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="group flex flex-col h-full rounded-[2.5rem] overflow-hidden border border-border-custom hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <Link to={`/slab/${slab.id}`} className="aspect-video overflow-hidden block relative">
                  <img src={slab.img} alt={slab.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 group-hover:block hidden">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                      <Plus size={16} className="text-accent" />
                    </div>
                  </div>
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <Link to={`/slab/${slab.id}`} className="block group/link">
                      <h3 className="text-2xl font-bold text-text-primary tracking-tight group-hover/link:text-accent transition-colors">{slab.name}</h3>
                    </Link>
                    <ShieldCheck size={20} className="text-accent/40" />
                  </div>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">{slab.desc}</p>
                  <p className="text-lg font-bold text-accent mb-8">{slab.price} <span className="text-xs text-gray-400 font-medium">/ sq ft installed</span></p>
                  <button 
                    onClick={() => openCalculator({ slab: slab.name, brand: 'Lucent Quartz' })}
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
            <h2 className="text-4xl font-bold text-text-primary mb-4 tracking-tight leading-none">Designed for Inspired Living</h2>
            <p className="text-gray-500">Lucent Quartz showcased in premium Toronto kitchen projects.</p>
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

      {/* 5. WHY LUCENT QUARTZ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
                <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-xs">
                  <Star size={24} className="text-accent mb-2" />
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Designer Favorite</p>
                  <p className="text-sm font-medium text-text-primary italic">"Lucent Quartz provides the perfect mix of high-fidelity Italian marble aesthetics and everyday durability."</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-text-primary mb-8 tracking-tight">The Lucent Quartz Advantage</h2>
              <div className="space-y-6">
                {[
                  { title: 'Extraordinary Pattern Clarity', desc: 'State-of-the-art rendering brings veins and grain details to life.' },
                  { title: 'Zero Sealing Required', desc: 'Completely non-porous structure protects against red wine, lemon juice, and oil stains.' },
                  { title: 'Outstanding Thermal Resistance', desc: 'Engineered to handle hot cookware temperatures safely.' },
                  { title: 'Hygienic Surface', desc: 'Prevents bacterial growth, certified safe for direct food contact.' }
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
              <h2 className="text-4xl font-bold text-text-primary mb-8 tracking-tight">Calculate Your Lucent Quartz Project</h2>
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
               <p className="text-gray-500 mb-10 leading-relaxed">No guesswork. No hidden fees. Just transparent Lucent Quartz pricing based on your kitchen\'s specific dimensions.</p>
               <button onClick={() => openCalculator({ brand: 'Lucent Quartz' })} className="w-full p-8 border-2 border-accent/20 rounded-3xl flex items-center justify-between hover:border-accent hover:bg-accent/5 transition-all">
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
            <h2 className="text-3xl font-bold text-text-primary tracking-tight underline decoration-accent/20 underline-offset-8">Lucent Quartz FAQ</h2>
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Ready for Your Lucent Quartz Upgrade?</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Get your instant Lucent Quartz quote and schedule your final measurement. Toronto\'s trusted surface experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => openCalculator({ brand: 'Lucent Quartz' })} className="bg-white text-accent px-12 py-6 rounded-full font-bold text-lg hover:bg-text-primary hover:text-white transition-all shadow-2xl">
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
