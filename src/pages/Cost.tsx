import React from 'react';
import { motion } from 'motion/react';
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
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
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
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const pricingTable = [
    { level: 'Standard Quartz', material: '$23 – $43', fab: '$15', install: '$10', total: '$48 – $68', desc: 'Simple, clean designs' },
    { level: 'Premium Quartz', material: '$39 – $60', fab: '$15 – $20', install: '$15', total: '$69 – $95', desc: 'Popular patterns' },
    { level: 'Luxury Quartz', material: '$60 – $120', fab: '$20 – $25', install: '$20 – $25', total: '$100 – $170', desc: 'High-end designs' },
  ];

  const examples = [
    { title: 'Condo Kitchen', size: '25 – 35 sq ft', price: '$1,500 – $3,500', img: condoKitchen },
    { title: 'Standard Kitchen', size: '35 – 50 sq ft', price: '$2,000 – $5,000', img: standardKitchen },
    { title: 'Large Kitchen', size: '50 – 70+ sq ft', price: '$5,000 – $11,000+', img: largeKitchen },
  ];

  const compareCards = [
    { name: 'Quartz', img: quartzImg, maintenance: 'Low — non-porous, no sealing', durability: 'High — stain & scratch resistant', cost: 'Baseline' },
    { name: 'Granite', img: graniteImg, maintenance: 'Moderate — needs periodic sealing', durability: 'High, more pattern variation', cost: 'Comparable to slightly lower' },
    { name: 'Marble', img: marbleImg, maintenance: 'High — porous, stains easily', durability: 'Lower — soft stone', cost: 'Higher' },
    { name: 'Laminate', img: laminateImg, maintenance: 'Low', durability: 'Lower — less heat resistant', cost: 'Lower' }
  ];

  const faqs = [
    { q: 'How much do quartz countertops cost in Toronto & GTA?', a: 'Quartz countertops typically cost $48 to $170 per square foot installed in the Toronto & GTA area, with most full kitchen projects ranging from $2,000 to $8,500 depending on size and quartz tier.' },
    { q: 'How long does quartz countertop installation take?', a: 'Most quartz countertop installations are completed in 1 to 2 days once templating is done, though the full process — including measuring, fabrication, and scheduling — typically takes 1 to 3 weeks from initial consultation to final install.' },
    { q: 'Is quartz worth it for kitchen countertops?', a: 'Quartz is widely considered a strong long-term value because it is non-porous, does not require sealing, and resists staining and scratching better than natural stone alternatives like granite or marble, while offering a comparable range of colors and patterns.' },
    { q: 'Do you provide both countertops and cabinets?', a: 'Yes — countertops and custom cabinetry can be bundled into a single kitchen project, which typically reduces overall cost compared to ordering them separately and gives you one point of contact for the full renovation.' },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.quartzinternational.ca/#organization",
        "name": "Quartz International",
        "url": "https://www.quartzinternational.ca/"
      },
      {
        "@type": "WebPage",
        "@id": "https://www.quartzinternational.ca/cost#webpage",
        "url": "https://www.quartzinternational.ca/cost",
        "name": "Quartz Countertop Cost Guide 2026"
      },
      {
        "@type": "TechArticle",
        "@id": "https://www.quartzinternational.ca/cost#article",
        "headline": "Quartz Countertop Cost in Toronto & GTA (2026 Pricing Guide)",
        "description": "Quartz countertops installed in the Toronto & GTA region cost $48 to $170 per square foot. Get an instant custom estimate.",
        "mainEntityOfPage": {"@id": "https://www.quartzinternational.ca/cost#webpage"},
        "author": {"@type": "Organization", "name": "Quartz International"},
        "publisher": {"@id": "https://www.quartzinternational.ca/#organization"},
        "datePublished": "2026-06-23",
        "dateModified": "2026-06-23",
        "inLanguage": "en-CA"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.quartzinternational.ca/cost#faq",
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
    <article className="bg-white min-h-screen font-sans">
      <SEO 
        title="Quartz Countertop Cost in Toronto & GTA (2026 Pricing Guide)" 
        description="Quartz countertops installed in the Toronto & GTA region cost $48 to $170 per square foot. Most kitchen projects total $2,000 to $8,500. Get your instant estimate." 
        canonical="/cost"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      {/* Semantic Header / Hero Section */}
      <header className="relative pt-12 md:pt-20 pb-20 overflow-hidden" aria-labelledby="page-title">
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.4em]">
            <Link to="/" className="hover:text-accent-dark">Home</Link> › <span>Cost Guide</span>
          </p>
        </nav>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <h1 id="page-title" className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-text-primary">
                Quartz Countertop Cost in Toronto & GTA (2026 Pricing Guide)
              </h1>
              {/* Answer-first paragraph exactly as Claude recommended */}
              <p className="text-gray-600 text-lg mb-10 max-w-xl leading-relaxed">
                Quartz countertops installed in the Toronto & GTA region cost <strong>$48 to $170 per square foot</strong>, including materials, fabrication, and professional installation. Most kitchen projects total <strong>$2,000 to $8,500</strong>, depending on kitchen size, quartz tier, and edge detailing. Get an instant custom estimate below.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quartz-countertop-estimator" className="btn-primary px-8 py-4 h-auto text-sm font-bold">
                  Calculate My Cost
                </Link>
                <Link to="/quartz-kitchen-countertops" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-accent transition-colors px-6">
                  View Quartz Options <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden shadow-2xl relative"
              >
                <img 
                  src={heroImg} 
                  alt="Modern Quartz Countertop" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" aria-labelledby="cost-per-sqft">
        <h2 id="cost-per-sqft" className="text-3xl font-bold mb-6 text-text-primary">Quartz Countertop Cost Per Square Foot (Installed)</h2>
        <p className="text-sm text-gray-600 mb-8 max-w-3xl">Pricing below varies based on slab selection, thickness (2cm or 3cm), edge profile, and project complexity. All prices include materials, fabrication, and installation in the GTA.</p>
        
        <div className="overflow-hidden rounded-3xl border border-border-custom bg-white shadow-sm mb-8">
          <div className="overflow-x-auto">
            {/* Semantic Table structure for LLMs */}
            <table className="w-full text-left">
              <caption className="sr-only">Quartz Countertop Pricing Tiers 2026</caption>
              <thead>
                <tr className="bg-gray-50/80 border-b border-border-custom">
                  <th scope="col" className="px-6 py-6 text-xs font-bold text-gray-500 uppercase tracking-widest text-left">Quartz Tier</th>
                  <th scope="col" className="px-6 py-6 text-xs font-bold text-gray-500 uppercase tracking-widest text-left">Description</th>
                  <th scope="col" className="px-6 py-6 text-xs font-bold text-white uppercase tracking-widest text-center bg-accent">Installed Cost <br /><span className="text-[10px] font-normal">per sq ft</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {pricingTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <th scope="row" className="px-6 py-6 font-bold text-text-primary">{row.level}</th>
                    <td className="px-6 py-6 text-gray-600">{row.desc}</td>
                    <td className="px-6 py-6 text-center font-bold text-lg text-text-primary bg-accent/5">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real Kitchen Examples */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" aria-labelledby="project-costs">
        <h2 id="project-costs" className="text-3xl font-bold mb-8 text-text-primary">Real Kitchen Project Costs in Toronto & GTA</h2>
        
        <div className="overflow-hidden rounded-3xl border border-border-custom bg-white shadow-sm mb-12">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/80 border-b border-border-custom">
                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Kitchen Type</th>
                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Size</th>
                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Total Installed Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom">
              {examples.map((ex, idx) => (
                <tr key={idx}>
                  <th scope="row" className="px-6 py-4 font-bold text-text-primary">{ex.title}</th>
                  <td className="px-6 py-4 text-gray-600">{ex.size}</td>
                  <td className="px-6 py-4 font-bold text-text-primary">{ex.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost Factors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 bg-[#F8F9FA] rounded-[3rem] p-12 border border-border-custom" aria-labelledby="what-affects-cost">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 id="what-affects-cost" className="text-3xl font-bold mb-8 text-text-primary">What Affects Quartz Countertop Pricing?</h2>
            {/* Semantic Unordered List */}
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Kitchen size and layout:</strong> more surface area equals higher material and labor cost.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Quartz brand and pattern:</strong> premium veined designs cost more than standard speckled patterns.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Edge profile:</strong> standard eased edges are included, but ogee, waterfall, or mitered drops are premium upgrades.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Cutouts:</strong> under-mount sinks, cooktops, and plumbing fixtures require precision cuts.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
                <span><strong>Removal and disposal:</strong> tearing out existing laminate or stone adds labor hours.</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-border-custom text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
                  <Calculator size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary">Get Your Exact Price Instantly</h3>
                <p className="text-gray-500 mb-8">
                  Use our interactive estimator to calculate your custom kitchen countertop cost in under 30 seconds.
                </p>
                <Link to="/quartz-countertop-estimator" className="btn-primary w-full h-14 flex items-center justify-center text-sm font-bold">
                  Start Calculator →
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quartz vs Other Materials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" aria-labelledby="quartz-vs-others">
        <h2 id="quartz-vs-others" className="text-3xl font-bold text-text-primary mb-8">Quartz vs. Granite vs. Marble vs. Laminate</h2>
        
        <div className="overflow-hidden rounded-3xl border border-border-custom bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/80 border-b border-border-custom">
                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Material</th>
                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Maintenance</th>
                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Durability</th>
                <th scope="col" className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Cost vs Quartz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-custom">
              {compareCards.map((card, idx) => (
                <tr key={idx}>
                  <th scope="row" className="px-6 py-4 font-bold text-text-primary flex items-center gap-3">
                    <img src={card.img} alt={card.name} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                    {card.name}
                  </th>
                  <td className="px-6 py-4 text-gray-600">{card.maintenance}</td>
                  <td className="px-6 py-4 text-gray-600">{card.durability}</td>
                  <td className="px-6 py-4 text-gray-600 font-medium">{card.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-3xl font-bold mb-10 text-text-primary text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border-custom rounded-2xl bg-white overflow-hidden">
               <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center group transition-colors"
                  aria-expanded={openFaq === idx}
               >
                  {/* Real H3 semantic headers for the questions */}
                  <h3 className="font-bold text-lg text-text-primary pr-8">{faq.q}</h3>
                  <div className={cn("transition-transform duration-300 shrink-0", openFaq === idx ? "rotate-180" : "")}>
                     <ChevronDown size={20} className="text-accent" />
                  </div>
               </button>
               {/* Make sure content stays in DOM but is just visually hidden if closed, or rely on SSR. Here we use standard react unmounting, but the SSG handles the open state or raw HTML */}
               {openFaq === idx && (
                 <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                 </div>
               )}
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
