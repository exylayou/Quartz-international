import React from 'react';
import { SEO } from '../../components/SEO';
import { PpcHeader } from '../../components/PpcHeader';
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  MapPin, 
  Check, 
  Sparkles,
  Calculator,
  Plus
} from 'lucide-react';
import { useCalculator } from '../../context/CalculatorContext';
import { Link } from 'react-router-dom';

import modernKitchenQuartz from '../../assets/images/modern_kitchen_quartz.png';

export default function PpcRenovation() {
  const { openCalculator } = useCalculator();

  return (
    <div className="bg-[#FAF9F5] min-h-screen font-sans">
      <SEO 
        title="Kitchen Renovation Toronto & GTA | Countertops + Cabinet Packages" 
        description="Full Kitchen Renovation Packages in Toronto & GTA. Combine Quartz Countertops and Custom Cabinets for maximum savings & seamless single-team installation." 
        canonical="/lp/kitchen-renovation"
      />

      <PpcHeader title="Kitchen Renovation Toronto" />

      {/* Hero Section */}
      <section className="relative pt-8 md:pt-16 pb-16 md:pb-24 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full">
                <Sparkles size={14} className="text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Complete Kitchen Package Bundle</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-[1.02]">
                Kitchen Renovation Packages in <span className="text-accent underline decoration-accent/20 underline-offset-8">Toronto & GTA</span>
              </h1>

              <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
                Bundle your quartz countertops and custom cabinetry into one seamless renovation. Eliminate misaligned trade scheduling, reduce labor fees, and enjoy single-point accountability.
              </p>

              {/* Price Callout Banner */}
              <div className="bg-[#FAF9F6] border border-border-custom p-6 sm:p-8 rounded-3xl space-y-2">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">Countertops + Cabinets</span>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">Bundle & Save</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  Most complete GTA kitchen transformations range <strong className="text-text-primary">$3,500 – $12,000+</strong> installed with zero hidden fees.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={() => openCalculator()} 
                  className="btn-primary h-16 px-8 text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-accent/20 cursor-pointer"
                >
                  <Calculator size={20} />
                  <span>Get Complete Kitchen Estimate</span>
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
                  <span>1 Point of Contact</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-accent shrink-0" />
                  <span>5-Year Craft Warranty</span>
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
                  src={modernKitchenQuartz} 
                  alt="Kitchen Renovation Toronto" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Bundle Section */}
      <section className="py-16 md:py-24 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Why Homeowners Bundle</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1A1A1A]">Countertops + Cabinets Together</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Perfect Alignment Guarantee',
                desc: 'Because our technicians measure both cabinet walls and quartz slabs simultaneously, your countertops fit flush against wall tiles and cabinet uppers with zero gaps.'
              },
              {
                title: 'Significant Package Savings',
                desc: 'Ordering materials and installation crew visits under one project cuts logistics costs and delivers package discounts compared to hiring separate stone and cabinet shops.'
              },
              {
                title: 'Fast 7-Day Total Renovation',
                desc: 'No waiting 4 weeks between cabinet installation and countertop templating. Our coordinated schedule ensures a rapid turnaround from tear-out to final polish.'
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-[#FAF9F6] rounded-[2.5rem] border border-border-custom p-8 sm:p-10 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent font-black text-lg mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-xl text-text-primary mb-3">{card.title}</h3>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Visualizer Teaser */}
      <section className="py-16 md:py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} />
            Exclusive AI Technology
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto">
            Want to See How Your Renovation Will Look Before Starting?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base font-medium leading-relaxed">
            Upload 3 photos of your existing kitchen to get 2 instant AI-generated concept directions and a custom GTA price breakdown.
          </p>
          <div className="pt-4">
            <Link 
              to="/design-inspiration" 
              className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-wider cursor-pointer shadow-xl shadow-accent/20"
            >
              <span>Try Free AI Kitchen Visualizer</span>
              <ArrowRight size={18} />
            </Link>
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
