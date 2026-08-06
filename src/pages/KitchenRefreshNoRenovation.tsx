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
  Clock,
  Hammer,
  AlertOctagon,
  Wrench,
  CheckCircle2,
  XCircle,
  FileCheck,
  TrendingDown,
  Camera,
  Layers
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';
import { cn } from '../lib/utils';

// Static image references
const heroImg = "/images/townhome_kitchen_project.jpg";
const typicalUpgradeImg = "/images/typical_kitchen_upgrade.png";
const kitchenHeroImg = "/images/kitchen_and_quartz_hero.jpg";

export default function KitchenRefreshNoRenovation() {
  const navigate = useNavigate();
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const regretFactors = [
    {
      title: "Cost Overruns",
      regret: "Surprise change orders from plumbers, electricians, and framers ballooning quotes by 30%–50%.",
      solution: "Fixed package pricing (e.g. $5,999 10×10 turnkey bundle) with clear, upfront inclusions & exclusions.",
      icon: <DollarSign size={20} className="text-accent" />
    },
    {
      title: "Prolonged Construction Noise",
      regret: "Living in a dusty construction zone without a working kitchen for 3 to 6 months.",
      solution: "Fast 7 to 10 day turnaround from 3D laser measurement to final installation.",
      icon: <Clock size={20} className="text-accent" />
    },
    {
      title: "Contractor Subcontractor Fatigue",
      regret: "Managing 4 to 6 different trades (plumbers, tilers, drywallers) who blame each other for delays.",
      solution: "Single point of accountability. One turnkey team delivers pre-assembled cabinets and quartz.",
      icon: <Wrench size={20} className="text-accent" />
    },
    {
      title: "Plumbing & Gas Relocation Fees",
      regret: "Paying $12,000–$25,000 just to move sinks, gas stoves, or water lines a few feet.",
      solution: "Existing footprint preservation. Keep plumbing & electrical in place while refreshing doors & quartz.",
      icon: <Layers size={20} className="text-accent" />
    },
    {
      title: "Decision Paralysis",
      regret: "Drowning in thousands of tile grout, door hardware, and cabinet stain choices.",
      solution: "Curated Good/Better/Best design packages paired with proven quartz color combinations.",
      icon: <Sliders size={20} className="text-accent" />
    }
  ];

  const comparisonData = [
    {
      feature: "Plumbing & Electrical Footprint",
      refresh: "100% Preserved. Keeps sink, stove & fridge lines intact, saving $12,000–$25,000.",
      fullReno: "Relocated. Requires extensive wall opening, pipe re-routing & electrical permits.",
      winner: "refresh"
    },
    {
      feature: "Project Timeline",
      refresh: "7 to 10 Days total from final laser templating to complete countertop installation.",
      fullReno: "3 to 6 Months living out of takeout boxes in a dusty, noisy construction zone.",
      winner: "refresh"
    },
    {
      feature: "Trades & Subcontractors Needed",
      refresh: "1 Single Turnkey Team handling cabinet pre-assembly & quartz stone fabrication.",
      fullReno: "4 to 6 Independent Subcontractors (plumber, electrician, tiler, framer, painter).",
      winner: "refresh"
    },
    {
      feature: "Budget Predictability & Overruns",
      refresh: "High Certainty. Transparent starting package prices with defined scope.",
      fullReno: "High Risk. Unforeseen wall issues & change orders average 35% cost overruns.",
      winner: "refresh"
    },
    {
      feature: "Demolition & Environmental Impact",
      refresh: "Clean & Contained. Cabinet boxes and countertops replaced cleanly without structural dust.",
      fullReno: "Extensive Teardown. Drywall destruction, studs exposed, massive landfill disposal.",
      winner: "refresh"
    }
  ];

  const faqs = [
    {
      q: "What is a 'Controlled Kitchen Refresh'?",
      a: "A controlled kitchen refresh focuses on high-impact visual upgrades—replacing cabinets and quartz countertops—while keeping your existing sink, stove, and electrical locations unchanged. This eliminates 80% of typical renovation costs and cuts timelines from months down to days."
    },
    {
      q: "Can I get new cabinets and quartz without moving my plumbing?",
      a: "Yes! Over 85% of Toronto homeowners we serve choose to keep their existing kitchen layout footprint. We manufacture custom pre-assembled cabinet boxes and cut quartz slabs to fit your exact current walls."
    },
    {
      q: "How does fixed package pricing prevent budget overruns?",
      a: "We provide upfront fixed package baselines (such as our $5,999 10×10 cabinet and quartz bundle) with clearly defined inclusions. You know exactly what your cabinets, quartz, templating, and installation cost before we begin."
    },
    {
      q: "Does Quartz International perform structural wall removals or tile work?",
      a: "No. To protect your budget and timeline, we focus strictly on what we do best: factory cabinet assembly, 3D laser measurement, and quartz slab fabrication. We do not do tile backsplashes or structural wall removals, avoiding unnecessary trade delays."
    },
    {
      q: "Can I live in my home during the kitchen refresh?",
      a: "Yes! Because there is no major structural demolition or wall opening, your home remains clean and livable. Old countertops and cabinets are removed, and new cabinets and quartz are installed cleanly within 7 to 10 days."
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
        title="Kitchen Refresh Without a Full Renovation Toronto | Controlled & Stress-Free" 
        description="Upgrade your kitchen cabinets and quartz countertops in 7–10 days without structural demolition, cost overruns, or contractor headaches."
        canonical="/kitchen-refresh-without-full-renovation-toronto"
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
                    Controlled Kitchen Renovation
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.98] mb-6">
                  Kitchen Refresh <br />
                  <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">Without a Full</span> <br />
                  Renovation
                </h1>

                <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Upgrade your kitchen without turning your home into a construction project. Retain your layout, avoid cost overruns, and complete in 7–10 days.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary px-10 py-5 text-lg font-bold group shadow-2xl shadow-accent/20"
                  >
                    Estimate Refresh Package &rarr;
                  </button>
                  <Link to="/10x10-kitchen-cabinets-toronto" className="btn-outline px-10 py-5 text-lg font-bold">
                    View 10×10 Package ($5,999)
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
                  alt="Modern kitchen refresh with white shaker cabinets and quartz countertops"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Contained Scope Success</p>
                  <p className="text-sm font-semibold text-text-primary">Existing layout preserved. New plywood shaker cabinets & quartz tops installed in 8 days.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Answer-First / Value Statement Banner */}
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
              <Sparkles className="text-accent" size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2 uppercase tracking-wide">The "No-Regret" Renovation Strategy</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Full-scale remodeling often causes <strong>renovation regret</strong> due to ballooning budgets, contractor delays, and living in a dusty construction zone. By keeping your original plumbing and gas layout intact, you can focus 100% of your budget on high-impact materials: <strong>custom pre-assembled cabinets and solid quartz countertops</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5 Regret Factors We Eliminate */}
      <section className="py-24 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">5 Renovation Regrets We Eliminate</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">How our controlled workflow protects your home, wallet, and peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {regretFactors.map((item, idx) => (
              <div key={idx} className="bg-[#FAF9F6] p-6 rounded-[2rem] border border-border-custom flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-base mb-2 text-text-primary">{item.title}</h3>
                  <div className="space-y-3 text-xs">
                    <div className="bg-red-50 text-red-700 p-3 rounded-xl border border-red-100">
                      <span className="font-bold block mb-1">❌ Traditional Regret:</span>
                      {item.regret}
                    </div>
                    <div className="bg-green-50 text-green-800 p-3 rounded-xl border border-green-100 font-medium">
                      <span className="font-bold block mb-1">✅ Our Solution:</span>
                      {item.solution}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Controlled Scope Callout Box */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-8 md:p-12 border border-border-custom shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-3 py-1 rounded-full text-accent font-bold text-xs uppercase tracking-widest">
                <FileCheck size={14} /> Clear Boundaries & Transparency
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Contained Scope: <span className="text-accent">Zero Unexpected Extras</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We focus strictly on factory cabinet pre-assembly, 3D laser templating, and quartz slab fabrication. We do not offer tile work, plumbing line relocations, or structural wall teardowns—preventing scope creep and budget surprises.
              </p>
            </div>
            <button 
              onClick={() => openCalculator()}
              className="btn-primary py-4 px-8 text-sm font-bold uppercase tracking-wider shrink-0 w-full md:w-auto"
            >
              Get Instant Package Estimate &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Kitchen Refresh vs. Full Renovation</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Compare operational risk, timelines, and budget certainty side-by-side.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-border-custom shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom w-1/4">Key Metric</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-3/8 bg-accent/5">Contained Kitchen Refresh</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-3/8">Traditional Full Renovation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    <td className="py-6 px-8 font-bold text-text-primary text-sm">{row.feature}</td>
                    <td className="py-6 px-8 text-sm text-gray-700 bg-accent/5/30 font-bold leading-relaxed">{row.refresh}</td>
                    <td className="py-6 px-8 text-sm text-gray-500 font-medium leading-relaxed">{row.fullReno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Visual Workflow Steps */}
      <section className="py-24 bg-[#FAF9F6] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Fast 4-Step Refresh Workflow</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">How we complete your kitchen transformation in under 10 days.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Online Estimate", desc: "Submit your rough layout measurements or photos for a preliminary package range." },
              { num: "02", title: "Showroom & Color Select", desc: "Choose your door style (Shaker or Flat Panel) and quartz slab group." },
              { num: "03", title: "3D Laser Templating", desc: "Our technician measures your existing walls with sub-millimeter precision." },
              { num: "04", title: "Clean Installation", desc: "New cabinets and quartz are installed cleanly within 7 to 10 days." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-border-custom flex flex-col justify-between shadow-sm">
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
            <p className="text-gray-500 font-medium">Have questions about refreshing your kitchen without a full renovation?</p>
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
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Upgrade Without Construction Regret</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-semibold">
            Calculate exact cabinet assembly and quartz countertop packages for your existing layout.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button onClick={() => openCalculator()} className="btn-primary px-12 py-5 text-base font-bold shadow-xl shadow-accent/20">
              Calculate Package Cost &rarr;
            </button>
            <Link to="/design-inspiration" className="btn-outline px-12 py-5 text-base font-bold text-white border-white hover:bg-white hover:text-text-primary">
              <Camera size={18} className="inline mr-2" /> Upload Kitchen Photos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
