import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  FileText 
} from 'lucide-react';
import { companyInfo } from '../data/logisticsData';

export default function Navbar({ activePage, setActivePage, openQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'network', label: 'Global Network' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-dhl-yellow text-dhl-black shadow-lg py-2.5' 
          : 'bg-dhl-yellow text-dhl-black py-3.5'
      } border-b-4 border-dhl-red`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center gap-3 group"
          >
            {/* Logo Emblem styled with DHL high-speed chevron emblem */}
            <div className="relative flex items-center justify-center bg-dhl-red text-white p-2.5 rounded shadow-md group-hover:scale-105 transition-transform duration-200">
              <div className="flex items-center font-black tracking-tighter text-xl">
                <Truck className="w-6 h-6 stroke-[2.5]" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tighter text-dhl-black uppercase font-heading leading-tight">
                  RAMSYDEX
                </span>
                <span className="bg-dhl-red text-white text-[10px] font-black tracking-widest px-1.5 py-0.5 rounded uppercase">
                  GLOBAL
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-black text-zinc-900 tracking-wider uppercase -mt-0.5">
                <span className="text-dhl-red font-black">32 Years</span> of Experience
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-bold tracking-tight rounded transition-all duration-150 relative ${
                    isActive 
                      ? 'text-white bg-dhl-red shadow-sm' 
                      : 'text-dhl-black hover:bg-black/10'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-dhl-yellow rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Request a Quote - High Contrast DHL Red Button */}
            <button
              onClick={() => {
                if (openQuoteModal) {
                  openQuoteModal();
                } else {
                  handleNavClick('contact');
                }
              }}
              className="relative overflow-hidden group bg-dhl-red hover:bg-dhl-red-hover text-white text-xs sm:text-sm font-black px-4 sm:px-5 py-2.5 rounded shadow-md hover:shadow-brand transition-all duration-200 flex items-center gap-1.5 uppercase tracking-wider"
            >
              <FileText className="w-4 h-4 text-dhl-yellow" />
              <span>Request a Quote</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-dhl-black hover:bg-black/10 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zinc-900 text-white border-t border-zinc-800 px-4 pt-3 pb-6 mt-3 animate-in slide-in-from-top duration-200">
            <div className="pb-3 mb-3 border-b border-zinc-800 text-xs">
              <span className="text-zinc-400">Hub: Shah Alam, Central Malaysia</span>
            </div>

            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between text-left px-3 py-2.5 rounded text-sm font-bold tracking-wide ${
                      isActive 
                        ? 'bg-dhl-red text-white' 
                        : 'text-zinc-200 hover:bg-zinc-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center gap-2 bg-zinc-800 text-white font-bold py-2.5 rounded text-sm"
              >
                <Phone className="w-4 h-4 text-dhl-yellow" />
                <span>Call Dispatch: {companyInfo.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
