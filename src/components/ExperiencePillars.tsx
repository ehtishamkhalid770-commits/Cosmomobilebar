import React from 'react';
import { Sparkles, Shield, Flame, GlassWater, Clock, Award, CheckCircle } from 'lucide-react';

export const ExperiencePillars: React.FC = () => {
  const pillars = [
    {
      icon: <Flame className="w-6 h-6 text-[#e69a9e]" />,
      title: 'Scratch-Made Cordials & Organic Juices',
      description: 'We ban artificial syrups, high-fructose sour mixes, and chemical flavorings. Every single batch of syrup—from lavender honey to smoked demerara—is steeped in-house with organic botanicals and fresh hand-pressed citrus.',
      tag: '100% From-Scratch Mixology',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#e8c872]" />,
      title: 'Bespoke Luxury Mobile Bar Units',
      description: 'Your bar should be a design centerpiece. We provide high-end, self-contained mobile bar counters featuring 3D geometric wave textures, warm under-counter LED illumination, and marquee glowing signage.',
      tag: 'Picture-Perfect Centerpiece',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#e69a9e]" />,
      title: 'Complete $2M Venue Liability Protection',
      description: 'Every bartender on our team is TIPS & ServSafe certified in responsible beverage service. We hold comprehensive $2,000,000 General and Liquor Liability Insurance and issue COIs to your venue seamlessly.',
      tag: 'Zero Host Risk',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#e8c872]" />,
      title: 'Turnkey Logistics & Clean Breakdown',
      description: 'We arrive 60 to 90 minutes before guest arrival for whisper-quiet setup, manage bar line pacing with high-speed precision, and leave your event space spotless at the conclusion of the evening.',
      tag: 'Host & Enjoy Your Party',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#0e0d14] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8c872]">
            The Cosmo Distinction
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Craftsmanship in <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gradient-rose">Every Pour</span>
          </h2>
          <p className="text-neutral-300 font-sans font-light text-base leading-relaxed">
            Why premier event hosts, wedding coordinators, and corporate planners in the DC-Maryland-Virginia corridor choose Cosmo Mobile Bar over standard catering bartenders.
          </p>
        </div>

        {/* Feature Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Media Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#e69a9e]/20 shadow-2xl group">
              <img
                src="/src/assets/images/luxury_bar_hero_1789758739175.jpg"
                alt="Luxury Mobile Bar Setup"
                className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d14] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0b0a0e]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-[#e8c872]">
                  <Award className="w-4 h-4 text-[#e69a9e]" />
                  <span>Custom Illuminated Bar Units</span>
                </div>
                <p className="text-[11px] text-neutral-300 mt-0.5">
                  Designed to look like an upscale boutique hotel lounge anywhere you celebrate.
                </p>
              </div>
            </div>
          </div>

          {/* Right 4 Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#14121b] border border-white/10 hover:border-[#e69a9e]/40 transition-all hover:bg-[#191624] space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#e8c872] block">
                  {pillar.tag}
                </span>
                <h3 className="font-serif text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Banner Quote */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#171420] via-[#241c2c] to-[#171420] border border-[#e69a9e]/30 text-center space-y-3">
          <p className="font-cormorant italic text-xl sm:text-2xl text-[#f4ecee] max-w-3xl mx-auto">
            “Your guests won’t remember what tablecloths you selected, but they will never forget the extraordinary cocktail they held during your first toast.”
          </p>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#e8c872]">
            — Cosmo Mobile Bar Philosophy
          </div>
        </div>

      </div>
    </section>
  );
};
