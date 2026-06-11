import { motion } from 'motion/react';
import { TrendingUp, Award, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Guide2026() {
  const trends = [
    { title: 'Warm Neutrals', desc: 'Moving away from cold greys toward creamy whites and warm beiges.' },
    { title: 'Bold Veining', desc: 'Dramatic, large-scale veining in porcelain and quartz is the top request.' },
    { title: 'Matte Finishes', desc: 'Honed and leathered textures are overtaking high-gloss for a modern feel.' },
    { title: 'Integrated Sinks', desc: 'Sinks made from the same slab material for a seamless, monolithic look.' },
  ];

  return (
    <div className="bg-background">
      <section className="py-24 bg-text-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-6 block">Industry Report</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Kitchen Design <br />Trends for 2026</h1>
          <p className="text-xl text-gray-400">Everything you need to know about the future of kitchen surfaces.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <h2 className="text-4xl font-bold mb-8">The Dominance of <span className="text-accent italic">Quartz</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                In 2026, quartz continues to be the undisputed leader in kitchen surfaces. Its perfect balance of durability, affordability, and aesthetic versatility makes it the top choice for 99% of modern homeowners.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={20} />
                  <span className="font-medium">Stain and Scratch Resistant</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={20} />
                  <span className="font-medium">Zero Maintenance - No Sealing Required</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={20} />
                  <span className="font-medium">Hundreds of Modern Color Options</span>
                </div>
              </div>
              <Link to="/quartz-kitchen-countertops" className="btn-outline mt-10 inline-flex">Explore Quartz Guide</Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Quartz Kitchen" 
                className="w-full h-full object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trends.map((trend, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-panel p-8"
              >
                <TrendingUp className="text-accent mb-6" size={24} />
                <h4 className="text-xl font-bold mb-4">{trend.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{trend.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Award className="text-accent mx-auto mb-8" size={48} />
          <h2 className="text-4xl font-bold mb-8">Ready to start your project?</h2>
          <p className="text-xl text-gray-600 mb-12">Use our interactive tool to see how these trends fit into your budget.</p>
          <Link to="/estimate" className="btn-primary text-lg px-12">Get Instant Estimate</Link>
        </div>
      </section>
    </div>
  );
}
