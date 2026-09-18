import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { FounderStory } from '../components/FounderStory';
import { ExperiencePillars } from '../components/ExperiencePillars';
import { AtmosphereGallery } from '../components/AtmosphereGallery';
import { ReviewsSection } from '../components/ReviewsSection';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. Page Header Banner */}
      <PageBanner
        eyebrow="Behind The Bar"
        title="Hospitality Rooted in"
        scriptAccent="Heart & Craft"
        subtitle="Learn how founder Jairo Pinto transformed modern mobile bartending across Maryland, DC, and Virginia into a 5-star craft experience."
        currentPageTitle="About Us"
        onNavigateHome={() => onNavigate('home')}
      />

      {/* 2. Deep Dive: Founder Story & Credentials */}
      <FounderStory onBookClick={() => onNavigate('contact')} />

      {/* 3. The 4 Standards of Craft (Experience Pillars) */}
      <ExperiencePillars />

      {/* 4. Event Atmosphere & Real Photographs */}
      <AtmosphereGallery />

      {/* 5. Real Client Testimonials */}
      <ReviewsSection />

      {/* 6. Page CTA */}
      <section className="py-16 bg-[#121017] border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Let’s Celebrate Together
          </h2>
          <p className="text-neutral-300 text-sm max-w-xl mx-auto font-light leading-relaxed">
            Have questions about your event venue or want custom cocktail ideas for your wedding? Jairo is always glad to chat.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] to-[#cf787d] text-[#0b0a0e] hover:brightness-110 shadow-lg shadow-[#e69a9e]/25 transition-all"
            >
              Inquire About Your Celebration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
