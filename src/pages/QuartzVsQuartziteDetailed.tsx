import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { 
  Check, 
  X, 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  ShieldCheck, 
  Sliders, 
  DollarSign, 
  ArrowRight,
  Flame,
  Wrench,
  Droplets,
  Layers,
  Sparkle,
  Scale,
  Building,
  Users,
  Eye,
  CheckCircle2,
  XCircle,
  Camera
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';
import { cn } from '../lib/utils';

// Static image references
const quartzImg = "/images/quartz_slab.png";
const quartziteImg = "/images/granite_slab.png";
const heroImg = "/images/custom_luxury_kitchen_project.jpg";

export default function QuartzVsQuartziteDetailed() {
  const navigate = useNavigate();
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const comparisonFactors = [
    {
      factor: "Material Origin",
      quartz: "Engineered stone (~93% natural quartz mineral crystals bonded with ~7% polymer resins).",
      quartzite: "100% Natural quarried stone formed when sandstone undergoes heat & pressure underground.",
      icon: <Layers size={18} className="text-accent" />
    },
    {
      factor: "Appearance & Veining",
      quartz: "Predictable & uniform patterns across slabs. Matches catalog samples precisely.",
      quartzite: "1-of-1 Natural movement with wild, organic variations. No two slabs are ever identical.",
      icon: <Eye size={18} className="text-accent" />
    },
    {
      factor: "Stain Resistance & Porosity",
      quartz: "100% Non-porous resin matrix. Completely immune to wine, coffee, juice, and oil stains.",
      quartzite: "Porous natural stone. Requires sealing to prevent liquids from soaking into microscopic pores.",
      icon: <Droplets size={18} className="text-accent" />
    },
    {
      factor: "Heat Exposure & Tolerance",
      quartz: "Heat-resistant up to ~300°F. Requires trivets or hot pads for boiling pots/pans to avoid thermal shock.",
      quartzite: "Extreme heat resistance. Can handle direct high heat from stove burners without scorch marks.",
      icon: <Flame size={18} className="text-accent" />
    },
    {
      factor: "Sealing & Maintenance",
      quartz: "Zero chemical sealing required ever. Wipes clean with simple warm soapy water.",
      quartzite: "Requires periodic chemical sealing every 1 to 2 years to maintain stain barrier.",
      icon: <ShieldCheck size={18} className="text-accent" />
    },
    {
      factor: "Slab Selection Process",
      quartz: "Select easily via digital catalogs or small physical samples. Guaranteed color consistency.",
      quartzite: "Requires visiting a local stone slab yard to inspect and approve the exact physical slab.",
      icon: <Sliders size={18} className="text-accent" />
    },
    {
      factor: "Typical Toronto Cost (Installed)",
      quartz: "$48 – $120 / sq ft installed (Group 1 solid up to Group 3 luxury Calacatta veined).",
      quartzite: "$95 – $220+ / sq ft installed (Higher material rarity & specialized diamond fabrication).",
      icon: <DollarSign size={18} className="text-accent" />
    },
    {
      factor: "Rental Property Suitability",
      quartz: "Highest Suitability. Landlords get zero maintenance calls and bulletproof tenant durability.",
      quartzite: "Low Suitability. High risk of tenant staining if periodic sealing is neglected.",
      icon: <Building size={18} className="text-accent" />
    },
    {
      factor: "Busy Family Kitchen Suitability",
      quartz: "Excellent. Kid-friendly, wine-proof, turmeric-proof, and easy 5-second wipe down.",
      quartzite: "Good, provided the surface is kept sealed and acidic spills are wiped promptly.",
      icon: <Users size={18} className="text-accent" />
    }
  ];

  const faqs = [
    {
      q: "Is Quartz or Quartzite better for a Toronto kitchen?",
      a: "Neither material is universally 'better'—they serve different priorities. Quartz is better if you prioritize predictable color, zero sealing, stain resistance against kid spills, rental durability, and controlled costs. Quartzite is better if you prioritize 1-of-1 natural stone uniqueness, extreme heat tolerance, and are willing to accept periodic sealing and higher pricing."
    },
    {
      q: "Why is Quartzite generally more expensive than Quartz?",
      a: "Quartzite is a natural metamorphic rock quarried from mountains in limited quantities. It is extremely hard (harder than granite), making it expensive to quarry, transport, and cut with specialized diamond waterjet tools. Engineered quartz is manufactured in controlled facilities with standardized material yields."
    },
    {
      q: "Does Quartzite stain easily if not sealed?",
      a: "Yes. Raw quartzite contains natural microscopic pores. If unsealed, dark liquids like red wine, soy sauce, or coffee can penetrate the surface and cause permanent discoloration. Proper penetrating stone sealers applied every 1–2 years prevent this."
    },
    {
      q: "Why does Engineered Quartz require trivets for hot pans?",
      a: "Quartz slabs contain ~7% polymer resins that bond the quartz crystals together. While the stone itself is fireproof, placing a red-hot 500°F pan directly onto quartz can cause localized thermal shock or resin discoloration. Using trivets protects the finish long-term."
    },
    {
      q: "Can I inspect physical slabs before fabrication at Quartz International?",
      a: "Yes! For both quartz and quartzite, we offer full-size slab viewings at our partner brand distribution centers across Toronto, Vaughan, and Mississauga (including Caesarstone, Silestone, Kasa Quartz, and Lucent Quartz)."
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
        title="Quartz vs. Quartzite Countertops Toronto | Cost & Maintenance Guide" 
        description="Unbiased comparison of Quartz vs Quartzite for Toronto kitchens: Cost per sq ft, zero sealing vs natural variation, heat tolerance, and family durability."
        canonical="/quartz-vs-quartzite-countertops-toronto"
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
                  <Scale size={14} className="text-accent" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                    Unbiased Material Comparison
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.98] mb-6">
                  Quartz <span className="text-gray-400 font-light">vs.</span> <br />
                  <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">Quartzite</span> <br />
                  Countertops
                </h1>

                <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Cost, maintenance, heat resistance, and best use for Toronto kitchens. Learn the key differences between man-made engineered quartz and 100% natural quartzite.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary px-10 py-5 text-lg font-bold group shadow-2xl shadow-accent/20"
                  >
                    Estimate Quartz Package &rarr;
                  </button>
                  <Link to="/cost" className="btn-outline px-10 py-5 text-lg font-bold">
                    View Quartz Pricing
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2 relative w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group border border-border-custom bg-gray-50"
              >
                <img 
                  src={heroImg} 
                  alt="Quartz vs Quartzite countertop comparison in modern luxury Toronto kitchen"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Clear Distinction</p>
                  <p className="text-sm font-semibold text-text-primary">Quartz offers zero sealing and predictable color. Quartzite offers 1-of-1 natural stone art.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Answer-First / Summary Banner */}
      <section className="py-12 bg-background border-b border-border-custom">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 md:p-12 rounded-[2.5rem] border border-border-custom shadow-sm"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
              <Scale className="text-accent" size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2 uppercase tracking-wide">The Bottom Line Recommendation</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Neither stone is universally better. Choose <strong>Engineered Quartz</strong> if you prioritize stain immunity, zero chemical sealing, predictable color matching, and controlled budgets ($48–$120/sq ft). Choose <strong>Natural Quartzite</strong> if you want 1-of-1 natural stone art and high heat resistance, and accept periodic sealing and higher pricing ($95–$220+/sq ft).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Side-by-Side Comparison Matrix */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Quartz vs. Quartzite Comparison Table</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Compare technical performance, maintenance demands, and installed pricing in Toronto.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-border-custom shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom w-1/4">Comparison Factor</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-3/8 bg-accent/5">Engineered Quartz (Man-Made)</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-3/8">Natural Quartzite (Quarried)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {comparisonFactors.map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    <td className="py-6 px-8 font-bold text-text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        {row.icon}
                      </div>
                      <span className="text-sm">{row.factor}</span>
                    </td>
                    <td className="py-6 px-8 text-sm text-gray-700 bg-accent/5/30 font-bold leading-relaxed">{row.quartz}</td>
                    <td className="py-6 px-8 text-sm text-gray-500 font-medium leading-relaxed">{row.quartzite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Decision Guide: Who Should Buy What? */}
      <section className="py-24 bg-[#FAF9F6] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Which Material Is Right For You?</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Match your lifestyle and renovation priorities to the optimal stone choice.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Quartz Winner Box */}
            <div className="bg-white p-10 rounded-[3rem] border-2 border-accent/40 shadow-xl space-y-6 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-xs font-bold text-accent uppercase tracking-widest">
                <Sparkles size={14} /> Highly Recommended For
              </div>
              <h3 className="text-3xl font-black text-text-primary">Choose Engineered Quartz If:</h3>
              
              <ul className="space-y-4 text-sm font-semibold text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <span>You want <strong>100% zero chemical sealing</strong> and zero maintenance for life.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <span>You have kids, cook with turmeric/wine, or want <strong>stain-proof security</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <span>You want your installed slab to <strong>match catalog samples exactly</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                  <span>You are renovating a rental property or want a <strong>controlled renovation budget</strong>.</span>
                </li>
              </ul>

              <button 
                onClick={() => openCalculator()}
                className="btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider shadow-lg shadow-accent/20"
              >
                Estimate Quartz Package &rarr;
              </button>
            </div>

            {/* Quartzite Winner Box */}
            <div className="bg-white p-10 rounded-[3rem] border border-border-custom shadow-md space-y-6 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 px-4 py-1.5 rounded-full text-xs font-bold text-gray-600 uppercase tracking-widest">
                <Flame size={14} /> Recommended For Natural Stone Enthusiasts
              </div>
              <h3 className="text-3xl font-black text-text-primary">Choose Natural Quartzite If:</h3>

              <ul className="space-y-4 text-sm font-semibold text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>You insist on <strong>100% natural, 1-of-1 quarried stone art</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>You want <strong>extreme direct heat resistance</strong> for boiling pans without trivets.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>You enjoy visiting local stone yards to select your exact physical slab.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>You have a luxury budget ($95–$220+/sq ft) and don't mind periodic chemical sealing.</span>
                </li>
              </ul>

              <Link 
                to="/contact"
                className="btn-outline w-full py-4 text-sm font-bold uppercase tracking-wider text-center block"
              >
                Inquire About Natural Quartzite Slabs
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-medium">Have questions about choosing between Quartz and Quartzite?</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[2rem] border border-border-custom overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-8 text-left hover:bg-accent/5 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-base md:text-lg font-bold tracking-tight">{faq.q}</span>
                  <ChevronDown size={24} className={cn("text-accent transition-transform duration-300 shrink-0 ml-4", openFaq === i && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-8 pt-0 text-gray-500 font-medium leading-relaxed border-t border-border-custom italic bg-[#FAF9F6]/30 text-sm md:text-base">
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
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Find Your Perfect Stone</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-semibold">
            Calculate instant package costs for engineered quartz or inquire about local natural quartzite slab availability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => openCalculator()} className="btn-primary px-12 py-5 text-base font-bold shadow-xl shadow-accent/20">
              Calculate Package Cost &rarr;
            </button>
            <Link to="/10x10-kitchen-cabinets-toronto" className="btn-outline px-12 py-5 text-base font-bold text-white border-white hover:bg-white hover:text-text-primary">
              View 10×10 Package ($5,999) &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
