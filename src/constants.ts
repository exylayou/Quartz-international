// ─── Pricing Constants ──────────────────────────────────────────────────────

export const PRICING_CONSTANTS = {
  LEVELS: {
    standard: { low: 48, high: 68 },
    premium:  { low: 69, high: 95 },
    luxury:   { low: 100, high: 170 },
  },
  ISLAND_ADD: {
    standard: 800,
    premium:  1200,
    luxury:   2000,
  },
  EXTRAS: {
    sink:       350,
    cooktop:    250,
    backsplash: { low: 12, high: 20 },
    waterfall:  { low: 600, high: 1200 },
    removal:    { low: 300, high: 600 },
  },
  CABINETS: {
    rta: {
      essential: { low: 105, high: 155 },
      premium:   { low: 153, high: 210 },
      elite:     { low: 165, high: 225 },
    },
    rti: {
      essential: { low: 112, high: 165 },
      premium:   { low: 160, high: 215 },
      elite:     { low: 170, high: 230 },
    },
    installed: {
      essential: { low: 190, high: 230 },
      premium:   { low: 235, high: 290 },
      elite:     { low: 245, high: 310 },
    },
  },
  CABINET_EXTRAS: {
    pantry:           { low: 800,  high: 1600 },
    island:           { low: 1200, high: 2400 },
    decorativePanels: { low: 400,  high: 800  },
  },
  CABINET_EXTRA_MULTIPLIERS: {
    rta: 0.55,
    rti: 0.59,
    installed: 1.0,
  },
} as const;

// ─── Calculator State ────────────────────────────────────────────────────────

export interface CalculatorState {
  step: number;
  kitchenSize: number;
  kitchenLinearFt: number;
  quartzLevel: 'standard' | 'premium' | 'luxury';
  hasIsland: boolean;
  islandType: 'none' | 'small' | 'large' | 'waterfall';
  includeCabinets: boolean;
  cabinetSize: number;
  cabinetStyle: 'essential' | 'premium' | 'elite';
  deliveryMethod: 'rta' | 'rti' | 'installed';
  selectedCabinetStyle?: string;
  extras: {
    sink: boolean;
    cooktop: boolean;
    backsplash: boolean;
    waterfall: boolean;
    removal: boolean;
  };
  cabinetExtras: {
    pantry: boolean;
    island: boolean;
    decorativePanels: boolean;
  };
  timeline: 'asap' | '1-3-months' | 'exploring';
}

export const INITIAL_CALC_STATE: CalculatorState = {
  step: 1,
  kitchenSize: 35,
  kitchenLinearFt: 20,
  quartzLevel: 'standard',
  hasIsland: false,
  islandType: 'none',
  includeCabinets: false,
  cabinetSize: 20,
  cabinetStyle: 'essential',
  deliveryMethod: 'rta',
  extras: {
    sink: false,
    cooktop: false,
    backsplash: false,
    waterfall: false,
    removal: false,
  },
  cabinetExtras: {
    pantry: false,
    island: false,
    decorativePanels: false,
  },
  timeline: 'asap',
};

// ─── Materials ───────────────────────────────────────────────────────────────

export interface Material {
  id: string;
  name: string;
  description: string;
  image: string;
  basePrice: number;
}

export const MATERIALS: Material[] = [
  {
    id: 'quartz',
    name: 'Quartz',
    description: 'Engineered quartz surfaces offer the perfect blend of beauty and durability for modern kitchens.',
    image: 'https://picsum.photos/seed/quartz1/1200/800',
    basePrice: 65,
  },
  {
    id: 'caesarstone',
    name: 'Caesarstone',
    description: 'Premium engineered quartz from the world\'s leading manufacturer, known for exceptional quality and design.',
    image: 'https://picsum.photos/seed/caesarstone1/1200/800',
    basePrice: 90,
  },
  {
    id: 'silestone',
    name: 'Silestone',
    description: 'Hybrid mineral surfaces combining quartz and recycled materials for a sustainable, stunning finish.',
    image: 'https://picsum.photos/seed/silestone1/1200/800',
    basePrice: 85,
  },
  {
    id: 'porcelain',
    name: 'Porcelain',
    description: 'Ultra-compact porcelain surfaces with unmatched hardness and resistance to heat, scratches, and stains.',
    image: 'https://picsum.photos/seed/porcelain1/1200/800',
    basePrice: 75,
  },
  {
    id: 'marble',
    name: 'Marble',
    description: 'Timeless natural marble with unique veining patterns, bringing luxury and elegance to any kitchen.',
    image: 'https://picsum.photos/seed/marble1/1200/800',
    basePrice: 110,
  },
  {
    id: 'granite',
    name: 'Granite',
    description: 'Natural granite countertops offer unmatched durability and one-of-a-kind patterns from deep within the earth.',
    image: 'https://picsum.photos/seed/granite1/1200/800',
    basePrice: 70,
  },
];
