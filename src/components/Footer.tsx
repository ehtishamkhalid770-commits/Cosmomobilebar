import React from 'react';
import { GlassWater, Phone, Mail, MapPin, Heart, Code2, Lock } from 'lucide-react';
import { BRAND_INFO } from '../data/mockupData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenWpSpecs: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWpSpecs }) => {
  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08070b] border-t border-[#e69a9e]/20 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-3 text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e69a9e] to-[#a35257] p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0b0a0e] rounded-full flex items-center justify-center">
                  <GlassWater className="w-5 h-5 text-[#e69a9e]" />
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif tracking-[0.25em] text-xl font-bold text-white">
                    COSMO
                  </span>
                  <span className="text-[10px] tracking-[0.3em] font-sans text-[#e8c872] uppercase font-semibold">
                    Mobile Bar
                  </span>
                </div>
                <p className="font-script text-xs text-[#e69a9e] tracking-wider -mt-1 opacity-90">
                  Sip. Celebrate. Repeat.
                </p>
              </div>
            </button>

            <p className="text-neutral-300 font-light leading-relaxed">
              Premier craft cocktail catering and luxury mobile bar setups for weddings, corporate galas, milestone birthdays, and celebrations across Maryland, Washington D.C., and Northern Virginia.
            </p>

            <div className="text-[11px] text-neutral-400 space-y-1">
              <div>Founder: <strong className="text-white">{BRAND_INFO.founder}</strong></div>
              <div>TIPS & ServSafe Certified • $2M Liquor Liability Insured</div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e8c872]">
              Explore Pages
            </h4>
            <ul className="space-y-2 text-neutral-300">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-[#e69a9e] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-[#e69a9e] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-[#e69a9e] transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('menu')} className="hover:text-[#e69a9e] transition-colors">
                  Cocktail Menu
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('packages')} className="hover:text-[#e69a9e] transition-colors">
                  Pricing Packages
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('calculator')} className="hover:text-[#e69a9e] transition-colors">
                  Event Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-[#e69a9e] transition-colors">
                  Contact & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e8c872]">
              DMV Service Radius
            </h4>
            <p className="text-neutral-300 font-light leading-relaxed">
              Based in Laurel, MD. Complimentary 35-mile travel included:
            </p>
            <ul className="space-y-1 text-neutral-300">
              <li>• Montgomery & Prince George’s County</li>
              <li>• Howard County & Baltimore Metro</li>
              <li>• Annapolis & Eastern Shore Venues</li>
              <li>• Washington D.C. District</li>
              <li>• Arlington, Alexandria, Fairfax & Loudoun (VA)</li>
            </ul>
          </div>

          {/* Col 4: Contact & Social (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#e8c872]">
              Get in Touch
            </h4>
            <div className="space-y-2 text-neutral-300">
              <a
                href={`tel:${BRAND_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2 hover:text-[#e69a9e] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#e69a9e]" />
                <span>{BRAND_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-2 hover:text-[#e69a9e] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#e8c872]" />
                <span>{BRAND_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                <span>{BRAND_INFO.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenWpSpecs}
                className="px-3.5 py-1.5 rounded-lg bg-[#181523] border border-[#e8c872]/40 text-[#e8c872] hover:bg-[#231f32] transition-colors flex items-center gap-1.5 text-[11px] font-semibold"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>WordPress / Elementor Guide</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Cosmo Mobile Bar LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('admin')}
              className="text-neutral-500 hover:text-[#e69a9e] transition-colors flex items-center gap-1.5"
              title="Admin Media Control Center"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </button>
            <span>•</span>
            <div className="flex items-center gap-1">
              <span>Crafted with</span>
              <Heart className="w-3 h-3 text-[#e69a9e] fill-current" />
              <span>for seamless luxury catering</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
