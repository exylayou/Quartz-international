import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Check, 
  Quote, 
  Zap, 
  Maximize, 
  HelpCircle, 
  Info,
  ChevronDown,
  Layers,
  Award,
  Gem,
  Plus
} from 'lucide-react';
import { useCalculator } from '../context/CalculatorContext';
import { cn } from '../lib/utils';

// Helper to format city name from URL
const formatCity = (city: string | undefined): string => {
  if (!city) return 'Toronto';
  return city
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function CityCostPage() {
  const { city: cityParam } = useParams();
  const city = formatCity(cityParam);
  const { openCalculator } = useCalculator();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const pricingData = [
    { level: 'Standard Quartz', material: '$45 – $65', fab: '$15 – $20', install: '$15 – $25', total: '$75 – $95' },
    { level: 'Premium Quartz', material: '$65 – $90', fab: '$15 – $25', install: '$20 – $30', total: '$100 – $125' },
    { level: 'Luxury Quartz', material: '$90 – $110', fab: '$20 – $30', install: '$25 – $40', total: '$130 – $180' },
  ];

  const faqs = [
    { q: `How much do quartz countertops cost in ${city}?`, a: `On average, quartz countertops in ${city} range from $75 to $125 per square foot installed. A typical kitchen project usually totals between $5,000 and $9,000 depending on the material tier and layout complexity.` },
    { q: "How long does installation take?", a: "Most installations are completed within 3–5 business days from the time of final templating. The physical install typically takes only one day." },
    { q: `Is quartz worth it for ${city} homes?`, a: "Absolutely. Quartz offers one of the best returns on investment for home renovations due to its durability, low maintenance, and high appeal to future buyers." },
    { q: "Do you provide cabinets and countertops?", a: "Yes, we offer complete kitchen solutions. Bundling cabinets and countertops often provides better value and ensures a more seamless installation process." },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 overflow-hidden border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Column */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-background border border-border-custom px-4 py-2 rounded-full mb-8">
                  <MapPin size={14} className="text-accent" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                    {city}, ON
                  </span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tighter leading-[0.95]">
                  Quartz Countertop <br />
                  Cost in <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">{city}</span>
                </h1>
                
                <p className="text-xl text-gray-500 mb-8 max-w-xl leading-relaxed">
                  Real pricing. Local experts. Beautiful results. Get an instant estimate for your kitchen in {city}. No hidden fees. No obligation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                  {[
                    { icon: <Award size={20} />, title: 'Local Experts', desc: `Serving ${city} & GTA` },
                    { icon: <Clock size={20} />, title: 'Fast Turnaround', desc: '3–5 Business Days' },
                    { icon: <ShieldCheck size={20} />, title: 'No Obligation', desc: '100% Free Estimate' },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center text-accent">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-sm text-text-primary uppercase tracking-tight">{item.title}</h4>
                      <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary px-10 py-5 text-lg font-bold group shadow-2xl shadow-accent/20"
                  >
                    Calculate My Cost &rarr;
                  </button>
                  <a href="#projects" className="btn-outline px-10 py-5 text-lg font-bold">
                    See Local Projects
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column (Hero Image) */}
            <div className="lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1628594716762-59552eeef921?auto=format&fit=crop&q=80&w=1200" 
                  alt={`Modern quartz countertops in ${city}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
              
              {/* Badge Overlay */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl hidden lg:block border border-border-custom max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Gem size={24} className="text-accent" />
                  </div>
                  <h4 className="font-bold text-text-primary italic tracking-tight">Premium Quartz Installation</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">Over 5,000+ kitchens transformed across the GTA with master craftsmanship.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ANSWER SECTION */}
      <section className="py-12 bg-background border-b border-border-custom">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            {...fadeIn}
            className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 md:p-12 rounded-[2.5rem] border border-border-custom shadow-sm"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center shrink-0">
              <Info className="text-accent" size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2 uppercase tracking-wide">Quick Answer</h3>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed tracking-tight">
                Quartz countertop cost in <span className="text-text-primary font-bold">{city}</span> is <span className="text-text-primary font-bold underline decoration-accent/30 underline-offset-4 decoration-4">$75–$125 per square foot</span> installed, with most kitchens costing between <span className="text-text-primary font-bold">$5,000</span> and <span className="text-text-primary font-bold">$9,000</span> depending on size, material, and design.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRICING TABLE SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight leading-none">
                Quartz Countertop Cost Per Square Foot in {city}
              </h2>
              <p className="text-gray-500 mb-12 font-medium">Includes material, fabrication, and professional installation.</p>

              <div className="overflow-x-auto rounded-[2rem] border border-border-custom shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-background">
                      <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom">Quartz Level</th>
                      <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom whitespace-nowrap">Material <span className="block text-[8px] font-medium text-gray-400">per sq ft</span></th>
                      <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom whitespace-nowrap">Fabrication <span className="block text-[8px] font-medium text-gray-400">per sq ft</span></th>
                      <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-border-custom whitespace-nowrap">Installation <span className="block text-[8px] font-medium text-gray-400">per sq ft</span></th>
                      <th className="py-6 px-8 text-xs font-bold uppercase tracking-widest text-accent border-b border-border-custom whitespace-nowrap bg-accent/5">Total Installed <span className="block text-[8px] font-medium text-accent/60 tracking-wider">per sq ft</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-custom">
                    {pricingData.map((row, i) => (
                      <tr key={i} className="hover:bg-background transition-colors group">
                        <td className="py-6 px-8">
                          <span className="font-bold text-text-primary block">{row.level}</span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                            {i === 0 ? 'Simple, clean designs' : i === 1 ? 'Popular patterns' : 'High-end designs'}
                          </span>
                        </td>
                        <td className="py-6 px-8 font-medium text-gray-600">{row.material}</td>
                        <td className="py-6 px-8 font-medium text-gray-600">{row.fab}</td>
                        <td className="py-6 px-8 font-medium text-gray-600">{row.install}</td>
                        <td className="py-6 px-8 font-bold text-text-primary bg-accent/5 group-hover:bg-accent/10 transition-colors uppercase tracking-tight">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                * Pricing varies based on slab selection, thickness (2cm or 3cm), edge profile, and project complexity.
              </p>
            </div>

            {/* Sticky CTA Card */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-[#1A1A1A] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 blur-3xl -mr-16 -mt-16" />
                  
                  <h3 className="text-2xl font-bold mb-4 tracking-tight leading-none italic uppercase">Get Your Instant Kitchen Estimate</h3>
                  <p className="text-gray-400 mb-10 font-medium leading-relaxed">
                    Use our calculator to get a custom price for your {city} kitchen in 30 seconds.
                  </p>
                  
                  <button 
                    onClick={() => openCalculator()}
                    className="btn-primary w-full h-16 text-lg font-bold group flex items-center justify-center gap-3"
                  >
                    Start Calculator <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="mt-10 space-y-4">
                    {[
                      'Takes 30 seconds',
                      'Instant price range',
                      'No signup required'
                    ].map((bullet, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                        <CheckCircle2 size={16} className="text-accent" />
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local Advantage Box */}
                <div className="mt-8 bg-background border border-border-custom p-10 rounded-[3rem]">
                   <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-6">Local Advantage</h4>
                   <ul className="space-y-4">
                     {[
                       'Based in GTA',
                       'Quick site visits',
                       'Local showroom',
                       `Knowledge of ${city} homes`
                     ].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-600">
                         <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL PROJECTS SECTION */}
      <section id="projects" className="py-32 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary tracking-tighter leading-[0.95] mb-4">
                Real Kitchen Projects in {city}
              </h2>
              <p className="text-gray-500 font-medium italic">Transformations completed by our local {city} crew.</p>
            </div>
            <Link to="/gallery" className="hidden sm:flex items-center gap-2 text-accent font-bold uppercase text-xs tracking-widest hover:translate-x-2 transition-transform underline underline-offset-8 decoration-accent/20 decoration-2">
              View More Projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { type: 'Townhome Kitchen', size: '32 sq ft', price: '$4,500 – $7,000', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=600' },
              { type: 'Family Kitchen', size: '48 sq ft', price: '$6,000 – $10,000', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=600' },
              { type: 'Custom Luxury Kitchen', size: '65 sq ft', price: '$10,000 – $15,000+', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600' },
            ].map((p, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-border-custom group"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img src={p.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={p.type} />
                </div>
                <div className="p-10">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">{p.type}</p>
                  <div className="flex justify-between items-baseline mb-6">
                    <h3 className="text-2xl font-bold text-text-primary tracking-tight">{p.size}</h3>
                    <div className="text-gray-500 font-bold uppercase text-[8px] tracking-widest">Est. Project Cost</div>
                  </div>
                  <p className="text-3xl font-bold text-text-primary mb-0 leading-none">{p.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
            <Link to="/gallery" className="btn-outline w-full py-4 font-bold flex items-center justify-center gap-2">
              View More Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT AFFECTS PRICING SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">What Affects Quartz Countertop Pricing?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">Unlike generic pricing, your custom quote depends on these six critical variables.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { icon: <Maximize size={24} />, title: 'Kitchen Size & Layout', desc: 'Larger kitchens and more complex layouts cost more.' },
              { icon: <Layers size={24} />, title: 'Quartz Brand & Quality', desc: 'Higher-end quartz means higher cost.' },
              { icon: <Zap size={24} />, title: 'Edge Profiles', desc: 'Upgraded edges add to the cost.' },
              { icon: <Maximize size={24} />, title: 'Cutouts & Fixtures', desc: 'Sinks, cooktops, and fixtures require more work.' },
              { icon: <CheckCircle2 size={24} />, title: 'Backsplash', desc: 'Adding a backsplash increases the total cost.' },
              { icon: <Clock size={24} />, title: 'Removal & Disposal', desc: 'Removing old countertops adds to the project.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-background border border-border-custom flex items-center justify-center shrink-0 group-hover:border-accent transition-colors shadow-sm">
                  <div className="text-accent group-hover:scale-110 transition-transform">{item.icon}</div>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-text-primary mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUARTZ VS OTHER MATERIALS */}
      <section className="py-32 bg-[#F8F9FA] border-y border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-text-primary tracking-tighter leading-[0.95]">Quartz vs Other Countertops</h2>
              <Link to="/cost" className="text-accent font-bold uppercase text-xs tracking-widest hover:underline underline-offset-8">See Full Comparison</Link>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Quartz', img: 'https://images.unsplash.com/photo-1628594716762-59552eeef921?auto=format&fit=crop&q=80&w=400', desc: 'Low maintenance, stain resistant, and very durable.' },
                { name: 'Granite', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=400', desc: 'Natural stone with unique patterns. Requires sealing.' },
                { name: 'Marble', img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=400', desc: 'Elegant look but more maintenance and prone to stains.' },
                { name: 'Laminate', img: 'https://images.unsplash.com/photo-1556186675-9005bc18b10f?auto=format&fit=crop&q=80&w=400', desc: 'Budget-friendly but less durable and heat resistant.' },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-[2.5rem] overflow-hidden border border-border-custom shadow-sm flex flex-col h-full">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img src={m.img} className="w-full h-full object-cover" alt={m.name} />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h4 className="font-bold text-xl text-text-primary mb-4">{m.name}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium flex-grow">{m.desc}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* UPSELL SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <div className="bg-background border border-border-custom rounded-[4rem] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 blur-[100px] -mr-48 -mt-48" />
              <div className="lg:w-1/3">
                 <div className="rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl relative">
                   <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Full kitchen upgrade" />
                   <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
                 </div>
              </div>
              <div className="lg:w-2/3">
                 <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tighter italic">Upgrade Your Kitchen in {city}</h2>
                 <p className="text-xl text-gray-500 mb-10 font-medium">Get both cabinets and countertops for a seamless look and better value.</p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                   {[
                     'Better Value',
                     'One Point of Contact',
                     'Complete Solution'
                   ].map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-lg font-bold text-text-primary">
                       <Check size={20} className="text-accent" />
                       {item}
                     </div>
                   ))}
                 </div>

                 <div className="flex flex-col sm:flex-row gap-6">
                    <Link to="/estimate?type=full-kitchen" className="btn-primary px-10 py-5 text-lg font-bold">
                       Get Full Kitchen Estimate &rarr;
                    </Link>
                    <Link to="/cabinets" className="flex items-center gap-2 text-accent font-bold uppercase text-xs tracking-widest hover:underline underline-offset-8">
                       Learn More About Cabinets
                    </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
           <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight leading-none uppercase italic">Frequently Asked Questions</h2>
             <p className="text-gray-500 font-medium">Everything you need to know about quartz countertops in {city}.</p>
           </div>
           
           <div className="space-y-4">
             {faqs.map((faq, i) => (
               <div key={i} className="bg-background rounded-[2rem] border border-border-custom overflow-hidden group">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center p-8 text-left group-hover:bg-accent/5 transition-colors"
                  >
                    <span className="text-lg font-bold text-text-primary tracking-tight">{faq.q}</span>
                    <ChevronDown size={24} className={cn("text-accent transition-transform duration-300", openFaq === i && "rotate-180")} />
                  </button>
                  <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", openFaq === i ? "max-h-96" : "max-h-0")}>
                    <div className="p-8 pt-0 text-gray-500 font-medium leading-relaxed italic border-t border-border-custom bg-white/50">
                      {faq.a}
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9] italic">
            Ready to <span className="text-accent">Upgrade</span> Your Kitchen?
          </h2>
          <p className="text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium italic">
            Calculate your cost in 30 seconds or book a free consultation with our {city} team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => openCalculator()}
              className="btn-primary h-auto px-16 py-8 text-2xl font-black uppercase tracking-tighter shadow-[0_20px_50px_rgba(0,0,0,0.3)] shadow-accent/20"
            >
              Calculate My Cost &rarr;
            </button>
            <Link to="/contact" className="px-16 py-8 bg-white/5 border-2 border-white/10 rounded-full text-white text-2xl font-black uppercase tracking-tighter hover:bg-white/10 transition-all border-dashed">
              Book Free Consultation &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
