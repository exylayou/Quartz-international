export interface Material {
  id: string;
  name: string;
  description: string;
  basePrice: number; // per sq ft
  image: string;
}

export const MATERIALS: Material[] = [
  {
    id: "quartz",
    name: "Quartz",
    description: "Durable, non-porous, and available in a wide variety of colors.",
    basePrice: 65,
    image: "https://picsum.photos/seed/quartz/800/600",
  },
];

export interface CalculatorState {
  step: number;
  kitchenSize: number; // sq ft
  hasIsland: boolean;
  quartzLevel: 'standard' | 'premium' | 'luxury';
  includeCabinets: boolean;
  cabinetSize: number; // linear ft
  cabinetStyle: 'flat_panel' | 'shaker' | 'matte' | 'gloss';
  cabinetExtras: {
    island: boolean;
    pantry: boolean;
    decorativePanels: boolean;
  };
  extras: {
    sink: boolean;
    cooktop: boolean;
    backsplash: boolean;
    waterfall: boolean;
    removal: boolean;
  };
  timeline: 'asap' | '1-3-months' | 'exploring';
}

export const INITIAL_CALC_STATE: CalculatorState = {
  step: 1,
  kitchenSize: 40,
  hasIsland: false,
  quartzLevel: 'premium',
  includeCabinets: false,
  cabinetSize: 20,
  cabinetStyle: 'shaker',
  cabinetExtras: {
    island: false,
    pantry: false,
    decorativePanels: false,
  },
  extras: {
    sink: false,
    cooktop: false,
    backsplash: false,
    waterfall: false,
    removal: false,
  },
  timeline: '1-3-months',
};

// Pricing Constants (Updated Flow - Clean Version)
export const PRICING_CONSTANTS = {
  LEVELS: {
    standard: { low: 70, high: 90 },
    premium: { low: 90, high: 110 },
    luxury: { low: 110, high: 140 },
  },
  ISLAND_ADD: {
    standard: 350,
    premium: 750,
    luxury: 1250,
  },
  CABINETS: {
    flat_panel: { low: 300, high: 600 },
    shaker: { low: 400, high: 800 },
    matte: { low: 500, high: 1000 },
    gloss: { low: 500, high: 1000 },
  },
  EXTRAS: {
    sink: 150,
    cooktop: 150,
    backsplash: { low: 20, high: 35 }, // per sq ft
    waterfall: { low: 1200, high: 2500 },
    removal: { low: 300, high: 800 },
  },
  CABINET_EXTRAS: {
    pantry: { low: 1000, high: 3000 },
    island: { low: 1500, high: 4000 },
    decorativePanels: { low: 500, high: 1500 },
  }
};
