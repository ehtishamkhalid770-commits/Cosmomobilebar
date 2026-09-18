import React from 'react';
import { Camera, Instagram, Sparkles, GlassWater } from 'lucide-react';
import { BRAND_INFO } from '../data/mockupData';
import { BRAND_IMAGES } from '../data/images';

export const AtmosphereGallery: React.FC = () => {
  const galleryItems = [
    {
      image: BRAND_IMAGES.luxuryBarSetup,
      fallback: BRAND_IMAGES.luxuryBarSetupFallback,
      title: 'Illuminated Bar Counter',
      subtitle: 'Geometric 3D Wave & Warm Ambient LED',
      tag: 'Bar Setup',
    },
    {
      image: BRAND_IMAGES.signatureCosmo,
      fallback: BRAND_IMAGES.signatureCosmoFallback,
      title: 'The Signature Cosmo',
      subtitle: 'Citrus Vodka & Flamed Orange Peel',
      tag: 'Cocktails',
    },
    {
      image: BRAND_IMAGES.leadMixologist,
      fallback: BRAND_IMAGES.leadMixologistFallback,
      title: 'Master Mixologists',
      subtitle: 'Professional, Warm & Fast Bar Service',
      tag: 'Our Team',
    },
    {
      image: BRAND_IMAGES.eventCelebration,
      fallback: BRAND_IMAGES.eventCelebrationFallback,
      title: 'Evening Wedding Toast',
      subtitle: 'Unforgettable Moments with Loved Ones',
      tag: 'Celebration',
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-[#0b0a0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1824] border border-[#e69a9e]/30 text-xs font-semibold text-[#e8c872]">
              <Camera className="w-3.5 h-3.5 text-[#e69a9e]" />
              <span>Real Event Atmosphere</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Captured <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gradient-rose">Memories</span>
            </h2>
            <p className="text-neutral-300 font-sans font-light text-sm max-w-xl">
              A glimpse into our recent celebrations, custom bar installations, and happy hosts across Maryland and Washington D.C.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171420] border border-[#e69a9e]/30 text-xs font-semibold text-[#e69a9e] hover:bg-[#201b2a] hover:border-[#e69a9e] transition-all self-start md:self-end"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow {BRAND_INFO.instagram}</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] bg-[#14121b] shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = item.fallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a0e] via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#e8c872] border border-white/10">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <h4 className="font-serif text-lg font-bold text-white leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-300 font-light">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
