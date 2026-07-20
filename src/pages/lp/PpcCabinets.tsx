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
  Truck,
  Crown,
  Calculator,
  Hammer
} from 'lucide-react';
import { useCalculator } from '../../context/CalculatorContext';

import rtaDelivery from '../../assets/images/rta_delivery.png';
import rtiDelivery from '../../assets/images/rti_delivery.png';
import installedDelivery from '../../assets/images/installed_delivery.png';
import essentialKitchenBanner from '../../assets/images/essential_kitchen_banner.jpg';
import premiumKitchenBanner from '../../assets/images/premium_kitchen_banner.png';
import eliteKitchenBanner from '../../assets/images/elite_kitchen_banner.jpg';

export default function PpcCabinets() {
  const { openCalculator } = useCalculator();

  return (
    <div className="bg-[#FAF9F5] min-h-screen font-sans">
      <SEO 
        title="Kitchen Cabinets Toronto & GTA | Factory Direct European Cabinetry" 
        description="Custom & Modular Kitchen Cabinets in Toronto & GTA. RTA, RTI, and Fully Installed cabinetry. 5-7 day delivery. Get an instant quote in 30 seconds." 
        canonical="/lp/kitchen-cabinets"
      />

      <PpcHeader title="Kitchen Cabinets Toronto" />

      {/* Hero Section */}
      <section className="relative pt-8 md:pt-16 pb-16 md:pb-24 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full">
                <Crown size={14} className="text-accent" />
                <span className="text-xs font-bold text-accent uppercase tracking-widest">European-Style Kitchen Cabinetry</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-[1.02]">
                Custom Kitchen Cabinets in <span className="text-accent underline decoration-accent/20 underline-offset-8">Toronto & GTA</span>
              </h1>

              <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
                Modern flat panel, timeless shaker, and slim shaker cabinets engineered for Toronto homes and condos. Choose flat-packed RTA, pre-assembled RTI, or white-glove full installation.
              </p>

              {/* Price Callout Banner */}
              <div className="bg-[#FAF9F6] border border-border-custom p-6 sm:p-8 rounded-3xl space-y-2">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-text-primary tracking-tight">RTA • RTI • Installed</span>
                  <span className="text-xs font-bold text-accent uppercase tracking-wider">Fast 5–7 Day Turnaround</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  Complete cabinet packages starting under <strong className="text-text-primary">$1,800</strong> with soft-close Blum/DTC hardware included.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                  onClick={() => openCalculator({ startedFromCabinets: true })} 
                  className="btn-primary h-16 px-8 text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-accent/20 cursor-pointer"
                >
                  <Calculator size={20} />
                  <span>Get Instant Cabinet Estimate</span>
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
                  <span>Soft-Close Hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-accent shrink-0" />
                  <span>Multi-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent shrink-0" />
                  <span>GTA Delivery & Measure</span>
                </div>
              </div>

            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] sm:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border-custom relative bg-gray-100">
                <img 
                  src={premiumKitchenBanner} 
                  alt="Kitchen Cabinets Toronto" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 md:py-24 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Flexible Options</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1A1A1A]">Supply & Assembly Methods</h2>
            <p className="text-gray-500 font-medium text-base">
              Choose the level of service that fits your budget and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'RTA (Ready To Assemble)',
                icon: Truck,
                img: rtaDelivery,
                desc: 'Flat-packed boxes shipped directly. Easy cam-lock assembly. Ideal for contractors, flippers, and hands-on homeowners looking to maximize budget.',
                perks: ['Lowest cost supply', 'Compact transport', 'Standard 3/4" Plywood boxes']
              },
              {
                title: 'RTI (Ready To Install)',
                icon: Truck,
                img: rtiDelivery,
                desc: 'Factory-assembled boxes delivered pre-built to your doorstep. Saves dozens of labor hours on site — just level, anchor, and hang.',
                perks: ['Pre-assembled in factory', 'Saves installation time', 'Dovetail drawer boxes']
              },
              {
                title: 'Fully Installed',
                icon: Hammer,
                img: installedDelivery,
                desc: 'Turnkey white-glove service. Includes in-home laser measurement, delivery, assembly, wall leveling, filler scribing, and hardware installation.',
                perks: ['Sub-millimeter site scan', 'Professional installation crew', 'Single point of contact']
              }
            ].map((method, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] border border-border-custom p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
                <div>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-border-custom bg-gray-50">
                    <img src={method.img} alt={method.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <method.icon size={18} className="text-accent" />
                    <h3 className="font-bold text-lg text-text-primary">{method.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">{method.desc}</p>
                  
                  <ul className="space-y-2 border-t border-gray-100 pt-4 mb-8">
                    {method.perks.map(p => (
                      <li key={p} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                        <Check size={14} className="text-accent shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => openCalculator({ startedFromCabinets: true })} 
                  className="w-full py-4 bg-[#1A1A1A] hover:bg-black text-white rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Estimate {method.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cabinet Collections */}
      <section className="py-16 md:py-24 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">Door Styles & Tiers</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#1A1A1A]">Cabinet Collections</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Essential Collection', desc: 'Sleek European flat-panel doors in natural wood textures, high-density laminates, and modern solids.', img: essentialKitchenBanner },
              { title: 'Premium Collection', desc: 'Timeless shaker and slim shaker designs with recessed panels, soft matte, and high-gloss coats.', img: premiumKitchenBanner, badge: 'Most Popular' },
              { title: 'Elite Collection', desc: 'Bespoke painted hardwood doors, glass accent uppers, integrated lighting channels, and custom millwork.', img: eliteKitchenBanner }
            ].map((col, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] border border-border-custom overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative">
                {col.badge && (
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest z-10">
                    {col.badge}
                  </div>
                )}
                <div>
                  <div className="aspect-[16/10] bg-gray-50 border-b border-border-custom overflow-hidden">
                    <img src={col.img} alt={col.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold text-xl text-text-primary mb-2">{col.title}</h3>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">{col.desc}</p>
                  </div>
                </div>
                <div className="p-8 pt-0">
                  <button 
                    onClick={() => openCalculator({ startedFromCabinets: true })} 
                    className="w-full py-3.5 bg-accent hover:bg-accent/90 text-white rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Select {col.title}
                  </button>
                </div>
              </div>
            ))}
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
          onClick={() => openCalculator({ startedFromCabinets: true })} 
          className="flex-1 btn-primary h-12 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-accent/20"
        >
          <Calculator size={14} />
          <span>Get Quote</span>
        </button>
      </div>

    </div>
  );
}
