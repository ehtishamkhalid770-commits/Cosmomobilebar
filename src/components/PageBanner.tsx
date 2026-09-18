import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  scriptAccent: string;
  subtitle: string;
  currentPageTitle: string;
  onNavigateHome: () => void;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  eyebrow,
  title,
  scriptAccent,
  subtitle,
  currentPageTitle,
  onNavigateHome,
}) => {
  return (
    <div className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-[#131119] via-[#0e0d14] to-[#0b0a0e] border-b border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-[#e69a9e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Breadcrumb (Standard WordPress Page hierarchy) */}
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-neutral-400 mb-6 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/5">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#e69a9e] transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-neutral-500" />
          <span className="text-[#e8c872] font-semibold">{currentPageTitle}</span>
        </div>

        {/* Eyebrow */}
        <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#e8c872] mb-3">
          {eyebrow}
        </div>

        {/* Page Title */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {title}{' '}
          <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gradient-rose block sm:inline mt-1 sm:mt-0">
            {scriptAccent}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base text-neutral-300 font-sans font-light max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

      </div>
    </div>
  );
};
