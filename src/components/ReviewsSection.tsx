import React from 'react';
import { Star, Quote, CheckCircle2, Award } from 'lucide-react';
import { REVIEWS, BRAND_INFO } from '../data/mockupData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0e0d14] relative border-t border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#e69a9e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1824] border border-[#e8c872]/30 text-xs font-semibold text-[#e8c872]">
            <Award className="w-3.5 h-3.5" />
            <span>Real Feedback from Celebrations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Kind Words, <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gradient-rose">Great Experiences</span>
          </h2>
          <p className="text-neutral-300 font-sans font-light text-base leading-relaxed">
            Read what couples, family hosts, and corporate planners say about the energy, speed, and unforgettable cocktails of Cosmo Mobile Bar.
          </p>

          {/* Social Proof Aggregate Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#16131f] border border-white/10 text-xs text-neutral-300 shadow-lg">
            <div className="flex items-center gap-1 text-[#e8c872]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-white">5.0 / 5.0 Rating</span>
            <span className="text-neutral-500">•</span>
            <span>Over 140+ Celebrations Across MD, DC & VA</span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-2xl bg-[#14121b] border border-white/10 hover:border-[#e69a9e]/40 transition-all flex flex-col justify-between space-y-6 group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e69a9e]/10"
            >
              <div className="space-y-4">
                {/* Top Row: Stars & Event Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#e8c872]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#e69a9e] px-2.5 py-0.5 rounded-full bg-[#e69a9e]/10 border border-[#e69a9e]/20">
                    {review.eventType}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-sm text-neutral-300 font-light leading-relaxed italic">
                  “{review.comment}”
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-white text-base">
                    {review.author}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {review.role} • <span className="text-[#e8c872]">{review.location}</span>
                  </div>
                </div>
                <div className="text-[11px] text-neutral-500">
                  {review.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
