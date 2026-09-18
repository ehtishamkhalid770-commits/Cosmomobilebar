import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { EventCalculator } from '../components/EventCalculator';
import { Wine, ShieldCheck, DollarSign, Sparkles } from 'lucide-react';

interface CalculatorPageProps {
  onNavigate: (page: string) => void;
  onLockInQuote: (quoteData: {
    eventType: string;
    guestCount: number;
    hours: number;
    packageId: string;
    addons: string[];
    estimatedTotal: number;
  }) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onNavigate, onLockInQuote }) => {
  return (
    <div className="space-y-0">
      {/* 1. Page Header Banner */}
      <PageBanner
        eyebrow="Instant Estimation & Alcohol Planning"
        title="Custom Bar Estimator &"
        scriptAccent="Shopping Blueprint"
        subtitle="Select your guest count, service duration, and package tier to view an instant itemized estimate and complimentary alcohol quantity guide."
        currentPageTitle="Event Calculator"
        onNavigateHome={() => onNavigate('home')}
      />

      {/* 2. Interactive Calculator */}
      <EventCalculator
        onLockInQuote={(quoteData) => {
          onLockInQuote(quoteData);
          onNavigate('contact');
        }}
      />

      {/* 3. Why The Client-Supplied Alcohol Model Saves You Thousands */}
      <section className="py-20 bg-[#0e0d14] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8c872]">
              The Smart Host Advantage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Why You Save <span className="font-script text-4xl sm:text-5xl text-gradient-rose">Thousands</span>
            </h2>
            <p className="text-neutral-300 text-sm font-light leading-relaxed">
              Standard hotel and catering venues charge a 300% to 500% markup on spirits and wine. With Cosmo Mobile Bar, you stay in complete control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#14121b] border border-white/10 space-y-3">
              <DollarSign className="w-8 h-8 text-[#e8c872]" />
              <h3 className="font-serif text-lg font-bold text-white">Zero Liquor Markups</h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                You purchase spirits, wine, and beer at regular retail or wholesale store prices (Total Wine, Costco, local store). Never pay $18 per cocktail!
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#14121b] border border-white/10 space-y-3">
              <Wine className="w-8 h-8 text-[#e69a9e]" />
              <h3 className="font-serif text-lg font-bold text-white">Exact Bottle Quantities</h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                We calculate exactly how many bottles of vodka, bourbon, tequila, and wine you need so you don't overspend or run dry mid-toast.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#14121b] border border-white/10 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#e8c872]" />
              <h3 className="font-serif text-lg font-bold text-white">You Keep What's Left</h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Any unopened bottles of liquor and wine at the end of the evening belong completely to you to enjoy or return according to store policy.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
