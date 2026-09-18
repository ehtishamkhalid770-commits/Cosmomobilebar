import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { CocktailsMenu } from '../components/CocktailsMenu';
import { Sparkles, Flame, Heart, GlassWater, Award } from 'lucide-react';

interface MenuPageProps {
  onNavigate: (page: string) => void;
  selectedCocktailIds: string[];
  onToggleCocktail: (cocktailId: string) => void;
  onOpenDrinkDrawer: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({
  onNavigate,
  selectedCocktailIds,
  onToggleCocktail,
  onOpenDrinkDrawer,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Page Header Banner */}
      <PageBanner
        eyebrow="The Cocktail Program"
        title="Artisan Libations &"
        scriptAccent="Scratch Cordials"
        subtitle="Explore our curated cocktail menu. Every recipe is crafted with cold-pressed juices, house-simmered botanicals, and bespoke garnishes."
        currentPageTitle="Cocktail Menu"
        onNavigateHome={() => onNavigate('home')}
      />

      {/* 2. Cocktails Menu Component */}
      <CocktailsMenu
        selectedCocktailIds={selectedCocktailIds}
        onToggleCocktail={onToggleCocktail}
        onOpenDrinkDrawer={onOpenDrinkDrawer}
      />

      {/* 3. The Scratch Standard & Custom Naming Featurette */}
      <section className="py-20 bg-[#0e0d14] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1824] border border-[#e8c872]/30 text-xs font-semibold text-[#e8c872]">
                <Flame className="w-3.5 h-3.5 text-[#e69a9e]" />
                <span>The Culinary Standard</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Never Commercial Premixes. <br />
                <span className="font-script text-4xl sm:text-5xl text-gradient-rose">Always Made from Scratch.</span>
              </h2>
              <p className="text-neutral-300 text-sm font-light leading-relaxed">
                Most catering bartenders rely on neon-green bottled sour mixes and artificial syrups loaded with corn syrup. At Cosmo, our kitchen hand-presses hundreds of lemons and limes before your event, slow-simmers organic demerara sugar with wild botanicals, and torch-expresses essential citrus oils right at the glass.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#14121b] border border-white/5">
                  <div className="font-serif text-lg font-bold text-white">Cold-Pressed Citrus</div>
                  <div className="text-xs text-neutral-400 mt-0.5">Squeezed fresh on event day</div>
                </div>
                <div className="p-4 rounded-xl bg-[#14121b] border border-white/5">
                  <div className="font-serif text-lg font-bold text-white">Scratch Cordials</div>
                  <div className="text-xs text-neutral-400 mt-0.5">Lavender, smoked wood & botanicals</div>
                </div>
              </div>
            </div>

            {/* Custom Drink Naming for Couples & Brands */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#181523] to-[#121017] border border-[#e69a9e]/30 shadow-2xl space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#e69a9e]/15 border border-[#e69a9e]/30 flex items-center justify-center text-[#e69a9e]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Personalized Drink Names & Framed Menus
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Celebrate your story! For weddings and milestone birthdays, we help you rename signature cocktails after your pets, inside jokes, engagement locations, or company brand themes. We design and frame custom acrylic bar signage to match your decor.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] to-[#cf787d] text-[#0b0a0e] hover:brightness-110 shadow-lg shadow-[#e69a9e]/25 transition-all"
                >
                  Create Custom Cocktail Menu for Your Date
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
