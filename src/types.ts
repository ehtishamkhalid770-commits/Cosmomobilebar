export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  perfectFor: string;
  features: string[];
  popularPairing: string;
}

export interface CocktailItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'signature' | 'classic' | 'tropical' | 'mocktail';
  spirit: string;
  flavorProfile: string[];
  description: string;
  glassware: string;
  garnish: string;
  image: string;
  isPopular?: boolean;
}

export interface PackageTier {
  id: string;
  name: string;
  tagline: string;
  price: number;
  perGuestNote: string;
  idealGuests: string;
  hours: number;
  bartendersCount: number;
  features: string[];
  highlight: boolean;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  eventType: string;
  location: string;
  date: string;
  rating: number;
  comment: string;
}

export interface AddonOption {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: string;
}

export interface CalculatorState {
  eventType: string;
  guestCount: number;
  durationHours: number;
  packageId: string;
  selectedAddons: string[];
  selectedCocktails: string[];
}

export interface WordPressSectionSpec {
  sectionId: string;
  sectionTitle: string;
  elementorContainer: string;
  wpLayout: string;
  recommendedWidgets: string[];
  colorTokens: {
    bg: string;
    text: string;
    accent: string;
  };
  typography: string;
  devNotes: string;
}
