import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MATERIALS } from '../constants';
import { CheckCircle2, ArrowRight, Calculator, ShieldCheck, Award } from 'lucide-react';

export default function MaterialPage() {
  const { materialId } = useParams();
  const material = MATERIALS.find(m => m.id === (materialId?.replace('-countertops', '') || 'quartz')) || MATERIALS[0];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <img 
          src={material.image} 
          alt={material.name} 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{material.name} <br /><span className="text-accent">Countertops</span></h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              {material.description} Discover why {material.name} is one of the most requested materials for modern kitchen renovations in 2026.
            </p>
            <Link to={`/estimate?open-calculator=true&slab=${encodeURIComponent(material.name)}`} className="btn-primary flex items-center justify-center w-fit gap-2">
              Estimate Your {material.name} Project
              <Calculator size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose {material.name}?</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="bg-white p-4 h-fit shadow-sm">
                    <ShieldCheck className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Unmatched Durability</h4>
                    <p className="text-gray-600">Engineered to withstand the rigors of a busy kitchen. Scratch, stain, and impact resistant.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-white p-4 h-fit shadow-sm">
                    <Award className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Premium Aesthetics</h4>
                    <p className="text-gray-600">Available in hundreds of colors and patterns, from solid minimalist tones to dramatic natural veining.</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-8 glass-panel">
                <h4 className="font-bold mb-4">2026 Pricing Insight</h4>
                <p className="text-gray-600 mb-6">Current market rates for {material.name} range from <span className="text-accent font-bold">${material.basePrice} - ${material.basePrice + 40} per sq ft</span> installed.</p>
                <Link to="/cost" className="text-sm font-bold text-accent flex items-center gap-2">
                  View Full Pricing Table <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/k1/600/800" className="w-full h-full object-cover shadow-lg" alt="Kitchen" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/k2/600/800" className="w-full h-full object-cover shadow-lg mt-12" alt="Kitchen" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-text-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Ready for a {material.name} Kitchen?</h2>
          <p className="text-xl text-gray-400 mb-12">Get an instant estimate and see how {material.name} fits your budget.</p>
          <Link to={`/estimate?open-calculator=true&slab=${encodeURIComponent(material.name)}`} className="btn-primary">Get My Smart Estimate</Link>
        </div>
      </section>
    </div>
  );
}
