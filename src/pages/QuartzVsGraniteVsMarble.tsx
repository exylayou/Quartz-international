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

// Static image paths from /public/images
const quartzImg = "/images/pure_white_slab.png";
const graniteImg = "/images/granite_slab.png";
const marbleImg = "/images/marble_slab.png";
const heroImg = "/images/kitchen_and_quartz_hero.jpg";

export default function QuartzVsGraniteVsMarble() {
  const navigate = useNavigate();
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const comparisonData = [
    {
      feature: "Composition",
      quartz: "Engineered stone (~90-93% natural quartz bound with polymer resins & pigments)",
      granite: "100% natural igneous volcanic rock composed of quartz, feldspar, and mica minerals",
      marble: "100% natural metamorphic limestone, calcium carbonate composition with veining minerals",
      icon: <Layers size={18} className="text-accent" />
    },
    {
      feature: "Porosity & Sealing",
      quartz: "100% Non-porous. Never requires sealing.",
      granite: "Porous. Requires sealing every 12 to 24 months to prevent stains.",
      marble: "Highly Porous. Requires sealing every 3 to 6 months to prevent severe staining.",
      icon: <Droplets size={18} className="text-accent" />
    },
    {
      feature: "Heat Resistance",
      quartz: "Moderate. Scorches above 300°F due to resin composition (requires trivets).",
      granite: "Excellent. Extremely heat resistant (withstands hot pans directly).",
      marble: "Good. Handles heat well, but acidic thermal shock can accelerate damage.",
      icon: <Flame size={18} className="text-accent" />
    },
    {
      feature: "Scratch & Acid Etching",
      quartz: "Extremely high scratch resistance. Completely impervious to acids (vinegar/lemon).",
      granite: "Very high scratch resistance. Acid resistant (does not etch).",
      marble: "Low-Moderate scratch resistance. Extremely sensitive to acid etching (dulls instantly).",
      icon: <Hammer size={18} className="text-accent" />
    },
    {
      feature: "Stain Resistance",
      quartz: "Outstanding. Impervious to wine, coffee, and turmeric.",
      granite: "Moderate-High. Resistant only when properly sealed.",
      marble: "Low. Stains easily if liquids sit for even a few minutes.",
      icon: <ShieldCheck size={18} className="text-accent" />
    },
    {
      feature: "Average Cost (Installed)",
      quartz: "$48 – $170 / sq ft. Best entry-to-luxury options.",
      granite: "$50 – $120 / sq ft. Standard premium pricing.",
      marble: "$80 – $250+ / sq ft. High-end luxury pricing.",
      icon: <DollarSign size={18} className="text-accent" />
    }
  ];

  const faqs = [
    {
      q: "Which countertop is best for a busy family kitchen in Toronto?",
      a: "For active households with kids, busy home cooks, or rental units, Quartz is the undisputed winner. It is completely non-porous and maintenance-free, meaning lemon juice, turmeric, or red wine spills won't cause permanent stains. Granite is a solid second choice if you prioritize placing hot pans directly on the counter, whereas Marble is generally too delicate for a high-traffic family kitchen due to its tendency to scratch, stain, and etch."
    },
    {
      q: "What is acid etching on marble countertops?",
      a: "Acid etching occurs because marble is made of calcium carbonate, which reacts chemically when it comes into contact with acidic substances like lemon juice, vinegar, tomato sauce, or wine. The acid literally dissolves a tiny layer of the marble surface, leaving a dull, matte white spot (an 'etch mark') that looks like a stain but is actually physical damage to the stone. Sealing does not prevent etching; it only slows down staining."
    },
    {
      q: "Does granite really need to be sealed every year?",
      a: "Yes. Granite is a natural stone with tiny micro-pores. To test if your granite needs sealing, place a few drops of water on the surface. If the water absorbs and darkens the stone in under 10-15 minutes, the sealer has worn off and needs to be reapplied. Reapplying sealer takes about 10 minutes and is a simple wipe-on, wipe-off process."
    },
    {
      q: "Why is marble so much more expensive than quartz or granite?",
      a: "Marble is quarried in limited geological regions (like Carrara, Italy) and is softer and more brittle, making it harder to extract, ship, and fabricate without breakage. Additionally, its prestige and unique high-contrast white veining are highly coveted by custom architects and luxury builders, keeping demand and pricing exceptionally high."
    },
    {
      q: "Can I get a quartz countertop that looks exactly like Carrara or Calacatta marble?",
      a: "Absolutely. Modern quartz manufacturing uses high-resolution digital styling to print realistic, sweeping grey and gold veins throughout white quartz slabs. Brands like TCE Stone, Kstone, and Kasa offer marble-look quartz options that give you the exact luxury look of Italian marble but with the durability and lower cost of engineered quartz."
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
        title="Quartz vs. Granite vs. Marble Countertops Toronto | Comparison Guide" 
        description="Stuck choosing between quartz, granite, or marble countertops? Learn the critical differences in cost, durability, acid etching, sealing, and maintenance."
        canonical="/quartz-vs-granite-vs-marble-toronto"
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
                  <Gem size={14} className="text-accent" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                    GTA Stone Selection Guide
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-6">
                  Quartz vs. Granite <br />
                  vs. <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">Marble</span>
                </h1>

                <p className="text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Stuck between engineered convenience and natural geological beauty? Review the direct costs, tenant risks, and maintenance requirements for all three countertop surfaces.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary px-10 py-5 text-lg font-bold group shadow-2xl shadow-accent/20"
                  >
                    Calculate Countertop Costs &rarr;
                  </button>
                  <Link to="/kitchen-cabinet-estimator" className="btn-outline px-10 py-5 text-lg font-bold">
                    Calculate Package Deal
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
                  alt="Quartz, Granite, and Marble countertop installation options in Toronto"
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
                Choose <strong>Quartz</strong> for a bulletproof, zero-maintenance family kitchen. Choose <strong>Granite</strong> if you want 100% natural, heat-resistant stone and don't mind sealing it every 1–2 years. Choose <strong>Marble</strong> solely for its premium, unparalleled luxury look, provided you accept its high maintenance, scratching, and chemical etching.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Way Comparison Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Direct Side-by-Side Comparison</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">See how the three materials perform under daily kitchen use.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-border-custom shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom w-1/5">Key Attribute</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/4 bg-accent/5">Quartz (Engineered)</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/4">Granite (Natural igneous)</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/4">Marble (Natural metamorphic)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    <td className="py-6 px-8 font-bold text-text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center shrink-0">
                        {row.icon}
                      </div>
                      <span className="text-sm">{row.feature}</span>
                    </td>
                    <td className="py-6 px-8 text-xs text-gray-600 bg-accent/5/30 font-semibold leading-relaxed">{row.quartz}</td>
                    <td className="py-6 px-8 text-xs text-gray-500 font-medium leading-relaxed">{row.granite}</td>
                    <td className="py-6 px-8 text-xs text-gray-500 font-medium leading-relaxed">{row.marble}</td>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Quartz */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-border-custom flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6 border border-border-custom">
                  <img src={quartzImg} alt="Engineered White Quartz" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-black text-accent uppercase tracking-widest">Low Maintenance</span>
                <h3 className="text-2xl font-bold mt-1 mb-3">Engineered Quartz</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 font-medium">
                  Stain-proof and completely non-porous. Ideal for busy families, rental suites, and modern apartments. Offers uniform patterns and seamless matching.
                </p>
                <div className="space-y-2 border-t border-gray-50 pt-4 text-xs font-semibold text-gray-700 mb-6">
                  <div className="flex justify-between"><span>Sealing:</span><span className="text-green-600">Never</span></div>
                  <div className="flex justify-between"><span>Stain Risk:</span><span className="text-green-600">None</span></div>
                  <div className="flex justify-between"><span>Acid Etching:</span><span className="text-green-600">No</span></div>
                </div>
              </div>
              <button onClick={() => openCalculator()} className="btn-primary w-full py-4 text-sm">Select Quartz</button>
            </div>

            {/* Granite */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-border-custom flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6 border border-border-custom">
                  <img src={graniteImg} alt="Natural Granite Slab" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-black text-accent uppercase tracking-widest">Natural & Tough</span>
                <h3 className="text-2xl font-bold mt-1 mb-3">Natural Granite</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 font-medium">
                  Extremely heat and scratch resistant. Requires periodic sealing but offers organic earthy patterns that are highly unique.
                </p>
                <div className="space-y-2 border-t border-gray-50 pt-4 text-xs font-semibold text-gray-700 mb-6">
                  <div className="flex justify-between"><span>Sealing:</span><span>Every 1-2 Years</span></div>
                  <div className="flex justify-between"><span>Stain Risk:</span><span className="text-yellow-600">Low (when sealed)</span></div>
                  <div className="flex justify-between"><span>Acid Etching:</span><span className="text-green-600">No</span></div>
                </div>
              </div>
              <Link to="/contact" className="btn-outline w-full py-4 text-sm text-center">Inquire Granite</Link>
            </div>

            {/* Marble */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-border-custom flex flex-col justify-between shadow-sm">
              <div>
                <div className="aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6 border border-border-custom">
                  <img src={marbleImg} alt="Italian Carrara Marble" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-black text-accent uppercase tracking-widest">High End Luxury</span>
                <h3 className="text-2xl font-bold mt-1 mb-3">Italian Marble</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6 font-medium">
                  Stunning, classic high-contrast veining. Extremely porous, scratches easily, and reacts chemically to common food acids (etched rings).
                </p>
                <div className="space-y-2 border-t border-gray-50 pt-4 text-xs font-semibold text-gray-700 mb-6">
                  <div className="flex justify-between"><span>Sealing:</span><span className="text-red-500">Every 3-6 Months</span></div>
                  <div className="flex justify-between"><span>Stain Risk:</span><span className="text-red-500">High</span></div>
                  <div className="flex justify-between"><span>Acid Etching:</span><span className="text-red-500">Immediate</span></div>
                </div>
              </div>
              <Link to="/contact" className="btn-outline w-full py-4 text-sm text-center">Request Marble Slabs</Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-semibold">Make an informed decision for your Toronto home renovation.</p>
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

      {/* Footer CTA */}
      <section className="py-24 bg-[#1A1A1A] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Compare Layout Pricing in Seconds</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-semibold">
            Ready to remodel? Calculate exact installation and material costs for your specific kitchen counters online.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => openCalculator()} className="btn-primary px-12 py-5 text-base font-bold shadow-xl shadow-accent/20">
              Get Free Estimate &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
