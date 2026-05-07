
export interface SlabMaterial {
  id: string;
  name: string;
  brand: string;
  priceRange: string;
  typicalCost: string;
  category: 'white' | 'marble' | 'grey' | 'warm' | 'dark';
  img: string;
  description: string;
  features: string[];
}

export const materials: SlabMaterial[] = [
  {
    id: 'calacatta-gold',
    name: 'Calacatta Gold',
    brand: 'Caesarstone',
    priceRange: '$90 – $110',
    typicalCost: '$5,000 – $9,000',
    category: 'marble',
    img: 'https://images.unsplash.com/photo-1565183928294-7065123ee2e4?auto=format&fit=crop&q=80&w=1200',
    description: 'The ultimate marble-style quartz featuring a crisp white background with bold, gold-tinted veining.',
    features: [
      'Elegant marble-style veining',
      'Brightens kitchen space',
      'Works with modern and classic designs',
      'One of the most popular choices'
    ]
  },
  {
    id: 'empira-white',
    name: 'Empira White',
    brand: 'Caesarstone',
    priceRange: '$85 – $105',
    typicalCost: '$4,800 – $8,500',
    category: 'white',
    img: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200',
    description: 'A timeless interpretation of white marble with fine, dark veining that adds depth and movement.',
    features: [
      'Sophisticated white base',
      'Fine, natural-looking veins',
      'Extremely durable surface',
      'Timeless aesthetic'
    ]
  },
  {
    id: 'brittanicca-warm',
    name: 'Brittanicca Warm',
    brand: 'Cambria',
    priceRange: '$110 – $130',
    typicalCost: '$6,500 – $11,000',
    category: 'warm',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200',
    description: 'Warm, creamy tones with large-scale, flowing veins that create a striking center-piece.',
    features: [
      'Warm, inviting color palette',
      'Bold, dramatic movement',
      'High-gloss polished finish',
      'Made in North America'
    ]
  },
  {
    id: 'rugged-concrete',
    name: 'Rugged Concrete',
    brand: 'Caesarstone',
    priceRange: '$85 – $100',
    typicalCost: '$4,500 – $7,500',
    category: 'grey',
    img: 'https://images.unsplash.com/photo-1556912167-75b84294edf3?auto=format&fit=crop&q=80&w=1200',
    description: 'An authentic industrial look with a textured feel and varied grey tones.',
    features: [
      'Industrial chic aesthetic',
      'Unique textured finish',
      'Low maintenance concrete alternative',
      'Durable for busy kitchens'
    ]
  }
];
