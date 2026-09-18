// =======================================================================
// Cosmo Mobile Bar - Central Asset Images Manager
// =======================================================================
// Jab bhi aap apni new real images 'src/assets/images/' folder mein upload karein,
// aap simply yahan import update kar sakte hain ya existing image replace kar sakte hain.
// Vite automatically in images ko bundle karega aur Vercel par 100% load karega!
// =======================================================================

// Real Local Assets imported from src/assets/images/
import leadMixologistReal from './images/lead_mixologist.jpg';
import signatureCosmoReal from './images/drink_cosmopolitan.jpg';
import luxuryBarHeroReal from './images/luxury_bar_hero.jpg';
import founderPortraitReal from './images/founder_portrait.jpg';
import eventCelebrationReal from './images/event_celebration.jpg';

export const REAL_ASSET_IMAGES = {
  // Master Bartender / Mixologist
  leadMixologist: leadMixologistReal,

  // Signature Cosmopolitan Cocktail
  signatureCosmo: signatureCosmoReal,

  // Illuminated Luxury Bar Setup
  luxuryBarSetup: luxuryBarHeroReal,

  // Jairo Pinto - Founder Portrait
  founderPortrait: founderPortraitReal,

  // Celebration / Party Atmosphere
  eventCelebration: eventCelebrationReal,
};

// Default export for quick imports
export default REAL_ASSET_IMAGES;
