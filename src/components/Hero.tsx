import React from 'react';
import { ShieldCheck, Award, Star, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/mockupData';
import { BRAND_IMAGES } from '../data/images';

interface HeroProps {
  onBookClick: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookClick,
  onExploreMenu,
}) => {

  return (
    <section id="hero-section" className="relative overflow-hidden pt-6 pb-20 lg:pt-12 lg:pb-32 bg-gradient-to-b from-[#0b0a0e] via-[#121017] to-[#0c0b10]">
      {/* Subtle Atmospheric Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#e69a9e]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e8c872]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Conversion Copy & Action */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b26] border border-[#e69a9e]/30 text-xs font-semibold text-[#e8c872] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#e69a9e]" />
              <span className="tracking-[0.2em] uppercase font-sans">Elevate Every Celebration</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Exceptional Drinks,
              </h1>
              <span className="block font-script text-5xl sm:text-6xl lg:text-7xl text-gradient-rose py-1">
                Unforgettable Moments
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#d1c6ca] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
              Transform your special occasion into a 5-star cocktail lounge. Professional mobile bartending for weddings, galas, milestone birthdays, and private parties across Maryland, DC, and Virginia.
            </p>

            {/* Trust Badges Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 text-left">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5">
                <Award className="w-4 h-4 text-[#e8c872] shrink-0" />
                <span className="text-xs text-neutral-300 font-medium leading-tight">TIPS Certified Mixologists</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5">
                <ShieldCheck className="w-4 h-4 text-[#e69a9e] shrink-0" />
                <span className="text-xs text-neutral-300 font-medium leading-tight">$2M Liquor Insured</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5">
                <Star className="w-4 h-4 text-[#e8c872] fill-[#e8c872] shrink-0" />
                <span className="text-xs text-neutral-300 font-medium leading-tight">5.0 Star Rated (140+)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#e69a9e] shrink-0" />
                <span className="text-xs text-neutral-300 font-medium leading-tight">Full Bar Logistics</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-book-now-btn"
                onClick={onBookClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] via-[#df8c90] to-[#c77075] text-[#0b0a0e] shadow-xl shadow-[#e69a9e]/30 hover:shadow-[#e69a9e]/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Book Your Event</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-menu-btn"
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-sm text-[#f4ecee] bg-[#1a1722] hover:bg-[#231f2f] border border-[#e69a9e]/30 hover:border-[#e69a9e] transition-all flex items-center justify-center gap-2"
              >
                <span>View Cocktail Menu & Pricing</span>
              </button>
            </div>

          </div>

          {/* Right Column: Premium High-End Visual Mockup (No Cartoon/Anime, Real Luxury Atmosphere!) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#e69a9e]/40 via-[#e8c872]/20 to-[#a35257]/30 blur-lg opacity-70" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#16141d] shadow-2xl aspect-[4/5] group">
                <img
                  src={BRAND_IMAGES.leadMixologist}
                  alt="Cosmo Mobile Bar Master Mixologist"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = BRAND_IMAGES.leadMixologistFallback;
                  }}
                />

                {/* Gradient Overlay for Editorial Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a0e] via-transparent to-black/20" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b0a0e]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#e8c872] font-semibold">
                      Bespoke Hospitality
                    </span>
                    <h3 className="font-serif text-white font-bold text-base">
                      Artisan Craft Mixology
                    </h3>
                    <p className="text-xs text-neutral-400">
                      Cold-pressed juices & scratch cordials
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#e69a9e]/20 border border-[#e69a9e]/40 flex items-center justify-center text-[#e69a9e]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Signature Drink Preview */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#16131f]/95 border border-[#e69a9e]/40 backdrop-blur-md rounded-2xl p-3 shadow-2xl flex items-center gap-3 animate-float hidden sm:flex">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shrink-0">
                  <img
                    src={BRAND_IMAGES.signatureCosmo}
                    alt="Classic Cosmo"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = BRAND_IMAGES.signatureCosmoFallback;
                    }}
                  />
                </div>
                <div className="pr-2">
                  <div className="flex items-center gap-1 text-[#e8c872]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-white">Classic Cosmo</div>
                  <div className="text-[10px] text-[#e69a9e]">Signature Event Favorite</div>
                </div>
              </div>

              {/* Floating Badge 2: Complete Peace of Mind */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#181523]/95 border border-[#e8c872]/40 backdrop-blur-md rounded-xl py-2.5 px-4 shadow-2xl flex items-center gap-2.5 hidden sm:flex">
                <div className="w-8 h-8 rounded-full bg-[#e8c872]/20 flex items-center justify-center text-[#e8c872]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Zero Host Stress</div>
                  <div className="text-[10px] text-neutral-400">Setup, bar, ice & breakdown included</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
