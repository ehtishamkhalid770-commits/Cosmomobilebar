import React from 'react';
import { Heart, Cake, Briefcase, Sparkles, GraduationCap, PartyPopper, Check, ArrowRight, GlassWater } from 'lucide-react';
import { SERVICES } from '../data/mockupData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Cake':
        return <Cake className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'PartyPopper':
        return <PartyPopper className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0e0d13] relative border-t border-b border-white/5">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#e69a9e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8c872]">
            What We Bring to Your Celebration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Every Detail, <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gradient-rose">Beautifully Served</span>
          </h2>
          <p className="text-neutral-300 font-sans font-light text-base leading-relaxed">
            From intimate garden receptions to grand ballroom galas, our self-contained mobile cocktail bar delivers seamless logistics, hospitable service, and picture-perfect presentations.
          </p>
        </div>

        {/* 6-Card Modular Grid - Perfectly Replicable in WordPress / Elementor */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl p-7 bg-[#14121b] border border-[#e69a9e]/15 hover:border-[#e69a9e]/45 hover:bg-[#1a1724] transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#e69a9e]/10"
            >
              <div className="space-y-4">
                {/* Header with Icon and Guests Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#1f1b29] border border-[#e69a9e]/30 flex items-center justify-center text-[#e69a9e] group-hover:scale-110 group-hover:bg-[#e69a9e] group-hover:text-[#0b0a0e] transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                    {service.perfectFor}
                  </span>
                </div>

                {/* Service Title */}
                <div>
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f7d7d9] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#e8c872] font-medium tracking-wide mt-0.5">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Key Inclusions Bullet List */}
                <div className="pt-2 border-t border-white/5 space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#e69a9e] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Signature Pairing Callout */}
                <div className="p-2.5 rounded-lg bg-[#0b0a0e]/60 border border-white/5 text-[11px] text-neutral-400 flex items-center gap-2">
                  <GlassWater className="w-3.5 h-3.5 text-[#e8c872] shrink-0" />
                  <span>
                    <strong className="text-neutral-200">Recommended Pairing:</strong> {service.popularPairing}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-white/5">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#f4ecee] bg-white/5 hover:bg-[#e69a9e] hover:text-[#0b0a0e] border border-white/10 hover:border-[#e69a9e] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Select for My Event</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
