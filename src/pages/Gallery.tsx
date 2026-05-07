import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const GALLERY_ITEMS = [
  { id: 1, title: 'Modern Calacatta Masterpiece', location: 'Toronto', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d' },
  { id: 2, title: 'Industrial Loft Transformation', location: 'Scarborough', image: 'https://images.unsplash.com/photo-1600585154542-636a0ed7ec2d' },
  { id: 3, title: 'Classic Shaker Elegance', location: 'Pickering', image: '/images/hero8.jpeg' },
  { id: 4, title: 'Minimalist Scandi Vibe', location: 'Markham', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b' },
  { id: 5, title: 'Luxury Waterfall Feature', location: 'Richmond Hill', image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4' },
  { id: 6, title: 'Traditional Family Kitchen', location: 'Vaughan', image: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4' },
  { id: 7, title: 'Moody Noir Modern', location: 'Etobicoke', image: 'https://images.unsplash.com/photo-1600607688066-880987f18a86' },
  { id: 8, title: 'Warm Walnut & Quartz', location: 'Oakville', image: 'https://images.unsplash.com/photo-1600570994443-d2d1d114e9ee' },
  { id: 9, title: 'Gold Vein Luxury', location: 'North York', image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f' },
];

import { useCalculator } from '../context/CalculatorContext';

export default function Gallery() {
  const { openCalculator } = useCalculator();
  return (
    <div className="bg-background pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Camera size={14} />
            Our Portfolio
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-text-primary uppercase">Recent Transformations</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">Explore our gallery of recently completed kitchen projects across the GTA.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[4/5] rounded-[var(--radius-card)] overflow-hidden mb-6 relative">
                <img 
                  src={`${item.image}?auto=format&fit=crop&q=80&w=800`} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-xs font-bold text-accent uppercase tracking-widest">{item.location}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 glass-panel p-10 md:p-16 text-center bg-white shadow-xl">
          <h2 className="text-3xl font-bold mb-8">Ready to see your kitchen in this gallery?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button onClick={() => openCalculator()} className="btn-primary px-10 h-16">Get Your Instant Quote</button>
            <Link to="/contact" className="btn-outline px-10 h-16">Book a Design Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
