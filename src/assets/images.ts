// =======================================================================
// Cosmo Mobile Bar - Resilient Central Asset Images Manager
// =======================================================================
// Uses Vite's import.meta.glob so it NEVER crashes if an image is renamed,
// deleted, or uploaded with a different extension (.jpg, .jpeg, .png, .webp).
// =======================================================================

// Dynamic glob that eagerly imports all valid images from ./images directory
const localImageModules: Record<string, string> = import.meta.glob(
  './images/*.{jpg,jpeg,png,webp,svg,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

const FALLBACKS = {
  leadMixologist: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=1200&q=80',
  signatureCosmo: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
  luxuryBarSetup: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  founderPortrait: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80',
  eventCelebration: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
};

function resolveImage(pattern: RegExp, fallback: string): string {
  // Check exact/clean matches first (e.g., without timestamps)
  for (const [path, url] of Object.entries(localImageModules)) {
    const filename = path.replace('./images/', '');
    if (pattern.test(filename)) {
      return url;
    }
  }
  return fallback;
}

export const REAL_ASSET_IMAGES = {
  // Master Bartender / Mixologist
  leadMixologist: resolveImage(/lead_mixologist\.(jpe?g|png|webp)/i, resolveImage(/lead_mixologist/i, FALLBACKS.leadMixologist)),

  // Signature Cosmopolitan Cocktail
  signatureCosmo: resolveImage(/(drink_cosmopolitan|cosmo)\.(jpe?g|png|webp)/i, resolveImage(/(drink_cosmopolitan|cosmo)/i, FALLBACKS.signatureCosmo)),

  // Illuminated Luxury Bar Setup
  luxuryBarSetup: resolveImage(/luxury_bar.*\.(jpe?g|png|webp)/i, resolveImage(/luxury_bar/i, FALLBACKS.luxuryBarSetup)),

  // Jairo Pinto - Founder Portrait
  founderPortrait: resolveImage(/founder_portrait\.(jpe?g|png|webp)/i, resolveImage(/founder_portrait/i, FALLBACKS.founderPortrait)),

  // Celebration / Party Atmosphere
  eventCelebration: resolveImage(/event_celebration\.(jpe?g|png|webp)/i, resolveImage(/event_celebration/i, FALLBACKS.eventCelebration)),
};

// Default export for quick imports
export default REAL_ASSET_IMAGES;
