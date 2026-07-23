export interface MatchedProduct {
  brand: string;
  productName: string;
  tier: 'standard' | 'premium' | 'luxury';
  costRange: string;
}

export interface ConceptTemplate {
  id: string;
  name: string;
  cabinetStyle: string;
  cabinetFinish: string;
  cabinetColorGroup: 'white' | 'wood' | 'grey-black' | 'blue';
  quartzStyle: string;
  quartzFamily: string;
  backsplash: string;
  hardware: string;
  explanation: string;
  image: string;
  imageNoIsland?: string;
  matchedCabinets: string;
  matchedQuartz: MatchedProduct[];
}

export const CONCEPT_TEMPLATES: ConceptTemplate[] = [
  {
    id: 'warm-organic-modern',
    name: 'Warm Organic Modern',
    cabinetStyle: 'Flat Panel',
    cabinetFinish: 'Pure White (Uppers) + Smoked Oak (Bases)',
    cabinetColorGroup: 'wood',
    quartzStyle: 'Calacatta Gold Quartz',
    quartzFamily: 'Warm white with soft gold & grey veining',
    backsplash: 'Full-height matching Calacatta Gold quartz backsplash',
    hardware: 'Brushed Champagne Bronze / Brass slim pull bars',
    explanation: 'Leverages rich, organic Smoked Oak base cabinets grounded by clean white uppers. The gold veining in the quartz countertop pulls the warm wood and metallic brass hardware together for a cozy yet modern organic feel.',
    image: '/images/typical_kitchen_upgrade.png',
    imageNoIsland: '/images/dark_wood_no_island.png',
    matchedCabinets: 'Essential Flat Panel (Pure White & Smoked Oak)',
    matchedQuartz: [
      { brand: 'Kasa Quartz', productName: '9911 Calacatta Gold', tier: 'premium', costRange: '$69–$95 / sq ft' },
      { brand: 'Kstone', productName: 'K1069 Taj Mahal', tier: 'luxury', costRange: '$100–$170 / sq ft' }
    ]
  },
  {
    id: 'classic-white-shaker',
    name: 'Classic Bright Shaker',
    cabinetStyle: 'Shaker',
    cabinetFinish: 'White Shaker (Painted Finish)',
    cabinetColorGroup: 'white',
    quartzStyle: 'Carrara Marble-Look Quartz',
    quartzFamily: 'Stark white with delicate grey veining',
    backsplash: 'Light grey beveled ceramic subway tile in a herringbone pattern',
    hardware: 'Brushed Nickel classic handles or cup pulls',
    explanation: 'A timeless, bright transitional style that maximizes light reflection. The classic white shaker cabinets feel open and airy, paired with subtle grey-veined quartz for an upscale look with zero maintenance.',
    image: '/images/white_shaker_kitchen_hero.png',
    imageNoIsland: '/images/white_shaker_no_island.png',
    matchedCabinets: 'Premium Shaker (White Shaker)',
    matchedQuartz: [
      { brand: 'TCE Stone', productName: 'TCE 4032 Calacatta Flow', tier: 'premium', costRange: '$69–$95 / sq ft' },
      { brand: 'Caesarstone', productName: '5111 Statuario Nuvo', tier: 'luxury', costRange: '$100–$170 / sq ft' }
    ]
  },
  {
    id: 'modern-contrast',
    name: 'Modern Contemporary Contrast',
    cabinetStyle: 'Matte Flat Panel',
    cabinetFinish: 'Matt White (Uppers) + Matt Grey (Bases)',
    cabinetColorGroup: 'grey-black',
    quartzStyle: 'Concrete-Look / Sleek Cement Quartz',
    quartzFamily: 'Mid-tone matte grey or slate finish',
    backsplash: 'Coordinating matte grey slab backsplash or textured porcelain tile',
    hardware: 'Matte Black modern T-bar pulls',
    explanation: 'A clean, architectural layout utilizing high-contrast tones. The matte grey bases provide a sophisticated, grounded baseline while the matte black hardware and concrete-style tops add a modern industrial edge.',
    image: '/images/kitchen_and_quartz_hero.jpg',
    imageNoIsland: '/images/dark_wood_no_island.png',
    matchedCabinets: 'Premium Matte Flat Panel (Matt White & Matt Grey)',
    matchedQuartz: [
      { brand: 'Lucent Quartz', productName: 'Sleek Cement', tier: 'standard', costRange: '$48–$68 / sq ft' },
      { brand: 'TCE Stone', productName: 'TCE 2012 Speckled Cream', tier: 'standard', costRange: '$48–$68 / sq ft' }
    ]
  },
  {
    id: 'minimalist-high-gloss',
    name: 'Minimalist High-Gloss',
    cabinetStyle: 'High Gloss Flat Panel',
    cabinetFinish: 'Gloss White (All Cabinets)',
    cabinetColorGroup: 'white',
    quartzStyle: 'Pure White Crystal Quartz',
    quartzFamily: 'Solid pure white polished finish',
    backsplash: 'Reflective white glass panel or matching pure white quartz slab',
    hardware: 'Integrated J-pull handless profiles (no handles)',
    explanation: 'Maximizes space and light using ultra-glossy, handle-less cabinets. The mirror-like doors and pure white countertops reflect light across the room, making it perfect for smaller condo layouts in downtown Toronto.',
    image: '/images/modern_kitchen_hero.jpg',
    imageNoIsland: '/images/gloss_white_no_island.png',
    matchedCabinets: 'Premium High Gloss (Gloss White)',
    matchedQuartz: [
      { brand: 'TCE Stone', productName: 'TCE 4001 Pure White', tier: 'standard', costRange: '$48–$68 / sq ft' },
      { brand: 'Lucent Quartz', productName: 'Arctic White', tier: 'standard', costRange: '$48–$68 / sq ft' }
    ]
  },
  {
    id: 'nordic-light-wood',
    name: 'Nordic Light Wood',
    cabinetStyle: 'Flat Panel',
    cabinetFinish: 'Whitish Maple (All Cabinets)',
    cabinetColorGroup: 'wood',
    quartzStyle: 'Speckled Cream / Light Sand Quartz',
    quartzFamily: 'Warm off-white or beige with micro-specks',
    backsplash: 'Vertical stack neutral Zellige tile',
    hardware: 'Minimalist brushed steel slim edge-pulls',
    explanation: 'Inspired by Scandinavian warmth and organic textures. Whitish Maple flat panels bring light and grain detail, matching warm beige speckled quartz and vertical tile for a soothing, textured organic atmosphere.',
    image: '/images/natural_wood_flat_panel.png',
    imageNoIsland: '/images/smoked_oak_flat_panel.jpg',
    matchedCabinets: 'Essential Flat Panel (Whitish Maple)',
    matchedQuartz: [
      { brand: 'TCE Stone', productName: 'Speckled Cream', tier: 'standard', costRange: '$48–$68 / sq ft' },
      { brand: 'Kasa Quartz', productName: 'KY066 Taj Mahal', tier: 'premium', costRange: '$69–$95 / sq ft' }
    ]
  },
  {
    id: 'transitional-navy',
    name: 'Transitional Bold Navy',
    cabinetStyle: 'Shaker',
    cabinetFinish: 'White Shaker (Perimeters) + Blue Shaker (Island/Accent)',
    cabinetColorGroup: 'blue',
    quartzStyle: 'Calacatta Gold Luxury Quartz',
    quartzFamily: 'Bright white with dramatic gold & grey veins',
    backsplash: 'White textured subway tile with brass grout detailing',
    hardware: 'Polished Brass cup pulls and knobs',
    explanation: 'A dramatic, high-end design featuring a bold navy blue accent or island contrasted against clean white perimeter cabinetry. The dramatic veined quartz spans the island, serving as the central artwork of the kitchen.',
    image: '/images/cabinet_cities_hero_common.jpg',
    imageNoIsland: '/images/dark_wood_no_island.png',
    matchedCabinets: 'Premium Shaker (White & Blue Shaker)',
    matchedQuartz: [
      { brand: 'Kasa Quartz', productName: 'Calacatta Gold', tier: 'premium', costRange: '$69–$95 / sq ft' },
      { brand: 'Caesarstone', productName: '5131 Calacatta Nuvo', tier: 'luxury', costRange: '$100–$170 / sq ft' }
    ]
  },
  {
    id: 'refined-slim-shaker',
    name: 'Refined Slim Shaker',
    cabinetStyle: 'Slim Shaker',
    cabinetFinish: 'Slim Shaker White (All Cabinets)',
    cabinetColorGroup: 'white',
    quartzStyle: 'Satin Marble-Look Quartz',
    quartzFamily: 'Polished white with thin, sharp charcoal veins',
    backsplash: 'Full-height matching slab backsplash',
    hardware: 'Slim matte black pull handles',
    explanation: 'Provides a modern take on the traditional shaker. The delicate, narrow border frames on the doors are paired with slim black hardware and clean veined quartz for a contemporary, transitional aesthetic.',
    image: '/images/slim_shaker_kitchen_hero.jpg',
    imageNoIsland: '/images/gloss_white_no_island.png',
    matchedCabinets: 'Elite Slim Shaker (Slim Shaker White)',
    matchedQuartz: [
      { brand: 'Kstone', productName: 'K1056 Arabescato White', tier: 'premium', costRange: '$69–$95 / sq ft' },
      { brand: 'Caesarstone', productName: '5111 Statuario Nuvo', tier: 'luxury', costRange: '$100–$170 / sq ft' }
    ]
  }
];

