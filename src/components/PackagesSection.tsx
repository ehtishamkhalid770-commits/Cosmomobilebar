import React, { useState } from 'react';
import { Check, Sparkles, HelpCircle, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../data/mockupData';

interface PackagesSectionProps {
  onSelectPackage: (packageId: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do you provide the alcohol for the event?',
      answer: 'Due to state alcohol beverage control regulations across Maryland, Washington D.C., and Virginia, mobile bartenders cannot directly sell alcohol. However, this saves you thousands of dollars! We provide a customized Alcohol Shopping Guide detailing the exact quantities of spirits, beer, wine, and mixers needed based on your guest count. You purchase at retail price with zero restaurant markups, and we take care of everything else!',
    },
    {
      question: 'Are you licensed and insured for our venue?',
      answer: 'Yes, 100%! All Cosmo Mobile Bar bartenders are TIPS/ServSafe certified, and we carry a comprehensive $2,000,000 General & Liquor Liability Insurance policy. We provide customized Certificates of Insurance (COI) directly to your wedding planner or venue coordinator at no additional charge.',
    },
    {
      question: 'Can we name custom signature cocktails for our bride & groom or guest of honor?',
      answer: 'Absolutely! Personalization is our hallmark. We love crafting custom drink names (e.g., "The Marrying Mojito", "The Boss Lady Bourbon") and pairing them with custom-designed, framed acrylic menus to match your wedding or celebration color scheme.',
    },
    {
      question: 'What do we need to provide on event day?',
      answer: 'All you need to provide is the alcohol (using our shopping list) and a level space for our mobile bar setup. We bring the luxury bar counter, professional bar tools, shakers, speed pourers, cooler bins, fresh juices, house-made craft syrups, fresh botanicals & garnishes, napkins, and clean up 100% of our bar area at the end of the night.',
    },
    {
      question: 'What is your travel radius from Laurel, Maryland?',
      answer: 'We proudly serve all of Maryland (Montgomery County, Prince George’s, Howard County, Baltimore, Annapolis, Eastern Shore), Washington D.C., and Northern Virginia (Arlington, Alexandria, Fairfax, Loudoun). Travel within 35 miles of Laurel is complimentary.',
    },
  ];

  return (
    <section id="packages" className="py-24 bg-[#0c0b10] relative">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-[#e69a9e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1824] border border-[#e8c872]/30 text-xs font-semibold text-[#e8c872]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Hospitality Packages</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Curated Packages for <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gradient-rose">Every Milestone</span>
          </h2>
          <p className="text-neutral-300 font-sans font-light text-base leading-relaxed">
            Transparent, all-inclusive mobile bar staffing and setup tiers. Designed to scale seamlessly whether you're hosting an intimate soiree or a 300-guest wedding celebration.
          </p>
        </div>

        {/* 3-Column Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.highlight
                  ? 'bg-[#181523] border-2 border-[#e69a9e] shadow-2xl shadow-[#e69a9e]/15 -translate-y-2 lg:-translate-y-3 ring-1 ring-[#e69a9e]/40'
                  : 'bg-[#121118] border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Badge if highlight */}
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#e69a9e] to-[#c77075] text-[#0b0a0e] text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                {/* Title & Tagline */}
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-xs text-[#e8c872] mt-1 font-medium">{pkg.tagline}</p>
                </div>

                {/* Price */}
                <div className="p-4 rounded-2xl bg-[#0b0a0e]/70 border border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-neutral-400">Starting at</span>
                    <span className="font-serif text-4xl font-extrabold text-white">${pkg.price}</span>
                  </div>
                  <div className="text-[11px] text-[#e69a9e] font-medium mt-1">
                    {pkg.perGuestNote} • {pkg.idealGuests}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Includes {pkg.hours} hrs service + {pkg.bartendersCount} TIPS mixologist{pkg.bartendersCount > 1 ? 's' : ''}
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 text-xs text-neutral-300">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block pb-1">
                    Package Inclusions:
                  </span>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#e69a9e] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-8 mt-6 border-t border-white/10">
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-[#e69a9e] via-[#df8c90] to-[#c77075] text-[#0b0a0e] shadow-lg shadow-[#e69a9e]/30 hover:brightness-110'
                      : 'bg-white/5 hover:bg-[#e69a9e] text-white hover:text-[#0b0a0e] border border-white/10 hover:border-[#e69a9e]'
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto pt-6">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked <span className="text-gradient-rose font-script text-3xl sm:text-4xl">Questions</span>
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Everything you need to know about booking mobile bar services in Maryland, DC, and Virginia
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#14121b] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-white hover:text-[#e69a9e] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#e69a9e] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs text-neutral-300 font-light leading-relaxed border-t border-white/5 bg-[#100e16]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
