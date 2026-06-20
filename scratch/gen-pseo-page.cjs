const fs = require('fs');

const pageCode = `import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, MapPin, Maximize, Check, Layers, ChevronDown } from 'lucide-react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { cabinetPseoPages } from '../data/cabinetPseoData';

export default function CabinetPseoPage() {
  const { seoSlug } = useParams<{ seoSlug: string }>();
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const pageData = cabinetPseoPages.find(p => p.slug === seoSlug);

  if (!pageData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-accent/30">
      <SEO 
        title={pageData.seoTitle} 
        description={pageData.metaDescription} 
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <div className="text-center lg:text-left order-1 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-8"
              >
                <span className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">
                  {pageData.pageType === 'style' ? 'Kitchen Cabinet Styles' : pageData.pageType === 'material' ? 'Cabinet Construction' : 'Cabinet Packages'}
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-10"
              >
                {pageData.h1}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {pageData.heroCopy}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center lg:items-start gap-6"
              >
                <button 
                  onClick={() => navigate('/kitchen-cabinet-estimator')}
                  className="btn-primary h-16 sm:h-20 px-12 text-xl flex items-center justify-center gap-3 shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-500"
                >
                  Get a Cabinet Quote
                  <ArrowRight size={24} />
                </button>
                <div className="flex gap-4">
                   <button onClick={() => navigate('/kitchen-cabinet-estimator')} className="text-sm font-bold text-gray-500 hover:text-accent underline underline-offset-4">Send Measurements</button>
                   <button onClick={() => navigate('/kitchen-cabinet-estimator')} className="text-sm font-bold text-gray-500 hover:text-accent underline underline-offset-4">Ask About Quartz Packages</button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-2"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group bg-gray-50">
                <img 
                  src={pageData.image} 
                  alt={pageData.h1} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Quick Price Section */}
      <section className="py-24 bg-background/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Quick Price Guide</h2>
            <p className="text-lg text-gray-600">Explore starting ranges for your project.</p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-500 uppercase text-[10px] tracking-wider">
                  <th className="p-6 font-bold border-b border-gray-100">Kitchen Type</th>
                  <th className="p-6 font-bold border-b border-gray-100">Starting Range</th>
                  <th className="p-6 font-bold border-b border-gray-100 hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pageData.pricingTable.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 border-b border-gray-100 font-bold text-text-primary">{row.title}</td>
                    <td className="p-6 border-b border-gray-100 font-bold text-accent">{row.range}</td>
                    <td className="p-6 border-b border-gray-100 text-sm text-gray-500 hidden sm:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <p className="inline-block bg-white border border-gray-200 text-gray-600 px-6 py-3 rounded-xl text-sm italic">
              {pageData.pricingNote}
            </p>
          </div>
        </div>
      </section>

      {/* 3 & 4. Best For & Cabinet Options */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-text-primary">{pageData.bestForTitle}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{pageData.bestForCopy}</p>
              
              <div className="p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-accent shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Local Service Note</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{pageData.localServiceNote}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-text-primary">Cabinet Options Available</h2>
              <p className="text-gray-600 mb-8">Quartz International can help with cabinet options such as:</p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                {["Base cabinets", "Wall cabinets", "Pantry cabinets", "Drawer bases", "Sink bases", "Island cabinets", "Crown moulding", "Light valance", "Decorative panels", "Hardware"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-text-primary">
                    <CheckCircle2 size={16} className="text-accent" /> {item}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 italic">For budget-sensitive projects, a simpler layout with fewer drawers and accessories will usually cost less. For a more premium kitchen, large drawer bases, pantry storage, finished panels, and island details can increase the final price.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Quartz Pairing */}
      <section className="py-24 bg-text-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Best Quartz Countertops for This Style</h2>
            <p className="text-lg text-gray-300">
              Many clients choose to bundle cabinets with quartz countertops because it simplifies the process and helps coordinate the installation schedule perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.quartzPairings.map((pairing, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-bold text-accent mb-2">{pairing.look}</h4>
                <p className="text-sm text-gray-300">{pairing.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Buying Process */}
      <section className="py-24 bg-background/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold mb-16 text-center">How the Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "1. Send Measurements", desc: "Start with a rough sketch, photos, or existing cabinet layout." },
              { title: "2. Choose Options", desc: "Select cabinet style, material, and quartz countertop preferences." },
              { title: "3. Receive Quote", desc: "Get pricing based on layout, accessories, and installation needs." },
              { title: "4. Installation", desc: "Cabinets are supplied assembled or ready-to-install, followed by quartz templating." }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-accent/10 font-bold text-8xl absolute -top-8 -left-4 -z-10">{i + 1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4 mb-16">
            {pageData.faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-text-primary">{faq.q}</span>
                  <ChevronDown size={20} className={\`text-accent transition-transform duration-300 \${openFaqIndex === i ? 'rotate-180' : ''}\`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigate('/kitchen-cabinet-estimator')}
              className="btn-primary inline-flex items-center justify-center gap-4 h-16 px-12 text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-500"
            >
              Get a Cabinet Quote
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
`;

fs.writeFileSync('src/pages/CabinetPseoPage.tsx', pageCode);
console.log('Created CabinetPseoPage.tsx');
