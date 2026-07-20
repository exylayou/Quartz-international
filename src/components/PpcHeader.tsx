import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Star } from 'lucide-react';

interface PpcHeaderProps {
  title?: string;
}

export function PpcHeader({ title = "Quartz Countertops & Custom Kitchens GTA" }: PpcHeaderProps) {
  return (
    <header className="bg-white border-b border-border-custom sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 w-[160px] min-w-[160px] select-none group">
            <div className="shrink-0 text-accent transition-transform duration-500 group-hover:rotate-12">
              <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="50,5 90,40 50,95 10,40" strokeLinejoin="round" />
                <line x1="10" y1="40" x2="90" y2="40" />
                <line x1="50" y1="5" x2="50" y2="95" />
                <polygon points="50,5 72,40 50,95 28,40" strokeLinejoin="round" strokeWidth="1.5" opacity="0.75" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold tracking-[0.25em] text-[#1A1A1A] uppercase leading-none font-sans">
                Quartz
              </span>
              <span className="text-[8px] md:text-[9px] font-bold tracking-[0.38em] text-accent uppercase mt-1 leading-none font-sans">
                International
              </span>
            </div>
          </Link>

          {/* Center Trust Badges (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-accent" />
              <span>Licensed & Insured</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <span className="text-text-primary">4.9★ (128+ Reviews)</span>
            </div>
          </div>

          {/* Click-to-Call Phone Button */}
          <a 
            href="tel:6473706938" 
            className="btn-primary py-2.5 px-4 sm:px-6 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2.5 cursor-pointer shadow-md shadow-accent/20"
          >
            <Phone size={16} className="shrink-0" />
            <span>(647) 370-6938</span>
          </a>

        </div>
      </div>
    </header>
  );
}
