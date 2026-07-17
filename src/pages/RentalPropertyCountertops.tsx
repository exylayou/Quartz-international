import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { 
  ShieldAlert, 
  HelpCircle, 
  ChevronDown, 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Check, 
  X, 
  ArrowRight,
  ShieldCheck,
  Building,
  UserCheck
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';
import { cn } from '../lib/utils';

// Import local images for reference/visuals
import rentalHeroImg from '../assets/images/client_townhome_kitchen.jpg';
import quartzSlabImg from '../assets/images/pure_white_slab.png';
import familyKitchenImg from '../assets/images/family_kitchen.png';

export default function RentalPropertyCountertops() {
  const navigate = useNavigate();
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { icon: <TrendingUp size={24} className="text-accent" />, label: "Typical Rent Premium", val: "+$50–$150/mo" },
    { icon: <Clock size={24} className="text-accent" />, label: "Countertop Lifespan", val: "25+ Years" },
    { icon: <DollarSign size={24} className="text-accent" />, label: "Maintenance Cost", val: "$0 / Year" },
  ];

  const materialCompare = [
    {
      material: "Laminate (Post-Form)",
      upfront: "Very Low ($25–$45 / sq ft)",
      lifespan: "3–5 Years in rentals",
      tenantRisk: "High. Water leaks swell particle board seams; hot pans melt laminate; knives slice it.",
      maintenance: "Low, but requires frequent total replacement."
    },
    {
      material: "Granite (Natural Stone)",
      upfront: "Medium-High ($50–$110 / sq ft)",
      lifespan: "15+ Years",
      tenantRisk: "Medium. Tenants never reseal it, leading to oil, wine, and water stains.",
      maintenance: "High. Requires chemical sealing every 12 months."
    },
    {
      material: "Quartz (Engineered Stone)",
      upfront: "Medium ($48–$95 / sq ft for entry-level)",
      lifespan: "25+ Years",
      tenantRisk: "Low. Hard, non-porous, and scratch/stain proof. Cannot be scorched easily by warm items (trivets still recommended).",
      maintenance: "Zero. Never needs sealing or special chemicals."
    }
  ];

  const faqs = [
    {
      q: "Why is quartz preferred over granite for rentals?",
      a: "Granite is a natural stone that must be sealed periodically to remain non-porous. Tenants will almost never seal the countertops, leading to oil, grease, coffee, and wine staining the stone permanently. Quartz is engineered to be 100% non-porous, meaning it never needs sealing and will resist stains even if spills are left overnight."
    },
    {
      q: "Is quartz countertop tax-deductible for rental properties?",
      a: "Yes. In Canada (CRA) and the US (IRS), replacing a worn countertop with a durable quartz countertop is generally treated as a Capital Cost Allowance (CCA) or depreciation expense rather than a direct current repair. Consult your accountant to determine the exact amortization schedule for your property upgrades."
    },
    {
      q: "Can tenants burn or damage quartz countertops?",
      a: "While quartz is highly durable, it is not completely indestructible. The polymer resins inside quartz can scorch or discolor if a tenant places a scorching hot cast-iron skillet directly on the surface (above 300°F). We recommend putting a note in the lease agreement or adding a permanent cutting board/trivet area next to the stove to protect the investment."
    },
    {
      q: "What is the most cost-effective quartz brand for landlords?",
      a: "For rental properties, we highly recommend entry-level and mid-range quartz lines from TCE Stone (such as TCE 4001 Pure White), Kstone, or Kasa Quartz. These brands offer extremely durable, clean, solid-colour or lightly speckled options that look modern but cost significantly less than luxury veined quartz."
    },
    {
      q: "Does upgrading to quartz countertops help raise the rent?",
      a: "Absolutely. Modern, high-end kitchens attract premium tenants who are willing to pay a rent premium of $50 to $150+ per month depending on the GTA neighborhood. Premium finishes also lead to faster tenant placement, reducing vacancy rates, and attract tenants who take better overall care of the property."
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
        title="Best Countertop for Rental Properties: Landlord ROI Guide" 
        description="What is the best countertop for a rental property? Compare quartz, granite, and laminate on cost, durability, sealing, maintenance, and landlord ROI."
        canonical="/best-countertop-for-rental-properties"
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
                    GTA Landlord & Investor Guide
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-6">
                  Best Countertop <br />
                  for <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">Rentals</span>
                </h1>

                <p className="text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Attract premium tenants, avoid water damage repairs, and eliminate sealing maintenance. Discover why quartz delivers the highest lifetime ROI for real estate investors.
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
                    Estimate Rental Kitchen &rarr;
                  </button>
                  <Link to="/contact" className="btn-outline px-10 py-5 text-lg font-bold">
                    Talk to Multi-Unit Specialist
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
                  src={rentalHeroImg} 
                  alt="Durable quartz countertops in a clean GTA rental townhome kitchen"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer: The Landlord Dilemma */}
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
              <ShieldCheck className="text-accent" size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2 uppercase tracking-wide">The Landlord Verdict</h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed tracking-tight">
                For rental properties, <strong>Quartz is the undisputed winner</strong>. While laminate has lower upfront costs, it regularly swells or degrades within 3–5 years due to tenant misuse. Natural granite requires periodic sealing, which tenants will neglect, causing permanent staining. Quartz requires <strong>no sealing, is stain/water-proof</strong>, and increases rental income and resale value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lifetime Cost Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Upfront Cost vs. Lifespan ROI</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Compare how countertops perform under the wear and tear of rental tenants over a 15-year horizon.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-border-custom shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom w-1/5">Countertop</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/5">Installed Cost</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-1/5">Average Lifespan</th>
                  <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom w-2/5">Tenant Risks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {materialCompare.map((row, i) => (
                  <tr key={i} className={cn("hover:bg-[#FAF9F6]/50 transition-colors", row.material.includes("Quartz") && "bg-accent/5/20")}>
                    <td className="py-6 px-8 font-bold text-text-primary">
                      {row.material}
                    </td>
                    <td className="py-6 px-8 text-sm text-gray-600 font-medium">{row.upfront}</td>
                    <td className="py-6 px-8 text-sm text-gray-600 font-semibold">{row.lifespan}</td>
                    <td className="py-6 px-8 text-sm text-gray-500 leading-relaxed font-medium">
                      <span className="block font-bold text-xs text-red-500 uppercase tracking-widest mb-1">Risk Profile:</span>
                      {row.tenantRisk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Landlord Risks of Cheaper Materials */}
      <section className="py-24 bg-[#FAF9F6] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Why Cheap Countertops Cost More Long Term</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">Property managers agree: particle-board laminate and porous natural stone are liability traps in rentals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-white p-10 rounded-[2.5rem] border border-border-custom shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-500/5 flex items-center justify-center text-red-500 mb-6">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Water Swell Trap (Laminate)</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Laminate utilizes particle board underlay. In a rental, tenants will leave puddles around the under-mount sink or run a dishwasher that vents hot steam directly under the front edge. Within a few years, water seeps into seams, swelling the wood core, causing cracking and mold.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                <X size={16} /> Result: Complete countertop tear-out and replacement required.
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-border-custom shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-red-500/5 flex items-center justify-center text-red-500 mb-6">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Oil Seep Trap (Granite)</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Granite is porous natural stone. If a tenant cooks with turmeric, leaks cooking oil, or spills red wine and leaves it on the counter, the liquid is absorbed into the granite's micro-pores. Once stained, natural stone requires chemical poultices or professional resurfacing to fix.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                <X size={16} /> Result: Permanent stains that devalue the property at resale.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Landlord Recommended Slabs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Recommended Quartz Brands for Landlords</h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                As a landlord, you do not need to spend top dollar on exotic, sweeping marble veining. Clean, solid-colour or lightly speckled quartz options give the kitchen an expensive, updated look while keeping materials in the most affordable price tiers.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  { name: "TCE Stone — Group 1", desc: "Superb budget Speckled White, Speckled Cream, and Grey. Extremely durable and locally stocked." },
                  { name: "Kstone — Standard Tier", desc: "Affordable Solid White and neutral grey tones that pair beautifully with basic shaker cabinets." },
                  { name: "Kasa Quartz — Entry Tier", desc: "Excellent price-to-durability ratio for rental condos, providing a clean high-end finish." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 shrink-0 mt-1">
                      <Check size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-text-primary">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => openCalculator()}
                  className="btn-primary h-14 px-8 text-sm"
                >
                  Estimate Budget Quartz
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 border border-white/5">
                  <img src={quartzSlabImg} alt="Solid white quartz slab" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold mb-2">Popular Rental Slabs</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  We maintain bulk stocks of solid white and light grey slabs, allowing us to offer discounted bundle deals for GTA rental property owners.
                </p>
                <div className="flex justify-between items-center text-xs font-bold text-accent uppercase tracking-wider">
                  <span>Fast GTA Delivery</span>
                  <span>Professional Install Included</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Property Investor FAQs */}
      <section className="py-32 bg-[#FAF9F6] border-t border-border-custom">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Property Investor FAQs</h2>
            <p className="text-gray-500 font-medium">Common questions about rental property kitchen renovations and countertop durability.</p>
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
            Optimize Your <span className="text-accent">Portfolio</span> ROI
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium">
            Contact us for multi-unit rental property discounts or calculate pricing for your current property upgrade in 30 seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => openCalculator()}
              className="btn-primary px-16 py-8 text-2xl font-bold uppercase tracking-tighter shadow-2xl shadow-accent/20"
            >
              Get Multi-Unit Estimate &rarr;
            </button>
            <Link to="/contact" className="px-16 py-8 bg-white/5 border border-white/10 rounded-full text-white text-2xl font-bold uppercase tracking-tighter hover:bg-white/10 transition-all">
              Book consultations &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
