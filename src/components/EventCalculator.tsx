import React, { useState } from 'react';
import { Calculator, Sparkles, Users, Clock, Wine, Check, ArrowRight, ShieldAlert, DollarSign } from 'lucide-react';
import { PACKAGES, ADDONS } from '../data/mockupData';

interface EventCalculatorProps {
  onLockInQuote: (quoteData: {
    eventType: string;
    guestCount: number;
    hours: number;
    packageId: string;
    addons: string[];
    estimatedTotal: number;
  }) => void;
}

export const EventCalculator: React.FC<EventCalculatorProps> = ({ onLockInQuote }) => {
  const [eventType, setEventType] = useState<string>('Wedding & Reception');
  const [guests, setGuests] = useState<number>(85);
  const [hours, setHours] = useState<number>(4);
  const [selectedPackageId, setSelectedPackageId] = useState<string>('signature-cosmo');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['illuminated-bar']);

  const eventTypes = [
    'Wedding & Reception',
    'Milestone Birthday',
    'Corporate Gala',
    'Anniversary Celebration',
    'Quinceañera / Graduation',
    'Private VIP Party',
  ];

  const currentPackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[1];

  const toggleAddon = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  // Pricing calculation math
  const basePackagePrice = currentPackage.price;
  
  // Extra guest surcharge if guests exceed the package's baseline
  let guestSurcharge = 0;
  if (selectedPackageId === 'classic-sip' && guests > 50) {
    guestSurcharge = (guests - 50) * 9;
  } else if (selectedPackageId === 'signature-cosmo' && guests > 100) {
    guestSurcharge = (guests - 100) * 11;
  } else if (selectedPackageId === 'bespoke-luxe' && guests > 150) {
    guestSurcharge = (guests - 150) * 12;
  }

  // Duration difference
  const extraHours = Math.max(0, hours - currentPackage.hours);
  const durationSurcharge = extraHours * 150;

  // Addons total
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const found = ADDONS.find((a) => a.id === addonId);
    return sum + (found ? found.price : 0);
  }, 0);

  const estimatedTotal = basePackagePrice + guestSurcharge + durationSurcharge + addonsTotal;

  // Smart Alcohol Estimator (Industry standard: 1 drink per guest per hour)
  const totalDrinksEstimated = Math.round(guests * hours * 1.1);
  const spiritBottlesEstimated = Math.ceil((totalDrinksEstimated * 0.5) / 16); // 16 drinks per 750ml bottle
  const wineBottlesEstimated = Math.ceil((totalDrinksEstimated * 0.3) / 5); // 5 glasses per bottle
  const beerBottlesEstimated = Math.round(totalDrinksEstimated * 0.2);

  const recommendedBartenders = guests <= 60 ? 1 : guests <= 130 ? 2 : Math.ceil(guests / 65);

  const handleBookWithQuote = () => {
    onLockInQuote({
      eventType,
      guestCount: guests,
      hours,
      packageId: selectedPackageId,
      addons: selectedAddons,
      estimatedTotal,
    });
  };

  return (
    <section id="calculator" className="py-24 bg-[#0d0c12] relative border-t border-b border-white/5">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#e8c872]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#e69a9e]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1b1824] border border-[#e8c872]/30 text-xs font-semibold text-[#e8c872]">
            <Calculator className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">Transparent & Instant Event Estimation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Design Your <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gradient-rose">Bar Experience</span>
          </h2>
          <p className="text-neutral-300 font-sans font-light text-base leading-relaxed">
            Get an immediate, itemized estimate in seconds. We include a complimentary alcohol shopping blueprint so you only buy what you need with zero liquor store guesswork.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Event Type */}
            <div className="p-6 rounded-2xl bg-[#14121b] border border-white/10 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#e8c872] flex items-center gap-2">
                <span>1. Event Celebration Type</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {eventTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium text-left transition-all ${
                      eventType === type
                        ? 'bg-[#e69a9e] text-[#0b0a0e] font-bold shadow-md shadow-[#e69a9e]/20'
                        : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count & Hours Sliders */}
            <div className="p-6 rounded-2xl bg-[#14121b] border border-white/10 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#e8c872] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#e69a9e]" />
                    <span>2. Number of Guests:</span>
                  </span>
                  <span className="font-serif text-2xl font-bold text-white">
                    {guests} <span className="text-xs font-sans text-neutral-400 font-normal">Guests</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="300"
                  step="5"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#201c2a] rounded-lg appearance-none cursor-pointer accent-[#e69a9e]"
                />
                <div className="flex justify-between text-[11px] text-neutral-400">
                  <span>25 (Intimate)</span>
                  <span>100 (Standard Reception)</span>
                  <span>300+ (Grand Gala)</span>
                </div>
              </div>

              {/* Service Duration */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#e8c872] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#e69a9e]" />
                    <span>Service Duration:</span>
                  </span>
                  <span className="font-serif text-2xl font-bold text-white">
                    {hours} <span className="text-xs font-sans text-neutral-400 font-normal">Hours of Service</span>
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 4, 5, 6].map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setHours(h)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        hours === h
                          ? 'bg-[#e8c872] text-[#0b0a0e] shadow-md'
                          : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                      }`}
                    >
                      {h} Hours
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-neutral-400 italic">
                  * Complimentary setup (60 min) and breakdown (45 min) included with every booking.
                </p>
              </div>
            </div>

            {/* Step 3: Base Package Selection */}
            <div className="p-6 rounded-2xl bg-[#14121b] border border-white/10 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#e8c872]">
                3. Choose Bar Service Package
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PACKAGES.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-4 rounded-xl cursor-pointer border transition-all ${
                      selectedPackageId === pkg.id
                        ? 'bg-[#1f1a28] border-[#e69a9e] ring-1 ring-[#e69a9e]/50'
                        : 'bg-white/5 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif font-bold text-sm text-white">{pkg.name}</span>
                      {pkg.highlight && (
                        <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#e69a9e] text-[#0b0a0e]">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-lg font-bold text-[#e8c872]">${pkg.price}</div>
                    <div className="text-[11px] text-neutral-400 mt-1">{pkg.idealGuests}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Add-on Upgrades */}
            <div className="p-6 rounded-2xl bg-[#14121b] border border-white/10 space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-[#e8c872]">
                4. Select Optional Event Enhancements
              </label>
              <div className="space-y-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-[#1e1927] border-[#e69a9e]/60 text-white'
                          : 'bg-white/[0.03] border-white/5 text-neutral-300 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-[#e69a9e] border-[#e69a9e] text-[#0b0a0e]'
                              : 'border-white/20 bg-black/40'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-xs font-semibold">{addon.name}</div>
                          <div className="text-[10px] text-neutral-400">{addon.description}</div>
                        </div>
                      </div>
                      <div className="text-xs font-bold text-[#e8c872] shrink-0 ml-2">
                        +${addon.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Card (5 Cols) - High Impact Floating Receipt */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            <div className="p-7 rounded-3xl bg-gradient-to-b from-[#181522] to-[#121017] border border-[#e69a9e]/30 shadow-2xl space-y-6">
              
              {/* Header */}
              <div className="border-b border-white/10 pb-5">
                <div className="flex items-center justify-between text-xs text-[#e8c872] font-semibold uppercase tracking-wider mb-1">
                  <span>Custom Estimate</span>
                  <span>Instant Breakdown</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {currentPackage.name}
                </h3>
                <p className="text-xs text-neutral-400">
                  Tailored for {guests} guests • {hours} hours of service
                </p>
              </div>

              {/* Itemized Lines */}
              <div className="space-y-2.5 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span>Base Package ({currentPackage.name})</span>
                  <span className="font-semibold text-white">${basePackagePrice}</span>
                </div>

                {guestSurcharge > 0 && (
                  <div className="flex justify-between text-neutral-300">
                    <span>Additional Guest Coverage ({guests - (selectedPackageId === 'classic-sip' ? 50 : 100)} guests)</span>
                    <span className="font-semibold text-white">+${guestSurcharge}</span>
                  </div>
                )}

                {durationSurcharge > 0 && (
                  <div className="flex justify-between text-neutral-300">
                    <span>Extended Service ({extraHours} extra hrs)</span>
                    <span className="font-semibold text-white">+${durationSurcharge}</span>
                  </div>
                )}

                {selectedAddons.length > 0 && (
                  <div className="flex justify-between text-neutral-300">
                    <span>Selected Add-ons ({selectedAddons.length})</span>
                    <span className="font-semibold text-white">+${addonsTotal}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#e8c872]">
                  <span>Setup & Breakdown (1.75 hrs total)</span>
                  <span className="font-bold uppercase tracking-wider">COMPLIMENTARY</span>
                </div>
                <div className="flex justify-between text-[#e8c872]">
                  <span>$2M Liquor Liability Certificate</span>
                  <span className="font-bold uppercase tracking-wider">INCLUDED FREE</span>
                </div>
              </div>

              {/* Total Price Banner */}
              <div className="p-4 rounded-2xl bg-[#0b0a0e] border border-[#e69a9e]/30 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#e8c872]">
                    Estimated Total
                  </span>
                  <div className="font-serif text-3xl font-extrabold text-white">
                    ${estimatedTotal.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-neutral-400 block">Avg. per Guest</span>
                  <span className="text-sm font-bold text-[#e69a9e]">
                    ~${(estimatedTotal / guests).toFixed(2)}/guest
                  </span>
                </div>
              </div>

              {/* Staffing Recommendation */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs">
                <span className="text-neutral-300">Dedicated Staffing:</span>
                <span className="font-bold text-[#e8c872]">
                  {recommendedBartenders} TIPS Mixologist{recommendedBartenders > 1 ? 's' : ''}
                </span>
              </div>

              {/* Bonus: Smart Alcohol Calculator Blueprint */}
              <div className="p-4 rounded-xl bg-[#14121c] border border-white/5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#e8c872]">
                  <Wine className="w-3.5 h-3.5 text-[#e69a9e]" />
                  <span>Suggested Alcohol Shopping Guide:</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded bg-black/40">
                    <div className="font-bold text-white text-sm">~{spiritBottlesEstimated}</div>
                    <div className="text-[10px] text-neutral-400">Bottles Liquor (750ml)</div>
                  </div>
                  <div className="p-2 rounded bg-black/40">
                    <div className="font-bold text-white text-sm">~{wineBottlesEstimated}</div>
                    <div className="text-[10px] text-neutral-400">Bottles Wine & Bubbly</div>
                  </div>
                  <div className="p-2 rounded bg-black/40">
                    <div className="font-bold text-white text-sm">~{beerBottlesEstimated}</div>
                    <div className="text-[10px] text-neutral-400">Beers / Seltzers</div>
                  </div>
                </div>
                <p className="text-[10px] text-neutral-400">
                  * By law in MD/DC/VA, client provides alcohol. We provide full buying consultation so you pay retail prices and never overspend!
                </p>
              </div>

              {/* Action Button: Transfer to Booking */}
              <button
                id="calculator-lock-quote-btn"
                onClick={handleBookWithQuote}
                className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] via-[#df8c90] to-[#c77075] text-[#0b0a0e] hover:brightness-110 shadow-xl shadow-[#e69a9e]/20 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Lock In This Estimate & Book Date</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
