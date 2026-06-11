import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Calculator, ShieldCheck, Star, Clock, MapPin, Check, Quote } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import gallery1 from '../assets/images/regenerated_image_1777699853679.jpg';
import gallery2 from '../assets/images/regenerated_image_1777699854133.jpg';
import gallery3 from '../assets/images/regenerated_image_1777930248325.jpg';
import inspired4 from '../assets/images/regenerated_image_1777760428513.png';
import suburbanRemodel from '../assets/images/suburban_remodel.png';
import whyChooseUsImg from '../assets/images/regenerated_image_1777741993217.png';
// Re-aliasing for clarity in the inspired section
const inspired1 = gallery1;
const inspired2 = gallery2;
const inspired3 = gallery3;

import { useCalculator } from '../context/CalculatorContext';

export default function Home() {
  const { openCalculator } = useCalculator();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = React.useState(false);

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
                  Most kitchens: <span className="text-accent underline decoration-accent/20 font-black tracking-tighter">$2,000 – $5,000</span> installed
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Quartz kitchen countertops in Toronto typically cost $48–$170 per square foot installed, depending on size and design.
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-4">
                <button onClick={() => openCalculator()} className="btn-primary h-16 px-10 text-lg group w-full font-bold shadow-2xl shadow-accent/20">
                  Get My Instant Countertop Estimate
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
              <div className="md:aspect-square rounded-[var(--radius-card)] overflow-hidden shadow-2xl relative">
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

      {/* 4. Our Most Popular Designs */}
      <section className="py-24 bg-white" id="popular-designs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold tracking-tight mb-4">Our Most Popular Designs</h2>
              <p className="text-text-muted text-lg">Selected by interior designers for their timeless appeal and performance.</p>
            </div>
            <Link to="/quartz-kitchen-countertops#browse" className="text-sm font-bold text-text-primary flex items-center gap-2 group border-b border-border-custom pb-1 hover:border-text-primary transition-colors">
              View All Quartz Options
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                id: 'k8803',
                name: 'K8803',
                brand: 'KASA QUARTZ',
                calculatorBrand: 'Kasa Quartz',
                priceRange: '$48–$55',
                img: '/images/slabs/k8803.jpg'
              },
              {
                id: 'caesarstone-5111',
                name: '5111 Statuario Nuvo',
                brand: 'CAESARSTONE',
                calculatorBrand: 'Caesarstone',
                priceRange: '$96–$125',
                img: '/images/slabs/statuario-nuvo.jpg'
              },
              {
                id: 'caesarstone-5141',
                name: '5141 Frosty Carrina',
                brand: 'CAESARSTONE',
                calculatorBrand: 'Caesarstone',
                priceRange: '$96–$125',
                img: '/images/slabs/frosty-carrina.jpg'
              },
              {
                id: 'caesarstone-4044',
                name: '4044 Airy Concrete',
                brand: 'CAESARSTONE',
                calculatorBrand: 'Caesarstone',
                priceRange: '$85–$105',
                img: '/images/slabs/airy-concrete.jpg'
              }
            ].map((design, i) => (
              <motion.div 
                key={design.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-[2rem] border border-border-custom shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-all duration-300">
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-gray-50 border-b border-border-custom">
                    <img 
                      src={design.img} 
                      alt={design.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary tracking-tight mb-1">{design.name}</h3>
                      <span className="text-[10px] font-bold text-accent tracking-[0.2em] uppercase mb-6 block">
                        {design.brand}
                      </span>
                      
                      <div className="mb-6">
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">
                          Installed Price
                        </span>
                        <p className="text-2xl font-black text-text-primary tracking-tight flex items-baseline gap-1">
                          {design.priceRange} <span className="text-xs text-gray-400 font-medium">/ sq ft</span>
                        </p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => openCalculator({ slab: design.name, brand: design.calculatorBrand })}
                      className="w-full bg-[#F4F4F5] hover:bg-[#E4E4E7] text-text-primary font-bold py-3.5 px-6 rounded-full text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      Get This Countertop Price
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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
                  Get My Instant Countertop Estimate
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest text-center md:text-left">
                  Most homeowners get their estimate in under 30 seconds
                </p>
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-50">
              {isPlayingVideo ? (
                <video 
                  src="https://assets.mixkit.co/videos/preview/mixkit-kitchen-with-white-cabinets-and-countertops-41008-large.mp4" 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <div className="w-full h-full relative cursor-pointer group" onClick={() => setIsPlayingVideo(true)}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-full h-full relative"
                  >
                    <motion.img 
                      src={whyChooseUsImg} 
                      alt="Modern luxury kitchen with quartz countertops" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      animate={{ scale: [1, 1.05] }}
                      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl scale-100 group-hover:scale-110 transition-transform border border-white/20">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-text-primary border-b-[10px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
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
              { 
                name: 'Caesarstone', 
                tagline: 'The original premium quartz surface', 
                path: '/quartz-countertops-caesarstone',
                logo: (
                  <img 
                    src="/images/logos/caesarstone.png" 
                    alt="Caesarstone Logo" 
                    className="max-h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                )
              },
              { 
                name: 'Kasa Quartz', 
                tagline: 'Premium local designs for modern Toronto homes', 
                path: '/quartz-countertops-kasa',
                logo: (
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-6 h-6 rounded bg-[#ee8b2b] text-white flex items-center justify-center font-serif font-black text-xs leading-none shrink-0">
                      K
                    </div>
                    <span className="text-sm font-bold tracking-tight text-text-primary">
                      KASA <span className="font-light text-text-muted">QUARTZ</span>
                    </span>
                  </div>
                )
              },
              { 
                name: 'Lucent Quartz', 
                tagline: 'Luminous, high-performance local quartz surfaces', 
                path: '/quartz-countertops-lucent',
                logo: (
                  <img 
                    src="/images/logos/lucent.png" 
                    alt="Lucent Quartz Logo" 
                    className="max-h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                )
              },
              { 
                name: 'TCE Stone', 
                tagline: 'Durable, high-quality slabs at exceptional value', 
                path: '/quartz-countertops-tce',
                logo: (
                  <img 
                    src="/images/logos/tce.svg" 
                    alt="TCE Stone Logo" 
                    className="max-h-7 object-contain opacity-80 group-hover:opacity-100 transition-opacity filter invert-[20%] sepia-[10%] saturate-[10%] hue-rotate-[180deg]" 
                  />
                )
              },
              { 
                name: 'Kstone', 
                tagline: 'Elegant and affordable local quartz for GTA kitchens', 
                path: '/quartz-countertops-kstone',
                logo: (
                  <img 
                    src="/images/logos/kstone.png" 
                    alt="Kstone Logo" 
                    className="max-h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity" 
                  />
                )
              }
            ].map((brand, i) => (
              <Link 
                key={i} 
                to={brand.path}
                className="bg-background rounded-xl p-8 flex flex-col items-center text-center justify-between min-h-[180px] border border-transparent hover:border-border-custom group transition-all"
              >
                <div className="opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center flex-grow">
                  {brand.logo}
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
            <p className="text-xl text-accent font-black tracking-tighter">$48 – $170 <span className="text-sm text-gray-400 font-medium tracking-normal">per sq ft installed</span></p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-10 rounded-[2.5rem] border border-border-custom shadow-sm">
               <h3 className="text-lg font-bold mb-4">Standard Kitchen</h3>
               <p className="text-3xl font-black text-text-primary mb-6">$2,000 – $5,000</p>
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
               <p className="text-3xl font-black text-text-primary mb-6">$5,000 – $11,000+</p>
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
              Get My Instant Countertop Estimate
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

          <div className="flex overflow-x-auto pb-8 gap-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { img: inspired1, type: 'Modern Condo', price: '$1,500 – $3,500', level: 'standard' as const, sqFt: 30, step: 2 },
              { img: inspired2, type: 'Family Kitchen', price: '$2,000 – $5,000', level: 'premium' as const, sqFt: 40, step: 2 },
              { img: inspired3, type: 'Custom Luxury', price: '$5,000 – $11,000', level: 'luxury' as const, sqFt: 55, step: 2 },
              { img: inspired4, type: 'Urban Penthouse', price: '$2,500 – $5,000', level: 'premium' as const, sqFt: 38, step: 2 },
              { img: suburbanRemodel, type: 'Suburban Remodel', price: '$3,500 – $7,500', level: 'premium' as const, sqFt: 48, step: 2 }
            ].map((item, i) => (
              <div key={i} className="w-[180px] md:w-[260px] aspect-square rounded-2xl overflow-hidden shadow-sm relative group shrink-0">
                <img 
                  src={typeof item.img === 'string' && item.img.startsWith('http') ? `${item.img}?auto=format&fit=crop&q=80&w=600` : item.img} 
                  alt={item.type} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-5 flex flex-col justify-end">
                   <p className="text-white font-bold text-[12px] mb-0.5">{item.type}</p>
                   <p className="text-accent font-black text-[9px] mb-2">{item.price} installed</p>
                   <button onClick={() => openCalculator({ level: item.level, sqFt: item.sqFt, step: item.step })} className="bg-white text-text-primary px-3 py-1.5 rounded-full font-black text-[8px] w-fit hover:bg-accent hover:text-white transition-all uppercase tracking-widest leading-none">
                     Get Price
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Google Reviews Section */}
      <section className="py-24 bg-[#F8F9FA] border-t border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 bg-[#4285F4]/10 border border-[#4285F4]/20 px-3.5 py-1.5 rounded-full mb-4">
              <svg className="w-3.5 h-3.5 fill-[#4285F4]" viewBox="0 0 24 24">
                <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-5.136 4.113A5.99 5.99 0 018 12.527a5.99 5.99 0 015.99-5.99c2.51 0 4.29 1.09 5.25 2l3.24-3.24C20.53 3.32 17.56 2 13.99 2 7.92 2 3 6.92 3 13s4.92 11 11 11c6.28 0 10.45-4.41 10.45-10.63 0-.715-.065-1.425-.195-2.085H12.24z"/>
              </svg>
              <span className="text-[10px] font-bold text-[#4285F4] uppercase tracking-widest leading-none">Google Reviews</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-1.5 text-center">
              <span className="text-sm font-bold text-text-primary">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" className="text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-text-muted font-medium">Customer Rating</span>
            </div>
          </div>

          {/* Desktop Grid / Mobile horizontal scroll */}
          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible pb-8 md:pb-0 no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              {
                stars: 5,
                text: "Amazing experience working with Quartz International! The instant online price calculator was spot-on. They fabricated and installed our Caesarstone countertops in less than a week. The seam placement is practically invisible. Highly recommend!",
                author: "Sarah M.",
                location: "Toronto"
              },
              {
                stars: 5,
                text: "Super professional team. We went with a standard-level TCE Quartz for our condo and it looks incredible. The installers were fast, polite, and cleaned up everything before leaving. Great value and no hidden fees.",
                author: "David K.",
                location: "Richmond Hill"
              },
              {
                stars: 5,
                text: "We had a large waterfall island installed using Kasa Quartz. The craftsmanship is top-tier. They aligned the veining perfectly down the sides. Transparent pricing and exceptional customer service throughout.",
                author: "Elena R.",
                location: "Mississauga"
              },
              {
                stars: 5,
                text: "We were skeptical about the online pricing at first, but the final quote matched our estimate exactly. Excellent communication from the team, and the installation took just a few hours. Absolutely love our new kitchen!",
                author: "Marcus & Chloe",
                location: "Markham"
              }
            ].map((rev, idx) => (
              <div 
                key={idx} 
                className="w-[280px] md:w-auto shrink-0 snap-center bg-white border border-border-custom p-8 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex gap-0.5 text-amber-400 mb-4">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" className="text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-text-primary leading-relaxed mb-6 font-medium">
                    "{rev.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4 mt-auto">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-black text-accent shrink-0">
                    {rev.author[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-text-primary leading-none mb-1">{rev.author}</h4>
                    <p className="text-[9px] text-text-muted font-semibold tracking-wider uppercase leading-none">{rev.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA (Dark Section) */}
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
                Get My Instant Countertop Estimate
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
