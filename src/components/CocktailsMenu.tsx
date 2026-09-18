import React, { useState } from 'react';
import { Sparkles, Plus, Check, GlassWater, Flame, Info, Eye } from 'lucide-react';
import { COCKTAILS } from '../data/mockupData';
import { CocktailItem } from '../types';
import { useImages } from '../context/ImageContext';

interface CocktailsMenuProps {
  selectedCocktailIds: string[];
  onToggleCocktail: (cocktailId: string) => void;
  onOpenDrinkDrawer: () => void;
}

export const CocktailsMenu: React.FC<CocktailsMenuProps> = ({
  selectedCocktailIds,
  onToggleCocktail,
  onOpenDrinkDrawer,
}) => {
  const { images } = useImages();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [inspectingDrink, setInspectingDrink] = useState<CocktailItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Handcrafted Pours' },
    { id: 'signature', label: 'House Signatures' },
    { id: 'classic', label: 'Timeless Classics' },
    { id: 'tropical', label: 'Vibrant & Tropical' },
    { id: 'mocktail', label: 'Artisanal Mocktails' },
  ];

  const filteredDrinks = activeCategory === 'all'
    ? COCKTAILS
    : COCKTAILS.filter(c => c.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#0b0a0e] relative">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#e69a9e]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#e8c872]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e1a26] border border-[#e69a9e]/30 text-xs font-semibold text-[#e8c872]">
            <Sparkles className="w-3.5 h-3.5 text-[#e69a9e]" />
            <span>Curated Beverage Program</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            A Menu Made to <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-gradient-rose">Be Remembered</span>
          </h2>
          <p className="text-neutral-300 font-sans font-light text-base leading-relaxed">
            Every syrup is house-simmered, every citrus fruit is freshly squeezed on event day, and every garnish is hand-torched or dehydrated in our kitchen. Select your favorites to build your event bar menu.
          </p>

          {/* Interactive Menu Builder Status Bar */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#171420] via-[#211a29] to-[#171420] border border-[#e69a9e]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#e69a9e]/20 text-[#e69a9e] flex items-center justify-center font-bold">
                {selectedCocktailIds.length}
              </div>
              <span className="text-neutral-200">
                <strong>{selectedCocktailIds.length} Drinks Selected</strong> for your event bar tasting menu
              </span>
            </div>
            {selectedCocktailIds.length > 0 && (
              <button
                onClick={onOpenDrinkDrawer}
                className="px-3.5 py-1.5 rounded-full bg-[#e69a9e] text-[#0b0a0e] font-bold text-[11px] uppercase tracking-wider hover:bg-[#f2b8bc] transition-colors flex items-center gap-1"
              >
                <span>View My Selected Menu</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#e69a9e] to-[#c77075] text-[#0b0a0e] shadow-lg shadow-[#e69a9e]/20'
                  : 'bg-[#15131c] text-neutral-300 hover:text-white hover:bg-[#201c2a] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDrinks.map((drink) => {
            const isSelected = selectedCocktailIds.includes(drink.id);

            return (
              <div
                key={drink.id}
                className={`rounded-2xl overflow-hidden bg-[#14121b] border transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 ${
                  isSelected
                    ? 'border-[#e69a9e] ring-1 ring-[#e69a9e]/50 shadow-2xl shadow-[#e69a9e]/15'
                    : 'border-white/10 hover:border-[#e69a9e]/40'
                }`}
              >
                {/* Image Header with Tags */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#1e1a26]">
                  <img
                    src={images.cocktails[drink.id] || drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14121b] via-transparent to-black/30" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {drink.isPopular && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#e69a9e] text-[#0b0a0e] shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Client Favorite</span>
                      </span>
                    )}
                  </div>

                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => setInspectingDrink(drink)}
                      className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white/80 hover:text-white hover:bg-[#e69a9e] hover:text-[#0b0a0e] transition-colors"
                      title="Inspect Tasting Notes"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Glassware Note bottom overlay */}
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-neutral-300">
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      <GlassWater className="w-3 h-3 text-[#e8c872]" />
                      <span>{drink.glassware}</span>
                    </span>
                    <span className="text-[#e8c872] font-medium bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                      {drink.spirit}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    {/* Flavor Notes Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {drink.flavorProfile.map((flavor, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5"
                        >
                          {flavor}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f7d7d9] transition-colors">
                      {drink.name}
                    </h3>

                    <p className="text-xs text-neutral-300 font-light leading-relaxed">
                      {drink.description}
                    </p>

                    <div className="pt-2 text-[11px] text-neutral-400 border-t border-white/5 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-[#e69a9e] shrink-0" />
                      <span><strong>Garnish:</strong> {drink.garnish}</span>
                    </div>
                  </div>

                  {/* Add to Menu Button */}
                  <div className="pt-4 mt-2">
                    <button
                      onClick={() => onToggleCocktail(drink.id)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-[#1f2922] text-[#4ade80] border border-[#4ade80]/40'
                          : 'bg-white/5 hover:bg-[#e69a9e] text-white hover:text-[#0b0a0e] border border-white/10 hover:border-[#e69a9e]'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#4ade80]" />
                          <span>Added to Event Bar</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to My Event Bar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Drink Inspector */}
        {inspectingDrink && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#16141e] border border-[#e69a9e]/30 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative">
              <div className="relative aspect-[16/9]">
                <img
                  src={images.cocktails[inspectingDrink.id] || inspectingDrink.image}
                  alt={inspectingDrink.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16141e] via-transparent to-black/40" />
                <button
                  onClick={() => setInspectingDrink(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#e69a9e] hover:text-[#0b0a0e] transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-[#e8c872] font-semibold">
                    {inspectingDrink.spirit}
                  </span>
                  <span className="text-xs text-neutral-400">
                    Glassware: {inspectingDrink.glassware}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white">
                  {inspectingDrink.name}
                </h3>

                <p className="text-sm text-neutral-300 font-light leading-relaxed">
                  {inspectingDrink.description}
                </p>

                <div className="p-3 rounded-xl bg-[#0b0a0e] border border-white/5 space-y-1.5 text-xs text-neutral-300">
                  <div className="text-[#e69a9e] font-semibold">Mixology Recipe Notes:</div>
                  <p>Handcrafted on site with organic citrus, scratch simple syrups, double-strained for crystalline clarity, and garnished right before presentation.</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={() => {
                      onToggleCocktail(inspectingDrink.id);
                      setInspectingDrink(null);
                    }}
                    className="flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] to-[#cf787d] text-[#0b0a0e] hover:brightness-110 transition-all"
                  >
                    {selectedCocktailIds.includes(inspectingDrink.id)
                      ? 'Remove from Event Menu'
                      : 'Add to My Event Menu'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