/**
 * Matches a user's style and cabinet color preferences to 2 distinct design templates.
 */
export function getMatchedConcepts(
  preferredStyle: string = 'Modern', 
  preferredColor: string = 'white'
): ConceptTemplate[] {
  const safeColor = (preferredColor || 'white').toLowerCase();
  const safeStyle = (preferredStyle || 'Modern').toLowerCase();

  const scored = CONCEPT_TEMPLATES.map(t => {
    let score = 0;
    if (t.cabinetColorGroup === safeColor) score += 4;
    
    const styleLower = t.cabinetStyle.toLowerCase();
    if (styleLower.includes(safeStyle) || safeStyle.includes(styleLower)) score += 2;
    
    return { template: t, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const conceptA = scored[0].template;
  // Select a distinct second concept with highest score that is not conceptA
  let conceptB = scored.find(item => item.template.id !== conceptA.id && item.template.name !== conceptA.name)?.template;
  
  if (!conceptB) {
    conceptB = scored.find(item => item.template.id !== conceptA.id)?.template || CONCEPT_TEMPLATES[1];
  }

  return [conceptA, conceptB];
}

/**
 * Rules-based price estimator for package pricing ranges
 */
export function calculatePackageRange(
  scope: 'countertops' | 'cabinets-countertops' | 'full-refresh',
  size: 'small' | 'medium' | 'large',
  cabinetTier: 'essential' | 'premium' | 'elite',
  quartzTier: 'standard' | 'premium' | 'luxury',
  hasIsland: boolean,
  isCondo: boolean
) {
  // Baseline pricing ranges by scope and size
  let baseLow = 0;
  let baseHigh = 0;

  if (scope === 'countertops') {
    if (size === 'small') { baseLow = 2200; baseHigh = 3800; }
    else if (size === 'medium') { baseLow = 3500; baseHigh = 5500; }
    else { baseLow = 5000; baseHigh = 8500; }
  } else if (scope === 'cabinets-countertops') {
    if (size === 'small') { baseLow = 6500; baseHigh = 9500; }
    else if (size === 'medium') { baseLow = 10000; baseHigh = 16000; }
    else { baseLow = 14500; baseHigh = 24000; }
  } else { // full-refresh
    if (size === 'small') { baseLow = 9500; baseHigh = 15000; }
    else if (size === 'medium') { baseLow = 15000; baseHigh = 26000; }
    else { baseLow = 22000; baseHigh = 39000; }
  }

  // Adjustments for cabinet tier
  if (scope !== 'countertops') {
    if (cabinetTier === 'premium') { baseLow *= 1.15; baseHigh *= 1.15; }
    else if (cabinetTier === 'elite') { baseLow *= 1.30; baseHigh *= 1.30; }
  }

  // Adjustments for quartz tier
  if (quartzTier === 'premium') { baseLow *= 1.20; baseHigh *= 1.20; }
  else if (quartzTier === 'luxury') { baseLow *= 1.40; baseHigh *= 1.40; }

  // Island premium
  if (hasIsland) {
    baseLow += 1200;
    baseHigh += 2500;
  }

  // Condo logistics adjustment
  if (isCondo) {
    baseLow += 300;
    baseHigh += 700;
  }

  // Round to nearest 500 for clean packaging
  const roundLow = Math.round(baseLow / 500) * 500;
  const roundHigh = Math.round(baseHigh / 500) * 500;

  return {
    low: roundLow,
    high: roundHigh
  };
}
