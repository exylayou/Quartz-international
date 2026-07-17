import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calculator, Bot, MessageCircle, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import { useCalculator } from '../context/CalculatorContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const isEstimatorPage = [
    '/quartz-countertop-estimator',
    '/kitchen-cabinet-estimator',
    '/kitchen-renovation-estimator'
  ].includes(location.pathname);
  const isCabinetPage = location.pathname.toLowerCase().includes('cabinet');
  const { openCalculator } = useCalculator();

  const navLinks = [
    { name: 'Countertops', path: '/quartz-kitchen-countertops' },
    { name: 'Cabinets', path: '/cabinets' },
  ];

  const isLandingPage = false; // Always show header navigation as requested

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdmin && !isEstimatorPage && (
        <header className="bg-white border-b border-border-custom sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center gap-3 w-[160px] min-w-[160px] max-w-[170px] select-none group">
                {/* geometric quartz icon */}
                <div className="shrink-0 text-accent transition-transform duration-500 group-hover:rotate-12">
                  <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="50,5 90,40 50,95 10,40" strokeLinejoin="round" />
                    <line x1="10" y1="40" x2="90" y2="40" />
                    <line x1="50" y1="5" x2="50" y2="95" />
                    <polygon points="50,5 72,40 50,95 28,40" strokeLinejoin="round" strokeWidth="1.5" opacity="0.75" />
                  </svg>
                </div>
                
                {/* Text Lockup */}
                <div className="flex flex-col">
                  <span className="text-base md:text-lg font-bold tracking-[0.25em] text-[#1A1A1A] uppercase leading-none font-sans">
                    Quartz
                  </span>
                  <span className="text-[8px] md:text-[9px] font-bold tracking-[0.38em] text-accent uppercase mt-1 leading-none font-sans">
                    International
                  </span>
                </div>
              </Link>
  
              {/* Desktop Nav */}
              <nav className="hidden xl:flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-sm font-bold uppercase tracking-widest transition-colors hover:text-accent",
                      location.pathname === link.path ? "text-accent" : "text-text-primary"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <a href="tel:6473706938" className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-accent">
                  <Phone size={16} className="text-accent" />
                  (647) 370-6938
                </a>
                {!isCabinetPage && (
                  <Link 
                    to="/quartz-countertop-estimator" 
                    className="btn-primary py-2.5 px-6 text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                  >
                    Get Instant Estimate
                  </Link>
                )}
              </nav>
  
              {/* Mobile Menu Toggle */}
              <button 
                className="xl:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
  
          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="xl:hidden bg-white border-b border-border-custom animate-in fade-in slide-in-from-top-4">
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-3 py-4 text-base font-bold uppercase tracking-widest border-b border-border-custom last:border-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <a href="tel:6473706938" className="flex items-center gap-3 px-3 py-4 text-base font-bold border-b border-border-custom">
                  <Phone size={20} className="text-accent" />
                  (647) 370-6938
                </a>
                {!isCabinetPage && (
                  <Link 
                    to="/quartz-countertop-estimator"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary w-full text-center mt-4 cursor-pointer flex items-center justify-center"
                  >
                    Get Instant Estimate
                  </Link>
                )}
              </div>
            </div>
          )}
        </header>
      )}

      <main className="flex-grow">
        {children}
      </main>

      {!isAdmin && !isEstimatorPage && (
        <footer className="bg-dark text-white pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
              <div className="col-span-1">
                <Link to="/" className="inline-flex items-center gap-3 w-[160px] min-w-[160px] max-w-[170px] select-none group mb-8">
                  {/* geometric quartz icon */}
                  <div className="shrink-0 text-accent transition-transform duration-500 group-hover:rotate-12">
                    <svg viewBox="0 0 100 100" className="w-8 h-8 md:w-9 md:h-9" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="50,5 90,40 50,95 10,40" strokeLinejoin="round" />
                      <line x1="10" y1="40" x2="90" y2="40" />
                      <line x1="50" y1="5" x2="50" y2="95" />
                      <polygon points="50,5 72,40 50,95 28,40" strokeLinejoin="round" strokeWidth="1.5" opacity="0.75" />
                    </svg>
                  </div>
                  
                  {/* Text Lockup */}
                  <div className="flex flex-col">
                    <span className="text-base md:text-lg font-bold tracking-[0.25em] text-white uppercase leading-none font-sans">
                      Quartz
                    </span>
                    <span className="text-[8px] md:text-[9px] font-bold tracking-[0.38em] text-accent uppercase mt-1 leading-none font-sans">
                      International
                    </span>
                  </div>
                </Link>
                <p className="text-gray-400 max-w-sm mb-10 leading-relaxed text-sm">
                  Leading the GTA in premium kitchen surfaces and custom cabinetry since 2006. 5,000+ kitchens installed with perfection.
                </p>
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Navigation</h4>
                <ul className="space-y-4 text-gray-400 font-medium text-sm">
                  <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="/gallery" className="hover:text-white transition-colors">Our Gallery</Link></li>
                  <li><Link to="/areas-we-serve" className="hover:text-white transition-colors">Areas We Serve</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Solutions</h4>
                <ul className="space-y-4 text-gray-400 font-medium text-sm">
                  <li><Link to="/quartz-kitchen-countertops" className="hover:text-white transition-colors">Countertops</Link></li>
                  <li><Link to="/white-quartz-kitchen-countertops" className="hover:text-white transition-colors">White Quartz Countertops</Link></li>
                  <li><Link to="/cabinets" className="hover:text-white transition-colors">Cabinets</Link></li>
                  <li><Link to="/cost" className="hover:text-white transition-colors">Pricing Guide</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Resources</h4>
                <ul className="space-y-4 text-gray-400 font-medium text-sm">
                  <li><Link to="/cost" className="hover:text-white transition-colors">Quartz Countertop Cost Guide</Link></li>
                  <li><Link to="/quartz-countertop-estimator" className="hover:text-white transition-colors">Quartz Countertop Estimator</Link></li>
                  <li><Link to="/kitchen-cabinet-cost" className="hover:text-white transition-colors">Kitchen Cabinet Cost Guide</Link></li>
                  <li><Link to="/kitchen-cabinet-estimator" className="hover:text-white transition-colors">Kitchen Cabinet Estimator</Link></li>
                  <li><Link to="/kitchen-renovation-estimator" className="hover:text-white transition-colors">Kitchen Renovation Estimator</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Contact</h4>
                <ul className="space-y-4 text-gray-400 font-medium text-sm">
                  <li>
                    <button 
                      onClick={() => window.dispatchEvent(new Event('open-ai-chat'))}
                      className="flex items-center gap-3 hover:text-white transition-colors text-left font-medium"
                    >
                      <Bot size={16} className="text-accent shrink-0" />
                      <span>AI Kitchen Assistant</span>
                    </button>
                  </li>
                  <li>
                    <a 
                      href="https://wa.me/16473706684" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-white transition-colors"
                    >
                      <MessageCircle size={16} className="text-accent shrink-0" />
                      <span>WhatsApp Us</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:6473706938" 
                      className="flex items-center gap-3 hover:text-white transition-colors"
                    >
                      <Phone size={16} className="text-accent shrink-0" />
                      <span>(647) 370-6938</span>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:info@quartzinternational.ca" 
                      className="flex items-center gap-3 hover:text-white transition-colors"
                    >
                      <Mail size={16} className="text-accent shrink-0" />
                      <span className="break-all">info@quartzinternational.ca</span>
                    </a>
                  </li>
                  {!isCabinetPage && (
                    <li>
                      <Link 
                        to="/quartz-countertop-estimator"
                        className="flex items-center gap-3 hover:text-white transition-colors text-left font-medium"
                      >
                        <Calculator size={16} className="text-accent shrink-0" />
                        <span>Get Instant Estimate</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>


            <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600">
              <p>© 2026 QUARTZ INTERNATIONAL. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-10">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
