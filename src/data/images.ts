// =======================================================================
// Cosmo Mobile Bar - Brand Images Linked to Local 'src/assets/images/'
// =======================================================================
// Aap apni images 'src/assets/images/' folder mein rakh saktay hain.
// Vite inhein bundle kar ke Vercel par 100% reliable load karta hai!
// =======================================================================

import { REAL_ASSET_IMAGES } from '../assets/images';

export const BRAND_IMAGES = {
  // Master Bartender / Mixologist (Hero Section)
  leadMixologist: REAL_ASSET_IMAGES.leadMixologist,
  leadMixologistFallback: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1200&q=80',

  // Signature Cosmopolitan (Cocktail Badge & Menu)
  signatureCosmo: REAL_ASSET_IMAGES.signatureCosmo,
  signatureCosmoFallback: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',

  // Illuminated Luxury Mobile Bar Unit
  luxuryBarSetup: REAL_ASSET_IMAGES.luxuryBarSetup,
  luxuryBarSetupFallback: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',

  // Jairo Pinto - Founder & Master Beverage Director
  founderPortrait: REAL_ASSET_IMAGES.founderPortrait,
  founderPortraitFallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',

  // Evening Wedding & Gala Toast Celebration
  eventCelebration: REAL_ASSET_IMAGES.eventCelebration,
  eventCelebrationFallback: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
};
