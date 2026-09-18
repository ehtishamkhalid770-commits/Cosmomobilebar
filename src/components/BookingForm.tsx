import React, { useState, useEffect } from 'react';
import { Calendar, Send, CheckCircle2, GlassWater, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { BRAND_INFO, PACKAGES } from '../data/mockupData';

interface BookingFormProps {
  initialDate?: string;
  initialGuests?: number;
  initialPackageId?: string;
  initialEventType?: string;
  selectedCocktailNames?: string[];
  estimatedTotal?: number;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialDate = '',
  initialGuests = 75,
  initialPackageId = 'signature-cosmo',
  initialEventType = 'Wedding & Reception',
  selectedCocktailNames = [],
  estimatedTotal,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(initialDate);
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState(initialGuests);
  const [eventType, setEventType] = useState(initialEventType);
  const [packageId, setPackageId] = useState(initialPackageId);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialDate) setDate(initialDate);
  }, [initialDate]);

  useEffect(() => {
    if (initialGuests) setGuests(initialGuests);
  }, [initialGuests]);

  useEffect(() => {
    if (initialPackageId) setPackageId(initialPackageId);
  }, [initialPackageId]);

  useEffect(() => {
    if (initialEventType) setEventType(initialEventType);
  }, [initialEventType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0c13] relative border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#e69a9e]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1824] border border-[#e8c872]/30 text-xs font-semibold text-[#e8c872]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Check Availability & Inquire</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Let’s Make Your Event <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gradient-rose">Unforgettable</span>
          </h2>
          <p className="text-neutral-300 font-sans font-light text-base leading-relaxed">
            Dates book quickly for prime weekend weddings and holiday galas. Submit your details below and Jairo will personally review your celebration logistics and prepare a customized proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left: Contact Info & Peace of Mind (4 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-3xl bg-[#14121b] border border-[#e69a9e]/20 space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8c872]">
                  Direct Contact
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  Cosmo Mobile Bar
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Laurel, Maryland • Serving MD, DC & VA
                </p>
              </div>

              <div className="space-y-4 text-xs text-neutral-300">
                <a
                  href={`tel:${BRAND_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#e69a9e]/15 text-[#e69a9e] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400">Call / Text Directly</div>
                    <div className="font-bold text-white text-sm">{BRAND_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#e8c872]/15 text-[#e8c872] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400">Direct Email</div>
                    <div className="font-bold text-white text-sm">{BRAND_INFO.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-neutral-400">Primary Hub</div>
                    <div className="font-bold text-white text-sm">{BRAND_INFO.address}</div>
                    <div className="text-[10px] text-neutral-400">{BRAND_INFO.serviceAreas}</div>
                  </div>
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="p-4 rounded-xl bg-[#0b0a0e] border border-white/5 space-y-2 text-xs">
                <div className="font-bold text-[#e8c872] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e69a9e]" />
                  <span>With Every Inquiry, You Receive:</span>
                </div>
                <ul className="space-y-1 text-[11px] text-neutral-400 list-disc list-inside">
                  <li>Itemized, transparent pricing proposal</li>
                  <li>Free alcohol shopping quantity calculator</li>
                  <li>Custom signature cocktail recommendations</li>
                  <li>No-obligation date hold for 48 hours</li>
                </ul>
              </div>

            </div>

          </div>

          {/* Right: Modern Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#14121b] border border-[#e69a9e]/30 shadow-2xl relative overflow-hidden">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#e69a9e]/20 text-[#e69a9e] border border-[#e69a9e] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>! Jairo and the Cosmo Mobile Bar team have received your details for <strong className="text-white">{date || 'your celebration'}</strong>. We will review your date and respond within 12 hours with your custom proposal.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Selected Drinks Notice if user picked cocktails */}
                  {selectedCocktailNames.length > 0 && (
                    <div className="p-3.5 rounded-xl bg-[#1c1827] border border-[#e69a9e]/40 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-[#e69a9e]">
                        <GlassWater className="w-3.5 h-3.5" />
                        <span>Included Your Selected Cocktail Menu ({selectedCocktailNames.length} drinks):</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCocktailNames.map((d, i) => (
                          <span key={i} className="text-[10px] bg-[#0b0a0e] text-white px-2 py-0.5 rounded border border-white/10">
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Calculator estimate note */}
                  {estimatedTotal && (
                    <div className="p-3 rounded-xl bg-[#0b0a0e] border border-[#e8c872]/40 flex items-center justify-between text-xs">
                      <span className="text-neutral-300">Calculator Estimate Attached:</span>
                      <span className="font-bold text-[#e8c872]">${estimatedTotal.toLocaleString()}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Elena Vance"
                        className="w-full bg-[#0b0a0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#e69a9e]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@example.com"
                        className="w-full bg-[#0b0a0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#e69a9e]"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone & Event Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(240) 555-0199"
                        className="w-full bg-[#0b0a0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#e69a9e]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-[#0b0a0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#e69a9e]"
                      />
                    </div>
                  </div>

                  {/* Row 3: Event Type & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        Event Type
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full bg-[#0b0a0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#e69a9e]"
                      >
                        <option>Wedding & Reception</option>
                        <option>Milestone Birthday</option>
                        <option>Corporate Gala / Launch</option>
                        <option>Anniversary Celebration</option>
                        <option>Quinceañera / Graduation</option>
                        <option>Private VIP Soiree</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        Estimated Guest Count
                      </label>
                      <input
                        type="number"
                        min="10"
                        max="600"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value) || 0)}
                        className="w-full bg-[#0b0a0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#e69a9e]"
                      />
                    </div>
                  </div>

                  {/* Row 4: Package & Venue City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        Preferred Package
                      </label>
                      <select
                        value={packageId}
                        onChange={(e) => setPackageId(e.target.value)}
                        className="w-full bg-[#0b0a0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#e69a9e]"
                      >
                        {PACKAGES.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} (from ${p.price})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-neutral-300">
                        Event City / Venue Name
                      </label>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Annapolis, MD or DC venue"
                        className="w-full bg-[#0b0a0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#e69a9e]"
                      />
                    </div>
                  </div>

                  {/* Row 5: Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-300">
                      Celebration Vision & Special Requests
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us about your event theme, favorite spirits, or questions for Jairo..."
                      className="w-full bg-[#0b0a0e] border border-white/15 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#e69a9e]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] via-[#df8c90] to-[#c77075] text-[#0b0a0e] hover:brightness-110 shadow-xl shadow-[#e69a9e]/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Custom Proposal & Reserve Date</span>
                    </button>
                    <p className="text-[11px] text-center text-neutral-400 mt-2 font-light">
                      🔒 No immediate payment required. We will verify date availability and send your proposal first.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
