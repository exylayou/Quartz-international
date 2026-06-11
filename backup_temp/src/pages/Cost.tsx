import React from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  ArrowRight, 
  CheckCircle2, 
  Check,
  ChevronRight, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  ChevronDown, 
  Plus,
  Box,
  Layout,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Cost() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const pricingTable = [
    { level: 'Standard Quartz', material: '$45 – $65', fab: '$15 – $20', install: '$15 – $25', total: '$75 – $95', desc: 'Simple, clean designs' },
    { level: 'Premium Quartz', material: '$65 – $90', fab: '$15 – $25', install: '$20 – $30', total: '$100 – $125', desc: 'Popular patterns' },
    { level: 'Luxury Quartz', material: '$90 – $110', fab: '$20 – $30', install: '$25 – $40', total: '$130 – $180', desc: 'High-end designs' },
  ];

  const examples = [
    { title: 'Condo Kitchen', size: '25 – 35 sq ft', price: '$4,500 – $6,500', img: '/src/assets/images/regenerated_image_1777758978147.png' },
    { title: 'Standard Kitchen', size: '35 – 50 sq ft', price: '$6,500 – $9,000', img: '/src/assets/images/regenerated_image_1777758979417.png' },
    { title: 'Large Kitchen', size: '50 – 70+ sq ft', price: '$9,000 – $15,000+', img: '/src/assets/images/regenerated_image_1777759410525.png' },
  ];

  const compareCards = [
    { 
      name: 'Quartz', 
      img: '/src/assets/images/regenerated_image_1777760428513.png',
      features: ['Non-porous', 'Low maintenance', 'Stain & scratch resistant', 'Wide range of designs', 'Great value']
    },
    { 
      name: 'Granite', 
      img: '/src/assets/images/regenerated_image_1777760429812.png',
      features: ['Natural stone', 'Requires sealing', 'More pattern variation', 'Higher maintenance', 'Moderate value']
    },
    { 
      name: 'Marble', 
      img: '/src/assets/images/regenerated_image_1777760431259.png',
      features: ['Natural beauty', 'Prone to staining', 'Soft & porous', 'High maintenance', 'Higher cost']
    },
    { 
      name: 'Laminate', 
      img: '/src/assets/images/regenerated_image_1777760432651.png',
      features: ['Budget friendly', 'Limited durability', 'Less heat resistant', 'Fewer design options', 'Lower cost']
    }
  ];

  const faqs = [
    { q: 'How much do quartz countertops cost in GTA?', a: 'Most kitchens cost between $5,000 and $9,000 installed depending on size and quartz level.' },
    { q: 'How long does installation take?', a: 'Most projects are completed in 3–5 business days from template to installation.' },
    { q: 'Is quartz worth it for kitchens?', a: 'Yes! Quartz is durable, low maintenance, and adds value to your home.' },
    { q: 'Do you provide both countertops and cabinets?', a: 'Yes! We offer full kitchen solutions including cabinets, countertops, and installation under one roof.' },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-4 block">Cost Guide</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-text-primary">
                Quartz Countertop<br />Cost in Toronto & GTA
              </h1>
              <p className="text-gray-600 text-lg mb-10 max-w-xl leading-relaxed">
                Real pricing. No hidden fees. See what quartz countertops actually cost and get your instant estimate in 30 seconds.
              </p>
              
              <div className="flex flex-wrap gap-8 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <DollarSign size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary">Transparent Pricing</p>
                    <p className="text-[10px] text-gray-500">No surprises</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <Layout size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary">Expert Installation</p>
                    <p className="text-[10px] text-gray-500">Local GTA team</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-primary">Fast Turnaround</p>
                    <p className="text-[10px] text-gray-500">On-time, every time</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/estimate" className="btn-primary px-8 py-4 h-auto text-sm font-bold">
                  Calculate My Cost
                </Link>
                <Link to="/quartz-kitchen-countertops" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-accent transition-colors px-6">
                  View Quartz Options <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden shadow-2xl relative"
              >
                <img 
                  src="/src/assets/images/regenerated_image_1777741714310.png" 
                  alt="Modern Quartz Countertop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>
            
            {/* Mobile Hero Image */}
            <div className="lg:hidden w-full">
              <img 
                src="/src/assets/images/regenerated_image_1777741714310.png" 
                alt="Modern Quartz Countertop" 
                className="w-full aspect-[16/9] object-cover rounded-[var(--radius-card)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#FFF9F3] border border-[#FDECD9] p-8 rounded-3xl flex items-start gap-6">
          <div className="w-12 h-12 bg-[#FDECD9] rounded-2xl flex items-center justify-center text-[#D97706] shrink-0">
            <Sparkles size={24} />
          </div>
          <div>
            <h4 className="font-bold text-text-primary mb-2">Quick Answer</h4>
            <p className="text-gray-600 leading-relaxed text-sm">
              The average quartz countertop cost in Toronto & GTA is <span className="font-bold text-text-primary">$75–$125 per square foot</span> installed, 
              with most kitchens costing between <span className="font-bold text-text-primary">$5,000 and $9,000</span> depending on size, material, and design.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-2xl font-bold mb-8 text-text-primary">Quartz Countertop Cost Per Square Foot (Installed)</h2>
        <p className="text-xs text-gray-400 mb-8 font-medium">Pricing includes materials, fabrication, and professional installation.</p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:flex-grow">
            <div className="overflow-hidden rounded-3xl border border-border-custom bg-white shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50/80 border-b border-border-custom">
                    <th className="px-6 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Quartz Level</th>
                    <th className="px-6 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Material <br /><span className="text-[8px]">per sq ft</span></th>
                    <th className="px-6 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Fabrication <br /><span className="text-[8px]">per sq ft</span></th>
                    <th className="px-6 py-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Installation <br /><span className="text-[8px]">per sq ft</span></th>
                    <th className="px-6 py-6 text-[10px] font-bold text-white uppercase tracking-widest text-center bg-accent">Total Installed <br /><span className="text-[8px]">per sq ft</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-custom">
                  {pricingTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-8">
                        <p className="font-bold text-sm text-text-primary">{row.level}</p>
                        <p className="text-[10px] text-gray-400">{row.desc}</p>
                      </td>
                      <td className="px-6 py-8 text-center font-bold text-sm text-text-primary">{row.material}</td>
                      <td className="px-6 py-8 text-center font-bold text-sm text-text-primary">{row.fab}</td>
                      <td className="px-6 py-8 text-center font-bold text-sm text-text-primary">{row.install}</td>
                      <td className="px-6 py-8 text-center font-bold text-lg text-text-primary bg-accent/5">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[10px] text-gray-400 italic">
              *Pricing varies based on slab selection, thickness (2cm or 3cm), edge profile, and project complexity.
            </p>
          </div>

          <div className="lg:w-[320px] shrink-0">
            <div className="bg-[#0E1116] p-8 rounded-3xl text-white relative overflow-hidden h-full">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 leading-tight">Get Your Instant Kitchen Estimate</h3>
                <p className="text-gray-400 text-xs mb-8">Use our calculator to get a custom price for your kitchen in 30 seconds.</p>
                
                <Link to="/estimate" className="btn-primary w-full h-12 flex items-center justify-center mb-10 text-xs gap-2">
                  Start Calculator <ArrowRight size={14} />
                </Link>

                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-accent" />
                    <span className="text-xs font-bold">Takes 30 seconds</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles size={16} className="text-accent" />
                    <span className="text-xs font-bold">Instant price range</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-accent" />
                    <span className="text-xs font-bold">No signup required</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 opacity-10 p-4 pointer-events-none">
                <Calculator size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Kitchen Examples */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-2xl font-bold mb-4 text-text-primary">Real Kitchen Examples in Toronto & GTA</h2>
        <p className="text-xs text-gray-400 mb-10">Actual projects. Real pricing.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {examples.map((ex, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="rounded-[2rem] overflow-hidden mb-6 aspect-video">
                <img 
                  src={ex.img} 
                  alt={ex.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-2">
                <h4 className="font-bold text-text-primary mb-1">{ex.title}</h4>
                <p className="text-[10px] text-gray-400 mb-4">{ex.size}</p>
                <div className="text-xl font-bold text-text-primary">{ex.price}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/gallery" className="inline-flex items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-accent border border-border-custom px-6 py-3 rounded-full transition-all">
            See More Project Examples <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Cost Factors + Calculator Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-8 text-text-primary">What Affects Quartz Countertop Pricing?</h2>
            <div className="space-y-4">
              {[
                'Kitchen size and layout (more surface = higher cost)',
                'Quartz brand and pattern selection',
                'Edge profiles (square, bevel, ogee, waterfall, etc.)',
                'Cutouts for sinks, cooktops, and fixtures',
                'Backsplash and waterfall upgrades',
                'Removal and disposal of old countertops',
                'Accessibility and installation complexity'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0">
                    <CheckCircle2 size={12} />
                  </div>
                  <span className="text-sm font-medium text-gray-500">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#F8F9FA] p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-10 border border-border-custom relative overflow-hidden">
               <div className="md:w-1/2 relative z-10">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md text-accent mb-6">
                    <Calculator size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-text-primary leading-tight">See Your Exact Price in 30 Seconds</h3>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                    Answer a few simple questions and get your custom price range instantly.
                  </p>
                  <Link to="/estimate" className="btn-primary px-8 h-12 flex items-center justify-center text-sm font-bold">
                    Calculate My Cost →
                  </Link>
               </div>
               <div className="md:w-1/2 relative">
                  <div className="bg-white p-4 rounded-[2rem] shadow-2xl border border-border-custom relative z-10 w-48 mx-auto -mb-20">
                     <div className="bg-accent/5 p-4 rounded-xl mb-4 text-center">
                        <p className="text-[6px] font-bold text-gray-400 uppercase tracking-widest mb-1">Your Estimate</p>
                        <p className="text-base font-bold text-text-primary">$6,200 – $8,000</p>
                        <p className="text-[5px] text-accent font-bold">BASED ON YOUR SELECTION</p>
                     </div>
                     <div className="space-y-3">
                        <div className="h-1 bg-gray-100 rounded-full w-full" />
                        <div className="h-1 bg-gray-100 rounded-full w-3/4" />
                        <div className="h-1 bg-gray-100 rounded-full w-4/5" />
                     </div>
                     <div className="mt-8 bg-text-primary text-white text-[6px] p-2 rounded-lg text-center font-bold">
                        GET FULL BREAKDOWN
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quartz vs Other Countertops */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">Quartz vs Other Countertops</h2>
            <p className="text-xs text-gray-400">Why quartz is the most popular choice for GTA homeowners.</p>
          </div>
          <Link to="/comparison" className="text-xs font-bold text-gray-400 hover:text-accent flex items-center gap-1">
            View Full Comparison <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {compareCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-border-custom overflow-hidden group">
              <div className="h-32 relative overflow-hidden">
                <img src={card.img} alt={card.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white font-bold">{card.name}</div>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {card.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                       <Check size={10} className="text-accent" />
                       <span className="text-[10px] font-bold text-gray-500">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cabinets Upsell */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#F8F9FA] rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden border border-border-custom">
          <div className="md:w-1/3">
             <div className="rounded-3xl overflow-hidden shadow-2xl aspect-square border-8 border-white">
                <img src="/src/assets/images/regenerated_image_1777760426998.png" alt="Cabinet Upsell" className="w-full h-full object-cover" />
             </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Upgrade Your Entire Kitchen</h2>
            <p className="text-gray-500 mb-10 leading-relaxed max-w-xl">
               Add custom cabinets to complete your dream kitchen. Save more with bundle pricing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
               {[
                 { label: 'Better Value', icon: ShieldCheck },
                 { label: 'One Point of Contact', icon: Layout },
                 { label: 'Complete Solution', icon: Sparkles }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <item.icon size={18} className="text-accent" />
                    <span className="text-xs font-bold text-text-primary leading-tight">{item.label}</span>
                 </div>
               ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
               <Link to="/estimate?type=full-kitchen" className="btn-primary px-10 h-14 w-full sm:w-auto h-auto text-sm font-bold flex items-center justify-center">
                  Get Full Kitchen Estimate →
               </Link>
               <Link to="/cabinets" className="text-xs font-bold text-gray-400 hover:text-accent">
                 Learn More About Cabinets →
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-2xl font-bold mb-10 text-text-primary">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border-custom rounded-2xl overflow-hidden">
               <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex justify-between items-center group transition-colors"
               >
                  <span className="font-bold text-sm text-text-primary">{faq.q}</span>
                  <div className={cn("transition-transform duration-300", openFaq === idx ? "rotate-180" : "")}>
                     <ChevronDown size={18} className="text-gray-400 group-hover:text-accent" />
                  </div>
               </button>
               {openFaq === idx && (
                 <div className="px-6 pb-6 text-gray-500 text-xs leading-relaxed animate-in slide-in-from-top-2 duration-300">
                    {faq.a}
                 </div>
               )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0E1116] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Your Price?</h2>
              <p className="text-gray-400 text-sm">Calculate your quartz countertop cost in 30 seconds or book a free consultation with our experts.</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Link to="/estimate" className="btn-primary px-10 h-14 flex items-center justify-center font-bold text-sm">
                Calculate My Cost →
              </Link>
              <Link to="/contact" className="border border-white/20 text-white px-10 h-14 flex items-center justify-center font-bold text-sm hover:bg-white/5 transition-colors rounded-xl">
                Book Free Consultation →
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
}
