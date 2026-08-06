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
  AlertTriangle,
  Building,
  Users,
  Utensils,
  Sun,
  Home,
  CheckCircle2,
  XCircle,
  Camera,
  HeartHandshake
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';
import { cn } from '../lib/utils';

// Static image references
const heroImg = "/images/family_kitchen_project.png";
const luxuryImg = "/images/custom_luxury_kitchen_project.jpg";
const kitchenHeroImg = "/images/kitchen_and_quartz_hero.jpg";

export default function MostDurableCountertops() {
  const navigate = useNavigate();
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<number>(0);

  const useCases = [
    {
      id: "families",
      title: "Families with Children",
      subtitle: "Spill-proof, kid-tested, and stain-resistant",
      icon: <Users size={24} className="text-accent" />,
      tagline: "No Stress Over Spilled Juice, Food Dye, or Markers",
      description: "Kids spill. From grape juice and food coloring to dropped metal utensils, engineered quartz is non-porous and impact-resistant. Unlike marble or granite, liquids cannot penetrate the surface to create permanent dark ring stains.",
      highlights: [
        "Non-porous resin matrix stops liquids at the surface",
        "Resists stubborn stains (berries, food dye, markers)",
        "Zero sealing required to maintain stain protection",
        "Wipes clean in 5 seconds with warm water & mild soap"
      ],
      recommendedTier: "Group 1 or 2 Bright White / Soft Grey Quartz"
    },
    {
      id: "rentals",
      title: "Rental Properties & Landlords",
      subtitle: "Hard-wearing, predictable cost, and easily replaceable",
      icon: <Building size={24} className="text-accent" />,
      tagline: "Protect Your Investment Against Tenant Neglect",
      description: "Tenants rarely care for marble or natural stone properly. Quartz provides property managers and investors with a bulletproof surface that resists abuse, maintains high resale value, and offers consistent slab availability for unit replacements.",
      highlights: [
        "Eliminates tenant maintenance (no sealing calls)",
        "Stain-resistant against coffee, wine, and cooking oil",
        "Consistent batch patterns for multi-unit replacements",
        "Standardized package pricing controls renovation budget"
      ],
      recommendedTier: "Group 1 Durable Solid White or Pebble Grey Quartz"
    },
    {
      id: "cooks",
      title: "Heavy Daily Cooking",
      subtitle: "Acid, oil, and spice resistance for active kitchens",
      icon: <Utensils size={24} className="text-accent" />,
      tagline: "Resists Turmeric, Tomato Acid, Wine & Hot Oils",
      description: "If you cook daily with pungent spices, vinegars, citrus juices, or hot oils, natural stones like marble will acid-etch and pit within weeks. Engineered quartz is completely inert to kitchen acids and spices.",
      highlights: [
        "Zero acid etching from lemon juice, vinegar, or wine",
        "Turmeric and curry oil wipe off cleanly without staining",
        "Smooth non-porous surface prevents bacterial buildup",
        "Pairs with full-height quartz backsplash behind the stove"
      ],
      recommendedTier: "Group 2 Mid-Tone Concrete or Veined Calacatta Quartz"
    },
    {
      id: "low-maintenance",
      title: "Low-Maintenance Homeowner",
      subtitle: "Zero sealing, zero special stone cleaners, pure simplicity",
      icon: <ShieldCheck size={24} className="text-accent" />,
      tagline: "Never Chemical Seal or Special Soap Your Slabs",
      description: "Natural granite and quartzite require annual chemical sealing and specialized pH-neutral stone cleaners. Quartz requires zero sealing ever. A microfiber cloth and soapy water are all you ever need.",
      highlights: [
        "100% maintenance-free for life (zero chemical sealers)",
        "No delicate marble polishes or special stone soaps needed",
        "Hygienic NSF-certified food preparation surface",
        "Backed by long-term manufacturer warranties"
      ],
      recommendedTier: "Any Group 1, 2, or 3 Quartz Slab"
    },
    {
      id: "luxury-marble",
      title: "Luxury Marble-Look Buyers",
      subtitle: "Calacatta elegance without marble's fragile maintenance",
      icon: <Sparkles size={24} className="text-accent" />,
      tagline: "Get Italian Calacatta Beauty Without Fragile Etching",
      description: "Love the dramatic veining of Italian Calacatta marble but hate the thought of permanent stains and scratches? Modern veined quartz recreates marble's high-definition movement on a durable, stain-proof slab.",
      highlights: [
        "Dramatic bookmatched veining and waterfall island options",
        "Resists acid etching that ruins natural marble surfaces",
        "Consistently flawless slab quality without natural fissures",
        "Fraction of the maintenance cost of real marble"
      ],
      recommendedTier: "Group 3 Calacatta Gold or Statuario Quartz"
    },
    {
      id: "condos",
      title: "Condos & Small Kitchens",
      subtitle: "Reflective, compact footprint, and scratch-resistant",
      icon: <Home size={24} className="text-accent" />,
      tagline: "Maximize Natural Light & Durability in High-Traffic Spaces",
      description: "In compact downtown Toronto condos, countertops take heavy multi-purpose wear as prep stations, dining tables, and work desks. Polished quartz reflects light to open up small spaces while resisting scratch marks.",
      highlights: [
        "Polished finish reflects light to expand visual space",
        "High scratch resistance against heavy daily laptop/prep use",
        "Slim 2cm profile option ideal for modern condo cabinetry",
        "Fast turnarounds for tight condo elevator booking windows"
      ],
      recommendedTier: "Group 1 Pure White or Group 2 Gloss Quartz"
    }
  ];

  const materialDurabilityMatrix = [
    {
      material: "Engineered Quartz",
      stainResist: "Excellent (Non-porous)",
      acidResist: "Excellent (No etching)",
      sealingReq: "None (Ever)",
      scratchResist: "High (7 Mohs)",
      heatGuidance: "Use Trivet (Avoid thermal shock)",
      overallScore: "9.5 / 10",
      highlight: true
    },
    {
      material: "Natural Granite",
      stainResist: "Moderate (Requires Sealer)",
      acidResist: "Good",
      sealingReq: "Every 1–2 Years",
      scratchResist: "High (6–7 Mohs)",
      heatGuidance: "High Heat Resistant",
      overallScore: "8.0 / 10",
      highlight: false
    },
    {
      material: "Natural Marble",
      stainResist: "Poor (Highly Porous)",
      acidResist: "Poor (Etches Quickly)",
      sealingReq: "Every 6 Months",
      scratchResist: "Low (3–4 Mohs)",
      heatGuidance: "Moderate Heat",
      overallScore: "5.5 / 10",
      highlight: false
    },
    {
      material: "Laminate / Formica",
      stainResist: "Fair",
      acidResist: "Good",
      sealingReq: "None",
      scratchResist: "Poor (Scratches Easily)",
      heatGuidance: "Burns & Melts Easily",
      overallScore: "4.0 / 10",
      highlight: false
    }
  ];

  const faqs = [
    {
      q: "Can I put hot pots and pans directly on quartz countertops?",
      a: "No countertop stone should be subjected to extreme thermal shock. While quartz is heat-resistant up to ~300°F under normal cooking conditions, placing a red-hot cast iron skillet directly from a 500°F stove burner can cause localized thermal shock or discoloration in the resin binder. We always recommend using hot pads or trivets for boiling pots and pans."
    },
    {
      q: "Why is quartz more durable than natural marble or granite?",
      a: "Quartz is engineered by combining ~93% natural quartz mineral crystals with ~7% high-performance polymer resins. This process eliminates the microscopic natural pores, pits, and structural fissures found in quarried granite and marble—making quartz 100% non-porous and impervious to stains."
    },
    {
      q: "Do quartz countertops ever need to be sealed?",
      a: "Never. Because quartz is engineered to be non-porous, sealants cannot penetrate the surface and are never required. This saves you hundreds of dollars in chemical sealers and hours of maintenance over the life of your kitchen."
    },
    {
      q: "Will red wine, turmeric, or coffee stain white quartz?",
      a: "No. Under normal household conditions, red wine, turmeric, coffee, and food dyes stay on the surface and wipe off easily with warm water and a mild dish soap. For dried-on spills, a non-abrasive sponge with Bar Keepers Friend will clean the surface cleanly without scratching."
    },
    {
      q: "Which quartz slab color hides daily wear and tear best?",
      a: "Mid-tone veined quartz (such as Calacatta patterns with grey/gold veining) or subtle textured concrete grey quartz hide dust, micro-smudges, and fingerprints better than solid piano-black or solid stark-white countertops."
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
        title="Most Durable Countertops for Busy Toronto Kitchens | Quartz Guide" 
        description="Ranked durability guide for Toronto kitchens: Why non-porous quartz beats marble, granite, and laminate for stain resistance, zero sealing, and real family life."
        canonical="/most-durable-countertops-busy-toronto-kitchens"
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
                  <ShieldCheck size={14} className="text-accent" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                    Practical Longevity Guide
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.98] mb-6">
                  Most Durable <br />
                  <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">Countertops</span> for <br />
                  Busy Toronto Kitchens
                </h1>

                <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Sell durability—not fleeting fashion trends. Discover why non-porous engineered quartz is the #1 low-maintenance stone for real family life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary px-10 py-5 text-lg font-bold group shadow-2xl shadow-accent/20"
                  >
                    Estimate Durable Quartz &rarr;
                  </button>
                  <Link to="/cost" className="btn-outline px-10 py-5 text-lg font-bold">
                    View Pricing Tiers
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
                  alt="Busy family kitchen with durable quartz countertops and white shaker cabinets"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Kid & Spill Tested</p>
                  <p className="text-sm font-semibold text-text-primary">100% Non-porous quartz surface wipes clean in seconds with zero chemical sealing.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Heat & Maintenance Guidance Banner */}
      <section className="py-12 bg-background border-b border-border-custom">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 md:p-12 rounded-[2.5rem] border border-border-custom shadow-sm"
          >
            <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-600">
              <Flame size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2 uppercase tracking-wide">Honest Heat Guidance for Buyers</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Quartz is extremely durable against stains and scratches, but like all stone surfaces, <strong>it must be protected against extreme thermal shock</strong>. Placing boiling pots directly from a 500°F stove burner can discolor resin binders. Always use hot trivets or pads under boiling pans to ensure your quartz remains flawless for decades.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Customer Use Cases */}
      <section className="py-24 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">6 Real-Life Kitchen Use Cases</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Click your lifestyle scenario to see why quartz matches your exact daily routine.</p>
          </div>

          {/* Use Case Tabs */}
          <div className="flex overflow-x-auto gap-3 pb-6 mb-12 no-scrollbar justify-start md:justify-center">
            {useCases.map((uc, idx) => (
              <button
                key={uc.id}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "px-6 py-4 rounded-2xl border text-xs font-bold uppercase tracking-wider flex items-center gap-3 shrink-0 transition-all duration-300",
                  activeTab === idx 
                    ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-lg" 
                    : "bg-[#FAF9F6] text-text-primary border-border-custom hover:border-accent"
                )}
              >
                {uc.icon}
                <span>{uc.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Card Display */}
          <div className="bg-[#FAF9F6] border border-border-custom rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full text-xs font-bold text-accent uppercase tracking-widest">
                  {useCases[activeTab].subtitle}
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight">
                  {useCases[activeTab].tagline}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {useCases[activeTab].description}
                </p>

                <div className="space-y-3 pt-2">
                  {useCases[activeTab].highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-text-primary">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0">
                        <Check size={12} />
                      </div>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-8 rounded-[2.5rem] border border-border-custom shadow-md space-y-6 text-center lg:text-left">
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Recommended Option</span>
                  <p className="text-xl font-bold text-accent">{useCases[activeTab].recommendedTier}</p>
                </div>
                
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  We supply and install non-porous quartz slabs from leading brands like Caesarstone, Silestone, Kasa Quartz, Lucent Quartz, and TCE Stone.
                </p>

                <button 
                  onClick={() => openCalculator()}
                  className="btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider shadow-lg shadow-accent/20"
                >
                  Estimate For This Use Case &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Durability Matrix Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Countertop Durability Ranking Matrix</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Compare stain resistance, sealing demands, and acid etching across popular kitchen stones.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-border-custom shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom w-1/5">Material</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/5 bg-accent/5">Stain Resistance</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/5">Acid Etching</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/5">Sealing Requirement</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/5">Overall Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {materialDurabilityMatrix.map((row, i) => (
                  <tr key={i} className={cn("hover:bg-[#FAF9F6]/50 transition-colors", row.highlight && "bg-accent/5/40 font-bold")}>
                    <td className="py-6 px-8 text-sm font-bold text-text-primary flex items-center gap-2">
                      {row.highlight && <Sparkles size={16} className="text-accent" />}
                      <span>{row.material}</span>
                    </td>
                    <td className="py-6 px-8 text-sm text-gray-700 bg-accent/5/30 font-semibold">{row.stainResist}</td>
                    <td className="py-6 px-8 text-sm text-gray-600 font-medium">{row.acidResist}</td>
                    <td className="py-6 px-8 text-sm text-gray-600 font-medium">{row.sealingReq}</td>
                    <td className="py-6 px-8 text-sm font-black text-accent">{row.overallScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white border-t border-border-custom">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-medium">Got questions about countertop durability and maintenance?</p>
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
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Invest in Long-Lasting Durability</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-semibold">
            Calculate instant pricing for durable quartz countertops and custom cabinet packages.
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
