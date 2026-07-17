import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SEO } from '../components/SEO';
const AREAS = [
  { name: 'Toronto', path: '/quartz-countertops-toronto' },
  { name: 'Scarborough', path: '/quartz-countertops-scarborough' },
  { name: 'Etobicoke', path: '/quartz-countertops-etobicoke' },
  { name: 'Mississauga', path: '/quartz-countertops-mississauga' },
  { name: 'Brampton', path: '/quartz-countertops-brampton' },
  { name: 'Vaughan', path: '/quartz-countertops-vaughan' },
  { name: 'Markham', path: '/quartz-countertops-markham' },
  { name: 'Richmond Hill', path: '/quartz-countertops-richmond-hill' },
  { name: 'Oakville', path: '/quartz-countertops-oakville' },
  { name: 'Burlington', path: '/quartz-countertops-burlington' },
  { name: 'Milton', path: '/quartz-countertops-milton' },
  { name: 'Aurora', path: '/quartz-countertops-aurora' },
  { name: 'Newmarket', path: '/quartz-countertops-newmarket' },
  { name: 'King City', path: '/quartz-countertops-king' },
  { name: 'Kleinburg', path: '/quartz-countertops-kleinburg' },
  { name: 'Nobleton', path: '/quartz-countertops-nobleton' },
  { name: 'Stouffville', path: '/quartz-countertops-stouffville' },
  { name: 'East Gwillimbury', path: '/quartz-countertops-east-gwillimbury' },
  { name: 'Uxbridge', path: '/quartz-countertops-uxbridge' },
  { name: 'Pickering', path: '/quartz-countertops-pickering' },
  { name: 'Ajax', path: '/quartz-countertops-ajax' },
];

export default function AreasWeServe() {
  return (
    <div className="bg-background pt-20 pb-32">
      <SEO title="Areas We Serve | Quartz International" description="Learn more about Areas We Serve at Quartz International. We provide premium countertops and cabinetry in Toronto and the GTA." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <MapPin size={14} />
            Our Reach
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-text-primary uppercase">Serving the GTA & Beyond</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">We bring premium quartz surfaces and cabinetry to homeowners across the Greater Toronto Area.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {AREAS.map((area) => (
            <Link 
              key={area.name} 
              to={area.path}
              className="glass-panel p-8 text-center bg-white hover:border-accent hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{area.name}</h3>
              <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight size={18} className="text-accent" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-tight">Pricing Guides by City</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Markham', 'Vaughan', 'Mississauga', 'Richmond Hill', 'Oakville', 'Ajax', 'Pickering', 'Whitby', 'Oshawa'].map((city) => (
               <Link 
                 key={city} 
                 to={`/quartz-countertop-cost/${city.toLowerCase().replace(' ', '-')}`}
                 className="flex justify-between items-center bg-white border border-border-custom p-6 rounded-2xl hover:border-accent transition-colors group"
               >
                 <span className="font-bold text-text-primary uppercase tracking-widest text-sm">Quartz Cost in {city}</span>
                 <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
               </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
