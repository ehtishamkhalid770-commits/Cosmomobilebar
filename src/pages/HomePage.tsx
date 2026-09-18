import React from 'react';
import { Hero } from '../components/Hero';
import { SERVICES, COCKTAILS, BRAND_INFO } from '../data/mockupData';
import { BRAND_IMAGES } from '../data/images';
import { useImages } from '../context/ImageContext';
import { ArrowRight, Sparkles, Star, Award, Shield, Flame, GlassWater, Check, Heart, Cake, Briefcase } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onQuickCheckDate?: (date: string, guestCount: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { images } = useImages();
  // Top 3 featured services for preview
  const featuredServices = SERVICES.slice(0, 3);
  // Top 3 popular cocktails for preview
  const featuredCocktails = COCKTAILS.filter((c) => c.isPopular).slice(0, 3);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Cake':
        return <Cake className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-0">
      
      {/* 1. Main Hero Section */}
      <Hero
        onBookClick={() => onNavigate('contact')}
        onExploreMenu={() => onNavigate('menu')}
      />

      {/* 2. Trust Strip */}
      <section className="py-6 bg-[#0f0e15] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="font-serif text-2xl lg:text-3xl font-bold text-[#e8c872]">140+</div>
              <div className="text-xs text-neutral-400 mt-0.5">Celebrations in MD, DC & VA</div>
            </div>
            <div className="p-3">
              <div className="font-serif text-2xl lg:text-3xl font-bold text-[#e69a9e]">5.0 ★</div>
              <div className="text-xs text-neutral-400 mt-0.5">Flawless Client Reviews</div>
            </div>
            <div className="p-3">
              <div className="font-serif text-2xl lg:text-3xl font-bold text-white">$2,000,000</div>
              <div className="text-xs text-neutral-400 mt-0.5">Liquor Liability Insured</div>
            </div>
            <div className="p-3">
              <div className="font-serif text-2xl lg:text-3xl font-bold text-[#e8c872]">100%</div>
              <div className="text-xs text-neutral-400 mt-0.5">Scratch Juices & Syrups</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Preview Section */}
      <section className="py-20 bg-[#0b0a0e] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8c872]">
                What We Offer
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                Bespoke Bar Services for <span className="font-script text-4xl sm:text-5xl text-gradient-rose">Every Milestone</span>
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e69a9e] hover:text-white transition-colors self-start md:self-end"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="p-7 rounded-2xl bg-[#14121b] border border-white/10 hover:border-[#e69a9e]/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e69a9e] group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f7d7d9] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#e8c872] mt-0.5">{service.subtitle}</p>
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#e69a9e] group-hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Featured Cocktails Teaser */}
      <section className="py-20 bg-[#0e0d14] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8c872]">
                The Cocktail Program
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                Handcrafted <span className="font-script text-4xl sm:text-5xl text-gradient-rose">Signatures</span>
              </h2>
            </div>

            <button
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e69a9e] hover:text-white transition-colors self-start md:self-end"
            >
              <span>Explore Full Drink Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCocktails.map((drink) => (
              <div
                key={drink.id}
                className="rounded-2xl overflow-hidden bg-[#14121b] border border-white/10 hover:border-[#e69a9e]/40 transition-all flex flex-col justify-between group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1d1a26]">
                  <img
                    src={images.cocktails[drink.id] || drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14121b] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#e69a9e] text-[#0b0a0e]">
                      Client Favorite
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="text-[11px] text-[#e8c872] uppercase tracking-wider font-semibold">
                    {drink.spirit} • {drink.glassware}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {drink.name}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {drink.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Quick Founder & Mission Teaser */}
      <section className="py-20 bg-[#0b0a0e] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] bg-[#14121b] shadow-2xl">
                <img
                  src={images.founderPortrait}
                  alt="Jairo Pinto - Founder"
                  className="w-full h-full object-cover grayscale contrast-125"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = BRAND_IMAGES.founderPortraitFallback;
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8c872]">
                Meet The Founder
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Hospitality Crafted with <br />
                <span className="font-script text-4xl sm:text-5xl text-gradient-rose">Warmth & Discipline</span>
              </h2>
              <p className="text-neutral-300 text-sm leading-relaxed font-light">
                Founded by {BRAND_INFO.founder} in Laurel, Maryland, Cosmo Mobile Bar was born out of a desire to replace uninspired catering bars with an upscale, five-star cocktail lounge experience.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  Read Jairo's Story
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] to-[#cf787d] text-[#0b0a0e] hover:brightness-110 transition-all"
                >
                  Check Event Availability
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Call To Action Banner */}
      <section className="py-16 bg-gradient-to-r from-[#171420] via-[#241c2c] to-[#171420] border-t border-b border-[#e69a9e]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Ready to Plan an <span className="font-script text-4xl sm:text-5xl text-gradient-rose">Unforgettable Toast?</span>
          </h2>
          <p className="text-neutral-300 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Whether you need a transparent quote via our interactive calculator or want to secure your wedding date directly with Jairo, we’re here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('calculator')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e8c872] text-[#0b0a0e] hover:bg-[#f2d78e] transition-colors"
            >
              Use Event Cost Calculator
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] to-[#cf787d] text-[#0b0a0e] hover:brightness-110 transition-all shadow-lg shadow-[#e69a9e]/25"
            >
              Book Your Date Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
