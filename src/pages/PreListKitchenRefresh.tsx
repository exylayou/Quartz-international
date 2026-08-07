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
  TrendingUp,
  Clock,
  Home,
  Building,
  Briefcase,
  Award,
  CheckCircle2,
  XCircle,
  FileCheck,
  Phone,
  Calendar
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';
import { cn } from '../lib/utils';

// Static image references
const heroImg = "/images/kitchen_cabinets_toronto_hero.jpg";
const townhomeImg = "/images/townhome_kitchen_project.jpg";
const luxuryImg = "/images/custom_luxury_kitchen_project.jpg";

export default function PreListKitchenRefresh() {
  const navigate = useNavigate();
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const roiMatrix = [
    {
      metric: "Out-of-Pocket Investment",
      asIs: "$0",
      fullReno: "$45,000 – $60,000",
      refresh: "$5,999 – $9,500 (Fixed Package)",
      highlight: true
    },
    {
      metric: "Time Required to Complete",
      asIs: "0 Days",
      fullReno: "3 to 4 Months (Delays Listing)",
      refresh: "7 to 10 Days (Fast Turnaround)",
      highlight: true
    },
    {
      metric: "Impact on Buyer Offer Price",
      asIs: "Lowball offers & $45K price cuts",
      fullReno: "+$35,000 to +$50,000",
      refresh: "+$25,000 to +$40,000 (Move-In Ready)",
      highlight: true
    },
    {
      metric: "Days on Market (DOM)",
      asIs: "45+ Days (Risk of Stagnant Listing)",
      fullReno: "Fast (After 4-Month Delay)",
      refresh: "Fast (Immediate Listing Ready)",
      highlight: false
    },
    {
      metric: "Net Profit Added to Seller",
      asIs: "-$45,000 Lost Equity",
      fullReno: "Negative to $0 Break-Even",
      refresh: "+$15,000 to +$30,000 Net Profit",
      highlight: true
    }
  ];

  const timelineSteps = [
    {
      day: "Day 1",
      title: "3D Laser Scan & Color Select",
      desc: "Our technician measures your kitchen with sub-millimeter laser accuracy. Select your door finish & quartz slab."
    },
    {
      day: "Day 2–5",
      title: "Off-Site CNC Fabrication",
      desc: "Plywood cabinet boxes are pre-assembled and quartz slabs are CNC waterjet cut off-site (zero noise/dust in your home)."
    },
    {
      day: "Day 6–7",
      title: "1-Day Clean Installation",
      desc: "Old counters & cabinets are cleanly removed, and new solid quartz and cabinets are installed in 24 hours."
    },
    {
      day: "Day 8",
      title: "Photo-Ready for MLS",
      desc: "Your kitchen is 100% complete, spotless, and ready for high-end staging and Realtor MLS photography."
    }
  ];

  const faqs = [
    {
      q: "Why do buyers discount homes with dated kitchens so heavily?",
      a: "Most buyers are borrowing near their maximum mortgage limit and lack the liquid cash or time to undertake a major renovation. When they see a 1990s or dated kitchen, they overestimate repair costs by 3x and penalize the seller by cutting $40,000 to $60,000 off their offer price."
    },
    {
      q: "How does a 7-day kitchen refresh yield a 300%+ ROI for sellers?",
      a: "By replacing dated cabinets and chipped countertops with fresh solid white or wood shaker cabinets and veined quartz for ~$6,000–$9,000, you transform the space into a high-demand 'Move-In Ready' listing. This triggers multiple offers and increases the final sale price by $25,000 to $40,000."
    },
    {
      q: "Can this be completed fast enough if our listing date is 2 weeks away?",
      a: "Yes! Because our cabinet boxes are pre-assembled in our facility and quartz is templated with 3D lasers, our on-site installation takes only 1 to 2 days. From your initial appointment to MLS photography takes 7 to 10 days total."
    },
    {
      q: "Do you offer priority turnarounds for GTA Real Estate Agents and Stagers?",
      a: "Absolutely. We partner with Toronto, Mississauga, Vaughan, and Markham real estate agents to provide expedited 7-day pre-list scheduling for their seller clients."
    },
    {
      q: "Does this require moving plumbing or gas lines?",
      a: "No. By keeping your existing sink, stove, and fridge layout footprint intact, we avoid expensive plumbing permits and trade delays, keeping your costs low and turnaround ultra-fast."
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
        title="Pre-List Kitchen Refresh Toronto | Add $30K+ to Home Resale Price" 
        description="Pre-list kitchen upgrades for Toronto home sellers & Realtors. Spend $6K-$9K to add $30K+ to your MLS listing price in 7 days without demolition delays."
        canonical="/pre-list-kitchen-refresh-toronto"
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
                  <TrendingUp size={14} className="text-accent" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                    Pre-List Resale ROI Strategy
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.98] mb-6">
                  Pre-List <br />
                  <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">Kitchen Refresh</span> <br />
                  in Toronto
                </h1>

                <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Spend $6K–$9K to add $30,000+ to your home's MLS sale price in 7 days. Eliminate lowball buyer offers and sell faster without full renovation delays.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary px-10 py-5 text-lg font-bold group shadow-2xl shadow-accent/20"
                  >
                    Estimate Resale Refresh Package &rarr;
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
                  alt="Modernized white shaker kitchen ready for Toronto MLS listing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Pre-List Transformation</p>
                  <p className="text-sm font-semibold text-text-primary">Photo-ready in 7 days. Added $38,000 to final home sale price on MLS.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The MLS Equity Problem Banner */}
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
              <TrendingUp className="text-accent" size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2 uppercase tracking-wide">The $50,000 MLS Price Chop Trap</h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Toronto home buyers judge a property by its kitchen photos. If your listing features dated oak cabinets or worn countertops, buyers over-estimate repair costs and cut their offer by <strong>$40,000 to $60,000</strong>. A fast 7-day pre-list refresh creates a high-demand "Move-In Ready" listing that drives competing offers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Realtor & Home Stager Dedicated Partnership Box */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#1A1A1A] text-white rounded-[2.5rem] p-8 md:p-12 border border-border-custom shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-3 py-1 rounded-full text-accent font-bold text-xs uppercase tracking-widest">
                <Briefcase size={14} /> Realtor & Stager Priority Program
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Are You a GTA Listing Agent or Stager? <span className="text-accent">Partner With Us</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We partner with Toronto, Vaughan, Markham, and Mississauga Real Estate Agents to provide priority 7-day pre-list kitchen upgrades for your seller clients. Help your sellers maximize equity and close higher commissions fast.
              </p>
            </div>
            <Link 
              to="/contact"
              className="btn-primary py-4 px-8 text-sm font-bold uppercase tracking-wider shrink-0 w-full md:w-auto text-center"
            >
              Realtor Partner Contact &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Way Resale ROI Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Pre-List Resale Strategy Matrix</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Compare costs, completion time, and net profit return before listing on MLS.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-border-custom shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom w-1/4">Strategy Factor</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/4">1. Sell As-Is (Dated)</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/4">2. Full $50K Renovation</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/4 bg-accent/5">3. 7-Day Pre-List Refresh</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {roiMatrix.map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    <td className="py-6 px-8 font-bold text-text-primary text-sm">{row.metric}</td>
                    <td className="py-6 px-8 text-sm text-gray-500 font-medium">{row.asIs}</td>
                    <td className="py-6 px-8 text-sm text-gray-500 font-medium">{row.fullReno}</td>
                    <td className="py-6 px-8 text-sm text-gray-900 bg-accent/5/40 font-bold leading-relaxed">{row.refresh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7-Day Fast Listing Timeline */}
      <section className="py-24 bg-[#FAF9F6] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The 7-Day Listing Roadmap</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">From laser templating to photography-ready MLS listing in 1 week.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-border-custom flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">{step.day}</span>
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
            <p className="text-gray-500 font-medium">Got questions about refreshing your kitchen before listing on MLS?</p>
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
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Maximize Your Home Sale Profit</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-semibold">
            Calculate instant pre-list refresh packages and get photo-ready for your MLS listing in 7 days.
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
