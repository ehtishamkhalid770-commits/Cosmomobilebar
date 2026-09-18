import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { PackagesSection } from '../components/PackagesSection';
import { ADDONS } from '../data/mockupData';
import { Sparkles, ArrowRight } from 'lucide-react';

interface PackagesPageProps {
  onNavigate: (page: string) => void;
  onSelectPackage: (packageId: string) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onNavigate, onSelectPackage }) => {
  return (
    <div className="space-y-0">
      {/* 1. Page Header Banner */}
      <PageBanner
        eyebrow="Transparent Bar Catering"
        title="Curated Packages &"
        scriptAccent="Clear Pricing"
        subtitle="Explore our transparent tiers for weddings, galas, and private events. All packages include certified mixologists, setup, breakdown, and $2M liquor liability insurance."
        currentPageTitle="Packages & Pricing"
        onNavigateHome={() => onNavigate('home')}
      />

      {/* 2. Packages Section with FAQ Accordion */}
      <PackagesSection
        onSelectPackage={(pkgId) => {
          onSelectPackage(pkgId);
          onNavigate('contact');
        }}
      />

      {/* 3. Add-on Enhancements Showcase */}
      <section className="py-20 bg-[#0e0d14] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8c872]">
              Event Enhancements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Luxury <span className="font-script text-4xl sm:text-5xl text-gradient-rose">Add-On Options</span>
            </h2>
            <p className="text-neutral-300 text-sm font-light leading-relaxed">
              Elevate your bar visual presentation with custom architectural elements and guest arrival features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADDONS.map((addon) => (
              <div
                key={addon.id}
                className="p-6 rounded-2xl bg-[#14121b] border border-white/10 hover:border-[#e69a9e]/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="text-xl font-bold text-[#e8c872]">${addon.price}</div>
                  <h3 className="font-serif text-base font-bold text-white">{addon.name}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {addon.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-white/5">
                  <button
                    onClick={() => onNavigate('calculator')}
                    className="text-xs font-semibold text-[#e69a9e] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Add in Calculator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Calculator Callout Banner */}
          <div className="mt-16 p-8 rounded-3xl bg-[#14121b] border border-[#e69a9e]/25 text-center space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white">
              Want a Specific Quote for Your Exact Guest Count?
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
              Use our live event estimator to adjust guest counts, add optional bar lighting, and see an instant price breakdown with alcohol bottle recommendations.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('calculator')}
                className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e8c872] text-[#0b0a0e] hover:bg-[#f2d78e] transition-colors"
              >
                Open Event Cost Calculator
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
