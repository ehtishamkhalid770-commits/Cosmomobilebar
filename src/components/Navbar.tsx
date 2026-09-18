import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { BRAND_INFO } from '../data/mockupData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onBookClick,
}) => {
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
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'menu', label: 'Cocktails' },
    { id: 'packages', label: 'Packages' },
    { id: 'calculator', label: 'Calculator' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleItemClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0a0e]/95 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-[#0b0a0e]/80 backdrop-blur-md border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Sleek Minimalist Luxury Brand Logo */}
        <button
          onClick={() => handleItemClick('home')}
          className="flex flex-col text-left group focus:outline-none"
        >
          <span className="font-serif text-2xl tracking-[0.22em] font-bold text-white group-hover:text-[#e69a9e] transition-colors leading-none">
            COSMO
          </span>
          <span className="text-[9px] tracking-[0.35em] font-sans text-[#e8c872] uppercase font-medium mt-1">
            Mobile Bar
          </span>
        </button>

        {/* Clean Center Navigation with Active Page Indicators */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-[0.15em]">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`py-1 relative transition-colors focus:outline-none ${
                  isActive
                    ? 'text-[#e69a9e] font-bold'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#e69a9e] to-[#e8c872] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Phone + Book CTA */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${BRAND_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="hidden xl:flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-[#e69a9e] tracking-wider transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#e69a9e]" />
            <span>{BRAND_INFO.phone}</span>
          </a>

          <div className="hidden xl:block h-4 w-px bg-white/15" />

          <button
            id="nav-book-event-btn"
            onClick={onBookClick}
            className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] to-[#cf787d] text-[#0b0a0e] hover:from-[#f2b3b6] hover:to-[#df8b90] shadow-lg shadow-[#e69a9e]/20 hover:shadow-[#e69a9e]/35 transition-all"
          >
            Book Your Date
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Clean Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#100e16]/98 border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl backdrop-blur-xl animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-left py-2 border-b border-white/5 uppercase tracking-wider text-xs flex items-center justify-between ${
                    isActive
                      ? 'text-[#e69a9e] font-bold pl-2 border-l-2 border-[#e69a9e]'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-[10px] text-[#e8c872]">• Active</span>}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 flex flex-col gap-3">
            <a
              href={`tel:${BRAND_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full py-2.5 px-4 rounded-xl bg-white/5 text-neutral-200 text-xs font-medium flex items-center justify-center gap-2 border border-white/10"
            >
              <Phone className="w-3.5 h-3.5 text-[#e69a9e]" />
              <span>Call {BRAND_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#e69a9e] to-[#cf787d] text-[#0b0a0e] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#e69a9e]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Date</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
