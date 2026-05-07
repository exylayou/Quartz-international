import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Check, 
  Star, 
  ShieldCheck, 
  Users, 
  Calendar,
  Layers,
  Sparkles,
  Zap,
  Truck,
  Hammer,
  Quote,
  Calculator,
  Maximize2,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

import { useCalculator } from '../context/CalculatorContext';

export default function Cabinets() {
  const { openCalculator } = useCalculator();
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. CabinetsHero */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-black">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1] text-text-primary">
                  Modern Kitchen Cabinets in Toronto, <span className="text-accent">European Style</span>, Built to Fit
                </h1>
                <p className="text-gray-600 text-xl font-medium mb-10 max-w-xl leading-relaxed">
                  High-quality semi-custom cabinets designed for your kitchen, installed by professionals — without custom pricing.
                </p>
                
                <div className="bg-[#F8F9FA] inline-flex items-center gap-4 px-6 py-4 rounded-2xl border border-border-custom mb-10">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Price Anchor</p>
                    <p className="text-lg font-bold text-text-primary">Most kitchen cabinets: $8,000 – $18,000+ installed</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button onClick={() => openCalculator({ type: 'full-kitchen' })} className="btn-primary px-10 py-5 h-auto text-base font-bold shadow-xl shadow-accent/20 group">
                    Get Full Kitchen Estimate <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a href="#cabinet-styles" className="flex items-center justify-center bg-white border border-border-custom px-10 py-5 rounded-full text-base font-bold text-text-primary hover:border-accent transition-all shadow-sm">
                    View Cabinet Styles
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                  <Check size={14} className="text-accent" /> Serving GTA since 2006 • 5,000+ kitchens installed • Licensed & insured
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden shadow-2xl relative"
              >
                <img 
                  src="/images/cabinets-hero.png" 
                  alt="Modern European Style Kitchen Cabinets" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>

            {/* Mobile Hero Image */}
            <div className="lg:hidden w-full">
              <img 
                src="/images/cabinets-hero.png" 
                alt="Modern European Style Kitchen Cabinets" 
                className="w-full aspect-[16/9] object-cover rounded-[var(--radius-card)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TrustBar */}
      <section className="border-y border-border-custom bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Calendar className="text-accent mb-3" size={24} />
              <p className="text-2xl font-bold text-text-primary">18+ Years</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Serving GTA</p>
            </div>
            <div className="flex flex-col items-center text-center border-l border-border-custom">
              <Hammer className="text-accent mb-3" size={24} />
              <p className="text-2xl font-bold text-text-primary">5,000+</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Installations</p>
            </div>
            <div className="flex flex-col items-center text-center border-l border-border-custom lg:border-l-0 lg:border-l lg:ml-0">
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" className="text-accent" />)}
              </div>
              <p className="text-2xl font-bold text-text-primary">4.9★</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Customer Rating</p>
            </div>
            <div className="flex flex-col items-center text-center border-l border-border-custom">
              <ShieldCheck className="text-accent mb-3" size={24} />
              <p className="text-2xl font-bold text-text-primary">Licensed</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">& Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CabinetPositioningSection */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 tracking-tight">
                The Smart Alternative to Expensive Custom Cabinets
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Our cabinets are semi-custom European-style kitchens, designed to give you a clean, modern look with better pricing and faster turnaround.
                </p>
                <p>
                  You get the flexibility to fit your space — without the high cost of fully custom cabinetry.
                </p>
              </div>
              <motion.div variants={fadeIn} className="mt-12">
                <button onClick={() => openCalculator({ type: 'full-kitchen' })} className="btn-primary px-10 py-5 h-auto text-base font-bold shadow-xl shadow-accent/20">
                  Get My Kitchen Price
                </button>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Frameless European design', icon: Layers },
                { title: 'Soft-close drawers and doors', icon: Zap },
                { title: 'Durable everyday materials', icon: ShieldCheck },
                { title: 'Wide finish selection', icon: Sparkles },
                { title: 'Faster delivery and installation', icon: Truck },
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-border-custom shadow-sm flex items-start gap-4 hover:border-accent transition-all">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <benefit.icon size={20} />
                  </div>
                  <p className="font-bold text-text-primary text-sm leading-tight pt-2">{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Unified Cabinet Styles Section */}
      <section id="cabinet-styles" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">Choose Your Cabinet Style</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pricing is based on linear footage and depends on the styling tier you choose. We’ll help you finalize every detail after your estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: 'Modern Flat Panel',
                desc: 'Clean European look, most affordable option.',
                benefits: ['Ultra-modern look', 'Works in most kitchens', 'Excellent value'],
                price: '$300 – $600',
                img: '/images/modern-flat-panel.png',
                popular: true
              },
              {
                title: 'Shaker Style',
                desc: 'Timeless framed look, most popular for family homes.',
                benefits: ['Classic versatility', 'High resale appeal', 'Durable framed design'],
                price: '$400 – $800',
                img: '/images/white-shaker.png'
              },
              {
                title: 'Slim Shaker',
                desc: 'Modern minimalist frame with a trendy two-tone design: White uppers and Natural Wood grain lowers.',
                benefits: ['Sleek designer look', 'Textured wood finish', 'The new modern classic'],
                price: '$500 – $1,000',
                img: '/images/slim-shaker.png'
              },
              {
                title: 'High Gloss Ash',
                desc: 'Bright reflective finishes in Glossy Ash grey that maximize light and space.',
                benefits: ['Reflective surfaces', 'Luxury aesthetic', 'Easy maintenance'],
                price: '$500 – $1,000',
                img: '/images/high-gloss-ash.png'
              }
            ].map((style, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className={cn(
                  "bg-white rounded-[2rem] overflow-hidden border border-border-custom shadow-sm flex flex-col hover:shadow-xl transition-all h-full relative",
                  style.popular && "ring-2 ring-accent"
                )}
              >
                {style.popular && (
                  <div className="absolute top-4 right-4 bg-accent text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">
                    Most Popular
                  </div>
                )}
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={style.img} alt={style.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight">{style.title}</h3>
                  <p className="text-xs text-gray-500 mb-6 leading-relaxed">{style.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {style.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-text-primary uppercase tracking-widest">
                        <Check size={12} className="text-accent shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-6 border-t border-border-custom">
                     <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">Pricing Range</p>
                     <p className="text-lg font-bold text-accent">{style.price} <span className="text-[10px] text-gray-400">/ linear ft</span></p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={() => openCalculator({ type: 'full-kitchen' })} className="btn-primary px-12 py-6 h-auto text-lg font-bold shadow-2xl shadow-accent/20">
              Get My Kitchen Price <ArrowRight size={20} className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. CabinetCostExplainer */}
      <section className="py-24 bg-[#F8F9FA] border-y border-border-custom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-6">How Much Do Kitchen Cabinets Cost in Toronto?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Kitchen cabinets are typically priced by linear foot.
            </p>
            <div className="inline-block bg-white p-8 rounded-[2rem] border border-border-custom shadow-sm mb-12">
               <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">Pricing Highlight</p>
               <span className="text-4xl md:text-5xl font-bold text-accent">$300 – $1,200</span>
               <p className="text-sm font-bold text-text-primary mt-2 uppercase tracking-widest">per linear foot installed</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { size: 'Small kitchens', price: '$8,000 – $12,000' },
              { size: 'Standard kitchens', price: '$12,000 – $18,000' },
              { size: 'Large kitchens', price: '$18,000 – $30,000+' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-border-custom text-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{item.size}</p>
                <p className="text-2xl font-bold text-text-primary">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
             <button onClick={() => openCalculator({ type: 'full-kitchen' })} className="text-sm font-bold text-text-primary flex items-center justify-center gap-2 hover:translate-x-2 transition-transform">
               Calculate My Kitchen Cost <ArrowRight size={16} />
             </button>
          </div>
        </div>
      </section>

      {/* 6. FullKitchenEstimatorCTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#0E1116] rounded-[3rem] p-10 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative"
          >
            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Get Your Kitchen Cabinet Estimate in 30 Seconds</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-lg">
                Answer a few quick questions and see your price instantly — including cabinets and countertops.
              </p>
              <button onClick={() => openCalculator({ type: 'full-kitchen' })} className="btn-primary w-full sm:w-auto px-12 py-6 h-auto text-lg font-bold shadow-xl shadow-accent/20">
                Start Full Kitchen Estimate
              </button>
            </div>
            <div className="lg:w-1/2 relative z-10">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] max-w-md mx-auto transform rotate-2">
                 <div className="flex justify-between items-center mb-8">
                    <Calculator size={24} className="text-accent" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <div className="w-2 h-2 bg-white/20 rounded-full" />
                      <div className="w-2 h-2 bg-white/20 rounded-full" />
                    </div>
                 </div>
                 <div className="space-y-6">
                    <div className="h-2 w-full bg-white/10 rounded-full">
                       <div className="h-full w-1/2 bg-accent rounded-full" />
                    </div>
                    <div className="space-y-3">
                       <div className="h-4 w-3/4 bg-white/5 rounded-md" />
                       <div className="h-12 w-full border border-white/20 rounded-xl flex items-center px-4 justify-between">
                          <span className="text-[10px] font-bold text-gray-400">CABINET LINEAR FT</span>
                          <span className="font-bold text-accent">25 FT</span>
                       </div>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex justify-between items-end">
                       <div>
                          <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Total Estimate</p>
                          <p className="text-2xl font-bold">$12,500 – $16,800</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          </motion.div>
        </div>
      </section>

      {/* 7. Project Examples Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="text-4xl font-bold text-text-primary tracking-tight">Real Kitchen Projects in Toronto & GTA</h2>
            <Link to="/gallery" className="text-xs font-bold text-text-primary px-8 py-4 border border-border-custom rounded-full hover:border-accent transition-all flex items-center gap-2">
              View All Projects <ChevronRight size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Modern Kitchen', price: '$8,500 – $11,500', img: '/images/modern-kitchen-project.png' },
              { title: 'Family Kitchen Upgrade', price: '$12,000 – $17,000', img: '/src/assets/images/regenerated_image_1777832169581.jpg' },
              { title: 'Full Custom-Style Kitchen', price: '$18,000 – $28,000', img: 'https://images.unsplash.com/photo-1565183928294-7065123ee2e4?auto=format&fit=crop&q=80&w=600' },
            ].map((p, idx) => (
              <motion.div key={idx} variants={fadeIn} className="group bg-white rounded-[2rem] overflow-hidden border border-border-custom shadow-sm hover:shadow-xl transition-all">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold text-text-primary mb-2 tracking-tight uppercase text-sm">{p.title}</h4>
                  <p className="text-2xl font-bold text-accent">{p.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WhyChooseSection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <span className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-4 block">Our Advantage</span>
               <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 tracking-tight">Why Homeowners Choose <span className="text-accent underline decoration-accent/30 decoration-4">Quartz International</span></h2>
               <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                 We specialize in complete kitchen upgrades, combining cabinets and countertops into one seamless project.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'One contractor for cabinets + countertops',
                    'Better pricing through direct sourcing',
                    'Faster turnaround than traditional custom shops',
                    'Clean, professional installation',
                    'Clear pricing from the start'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                       <Check size={20} className="text-accent shrink-0" />
                       <span className="text-sm font-bold text-text-primary uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:w-1/2">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                   <img 
                     src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200" 
                     alt="Clean Professional Installation" 
                     className="w-full aspect-video object-cover"
                   />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CountertopCrossSellSection */}
      <section className="py-24 bg-[#F8F9FA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 order-2 lg:order-1">
                 <div className="relative group">
                    <div className="absolute inset-0 bg-accent/20 rounded-[3rem] transform -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                    <img 
                      src="/src/assets/images/regenerated_image_1777741993217.png" 
                      alt="Quartz Countertops" 
                      className="w-full aspect-[4/3] object-cover rounded-[3rem] relative z-10 shadow-2xl"
                    />
                 </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                 <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 tracking-tight">Complete Your Kitchen with Quartz Countertops</h2>
                 <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                   Most cabinet projects include new countertops. We make it easy to bundle both — saving you time, cost, and coordination.
                 </p>
                 <Link to="/estimate?type=full-kitchen" className="btn-primary px-10 py-5 h-auto text-base font-bold shadow-xl shadow-accent/20">
                    Add Countertops to My Estimate
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* 10. SimpleProcessSection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">How It Works</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
              <div className="absolute top-12 left-0 w-full h-[2px] bg-border-custom hidden md:block" />
              {[
                { title: 'Get Your Estimate', icon: Calculator, desc: 'Use our smart estimator to see a price range for your project in seconds.' },
                { title: 'We Measure & Finalize Design', icon: Maximize2, desc: 'A professional visits your home to take precision measurements and show samples.' },
                { title: 'We Install Your Kitchen', icon: Hammer, desc: 'Our licensed teams handle the complete tear-out and installation for a perfect finish.' },
              ].map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-center text-center group">
                   <div className="w-24 h-24 bg-white border-2 border-border-custom rounded-[2.5rem] flex items-center justify-center text-accent mb-8 shadow-sm group-hover:border-accent transition-all z-10">
                      <step.icon size={32} />
                   </div>
                   <div className="absolute -top-4 -right-4 w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm shadow-xl border-4 border-white">
                      {idx + 1}
                   </div>
                   <h4 className="text-xl font-bold text-text-primary mb-4 tracking-tight uppercase text-sm leading-tight">{step.title}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 11. TestimonialsSection */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { text: "Everything was handled in one place — cabinets and countertops. Super smooth process.", author: "Michael S., Toronto" },
               { text: "Pricing was clear from the beginning. No surprises.", author: "Sarah L., Pickering" },
               { text: "Our kitchen looks completely new. Couldn’t be happier.", author: "David W., Markham" },
             ].map((t, idx) => (
               <div key={idx} className="bg-white p-10 rounded-[2rem] border border-border-custom shadow-sm relative">
                  <Quote size={40} className="text-accent/10 absolute top-8 left-8" />
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" className="text-accent" />)}
                    </div>
                    <p className="text-lg font-medium text-text-primary mb-8 italic leading-relaxed">“{t.text}”</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.author}</p>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 12. FinalCTASection */}
      <section className="bg-[#0E1116] py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <motion.div variants={fadeIn}>
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Ready to Price Your Kitchen?</h2>
              <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
                 Get a real estimate in seconds — no pressure, no commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button onClick={() => openCalculator({ type: 'full-kitchen' })} className="btn-primary px-12 py-6 h-auto text-lg font-bold shadow-2xl shadow-accent/20">
                    Get Full Kitchen Estimate
                 </button>
                 <Link to="/contact" className="border border-white/20 text-white px-12 py-6 rounded-full text-lg font-bold hover:bg-white/5 transition-all">
                    Book Free Consultation
                 </Link>
              </div>
           </motion.div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-[200px]" />
      </section>

    </div>
  );
}
