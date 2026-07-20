import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SEO } from '../../components/SEO';
import { PpcHeader } from '../../components/PpcHeader';
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  Clock, 
  MapPin, 
  Check, 
  Layers,
  Sparkles,
  Calculator,
  MessageCircle
} from 'lucide-react';
import { useCalculator } from '../../context/CalculatorContext';

export default function PpcCountertops() {
  const { openCalculator } = useCalculator();

  return (
    <div className="bg-[#FAF9F5] min-h-screen font-sans">
      <SEO 
        title="Quartz Countertops Toronto & GTA | Direct Installer Pricing" 
        description="Premium Quartz Countertops in Toronto & GTA. $48–$170/sqft installed. Fast 5-7 day turnaround. Get an instant quote in 30 seconds." 
        canonical="/lp/quartz-countertops"
      />

      <PpcHeader title="Quartz Countertops Toronto" />

      {/* Hero Section */}
      <section className="relative pt-8 md:pt-16 pb-16 md:pb-24 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full">
                <Sparkles size={14} className="text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Direct-to-Home Installer Pricing</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-[1.02]">
                Quartz Kitchen Countertops in <span className="text-accent underline decoration-accent/20 underline-offset-8">Toronto & GTA</span>
              </h1>

              <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
                Upgrade your kitchen with premium, non-porous quartz surfaces. Factory-direct pricing, sub-millimeter laser measuring, and precision installation in 5–7 business days.
              </p>

              {/* Price Callout Banner */}
              <div className="bg-[#FAF9F6] border border-border-custom p-6 sm:p-8 rounded-3xl space-y-2">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">$48 – $170</span>
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">/ SQ FT INSTALLED</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  Most GTA kitchens total <strong className="text-text-primary">$2,000 – $5,000</strong> installed (includes materials, laser measurement, custom fabrication, and installation).
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={() => openCalculator()} 
                  className="btn-primary h-16 px-8 text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-accent/20 cursor-pointer"
                >
                  <Calculator size={20} />
                  <span>Get Instant Countertop Estimate</span>
                  <ArrowRight size={18} />
                </button>

                <a 
                  href="tel:6473706938" 
                  className="btn-outline h-16 px-8 text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Phone size={18} className="text-accent" />
                  <span>Call (647) 370-6938</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 text-xs font-bold text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>5–7 Day Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-accent shrink-0" />
                  <span>Lifetime Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent shrink-0" />
                  <span>5,000+ GTA Kitchens</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] sm:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border-custom relative bg-gray-100">
                <img 
                  src="/images/hero8.jpeg" 
                  alt="Quartz Kitchen Countertops Toronto" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white bg-black/60 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                    <span className="text-xs font-bold text-white ml-1">4.9 / 5.0 Rating</span>
                  </div>
                  <p className="text-xs font-medium text-gray-200 italic">
                    "Installed our Caesarstone countertops in 5 days flat. Perfectly seamed and unbelievable finish!"
                  </p>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest mt-2 block">— Sarah M., Markham</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-16 md:py-24 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Transparent Pricing</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1A1A1A]">Quartz Material Tiers (Installed)</h2>
            <p className="text-gray-500 font-medium text-base">
              All prices include precision laser measurement, edge fabrication, delivery, and professional installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Standard Collection',
                price: '$48 – $68',
                unit: 'per sq ft installed',
                desc: 'Consistent, durable, and clean aesthetic. Perfect for rental properties, basements, and modern minimal kitchens.',
                brands: ['TCE Stone', 'Kasa Quartz'],
                features: ['Scratch & stain resistant', 'Low maintenance (no sealing)', 'Sub-millimeter laser measure']
              },
              {
                title: 'Premium Collection',
                price: '$69 – $95',
                unit: 'per sq ft installed',
                desc: 'Popular marble-look veining, warm natural tones, and rich textured surfaces selected by interior designers.',
                brands: ['Lucent Quartz', 'Kstone'],
                popular: true,
                features: ['Elegant vein patterns', 'Soft polished or matte finish', 'Full manufacturer warranty']
              },
              {
                title: 'Luxury Collection',
                price: '$100 – $170',
                unit: 'per sq ft installed',
                desc: 'Exotic through-body veining and signature luxury brand slabs for high-end architectural kitchens.',
                brands: ['Silestone', 'Caesarstone'],
                features: ['Through-body veining', 'Book-matched island options', 'Lifetime craft guarantee']
              }
            ].map((tier, idx) => (
              <div 
                key={idx} 
                className={`rounded-[2.5rem] p-8 sm:p-10 border flex flex-col justify-between relative bg-white transition-all duration-300 ${
                  tier.popular ? 'border-accent ring-2 ring-accent/30 shadow-xl' : 'border-border-custom shadow-sm hover:shadow-md'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Most Popular Choice
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">{tier.title}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-text-primary tracking-tight">{tier.price}</span>
                    <span className="text-xs text-gray-500 font-bold ml-1 block">{tier.unit}</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">{tier.desc}</p>
                  
                  <div className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Available Brands:</span>
                    <div className="flex flex-wrap gap-2">
                      {tier.brands.map(b => (
                        <span key={b} className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1 rounded-lg">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                        <Check size={14} className="text-accent shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => openCalculator({ level: idx === 0 ? 'standard' : idx === 1 ? 'premium' : 'luxury' })} 
                  className={`w-full py-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    tier.popular ? 'bg-accent text-white hover:bg-accent/90' : 'bg-[#1A1A1A] text-white hover:bg-black'
                  }`}
                >
                  Calculate My {tier.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Process */}
      <section className="py-16 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Speed & Precision</span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#1A1A1A]">
                  From Laser Measure to Install in 5–7 Days
                </h2>
                <p className="text-gray-600 font-medium text-base leading-relaxed">
                  We operate our own GTA fabrication facility with state-of-the-art CNC bridge saws and waterjet cutting technology. No middleman markups.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Instant Budget Estimate", desc: "Select your quartz tier and rough dimensions online in 30 seconds." },
                  { step: "02", title: "Laser Precision Site Measure", desc: "Our technicians visit your home to scan walls and cabinets to sub-millimeter accuracy." },
                  { step: "03", title: "CNC Fabrication & Polishing", desc: "Your slab is cut, edge-profiled, and hand-polished at our local facility." },
                  { step: "04", title: "Professional 1-Day Install", desc: "Our certified installation crew sets your countertops with seamless seams." }
                ].map((s) => (
                  <div key={s.step} className="flex gap-5 items-start">
                    <span className="text-2xl font-black text-accent/30 tracking-tight shrink-0">{s.step}</span>
                    <div>
                      <h4 className="font-bold text-text-primary text-base mb-1">{s.title}</h4>
                      <p className="text-xs text-gray-500 font-medium leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => openCalculator()} 
                  className="btn-primary px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg shadow-accent/20"
                >
                  <span>Start Your Estimate Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Visual Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-md bg-gray-100">
                  <img src="/images/slabs/k8803.jpg" alt="Quartz Slab Detail" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white p-6 rounded-3xl border border-border-custom shadow-sm text-center">
                  <span className="text-3xl font-black text-accent tracking-tight">5,000+</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mt-1">GTA Kitchens Installed</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-[#1A1A1A] text-white p-6 rounded-3xl text-center">
                  <span className="text-3xl font-black text-white tracking-tight">18+</span>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mt-1">Years Serving Toronto</span>
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-md bg-gray-100">
                  <img src="/images/slabs/statuario-nuvo.jpg" alt="Quartz Slab Statuario Nuvo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sticky Mobile Conversion Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-border-custom p-3 sm:hidden shadow-2xl flex gap-3">
        <a 
          href="tel:6473706938" 
          className="flex-1 btn-outline h-12 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
        >
          <Phone size={14} className="text-accent" />
          <span>Call Us</span>
        </a>
        <button 
          onClick={() => openCalculator()} 
          className="flex-1 btn-primary h-12 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-accent/20"
        >
          <Calculator size={14} />
          <span>Get Quote</span>
        </button>
      </div>

    </div>
  );
}
