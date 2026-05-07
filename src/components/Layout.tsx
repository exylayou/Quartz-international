import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calculator } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Cost', path: '/cost' },
    { name: 'Quartz Countertops', path: '/quartz-kitchen-countertops' },
    { name: 'Cabinets', path: '/cabinets' },
    { name: 'Gallery', path: '/gallery' },
  ];

  const isLandingPage = false; // Always show header navigation as requested

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-border-custom sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-text-primary uppercase leading-none">
                Quartz<span className="text-accent underline decoration-4 underline-offset-4">International</span>
              </span>
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
              <a href="tel:9056601100" className="flex items-center gap-2 text-sm font-bold text-text-primary hover:text-accent">
                <Phone size={16} className="text-accent" />
                (905) 660-1100
              </a>
              <Link to="/estimate" className="btn-primary py-2.5 px-6 text-xs uppercase tracking-widest flex items-center gap-2">
                Get Instant Estimate
              </Link>
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
              <a href="tel:9056601100" className="flex items-center gap-3 px-3 py-4 text-base font-bold border-b border-border-custom">
                <Phone size={20} className="text-accent" />
                (905) 660-1100
              </a>
              <Link 
                to="/estimate" 
                className="btn-primary w-full text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Instant Estimate
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-dark text-white pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
              <div className="col-span-1 md:col-span-2">
                <span className="text-2xl font-black tracking-tighter mb-8 block uppercase">
                  Quartz<span className="text-accent underline underline-offset-4 decoration-2">International</span>
                </span>
                <p className="text-gray-400 max-w-sm mb-10 leading-relaxed">
                  Leading the GTA in premium kitchen surfaces and custom cabinetry since 2006. 5,000+ kitchens installed with perfection.
                </p>
                <div className="flex items-center gap-6">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-1">Speak with an expert</p>
                    <a href="tel:9056601100" className="text-xl font-bold hover:text-accent transition-colors">(905) 660-1100</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Navigation</h4>
                <ul className="space-y-4 text-gray-400 font-medium text-sm">
                  <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link to="/gallery" className="hover:text-white transition-colors">Our Gallery</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Solutions</h4>
                <ul className="space-y-4 text-gray-400 font-medium text-sm">
                  <li><Link to="/quartz-kitchen-countertops" className="hover:text-white transition-colors">Quartz Countertops</Link></li>
                  <li><Link to="/cabinets" className="hover:text-white transition-colors">Custom Cabinets</Link></li>
                  <li><Link to="/cost" className="hover:text-white transition-colors">Pricing Guide</Link></li>
                  <li><Link to="/estimate" className="hover:text-white transition-colors">Instant Estimate</Link></li>
                </ul>
              </div>
            </div>

            {/* Horizontal City Links */}
            <div className="border-t border-white/5 pt-12 pb-8">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                {['Markham', 'Vaughan', 'Mississauga', 'Richmond Hill', 'Oakville', 'Ajax', 'Pickering'].map((city) => (
                  <Link 
                    key={city} 
                    to={`/quartz-countertop-cost/${city.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-accent transition-colors"
                  >
                    {city}
                  </Link>
                ))}
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
    </div>

  );
}
