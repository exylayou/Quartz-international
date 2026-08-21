import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import {
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  Check,
  ChevronDown, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Layout,
  Sparkles,
  Award,
  FileCheck,
  Building,
  Home,
  Sliders,
  TrendingUp,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';
import { cn } from '../lib/utils';

// Import images
import heroImg from '../assets/images/regenerated_image_1777741714310.png';
import condoKitchen from '../assets/images/regenerated_image_1777758978147.png';
import standardKitchen from '../assets/images/regenerated_image_1777758979417.png';
import largeKitchen from '../assets/images/regenerated_image_1777759410525.png';
import quartzImg from '../assets/images/regenerated_image_1777760428513.png';
import graniteImg from '../assets/images/regenerated_image_1777760429812.png';
import marbleImg from '../assets/images/regenerated_image_1777760431259.png';
import laminateImg from '../assets/images/regenerated_image_1777760432651.png';

export default function Cost() {
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pricingTable = [
    { level: 'Group 1: Solid & Pure White / Grey', material: '$23 – $43', fab: '$15', install: '$10', total: '$48 – $68', desc: 'Clean, minimalist solid tones (e.g. Pure White, Fine Grain Grey)' },
    { level: 'Group 2: Mid-Range Concrete & Soft Veined', material: '$39 – $60', fab: '$15 – $20', install: '$15', total: '$69 – $95', desc: 'Popular subtle movement, honed concrete & soft Carrara veining' },
    { level: 'Group 3: Luxury Calacatta & Statuario', material: '$60 – $120', fab: '$20 – $25', install: '$20 – $25', total: '$100 – $170+', desc: 'High-end bold gold/grey veining & full book-matched slabs' },
  ];

  const itemizedFees = [
    { item: 'Undermount Sink Cutout & Edge Polishing', price: '$150 – $250 / sink', note: 'Includes CNC sink cutout and waterjet hand-polished inner lip' },
    { item: 'Faucet & Cooktop Hole Cutouts', price: '$50 / hole', note: 'Standard 1-3/8" diamond drill cutouts for faucets, soap dispensers & pop-ups' },
    { item: 'Mitered Waterfall Edge Panels', price: '$35 – $65 / sq ft panel', note: '45-degree mitered edge joint dropping seamlessly from countertop to floor' },
    { item: 'Old Countertop Removal & Disposal', price: '$250 – $450', note: 'Clean detachment of old laminate/granite, hauling, and eco-disposal' },
    { item: 'Full-Height Quartz Backsplash', price: '$45 – $95 / sq ft installed', note: 'Seamless wall slab cladding replacing tile grout and 4-inch splashes' },
    { item: 'Condo Service Elevator & Access Handling', price: '$150 – $250', note: 'Dedicated condo elevator protection, padding, and high-rise slab transport' }
  ];

  const examples = [
    { title: 'Condo Kitchen', size: '25 – 35 sq ft', price: '$1,500 – $3,500', img: condoKitchen },
    { title: 'Standard Kitchen', size: '35 – 50 sq ft', price: '$2,000 – $5,000', img: standardKitchen },
    { title: 'Large Kitchen', size: '50 – 70+ sq ft', price: '$5,000 – $11,000+', img: largeKitchen },
  ];

  const caseStudies = [
    {
      title: 'Downtown Toronto Condo Kitchen',
      location: 'King West, Toronto',
      scope: '28 sq. ft. Countertop + Undermount Sink Cutout',
      material: 'Kasa K8803 Pure White (2cm)',
      total: '$2,350 + HST',
      highlights: '1-day install, service elevator access, condo board insurance certificate included.'
    },
    {
      title: 'Vaughan Suburban Family Kitchen',
      location: 'Woodbridge, Vaughan',
      scope: '42 sq. ft. Countertop + Full-Height Quartz Backsplash',
      material: 'Caesarstone Calacatta Gold (3cm)',
      total: '$5,400 + HST',
      highlights: 'Continuous vein-matching across wall backsplash and L-shaped main counter.'
    },
    {
      title: 'Oakville Luxury Kitchen & Waterfall Island',
      location: 'Eastlake, Oakville',
      scope: '65 sq. ft. Island + Dual Waterfall Drops + Perimeter',
      material: 'Silestone Et Calacatta Gold (3cm)',
      total: '$8,900 + HST',
      highlights: 'Double mitered waterfall legs with book-matched veining.'
    }
  ];

  const compareCards = [
    { name: 'Quartz', img: quartzImg, maintenance: 'Low — non-porous, zero sealing required', durability: 'Extreme — stain, scratch & food dye resistant', cost: 'Baseline ($48–$170/sq ft)' },
    { name: 'Granite', img: graniteImg, maintenance: 'Moderate — requires annual chemical sealing', durability: 'High, natural slab variation', cost: 'Comparable ($45–$150/sq ft)' },
    { name: 'Marble', img: marbleImg, maintenance: 'High — porous, etches with lemon/wine', durability: 'Lower — soft natural stone', cost: 'Higher ($90–$250/sq ft)' },
    { name: 'Laminate', img: laminateImg, maintenance: 'Low', durability: 'Lower — scorches under hot pans', cost: 'Budget ($20–$40/sq ft)' }
  ];

  const faqs = [
    { 
      q: 'How much do quartz countertops cost in Toronto & GTA in 2026?', 
      a: 'In 2026, quartz countertops in Toronto & GTA typically cost $48 to $170 per square foot installed. A standard 35 to 45 sq. ft. kitchen project ranges from $2,200 to $5,500 total, including 3D laser measurement, slab material, sink cutout, fabrication, delivery, and installation.' 
    },
    { 
      q: 'What is the price difference between 2 cm and 3 cm quartz in Ontario?', 
      a: '3 cm (1-1/4 inch) quartz typically costs $10 to $20 more per square foot than 2 cm (3/4 inch) quartz. While 3 cm allows for a thicker solid profile without plywood underlayment, 2 cm is lighter and ideal for full-height wall backsplashes and condo installations.' 
    },
    { 
      q: 'Are there hidden charges in quartz countertop quotes?', 
      a: 'Common add-ons excluded from basic "slab-only" estimates include undermount sink cutouts ($150–$250), cooktop cutouts ($50), old countertop demolition & disposal ($250–$450), mitered waterfall drops ($35–$65/linear ft), and condo service elevator handling ($150).' 
    },
    { 
      q: 'How much does a full-height quartz backsplash cost compared to tile?', 
      a: 'A full-height quartz backsplash costs $45 to $95 per square foot installed. While tile can be cheaper upfront ($20–$40/sq ft), quartz eliminates dirty grout lines, creates a seamless slab look, and matches your countertop perfectly.' 
    },
    { 
      q: 'Is quartz more affordable than granite or marble in Toronto?', 
      a: 'Quartz is comparable in price to mid-range granite ($48–$170/sq ft installed) but significantly cheaper than authentic Calacatta marble ($90–$250/sq ft). Quartz is more cost-effective long-term because it never requires costly annual sealing or stain restoration.' 
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://quartzinternational.ca/#organization",
        "name": "Quartz International",
        "url": "https://quartzinternational.ca",
        "telephone": "(647) 370-6938",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toronto",
          "addressRegion": "ON",
          "addressCountry": "Canada"
        }
      },
      {
        "@type": "Article",
        "@id": "https://quartzinternational.ca/cost#article",
        "headline": "Quartz Countertop Cost in Ontario (2026): Toronto & GTA Installed Prices",
        "description": "Comprehensive 2026 guide to quartz countertop cost per square foot, fabrication, cutouts, waterfall edges, and full-height backsplashes in Toronto.",
        "author": {
          "@type": "Person",
          "name": "Olton Exeter",
          "jobTitle": "Kitchen & Countertop Specialist",
          "worksFor": {
            "@type": "Organization",
            "name": "Quartz International"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "Quartz International",
          "url": "https://quartzinternational.ca"
        },
        "datePublished": "2025-10-15",
        "dateModified": "2026-08-11",
        "inLanguage": "en-CA"
      },
      {
        "@type": "FAQPage",
        "@id": "https://quartzinternational.ca/cost#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen font-sans text-text-primary selection:bg-accent/30">
      <SEO 
        title="Quartz Countertop Cost in Ontario (2026): Toronto & GTA Installed Prices" 
        description="Real 2026 quartz countertop cost ranges in Toronto & GTA. Installed prices per sq ft ($48–$170), tiered pricing, sink cutouts, waterfall edges, and hidden fee breakdown."
        canonical="/cost"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* Hero Header */}
      <section className="relative pt-12 pb-16 bg-gradient-to-b from-[#FAF9F6] to-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F0EBE1] border border-border-custom px-4 py-2 rounded-full mb-6">
              <TrendingUp size={14} className="text-accent" />
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest leading-none">
                2026 Ontario & GTA Pricing Guide
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
              Quartz Countertop Cost <br />
              <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">in Toronto & GTA (2026)</span>
            </h1>

            {/* E-E-A-T Author Byline Block */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border-custom mb-8 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <UserCheck size={20} />
              </div>
              <div className="text-xs">
                <p className="font-bold text-text-primary">Reviewed by Olton Exeter, Kitchen & Countertop Specialist</p>
                <p className="text-gray-500">Quartz International • Last Updated: <time dateTime="2026-08-11">August 11, 2026</time></p>
              </div>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Planning a kitchen renovation or countertop upgrade in the Greater Toronto Area? Learn exact installed costs per square foot, material tiers, edge profile add-ons, sink cutout fees, and how to avoid hidden charges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => openCalculator()}
                className="btn-primary px-8 py-4 text-base font-bold shadow-xl shadow-accent/20"
              >
                Launch Instant Cost Estimator &rarr;
              </button>
              <Link to="/10x10-kitchen-cabinets-toronto" className="btn-outline px-8 py-4 text-base font-bold">
                View Turnkey 10×10 Package ($5,999)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Standalone Above-The-Fold Instant AI Answer Box */}
      <section className="py-8 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F6] p-6 md:p-8 rounded-[2rem] border border-amber-200 shadow-sm relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-widest">
                <Sparkles size={16} /> Instant 2026 Pricing Summary
              </div>
              <a 
                href="https://www.google.com/preferences/source?q=quartzinternational.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500 text-amber-800 hover:text-gray-900 border border-amber-300 font-bold text-xs transition-all duration-300 self-start sm:self-auto"
              >
                <span>⭐</span>
                <span>Add as Preferred Google Source</span>
              </a>
            </div>
            <p className="text-base md:text-lg font-medium text-text-primary leading-relaxed">
              In 2026, professionally installed quartz countertops in Toronto and the GTA typically cost <strong>$48 to $170 per square foot</strong>. A standard 35 to 45 sq. ft. kitchen usually costs <strong>$2,200 to $5,500 total</strong>, including digital 3D laser measurement, slab material, sink cutout, fabrication, delivery, and installation. Premium Calacatta slabs, full-height backsplashes, mitered waterfall drops, and condo access fees increase the final price.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents & Key Takeaways */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-background p-8 rounded-[2.5rem] border border-border-custom">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Table of Contents</h3>
              <ul className="space-y-2 text-sm font-semibold text-text-primary">
                <li><a href="#tiered-pricing" className="hover:text-accent transition-colors">1. 2026 Installed Cost per Square Foot (Tier Breakdown)</a></li>
                <li><a href="#itemized-fees" className="hover:text-accent transition-colors">2. Itemized Trade Fees (Sink Cutouts, Waterfalls, Removal)</a></li>
                <li><a href="#thickness-comparison" className="hover:text-accent transition-colors">3. 2 cm vs. 3 cm Quartz Thickness Price Guide</a></li>
                <li><a href="#backsplash-costs" className="hover:text-accent transition-colors">4. Countertop vs. Full-Height Quartz Backsplash Costs</a></li>
                <li><a href="#kitchen-size-examples" className="hover:text-accent transition-colors">5. Typical GTA Kitchen Size Project Cost Examples</a></li>
                <li><a href="#material-comparison" className="hover:text-accent transition-colors">6. Quartz vs. Granite, Marble & Laminate Costs</a></li>
                <li><a href="#completed-case-studies" className="hover:text-accent transition-colors">7. Real Completed 2026 GTA Project Pricing Examples</a></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-border-custom shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Key Takeaways for Buyers</h3>
              <ul className="space-y-2 text-xs text-gray-600 font-medium">
                <li className="flex items-start gap-2"><Check className="text-accent shrink-0 mt-0.5" size={14} /> <strong>All-Inclusive Billing:</strong> Our quotes cover measurement, slab, fabrication, and installation.</li>
                <li className="flex items-start gap-2"><Check className="text-accent shrink-0 mt-0.5" size={14} /> <strong>No Sealing Costs:</strong> Quartz is 100% non-porous and requires zero annual sealing maintenance.</li>
                <li className="flex items-start gap-2"><Check className="text-accent shrink-0 mt-0.5" size={14} /> <strong>Turnkey Bundles:</strong> Combine quartz countertops with solid plywood cabinets for maximum package savings ($5,999 10x10 package).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 1. 2026 Tiered Pricing Table */}
      <section id="tiered-pricing" className="py-16 bg-white scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-3">1. 2026 Installed Cost per Square Foot</h2>
            <p className="text-gray-500 font-medium">Quartz pricing varies by pattern complexity, slab origin, brand, and thickness.</p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-border-custom shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#FAF9F6]">
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom">Quartz Material Tier</th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom">Slab Material</th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom">Fab & Install</th>
                  <th className="py-5 px-6 text-xs font-bold uppercase tracking-widest text-text-primary border-b border-border-custom bg-accent/5">Total Installed / Sq Ft</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {pricingTable.map((row, i) => (
                  <tr key={i} className="hover:bg-[#FAF9F6]/50 transition-colors">
                    <td className="py-5 px-6">
                      <p className="font-bold text-text-primary text-sm">{row.level}</p>
                      <p className="text-xs text-gray-500 mt-1">{row.desc}</p>
                    </td>
                    <td className="py-5 px-6 text-sm text-gray-600">{row.material}</td>
                    <td className="py-5 px-6 text-sm text-gray-600">{row.fab} + {row.install}</td>
                    <td className="py-5 px-6 text-base font-bold text-accent bg-accent/5/40">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2. Itemized Trade Fees Breakdown */}
      <section id="itemized-fees" className="py-16 bg-[#FAF9F6] border-y border-border-custom scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-3">2. Itemized Trade & Add-On Fee Breakdown</h2>
            <p className="text-gray-500 font-medium">To avoid hidden surprises, here are the standard trade customization charges for GTA installations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemizedFees.map((fee, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-border-custom shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{fee.item}</h3>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">{fee.note}</p>
                </div>
                <div className="pt-4 border-t border-border-custom flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-400 uppercase">Average Fee</span>
                  <span className="text-base font-bold text-accent">{fee.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 2cm vs 3cm Thickness Price Guide */}
      <section id="thickness-comparison" className="py-16 bg-white scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-3">3. 2 cm vs. 3 cm Quartz Thickness Cost Guide</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              In Toronto, quartz slabs are primarily sold in two thicknesses: <strong>2 cm (3/4 inch)</strong> and <strong>3 cm (1-1/4 inch)</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-[2rem] border border-border-custom">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">2 cm (3/4 Inch) Slabs</span>
              <h3 className="text-xl font-bold mb-3">$48 – $85 / sq ft installed</h3>
              <ul className="space-y-2 text-xs text-gray-600 font-medium leading-relaxed">
                <li>• Lower material weight makes it ideal for condo high-rises and full-height wall backsplashes.</li>
                <li>• Requires a 5/8" plywood sub-top under the slab for countertop support.</li>
                <li>• Often finished with a laminated or mitered edge profile to create a 1.5" build-up.</li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-[2rem] border border-border-custom">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">3 cm (1-1/4 Inch) Slabs</span>
              <h3 className="text-xl font-bold mb-3">$65 – $140+ / sq ft installed</h3>
              <ul className="space-y-2 text-xs text-gray-600 font-medium leading-relaxed">
                <li>• Solid solid-stone profile installed directly on cabinet framing without sub-top plywood.</li>
                <li>• Preferred for heavy-duty main kitchen countertops and large overhang islands.</li>
                <li>• Features a clean eased or polished edge without lamination seams.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Full-Height Backsplash Costs */}
      <section id="backsplash-costs" className="py-16 bg-[#FAF9F6] border-y border-border-custom scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Seamless Wall Cladding</span>
              <h2 className="text-3xl font-bold tracking-tight">4. Countertop vs. Full-Height Quartz Backsplash</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Replacing traditional tile grout with a full-height quartz backsplash creates a continuous, high-end look behind your stove and upper cabinets.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-border-custom">
                  <span className="text-sm font-bold">Standard 4-Inch Upstand</span>
                  <span className="text-sm font-bold text-accent">$150 – $350 Total</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-xl border border-border-custom">
                  <span className="text-sm font-bold">Full-Height Quartz Backsplash (30–45 sq ft)</span>
                  <span className="text-sm font-bold text-accent">$1,350 – $3,500 Installed</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-[2.5rem] border border-border-custom shadow-sm">
              <h3 className="text-lg font-bold mb-3">Why Full-Height Quartz Backsplashes Pay Off:</h3>
              <ul className="space-y-3 text-xs text-gray-600 font-medium">
                <li className="flex items-start gap-2"><CheckCircle2 className="text-accent shrink-0" size={16} /> <strong>Zero Grout Maintenance:</strong> No discolored grout lines behind hot cooking ranges.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="text-accent shrink-0" size={16} /> <strong>Continuous Veining:</strong> We match quartz veins from the countertop up the wall.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="text-accent shrink-0" size={16} /> <strong>100% Non-Porous:</strong> Hot oil splatters wipe off instantly with soap and water.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Kitchen Size Examples */}
      <section id="kitchen-size-examples" className="py-16 bg-white scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-3">5. Typical GTA Kitchen Size Project Cost Examples</h2>
            <p className="text-gray-500 font-medium">Estimate your project cost based on your kitchen's square footage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((item, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] border border-border-custom overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">{item.size}</p>
                  <div className="pt-4 border-t border-border-custom flex justify-between items-center">
                    <span className="text-xs text-gray-500 font-medium">Estimated Installed Total</span>
                    <span className="text-base font-bold text-text-primary">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Material Comparison */}
      <section id="material-comparison" className="py-16 bg-[#FAF9F6] border-y border-border-custom scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-3">6. Quartz vs. Granite, Marble & Laminate Costs</h2>
            <p className="text-gray-500 font-medium">Comparing total cost of ownership across popular countertop materials in Ontario.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {compareCards.map((card, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[2rem] border border-border-custom shadow-sm flex flex-col justify-between">
                <div>
                  <div className="aspect-video rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <img src={card.img} alt={card.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{card.name}</h3>
                  <p className="text-xs text-gray-500 font-medium mb-1"><strong>Maintenance:</strong> {card.maintenance}</p>
                  <p className="text-xs text-gray-500 font-medium mb-3"><strong>Durability:</strong> {card.durability}</p>
                </div>
                <div className="pt-3 border-t border-border-custom">
                  <span className="text-xs font-bold text-accent uppercase">{card.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Real Completed 2026 GTA Project Pricing Examples */}
      <section id="completed-case-studies" className="py-16 bg-white scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight mb-3">7. Real Completed 2026 GTA Project Pricing Examples</h2>
            <p className="text-gray-500 font-medium">Transparent billing breakdowns from recent GTA residential installations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-border-custom shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">{study.location}</span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{study.title}</h3>
                  <p className="text-xs font-bold text-gray-700 mb-1">{study.scope}</p>
                  <p className="text-xs text-gray-500 font-medium mb-4">{study.material}</p>
                  <p className="text-xs text-gray-600 bg-background p-4 rounded-xl border border-border-custom leading-relaxed mb-6">
                    "{study.highlights}"
                  </p>
                </div>
                <div className="pt-4 border-t border-border-custom flex justify-between items-center">
                  <span className="text-xs font-bold text-gray-400 uppercase">Final Total</span>
                  <span className="text-lg font-bold text-accent">{study.total}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Methodology Statement */}
          <div className="mt-12 p-6 bg-background rounded-2xl border border-border-custom text-xs text-gray-500 font-medium text-center">
            <strong>2026 Pricing Methodology:</strong> Price ranges listed above are compiled from 85+ completed residential quartz countertop estimates and installations performed by Quartz International across Toronto, Mississauga, Vaughan, Markham, and Oakville between January 1 and August 11, 2026. HST (13%) is excluded unless noted otherwise.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FAF9F6] border-t border-border-custom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-medium">Common questions about quartz countertop pricing in Toronto.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border-custom overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-accent/5 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-base font-bold text-text-primary">{faq.q}</span>
                  <ChevronDown size={20} className={cn("text-accent transition-transform duration-300 shrink-0 ml-4", openFaq === i && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-sm text-gray-600 font-medium leading-relaxed border-t border-border-custom bg-background/50">
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
      <section className="py-20 bg-[#1A1A1A] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Get Your Instant Quartz Estimate</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-medium">
            Use our interactive estimator to calculate exact 2026 package costs for your Toronto or GTA kitchen in 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button 
              onClick={() => openCalculator()}
              className="btn-primary px-10 py-5 text-base font-bold shadow-xl shadow-accent/20"
            >
              Launch Instant Cost Estimator &rarr;
            </button>
            <Link to="/contact" className="btn-outline px-10 py-5 text-base font-bold text-white border-white hover:bg-white hover:text-text-primary">
              Contact Showroom Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
