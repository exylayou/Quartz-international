import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, MapPin, Maximize, Check, Layers, ChevronDown, Camera, XCircle, Clock, Sparkles, Sliders, Palette, ShieldCheck } from 'lucide-react';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { cabinetPseoPages } from '../data/cabinetPseoData';

export default function CabinetPseoPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const seoSlug = location.pathname.substring(1);
  const pageData = cabinetPseoPages.find(p => p.slug === seoSlug);

  if (!pageData) {
    return <Navigate to="/" replace />;
  }

  const is10x10Page = pageData.slug === '10x10-kitchen-cabinets-toronto';

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-accent/30 text-text-primary">
      <SEO 
        title={pageData.seoTitle} 
        description={pageData.metaDescription} 
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 text-center lg:text-left order-1 lg:order-1 space-y-6">
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-2"
              >
                <span className="inline-flex items-center gap-2 bg-[#F0EBE1] border border-border-custom px-4 py-1.5 rounded-full text-[10px] font-bold text-gray-600 uppercase tracking-widest leading-none">
                  <Sparkles size={12} className="text-accent" />
                  {pageData.pageType === 'style' ? 'Kitchen Cabinet Styles' : pageData.pageType === 'material' ? 'Cabinet Construction' : 'Package Pricing'}
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary leading-[1.08] tracking-tight"
              >
                {pageData.h1}
              </motion.h1>

              {/* $5,999 Headline Price Callout for 10x10 Page */}
              {is10x10Page && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 px-6 py-3 rounded-2xl text-accent font-black text-xl sm:text-2xl shadow-sm"
                >
                  <span>Turnkey Packages Starting from $5,999 CAD</span>
                </motion.div>
              )}
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
              >
                {pageData.heroCopy}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <button 
                  onClick={() => navigate('/kitchen-cabinet-estimator')}
                  className="btn-primary h-14 sm:h-16 px-8 text-base font-bold flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 w-full sm:w-auto"
                >
                  Get 10×10 Package Estimate
                  <ArrowRight size={18} />
                </button>
                
                <button 
                  onClick={() => navigate('/kitchen-cabinet-estimator')}
                  className="btn-outline h-14 sm:h-16 px-8 text-base font-bold flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Calculate Custom Dimensions
                </button>
              </motion.div>

              <p className="text-[11px] text-gray-400 font-semibold italic">
                *Language of starting ranges: Pricing based on baseline layout footprints and standard finishes.
              </p>
            </div>

            {/* Right Column: Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative order-2 lg:order-2"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-border-custom bg-gray-50">
                <img 
                  src={pageData.image} 
                  alt={pageData.h1} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-xs font-bold text-gray-700 flex items-center justify-between">
                  <span>Toronto & GTA Delivery Available</span>
                  <span className="text-accent uppercase tracking-widest text-[9px] font-black">Turnkey Bundles</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Quick Price Section */}
      <section className="py-20 bg-[#FAF9F6] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Transparent Pricing</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">10×10 Package Price Breakdown</h2>
            <p className="text-gray-500 font-semibold">Compare starting baseline ranges for your Toronto kitchen upgrade.</p>
          </div>

          <div className="bg-white rounded-3xl border border-border-custom shadow-xl overflow-hidden mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F0EBE1] text-gray-600 uppercase text-[10px] tracking-wider font-bold">
                  <th className="p-5 sm:p-6 border-b border-border-custom">Package Option</th>
                  <th className="p-5 sm:p-6 border-b border-border-custom">Starting Price</th>
                  <th className="p-5 sm:p-6 border-b border-border-custom hidden sm:table-cell">Inclusions & Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pageData.pricingTable.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-5 sm:p-6 font-bold text-text-primary">{row.title}</td>
                    <td className="p-5 sm:p-6 font-black text-accent text-lg sm:text-xl">{row.range}</td>
                    <td className="p-5 sm:p-6 text-xs text-gray-500 hidden sm:table-cell font-medium">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <p className="inline-block bg-white border border-border-custom text-gray-600 px-6 py-3 rounded-2xl text-xs font-medium italic shadow-sm">
              {pageData.pricingNote}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Inclusions vs Exclusions Section (Key for 10x10) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Full Transparency</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">What's Included in the $5,999 Package</h2>
            <p className="text-gray-500 font-semibold">Know exactly what your baseline budget covers before you customize.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* What is Included */}
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-3 text-emerald-800 font-bold text-xl">
                <CheckCircle2 size={24} className="text-emerald-600 shrink-0" />
                <h3>Included in $5,999 Baseline</h3>
              </div>
              <ul className="space-y-3 text-sm text-emerald-950 font-medium">
                {[
                  "Solid plywood or HDF cabinet box construction",
                  "Standard 10-to-12 cabinet units (approx. 20 linear feet)",
                  "Full-overlay door & drawer fronts (White Shaker or Flat Panel)",
                  "Heavy-duty DTC soft-close hinges & undermount glides",
                  "Standard hardware pulls & adjustable shelving",
                  "Group 1 Quartz Countertop supply (approx. 20–25 sq ft)",
                  "Professional quartz measurement, fabrication, & installation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What is NOT Included */}
            <div className="bg-amber-50/60 border border-amber-200 rounded-3xl p-8 space-y-6">
              <div className="flex items-center gap-3 text-amber-900 font-bold text-xl">
                <XCircle size={24} className="text-amber-600 shrink-0" />
                <h3>Excluded from Starting Package</h3>
              </div>
              <ul className="space-y-3 text-sm text-amber-950 font-medium">
                {[
                  "Appliance disconnects & reconnection (plumbing/gas)",
                  "Existing cabinet demolition & haul-away (optional add-on)",
                  "Tile backsplash installation",
                  "Structural wall removals or bulkhead modifications",
                  "Electrical wiring or under-cabinet lighting",
                  "Luxury tier quartz slabs (Group 2+ veined quartz optional upgrade)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-600 shrink-0 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Example Layouts Breakdown */}
      <section className="py-20 bg-background/50 border-t border-border-custom">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Layout Adaptation</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Example 10×10 Layout Configurations</h2>
            <p className="text-gray-500 font-semibold">How standard package pricing translates across different floor plans.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "L-Shape Layout (Baseline)",
                desc: "10ft × 10ft corner configuration (20 LF total). Ideal for open-concept homes.",
                cabinets: "10–11 Cabinets (Base + Wall)",
                fit: "Standard Toronto single-family homes & townhouses",
                image: "/images/white_shaker_no_island.png"
              },
              {
                title: "Galley / Parallel Layout",
                desc: "Two parallel 10ft wall runs facing each other (20 LF total). Maximizes workspace efficiency.",
                cabinets: "10–12 Cabinets (Includes sink run)",
                fit: "Downtown Toronto condos & narrow urban kitchens",
                image: "/images/galley_kitchen_layout.png"
              },
              {
                title: "U-Shape Layout",
                desc: "Three connected walls forming a U (requires +1 corner base unit).",
                cabinets: "11–13 Cabinets (+Corner Lazy Susan option)",
                fit: "Enclosed suburban kitchens requiring maximum counter space",
                image: "/images/u_shape_kitchen_layout.png"
              }
            ].map((layout, idx) => (
              <div key={idx} className="bg-white border border-border-custom rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300">
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative border-b border-border-custom">
                  <img src={layout.image} alt={layout.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                    20 Linear Feet
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-black text-accent uppercase tracking-widest">Layout Type {idx + 1}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{layout.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 font-medium">{layout.desc}</p>
                  </div>
                  
                  <div className="space-y-2 border-t border-gray-100 pt-4 text-xs font-semibold text-gray-700">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cabinet Count:</span>
                      <span>{layout.cabinets}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Best For:</span>
                      <span className="text-right">{layout.fit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Door Styles & Colour Options */}
      <section className="py-20 bg-white border-t border-border-custom">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-16">
            
            {/* Door Styles Section */}
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Door Profile Options</span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Actual Cabinet Door Styles</h2>
                <p className="text-gray-500 font-medium">Visual close-ups of our four primary cabinet door profiles.</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Classic Shaker", desc: "Timeless recessed panel profile", tier: "Popular Standard", image: "/images/white_shaker_kitchen_hero.png" },
                  { name: "Slim Shaker", desc: "Refined 3/4\" thin frame border", tier: "Modern Transitional", image: "/images/slim_shaker_kitchen_hero.jpg" },
                  { name: "Flat Panel (Slab)", desc: "Sleek minimalist flat surface", tier: "Contemporary", image: "/images/modern_kitchen_hero.jpg" },
                  { name: "High Gloss", desc: "Ultra-reflective acrylic mirror finish", tier: "Condo Minimalist", image: "/images/gloss_white_no_island.png" }
                ].map((style, idx) => (
                  <div key={idx} className="bg-background border border-border-custom rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all space-y-3 p-3">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 border border-border-custom/50">
                      <img src={style.image} alt={style.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="px-2 pb-2 space-y-1">
                      <span className="text-[9px] font-bold text-accent uppercase tracking-wider block">{style.tier}</span>
                      <h4 className="font-bold text-base">{style.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">{style.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Colour Palette Section */}
            <div className="space-y-8 border-t border-gray-100 pt-16">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Finish Palette</span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Popular Colour & Material Finishes</h2>
                <p className="text-gray-500 font-medium">Textured wood grains, painted finishes, and high-gloss options.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { color: "Pure White", desc: "Clean, crisp classic white", image: "/images/white_shaker_no_island.png" },
                  { color: "Smoked Oak", desc: "Rich organic wood grain", image: "/images/dark_wood_no_island.png" },
                  { color: "Matt Grey", desc: "Modern anti-fingerprint matte", image: "/images/modern_kitchen_hero.jpg" },
                  { color: "Gloss White", desc: "Light-reflecting gloss", image: "/images/gloss_white_no_island.png" },
                  { color: "Whitish Maple", desc: "Scandi light maple grain", image: "/images/affordable_kitchen_hero.jpg" },
                  { color: "Bold Navy", desc: "Deep blue accent tone", image: "/images/cabinet_cities_hero_common.jpg" }
                ].map((c, idx) => (
                  <div key={idx} className="bg-white border border-border-custom rounded-2xl p-2 shadow-sm space-y-2 group hover:border-accent transition-colors">
                    <div className="aspect-square rounded-xl overflow-hidden border border-border-custom/50 bg-gray-50">
                      <img src={c.image} alt={c.color} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="text-center px-1 pb-1">
                      <span className="text-xs font-bold text-text-primary block">{c.color}</span>
                      <span className="text-[10px] text-gray-400 font-semibold block">{c.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Upgrade Options */}
      <section className="py-20 bg-background/50 border-t border-border-custom">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Customization</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Popular Package Upgrades</h2>
            <p className="text-gray-500 font-semibold">Enhance functionality and storage with simple add-ons.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Deep Drawer Banks", desc: "Replace standard door bases with 3-drawer pots & pans banks" },
              { title: "Pantry Towers", desc: "Full-height 84\" or 90\" pantry cabinets for maximum storage" },
              { title: "Crown Moulding", desc: "Architectural ceiling trim and under-cabinet light valance" },
              { title: "Finished End Panels", desc: "Matching cover panels for exposed cabinet box sides" }
            ].map((upgrade, idx) => (
              <div key={idx} className="bg-white border border-border-custom p-6 rounded-2xl space-y-2">
                <Sliders size={20} className="text-accent mb-2" />
                <h4 className="font-bold text-sm">{upgrade.title}</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{upgrade.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Typical Timeline */}
      <section className="py-20 bg-white border-t border-border-custom">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Project Schedule</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Typical Installation Timeline</h2>
            <p className="text-gray-500 font-semibold">How fast your Toronto kitchen transformation takes place.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1. Supply & Delivery", time: "3–5 Days", desc: "RTA flat-packed or pre-assembled cabinets delivered directly to your GTA job site." },
              { step: "2. Cabinet Assembly & Setting", time: "Day 5–7", desc: "Cabinets assembled and securely anchored to walls. Base cabinets leveled." },
              { step: "3. Quartz Templating & Install", time: "1–2 Weeks", desc: "Laser templating scheduled immediately after base cabinets are set. Quartz installed 5-7 days after template." }
            ].map((t, idx) => (
              <div key={idx} className="bg-background border border-border-custom p-8 rounded-3xl relative">
                <Clock className="text-accent mb-4" size={24} />
                <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-1">{t.step}</span>
                <h3 className="text-2xl font-black text-text-primary mb-2">{t.time}</h3>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-20 bg-[#FAF9F6] border-t border-border-custom">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-medium">Common questions about 10×10 cabinet packages in Toronto.</p>
          </div>

          <div className="space-y-4 mb-16">
            {pageData.faqs.map((faq, i) => (
              <div key={i} className="border border-border-custom rounded-2xl bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-text-primary text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown size={20} className={`text-accent shrink-0 transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      <div className="px-6 pb-6 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-50 pt-4 font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Bottom CTA Card */}
          <div className="bg-text-primary text-white p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <span className="text-xs font-bold text-accent uppercase tracking-widest block">Ready to Start?</span>
            <h3 className="text-3xl sm:text-4xl font-black tracking-tight">Get Your 10×10 Cabinet Package Estimate</h3>
            <p className="text-gray-300 max-w-xl mx-auto text-sm font-medium">
              Send us three photos of your existing kitchen space or your layout dimensions to receive a personalized package quote in under 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <button 
                onClick={() => navigate('/kitchen-cabinet-estimator')}
                className="btn-primary h-14 px-8 text-sm font-bold flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Calculate 10×10 Package Estimate &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
