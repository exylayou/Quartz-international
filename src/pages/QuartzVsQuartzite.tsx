import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { 
  Check, 
  X, 
  Flame, 
  HelpCircle, 
  ChevronDown, 
  Layers, 
  ShieldCheck, 
  Hammer, 
  DollarSign, 
  ArrowRight,
  Calculator,
  Gem,
  Droplets
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';
import { cn } from '../lib/utils';

// Import local images for reference/visuals
import quartzImg from '../assets/images/regenerated_image_1777760428513.png';
import quartziteImg from '../assets/images/blog_taj_mahal.png';
import heroImg from '../assets/images/browse_hero.png';

export default function QuartzVsQuartzite() {
  const navigate = useNavigate();
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const comparisonData = [
    {
      feature: "Composition",
      quartz: "Engineered stone (~90-93% natural quartz crystals, 7-10% resins & pigments)",
      quartzite: "100% natural metamorphic rock (quarried from sandstone under heat/pressure)",
      icon: <Layers size={18} className="text-accent" />
    },
    {
      feature: "Porosity & Sealing",
      quartz: "Completely non-porous. Never requires sealing.",
      quartzite: "Porous natural stone. Requires sealing at least once a year.",
      icon: <Droplets size={18} className="text-accent" />
    },
    {
      feature: "Heat Resistance",
      quartz: "Moderate. Heat sensitive due to resins (damaged by direct heat >300°F).",
      quartzite: "Excellent. Extremely heat resistant (handles hot pans directly, though trivets are recommended).",
      icon: <Flame size={18} className="text-accent" />
    },
    {
      feature: "Scratch & Chip Resistance",
      quartz: "Very high (Mohs hardness ~7). Flexible resins make it less prone to chipping.",
      quartzite: "Extremely high (Mohs hardness ~7-8). Harder than quartz, but more brittle and prone to chipping on edges.",
      icon: <Hammer size={18} className="text-accent" />
    },
    {
      feature: "Stain Resistance",
      quartz: "Excellent. Completely impervious to liquids and acids.",
      quartzite: "Moderate-High. Resistant when sealed, but prone to staining/etching if seal wears off.",
      icon: <ShieldCheck size={18} className="text-accent" />
    },
    {
      feature: "Average Cost (Installed)",
      quartz: "$48 – $170 / sq ft. Extremely scalable options from entry-level to luxury.",
      quartzite: "$85 – $200+ / sq ft. Typically a premium luxury option with higher fabrication costs.",
      icon: <DollarSign size={18} className="text-accent" />
    }
  ];

  const faqs = [
    {
      q: "Which is more durable, quartz or quartzite?",
      a: "Both are exceptionally durable. Quartzite is technically harder on the Mohs scale (7-8 vs. 7 for quartz), making it slightly more scratch-resistant. However, quartz is more flexible due to the polymer resins, which makes it less brittle and less prone to edge chipping. Additionally, quartz is completely stain-resistant without any maintenance, whereas quartzite can stain if not regularly sealed."
    },
    {
      q: "Does quartzite need to be sealed?",
      a: "Yes. Quartzite is a natural, porous stone. It must be sealed upon installation and resealed annually (or every 6 months for heavy-use kitchens) to prevent oil, wine, and acidic liquids from penetrating the stone and causing permanent stains."
    },
    {
      q: "Can I place hot pans directly on quartz and quartzite?",
      a: "You can place hot pans on quartzite because it is a natural stone formed under intense volcanic heat. Quartz, however, will be damaged by direct contact with hot pans (above 300°F) because the resins holding the quartz crystals together will scorch, melt, or discolor. Always use trivets or hot pads on quartz."
    },
    {
      q: "Why is quartzite more expensive than quartz?",
      a: "Quartzite is a natural stone that must be quarried in blocks, sliced into slabs, and transported. Because it is extremely hard, it is difficult to cut and fabricate, requiring diamond-blade saws, advanced CNC machinery, and high labor hours, which drives up the cost. Quartz is manufactured under controlled conditions, making fabrication more predictable and less labor-intensive."
    },
    {
      q: "Which countertop is better for resale value?",
      a: "Both materials offer a fantastic return on investment and are highly sought after by home buyers. Quartz is extremely popular for its low-maintenance appeal, while quartzite attracts buyers looking for high-end, one-of-a-kind luxury features like the famous 'Taj Mahal' look. Your choice should depend on whether you prioritize easy maintenance (quartz) or unique natural beauty (quartzite)."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-accent/30 text-text-primary">
      <SEO 
        title="Quartz vs. Quartzite Countertops: 2026 Comparison Guide" 
        description="Confused by quartz vs. quartzite? Learn the key differences in cost, durability, hardness, heat resistance, sealing, and maintenance. Get your custom estimate."
        canonical="/quartz-vs-quartzite"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden border-b border-border-custom bg-gradient-to-b from-[#FAF9F6] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-[#F0EBE1] border border-border-custom px-4 py-2 rounded-full mb-8">
                  <Gem size={14} className="text-accent animate-pulse" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                    Material Buying Guide
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-6">
                  Quartz vs. <br />
                  <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">Quartzite</span>
                </h1>

                <p className="text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  They sound identical, but they are completely different. Learn the trade-offs between engineered convenience and natural stone luxury before you buy.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary px-10 py-5 text-lg font-bold group shadow-2xl shadow-accent/20"
                  >
                    Estimate My Project &rarr;
                  </button>
                  <Link to="/quartz-kitchen-countertops" className="btn-outline px-10 py-5 text-lg font-bold">
                    Browse Quartz Slabs
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group border border-border-custom"
              >
                <img 
                  src={heroImg} 
                  alt="Modern kitchen with quartz and quartzite countertop finishes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Answer-First Section */}
      <section className="py-12 bg-background border-b border-border-custom">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 md:p-12 rounded-[2.5rem] border border-border-custom shadow-sm"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center shrink-0">
              <HelpCircle className="text-accent" size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2 uppercase tracking-wide">Quick Answer</h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-tight">
                <strong>Quartz</strong> is an engineered stone made of natural crystals bound with resin, rendering it completely <strong>non-porous and maintenance-free</strong> (no sealing required). <strong>Quartzite</strong> is 100% natural stone quarried from the earth, offering one-of-a-kind organic aesthetics and high heat resistance, but <strong>requires annual sealing</strong> and is more expensive to purchase and fabricate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The Comparison Matrix</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Compare the core performance specs side-by-side to make the right choice for your kitchen.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-border-custom shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom w-1/4">Key Spec</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-3/8 bg-accent/5">Quartz (Engineered)</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-3/8">Quartzite (Natural)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    <td className="py-6 px-8 font-bold text-text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center">
                        {row.icon}
                      </div>
                      {row.feature}
                    </td>
                    <td className="py-6 px-8 text-sm text-gray-600 bg-accent/5/30 font-medium leading-relaxed">{row.quartz}</td>
                    <td className="py-6 px-8 text-sm text-gray-600 font-medium leading-relaxed">{row.quartzite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Visual Side-by-Side Cards */}
      <section className="py-24 bg-[#FAF9F6] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Quartz Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[3rem] p-10 shadow-xl border border-border-custom flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 border border-border-custom">
                  <img src={quartzImg} alt="Engineered Quartz Slab close-up" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Engineered Performance</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">Quartz Countertops</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Perfect for busy families, rental properties, and modern apartments. Because it is engineered using raw stone crystals fused with polymer resins, it is non-porous. Spilled coffee, red wine, food coloring, and oil wipe away with soap and water. 
                </p>
                <ul className="space-y-3 mb-8">
                  {["Zero maintenance (no sealing ever)", "Stain & acid proof", "Color consistency across slabs", "More affordable edge customizability"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-text-primary">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                        <Check size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => openCalculator()}
                className="btn-primary w-full h-14"
              >
                Estimate Quartz Cost
              </button>
            </motion.div>

            {/* Quartzite Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[3rem] p-10 shadow-xl border border-border-custom flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 border border-border-custom">
                  <img src={quartziteImg} alt="Natural Taj Mahal Quartzite Slab close-up" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Natural Luxury</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">Quartzite Countertops</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Best for custom design builds, high-end architectural aesthetics, and homeowners who appreciate the rustic, one-of-a-kind movement of natural geological formations. It handles thermal shock (hot pans) beautifully, but requires care to avoid staining.
                </p>
                <ul className="space-y-3 mb-8">
                  {["100% natural, unique patterns", "Excellent heat resistance", "Deeper organic translucency", "Mohs hardness 7-8 (extremely hard)"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-text-primary">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                        <Check size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                to="/contact" 
                className="btn-outline w-full h-14 flex items-center justify-center"
              >
                Inquire About Natural Slabs
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* High-Contrast Info Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Critical Trade-Offs to Consider</h2>
              
              <div className="space-y-8">
                
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-red-500/5 flex items-center justify-center text-red-500 shrink-0">
                    <Flame size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">The Heat Factor</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      If you're used to sliding boiling pots off the stove directly onto your countertop, <strong>quartzite is your winner</strong>. Fused resins in quartz will burn, leave ring marks, or discolour under high heat. If you choose quartz, you must build the habit of using trivets.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/5 flex items-center justify-center text-blue-500 shrink-0">
                    <Droplets size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">The Maintenance Factor</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Tenants, kids, and busy lifestyles often mean countertop spills sit overnight. <strong>Quartz is virtually bulletproof</strong> here. If you choose quartzite, wine, lemon juice, or vinegar spilled on a worn seal can seep into the pores and etch or stain the natural stone.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/5 flex items-center justify-center text-yellow-600 shrink-0">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">The Budget Factor</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Quartzite is a very hard stone, which means fabricating cutouts (sink, faucet holes) and edge profiles requires specialized tools and longer labor hours. Combined with natural slab procurement costs, <strong>quartzite averages 20% to 50% more expensive</strong> installed than standard quartz.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-[#1A1A1A] p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden w-full">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent opacity-10 blur-[80px]" />
              <h3 className="text-3xl font-bold mb-6 tracking-tight italic">Which is right for you?</h3>
              <p className="text-gray-400 mb-10 leading-relaxed">
                We generally recommend <strong>Quartz</strong> for active family kitchens, rental properties, and modern renovations where you want a worry-free, easy-to-clean countertop.
              </p>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Choose <strong>Quartzite</strong> only if you are willing to manage annual sealing, and specifically want the prestige and one-of-a-kind natural patterns (like Taj Mahal, Sea Pearl, or Macaubas).
              </p>
              <div className="border-t border-white/10 pt-8 mt-4 space-y-4">
                <button 
                  onClick={() => openCalculator()}
                  className="btn-primary w-full h-16 text-lg font-bold flex items-center justify-center gap-3"
                >
                  Start Instant Calculator <ArrowRight size={20} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-[#FAF9F6] border-t border-border-custom">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-medium">Clear answers to help you navigate quartz vs. quartzite countertops.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[2rem] border border-border-custom overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-8 text-left hover:bg-accent/5 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-lg font-bold tracking-tight">{faq.q}</span>
                  <ChevronDown size={24} className={cn("text-accent transition-transform duration-300", openFaq === i && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-8 pt-0 text-gray-500 font-medium leading-relaxed border-t border-border-custom italic bg-[#FAF9F6]/20">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase italic">
            Ready to get <span className="text-accent">Pricing</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium">
            Calculate exact quartz countertop fabrication and installation costs for your kitchen layout in 30 seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => openCalculator()}
              className="btn-primary px-16 py-8 text-2xl font-bold uppercase tracking-tighter shadow-2xl shadow-accent/20"
            >
              Start My Quote &rarr;
            </button>
            <Link to="/contact" className="px-16 py-8 bg-white/5 border border-white/10 rounded-full text-white text-2xl font-bold uppercase tracking-tighter hover:bg-white/10 transition-all">
              Consult an Expert &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
