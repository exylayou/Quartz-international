import React from 'react';
import { motion } from 'motion/react';
import { Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const POSTS = [
  { id: 1, title: 'Top Quartz Trends for 2026', excerpt: 'Discover the latest color palettes and finishes dominating the market this year.', date: 'May 12, 2026' },
  { id: 2, title: 'How to Care for Your Quartz Surfaces', excerpt: 'Keep your countertops looking brand new with these simple daily tips.', date: 'April 28, 2026' },
  { id: 3, title: 'Quartz vs. Granite: The Final Verdict', excerpt: 'A deep dive into why more homeowners are choosing engineered stone over natural slabs.', date: 'April 15, 2026' },
];

export default function Blog() {
  return (
    <div className="bg-background pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Newspaper size={14} />
            Insights & Guides
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-text-primary uppercase">Kitchen Design Blog</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">Stay informed with the latest industry news and expert design advice.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <div key={post.id} className="glass-panel p-10 bg-white hover:border-accent transition-all group">
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">{post.date}</p>
              <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors">{post.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-8">{post.excerpt}</p>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-primary group-hover:gap-4 transition-all">
                Read More <ArrowRight size={14} className="text-accent" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
