import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { ServicesSection } from '../components/ServicesSection';
import { CheckCircle2, Clock, ShieldCheck, GlassWater, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onSelectService }) => {
  const steps = [
    {
      number: '01',
      title: 'Consultation & Date Hold',
      description: 'We discuss your celebration style, venue logistics, guest count, and lock in your date on our calendar.',
    },
    {
      number: '02',
      title: 'Menu Design & Alcohol Guide',
      description: 'We collaborate to curate your signature cocktails and provide an exact shopping list so you only buy what you need.',
    },
    {
      number: '03',
      title: 'Whisper-Quiet Setup',
      description: 'Our team arrives 60 to 90 minutes before guest arrival with the bar, tools, fresh juices, ice, and styled menus.',
    },
    {
      number: '04',
      title: '5-Star Service & Clean Breakdown',
      description: 'Fast, hospitable cocktail service throughout your event, followed by a spotless bar cleanup at the end.',
    },
  ];

  return (
    <div className="space-y-0">
      {/* 1. Page Header Banner */}
      <PageBanner
        eyebrow="Bespoke Mobile Bar Services"
        title="Flawless Hospitality for"
        scriptAccent="Every Milestone"
        subtitle="From grand ballroom weddings to backyard soirées, our modular mobile bar units and certified mixologists deliver an unforgettable experience."
        currentPageTitle="Services"
        onNavigateHome={() => onNavigate('home')}
      />

      {/* 2. Full 6-Card Services Grid */}
      <ServicesSection
        onSelectService={(serviceId) => {
          onSelectService(serviceId);
          onNavigate('contact');
        }}
      />

      {/* 3. "How It Works" 4-Step Process Banner */}
      <section className="py-20 bg-[#0b0a0e] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8c872]">
              Simple & Stress-Free
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              How the Cosmo Experience <span className="font-script text-4xl sm:text-5xl text-gradient-rose">Works</span>
            </h2>
            <p className="text-neutral-300 text-sm font-light leading-relaxed">
              We remove the guesswork from hosting so you can enjoy every minute with your guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-6 rounded-2xl bg-[#14121b] border border-white/10 relative group hover:border-[#e69a9e]/40 transition-all"
              >
                <div className="font-serif text-3xl font-extrabold text-[#e8c872] opacity-80 mb-3">
                  {step.number}
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Setup Logistics & Venue Peace of Mind */}
      <section className="py-16 bg-[#0e0d14] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-[#14121b] border border-[#e69a9e]/20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <Clock className="w-6 h-6 text-[#e69a9e] mx-auto mb-2" />
              <div className="font-serif font-bold text-white text-base">Setup & Breakdown</div>
              <p className="text-xs text-neutral-400">Included free with every service booking</p>
            </div>
            <div className="space-y-1">
              <ShieldCheck className="w-6 h-6 text-[#e8c872] mx-auto mb-2" />
              <div className="font-serif font-bold text-white text-base">$2M Venue Insurance</div>
              <p className="text-xs text-neutral-400">COI certificates issued directly to your venue</p>
            </div>
            <div className="space-y-1">
              <GlassWater className="w-6 h-6 text-[#e69a9e] mx-auto mb-2" />
              <div className="font-serif font-bold text-white text-base">All Tools & Garnishes</div>
              <p className="text-xs text-neutral-400">Fresh citrus, scratch syrups, bins & shakers</p>
            </div>
          </div>

          <div className="text-center pt-10 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('calculator')}
              className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e8c872] text-[#0b0a0e] hover:bg-[#f2d78e] transition-colors"
            >
              Calculate Event Pricing
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] to-[#cf787d] text-[#0b0a0e] hover:brightness-110 shadow-lg shadow-[#e69a9e]/25 transition-all"
            >
              Book Service Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
