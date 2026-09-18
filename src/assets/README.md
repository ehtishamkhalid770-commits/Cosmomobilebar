# Cosmo Mobile Bar - Real Images Guide 📸

Aap apni real images ko bohat asaani se use kar saktay hain!

## 📁 Images Kahan Rakhni Hain?
Apni tamam real photos ko is folder mein upload karein:
`/src/assets/images/`

---

## 🖼️ Current Linked Images (Jo Website Par Live Hain):

| Website Section | Image File Path | Export Name in `src/assets/images.ts` |
|-----------------|-----------------|---------------------------------------|
| **Hero Master Mixologist** | `src/assets/images/lead_mixologist.jpg` | `REAL_ASSET_IMAGES.leadMixologist` |
| **Signature Cosmo Cocktail** | `src/assets/images/drink_cosmopolitan.jpg` | `REAL_ASSET_IMAGES.signatureCosmo` |
| **Luxury Mobile Bar Setup** | `src/assets/images/luxury_bar_hero.jpg` | `REAL_ASSET_IMAGES.luxuryBarSetup` |
| **Founder Portrait (Jairo Pinto)** | `src/assets/images/founder_portrait.jpg` | `REAL_ASSET_IMAGES.founderPortrait` |
| **Event Celebration Toast** | `src/assets/images/event_celebration.jpg` | `REAL_ASSET_IMAGES.eventCelebration` |

---

## ⚡ 2 Simple Tareeqay Apni Real Images Lagane Ke:

### Tareeqa 1: Existing File Replace Karein (Sab Se Aasan - Zero Code Change)
Agar aap apni nayi photo ko inhi naamon se save kar ke upload kar dein:
- `lead_mixologist.jpg`
- `drink_cosmopolitan.jpg`
- `luxury_bar_hero.jpg`
- `founder_portrait.jpg`
- `event_celebration.jpg`

Toh aapko koi bhi code change karne ki zaroorat nahi paregi! Website par automatically aapki nayi real image show ho jayegi.

---

### Tareeqa 2: Nayi Image Kisi Bhi Naam Se Upload Kar Ke Link Karein
Agar aap apni photo kisi aur naam se upload karte hain (maslan `my_wedding_bar.jpg` ya `event_pic1.png`):

1. Photo ko `src/assets/images/` mein upload karein.
2. File `src/assets/images.ts` open karein aur import add karein:
   ```ts
   import myNewBarImage from './images/my_wedding_bar.jpg';

   export const REAL_ASSET_IMAGES = {
     luxuryBarSetup: myNewBarImage,
     // ...
   };
   ```
3. Vite automatically is photo ko compile karega aur Vercel par bina kisi maslay ke 100% load karega!
