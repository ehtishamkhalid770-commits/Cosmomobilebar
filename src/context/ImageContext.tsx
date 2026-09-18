import React, { createContext, useContext, useState, useEffect } from 'react';
import { REAL_ASSET_IMAGES } from '../assets/images';
import { COCKTAILS } from '../data/mockupData';

export interface ImageRegistry {
  leadMixologist: string;
  signatureCosmo: string;
  luxuryBarSetup: string;
  founderPortrait: string;
  eventCelebration: string;
  cocktails: Record<string, string>;
}

export const DEFAULT_IMAGES: ImageRegistry = {
  leadMixologist: REAL_ASSET_IMAGES.leadMixologist,
  signatureCosmo: REAL_ASSET_IMAGES.signatureCosmo,
  luxuryBarSetup: REAL_ASSET_IMAGES.luxuryBarSetup,
  founderPortrait: REAL_ASSET_IMAGES.founderPortrait,
  eventCelebration: REAL_ASSET_IMAGES.eventCelebration,
  cocktails: COCKTAILS.reduce((acc, drink) => {
    acc[drink.id] = drink.image;
    return acc;
  }, {} as Record<string, string>),
};

interface ImageContextType {
  images: ImageRegistry;
  updateBrandImage: (key: keyof Omit<ImageRegistry, 'cocktails'>, dataUrl: string) => void;
  updateCocktailImage: (cocktailId: string, dataUrl: string) => void;
  resetBrandImage: (key: keyof Omit<ImageRegistry, 'cocktails'>) => void;
  resetCocktailImage: (cocktailId: string) => void;
  resetAllImages: () => void;
  isCustomized: (key: keyof Omit<ImageRegistry, 'cocktails'>) => boolean;
  isCocktailCustomized: (cocktailId: string) => boolean;
}

const STORAGE_KEY = 'cosmo_custom_images_v2';

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [images, setImages] = useState<ImageRegistry>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          leadMixologist: parsed.leadMixologist || DEFAULT_IMAGES.leadMixologist,
          signatureCosmo: parsed.signatureCosmo || DEFAULT_IMAGES.signatureCosmo,
          luxuryBarSetup: parsed.luxuryBarSetup || DEFAULT_IMAGES.luxuryBarSetup,
          founderPortrait: parsed.founderPortrait || DEFAULT_IMAGES.founderPortrait,
          eventCelebration: parsed.eventCelebration || DEFAULT_IMAGES.eventCelebration,
          cocktails: {
            ...DEFAULT_IMAGES.cocktails,
            ...(parsed.cocktails || {}),
          },
        };
      }
    } catch (e) {
      console.warn('Error reading stored images from localStorage:', e);
    }
    return DEFAULT_IMAGES;
  });

  // Persist images state to localStorage whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    } catch (e) {
      console.warn('Could not save images to localStorage (may exceed quota):', e);
    }
  }, [images]);

  const updateBrandImage = (key: keyof Omit<ImageRegistry, 'cocktails'>, dataUrl: string) => {
    setImages((prev) => ({
      ...prev,
      [key]: dataUrl,
    }));
  };

  const updateCocktailImage = (cocktailId: string, dataUrl: string) => {
    setImages((prev) => ({
      ...prev,
      cocktails: {
        ...prev.cocktails,
        [cocktailId]: dataUrl,
      },
    }));
  };

  const resetBrandImage = (key: keyof Omit<ImageRegistry, 'cocktails'>) => {
    setImages((prev) => ({
      ...prev,
      [key]: DEFAULT_IMAGES[key],
    }));
  };

  const resetCocktailImage = (cocktailId: string) => {
    setImages((prev) => {
      const updatedCocktails = { ...prev.cocktails };
      if (DEFAULT_IMAGES.cocktails[cocktailId]) {
        updatedCocktails[cocktailId] = DEFAULT_IMAGES.cocktails[cocktailId];
      } else {
        delete updatedCocktails[cocktailId];
      }
      return {
        ...prev,
        cocktails: updatedCocktails,
      };
    });
  };

  const resetAllImages = () => {
    setImages(DEFAULT_IMAGES);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  };

  const isCustomized = (key: keyof Omit<ImageRegistry, 'cocktails'>): boolean => {
    return images[key] !== DEFAULT_IMAGES[key];
  };

  const isCocktailCustomized = (cocktailId: string): boolean => {
    return images.cocktails[cocktailId] !== DEFAULT_IMAGES.cocktails[cocktailId];
  };

  return (
    <ImageContext.Provider
      value={{
        images,
        updateBrandImage,
        updateCocktailImage,
        resetBrandImage,
        resetCocktailImage,
        resetAllImages,
        isCustomized,
        isCocktailCustomized,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = (): ImageContextType => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImages must be used within an ImageProvider');
  }
  return context;
};
