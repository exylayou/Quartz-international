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
  Zap,
  Camera
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';
import { cn } from '../lib/utils';

// Static image references
const heroImg = "/images/white_quartz_pairing.png";
const rangeFeatureImg = "/images/kitchen_and_quartz_hero.jpg";
const typicalUpgradeImg = "/images/typical_kitchen_upgrade.png";

export default function FullHeightQuartzBacksplash() {
  const navigate = useNavigate();
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const comparisonMatrix = [
    {
      feature: "Grout Lines & Dirt Crevices",
      tile: "Hundreds of porous grout lines that trap cooking oils, grease, and dust over time.",
      quartz: "100% Seamless. Zero grout lines to scrub, bleach, or re-seal ever.",
      icon: <Droplets size={18} className="text-accent" />
    },
    {
      feature: "Visual Continuity & Depth",
      tile: "Fragmented grid patterns that can make small kitchens feel cluttered.",
      quartz: "Continuous, uninterrupted stone veining that draws the eye upward for a spacious, luxury feel.",
      icon: <Layers size={18} className="text-accent" />
    },
    {
      feature: "Stain & Moisture Resistance",
      tile: "Grout discolors from tomato sauce, turmeric, and oil splatters near the range.",
      quartz: "Non-porous surface wipes completely clean with a soft cloth and warm water.",
      icon: <ShieldCheck size={18} className="text-accent" />
    },
    {
      feature: "Outdated 4-Inch Splash Contrast",
      tile: "4-inch granite/quartz strip paired with painted drywall creates a heavy 2000s look.",
      quartz: "Extends from countertop to upper cabinets or ceiling for a sleek 2026 architectural look.",
      icon: <Sliders size={18} className="text-accent" />
    },
    {
      feature: "Long-Term Resale Value",
      tile: "Tile patterns quickly go out of style and require messy wall demolition to change.",
      quartz: "Timeless solid slab aesthetic that increases buyer perceived value in GTA real estate.",
      icon: <DollarSign size={18} className="text-accent" />
    }
  ];

  const faqs = [
    {
      q: "Does Quartz International install tile backsplashes?",
      a: "No. We specialize exclusively in custom-fabricated, full-height quartz slab backsplashes. We do not install ceramic, porcelain, or mosaic tiles. Our focus is delivering 100% seamless quartz stone wall cladding that matches or contrasts your countertops."
    },
    {
      q: "How much does a full-height quartz backsplash cost in Toronto?",
      a: "A full-height quartz backsplash typically ranges from $1,800 to $4,500 installed, depending on linear footage, slab group (Group 1 solid vs. Group 3 Calacatta veined), number of electrical outlet cutouts, and whether it extends behind a range hood to the ceiling."
    },
    {
      q: "Can a full-height quartz backsplash be installed behind a gas range?",
      a: "Yes! Quartz is highly durable and heat-resistant under normal residential cooking conditions. We recommend maintaining standard manufacturer clearances (typically 3 to 6 inches from direct high-output gas burners) or utilizing a stainless heat guard strip directly above high-BTU professional burners."
    },
    {
      q: "How are electrical outlets cut out of solid quartz slabs?",
      a: "During our 3D laser measurement appointment, our technician maps the exact X/Y coordinates of every electrical box and light switch. In our Toronto fabrication facility, waterjet CNC cutters carve precision square cutouts into the 2cm or 3cm slab for a flush, custom fit."
    },
    {
      q: "Can I install a quartz backsplash without replacing my existing cabinets?",
      a: "Absolutely! Installing a full-height quartz backsplash alongside new quartz countertops is one of the highest-impact ways to modernize an older kitchen without touching original cabinet boxes or moving plumbing."
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
        title="Full-Height Quartz Backsplash Toronto | Seamless Slab Upgrade" 
        description="Replace dated 4-inch splashes and dirty tile grout with a full-height quartz backsplash in Toronto. Seamless, non-porous, and heat-resistant quartz slab wall cladding."
        canonical="/full-height-quartz-backsplash-toronto"
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
                    2026 Kitchen Design Trend
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.98] mb-6">
                  Full-Height <br />
                  <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">Quartz Backsplash</span> <br />
                  in Toronto
                </h1>

                <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  A cleaner, seamless upgrade without a full kitchen renovation. Eliminate dated 4-inch strips and dirty tile grout lines with solid quartz wall cladding.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary px-10 py-5 text-lg font-bold group shadow-2xl shadow-accent/20"
                  >
                    Estimate Backsplash & Countertop &rarr;
                  </button>
                  <Link to="/kitchen-cabinets-and-quartz-countertops-toronto" className="btn-outline px-10 py-5 text-lg font-bold">
                    View Package Bundles
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
                  alt="Full-height white veined quartz backsplash in modern Toronto kitchen"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Seamless Luxury</p>
                  <p className="text-sm font-semibold text-text-primary">Full-height Calacatta veined quartz running continuously from countertop to upper cabinetry.</p>
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
              <Sparkle className="text-accent" size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2 uppercase tracking-wide">Why Ditch the 4-Inch Splash & Tile Grout?</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Short 4-inch granite/quartz strips and tile grout lines are the #1 signal of an outdated kitchen. Extending solid quartz all the way to your upper cabinets or range hood creates a <strong>grout-free, hygienic surface</strong> that wipes clean in seconds while making your kitchen appear larger and higher-end.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialty Statement Box */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-8 md:p-12 border border-border-custom shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-3 py-1 rounded-full text-accent font-bold text-xs uppercase tracking-widest">
                <Wrench size={14} /> Specialty Installation Notice
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                We Install Full-Height Quartz Slabs — <span className="text-accent">Not Tile</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                At Quartz International, our fabrication facility is engineered specifically for 3D laser templating, precision CNC cutting, and installing solid 2cm and 3cm quartz wall slabs. We do not provide ceramic or porcelain tile installation.
              </p>
            </div>
            <button 
              onClick={() => openCalculator()}
              className="btn-primary py-4 px-8 text-sm font-bold uppercase tracking-wider shrink-0 w-full md:w-auto"
            >
              Get Quartz Backsplash Quote &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Quartz Backsplash vs. Traditional Tile</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Compare maintenance, hygiene, and aesthetic longevity side-by-side.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-border-custom shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom w-1/4">Key Factor</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-3/8 bg-accent/5">Full-Height Quartz (Seamless)</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-3/8">Traditional Tile & Grout</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {comparisonMatrix.map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    <td className="py-6 px-8 font-bold text-text-primary flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        {row.icon}
                      </div>
                      <span className="text-sm">{row.feature}</span>
                    </td>
                    <td className="py-6 px-8 text-sm text-gray-700 bg-accent/5/30 font-bold leading-relaxed">{row.quartz}</td>
                    <td className="py-6 px-8 text-sm text-gray-500 font-medium leading-relaxed">{row.tile}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Behind the Range Focal Wall */}
      <section className="py-24 bg-[#FAF9F6] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Behind-The-Range Feature</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The Ultimate Stove Focal Point</h2>
              <p className="text-gray-500 leading-relaxed">
                The space directly behind your cooktop or slide-in range endures the heaviest cooking splatter. Carrying a solid quartz slab behind your range all the way up to the chimney hood creates a dramatic architectural centerpiece.
              </p>
              
              <div className="space-y-4 pt-2">
                {[
                  { title: "Matching Flow", desc: "Use the same slab as your countertop for a clean, continuous monochromatic look." },
                  { title: "Contrasting Veined Accent", desc: "Pair solid white perimeter counters with a bold Calacatta gold or statuario veined slab behind the range." },
                  { title: "Heat Resistant & Safe", desc: "Quartz handles high heat from gas & induction cooktops under normal residential use." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-border-custom shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Check size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-text-primary">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-border-custom relative group bg-gray-50">
              <img 
                src={rangeFeatureImg} 
                alt="Quartz backsplash behind gas range hood" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-24 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Precision Installation Steps</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">How we template, cut, and fit full-height quartz backsplashes in GTA homes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Countertop Install", desc: "Base cabinets are leveled and quartz countertops are set." },
              { num: "02", title: "3D Laser Scan", desc: "Technician scans walls, upper cabinet bottoms, and outlet X/Y coordinates." },
              { num: "03", title: "Waterjet CNC Cut", desc: "Slab is precision cut with exact electrical box cutouts in our facility." },
              { num: "04", title: "Seamless Fitting", desc: "Slab is adhered flat to the wall with color-matched silicone joints." }
            ].map((step, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-8 rounded-[2.5rem] border border-border-custom relative flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-accent block mb-4">{step.num}</span>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-medium">Got questions about upgrading to a full-height quartz backsplash?</p>
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
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Transform Your Kitchen Wall</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-semibold">
            Upload your kitchen photos or dimensions to calculate an instant package range for countertops + full-height quartz backsplash.
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
