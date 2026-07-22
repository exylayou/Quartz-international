import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { 
  Check, 
  HelpCircle, 
  ChevronDown, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Building,
  Hammer
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';
import { cn } from '../lib/utils';

// Static image paths from /public/images
const beforeAfterImg = "/images/typical_kitchen_upgrade.png";
const quartzImg = "/images/white_shaker_no_island.png";
const heroImg = "/images/townhome_kitchen_project.jpg";

export default function ModernizeKitchenNoLayoutChange() {
  const navigate = useNavigate();
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { icon: <TrendingUp size={24} className="text-accent" />, label: "Typical Cost Savings", val: "Save $12K - $25K" },
    { icon: <Clock size={24} className="text-accent" />, label: "Installation Time", val: "7 - 10 Days" },
    { icon: <Hammer size={24} className="text-accent" />, label: "Demolition Level", val: "Minimal / Clean" },
  ];

  const steps = [
    {
      step: "1. Swapping Out the Cabinets",
      desc: "Remove the old cabinets and replace them with standard 10×10 RTA or pre-assembled plywood cabinets in the exact same footprint. No drywall tear-outs or framing required.",
    },
    {
      step: "2. New Seamless Quartz Countertops",
      desc: "Fabricate custom quartz countertops to fit the existing layout. Adding an undermount sink cutout instantly elevates the kitchen from a basic builder look to custom luxury.",
    },
    {
      step: "3. Continuing Quartz Up the Backsplash",
      desc: "Instead of dealing with messy tile grouting, run the matching quartz countertop continuously up the wall to meet the upper cabinets. This creates a high-end, seamless visual flow.",
    },
    {
      step: "4. Keeping Faucets & Appliances in Place",
      desc: "By keeping the sink drain, dishwasher, stove, and fridge in their exact original locations, you completely avoid having to hire licensed plumbers or electricians to reroute pipes or run new wiring behind drywall."
    }
  ];

  const faqs = [
    {
      q: "How much money do I save by keeping my kitchen's original layout?",
      a: "Keeping the original layout saves you anywhere from $12,000 to over $25,000. In Toronto, moving a sink or stove just 3 feet requires tearing out flooring and drywall, rerouting copper supply lines, and shifting heavy drains or gas pipes. This triggers thousands in plumbing bills, electrical re-wiring, drywall repairs, and municipal building permit fees."
    },
    {
      q: "Can I still add a kitchen island if I don't change my perimeter layout?",
      a: "Yes! If you have at least 36 to 42 inches of open floor space in the center of your kitchen, you can easily add a freestanding cabinet island with a matching quartz top without altering the rest of your kitchen layout. This increases both storage and prep space dramatically."
    },
    {
      q: "How long does a layout-preserving kitchen refresh take?",
      a: " Swapping cabinets in an existing layout takes 1 to 3 days. Laser templating for the quartz happens the moment base cabinets are set. Your custom quartz is fabricated and installed 5 to 7 days later. The entire transformation is fully completed in 7 to 10 days, compared to 4 to 8 weeks for a full structural remodel."
    },
    {
      q: "Do I need a building permit in Toronto if I don't change the kitchen layout?",
      a: "Generally, no. In Toronto, a building permit is not required for cosmetic upgrades like replacing cabinets, countertops, or finishes, provided you are not moving load-bearing walls, changing plumbing lines, or modifying fire-rated barriers (common in condos). Always consult your contractor to confirm rules for your specific property."
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
        title="Modernize Kitchen Without Layout Change Toronto | Budget Remodel Guide" 
        description="Learn how to remodel and modernize your Toronto kitchen without moving plumbing or walls. Save thousands on renovation costs with our turnkey packages."
        canonical="/modernize-kitchen-without-moving-plumbing"
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
                  <Building size={14} className="text-accent" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                    GTA Budget Remodeling Guide
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-6">
                  Modernize Without <br />
                  <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">Layout Change</span>
                </h1>

                <p className="text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Moving kitchen walls and plumbing easily adds $15,000+ in hidden contractor fees. Learn how swapping cabinets and countertops in your existing footprint delivers a brand-new luxury kitchen on a budget.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  {stats.map((s, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-border-custom shadow-sm flex flex-col gap-2">
                      <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center">
                        {s.icon}
                      </div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-tight">{s.label}</h4>
                      <p className="text-lg font-black text-text-primary leading-none">{s.val}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary px-10 py-5 text-lg font-bold group shadow-2xl shadow-accent/20"
                  >
                    Estimate Remodel Packages &rarr;
                  </button>
                  <Link to="/kitchen-cabinets-and-quartz-countertops-toronto" className="btn-outline px-10 py-5 text-lg font-bold">
                    View Turnkey Bundles
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
                  alt="Remodeled kitchen preserving original plumbing layout in Toronto"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Concept */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-border-custom shadow-xl">
                <img src={beforeAfterImg} alt="Kitchen remodel before after comparison" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="lg:w-1/2 space-y-6">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Layout Preservation</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">Swapping Slabs & Countertops</h2>
              <p className="text-gray-500 font-medium leading-relaxed">
                Most older Toronto kitchens have highly functional footprints, but are dated by peeling laminate doors, old yellowed countertops, or heavy dark wood grains. Keeping the layout exact means your investment goes 100% into high-end finish quality, rather than plumbing pipes and drywall demolition.
              </p>
              <div className="flex items-start gap-4 p-4 bg-background rounded-2xl border border-border-custom">
                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                  <Check size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-text-primary">Keep Sink and Stove Locations</h4>
                  <p className="text-xs text-gray-500 font-medium">Save $5,000+ by avoiding relocation of plumbing drains, copper water lines, gas connections, and heavy 240V appliance plugs.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 4-Step Remodel Process */}
      <section className="py-24 bg-[#FAF9F6] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">The Layout-Preserving Renovation</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">How to modernize your kitchen in 4 simple, non-structural steps.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-white border border-border-custom p-8 rounded-3xl shadow-sm space-y-4">
                <span className="text-xs font-bold text-accent uppercase tracking-wider block">{s.step}</span>
                <p className="text-gray-500 text-xs font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Remodeling FAQs</h2>
            <p className="text-gray-500 font-medium">Common questions about preserving kitchen layouts and saving renovation costs.</p>
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
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Remodel Your Kitchen Without the Hassle</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm font-semibold">
            Calculate exact cabinet and countertop package prices for your layout online in 30 seconds.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => openCalculator()} className="btn-primary px-12 py-5 text-base font-bold shadow-xl shadow-accent/20">
              Calculate Package Cost &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
