import React from 'react';
import { Award, Heart, CheckCircle2, GlassWater, Quote } from 'lucide-react';
import { BRAND_INFO } from '../data/mockupData';
import { BRAND_IMAGES } from '../data/images';
import { useImages } from '../context/ImageContext';

interface FounderStoryProps {
  onBookClick: () => void;
}

export const FounderStory: React.FC<FounderStoryProps> = ({ onBookClick }) => {
  const { images } = useImages();
  return (
    <section id="about" className="py-24 bg-[#0b0a0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Founder Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#e69a9e]/30 via-transparent to-[#e8c872]/20 blur-xl" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#14121b] aspect-[4/5] group">
                <img
                  src={images.founderPortrait}
                  alt="Jairo Pinto - Founder of Cosmo Mobile Bar"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = BRAND_IMAGES.founderPortraitFallback;
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a0e] via-transparent to-black/30" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b0a0e]/85 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8c872]">
                    Founder & Master Beverage Director
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {BRAND_INFO.founder}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    Cosmo Mobile Bar • Laurel, MD
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Founder Narrative & Mission */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1824] border border-[#e69a9e]/30 text-xs font-semibold text-[#e8c872]">
              <Heart className="w-3.5 h-3.5 text-[#e69a9e]" />
              <span>Meet the Founder & Lead Mixologist</span>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                More Than Drinks, <br />
                <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gradient-rose">It’s an Experience</span>
              </h2>
            </div>

            <div className="space-y-4 text-neutral-300 font-sans font-light text-base leading-relaxed">
              <p>
                Jairo Pinto founded <strong className="text-white font-medium">Cosmo Mobile Bar</strong> around a simple, unwavering belief: thoughtful drinks and genuinely warm hospitality make people feel cherished.
              </p>
              <p>
                Having honed modern craft mixology across prestigious cocktail lounges and high-volume corporate events throughout the DMV area, Jairo recognized a common frustration with standard catering bartenders: slow bar queues, artificial syrupy drinks, and lack of visual elegance.
              </p>
              <p>
                Cosmo was created to redefine mobile bar catering into a high-end, immersive boutique experience. From hand-stamped crystal ice spheres to bilingual, warm-hearted hospitality, every detail is approached with care so you can stay fully present with the people you love.
              </p>
            </div>

            {/* Key Credentials Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#14121b] border border-white/5 text-xs">
                <div className="font-serif text-2xl font-bold text-[#e8c872]">140+</div>
                <div className="text-neutral-400 text-[11px] mt-0.5">Events & Weddings Celebrated</div>
              </div>
              <div className="p-3 rounded-xl bg-[#14121b] border border-white/5 text-xs">
                <div className="font-serif text-2xl font-bold text-[#e69a9e]">5.0 ★</div>
                <div className="text-neutral-400 text-[11px] mt-0.5">Unanimous Client Ratings</div>
              </div>
              <div className="p-3 rounded-xl bg-[#14121b] border border-white/5 text-xs">
                <div className="font-serif text-2xl font-bold text-white">100%</div>
                <div className="text-neutral-400 text-[11px] mt-0.5">Licensed & Venue Insured</div>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
              <Quote className="w-6 h-6 text-[#e69a9e] shrink-0 mt-1" />
              <p className="font-cormorant italic text-neutral-200 text-sm leading-relaxed">
                “When you book Cosmo, you’re not just hiring someone to pour liquor behind a table. You’re hiring a dedicated hospitality partner who treats your wedding or celebration with the exact same reverence we would our own family’s.”
              </p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1a1724] text-[#e69a9e] hover:text-[#0b0a0e] hover:bg-[#e69a9e] border border-[#e69a9e]/40 transition-all flex items-center gap-2"
              >
                <span>Chat with Jairo About Your Date</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
