import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  Flame,
  Info,
  DollarSign
} from 'lucide-react';
import { materials } from '../data/materials';
import { useCalculator } from '../context/CalculatorContext';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

// Filter materials for white quartz slabs
const whiteSlabs = materials
  .filter(m => m.category === 'white')
  .map(m => ({
    id: m.id,
    name: m.name,
    brand: m.brand,
    price: m.priceRange,
    typical: m.typicalCost,
    img: m.img,
    desc: m.description,
  }));

const designTips = [
  {
    title: 'Avoid Color Clashing',
    desc: 'Stark pure white countertops can make creamy white shaker cabinets look yellow or dirty. Always pair creamy cabinets with warm white or gold-veined quartz, and keep pure white quartz for modern slab/gloss cabinets.'
  },
  {
    title: 'Texture & Finish Trends',
    desc: 'In 2026, satin and matte finishes are highly requested. They soften the glare in kitchens with large windows or heavy recessed lighting, showing off the vein patterns more naturally than high-gloss finishes.'
  },
  {
    title: 'Seamless Backsplashes',
    desc: 'For a premium designer look, run the white quartz slab continuously from the countertop up the wall as a full-height backsplash. It eliminates grout lines and creates a modern, spacious focal point.'
  }
];

const faqs = [
  {
    q: 'How much do white quartz kitchen countertops cost in Toronto?',
    a: 'In Toronto and the GTA, white quartz countertops generally cost between $85 and $185 per square foot installed. Standard pure white slabs cost around $90–$120/sq ft, while premium Calacatta and gold-veined marble-look quartz range from $130–$200/sq ft depending on the brand (e.g. Caesarstone, Silestone).'
  },
  {
    q: 'Do white quartz countertops stain easily?',
    a: 'Quartz is non-porous and highly stain-resistant, meaning everyday spills like red wine, coffee, or lemon juice won\'t penetrate the surface. However, you should still wipe up spills promptly, particularly on solid white surfaces, and avoid using abrasive bleach cleaners.'
  },
  {
    q: 'How do I choose between white quartz and white marble?',
    a: 'While natural white marble (like Carrara or Calacatta) is beautiful, it is highly porous and susceptible to acid etching and scratching. White quartz offers the exact look of premium marble veins but with complete scratch-resistance and zero sealing requirements, making it much more practical for high-traffic kitchens.'
  },
  {
    q: 'What color cabinets go best with white quartz countertops?',
    a: 'White quartz is extremely versatile. It pairs beautifully with navy blue, forest green, or charcoal grey cabinets for a high-contrast look. If you are doing a white-on-white kitchen, ensure the paint undertones match: warm off-white quartz pairs with warm cream cabinets, while stark cool white quartz pairs with pure white paint.'
  }
];

