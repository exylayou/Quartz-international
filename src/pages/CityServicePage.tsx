import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, MapPin, Check, ChevronDown, Building, PenTool, LayoutTemplate, Zap, Map } from 'lucide-react';
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';

import { useCalculator } from '../context/CalculatorContext';
import { cities } from '../data/cities';

export default function CityServicePage() {
  const { city } = useParams<{ city: string }>();
  const { openCalculator } = useCalculator();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  // Normalize slug to match dictionary keys
  let citySlug = city?.toLowerCase().replace(/[^a-z0-9-]/g, '') || '';
  if (citySlug.startsWith('quartz-countertops-')) {
    citySlug = citySlug.replace('quartz-countertops-', '');
  }
  
  const cityData = cities[citySlug];

  if (!cityData) {
    return <Navigate to="/" replace />;
  }

  const standardFaqs = [
    {
      q: `How much do quartz countertops cost in ${cityData.name}?`,
      a: `Quartz countertops in ${cityData.name} typically range from $48 to $170 per square foot installed, with most kitchens falling between $3,000 and $6,000 depending on size and design.`
    },
    {
      q: "How long does installation take?",
      a: "Most quartz countertop projects are completed within 5-7 days of templating."
    },
    {
      q: "Do quartz countertops require sealing?",
      a: "No. Unlike natural stone, quartz does not require sealing, making it easy to maintain."
    },
    {
      q: "Can I bundle my countertops with new kitchen cabinets?",
      a: "Yes! We offer cabinet and quartz bundle packages, which simplifies scheduling and ensures your countertops are measured the exact day your cabinets are installed."
    }
  ];

  const allFaqs = [...(cityData.customFaqs || []), ...standardFaqs];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-accent/30">
      <SEO 
        title={`Quartz Countertops ${cityData.name} | Supply & Install`} 
        description={`Premium quartz countertops installed in ${cityData.name}. Local showrooms available. Get an instant, accurate online estimate today.`} 
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
                  {cityData.name} & {cityData.region} Service Area
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-10"
              >
                Quartz Countertops in {cityData.name}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                {cityData.localIntro}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center lg:items-start gap-6"
              >
                <button 
                  onClick={() => openCalculator()}
                  className="btn-primary h-16 sm:h-20 px-12 text-xl flex items-center justify-center gap-3 shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-500"
                >
                  Get an Instant Quote
                  <ArrowRight size={24} />
                </button>
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
                  src={cityData.images?.hero || "/images/markham-hero.jpg"} 
                  alt={`Quartz countertops ${cityData.name} installation`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-accent" />
                    Installed in {cityData.name}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Countertop Services & 7. Local Project Notes */}
      <section className="py-24 bg-background/50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Services in {cityData.name}</h2>
              <p className="text-gray-600 mb-8">We provide a complete turnkey solution from templating to final installation. Our services include:</p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                {["Material Supply", "Laser Measurement", "Custom Fabrication", "Professional Install", "Sink Cutouts", "Faucet Holes", "Full-height Backsplash", "Waterfall Islands", "Removal/Disposal (upon request)"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-text-primary">
                    <CheckCircle2 size={16} className="text-accent" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <Building size={32} className="text-accent shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Local Project Notes</h3>
                    <p className="text-gray-600 leading-relaxed">{cityData.localProjectNotes}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={32} className="text-accent shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Areas Served</h3>
                    <p className="text-gray-600 leading-relaxed">We reliably service {cityData.areasServed} without extensive travel delays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pricing Guidance */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold mb-6">Pricing Guidance for {cityData.name}</h2>
          <p className="text-lg text-gray-600 mb-10">
            Quartz countertop pricing is highly variable based on square footage, edge profiles (like mitered edges), number of cutouts, and the exact material you select. On average, standard installations start around $3,000 - $6,000 for a typical kitchen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => openCalculator()} className="btn-primary px-8 h-14">Get an Instant Quote</button>
            <Link to={`/quartz-countertop-cost/${cityData.slug}`} className="font-bold text-gray-500 hover:text-accent underline underline-offset-4">
              View Detailed {cityData.name} Pricing Guide
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Popular Quartz Options */}
      <section className="py-24 bg-text-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Popular Quartz Options in {cityData.name}</h2>
            <p className="text-lg text-gray-300">
              Based on recent installations, here are the most requested countertop styles in your area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityData.popularOptions.map((opt, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="font-bold text-accent mb-2">{opt.name}</h4>
                <p className="text-sm text-gray-300">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Where to View Slabs */}
      <section className="py-24 bg-accent/5">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <Map size={48} className="text-accent mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Where to View Slabs</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            {cityData.showroomGuidance}
          </p>
          {cityData.showrooms && cityData.showrooms.length > 0 && (
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 text-left">
              <h3 className="text-2xl font-bold mb-6 text-center text-text-primary">Partner Showrooms</h3>
              <ul className="space-y-4">
                {cityData.showrooms.map((showroom, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <MapPin className="text-accent shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block text-lg text-text-primary">{showroom.brand}</strong>
                      <span className="text-gray-600">{showroom.address}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-sm text-gray-500 italic">
            Note: We always recommend viewing full slabs in person because small samples do not fully capture large-scale veining patterns.
          </p>
        </div>
      </section>

      {/* 6. Installation Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <LayoutTemplate size={24} />, title: "1. Send Measurements", desc: "Use our online calculator to submit your rough dimensions and photos." },
              { icon: <Map size={24} />, title: "2. Visit Showroom", desc: "Visit our local partner showrooms to select and tag your exact slab." },
              { icon: <PenTool size={24} />, title: "3. Laser Template", desc: "We visit your home to take highly accurate laser measurements." },
              { icon: <Zap size={24} />, title: "4. Installation", desc: "Fabrication takes roughly 5-7 days, followed by a professional 1-day install." }
            ].map((step, i) => (
              <div key={i} className="bg-background/50 p-6 rounded-2xl border border-gray-100">
                <div className="text-accent mb-4 bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm">{step.icon}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <section className="py-24 bg-background/30 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4 mb-16">
            {allFaqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-text-primary">{faq.q}</span>
                  <ChevronDown size={20} className={`text-accent transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`} />
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
              onClick={() => openCalculator()}
              className="btn-primary inline-flex items-center justify-center gap-4 h-16 px-12 text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-500"
            >
              Get Your {cityData.name} Quote
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
