import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Calculator, ShieldCheck, Star, Clock, MapPin, Check, Quote } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import gallery1 from '../assets/images/regenerated_image_1777699853679.jpg';
import gallery2 from '../assets/images/family_kitchen_new.jpg';
import gallery3 from '../assets/images/custom_luxury_new.jpg';
import look1 from '../assets/images/regenerated_image_1777929280141.png';
import look2 from '../assets/images/regenerated_image_1777929281733.png';
import look3 from '../assets/images/regenerated_image_1777929283225.png';
import look4 from '../assets/images/regenerated_image_1778020564301.jpg';
import look5 from '../assets/images/regenerated_image_1777929286737.png';
import urbanPenthouse from '../assets/images/urban_penthouse_kitchen.png';
import suburbanRemodel from '../assets/images/suburban_remodel_new.jpg';

import { useCalculator } from '../context/CalculatorContext';

export default function Home() {
  const { openCalculator } = useCalculator();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background relative">
      {/* Sticky Header CTA */}
      <div className={cn(
        "fixed top-0 inset-x-0 z-[100] transition-all duration-300 transform",
        isScrolled ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="bg-white/80 backdrop-blur-md border-b border-border-custom py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <span className="hidden md:block font-bold text-sm tracking-tight text-text-primary">
              Quartz Kitchen Countertops Toronto & GTA
            </span>
            <button onClick={() => openCalculator()} className="btn-primary py-3 px-6 text-sm ml-auto">
              Get My Estimate →
            </button>
          </div>
        </div>
      </div>

      {/* 2. HeroSection */}
      <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">
                Direct-to-Home Kitchen Surfaces
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-text-primary leading-[0.95] mb-8 tracking-tighter">
                Quartz Kitchen Countertops in <span className="text-accent underline decoration-accent/10 underline-offset-8">Toronto & GTA</span>
              </h1>
              <p className="text-xl text-text-muted mb-10 leading-relaxed font-medium">
                Real pricing. Fast installation. Designed for modern kitchens.
              </p>
              
              <div className="bg-[#F8F9FA] border border-border-custom p-8 mb-10 rounded-[2rem] shadow-sm">
                <p className="text-text-primary font-bold text-2xl mb-2 tracking-tight">
                  Most kitchens: <span className="text-accent underline decoration-accent/20 font-black tracking-tighter">$4,000 – $8,000</span> installed
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Quartz kitchen countertops in Toronto typically cost $70–$140 per square foot installed, depending on size and design.
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-4">
                <button onClick={() => openCalculator()} className="btn-primary h-16 px-10 text-lg group w-full font-bold shadow-2xl shadow-accent/20">
                  Get My Instant Kitchen Estimate
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] text-center">
                  Most homeowners get their estimate in under 30 seconds
                </p>
              </div>

              <Link to="/quartz-kitchen-countertops#browse" className="text-sm font-bold text-text-primary flex items-center justify-center gap-2 group hover:text-accent transition-colors py-4">
                Browse Quartz by Look
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-6 text-sm text-text-muted font-medium py-6 border-t border-border-custom">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  Serving GTA since 2006
                </div>
                <div className="hidden sm:block w-px h-4 bg-border-custom" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  Licensed & insured
                </div>
                <div className="hidden sm:block w-px h-4 bg-border-custom" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent" />
                  Fast quotes
                </div>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="md:aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden shadow-2xl relative">
                <img 
                  src="/images/hero8.jpeg" 
                  alt="Modern Walnut Kitchen with Quartz Countertops" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[var(--radius-card)] shadow-xl border border-border-custom max-w-[200px]">
                <p className="text-4xl font-bold text-accent mb-1 font-sans tracking-tighter italic">5-7</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted leading-tight">Day Turnaround For Most Kitchens</p>
              </div>
            </motion.div>
            
            {/* Mobile Hero Image */}
            <div className="lg:hidden">
              <img 
                src="/images/hero8.jpeg" 
                alt="Modern Walnut Kitchen with Quartz Countertops" 
                className="w-full aspect-[16/9] object-cover rounded-[var(--radius-card)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TrustBar */}
      <section className="py-12 bg-background border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: '18+ Years Serving GTA', icon: <MapPin size={24} /> },
              { label: '5,000+ Installations', icon: <CheckCircle2 size={24} /> },
              { label: '4.9★ Customer Rating', icon: <Star size={24} /> },
              { label: 'Licensed & Insured', icon: <ShieldCheck size={24} /> }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 group">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-text-primary leading-tight max-w-[120px]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Browse Quartz by Look */}
      <section className="py-24 bg-white" id="browse-home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Browse Quartz by Look</h2>
              <p className="text-text-muted text-lg">Find the perfect quartz countertop for your kitchen.</p>
            </div>
            <Link to="/quartz-kitchen-countertops#browse" className="text-sm font-bold text-text-primary flex items-center gap-2 group border-b border-border-custom pb-1 hover:border-text-primary transition-colors">
              View All Quartz Options
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'White & Light', desc: 'Bright, clean, and timeless', image: look1 },
              { title: 'Marble Look', desc: 'Elegant veining, natural feel', image: look2 },
              { title: 'Concrete & Grey', desc: 'Modern and sophisticated', image: look3 },
              { title: 'Beige & Warm', desc: 'Warm tones, inviting feel', image: look4 },
              { title: 'Bold & Dark', desc: 'Striking and dramatic', image: look5 }
            ].map((look, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to="/quartz-kitchen-countertops#browse?entry=style" className="block cursor-pointer">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative shadow-sm">
                    <img 
                      src={look.image} 
                      alt={look.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-transparent group-hover:border-border-custom transition-colors">
                    <h3 className="text-sm font-bold mb-1">{look.title}</h3>
                    <p className="text-[10px] text-text-muted leading-relaxed uppercase tracking-widest mb-3">{look.desc}</p>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1">
                      See Prices <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center gap-4">
            <button onClick={() => openCalculator()} className="btn-primary h-16 px-12 text-lg group shadow-xl shadow-accent/10">
              Get My Instant Kitchen Estimate
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] text-center">
              Our calculator is updated with 2026 GTA market rates
            </p>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Quartz (Split Layout) */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div>
                <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Engineered for Performance</span>
                <h2 className="text-4xl font-bold tracking-tight mb-6">Why Quartz Kitchen Countertops Are the Smart Choice</h2>
                <p className="text-lg text-text-muted leading-relaxed max-w-lg">
                  Quartz combines natural beauty with advanced performance, giving you a countertop that looks stunning and stands up to everyday life.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  'Superior durability and strength',
                  'Non-porous and hygienic',
                  'Resists stains, scratches, and heat',
                  'Consistent patterns and colors',
                  'Backed by leading manufacturer warranties'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-text-primary text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col gap-4">
                <button onClick={() => openCalculator()} className="btn-primary h-14 px-10 text-sm group shadow-lg shadow-accent/10">
                  Get My Instant Kitchen Estimate
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center md:text-left">
                  Most homeowners get their estimate in under 30 seconds
                </p>
              </div>
            </div>

            <div className="relative group">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl relative bg-gray-50"
              >
                <video 
                  src="/modern-kitchen-quartz.mp4#t=0.001" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  aria-label="Modern kitchen with quartz countertops and full-height quartz backsplash."
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-black/30 transition-colors" />
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-border-custom">
            {[
              { label: '10+ Years', desc: 'Years of lasting performance', icon: <Clock size={24} /> },
              { label: 'Thousands', desc: 'of happy homeowners', icon: <CheckCircle2 size={24} /> },
              { label: 'Top Quality', desc: 'Brands and materials', icon: <ShieldCheck size={24} /> },
              { label: 'Expert', desc: 'Installation you can trust', icon: <MapPin size={24} /> }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-accent/30">{stat.icon}</div>
                <div>
                  <p className="text-sm font-bold text-text-primary uppercase tracking-widest">{stat.label}</p>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest leading-tight">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Popular Quartz Brands */}
      <section className="py-24 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Our Most Popular Quartz Brands</h2>
              <p className="text-text-muted">We carry premium quartz from the world's leading brands.</p>
            </div>
            <Link to="/quartz-kitchen-countertops#brands" className="text-sm font-bold text-text-primary flex items-center gap-2 group border-b border-border-custom pb-1 hover:border-text-primary transition-colors">
              View All Brands
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Caesarstone', tagline: 'The original premium quartz surface', path: '/quartz-countertops-caesarstone' },
              { name: 'SILESTONE', tagline: 'Innovative surfaces with hybrid minerals', italic: true, path: '/quartz-countertops-silestone' },
              { name: 'CAMBRIA', tagline: 'American-made luxury family quartz', path: '/quartz-countertops-cambria' },
              { name: 'PentalQuartz', tagline: 'Superior performance at amazing value', path: '/quartz-countertops-pental' },
              { name: 'HanStone Quartz', tagline: 'Ontario-made surfaces for local homes', path: '/quartz-countertops-hanstone' }
            ].map((brand, i) => (
              <Link 
                key={i} 
                to={brand.path}
                className="bg-background rounded-xl p-8 flex flex-col items-center text-center justify-between min-h-[180px] border border-transparent hover:border-border-custom group transition-all"
              >
                <div className={cn("text-lg font-black tracking-tighter opacity-70 group-hover:opacity-100 transition-opacity", brand.italic && "italic font-serif")}>
                  {brand.name}
                </div>
                <p className="text-[9px] font-bold text-text-muted uppercase tracking-widest leading-relaxed mt-4">
                  {brand.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Cost Section */}
      <section className="py-24 bg-[#F8F9FA] border-b border-border-custom px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary mb-4 tracking-tighter">Quartz Kitchen Countertop Prices in Toronto</h2>
            <p className="text-xl text-accent font-black tracking-tighter">$70 – $140 <span className="text-sm text-gray-400 font-medium tracking-normal">per sq ft installed</span></p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-10 rounded-[2.5rem] border border-border-custom shadow-sm">
               <h3 className="text-lg font-bold mb-4">Standard Kitchen</h3>
               <p className="text-3xl font-black text-text-primary mb-6">$4,000 – $8,000</p>
               <ul className="space-y-3">
                 {['Installed in 5–7 days', '5,000+ kitchens completed', 'Serving GTA for 18+ years'].map((point, idx) => (
                   <li key={idx} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                     <Check size={14} className="text-accent" /> {point}
                   </li>
                 ))}
               </ul>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] border border-border-custom shadow-sm">
               <h3 className="text-lg font-bold mb-4">Large / Luxury Kitchen</h3>
               <p className="text-3xl font-black text-text-primary mb-6">$8,000 – $12,000+</p>
               <ul className="space-y-3">
                 {['Waterfall ends included', 'Full backsplash options', 'Premium grade slabs'].map((point, idx) => (
                   <li key={point} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                     <Check size={14} className="text-accent" /> {point}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button onClick={() => openCalculator()} className="btn-primary h-16 px-12 text-lg font-bold shadow-2xl shadow-accent/20">
              Get My Instant Kitchen Estimate
            </button>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] text-center">
              Most homeowners get their estimate in under 30 seconds
            </p>
          </div>
        </div>
      </section>

      {/* 7. Get Inspired (Project Gallery Strip) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Get Inspired</h2>
              <p className="text-text-muted text-lg">Real kitchens recently installed across Toronto & GTA.</p>
            </div>
            <Link to="/gallery" className="text-sm font-bold text-text-primary flex items-center gap-2 group border-b border-border-custom pb-1 hover:border-text-primary transition-colors">
              View All Real Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { img: gallery1, type: 'Modern Condo', price: '$4,200 – $5,800' },
              { img: gallery2, type: 'Family Kitchen', price: '$6,500 – $8,200' },
              { img: gallery3, type: 'Custom Luxury', price: '$10,000 – $14,000' },
              { img: urbanPenthouse, type: 'Urban Penthouse', price: '$5,500 – $7,500' },
              { img: suburbanRemodel, type: 'Suburban Remodel', price: '$7,800 – $9,500' }
            ].map((item, i) => (
              <div key={i} className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] shrink-0 aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm relative group">
                <img 
                  src={typeof item.img === 'string' && item.img.startsWith('http') ? `${item.img}?auto=format&fit=crop&q=80&w=800` : item.img} 
                  alt={item.type} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                   <p className="text-white font-bold text-base mb-1">{item.type}</p>
                   <p className="text-accent font-black text-xs mb-4">{item.price} installed</p>
                   <button onClick={() => openCalculator()} className="bg-white text-text-primary px-5 py-2.5 rounded-full font-black text-[9px] w-fit hover:bg-accent hover:text-white transition-all uppercase tracking-widest">
                     Get This Kitchen Price
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA (Dark Section) */}
      <section className="mx-4 sm:mx-8 mb-8 pb-12">
        <div className="max-w-7xl mx-auto rounded-[3.5rem] bg-[#0E1116] py-24 px-8 md:px-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -ml-48 -mb-48" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9]">Ready to See Your Kitchen Price?</h2>
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              Get your instant estimate in 30 seconds — no pressure, no commitment.
            </p>
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={() => openCalculator()}
                className="btn-primary h-20 px-16 text-xl font-black shadow-2xl shadow-accent/20 w-full sm:w-auto"
              >
                Get My Instant Kitchen Estimate
              </button>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { label: '30 Seconds', icon: <Clock size={16} /> },
                  { label: 'Instant Results', icon: <CheckCircle2 size={16} /> },
                  { label: 'No Pressure', icon: <Star size={16} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-accent/40">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Bottom Trust Bar */}
      <section className="py-12 bg-background border-t border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Local Experts', desc: 'Serving Toronto & GTA', icon: <MapPin size={24} /> },
              { label: 'Professional Installation', desc: 'Done right, every time', icon: <CheckCircle2 size={24} /> },
              { label: 'Premium Quality', desc: 'Top brands, long-lasting', icon: <ShieldCheck size={24} /> },
              { label: 'Satisfaction Guaranteed', desc: 'We stand behind our work', icon: <Star size={24} /> }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-left">
                <div className="text-accent/30">{item.icon}</div>
                <div>
                  <p className="text-[11px] font-bold text-text-primary uppercase tracking-widest">{item.label}</p>
                  <p className="text-[9px] text-text-muted uppercase tracking-widest leading-none mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
