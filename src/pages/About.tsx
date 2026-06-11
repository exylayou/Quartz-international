import React from 'react';
import { motion } from 'motion/react';
import { User, ShieldCheck, Clock, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-background pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <User size={14} />
            Our Story
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-text-primary uppercase">Crafting Excellence Since 2006</h1>
          <p className="text-xl text-text-muted leading-relaxed mb-12">
            Quartz International (Solid State Interiors) has been at the forefront of kitchen renovation across the Toronto & GTA region for nearly two decades. We specialize in the precision fabrication and installation of premium quartz surfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="glass-panel p-10 bg-white">
            <ShieldCheck size={32} className="text-accent mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <p className="text-text-muted leading-relaxed">
              We believe that the kitchen is the heart of every home. That is why we handle every step of the process—from the initial 30-second estimate to the final polish—with unmatched care and professionalism.
            </p>
          </div>
          <div className="glass-panel p-10 bg-white">
            <Clock size={32} className="text-accent mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Heritage</h3>
            <p className="text-text-muted leading-relaxed">
              Starting as a small family operation, we have grown into one of the GTA's most trusted names, completing over 5,000 successful installations. Our reputation is built on transparency, speed, and high-end results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
