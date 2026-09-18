import React from 'react';
import { X, Trash2, ArrowRight, GlassWater, CheckCircle2 } from 'lucide-react';
import { COCKTAILS } from '../data/mockupData';
import { useImages } from '../context/ImageContext';

interface SelectedDrinksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCocktailIds: string[];
  onRemoveCocktail: (cocktailId: string) => void;
  onProceedToBooking: () => void;
}

export const SelectedDrinksDrawer: React.FC<SelectedDrinksDrawerProps> = ({
  isOpen,
  onClose,
  selectedCocktailIds,
  onRemoveCocktail,
  onProceedToBooking,
}) => {
  const { images } = useImages();
  if (!isOpen) return null;

  const selectedDrinks = COCKTAILS.filter((c) => selectedCocktailIds.includes(c.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-md bg-[#131119] border-l border-[#e69a9e]/30 h-full flex flex-col justify-between shadow-2xl p-6 overflow-y-auto">
        
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#e69a9e]/20 text-[#e69a9e] flex items-center justify-center">
                <GlassWater className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">
                  Your Event Bar Menu
                </h3>
                <p className="text-xs text-[#e8c872]">
                  {selectedDrinks.length} drink{selectedDrinks.length !== 1 ? 's' : ''} curated
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of Drinks */}
          <div className="py-6 space-y-3">
            {selectedDrinks.length === 0 ? (
              <div className="py-12 text-center text-neutral-400 space-y-3">
                <GlassWater className="w-12 h-12 text-neutral-600 mx-auto" />
                <p className="text-xs">
                  Your event tasting list is currently empty.
                </p>
                <p className="text-[11px] text-neutral-500">
                  Browse the cocktail menu and click <strong>“Add to My Event Bar”</strong> to build your customized party drink list!
                </p>
              </div>
            ) : (
              selectedDrinks.map((drink) => (
                <div
                  key={drink.id}
                  className="p-3.5 rounded-xl bg-[#1a1724] border border-white/10 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={images.cocktails[drink.id] || drink.image}
                      alt={drink.name}
                      className="w-12 h-12 rounded-lg object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80';
                      }}
                    />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white">
                        {drink.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400">
                        {drink.spirit} • {drink.glassware}
                      </p>
                      <p className="text-[10px] text-[#e69a9e]">
                        Garnish: {drink.garnish}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveCocktail(drink.id)}
                    className="p-2 rounded-lg text-neutral-400 hover:text-red-400 hover:bg-red-400/10 transition-colors"
                    title="Remove drink"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <div className="text-[11px] text-neutral-400">
            ✨ Our team will print and frame these custom selections for your bar on event day!
          </div>

          <button
            disabled={selectedDrinks.length === 0}
            onClick={() => {
              onClose();
              onProceedToBooking();
            }}
            className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#e69a9e] to-[#c77075] text-[#0b0a0e] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#e69a9e]/20"
          >
            <span>Attach Drinks & Inquire ({selectedDrinks.length})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