export default function WhiteQuartzPage() {
  const { openCalculator } = useCalculator();

  return (
    <div className="bg-background transition-colors duration-500">
      <SEO 
        title="White Quartz Kitchen Countertops Toronto | 2026 Prices & Designs" 
        description="Trending white quartz kitchen countertops in Toronto and the GTA. View linear & square foot pricing, see warm vs stark white design trends, and get an instant quote." 
      />

      {/* 1. HERO SECTION */}
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
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest leading-none">2026 Design Guide & Estimator</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-text-primary mb-8 tracking-tighter leading-[0.95] font-sans">
              White Quartz <br />
              <span className="text-accent underline decoration-accent/10 underline-offset-8">Kitchen Countertops</span>
            </h1>
            
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
              Explore the GTA's most popular white quartz countertop slabs. From brilliant pure white to gold-veined Calacatta marble designs, find your style and get an instant online price.
            </p>

            <div className="flex justify-center">
              <button 
                onClick={() => openCalculator()} 
                className="btn-primary px-12 py-6 h-auto text-lg font-bold shadow-2xl shadow-accent/20 group cursor-pointer"
              >
                Estimate My Countertop Price 
                <ArrowRight size={20} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS & PRICE OVERVIEW */}
      <section className="py-20 bg-[#F8F9FA] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] border border-border-custom shadow-md flex flex-col justify-between">
              <div>
                <span className="p-3 bg-accent/10 text-accent rounded-2xl w-fit inline-block mb-6"><DollarSign size={24} /></span>
                <h3 className="text-lg font-bold text-text-primary mb-2">Average Price Range</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Standard white quartz options cost around **$85 – $120/sq ft** installed. High-end marble mimics average **$130 – $185/sq ft** installed.
                </p>
              </div>
            </motion.div>
            
            <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] border border-border-custom shadow-md flex flex-col justify-between">
              <div>
                <span className="p-3 bg-accent/10 text-accent rounded-2xl w-fit inline-block mb-6"><Flame size={24} /></span>
                <h3 className="text-lg font-bold text-text-primary mb-2">2026 Trend Shift</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Homeowners are transitioning away from stark, blue-white slabs to warmer whites with organic, flowing gold and greige veins.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="bg-white p-10 rounded-[2.5rem] border border-border-custom shadow-md flex flex-col justify-between">
              <div>
                <span className="p-3 bg-accent/10 text-accent rounded-2xl w-fit inline-block mb-6"><ShieldCheck size={24} /></span>
                <h3 className="text-lg font-bold text-text-primary mb-2">Zero Maintenance</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Unlike natural white marble, quartz is non-porous and scratch-resistant. No periodic sealing or heavy maintenance required.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. POPULAR SLABS CATALOG */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight leading-none">Popular White Slabs in Toronto</h2>
            <p className="text-gray-500">The most sought-after white quartz materials from Caesarstone, TCE, and Lucent.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {whiteSlabs.map((slab, idx) => (
              <motion.div
                key={idx}
                {...fadeIn}
                className="group flex flex-col h-full rounded-[2.5rem] overflow-hidden border border-border-custom hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <Link to={`/slab/${slab.id}`} className="aspect-video overflow-hidden block">
                  <img src={slab.img} alt={`${slab.name} white quartz countertop`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{slab.brand}</span>
                  <Link to={`/slab/${slab.id}`} className="block group/link">
                    <h3 className="text-2xl font-bold text-text-primary mb-2 tracking-tight group-hover/link:text-accent transition-colors">{slab.name}</h3>
                  </Link>
                  <p className="text-gray-500 text-xs mb-6 flex-grow leading-relaxed">{slab.desc}</p>
                  <p className="text-lg font-bold text-text-primary mb-6">{slab.price} <span className="text-xs text-gray-400 font-medium">/ sq ft installed</span></p>
                  
                  <button 
                    onClick={() => openCalculator({ slab: slab.name, brand: slab.brand })}
                    className="mt-auto inline-flex items-center justify-center bg-background border border-border-custom py-4 rounded-full text-sm font-bold text-text-primary hover:bg-accent hover:text-white hover:border-accent transition-all group/btn cursor-pointer"
                  >
                    Price This Slab <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DESIGN GUIDANCE */}
      <section className="py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-text-primary mb-8 tracking-tight font-sans">
                How to Pair White Quartz Correctly
              </h2>
              <p className="text-gray-500 mb-12 leading-relaxed">
                Designers consider white quartz the ultimate neutral, but choosing the wrong paint undertone or cabinet styling can create a clashing kitchen layout. Use these tips to ensure a flawless designer finish.
              </p>
              
              <div className="space-y-8">
                {designTips.map((tip, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-1">
                      <Check size={16} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-2 text-lg">{tip.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative h-[450px]">
              <img 
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern kitchen with white quartz countertops and brass hardware"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. ESTIMATOR LINK CARD */}
      <section className="py-24 bg-white border-b border-border-custom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="bg-dark text-white rounded-[3rem] p-12 text-center relative overflow-hidden shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Calculate Your White Quartz Project</h3>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed text-sm">
              Use our smart GTA countertop cost calculator. Select your layout, input your linear or square footage, and get a precise quote instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => openCalculator()} 
                className="btn-primary bg-accent hover:bg-white hover:text-accent border-0 text-white font-bold px-10 py-5 rounded-full cursor-pointer flex items-center justify-center gap-2 mx-auto sm:mx-0"
              >
                Start Instant Estimator <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">White Quartz Countertops FAQs</h2>
            <p className="text-gray-500 mt-2">Answers to key questions about white quartz performance, pricing, and care.</p>
          </div>
          <div className="space-y-6">
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

      {/* 7. FINAL CALL-TO-ACTION */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">GTA's White Quartz Specialists</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to remodel your kitchen? Get precision templating, custom fabrication, and white-glove installation from Quartz International.
          </p>
          <button 
            onClick={() => openCalculator()} 
            className="bg-white text-accent px-12 py-6 rounded-full font-bold text-lg hover:bg-text-primary hover:text-white transition-all shadow-2xl inline-block cursor-pointer"
          >
            Get Instant Estimate
          </button>
        </div>
      </section>
    </div>
  );
}
