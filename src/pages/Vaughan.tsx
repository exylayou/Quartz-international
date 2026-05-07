import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  MapPin, 
  Maximize, 
  Check, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Award, 
  Gem, 
  Quote, 
  ChevronDown 
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { useCalculator } from '../context/CalculatorContext';

export default function Vaughan() {
  const { openCalculator } = useCalculator();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much do quartz countertops cost in Vaughan?",
      a: "Quartz countertops in Vaughan typically range from $70 to $140 per square foot installed. Because Vaughan is the hub for many stone importers, we can often offer highly competitive pricing on premium brands."
    },
    {
      q: "How long does installation take in Vaughan?",
      a: "Our Vaughan-based teams typically complete projects in 5-7 business days. This includes the final site template, precision fabrication, and the actual installation which takes about 4-6 hours."
    },
    {
      q: "Do you serve Woodbridge, Maple, and Kleinburg?",
      a: "Yes! We provide full service, including site measurements and installation, across all of Vaughan including Woodbridge, Maple, Concord, Kleinburg, and Thornhill."
    },
    {
      q: "What brands of quartz do you carry in Vaughan?",
      a: "We carry all major premium brands available in the Vaughan slab yards, including Caesarstone, Silestone, HanStone (made in Ontario), Cambria, and MSI Q Quartz."
    },
    {
      q: "Can I see the slabs in person?",
      a: "Absolutely. Many of our preferred material partners are located right in the Vaughan/Concord area. We can arrange for you to view and tag your specific slabs before fabrication."
    },
    {
      q: "Is there a warranty on the installation?",
      a: "Yes, we provide a lifetime craftsmanship warranty on all our installations in Vaughan, in addition to the manufacturer's material warranty."
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-accent/30">
      {/* Hero Section */}
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
                  Vaughan, Woodbridge & Maple Quartz Specialists
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-10"
              >
                Quartz Countertops in Vaughan — <span className="text-accent">Direct Pricing & 5-Day Install</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Vaughan is the heart of Ontario's stone industry. We leverage our local Vaughan partnerships to bring you premium quartz countertops at direct-to-home prices.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center lg:items-start gap-8"
              >
                <div className="relative group">
                   <button 
                    onClick={() => openCalculator()}
                    className="btn-primary h-16 sm:h-20 px-12 text-xl flex items-center justify-center gap-3 shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-500"
                  >
                    Get My Instant Estimate
                    <ArrowRight size={24} />
                  </button>
                  
                  <div className="absolute -top-5 -right-5 sm:-right-8 bg-text-primary text-white text-[11px] font-bold px-4 py-1.5 rounded-full shadow-xl transform rotate-3 border border-accent/30">
                    Most kitchens: $4,000 – $8,000
                  </div>
                </div>
                
                <Link 
                  to="/cost" 
                  className="text-gray-400 text-sm font-medium hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  View 2026 Pricing Guide
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-20 pt-10 border-t border-gray-200/50 flex flex-wrap justify-center lg:justify-start items-center gap-x-10 gap-y-6 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2.5">
                  <Star size={18} className="text-accent fill-accent" />
                  <span className="font-semibold text-text-primary">4.9 Rating in Vaughan</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span className="font-semibold text-text-primary">Locally Fabricated</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={18} className="text-accent" />
                  <span className="font-semibold text-text-primary">Serving Woodbridge, Maple & Concord</span>
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
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] group">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Quartz countertop installation in a Vaughan luxury home" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-accent" />
                    Installed in Vaughan
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
              </div>
              
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Guide Section */}
      <section className="py-24 bg-background/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Quartz Countertop Cost in Vaughan <br className="hidden md:block" />
              <span className="text-accent">(2026 Local Market Guide)</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Take advantage of Vaughan's proximity to major stone importers. Our pricing reflects direct fabrication rates with professional local installation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Vaughan Value Tier",
                price: "$70 – $85",
                features: ["Solid colors & simple patterns", "Ideal for rental suites & basement bars"],
                color: "bg-green-50 border-green-100"
              },
              {
                title: "Designer Selection",
                popular: true,
                price: "$85 – $115",
                features: ["Trend-leading marble looks", "Best value for most Vaughan family homes"],
                color: "bg-accent/5 border-accent/20"
              },
              {
                title: "Elite Collections",
                price: "$115 – $160+",
                features: ["Exotic veining (Cambria, Silestone)", "Full-height backsplash options"],
                color: "bg-gray-50 border-gray-100"
              }
            ].map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 border rounded-2xl relative ${tier.color}`}
              >
                {tier.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Local Favorite
                  </span>
                )}
                <h3 className="text-xl font-bold mb-4">{tier.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-text-primary">{tier.price}</span>
                  <span className="text-gray-500 text-sm ml-2">/ sq ft</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-20">
            <p className="inline-block bg-text-primary text-white px-6 py-2 rounded-full text-sm font-bold">
              Most Vaughan kitchens range from $4,000 – $8,000 installed.
            </p>
          </div>

          {/* Local Advantage Factors */}
          <div className="border-t border-gray-200 pt-20">
            <h3 className="text-3xl font-bold mb-12 text-center uppercase tracking-tight">The Vaughan Advantage</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="space-y-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Direct from Fabricator", desc: "No middle-man showrooms. We cut and polish in Vaughan.", icon: <Maximize size={20} /> },
                    { title: "View Your Slabs", desc: "Most major stone yards are 10 minutes from our facility.", icon: <Check size={20} /> },
                    { title: "Rapid Turnaround", desc: "Local teams mean faster site measures and installs.", icon: <Clock size={20} /> },
                    { title: "Premium Hardware", desc: "Access to top hardware suppliers in Woodbridge/Concord.", icon: <Gem size={20} /> },
                  ].map((item, i) => (
                    <motion.li 
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm"
                    >
                      <div className="text-accent mb-3">{item.icon}</div>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800" 
                      alt="Modern kitchen island with quartz in Woodbridge" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 text-center italic">Modern Woodbridge Home</p>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" 
                      alt="Quartz waterfall edge detail" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 text-center italic">Waterfall Edge Detail</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-text-primary text-white p-10 md:p-16 rounded-[2rem] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h4 className="text-3xl font-bold mb-6">Want a local Vaughan price?</h4>
                <p className="text-gray-400 mb-10 text-lg">Use our 30-second calculator to get a precise estimate based on 2026 Vaughan market rates.</p>
                <button 
                  onClick={() => openCalculator()}
                  className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-12"
                >
                  Get My Vaughan Quote
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Transformations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
            >
              Vaughan Kitchen Transformations
            </motion.h2>
            <p className="text-lg text-gray-600 mb-8">Real kitchens installed in Woodbridge, Maple, and Concord.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                location: "Woodbridge",
                title: "Contemporary Island Upgrade",
                testimonial: "The direct pricing saved us thousands compared to the retail showrooms.",
                author: "Robert",
                price: "$5,200 – $7,500",
                image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800"
              },
              {
                location: "Maple",
                title: "Full Kitchen Quartz Package",
                testimonial: "Install was perfectly clean and the seams are invisible.",
                author: "Elena",
                price: "$4,800 – $6,200",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800"
              },
              {
                location: "Kleinburg",
                title: "Luxury Quartz Transformation",
                testimonial: "Exactly what we wanted for our custom kitchen project.",
                author: "David",
                price: "$9,000 – $14,000",
                image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col h-full"
              >
                <div className="px-8 pt-6 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                    <MapPin size={12} className="text-accent" />
                    Installed in {project.location}
                  </span>
                </div>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <div className="mb-6 flex-grow">
                    <p className="text-gray-600 italic text-sm leading-relaxed mb-2">"{project.testimonial}"</p>
                    <p className="text-[11px] font-bold text-accent uppercase tracking-wider">— {project.author}, {project.location}</p>
                  </div>
                  <div className="mb-8 pt-6 border-t border-gray-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Project Range</p>
                    <p className="text-lg font-bold text-text-primary">{project.price}</p>
                  </div>
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary w-full h-14 flex items-center justify-center gap-2 text-sm font-bold shadow-lg shadow-accent/10 transition-all duration-500"
                  >
                    Price This Kitchen
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & FAQ Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 tracking-tight">Vaughan Countertop FAQ</h2>
          </div>
          <div className="space-y-4 mb-20">
            {faqs.map((faq, i) => (
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
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
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
              className="btn-primary h-20 px-16 text-xl shadow-2xl shadow-accent/20 group"
            >
              Get Instant Vaughan Quote
              <ArrowRight size={24} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer Closing Section */}
      <section className="py-32 bg-text-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center text-white">
          <h2 className="text-4xl sm:text-6xl font-bold mb-8 leading-[1.1] tracking-tighter">Your New Kitchen Starts Here.</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium italic">Join thousands of Vaughan homeowners who have upgraded their kitchens with our transparent pricing model.</p>
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => openCalculator()}
              className="btn-primary h-20 px-16 text-xl shadow-2xl shadow-accent/20 transition-all duration-500 group w-full sm:w-auto"
            >
              Get My Estimate Now
              <ArrowRight size={24} className="ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" />
              Trusted Vaughan Countertop Specialists
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mt-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mb-48" />
      </section>
    </div>
  );
}
