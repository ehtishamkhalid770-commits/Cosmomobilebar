import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Code2, Layers, Palette, FileText } from 'lucide-react';
import { WP_SECTIONS_SPEC } from '../data/mockupData';

interface WordPressSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressSpecModal: React.FC<WordPressSpecModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'pages' | 'sections' | 'colors' | 'css'>('pages');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const sampleCss = `/* ==========================================================================
   COSMO MOBILE BAR - WordPress & Elementor Custom Luxury Stylesheet
   ========================================================================== */

:root {
  --cosmo-bg-obsidian: #0b0a0e;
  --cosmo-bg-surface: #14121b;
  --cosmo-accent-rose: #e69a9e;
  --cosmo-accent-gold: #e8c872;
  --cosmo-text-primary: #f4ecee;
  --cosmo-text-secondary: #c5becc;
  --cosmo-border-subtle: rgba(255, 255, 255, 0.08);
}

/* Luxury Font Families */
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: var(--cosmo-bg-obsidian);
  color: var(--cosmo-text-primary);
}

h1, h2, h3, .elementor-heading-title {
  font-family: 'Playfair Display', serif;
}

.cosmo-script-accent {
  font-family: 'Pinyon Script', cursive;
  color: var(--cosmo-accent-rose);
  font-style: italic;
}

/* Glassmorphism Panel */
.cosmo-glass-card {
  background: rgba(20, 18, 27, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--cosmo-border-subtle);
  border-radius: 18px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.cosmo-glass-card:hover {
  border-color: rgba(230, 154, 158, 0.45);
  transform: translateY(-4px);
}

/* Gold Gradient Button */
.cosmo-btn-primary {
  background: linear-gradient(135deg, #e69a9e 0%, #cf787d 100%);
  color: #0b0a0e !important;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: 50px;
  padding: 14px 28px;
  box-shadow: 0 8px 24px rgba(230, 154, 158, 0.35);
  transition: all 0.3s ease;
}

.cosmo-btn-primary:hover {
  filter: brightness(1.1);
  transform: scale(1.02);
}`;

  const wpPagesList = [
    {
      title: 'Home Page',
      slug: '/',
      wpTemplate: 'Elementor Full Width (Front Page)',
      sections: ['Hero + Date Checker', 'Trust Highlights', 'Featured Services Preview', 'Signature Drinks Preview', 'Founder Teaser', 'CTA Banner'],
    },
    {
      title: 'About Us',
      slug: '/about/',
      wpTemplate: 'Elementor Full Width',
      sections: ['Page Banner (Breadcrumb)', 'Jairo Pinto Founder Story', '4 Craft Pillars', 'Atmosphere & Event Photos', 'Verified Client Reviews', 'Inquiry CTA'],
    },
    {
      title: 'Services',
      slug: '/services/',
      wpTemplate: 'Elementor Full Width',
      sections: ['Page Banner', '6 Event Type Service Cards (Weddings, Galas, etc.)', '4-Step Process Timeline', 'Setup Logistics & $2M Insurance Box', 'CTA to Calculator'],
    },
    {
      title: 'Cocktails Menu',
      slug: '/menu/',
      wpTemplate: 'Elementor Full Width',
      sections: ['Page Banner', 'Interactive Category Filter Tabs (Signatures, Classics, Mocktails)', 'Drink Details & Glassware Cards', 'Scratch Syrups Standard', 'Custom Drink Naming'],
    },
    {
      title: 'Packages & Pricing',
      slug: '/packages/',
      wpTemplate: 'Elementor Full Width',
      sections: ['Page Banner', '3 Pricing Package Tables', 'Add-on Enhancements Showcase', 'Full FAQ Accordion', 'CTA to Calculator & Booking'],
    },
    {
      title: 'Event Calculator',
      slug: '/calculator/',
      wpTemplate: 'Elementor Full Width',
      sections: ['Page Banner', 'Cost Calculator Builder Form', 'Instant Bartender Staffing Formula', 'Retail Alcohol Shopping Guide', 'Direct Transfer to Booking'],
    },
    {
      title: 'Contact & Booking',
      slug: '/contact/',
      wpTemplate: 'Elementor Full Width',
      sections: ['Page Banner', 'Inquiry & Date Reservation Form', 'Laurel MD Headquarters & Phone Card', '35-Mile DMV Service Area Map', '12-Hour Guarantee'],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#121017] border border-[#e8c872]/40 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Modal Topbar */}
        <div className="p-6 bg-[#181522] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e8c872]/15 border border-[#e8c872]/30 flex items-center justify-center text-[#e8c872]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-bold text-white">
                  WordPress & Elementor Multi-Page Blueprint
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#e8c872] text-[#0b0a0e]">
                  Multi-Page
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                Step-by-step page tree & widget mapping to build this website in WordPress
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 px-6 bg-[#0f0e14] text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('pages')}
            className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'pages'
                ? 'border-[#e8c872] text-[#e8c872]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>WordPress Pages Tree (7 Pages)</span>
          </button>

          <button
            onClick={() => setActiveTab('sections')}
            className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'sections'
                ? 'border-[#e8c872] text-[#e8c872]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Elementor Widgets</span>
          </button>

          <button
            onClick={() => setActiveTab('colors')}
            className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'colors'
                ? 'border-[#e8c872] text-[#e8c872]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Colors & Fonts</span>
          </button>

          <button
            onClick={() => setActiveTab('css')}
            className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'css'
                ? 'border-[#e8c872] text-[#e8c872]'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Copyable CSS Code</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          
          {/* TAB 1: WordPress Pages Tree */}
          {activeTab === 'pages' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#1b1825] border border-[#e69a9e]/20 text-neutral-300">
                📄 <strong className="text-white">WordPress Setup:</strong> In your WordPress Dashboard, go to <strong>Pages → Add New</strong> and create these 7 separate pages. In <strong>Appearance → Menus</strong>, add them to your Main Navigation Menu.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wpPagesList.map((page, index) => (
                  <div
                    key={page.slug}
                    className="p-4 rounded-xl bg-[#16141e] border border-white/10 space-y-2 hover:border-[#e8c872]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold text-[#e8c872]">
                          {index + 1}
                        </span>
                        <span className="font-serif font-bold text-white text-sm">
                          {page.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#e69a9e]">
                        {page.slug}
                      </span>
                    </div>

                    <div className="text-[11px] text-neutral-400">
                      <strong>Template:</strong> {page.wpTemplate}
                    </div>

                    <div className="pt-2 border-t border-white/5 space-y-1">
                      <span className="text-[11px] text-[#e8c872] font-semibold">Included Sections:</span>
                      <ul className="space-y-0.5 text-neutral-300 text-[11px] list-disc list-inside">
                        {page.sections.map((sec, i) => (
                          <li key={i}>{sec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Elementor Widgets */}
          {activeTab === 'sections' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-[#1b1825] border border-[#e69a9e]/20 text-neutral-300">
                💡 <strong className="text-white">Standard Elementor Containers:</strong> Every section is structured as a standard 12-column flex container with standard Elementor widgets (Icon Box, Price Table, Form, Gallery). You don’t need any custom PHP coding to replace it on WordPress!
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {WP_SECTIONS_SPEC.map((sec) => (
                  <div
                    key={sec.sectionId}
                    className="p-4 rounded-xl bg-[#16141e] border border-white/10 space-y-2 hover:border-[#e8c872]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-white text-sm">
                        {sec.sectionTitle}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-[#e8c872]">
                        #{sec.sectionId}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-neutral-300">
                      <div>
                        <strong className="text-[#e69a9e]">Container:</strong>{' '}
                        <span className="text-white">{sec.elementorContainer}</span>
                      </div>
                      <div>
                        <strong className="text-[#e8c872]">Recommended Widgets:</strong>{' '}
                        <span>{sec.recommendedWidgets.join(', ')}</span>
                      </div>
                      <div>
                        <strong className="text-neutral-400">Layout:</strong> {sec.wpLayout}
                      </div>
                      <div className="text-[11px] text-neutral-400 italic">
                        {sec.devNotes}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Colors & Fonts */}
          {activeTab === 'colors' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-sm font-bold text-white mb-3">
                  1. Brand Color System (Exact Hex Values for WordPress Site Settings)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-[#0b0a0e] border border-white/15 space-y-1">
                    <div className="w-full h-8 rounded bg-[#0b0a0e] border border-white/20" />
                    <div className="font-mono text-white font-bold">#0b0a0e</div>
                    <div className="text-[10px] text-neutral-400">Obsidian Luxury Background</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#14121b] border border-white/15 space-y-1">
                    <div className="w-full h-8 rounded bg-[#14121b] border border-white/20" />
                    <div className="font-mono text-white font-bold">#14121b</div>
                    <div className="text-[10px] text-neutral-400">Dark Charcoal Card Base</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1a1622] border border-white/15 space-y-1">
                    <div className="w-full h-8 rounded bg-[#e69a9e]" />
                    <div className="font-mono text-[#e69a9e] font-bold">#e69a9e</div>
                    <div className="text-[10px] text-neutral-400">Rose Blush Luxury Accent</div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#1a1622] border border-white/15 space-y-1">
                    <div className="w-full h-8 rounded bg-[#e8c872]" />
                    <div className="font-mono text-[#e8c872] font-bold">#e8c872</div>
                    <div className="text-[10px] text-neutral-400">Champagne Gold Highlight</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-sm font-bold text-white mb-3">
                  2. Typography Pairings (Available Free on Google Fonts)
                </h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#16141e] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-serif text-base font-bold text-white">Playfair Display</div>
                      <div className="text-[11px] text-neutral-400">Used for All Headings (H1, H2, H3, Card Titles)</div>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-neutral-300">Google Fonts</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#16141e] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-sans text-base font-semibold text-white">Plus Jakarta Sans</div>
                      <div className="text-[11px] text-neutral-400">Used for Body Text, Navigation, Inputs & Buttons</div>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-neutral-300">Google Fonts</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#16141e] border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-script text-2xl text-[#e69a9e]">Pinyon Script</div>
                      <div className="text-[11px] text-neutral-400">Used for Elegant Hero Taglines & Signature Accents</div>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-neutral-300">Google Fonts</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-sm font-bold text-white mb-2">
                  3. Recommended WordPress Plugins
                </h4>
                <ul className="space-y-1 text-neutral-300 list-disc list-inside">
                  <li><strong>Elementor Pro</strong> (For header, footer, price tables, popups)</li>
                  <li><strong>Formidable Forms</strong> or <strong>Cost Calculator Builder</strong> (For the live interactive quote estimator)</li>
                  <li><strong>WPForms</strong> or <strong>Fluent Forms</strong> (For the date inquiry form)</li>
                  <li><strong>Envira Gallery</strong> (For the Instagram and event photography feed)</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: Copyable CSS Code */}
          {activeTab === 'css' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-300">
                  Ready-to-use CSS snippet. Click copy and paste into your WordPress theme customizer:
                </span>
                <button
                  onClick={() => handleCopy(sampleCss, 'all-css')}
                  className="px-3 py-1 rounded-lg bg-[#e8c872] text-[#0b0a0e] font-bold text-[11px] flex items-center gap-1 hover:bg-[#f2d78e] transition-colors"
                >
                  {copiedSection === 'all-css' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy CSS Code</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-[#09080c] border border-white/10 font-mono text-[11px] text-neutral-300 overflow-x-auto max-h-72">
                {sampleCss}
              </pre>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#181522] border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-neutral-400">
            Client-friendly multi-page architecture with zero proprietary lock-in.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Close Blueprint
          </button>
        </div>

      </div>
    </div>
  );
};
