import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import {
  ArrowRight, 
  Check, 
  HelpCircle, 
  DollarSign, 
  Layers, 
  Truck, 
  Hammer, 
  Info, 
  ChevronRight,
  Maximize2,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import cabinetsHero from '../assets/images/cabinets_hero.png';
import essentialKitchenBanner from '../assets/images/essential_kitchen_banner.jpg';
import premiumKitchenBanner from '../assets/images/premium_kitchen_banner.png';
import eliteKitchenBanner from '../assets/images/elite_kitchen_banner.jpg';

export default function KitchenCabinetCost() {
  return (
    <div className="bg-[#FAF9F5] min-h-screen font-sans selection:bg-accent/30 selection:text-text-primary">
      <SEO title="Kitchen Cabinet Cost Guide | Quartz International" description="Comprehensive guide to kitchen cabinet cost guide in Toronto and the GTA. Explore our cost calculator and get an instant estimate." />

      
      {/* HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-20 overflow-hidden bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column */}
            <div className="w-full lg:w-1/2 text-black">
              <span className="bg-accent/10 text-accent font-bold uppercase tracking-[0.25em] text-[10px] px-4 py-2 rounded-full border border-accent/20 inline-block mb-6">
                Toronto & GTA Cabinet Pricing Index
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] font-bold text-text-primary leading-[1.1] mb-6 tracking-tight">
                Kitchen Cabinet <br />
                <span className="text-accent underline decoration-accent/10 underline-offset-8">Cost Guide Toronto</span>
              </h1>
              <p className="text-gray-600 text-lg font-medium mb-8 leading-relaxed">
                A transparent breakdown of RTA, RTI, and Fully Installed cabinet pricing in the Greater Toronto Area. Make informed decisions based on layout size, material collections, and labor options.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/kitchen-cabinet-estimator" 
                  className="btn-primary px-8 py-4 text-sm font-bold shadow-xl shadow-accent/20 group text-center"
                >
                  Launch Cabinet Estimator
                  <ArrowRight size={16} className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="#tables"
                  className="flex items-center justify-center bg-white border border-border-custom hover:border-accent px-8 py-4 rounded-full text-sm font-bold text-text-primary hover:text-accent transition-all shadow-sm text-center"
                >
                  View Pricing Tables
                </a>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border-custom bg-gray-100">
                <img 
                  src={cabinetsHero} 
                  alt="Modern European style kitchen cabinets in Toronto" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: HOW MUCH DO KITCHEN CABINETS COST */}
      <section className="py-20 bg-white border-b border-border-custom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">How Much Do Kitchen Cabinets Cost?</h2>
            <p className="text-gray-600 leading-relaxed">
              Kitchen cabinet pricing is primarily driven by three factors: **Delivery & Assembly Method** (flat-packed vs factory assembled vs professionally installed), **Collection Tier** (doors, hardware, and finishes selected), and **Linear Foot footprint**.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In Toronto, a typical standard kitchen cabinet renovation ranges between **$8,000 and $18,000** fully installed. For budget-conscious DIYers using RTA methods, this can be reduced to **$4,000 to $7,000**. High-end luxury properties with custom configurations and premium wood veneers can extend past **$30,000**.
            </p>

            <div className="bg-[#FAF9F5] border border-border-custom p-6 rounded-2xl flex items-start gap-4 mt-8">
              <HelpCircle className="text-accent shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-bold text-sm text-text-primary mb-1">How is cabinet size calculated?</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  We measure cabinetry in **Linear Feet (LF)**. A linear foot represents a 1-foot wide run of cabinetry. When estimating a kitchen, you count the width of wall runs. Standard budgets assume a stack of base and upper cabinets matching that width.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: RTA VS RTI VS INSTALLED */}
      <section className="py-20 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.25em] text-[10px] mb-3 block">Service Options</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">RTA vs RTI vs Installed</h2>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider max-w-xl mx-auto mt-2">
              Choosing the right level of assembly and field service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-border-custom rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <Layers size={20} />
                </div>
                <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight mb-2">RTA (Ready To Assemble)</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">Flat-Packed Cabinetry</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Cabinets are shipped flat-packed. You assemble them on site. This option saves factory labor costs and reduces shipping volume, making it the most cost-effective solution.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Ideal For</span>
                <span className="text-xs font-bold text-text-primary uppercase tracking-wide">DIYers, Contractors, Investors</span>
              </div>
            </div>

            <div className="bg-white border-2 border-accent rounded-3xl p-8 shadow-sm flex flex-col justify-between relative ring-4 ring-accent/5">
              <div className="absolute top-4 right-4 bg-accent text-white text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Popular
              </div>
              <div>
                <div className="w-10 h-10 bg-accent/15 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <Truck size={20} />
                </div>
                <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight mb-2">RTI (Ready To Install)</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">Factory-Assembled</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Cabinets are pre-assembled at the factory. Boxes are delivered fully constructed with doors and drawer glides pre-aligned. You anchor them to your kitchen walls.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Ideal For</span>
                <span className="text-xs font-bold text-text-primary uppercase tracking-wide">Renovation Contractors</span>
              </div>
            </div>

            <div className="bg-white border border-border-custom rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <Hammer size={20} />
                </div>
                <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight mb-2">Fully Installed</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">White-Glove Turnkey</p>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Complete peace of mind. We take full measurements, build, deliver, install, align and finish every box. Includes full warranty protection.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Ideal For</span>
                <span className="text-xs font-bold text-text-primary uppercase tracking-wide">Homeowners Seeking Turnkey Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ESSENTIAL VS PREMIUM VS ELITE */}
      <section className="py-20 bg-white border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.25em] text-[10px] mb-3 block">Material Tiers</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">Essential vs Premium vs Elite</h2>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider max-w-xl mx-auto mt-2">
              Choosing the cabinet collection and finish.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="border border-border-custom bg-[#FAF9F5] rounded-3xl overflow-hidden flex flex-col h-full">
              <div className="aspect-[16/10] overflow-hidden relative border-b border-border-custom">
                <img src={essentialKitchenBanner} alt="Essential Cabinet Collection" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-text-primary uppercase tracking-tight mb-2">Essential Collection</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    Flat-panel door faces with high-density structural polymer laminates. Resistant to scratching, moisture, and easy to clean. Best for clean, contemporary modern aesthetics.
                  </p>
                </div>
                <div className="border-t border-border-custom pt-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Door finish</span>
                  <span className="text-xs font-bold text-text-primary uppercase tracking-wide">Natural Wood Flat Panel</span>
                </div>
              </div>
            </div>

            <div className="border border-border-custom bg-[#FAF9F5] rounded-3xl overflow-hidden flex flex-col h-full">
              <div className="aspect-[16/10] overflow-hidden relative border-b border-border-custom">
                <img src={premiumKitchenBanner} alt="Premium Cabinet Collection" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-text-primary uppercase tracking-tight mb-2">Premium Collection</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    Classic recessed center-panel shaker cabinets or sleek slab doors in soft matte and high-gloss acrylic finishes. Elevates look and provides premium tactile feels.
                  </p>
                </div>
                <div className="border-t border-border-custom pt-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Door finish</span>
                  <span className="text-xs font-bold text-text-primary uppercase tracking-wide">Shaker, Matte & Gloss Acrylic</span>
                </div>
              </div>
            </div>

            <div className="border border-border-custom bg-[#FAF9F5] rounded-3xl overflow-hidden flex flex-col h-full">
              <div className="aspect-[16/10] overflow-hidden relative border-b border-border-custom">
                <img src={eliteKitchenBanner} alt="Elite Cabinet Collection" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-text-primary uppercase tracking-tight mb-2">Elite Collection</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    Our designer line featuring delicate slim shaker profile edges, solid painted wood cores, or premium organic rift-cut natural wood veneers.
                  </p>
                </div>
                <div className="border-t border-border-custom pt-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Door finish</span>
                  <span className="text-xs font-bold text-text-primary uppercase tracking-wide">Designer Slim Shaker & Veneers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT IMPACTS CABINET PRICING */}
      <section className="py-20 bg-white border-b border-border-custom">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-text-primary mb-8 tracking-tight">What Impacts Cabinet Pricing?</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Beyond size and materials, the layout configuration and custom upgrades will impact the total quote:
            </p>
            <ul className="space-y-4 pl-4 border-l-2 border-accent">
              <li>
                <strong>Kitchen Layout Complexity:</strong> L-shape and U-shape kitchens require corner cabinet boxes (lazy susans, blind corner organizers) which cost 2x to 3x more than straight run boxes.
              </li>
              <li>
                <strong>Drawer Packs vs Shelves:</strong> Drawer base cabinets (featuring Blum or matching soft-close metal undermount slide guides) cost significantly more than standard cabinet boxes with shelves.
              </li>
              <li>
                <strong>Pantry Towers & Fridge Panels:</strong> Vertical utility towers, integrated pantries, and cabinet matching appliance panels add significant linear foot height and cost.
              </li>
              <li>
                <strong>Accessories:</strong> Integrated waste bins, spice pull-outs, and under-cabinet LED channels.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 5: KITCHEN SIZE & ISLAND EXAMPLES */}
      <section className="py-20 bg-[#FAF9F5] border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.25em] text-[10px] mb-3 block">Renovation Scenarios</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">Kitchen Size & Island Examples</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-border-custom rounded-3xl p-8">
              <h3 className="text-lg font-bold text-text-primary uppercase tracking-wider mb-2">10x10 Kitchen Pricing</h3>
              <p className="text-2xl font-black text-accent tracking-tight mb-4">$8,000 – $15,000</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Based on a standard 20 linear foot run of wall cabinets. Perfect for condos, townhomes, and smaller galley layouts.
              </p>
              <ul className="space-y-1 text-xs font-bold text-gray-500 uppercase tracking-wide pt-4 border-t border-gray-100">
                <li>• Essential RTA: ~$3,500</li>
                <li>• Premium Installed: ~$9,500</li>
              </ul>
            </div>

            <div className="bg-white border border-border-custom rounded-3xl p-8">
              <h3 className="text-lg font-bold text-text-primary uppercase tracking-wider mb-2">Large Kitchen Pricing</h3>
              <p className="text-2xl font-black text-accent tracking-tight mb-4">$15,000 – $30,000+</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Based on 28+ linear feet of custom configurations including utility storage columns, tall pantries, and panel integration.
              </p>
              <ul className="space-y-1 text-xs font-bold text-gray-500 uppercase tracking-wide pt-4 border-t border-gray-100">
                <li>• Premium RTA: ~$7,500</li>
                <li>• Elite Installed: ~$24,000</li>
              </ul>
            </div>

            <div className="bg-white border border-border-custom rounded-3xl p-8">
              <h3 className="text-lg font-bold text-text-primary uppercase tracking-wider mb-2">Island Cabinet Examples</h3>
              <p className="text-2xl font-black text-accent tracking-tight mb-4">$1,200 – $4,800</p>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Islands add base cabinetry boxes (typically 4 LF to 8 LF runs) and decorative end panels or waterfall accents.
              </p>
              <ul className="space-y-1 text-xs font-bold text-gray-500 uppercase tracking-wide pt-4 border-t border-gray-100">
                <li>• Small Island (4 LF): ~$1,500</li>
                <li>• Large Island (8 LF): ~$3,600</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PRICING TABLES */}
      <section className="py-20 bg-white border-b border-border-custom" id="tables">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-[0.25em] text-[10px] mb-3 block">Complete Rate Index</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">GTA Cabinet Cost Index</h2>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-2">Rates calculated per linear foot of upper/lower sets</p>
          </div>

          <div className="space-y-12">
            
            {/* RTA Pricing Table */}
            <div className="bg-[#FAF9F5] border border-border-custom rounded-3xl p-6 md:p-8">
              <h3 className="text-base font-bold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers size={18} className="text-accent" />
                RTA (Ready To Assemble) Pricing Table
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border-custom text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <th className="py-3">Collection</th>
                      <th className="py-3 text-right">Price per Linear Foot</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm font-semibold text-text-primary">
                    <tr>
                      <td className="py-4">Essential Collection</td>
                      <td className="py-4 text-right font-black text-accent">$105 - $155</td>
                    </tr>
                    <tr>
                      <td className="py-4">Premium Collection</td>
                      <td className="py-4 text-right font-black text-accent">$153 - $210</td>
                    </tr>
                    <tr>
                      <td className="py-4">Elite Collection</td>
                      <td className="py-4 text-right font-black text-accent">$165 - $225</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* RTI Pricing Table */}
            <div className="bg-[#FAF9F5] border border-border-custom rounded-3xl p-6 md:p-8">
              <h3 className="text-base font-bold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <Truck size={18} className="text-accent" />
                RTI (Ready To Install / Factory Assembled) Pricing Table
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border-custom text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <th className="py-3">Collection</th>
                      <th className="py-3 text-right">Price per Linear Foot</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm font-semibold text-text-primary">
                    <tr>
                      <td className="py-4">Essential Collection</td>
                      <td className="py-4 text-right font-black text-accent">$112 - $165</td>
                    </tr>
                    <tr>
                      <td className="py-4">Premium Collection</td>
                      <td className="py-4 text-right font-black text-accent">$160 - $215</td>
                    </tr>
                    <tr>
                      <td className="py-4">Elite Collection</td>
                      <td className="py-4 text-right font-black text-accent">$170 - $230</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Installed Pricing Table */}
            <div className="bg-[#FAF9F5] border border-accent/20 rounded-3xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-white text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                Best Seller
              </div>
              <h3 className="text-base font-bold text-text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                <Hammer size={18} className="text-accent" />
                Fully Installed (Turnkey Installation) Pricing Table
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border-custom text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <th className="py-3">Collection</th>
                      <th className="py-3 text-right">Price per Linear Foot</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm font-semibold text-text-primary">
                    <tr>
                      <td className="py-4">Essential Collection</td>
                      <td className="py-4 text-right font-black text-accent">$190 - $230</td>
                    </tr>
                    <tr>
                      <td className="py-4">Premium Collection</td>
                      <td className="py-4 text-right font-black text-accent">$235 - $290</td>
                    </tr>
                    <tr>
                      <td className="py-4">Elite Collection</td>
                      <td className="py-4 text-right font-black text-accent">$245 - $310</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ESTIMATOR CTA CARD */}
      <section className="py-20 bg-[#0E1116] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent mx-auto">
            <Calculator size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get Your Instant Cabinet Estimate</h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Ready to compute cabinet runs for your kitchen? Calculate RTA, RTI, and installed pricing based on your custom wall measurements in 30 seconds.
          </p>
          <div className="pt-4">
            <Link 
              to="/kitchen-cabinet-estimator" 
              className="btn-primary inline-flex px-12 py-5 font-bold uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-102 transition-transform"
            >
              Launch Cabinet Estimator
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
