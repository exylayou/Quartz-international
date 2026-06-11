import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, MapPin, Maximize, Check, Layers, ShieldCheck, Clock, Award, Gem, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Markham() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is the average cost of quartz countertops in Markham?",
      a: "Most projects range from $50 to $150 per square foot installed, with total kitchen costs typically between $3,000 and $6,000."
    },
    {
      q: "How long does a quartz installation take?",
      a: "Most installations are completed within 5-7 days from templating to installation."
    },
    {
      q: "What factors affect pricing the most?",
      a: "Kitchen size, layout, number of cutouts, and material selection."
    },
    {
      q: "Is quartz a good choice for kitchens?",
      a: "Yes — quartz is durable, low-maintenance, and ideal for modern kitchens."
    },
    {
      q: "Does quartz need sealing?",
      a: "No — quartz is non-porous and does not require sealing."
    },
    {
      q: "Do you serve areas around Markham?",
      a: "Yes — including Richmond Hill, Unionville, and the entire GTA."
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
                  Markham, Richmond Hill & Unionville Quartz Specialists
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-10"
              >
                Quartz Countertops in Markham — <span className="text-accent">Get Your Exact Price in 30 Seconds</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Planning a kitchen upgrade in Markham? Get instant, accurate pricing for quartz countertops with no obligation and no hidden costs.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col items-center lg:items-start gap-8"
              >
                <div className="relative group">
                  <Link 
                    to="/estimate" 
                    className="btn-primary h-16 sm:h-20 px-12 text-xl flex items-center justify-center gap-3 shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-500"
                  >
                    Get My Instant Estimate
                    <ArrowRight size={24} />
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-20 pt-10 border-t border-gray-200/50 flex flex-wrap justify-center lg:justify-start items-center gap-x-10 gap-y-6 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2.5">
                  <Star size={18} className="text-accent fill-accent" />
                  <span className="font-semibold text-text-primary">4.9 Rating</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-accent" />
                  <span className="font-semibold text-text-primary">5,000+ Kitchens Installed</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin size={18} className="text-accent" />
                  <span className="font-semibold text-text-primary">Serving Markham, Richmond Hill & Unionville</span>
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
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200" 
                  alt="Quartz countertops Markham installation" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-accent" />
                    Installed in Markham
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Pricing Guide */}
      <section className="py-24 bg-background/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Quartz Countertop Cost in Markham <br className="hidden md:block" />
              <span className="text-accent">(2026 Pricing Guide)</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              The cost of quartz countertops in Markham typically ranges from $50 to $150 per square foot installed, depending on your kitchen size, layout, and design preferences.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Entry Level Quartz",
                price: "$50 – $85",
                features: ["Clean, solid colors", "Great for budget renovations"],
                color: "bg-green-50 border-green-100"
              },
              {
                title: "Designer Quartz",
                popular: true,
                price: "$85 – $140",
                features: ["Modern veining styles", "Best value for most homeowners"],
                color: "bg-accent/5 border-accent/20"
              },
              {
                title: "Premium Quartz",
                price: "$140+",
                features: ["High-end brands", "Luxury finishes"],
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
                    Most Popular
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
              Most kitchens in Markham fall between $3,000 – $6,000 installed.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-20">
            <h3 className="text-3xl font-bold mb-12 text-center">What Determines the Final Price?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {[
                { title: "Total Square Footage", icon: <Maximize size={20} /> },
                { title: "Layout (L, U, Island)", icon: <Layers size={20} /> },
                { title: "Sink & Cooktop Cutouts", icon: <Check size={20} /> },
                { title: "Edge Details & Thickness", icon: <Gem size={20} /> },
                { title: "Installation Complexity", icon: <ShieldCheck size={20} /> },
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white border border-gray-100 rounded-xl text-center"
                >
                  <div className="text-accent mb-4 flex justify-center">{item.icon}</div>
                  <h4 className="font-bold text-xs">{item.title}</h4>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/estimate" className="btn-primary inline-flex items-center gap-2">
                Get My Instant Estimate
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Transformations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Quartz Kitchen Upgrades in Markham
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              See how homeowners in Markham are transforming their kitchens with modern quartz surfaces.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                location: "Markham",
                title: "Typical Kitchen Upgrade",
                testimonial: "Everything was done fast and exactly as promised.",
                author: "Linda",
                price: "$3,600 – $5,100",
                image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800"
              },
              {
                location: "Richmond Hill",
                title: "Modern Island Upgrade",
                testimonial: "The island completely changed the space.",
                author: "Jason",
                price: "$4,500 – $6,500",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
              },
              {
                location: "Unionville",
                title: "Full Kitchen Refresh",
                testimonial: "Clean install and great attention to detail.",
                author: "Anita",
                price: "$3,200 – $4,700",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-full"
              >
                <div className="px-8 pt-6 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                    <MapPin size={12} className="text-accent" />
                    Installed in {project.location}
                  </span>
                </div>
                <div className="aspect-[4/3] overflow-hidden relative bg-gray-50">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-text-primary">{project.title}</h3>
                  <div className="mb-6 flex-grow">
                    <p className="text-gray-600 italic text-sm leading-relaxed mb-2">
                      "{project.testimonial}"
                    </p>
                    <p className="text-[11px] font-bold text-accent uppercase tracking-wider">
                      — {project.author}, {project.location}
                    </p>
                  </div>
                  <div className="mb-8 pt-6 border-t border-gray-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Project Range</p>
                    <p className="text-lg font-bold text-text-primary">{project.price}</p>
                  </div>
                  <Link 
                    to="/estimate" 
                    className="btn-primary w-full h-14 flex items-center justify-center gap-2 text-sm font-bold shadow-lg shadow-accent/10 group-hover:shadow-accent/30 transition-all duration-500"
                  >
                    Get This Exact Kitchen Price
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Trust */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-text-primary"
              >
                Why Markham Homeowners Choose Quartz International for Their Countertops
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-600 mb-4"
              >
                From modern condos to larger family homes, we deliver high-quality quartz countertops with fast turnaround and transparent pricing.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm font-bold text-accent mb-12"
              >
                No hidden fees. No surprises. Just real pricing.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    title: "Transparent Pricing",
                    desc: "Accurate quotes based on real Markham installations.",
                    icon: <ShieldCheck size={24} />
                  },
                  {
                    title: "Precision Fabrication",
                    desc: "Clean seams, detailed finishing, and expert installation.",
                    icon: <Gem size={24} />
                  },
                  {
                    title: "Fast Project Turnaround",
                    desc: "Most kitchens completed within 5-7 days.",
                    icon: <Clock size={24} />
                  },
                  {
                    title: "Trusted Across the GTA",
                    desc: "Over 5,000 kitchens completed in Toronto and surrounding areas.",
                    icon: <Award size={24} />
                  }
                ].map((pillar, i) => (
                  <div key={pillar.title} className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-2">{pillar.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group bg-gray-50">
                <img 
                  src="/images/fabrication.jpeg" 
                  alt="Quartz fabrication process" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-10 border-y border-gray-100 flex flex-wrap justify-center items-center gap-x-16 gap-y-8 text-center"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-bold text-text-primary uppercase tracking-widest">⭐ 4.9 Google Rating</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-text-primary">5,000+</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Kitchens Installed</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-text-primary">Serving</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Markham & GTA</span>
            </div>
          </motion.div>

          <div className="mt-20 text-center">
            <Link 
              to="/estimate" 
              className="btn-primary inline-flex items-center justify-center gap-4 h-20 px-16 text-xl shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-500 group"
            >
              Get My Instant Estimate
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="py-24 bg-background/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-text-primary"
            >
              Quartz Countertops Markham — Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-text-primary">{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-accent transition-transform duration-300 ${openFaqIndex === i ? 'rotate-180' : ''}`} 
                  />
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
            <Link 
              to="/estimate" 
              className="btn-primary inline-flex items-center justify-center gap-4 h-16 px-12 text-lg shadow-xl shadow-accent/20 group"
            >
              Get My Instant Estimate
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: FINAL CTA */}
      <section className="py-32 bg-text-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury quartz countertop" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-text-primary/80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]"
            >
              Get Your Quartz Countertop Price in 30 Seconds
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-12 leading-relaxed"
            >
              Get a fast, accurate estimate tailored to your kitchen — no pressure, no obligation.
            </motion.p>

            <div className="flex flex-col items-center gap-6">
              <Link 
                to="/estimate" 
                className="btn-primary inline-flex items-center justify-center gap-4 h-20 px-16 text-xl shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-500 group w-full sm:w-auto"
              >
                Get My Instant Estimate
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>

              <p className="text-gray-400 text-sm font-medium flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                No obligation • No spam • Takes less than 30 seconds
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
