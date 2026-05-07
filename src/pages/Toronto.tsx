import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, CheckCircle2, MapPin, Maximize, Check, Layers, ShieldCheck, Clock, Award, Gem, Quote, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useCalculator } from '../context/CalculatorContext';

export default function Toronto() {
  const { openCalculator } = useCalculator();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much do quartz countertops cost in Toronto?",
      a: "Quartz countertops in Toronto typically range from $50 to $150 per square foot installed, with most kitchens falling between $3,000 and $6,000 depending on size and design."
    },
    {
      q: "How long does installation take?",
      a: "Most quartz countertop projects are completed within 5-7 days, including templating, fabrication, and installation."
    },
    {
      q: "What affects the cost of quartz countertops?",
      a: "Pricing depends on: Kitchen size and layout, number of cutouts (sink, cooktop), edge profile, thickness (2cm vs 3cm), and material selection."
    },
    {
      q: "Are quartz countertops durable?",
      a: "Yes. Quartz is non-porous, scratch-resistant, and low maintenance, making it one of the most durable countertop materials available."
    },
    {
      q: "Do quartz countertops require sealing?",
      a: "No. Unlike natural stone, quartz does not require sealing, making it easy to maintain."
    },
    {
      q: "Can I get an exact quote online?",
      a: "Yes. Use our instant pricing tool to get a real, accurate estimate in under 30 seconds based on your kitchen layout."
    },
    {
      q: "Do you install across the GTA?",
      a: "Yes. We install quartz countertops across Toronto, North York, Scarborough, Vaughan, Mississauga, and surrounding areas."
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
              {/* Small top label */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-2 mb-8"
              >
                <span className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">
                  Toronto & GTA Quartz Countertop Specialists
                </span>
              </motion.div>
              
              {/* Main headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.05] tracking-tight mb-10"
              >
                Quartz Countertops in Toronto — <span className="text-accent">Get Your Exact Price in 30 Seconds</span>
              </motion.h1>
              
              {/* Subheadline */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Instant, accurate pricing for quartz countertops across Toronto and the GTA. No obligation. No hidden costs.
              </motion.p>

              {/* CTA Area */}
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
                  
                  {/* Price anchor badge */}
                  <div className="absolute -top-5 -right-5 sm:-right-8 bg-text-primary text-white text-[11px] font-bold px-4 py-1.5 rounded-full shadow-xl transform rotate-3 border border-accent/30">
                    Most kitchens: $3,000 – $6,000
                  </div>
                </div>
                
                {/* Secondary text link */}
                <Link 
                  to="/cost" 
                  className="text-gray-400 text-sm font-medium hover:text-accent transition-colors flex items-center gap-2 group"
                >
                  View Pricing Guide
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              {/* Trust indicators */}
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
                  <span className="font-semibold text-text-primary">Serving Toronto, Vaughan, Mississauga & GTA</span>
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
                  alt="Quartz countertops Toronto installation in a modern urban kitchen" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Optional Power Move Overlay */}
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-accent" />
                    Installed in Toronto
                  </span>
                </div>
                {/* Subtle light overlay for soft shadows feel */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
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
              Quartz Countertop Cost in Toronto <br className="hidden md:block" />
              <span className="text-accent">(2026 Pricing Guide)</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Quartz countertop prices in Toronto typically range from $50 to $150 per square foot installed, depending on material, edge profile, and kitchen layout.
            </motion.p>
          </div>

          {/* Pricing Table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Entry Level Quartz",
                price: "$50 – $85",
                features: ["Clean, solid colors", "Great for budget renovations"],
                color: "bg-green-50 border-green-100"
              },
              {
                title: "Mid-Range Quartz",
                popular: true,
                price: "$85 – $140",
                features: ["Modern veining styles", "Best value for most homeowners"],
                color: "bg-accent/5 border-accent/20"
              },
              {
                title: "Premium Quartz",
                price: "$140 – $190+",
                features: ["High-end brands (Cambria, Caesarstone)", "Luxury finishes"],
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
              Most Toronto kitchens fall between $3,000 – $6,000 installed.
            </p>
          </div>

          {/* Factors & Visuals */}
          <div className="border-t border-gray-200 pt-20">
            <h3 className="text-3xl font-bold mb-12 text-center">What Impacts Quartz Countertop Cost?</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Left: List and Signal */}
              <div className="space-y-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Kitchen Size & Layout", desc: "Total square footage and complexity of the shape.", icon: <Maximize size={20} /> },
                    { title: "Cutouts & Sinks", desc: "Number of holes for sinks, faucets, and cooktops.", icon: <Check size={20} /> },
                    { title: "Edge Profiles", desc: "Simple eased edges vs. complex decorative profiles.", icon: <Layers size={20} /> },
                    { title: "Slab Thickness", desc: "Standard 3cm vs. thinner 2cm options.", icon: <Maximize size={20} /> },
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
                
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <MapPin size={16} className="text-accent" />
                    We install quartz countertops across Toronto, North York, Scarborough, Vaughan, and Mississauga.
                  </p>
                </div>
              </div>

              {/* Right: Visuals */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
                      alt="Professional kitchen measurement and planning" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 text-center">Precise Measurement</p>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?auto=format&fit=crop&q=80&w=800" 
                      alt="Quartz slab thickness and stone detail" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 text-center">Thickness Options</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-text-primary text-white p-10 md:p-16 rounded-[2rem] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h4 className="text-3xl font-bold mb-6">Ready for an exact quote?</h4>
                <p className="text-gray-400 mb-10 text-lg">Skip the guesswork. Use our 30-second calculator to get a precise estimate for your specific kitchen.</p>
                <button 
                  onClick={() => openCalculator()}
                  className="btn-primary inline-flex items-center justify-center gap-3 text-lg px-12"
                >
                  Get My Instant Estimate
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Transformations / Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest mb-6"
            >
              <Star size={12} className="fill-accent" />
              5,000+ kitchens installed across the GTA
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Real Quartz Kitchen Transformations in Toronto
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 mb-4"
            >
              See how Toronto homeowners upgraded their kitchens with modern quartz countertops.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm font-bold text-text-primary bg-gray-50 inline-block px-4 py-2 rounded-lg border border-gray-100"
            >
              Most projects range from $3,000 – $6,000 depending on layout.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                location: "North York",
                title: "Typical Toronto Condo Upgrade",
                testimonial: "Transformed our small condo kitchen in just 2 days.",
                author: "Sarah",
                neighborhood: "North York",
                price: "$3,200 – $4,500",
                image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800"
              },
              {
                location: "Vaughan",
                title: "Quartz Island Upgrade (Vaughan Home)",
                testimonial: "Looks like a $20k kitchen upgrade. Worth every dollar.",
                author: "Michael",
                neighborhood: "Vaughan",
                price: "$5,500 – $7,800",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
              },
              {
                location: "Etobicoke",
                title: "Standard Kitchen Remodel (Etobicoke)",
                testimonial: "Installed in 3 days. The finish is flawless.",
                author: "Sarah",
                neighborhood: "Etobicoke",
                price: "$3,800 – $5,200",
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
                {/* Top Label */}
                <div className="px-8 pt-6 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Installed in {project.location}
                  </span>
                </div>

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative bg-gray-50">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-4 text-text-primary">{project.title}</h3>
                  
                  <div className="mb-6 flex-grow">
                    <p className="text-gray-600 italic text-sm leading-relaxed mb-2">
                      "{project.testimonial}"
                    </p>
                    <p className="text-[11px] font-bold text-accent uppercase tracking-wider">
                      — {project.author}, {project.neighborhood}
                    </p>
                  </div>

                  {/* Price Anchor */}
                  <div className="mb-8 pt-6 border-t border-gray-100">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Project Range</p>
                    <p className="text-lg font-bold text-text-primary">{project.price}</p>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary w-full h-14 flex items-center justify-center gap-2 text-sm font-bold shadow-lg shadow-accent/10 group-hover:shadow-accent/30 transition-all duration-500"
                  >
                    Get This Kitchen Price
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Trust & Authority (Conversion Lock) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side: Trust Pillars */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 text-text-primary"
              >
                Why Toronto Homeowners Choose Quartz International for Their Countertops
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-gray-600 mb-4"
              >
                Precision fabrication, transparent pricing, and fast installation — trusted by thousands of homeowners across the GTA.
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
                    desc: "Real quotes based on actual Toronto installations — no surprises.",
                    icon: <ShieldCheck size={24} />
                  },
                  {
                    title: "Expert Fabrication",
                    desc: "Seamless finishes with precision cutting and professional installation.",
                    icon: <Gem size={24} />
                  },
                  {
                    title: "Fast Turnaround",
                    desc: "Most kitchens completed in 5-7 days.",
                    icon: <Clock size={24} />
                  },
                  {
                    title: "Local Experience",
                    desc: "5,000+ kitchens installed across Toronto and the GTA.",
                    icon: <Award size={24} />
                  }
                ].map((pillar, i) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-text-primary mb-2">{pillar.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Visual Proof */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group bg-gray-50">
                <img 
                  src="/images/fabrication.jpeg" 
                  alt="Quartz fabrication and installation process" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Overlay Text */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-text-primary">Installed in Toronto</span>
                    </div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      "Fast, clean install. Exactly what we were quoted."
                    </p>
                    <p className="text-[10px] font-bold text-text-primary mt-2 uppercase tracking-wider">— Mark, Toronto</p>
                  </div>
                </div>
              </div>

              {/* Decorative Blur */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>

          {/* Trust Bar */}
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
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Toronto & GTA</span>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <button 
              onClick={() => openCalculator()}
              className="btn-primary inline-flex items-center justify-center gap-4 h-20 px-16 text-xl shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-500 group"
            >
              Get My Instant Estimate
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 5: FAQ (Rank + Remove Doubt) */}
      <section className="py-24 bg-background/30">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-text-primary"
            >
              Quartz Countertops Toronto — Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Get clear answers about pricing, installation, and choosing the right quartz countertops for your Toronto home.
            </motion.p>
          </div>

          <div className="space-y-4 mb-16">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-sm"
              >
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
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Final Section CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button 
              onClick={() => openCalculator()}
              className="btn-primary inline-flex items-center justify-center gap-4 h-16 px-12 text-lg shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-500 group"
            >
              Get My Instant Estimate
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 6: THE CLOSE (Final Conversion) */}
      <section className="py-32 bg-text-primary relative overflow-hidden">
        {/* Background Visual Support */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury quartz countertop detail" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-text-primary/80" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-8 border border-accent/30"
            >
              <Star size={12} className="fill-accent" />
              Join 2,000+ Toronto homeowners who used our tool this month
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]"
            >
              Get Your Exact Quartz Countertop Price in 30 Seconds
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-12 leading-relaxed"
            >
              No guesswork. No hidden fees. Just real pricing based on your kitchen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-6"
            >
              <button 
                onClick={() => openCalculator()}
                className="btn-primary inline-flex items-center justify-center gap-4 h-20 px-16 text-xl shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-500 group w-full sm:w-auto"
              >
                Get My Instant Estimate
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>

              <p className="text-gray-400 text-sm font-medium flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                No obligation. No spam. Takes less than 30 seconds.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -ml-32 -mt-32" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mb-48" />
      </section>
    </div>
  );
}
