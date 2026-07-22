import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { 
  Check, 
  X, 
  HelpCircle, 
  ChevronDown, 
  Layers, 
  ShieldCheck, 
  Sliders, 
  DollarSign, 
  ArrowRight,
  Sparkles,
  LayoutGrid
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';
import { cn } from '../lib/utils';

// Static image paths from /public/images
const shakerImg = "/images/white_shaker_no_island.png";
const flatPanelImg = "/images/gloss_white_no_island.png";
const heroImg = "/images/affordable_kitchen_hero.jpg";

export default function FlatPanelVsShakerCabinets() {
  const navigate = useNavigate();
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const comparisonData = [
    {
      feature: "Design Profile",
      shaker: "Recessed center panel with standard 2.5\" or narrow 3/4\" (Slim Shaker) outer frame",
      flatPanel: "Completely flat, seamless flat slab surface with zero profile lines or recessed details",
      icon: <Layers size={18} className="text-accent" />
    },
    {
      feature: "Architectural Style",
      shaker: "Traditional, transitional, farmhouse, or classic Canadian craftsman homes",
      flatPanel: "Ultra-modern, contemporary, Scandinavian minimalist, or urban high-rise condos",
      icon: <LayoutGrid size={18} className="text-accent" />
    },
    {
      feature: "Maintenance & Cleaning",
      shaker: "Moderate. Dust and grease gather inside the 90° recessed corners, requiring regular detail wiping.",
      flatPanel: "Extremely Easy. Flat, smooth surface with zero crevices; wipes clean instantly in one swipe.",
      icon: <ShieldCheck size={18} className="text-accent" />
    },
    {
      feature: "Material Options",
      shaker: "Typically painted MDF, solid wood frames with veneer panels, or thermo-wrapped wood",
      flatPanel: "Textured melamine, high-gloss acrylic, natural wood veneers, or matte anti-fingerprint slabs",
      icon: <Sliders size={18} className="text-accent" />
    },
    {
      feature: "Average Cost",
      shaker: "Standard pricing tier. Exceptionally cost-effective in stock RTA sizes.",
      flatPanel: "Comparable baseline. Premium veneers or acrylic high-gloss finishes can increase custom pricing.",
      icon: <DollarSign size={18} className="text-accent" />
    }
  ];

  const faqs = [
    {
      q: "Which cabinet style is better for GTA resale value?",
      a: "Both styles offer excellent return on investment, but their success depends on the property type. For traditional Toronto semi-detached homes and family houses in Markham/Richmond Hill, Shaker cabinets are highly favored due to their warm, timeless transitional look. For downtown Toronto high-rise condos, Flat Panel (Slab) cabinets are preferred because they align with modern, compact space-saving aesthetics."
    },
    {
      q: "What is a 'Slim Shaker' cabinet door style?",
      a: "Slim Shaker is a modern adaptation of the classic shaker. Instead of the standard 2.5-inch border frame, a Slim Shaker has a very narrow 3/4-inch frame. This creates a refined, transitional profile that bridges the gap between traditional shaker warmth and modern slab minimalism."
    },
    {
      q: "Are high-gloss flat panel cabinets hard to keep fingerprint-free?",
      a: "Standard high-gloss acrylic flat-panel cabinets can show fingerprint oils and smudges under bright light. However, we offer modern matte flat-panel finishes with anti-fingerprint coating technology that resists oils and smudges, making them ideal for households with children."
    },
    {
      q: "Which quartz countertop looks best with flat panel vs. shaker cabinets?",
      a: "Shaker cabinets pair beautifully with traditional, warm-veined quartz like *Calacatta Gold* or textured concrete styles. Flat Panel cabinets pair best with sleek, solid pure white quartz, bold solid greys, or dramatic mitered waterfall islands with dark charcoal or black veining to create high-contrast modernism."
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
        title="Flat Panel (Slab) vs. Shaker Cabinets Toronto | Design Comparison" 
        description="Choosing between Flat Panel slab or classic Shaker kitchen cabinets? Compare cost, maintenance, design styles, and popular quartz pairings."
        canonical="/flat-panel-vs-shaker-cabinets"
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
                  <Sparkles size={14} className="text-accent" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                    Cabinet Style Guide
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-6">
                  Flat Panel vs. <br />
                  <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">Shaker</span> Cabinets
                </h1>

                <p className="text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Deciding between clean modern slab fronts or classic recessed frames? Compare cleaning maintenance, architectural resale value, and quartz pairings before ordering.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigate('/kitchen-cabinet-estimator')}
                    className="btn-primary px-10 py-5 text-lg font-bold group shadow-2xl shadow-accent/20"
                  >
                    Estimate Cabinet Layout &rarr;
                  </button>
                  <Link to="/10x10-kitchen-cabinets-toronto" className="btn-outline px-10 py-5 text-lg font-bold">
                    View 10×10 Package
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
                  alt="Modern flat panel and shaker style kitchen cabinets"
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
              <h3 className="text-lg font-bold text-text-primary mb-2 uppercase tracking-wide">Quick Summary</h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-tight">
                Choose **Shaker Cabinets** if you want a warm, timeless look that fits traditional or transitional homes and matches veined marble-look quartz. Choose **Flat Panel (Slab) Cabinets** if you prefer a sleek, ultra-modern condo aesthetic, want the easiest possible surface to wipe clean, or plan to build a handleless kitchen.
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
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Compare core design and cleaning specifications side-by-side.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-border-custom shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom w-1/4">Key Spec</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-3/8 bg-accent/5">Shaker (Transitional)</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-3/8">Flat Panel (Modern Slab)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    <td className="py-6 px-8 font-bold text-text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center">
                        {row.icon}
                      </div>
                      <span className="text-sm">{row.feature}</span>
                    </td>
                    <td className="py-6 px-8 text-sm text-gray-600 bg-accent/5/30 font-medium leading-relaxed">{row.shaker}</td>
                    <td className="py-6 px-8 text-sm text-gray-600 font-medium leading-relaxed">{row.flatPanel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Visual Option Cards */}
      <section className="py-24 bg-[#FAF9F6] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Shaker Card */}
            <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-border-custom flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 border border-border-custom">
                  <img src={shakerImg} alt="Classic White Shaker Cabinets" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Classic & Warm</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">Shaker Cabinets</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Perfect for traditional, transitional, and craftsman homes. Features a recessed center panel. Provides a warm, inviting architectural detail that never goes out of style.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Timeless architectural look", "Works with knobs or pull handles", "High appeal for traditional buyers", "Slim Shaker options for a modern touch"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-text-primary">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                        <Check size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={() => navigate('/kitchen-cabinet-estimator')} className="btn-primary w-full h-14">
                Estimate Shaker Package
              </button>
            </div>

            {/* Flat Panel Card */}
            <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-border-custom flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 border border-border-custom">
                  <img src={flatPanelImg} alt="Modern Gloss White Flat Panel Cabinets" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Sleek & Seamless</span>
                <h3 className="text-3xl font-bold mt-2 mb-4">Flat Panel Cabinets</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Best for high-end modern homes, minimal condos, and handleless kitchens. Wipes clean in one smooth motion with no dirt-collecting frame edges.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Zero crevices for grease or dust", "Ideal for seamless integrated appliances", "Pairs perfectly with waterfall islands", "Clean, handleless push-to-open designs"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-text-primary">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600">
                        <Check size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={() => navigate('/kitchen-cabinet-estimator')} className="btn-primary w-full h-14">
                Estimate Modern Slab Package
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-medium">Have questions about shaker vs flat panel cabinetry styles?</p>
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

      {/* Bottom CTA */}
      <section className="py-24 bg-[#1A1A1A] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Find Your Ideal Style Package</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-semibold">
            Calculate exact cabinet assembly and quartz countertop packages for your layout.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => navigate('/kitchen-cabinet-estimator')} className="btn-primary px-12 py-5 text-base font-bold shadow-xl shadow-accent/20">
              Calculate Package Cost &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
