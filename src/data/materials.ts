
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
    id: 'caesarstone-5112',
    name: '5112 Aterra Blanca',
    brand: 'Caesarstone',
    priceRange: '$92 – $126',
    typicalCost: '$4,800 – $8,000',
    category: 'warm',
    img: '/images/slabs/aterra-blanca.jpg',
    description: 'A misty white quartz base with delicate, translucent warm-grey veining and hints of golden-copper flecks.',
    features: [
      'Warm misty white base',
      'Translucent grey veining',
      'Stain and scratch resistant',
      'Polished premium finish'
    ]
  },
  {
    id: 'caesarstone-4044',
    name: '4044 Airy Concrete',
    brand: 'Caesarstone',
    priceRange: '$103 – $144',
    typicalCost: '$4,500 – $7,500',
    category: 'grey',
    img: '/images/slabs/airy-concrete.jpg',
    description: 'A soft grey base textured with dark and white spots, capturing the raw industrial look of concrete in a lightweight design.',
    features: [
      'Industrial concrete look',
      'Textured matte appearance',
      'Highly stain resistant',
      'Durable engineered surface'
    ]
  },
  {
    id: 'caesarstone-5810',
    name: '5810 Black Tempal',
    brand: 'Caesarstone',
    priceRange: '$103 – $144',
    typicalCost: '$5,000 – $8,500',
    category: 'dark',
    img: '/images/slabs/black-tempal.jpg',
    description: 'A dramatic black charcoal base textured with soft mineral clouds, evoking the raw look of dark natural stone.',
    features: [
      'Raw dark stone texture',
      'Sophisticated charcoal base',
      'Non-porous hygienic quartz',
      'High impact resistance'
    ]
  },
  {
    id: 'caesarstone-5131',
    name: '5131 Calacatta Nuvo',
    brand: 'Caesarstone',
    priceRange: '$139 – $201',
    typicalCost: '$4,950 – $8,500',
    category: 'marble',
    img: 'https://images.unsplash.com/photo-1618221652467-33d325785f7a?auto=format&fit=crop&q=80&w=1200',
    description: 'Caesarstone\'s interpretation of natural Calacatta marble, showing cascading thick grey veins on a white base.',
    features: [
      'Cascading grey veins',
      'Warm white marble look',
      'Stain and scratch resistant',
      'Elite centerpiece design'
    ]
  },
  {
    id: 'caesarstone-5111',
    name: '5111 Statuario Nuvo',
    brand: 'Caesarstone',
    priceRange: '$103 – $144',
    typicalCost: '$3,850 – $6,250',
    category: 'marble',
    img: '/images/slabs/statuario-nuvo.jpg',
    description: 'A refined white base featuring delicate, soft grey veins that flow gracefully across the slab.',
    features: [
      'Delicate flowing veins',
      'Bright Statuario marble look',
      'Durable non-porous structure',
      'Low maintenance luxury'
    ]
  },
  {
    id: 'caesarstone-5141',
    name: '5141 Frosty Carrina',
    brand: 'Caesarstone',
    priceRange: '$103 – $144',
    typicalCost: '$3,850 – $6,250',
    category: 'white',
    img: '/images/slabs/frosty-carrina.jpg',
    description: 'A soft ivory white base detailed with delicate, powdery grey veins for a subtle and elegant marble look.',
    features: [
      'Ivory white base',
      'Powdery grey veining',
      'Highly scratch resistant',
      'Timeless sophisticated look'
    ]
  },
  {
    id: 'caesarstone-5031',
    name: '5031 Statuario Maximus',
    brand: 'Caesarstone',
    priceRange: '$139 – $201',
    typicalCost: '$4,950 – $8,500',
    category: 'marble',
    img: '/images/slabs/statuario-maximus.jpg',
    description: 'A grand-scale marble design with prominent broad warm grey veins sweeping across a soft white background.',
    features: [
      'Grand-scale Statuario design',
      'Broad warm grey veining',
      'Polished premium marble look',
      'Durable non-porous surface'
    ]
  },
  {
    id: 'caesarstone-5151',
    name: '5151 Empira White',
    brand: 'Caesarstone',
    priceRange: '$139 – $201',
    typicalCost: '$5,500 – $9,000',
    category: 'marble',
    img: '/images/slabs/empira-white.jpg',
    description: 'A classical white base quartz highlighted by thin, delicate dark grey veins that web across the slab.',
    features: [
      'Classical pure white base',
      'Fine dark grey webbed veining',
      'Highly scratch and heat resistant',
      'Elegant centerpiece appeal'
    ]
  },
  {
    id: 'ciq2003-sleek-cement',
    name: 'CIQ2003 – Sleek Cement',
    brand: 'Lucent Quartz',
    priceRange: '$53 – $63',
    typicalCost: '$4,500 – $7,500',
    category: 'grey',
    img: '/images/slabs/ciq2003-sleek-cement.jpg',
    description: 'A contemporary grey concrete-look quartz presenting a soft grey base styled to capture the sleek look of polished concrete.',
    features: [
      'Industrial concrete aesthetic',
      'Sleek matte-polished grey base',
      'Extremely durable surface',
      'Low maintenance modern style'
    ]
  },
  {
    id: 'ciq4211-bianco-carrara',
    name: 'CIQ4211 – Bianco Carrara',
    brand: 'Lucent Quartz',
    priceRange: '$51 – $59',
    typicalCost: '$4,500 – $7,500',
    category: 'marble',
    img: '/images/slabs/ciq4211-bianco-carrara.jpg',
    description: 'A premium white marble-look quartz featuring soft, classic Carrara grey veining.',
    features: [
      'Elegant Bianco Carrara pattern',
      'Delicate grey veining',
      'Highly scratch and heat resistant',
      'Polished premium finish'
    ]
  },
  {
    id: 'lq6754-serenity-gold',
    name: 'LQ6754 – Serenity Gold',
    brand: 'Lucent Quartz',
    priceRange: '$78 – $103',
    typicalCost: '$5,000 – $8,500',
    category: 'marble',
    img: '/images/slabs/lq6754-serenity-gold.jpg',
    description: 'A beautiful and dramatic white marble quartz accented with subtle golden and grey veins.',
    features: [
      'Subtle golden highlight veining',
      'Sophisticated marble-look',
      'Low maintenance luxury',
      'Excellent for large kitchen islands'
    ]
  },
  {
    id: 'ciq4111-bianco-oro',
    name: 'CIQ4111 – Bianco Oro',
    brand: 'Lucent Quartz',
    priceRange: '$51 – $59',
    typicalCost: '$4,800 – $8,000',
    category: 'marble',
    img: '/images/slabs/ciq4111-bianco-oro.jpg',
    description: 'A refined marble quartz presenting a crisp white base highlighted by warm golden tones.',
    features: [
      'Soft golden-grey veining',
      'Warm white aesthetic',
      'Stain and chemical resistant',
      'Certified indoor air quality'
    ]
  },
  {
    id: 'lq4600-arctic-white',
    name: 'LQ4600 – Arctic White',
    brand: 'Lucent Quartz',
    priceRange: '$63 – $79',
    typicalCost: '$3,500 – $6,000',
    category: 'white',
    img: '/images/slabs/lq4600-arctic-white.jpg',
    description: 'A solid, brilliant white quartz surface that delivers a clean and ultra-modern aesthetic.',
    features: [
      'Pure solid white base',
      'Highly consistent pattern',
      'Extreme durability',
      'Brightens up cabinetry colors'
    ]
  },
  {
    id: 'lq5131-calacatta',
    name: 'LQ5131 – Calacatta',
    brand: 'Lucent Quartz',
    priceRange: '$56 – $67',
    typicalCost: '$5,500 – $9,000',
    category: 'marble',
    img: '/images/slabs/lq5131-calacatta.jpg',
    description: 'A stunning interpretation of classic Italian Calacatta marble, boasting bold and striking grey veins.',
    features: [
      'Bold dramatic Calacatta veining',
      'Premium luxury statement piece',
      'Perfect for backsplashes',
      'High impact resistance'
    ]
  },

  {
    id: 'k8801',
    name: 'K8801 – Calacatta Oro',
    brand: 'Kasa Quartz',
    priceRange: '$49 – $56',
    typicalCost: '$1,950 – $2,800',
    category: 'marble',
    img: '/images/slabs/k8801.jpg',
    description: 'A rich Calacatta Oro quartz featuring warm gold and subtle grey organic veining across a soft white field.',
    features: [
      'Calacatta Oro veining',
      'Warm gold & grey accents',
      'Luxurious marble look',
      'Non-porous surface'
    ]
  },
  {
    id: 'k8802',
    name: 'K8802',
    brand: 'Kasa Quartz',
    priceRange: '$49 – $56',
    typicalCost: '$1,950 – $2,800',
    category: 'marble',
    img: '/images/slabs/k8802.jpg',
    description: 'A beautiful white-based Calacatta quartz featuring refined grey veining for a contemporary kitchen design.',
    features: [
      'Calacatta series design',
      'Modern white background',
      'Stain and scratch resistant',
      'Non-porous hygienic surface'
    ]
  },
  {
    id: 'k8803',
    name: 'K8803',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $55',
    typicalCost: '$1,900 – $2,750',
    category: 'marble',
    img: '/images/slabs/k8803.jpg',
    description: 'A classic Calacatta quartz presenting a clean white background with graceful, flowing grey veining.',
    features: [
      'Graceful grey veins',
      'Timeless marble appearance',
      'Low maintenance luxury',
      'GTA homeowner favorite'
    ]
  },
  {
    id: 'k8811',
    name: 'K8811 – Calacatta Alto',
    brand: 'Kasa Quartz',
    priceRange: '$50 – $58',
    typicalCost: '$2,000 – $2,900',
    category: 'marble',
    img: '/images/slabs/k8811.jpg',
    description: 'Bold sweeping grey marble veining with pristine clarity over a crisp polished white quartz background.',
    features: [
      'Calacatta Alto style',
      'Bold sweeping veins',
      'High-definition polish',
      'Stain & scratch resistant'
    ]
  },
  {
    id: 'k8813',
    name: 'K8813',
    brand: 'Kasa Quartz',
    priceRange: '$49 – $56',
    typicalCost: '$1,950 – $2,800',
    category: 'white',
    img: '/images/slabs/k8813.jpg',
    description: 'A premium Calacatta White quartz slab offering a bright, crisp surface that is highly reflective and durable.',
    features: [
      'Bright Calacatta White base',
      'Consistent, pristine finish',
      'Highly stain resistant',
      'Complements any cabinet style'
    ]
  },
  {
    id: 'k8825',
    name: 'K8825',
    brand: 'Kasa Quartz',
    priceRange: '$50 – $58',
    typicalCost: '$2,000 – $2,900',
    category: 'marble',
    img: '/images/slabs/k8825.jpg',
    description: 'An elegant polished quartz showing natural marble texture with bold architectural grey patterns.',
    features: [
      'Deep design depth',
      'Polished luxury finish',
      'Perfect for islands and backsplashes',
      'Superior impact resistance'
    ]
  },
  {
    id: 'k8826',
    name: 'K8826 – Calacatta Negro',
    brand: 'Kasa Quartz',
    priceRange: '$51 – $59',
    typicalCost: '$2,100 – $3,000',
    category: 'dark',
    img: '/images/slabs/k8826.jpg',
    description: 'Dramatic black quartz crossed by striking white and silver lightning-bolt veins for high contrast luxury.',
    features: [
      'Calacatta Negro dark series',
      'Striking white veining',
      'High-contrast luxury',
      'Statement island design'
    ]
  },
  {
    id: 'k8831',
    name: 'K8831 – Calacatta Verona',
    brand: 'Kasa Quartz',
    priceRange: '$50 – $59',
    typicalCost: '$2,000 – $2,950',
    category: 'marble',
    img: '/images/slabs/k8831.jpg',
    description: 'Classic Italian Verona marble aesthetic featuring soft charcoal veining across a bright white base.',
    features: [
      'Calacatta Verona marble look',
      'Soft charcoal veining',
      'Bright white base',
      'Zero sealing required'
    ]
  },
  {
    id: 'k8833',
    name: 'K8833 – Calacatta Venice',
    brand: 'Kasa Quartz',
    priceRange: '$50 – $58',
    typicalCost: '$2,000 – $2,900',
    category: 'marble',
    img: '/images/slabs/k8833.jpg',
    description: 'Venetian-inspired white quartz with delicate, interconnected grey marble veining paths.',
    features: [
      'Calacatta Venice design',
      'Interconnected grey veins',
      'Venetian elegance',
      'Ideal for waterfall islands'
    ]
  },
  {
    id: 'k8835',
    name: 'K8835 – Calacatta Lago',
    brand: 'Kasa Quartz',
    priceRange: '$50 – $58',
    typicalCost: '$2,000 – $2,900',
    category: 'marble',
    img: '/images/slabs/k8835.jpg',
    description: 'Serene lake-inspired Calacatta quartz presenting soft smoky grey waves over a pristine white field.',
    features: [
      'Calacatta Lago veining',
      'Soft smoky grey waves',
      'Serene white background',
      'Durable & hygienic'
    ]
  },
  {
    id: 'k8836',
    name: 'K8836 – Calacatta Clara',
    brand: 'Kasa Quartz',
    priceRange: '$50 – $58',
    typicalCost: '$2,000 – $2,900',
    category: 'marble',
    img: '/images/slabs/kasa-k8836.jpg',
    description: 'Refined Calacatta quartz presenting clean off-white field detailed with subtle, elegant grey veining.',
    features: [
      'Calacatta Clara design',
      'Refined grey veining',
      'Clean off-white field',
      'GTA homeowner favorite'
    ]
  },
  {
    id: 'k8837',
    name: 'K8837',
    brand: 'Kasa Quartz',
    priceRange: '$50 – $59',
    typicalCost: '$2,000 – $2,950',
    category: 'marble',
    img: '/images/slabs/k8837.jpg',
    description: 'A high-definition Calacatta quartz presenting a delicate off-white base with soft, subtle veining.',
    features: [
      'Soft subtle veining',
      'Warm white aesthetics',
      'No sealing required',
      'Eco-friendly manufacturing'
    ]
  },
  {
    id: 'k9916',
    name: 'K9916',
    brand: 'Kasa Quartz',
    priceRange: '$50 – $58',
    typicalCost: '$2,000 – $2,900',
    category: 'marble',
    img: '/images/slabs/k9916.jpg',
    description: 'A premium, complex Calacatta polished slab with dramatic, striking grey veins that create a bold statement.',
    features: [
      'Intricate, dramatic veining',
      'Top-tier premium model',
      'High-gloss luxury polish',
      'Stunning centerpiece design'
    ]
  },
  {
    id: 'tce-9001',
    name: 'TCE 9001 – Pure White',
    brand: 'TCE Stone',
    priceRange: '$48 – $54',
    typicalCost: '$1,900 – $2,700',
    category: 'white',
    img: '/images/slabs/tce-9001.webp',
    description: 'A solid and minimalist pure white quartz offering a clean, uniform, and bright modern aesthetic.',
    features: [
      'Solid pure white tone',
      'Consistent, uniform finish',
      'Stain and scratch resistant',
      'Perfect modern look'
    ]
  },
  {
    id: 'tce-4052',
    name: 'TCE 4052 – Natural Cream',
    brand: 'TCE Stone',
    priceRange: '$54 – $65',
    typicalCost: '$2,200 – $3,200',
    category: 'warm',
    img: '/images/slabs/tce-4052.webp',
    description: 'A warm and inviting cream-colored quartz surface showing subtle natural movement and depth, perfect for creating a cozy, sophisticated kitchen.',
    features: [
      'Warm cream base tone',
      'Subtle organic texturing',
      'Highly stain and scratch resistant',
      'Low-maintenance luxury finish'
    ]
  },
  {
    id: 'tce-4040',
    name: 'TCE 4040 – Arctic Flow',
    brand: 'TCE Stone',
    priceRange: '$55 – $66',
    typicalCost: '$2,200 – $3,300',
    category: 'marble',
    img: '/images/slabs/tce-4040.webp',
    description: 'An elegant quartz slab displaying soft, flowing grey veining on a pristine white canvas.',
    features: [
      'Flowing arctic grey veins',
      'Sophisticated marble styling',
      'Impact and heat resistant',
      'No sealing required'
    ]
  },
  {
    id: 'tce-4039',
    name: 'TCE 4039 – Golden Flow',
    brand: 'TCE Stone',
    priceRange: '$55 – $66',
    typicalCost: '$2,200 – $3,300',
    category: 'marble',
    img: '/images/slabs/tce-4039.webp',
    description: 'A luxurious marble-look quartz with bold, warm golden veining flowing across a white base.',
    features: [
      'Bold golden veining',
      'Luxury Calacatta look',
      'Perfect centerpiece for islands',
      'Non-porous hygienic surface'
    ]
  },
  {
    id: 'tce-4032',
    name: 'TCE 4032 – Calacatta Flow',
    brand: 'TCE Stone',
    priceRange: '$52 – $62',
    typicalCost: '$2,100 – $3,100',
    category: 'marble',
    img: '/images/slabs/tce-4032.webp',
    description: 'A striking Calacatta-style quartz featuring graceful, high-definition grey veining.',
    features: [
      'High-definition Calacatta veins',
      'Elegant polished texture',
      'Stain and chemical resistant',
      'Stunning design movement'
    ]
  },
  {
    id: 'tce-2012',
    name: 'TCE 2012 – Speckled Cream',
    brand: 'TCE Stone',
    priceRange: '$47 – $53',
    typicalCost: '$1,900 – $2,650',
    category: 'warm',
    img: '/images/slabs/tce-2012.webp',
    description: 'A warm, creamy quartz base flecked with fine speckled patterns for a cozy and inviting feel.',
    features: [
      'Speckled cream finish',
      'Inviting warm base tone',
      'Extremely durable engineered stone',
      'Complements wood cabinetry'
    ]
  },
  {
    id: 'tce-1220',
    name: 'TCE 1220 – Carrara Velo',
    brand: 'TCE Stone',
    priceRange: '$49 – $56',
    typicalCost: '$1,950 – $2,800',
    category: 'marble',
    img: 'https://tcestone.com/wp-content/uploads/2025/11/1220-Detail.png',
    description: 'Part of TCE\'s 2026 Collection. A soft pristine white base detailed with delicate, flowing Carrara grey veining.',
    features: [
      '2026 New Collection',
      'Delicate Carrara veining',
      'Soft white background',
      'High stain resistance'
    ]
  },
  {
    id: 'tce-2049',
    name: 'TCE 2049 – Calacatta Dorato',
    brand: 'TCE Stone',
    priceRange: '$51 – $60',
    typicalCost: '$2,100 – $3,000',
    category: 'marble',
    img: 'https://tcestone.com/wp-content/uploads/2025/11/2049-Full-Slab-VS.png',
    description: 'High-end Calacatta quartz boasting rich warm gold and soft smoky grey veining paths across a polished white slab.',
    features: [
      '2026 New Collection',
      'Warm gold and grey veining',
      'Bold Calacatta statement',
      'Waterfall island favorite'
    ]
  },
  {
    id: 'tce-2050',
    name: 'TCE 2050 – Nero Dorato',
    brand: 'TCE Stone',
    priceRange: '$52 – $62',
    typicalCost: '$2,150 – $3,100',
    category: 'dark',
    img: 'https://tcestone.com/wp-content/uploads/2025/11/2050-Full-Slab.png',
    description: 'Dramatic deep obsidian black quartz crossed by striking lightning-bolt veins of gold and crisp white.',
    features: [
      '2026 New Collection',
      'Deep obsidian black base',
      'Striking gold & white veining',
      'High contrast luxury'
    ]
  },
  {
    id: 'tce-2051',
    name: 'TCE 2051 – Calacatta Venato',
    brand: 'TCE Stone',
    priceRange: '$51 – $60',
    typicalCost: '$2,100 – $3,000',
    category: 'marble',
    img: 'https://tcestone.com/wp-content/uploads/2025/11/2051-Full-Slab-Scaled-Edit.png',
    description: 'Sweeping, directional charcoal grey veining across a clean white field, recreating natural Italian Venato marble.',
    features: [
      '2026 New Collection',
      'Sweeping directional veins',
      'Italian Venato aesthetic',
      'Bookmatch available'
    ]
  },
  {
    id: 'tce-2052',
    name: 'TCE 2052 – Calacatta Aurora',
    brand: 'TCE Stone',
    priceRange: '$51 – $60',
    typicalCost: '$2,100 – $3,000',
    category: 'warm',
    img: 'https://tcestone.com/wp-content/uploads/2025/12/2052-Full-Slab-Scaled-556x930.jpg',
    description: 'Soft warm ivory background highlighted by subtle rose-gold and soft charcoal veining accents.',
    features: [
      '2026 New Collection',
      'Warm ivory background',
      'Rose-gold and grey accents',
      'Seamless full-height backsplash'
    ]
  },
  {
    id: 'tce-4047',
    name: 'TCE 4047 – Bianco Oro',
    brand: 'TCE Stone',
    priceRange: '$61 – $76',
    typicalCost: '$2,500 – $3,800',
    category: 'marble',
    img: 'https://tcestone.com/wp-content/uploads/2026/02/4047-Full-Slab-Scaled-556x930.jpg',
    description: 'Crisp bright white quartz matrix laced with rich honey-gold organic veining.',
    features: [
      '2026 New Collection',
      'Bright white matrix',
      'Honey-gold organic veining',
      'Complements brass hardware'
    ]
  },
  {
    id: 'tce-4048',
    name: 'TCE 4048 – Bianco Blu',
    brand: 'TCE Stone',
    priceRange: '$61 – $76',
    typicalCost: '$2,500 – $3,800',
    category: 'marble',
    img: 'https://tcestone.com/wp-content/uploads/2025/12/4048-Full-Slab-556x930.jpg',
    description: 'Unique cool white stone featuring subtle slate-blue and cool grey veining accents.',
    features: [
      '2026 New Collection',
      'Slate-blue veining accents',
      'Cool white base',
      'Ideal for blue & white shaker kitchens'
    ]
  },
  {
    id: 'tce-4049',
    name: 'TCE 4049 – Silver Coast',
    brand: 'TCE Stone',
    priceRange: '$57 – $70',
    typicalCost: '$2,350 – $3,500',
    category: 'grey',
    img: 'https://tcestone.com/wp-content/uploads/2026/01/4049-Full-Slab-Scaled-556x930.jpg',
    description: 'Elegant silver-grey and white wave-pattern quartz mimicking coastal shoreline marble.',
    features: [
      '2026 New Collection',
      'Coastal shoreline wave pattern',
      'Silver-grey tones',
      'Non-porous durability'
    ]
  },
  {
    id: 'tce-4060',
    name: 'TCE 4060 – Botticino Crema',
    brand: 'TCE Stone',
    priceRange: '$61 – $76',
    typicalCost: '$2,500 – $3,800',
    category: 'warm',
    img: 'https://tcestone.com/wp-content/uploads/2025/12/4060-Full-Slab-2-Scaled-556x930.jpg',
    description: 'Warm creamy beige quartz inspired by Italian Botticino marble with soft tonal mottling.',
    features: [
      '2026 New Collection',
      'Italian Botticino marble look',
      'Warm creamy beige field',
      'Pairs with natural wood cabinets'
    ]
  },
  {
    id: 'tce-4061',
    name: 'TCE 4061 – Nuvolato Grigio',
    brand: 'TCE Stone',
    priceRange: '$61 – $76',
    typicalCost: '$2,500 – $3,800',
    category: 'grey',
    img: 'https://tcestone.com/wp-content/uploads/2026/01/4061-Full-Slab-Scaled-556x930.jpg',
    description: 'Soft stormy grey clouds across a subtle off-white field for modern industrial and transitional kitchen spaces.',
    features: [
      '2026 New Collection',
      'Stormy grey clouding',
      'Off-white background',
      'Modern industrial aesthetic'
    ]
  },
  {
    id: 'kstone-k1052',
    name: 'K1052 – Statuario Venato',
    brand: 'Kstone',
    priceRange: '$70 – $90',
    typicalCost: '$2,800 – $4,400',
    category: 'marble',
    img: '/images/slabs/kstone-k1052.jpeg',
    description: 'A classic Statuario marble-look quartz featuring elegant grey veining across a bright white background.',
    features: [
      'Statuario marble styling',
      'Classic grey veining',
      'Highly scratch and stain resistant',
      'High-gloss polished finish'
    ]
  },
  {
    id: 'kstone-k1055',
    name: 'K1055 – Pandora White',
    brand: 'Kstone',
    priceRange: '$70 – $90',
    typicalCost: '$2,800 – $4,400',
    category: 'white',
    img: '/images/slabs/kstone-k1055.jpeg',
    description: 'A beautiful and soft white background quartz featuring subtle and natural stone-like flows.',
    features: [
      'Pandora White flow',
      'Subtle stone-like textures',
      'Low maintenance durability',
      'Certified safe for food prep'
    ]
  },
  {
    id: 'kstone-k1056',
    name: 'K1056 – Arabescato White',
    brand: 'Kstone',
    priceRange: '$70 – $90',
    typicalCost: '$2,800 – $4,400',
    category: 'marble',
    img: '/images/slabs/kstone-k1056.jpeg',
    description: 'A stunning marble-look quartz displaying swirling arabesque dark grey patterns on white.',
    features: [
      'Arabesque veining pattern',
      'Dramatic design movement',
      'Polished durable surface',
      'Ideal for backsplashes'
    ]
  },
  {
    id: 'kstone-k1066',
    name: 'K1066 – Statuario Thunder',
    brand: 'Kstone',
    priceRange: '$70 – $90',
    typicalCost: '$2,800 – $4,400',
    category: 'marble',
    img: '/images/slabs/kstone-k1066.jpeg',
    description: 'A bold and dramatic quartz featuring strong, electric dark grey thunder-like veins on a pristine white base.',
    features: [
      'Electric thunder grey veining',
      'Bold statement marble look',
      'Durable non-porous structure',
      'Perfect for kitchen islands'
    ]
  },
  {
    id: 'kstone-k1069',
    name: 'K1069 – Taj Mahal',
    brand: 'Kstone',
    priceRange: '$70 – $90',
    typicalCost: '$2,800 – $4,400',
    category: 'warm',
    img: '/images/slabs/kstone-k1069.jpeg',
    description: 'A quartzite-look quartz mimicking the warm beige and grey hues of natural Taj Mahal quartzite.',
    features: [
      'Natural Taj Mahal quartzite look',
      'Warm beige and grey flow',
      'Eco-friendly engineered durability',
      'Luxurious polished surface'
    ]
  },
  {
    id: 'kstone-y9020',
    name: 'Y9020 – White Fantasy',
    brand: 'Kstone',
    priceRange: '$61 – $75',
    typicalCost: '$2,400 – $3,700',
    category: 'white',
    img: '/images/slabs/kstone-y9020.png',
    description: 'A bright white base quartz detailed with soft grey fantasy veining for a clean, elegant visual texture.',
    features: [
      'Soft grey fantasy veins',
      'Bright white base clarity',
      'High impact resistance',
      'Seamless jumbo slab formats'
    ]
  },
  {
    id: 'silestone-calacatta-gold',
    name: 'Eternal Calacatta Gold',
    brand: 'Silestone',
    priceRange: '$121 – $171',
    typicalCost: '$4,500 – $7,200',
    category: 'marble',
    img: '/images/slabs/calacatta-gold.jpg',
    description: 'A striking white background with elegant, thick grey veins and delicate gold accents.',
    features: ['Thick grey veining', 'Subtle gold accents', 'HybriQ+ Technology', 'High stain resistance']
  },
  {
    id: 'silestone-statuario',
    name: 'Eternal Statuario',
    brand: 'Silestone',
    priceRange: '$97 – $134',
    typicalCost: '$4,000 – $6,800',
    category: 'marble',
    img: '/images/slabs/statuario.jpg',
    description: 'Inspired by classic Italian Carrara marble, featuring soft, subtle grey veins on a white surface.',
    features: ['Soft grey veining', 'Classic Italian marble look', 'HybriQ+ Technology', 'High stain resistance']
  },
  {
    id: 'silestone-miami-white',
    name: 'Miami White',
    brand: 'Silestone',
    priceRange: '$73 – $96',
    typicalCost: '$3,000 – $4,800',
    category: 'white',
    img: '/images/slabs/miami-white.jpg',
    description: 'A clean, pure white for a bright and modern aesthetic.',
    features: ['Pure bright white', 'Consistent solid color', 'HybriQ+ Technology', 'Perfect for modern kitchens']
  },
  {
    id: 'silestone-desert-silver',
    name: 'Desert Silver',
    brand: 'Silestone',
    priceRange: '$85 – $114',
    typicalCost: '$3,500 – $5,500',
    category: 'grey',
    img: '/images/slabs/desert-silver.jpg',
    description: 'A frosted grey base traversed by fine and clear veins, offering an elegant icy look.',
    features: ['Frosted grey base', 'Fine icy veining', 'HybriQ+ Technology', 'Sophisticated neutral']
  },
  {
    id: 'silestone-charcoal-soapstone',
    name: 'Charcoal Soapstone',
    brand: 'Silestone',
    priceRange: '$85 – $114',
    typicalCost: '$4,000 – $6,000',
    category: 'dark',
    img: '/images/slabs/charcoal-soapstone.jpg',
    description: 'A deep bluish-grey base with energetic white veining, inspired by natural soapstone.',
    features: ['Bluish-grey base', 'Energetic white veins', 'HybriQ+ Technology', 'Natural soapstone look']
  },
  {
    id: 'silestone-pearl-jasmine',
    name: 'Pearl Jasmine',
    brand: 'Silestone',
    priceRange: '$85 – $114',
    typicalCost: '$4,000 – $6,800',
    category: 'white',
    img: '/images/slabs/pearl-jasmine.jpg',
    description: 'A white limestone look intertwined with subtle grey veins.',
    features: ['Limestone texture look', 'Subtle grey veining', 'HybriQ+ Technology', 'Warm and inviting']
  },
  {
    id: 'silestone-ethereal-glow',
    name: 'Ethereal Glow',
    brand: 'Silestone',
    priceRange: '$121 – $171',
    typicalCost: '$5,000 – $8,000',
    category: 'marble',
    img: '/images/slabs/ethereal-glow.jpg',
    description: 'A modernized evolution of Calacatta Gold with a white background and veins of gold and grey.',
    features: ['Modern Calacatta evolution', 'Gold and grey veining', 'HybriQ+ Technology', 'Premium luxury tier']
  }
  ,{
    id: 'caesarstone-1141', name: '1141 Pure White', brand: 'Caesarstone',
    priceRange: '$92 – $126', typicalCost: '$4,000 – $6,500', category: 'white',
    img: '/images/slabs/pure-white.jpg', description: 'The cleanest, purest white available in the Caesarstone collection.',
    features: ['Crisp solid white', 'Minimalist aesthetic', 'High stain resistance', 'Perfect for modern designs']
  }, {
    id: 'caesarstone-5143', name: '5143 White Attica', brand: 'Caesarstone',
    priceRange: '$103 – $144', typicalCost: '$4,800 – $7,500', category: 'marble',
    img: '/images/slabs/white-attica.jpg', description: 'A brilliant white base featuring dense, dark blue-grey interlaced veins.',
    features: ['Bold dark veining', 'Classic marble look', 'Durable engineered stone', 'High visual impact']
  }, {
    id: 'caesarstone-4001', name: '4001 Fresh Concrete', brand: 'Caesarstone',
    priceRange: '$92 – $126', typicalCost: '$4,500 – $7,000', category: 'grey',
    img: '/images/slabs/fresh-concrete.jpg', description: 'A delicate white concrete look with fine textured grey accents.',
    features: ['Light industrial feel', 'Matte finish option', 'Versatile grey-white', 'Hygienic non-porous']
  }, {
    id: 'caesarstone-4004', name: '4004 Raw Concrete', brand: 'Caesarstone',
    priceRange: '$92 – $126', typicalCost: '$4,500 – $7,000', category: 'grey',
    img: '/images/slabs/raw-concrete.jpg', description: 'An authentic mid-grey concrete finish with subtle tonal variations.',
    features: ['Authentic raw texture', 'Mid-grey tone', 'Durable urban aesthetic', 'Industrial chic']
  }, {
    id: 'caesarstone-5000', name: '5000 London Grey', brand: 'Caesarstone',
    priceRange: '$103 – $144', typicalCost: '$4,800 – $7,500', category: 'grey',
    img: '/images/slabs/london-grey.jpg', description: 'An elegant light grey with soft charcoal veining.',
    features: ['Elegant light grey', 'Soft charcoal veins', 'Timeless aesthetic', 'Superior durability']
  }, {
    id: 'caesarstone-4033', name: '4033 Rugged Concrete', brand: 'Caesarstone',
    priceRange: '$103 – $144', typicalCost: '$5,000 – $7,800', category: 'dark',
    img: '/images/slabs/rugged-concrete.jpg', description: 'A deeply textured grey surface reflecting the look of authentic cast concrete.',
    features: ['Deeply textured look', 'Robust urban style', 'Advanced finish', 'Distinctive variations']
  }, {
    id: 'caesarstone-5100', name: '5100 Vanilla Noir', brand: 'Caesarstone',
    priceRange: '$103 – $144', typicalCost: '$4,800 – $7,500', category: 'dark',
    img: '/images/slabs/vanilla-noir.jpg', description: 'A rich black base heavily laced with bold white vanilla veins.',
    features: ['Rich black base', 'Bold vanilla veins', 'Dramatic luxury', 'Striking contrast']
  }, {
    id: 'caesarstone-5133', name: '5133 Symphony Grey', brand: 'Caesarstone',
    priceRange: '$92 – $126', typicalCost: '$4,500 – $7,200', category: 'grey',
    img: '/images/slabs/symphony-grey.jpg', description: 'A symphony of grey tones featuring dark and light contrasting veining.',
    features: ['Complex grey tones', 'Dynamic visual texture', 'Stain resistant', 'Elegant mid-tone']
  }, {
    id: 'caesarstone-5110', name: '5110 Alpine Mist', brand: 'Caesarstone',
    priceRange: '$103 – $144', typicalCost: '$4,600 – $7,300', category: 'grey',
    img: '/images/slabs/alpine-mist.jpg', description: 'A cool grey background detailed with crisp white veins.',
    features: ['Cool grey background', 'Crisp white veining', 'Fresh and clean', 'Enduring style']
  }, {
    id: 'caesarstone-6134', name: '6134 Georgian Bluffs', brand: 'Caesarstone',
    priceRange: '$92 – $126', typicalCost: '$4,500 – $7,200', category: 'grey',
    img: '/images/slabs/georgian-bluffs.jpg', description: 'A light grey base with subtle veining and industrial textures.',
    features: ['Light grey base', 'Industrial nuance', 'Versatile neutral', 'Engineered strength']
  },
  {
    id: 'caesarstone-4600',
    name: '4600 Organic White',
    brand: 'Caesarstone',
    priceRange: '$89 – $118',
    typicalCost: '$3,950 – $5,900',
    category: 'white',
    img: '/images/slabs/caesarstone-4600.jpg',
    description: 'Subtle blend of warm white tones and soft grey mottling for a natural, organic minimalist aesthetic.',
    features: ['Organic White palette', 'Soft grey mottling', 'Versatile modern white', 'Easy maintenance']
  },
  {
    id: 'caesarstone-6003',
    name: '6003 Coastal Grey',
    brand: 'Caesarstone',
    priceRange: '$87 – $114',
    typicalCost: '$3,850 – $5,700',
    category: 'grey',
    img: '/images/slabs/caesarstone-6003.jpg',
    description: 'Soft driftwood grey and warm sandy taupe movements inspired by rugged Canadian coastal shorelines.',
    features: ['Coastal grey aesthetic', 'Sandy taupe & grey blend', 'Quiet natural movement', 'Engineered strength']
  },
  {
    id: 'caesarstone-5116',
    name: '5116 Calacatta Nectar',
    brand: 'Caesarstone',
    priceRange: '$115 – $160',
    typicalCost: '$5,000 – $7,800',
    category: 'marble',
    img: '/images/slabs/caesarstone-5116.jpg',
    description: 'Luxurious translucent white base lacing warm honey-gold and soft grey veins across an expansive slab.',
    features: ['Calacatta Nectar design', 'Warm honey-gold veining', 'Translucent marble base', 'Waterfall island favorite']
  },
  {
    id: 'caesarstone-5115',
    name: '5115 Calacatta Stillstorm',
    brand: 'Caesarstone',
    priceRange: '$110 – $155',
    typicalCost: '$4,800 – $7,500',
    category: 'marble',
    img: '/images/slabs/caesarstone-5115.jpg',
    description: 'Serene white quartz background detailed with quiet charcoal and silver storm veining.',
    features: ['Calacatta Stillstorm', 'Quiet charcoal veining', 'Soft silver accents', 'Ethereal luxury']
  },
  {
    id: 'caesarstone-5105',
    name: '5105 Calacatta Dreamwave',
    brand: 'Caesarstone',
    priceRange: '$120 – $165',
    typicalCost: '$5,200 – $8,200',
    category: 'marble',
    img: '/images/slabs/caesarstone-5105.jpg',
    description: 'Dynamic flowing waves of slate grey and golden bronze flowing gracefully across crisp white quartz.',
    features: ['Calacatta Dreamwave', 'Flowing slate & gold waves', 'High visual depth', 'Statement countertop']
  },
  {
    id: 'caesarstone-5140',
    name: '5140 Dreamy Carrara',
    brand: 'Caesarstone',
    priceRange: '$95 – $135',
    typicalCost: '$4,200 – $6,500',
    category: 'marble',
    img: '/images/slabs/caesarstone-5140.jpg',
    description: 'Gentle, cloudy Carrara marble movement lacing whisper-grey veining over a warm ivory backdrop.',
    features: ['Dreamy Carrara look', 'Whisper-grey veining', 'Warm ivory field', 'Subtle elegance']
  },
  {
    id: 'caesarstone-5132',
    name: '5132 Celestial Sky',
    brand: 'Caesarstone',
    priceRange: '$98 – $140',
    typicalCost: '$4,300 – $6,800',
    category: 'grey',
    img: '/images/slabs/caesarstone-5132.jpg',
    description: 'Celestial atmosphere featuring cloudy slate-blue and warm dove-grey movement inspired by atmospheric horizons.',
    features: ['Celestial Sky palette', 'Atmospheric blue-grey clouds', 'Modern artistic statement', 'Polished finish']
  },
  {
    id: 'caesarstone-8103',
    name: '8103 Calacatta Nobella',
    brand: 'Caesarstone',
    priceRange: '$125 – $175',
    typicalCost: '$5,500 – $8,500',
    category: 'marble',
    img: '/images/slabs/caesarstone-8103.jpg',
    description: 'Noble Italian Calacatta design with bold, sweeping dark grey veins edged in soft golden warmth.',
    features: ['Calacatta Nobella luxury', 'Bold sweeping veins', 'Golden-edged detail', 'Oversized slab format']
  },
  {
    id: 'caesarstone-8251',
    name: '8251 Taj Whisper',
    brand: 'Caesarstone',
    priceRange: '$105 – $150',
    typicalCost: '$4,600 – $7,200',
    category: 'warm',
    img: '/images/slabs/caesarstone-8251.jpg',
    description: 'Inspired by Taj Mahal quartzite, presenting warm creamy-beige linear striations with translucent depth.',
    features: ['Taj Whisper quartzite look', 'Warm creamy-beige field', 'Translucent striations', 'Cozy luxury']
  },
  {
    id: 'caesarstone-4011',
    name: '4011 Cloudburst Concrete',
    brand: 'Caesarstone',
    priceRange: '$89 – $120',
    typicalCost: '$3,900 – $5,900',
    category: 'grey',
    img: '/images/slabs/caesarstone-4011.jpg',
    description: 'Soft cloud-white concrete texture presenting a tactile rough-honed surface for industrial modern interiors.',
    features: ['Cloudburst Concrete texture', 'Tactile rough-honed surface', 'Soft cloud-white shade', 'Industrial modern style']
  },
  {
    id: 'caesarstone-6046',
    name: '6046 Moorland Fog',
    brand: 'Caesarstone',
    priceRange: '$92 – $128',
    typicalCost: '$4,100 – $6,300',
    category: 'grey',
    img: '/images/slabs/caesarstone-6046.jpg',
    description: 'Dense foggy grey matrix enriched with warm granite-like composite flecks and subtle movement.',
    features: ['Moorland Fog texture', 'Granite-like composite flecks', 'Dense grey movement', 'High durability']
  },
  {
    id: 'caesarstone-8101',
    name: '8101 Clearlight',
    brand: 'Caesarstone',
    priceRange: '$95 – $130',
    typicalCost: '$4,200 – $6,400',
    category: 'white',
    img: '/images/slabs/caesarstone-8101.jpg',
    description: 'Bright luminous white surface woven with whisper-fine crystal misting for bright, modern spaces.',
    features: ['Clearlight luminous surface', 'Whisper-fine crystal mist', 'Clean modern white', 'Low maintenance']
  },
  {
    id: 'caesarstone-4030',
    name: '4030 Stone Grey',
    brand: 'Caesarstone',
    priceRange: '$85 – $115',
    typicalCost: '$3,800 – $5,800',
    category: 'grey',
    img: '/images/slabs/caesarstone-4030.jpg',
    description: 'Smooth, subtle mid-toned grey quartz field lacing soft organic neutral shading for contemporary kitchens.',
    features: ['Stone Grey neutral palette', 'Smooth mid-toned grey', 'Contemporary versatility', 'Low maintenance']
  },
  {
    id: 'caesarstone-2141',
    name: '2141 Blizzard',
    brand: 'Caesarstone',
    priceRange: '$85 – $115',
    typicalCost: '$3,800 – $5,800',
    category: 'white',
    img: '/images/slabs/caesarstone-2141.jpg',
    description: 'Pristine bright blizzard white matrix studded with tiny reflective flecks to illuminate modern spaces.',
    features: ['Blizzard bright white base', 'Reflective flecks', 'Illuminates kitchen interiors', 'Stain & scratch resistant']
  },
  {
    id: 'caesarstone-1141',
    name: '1141 Pure White',
    brand: 'Caesarstone',
    priceRange: '$88 – $120',
    typicalCost: '$3,900 – $6,000',
    category: 'white',
    img: '/images/slabs/caesarstone-1141.jpg',
    description: 'The ultimate pure solid white quartz countertop, famous for its clean, seamless minimalist aesthetic.',
    features: ['Pure White seamless solid', 'Minimalist architectural favorite', 'Pure uniform bright white', 'Hygienic non-porous surface']
  },
  {
    id: 'caesarstone-3141',
    name: '3141 Osprey',
    brand: 'Caesarstone',
    priceRange: '$85 – $115',
    typicalCost: '$3,800 – $5,800',
    category: 'white',
    img: '/images/slabs/caesarstone-3141.jpg',
    description: 'Classic fine-grain white and soft grey aggregate pattern creating a subtle, durable engineered stone finish.',
    features: ['Osprey fine-grain aggregate', 'Subtle grey flecks', 'Durable engineered stone', 'Timeless kitchen neutral']
  },
  {
    id: 'caesarstone-4120',
    name: '4120 Raven',
    brand: 'Caesarstone',
    priceRange: '$88 – $120',
    typicalCost: '$3,900 – $6,000',
    category: 'dark',
    img: '/images/slabs/caesarstone-4120.jpg',
    description: 'Sleek slate-black and charcoal quartz matrix providing deep contrast for modern and industrial kitchens.',
    features: ['Raven dark slate charcoal', 'Deep contrast statement', 'Polished luxury finish', 'Stain & heat resistant']
  },
  {
    id: 'caesarstone-5003',
    name: '5003 Piatra Grey',
    brand: 'Caesarstone',
    priceRange: '$98 – $138',
    typicalCost: '$4,300 – $6,800',
    category: 'dark',
    img: '/images/slabs/caesarstone-5003.jpg',
    description: 'Sophisticated deep slate-grey marble base crossed by delicate chalk-white chalky veining.',
    features: ['Piatra Grey marble look', 'Deep slate base', 'Chalk-white veining', 'High contrast luxury']
  },
  {
    id: 'caesarstone-5112',
    name: '5112 Aterra Blanca',
    brand: 'Caesarstone',
    priceRange: '$102 – $145',
    typicalCost: '$4,500 – $7,200',
    category: 'warm',
    img: '/images/slabs/caesarstone-5112.jpg',
    description: 'Ethereal misty white field laced with graceful translucent golden-earth veining for refined luxury interiors.',
    features: ['Aterra Blanca ICON series', 'Graceful golden veining', 'Ethereal translucent depth', 'Polished premium finish']
  }, {
    id: 'tce-4005', name: 'TCE 4005 Carrara Cloud', brand: 'TCE Stone',
    priceRange: '$65 – $85', typicalCost: '$3,000 – $5,000', category: 'marble',
    img: 'https://tcestone.com/wp-content/uploads/2024/03/4005-detail-556x930.png', description: 'A popular and affordable Carrara alternative with distinct grey cloudy veining.',
    features: ['Carrara Cloud look', 'Distinct grey veining', 'Value focused', 'Beautiful finish']
  }, {
    id: 'tce-2040', name: 'TCE 2040 Vivid Stream', brand: 'TCE Stone',
    priceRange: '$60 – $80', typicalCost: '$2,800 – $4,800', category: 'marble',
    img: 'https://tcestone.com/wp-content/uploads/2024/03/2040-556x930.jpg', description: 'A soft, blended Carrara marble stream pattern perfect for subtle kitchens.',
    features: ['Vivid Stream movement', 'Blended veins', 'Timeless style', 'Budget friendly']
  },
  {
    id: 'tce-1516',
    name: 'TCE 1516 Absolute Grey',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,700 – $4,200',
    category: 'grey',
    img: 'https://tcestone.com/wp-content/uploads/2025/09/1516-Detail.png',
    description: 'Modern sleek absolute grey quartz with fine uniform texture for minimal, industrial kitchens.',
    features: ['Absolute Grey series', 'Sleek uniform texture', 'Modern industrial style', 'Stain & scratch resistant']
  },
  {
    id: 'tce-1518',
    name: 'TCE 1518 Pure Black',
    brand: 'TCE Stone',
    priceRange: '$62 – $78',
    typicalCost: '$2,900 – $4,500',
    category: 'dark',
    img: 'https://tcestone.com/wp-content/uploads/2025/11/1518-Detail-Scaled-3000x2000-1.png',
    description: 'Deep obsidian pure black engineered stone crafted for high-contrast dramatic island countertops.',
    features: ['Pure Black obsidian base', 'High contrast statement', 'Polished luxury finish', 'Non-porous quartz']
  },
  {
    id: 'tce-2028',
    name: 'TCE 2028 Crystal Mist II',
    brand: 'TCE Stone',
    priceRange: '$52 – $62',
    typicalCost: '$2,400 – $3,600',
    category: 'white',
    img: 'https://tcestone.com/wp-content/uploads/2025/11/2028-Detail-Scaled.png',
    description: 'Lively crystal white matrix laced with reflective mineral misting for bright interior spaces.',
    features: ['Crystal Mist matrix', 'Reflective mineral flecks', 'Brightens kitchen space', 'Low maintenance']
  },
  {
    id: 'tce-2045',
    name: 'TCE 2045 Calacatta Lux',
    brand: 'TCE Stone',
    priceRange: '$65 – $82',
    typicalCost: '$3,000 – $4,900',
    category: 'marble',
    img: 'https://tcestone.com/wp-content/uploads/2024/09/2045-Detail-VS-Scaled.png',
    description: 'Luxurious Calacatta marble design with broad charcoal and warm gold veining across bright white quartz.',
    features: ['Calacatta Lux design', 'Broad charcoal veining', 'Warm gold highlights', 'Waterfall island favorite']
  },
  {
    id: 'tce-2046',
    name: 'TCE 2046 Marquina',
    brand: 'TCE Stone',
    priceRange: '$68 – $84',
    typicalCost: '$3,150 – $5,100',
    category: 'dark',
    img: 'https://tcestone.com/wp-content/uploads/2024/07/2046-Full-Slab-Scaled.png',
    description: 'Dramatic Spanish Nero Marquina black quartz crossed with striking white lightning veining.',
    features: ['Nero Marquina black quartz', 'Striking white lightning veins', 'High contrast luxury', 'Statement countertop']
  },
  {
    id: 'tce-4042',
    name: 'TCE 4042 Seraphina Oro',
    brand: 'TCE Stone',
    priceRange: '$70 – $88',
    typicalCost: '$3,200 – $5,300',
    category: 'marble',
    img: 'https://tcestone.com/wp-content/uploads/2024/07/4042-Full-Slab.png',
    description: 'Ethereal Seraphina white base infused with soft golden-bronze veining and warm translucent depth.',
    features: ['Seraphina Oro veining', 'Golden-bronze accents', 'Translucent marble depth', 'Premium polished surface']
  },
  {
    id: 'tce-4043',
    name: 'TCE 4043 Luna Grigio',
    brand: 'TCE Stone',
    priceRange: '$62 – $78',
    typicalCost: '$2,850 – $4,600',
    category: 'grey',
    img: 'https://tcestone.com/wp-content/uploads/2024/07/4043-Full-Slab-Scaled.png',
    description: 'Luminous moon-grey quartz featuring soft smoky waves and subtle silver clouds.',
    features: ['Luna Grigio moon-grey', 'Smoky wave movement', 'Subtle silver mist', 'Versatile modern neutral']
  },
  {
    id: 'tce-4044',
    name: 'TCE 4044 Solara',
    brand: 'TCE Stone',
    priceRange: '$66 – $84',
    typicalCost: '$3,100 – $5,000',
    category: 'warm',
    img: 'https://tcestone.com/wp-content/uploads/2024/07/4044-Full-Slab.png',
    description: 'Radiant sunlit white quartz with warm honey and champagne veining for cozy, inviting kitchens.',
    features: ['Solara sunlit design', 'Honey & champagne veins', 'Warm inviting aesthetic', 'Complements wood cabinetry']
  },
  {
    id: 'tce-4045',
    name: 'TCE 4045 Antico',
    brand: 'TCE Stone',
    priceRange: '$64 – $80',
    typicalCost: '$2,950 – $4,800',
    category: 'warm',
    img: 'https://tcestone.com/wp-content/uploads/2024/07/4045-Full-Slab-Edit-556x930.jpg',
    description: 'Antique stone blend exhibiting warm ivory, cream, and soft grey striations.',
    features: ['Antico stone blend', 'Warm ivory & cream', 'Organic earthiness', 'Engineered durability']
  },
  {
    id: 'tce-4062',
    name: 'TCE 4062 Dolce Crema',
    brand: 'TCE Stone',
    priceRange: '$65 – $82',
    typicalCost: '$3,000 – $4,900',
    category: 'warm',
    img: 'https://tcestone.com/wp-content/uploads/2026/01/4062-Full-Slab-Scaled-556x930.jpg',
    description: 'Soft Italian crema background detailed with delicate warm ivory and caramel veining.',
    features: ['Dolce Crema series', 'Caramel & ivory veining', 'Warm velvety texture', 'Ideal for traditional & modern']
  },
  {
    id: 'lucent-carrara-grigio', name: 'Carrara Grigio', brand: 'Lucent Quartz',
    priceRange: '$70 – $90', typicalCost: '$3,200 – $5,200', category: 'grey',
    img: '/images/slabs/lucent-carrara-grigio.jpg', description: 'A classic Carrara blend with predominantly grey, cloudy patterns.',
    features: ['Classic cloudy Carrara', 'Grey dominant', 'Soft texture', 'Versatile design']
  }, {
    id: 'lucent-noir-striato', name: 'Noir Striato', brand: 'Lucent Quartz',
    priceRange: '$85 – $110', typicalCost: '$4,000 – $6,000', category: 'dark',
    img: '/images/slabs/lucent-noir-striato.jpg', description: 'A deep black quartz featuring distinctive white striations.',
    features: ['Deep black base', 'Distinct white striations', 'Bold architecture', 'Durable engineered stone']
  }, {
    id: 'lucent-sparkle-white', name: 'Sparkle White', brand: 'Lucent Quartz',
    priceRange: '$65 – $85', typicalCost: '$3,000 – $5,000', category: 'white',
    img: '/images/slabs/lucent-sparkle-white.jpg', description: 'A lively white quartz embedded with tiny, reflective mirrored flecks.',
    features: ['Reflective flecks', 'Lively texture', 'Brightens space', 'Fun and modern']
  }, {
    id: 'silestone-white-arabesque', name: 'White Arabesque', brand: 'Silestone',
    priceRange: '$85 – $114', typicalCost: '$4,500 – $7,000', category: 'marble',
    img: '/images/slabs/white-arabesque.jpg', description: 'A bright white background heavily threaded with contrasting dark grey veins.',
    features: ['Heavy grey threading', 'Bright white background', 'HybriQ+ Technology', 'Striking contrast']
  }, {
    id: 'silestone-lusso', name: 'Lusso', brand: 'Silestone',
    priceRange: '$85 – $114', typicalCost: '$4,000 – $6,500', category: 'warm',
    img: '/images/slabs/lusso.jpg', description: 'A warm, creamy background intertwined with golden and pale grey veins.',
    features: ['Creamy warm base', 'Golden and grey veins', 'HybriQ+ Technology', 'Inviting luxury']
  }
  , {
    id: 'kasa-ksl6011', name: 'KSL6011 - Alabaster Vein', brand: 'Kasa Quartz',
    priceRange: '$57 – $70', typicalCost: '$3,500 – $5,500', category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg', description: 'Soft alabaster background with delicate veining for a timeless look.',
    features: ['Alabaster Vein', 'Soft background', 'Timeless', 'Elegant']
  }, {
    id: 'kasa-ksv5101', name: 'KSV5101 - Lightning Gold', brand: 'Kasa Quartz',
    priceRange: '$52 – $62', typicalCost: '$3,500 – $5,500', category: 'marble',
    img: '/images/slabs/kasa-ksv5101.jpg', description: 'Striking lightning-like gold veins over a bright white base.',
    features: ['Lightning Gold', 'Striking veins', 'Bright white base', 'Luxury statement']
  }, {
    id: 'kasa-ksv1102', name: 'KSV1102 - Calacatta Misty Gold', brand: 'Kasa Quartz',
    priceRange: '$53 – $63', typicalCost: '$3,500 – $5,500', category: 'marble',
    img: '/images/slabs/kasa-ksv1102.jpg', description: 'Calacatta marble look with misty grey and subtle gold highlights.',
    features: ['Calacatta Misty Gold', 'Misty grey', 'Gold highlights', 'Elegant detail']
  }, {
    id: 'kasa-ksv1101', name: 'KSV1101 - Calacatta Misty Grey', brand: 'Kasa Quartz',
    priceRange: '$53 – $63', typicalCost: '$3,500 – $5,500', category: 'marble',
    img: '/images/slabs/kasa-ksv1101.jpg', description: 'A cooler-toned Calacatta featuring misty grey veins and shading.',
    features: ['Calacatta Misty Grey', 'Cooler tones', 'Grey veins', 'Modern classic']
  }, {
    id: 'kasa-ky066', name: 'KY066 - Taj Mahal Pre', brand: 'Kasa Quartz',
    priceRange: '$52 – $62', typicalCost: '$2,800 – $4,800', category: 'warm',
    img: '/images/slabs/kasa-ky066.jpg', description: 'Inspired by the famous Taj Mahal quartzite, featuring warm creamy beige tones.',
    features: ['Taj Mahal Pre', 'Heat transfer tech', 'Creamy beige tones', 'Warm luxury']
  },
  {
    id: 'kasa-ksl8701',
    name: 'KSL8701 – Frosted Rift White',
    brand: 'Kasa Quartz',
    priceRange: '$57 – $70',
    typicalCost: '$2,350 – $3,500',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Crisp frosted white field detailed with subtle rift-pattern veining for a clean, modern aesthetic.',
    features: [
      'Frosted Rift White design',
      'Subtle linear veining',
      'Clean modern aesthetic',
      'Non-porous & stain resistant'
    ]
  },
  {
    id: 'kasa-ksl8602',
    name: 'KSL8602 – Silver Mist',
    brand: 'Kasa Quartz',
    priceRange: '$57 – $70',
    typicalCost: '$2,350 – $3,500',
    category: 'grey',
    img: '/images/slabs/kasa-ksl8602.jpg',
    description: 'Soft silver-grey veining flowing softly across a translucent white quartz field.',
    features: [
      'Silver Mist veining',
      'Soft grey movement',
      'Translucent white base',
      'High heat & scratch resistance'
    ]
  },
  {
    id: 'kasa-ksl6032',
    name: 'KSL6032 – White Castle',
    brand: 'Kasa Quartz',
    priceRange: '$57 – $70',
    typicalCost: '$2,350 – $3,500',
    category: 'marble',
    img: '/images/slabs/kasa-ksl6032.jpg',
    description: 'Regal architectural quartz with dramatic grey clouding and high-definition marble movement.',
    features: [
      'White Castle marble look',
      'Dramatic grey clouding',
      'High-definition depth',
      'Waterfall island favorite'
    ]
  },
  {
    id: 'kasa-ksl6031',
    name: 'KSL6031 – Silver Sands',
    brand: 'Kasa Quartz',
    priceRange: '$57 – $70',
    typicalCost: '$2,350 – $3,500',
    category: 'grey',
    img: '/images/slabs/kasa-ksl6031.jpg',
    description: 'Fine shimmering silver sand textures integrated with soft grey linear marble veining.',
    features: [
      'Silver Sands texture',
      'Linear grey veining',
      'Subtle shimmer detail',
      'Easy daily maintenance'
    ]
  },
  {
    id: 'kasa-ksl6030',
    name: 'KSL6030 – Spiez White',
    brand: 'Kasa Quartz',
    priceRange: '$57 – $70',
    typicalCost: '$2,350 – $3,500',
    category: 'white',
    img: '/images/slabs/kasa-ksl6030.jpg',
    description: 'Pristine Swiss Alpine white quartz featuring delicate, airy grey highlights.',
    features: [
      'Spiez Alpine White base',
      'Delicate airy highlights',
      'Minimalist design',
      'Durable engineered quartz'
    ]
  },
  {
    id: 'kasa-ksl6017',
    name: 'KSL6017 – Bianco Riviera',
    brand: 'Kasa Quartz',
    priceRange: '$57 – $70',
    typicalCost: '$2,350 – $3,500',
    category: 'marble',
    img: '/images/slabs/kasa-ksl6017.jpg',
    description: 'Mediterranean-inspired Riviera white quartz with graceful sweeping slate grey veining.',
    features: [
      'Bianco Riviera aesthetic',
      'Sweeping slate grey veins',
      'Mediterranean elegance',
      'Hygienic non-porous surface'
    ]
  },
  {
    id: 'kasa-ksl6016',
    name: 'KSL6016 – Volakano White',
    brand: 'Kasa Quartz',
    priceRange: '$57 – $70',
    typicalCost: '$2,350 – $3,500',
    category: 'marble',
    img: '/images/slabs/kasa-ksl6016.jpg',
    description: 'Inspired by Greek Volakas marble, offering subtle smoky grey diagonal veining across pure white.',
    features: [
      'Volakas marble inspiration',
      'Smoky grey diagonal veins',
      'Bright white backdrop',
      'Timeless kitchen choice'
    ]
  },
  {
    id: 'kasa-ksl6015',
    name: 'KSL6015 – Blizzard',
    brand: 'Kasa Quartz',
    priceRange: '$57 – $70',
    typicalCost: '$2,350 – $3,500',
    category: 'white',
    img: '/images/slabs/kasa-ksl6015.jpg',
    description: 'Dynamic icy white matrix laced with crisp frost-like quartz movement.',
    features: [
      'Blizzard icy white matrix',
      'Frost-like quartz texture',
      'High light reflectivity',
      'Stain & impact resistant'
    ]
  },
  {
    id: 'kasa-ksl6010',
    name: 'KSL6010 – Glacier Gold',
    brand: 'Kasa Quartz',
    priceRange: '$57 – $70',
    typicalCost: '$2,350 – $3,500',
    category: 'warm',
    img: '/images/slabs/kasa-ksl6010.jpg',
    description: 'Warm golden veining intertwined with cool glacial grey accents over a bright white backdrop.',
    features: [
      'Glacier Gold veining',
      'Warm gold & cool grey accents',
      'Complements brass & chrome',
      'Premium polished finish'
    ]
  },
  {
    id: 'kasa-ksl6005',
    name: 'KSL6005 – Sahara Dune',
    brand: 'Kasa Quartz',
    priceRange: '$57 – $70',
    typicalCost: '$2,350 – $3,500',
    category: 'warm',
    img: '/images/slabs/kasa-ksl6005.jpg',
    description: 'Warm desert sand tones with soft ivory linear striations for cozy, organic kitchen interiors.',
    features: [
      'Sahara Dune warm tone',
      'Soft ivory striations',
      'Organic earth-tone design',
      'Pairs with wood cabinetry'
    ]
  },
  {
    id: 'k7701',
    name: 'K7701 – Middle Carrara',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $55',
    typicalCost: '$1,900 – $2,750',
    category: 'marble',
    img: '/images/slabs/k7701.jpg',
    description: 'Classic Middle Carrara limestone quartz featuring soft feathered grey veining over a warm white backdrop.',
    features: ['Middle Carrara series', 'Feathered grey veining', 'Warm white background', 'Non-porous & durable']
  },
  {
    id: 'k7702',
    name: 'K7702 – Ice White',
    brand: 'Kasa Quartz',
    priceRange: '$49 – $56',
    typicalCost: '$1,950 – $2,800',
    category: 'white',
    img: '/images/slabs/k7702.jpg',
    description: 'Pristine Ice White quartz slab presenting a bright, crisp surface with light reflective clarity.',
    features: ['Ice White pristine field', 'Bright light reflectivity', 'Minimalist design', 'High stain resistance']
  },
  {
    id: 'k7703',
    name: 'K7703 – Nero Stellar',
    brand: 'Kasa Quartz',
    priceRange: '$55 – $66',
    typicalCost: '$2,250 – $3,300',
    category: 'dark',
    img: '/images/slabs/k7703.jpg',
    description: 'Dramatic black quartz infused with subtle stellar shimmer flecks and fine silver accents.',
    features: ['Nero Stellar dark series', 'Subtle stellar shimmer', 'High contrast luxury', 'Non-porous hygienic stone']
  },
  {
    id: 'k7705',
    name: 'K7705 – Carrara Select',
    brand: 'Kasa Quartz',
    priceRange: '$49 – $56',
    typicalCost: '$1,950 – $2,800',
    category: 'marble',
    img: '/images/slabs/k7705.jpg',
    description: 'Refined Italian Carrara select aesthetic with gentle slate-grey linear veins across soft ivory quartz.',
    features: ['Carrara Select design', 'Gentle slate-grey veins', 'Soft ivory base', 'No sealing required']
  },
  {
    id: 'k7708',
    name: 'K7708 – Phantom Grey',
    brand: 'Kasa Quartz',
    priceRange: '$50 – $58',
    typicalCost: '$2,000 – $2,900',
    category: 'grey',
    img: '/images/slabs/k7708.jpg',
    description: 'Sophisticated Phantom Grey quartz detailed with subtle cloudy charcoal movement and fine misting.',
    features: ['Phantom Grey tone', 'Cloudy charcoal movement', 'Urban modern look', 'Scratch & heat resistant']
  },
  {
    id: 'k7710',
    name: 'K7710 – Antico Blend',
    brand: 'Kasa Quartz',
    priceRange: '$54 – $64',
    typicalCost: '$2,200 – $3,200',
    category: 'warm',
    img: '/images/slabs/k7710.jpg',
    description: 'Warm antique stone blend showcasing golden ivory tones intertwined with delicate warm grey striations.',
    features: ['Antico Blend warm series', 'Golden ivory tones', 'Organic earthiness', 'Complements wood cabinetry']
  },
  {
    id: 'ksv7700',
    name: 'KSV7700 – Ivory Golden Rift',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $62',
    typicalCost: '$2,150 – $3,100',
    category: 'warm',
    img: '/images/slabs/ksv7700.jpg',
    description: 'Luxurious ivory field presenting elegant golden-copper rift veining and translucent quartz depth.',
    features: ['Ivory Golden Rift design', 'Golden-copper veining', 'Translucent quartz depth', 'Premium polished finish']
  },
  {
    id: 'ky077',
    name: 'KY077 – Jade Fusion',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $62',
    typicalCost: '$2,150 – $3,100',
    category: 'warm',
    img: '/images/slabs/ky077.jpg',
    description: 'State-of-the-art heat transfer quartz capturing organic jade fusion movement with warm emerald & gold waves.',
    features: ['Jade Fusion heat transfer tech', 'Warm emerald & gold waves', 'Exotic quartzite look', 'High impact durability']
  },
  {
    id: 'caesarstone-3100',
    name: '3100 Jet Black',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'dark',
    img: '/images/slabs/caesarstone-3100.jpg',
    description: 'Official Caesarstone 3100 Jet Black engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["3100 Jet Black design", "Dark quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-4043',
    name: '4043 Primordia',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'white',
    img: '/images/slabs/caesarstone-4043.jpg',
    description: 'Official Caesarstone 4043 Primordia engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["4043 Primordia design", "White quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-4141',
    name: '4141 Misty Carrera',
    brand: 'Caesarstone',
    priceRange: '$98 – $145',
    typicalCost: '$4,300 – $6,800',
    category: 'marble',
    img: '/images/slabs/caesarstone-4141.jpg',
    description: 'Official Caesarstone 4141 Misty Carrera engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["4141 Misty Carrera design", "Marble quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-4601',
    name: '4601 Frozen Terra',
    brand: 'Caesarstone',
    priceRange: '$98 – $145',
    typicalCost: '$4,300 – $6,800',
    category: 'white',
    img: '/images/slabs/caesarstone-4601.jpg',
    description: 'Official Caesarstone 4601 Frozen Terra engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["4601 Frozen Terra design", "White quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-5113',
    name: '5113 Solenna',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'warm',
    img: '/images/slabs/caesarstone-5113.jpg',
    description: 'Official Caesarstone 5113 Solenna engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["5113 Solenna design", "Warm quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-5130',
    name: '5130 Cosmopolitan White',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'white',
    img: '/images/slabs/caesarstone-5130.jpg',
    description: 'Official Caesarstone 5130 Cosmopolitan White engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["5130 Cosmopolitan White design", "White quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-5144',
    name: '5144 Rossa Nova',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'white',
    img: '/images/slabs/caesarstone-5144.jpg',
    description: 'Official Caesarstone 5144 Rossa Nova engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["5144 Rossa Nova design", "White quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-5310',
    name: '5310 Brillianza',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'white',
    img: '/images/slabs/caesarstone-5310.jpg',
    description: 'Official Caesarstone 5310 Brillianza engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["5310 Brillianza design", "White quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-5820',
    name: '5820 Darcrest',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'white',
    img: '/images/slabs/caesarstone-5820.jpg',
    description: 'Official Caesarstone 5820 Darcrest engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["5820 Darcrest design", "White quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-6131',
    name: '6131 Bianco Drift',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'grey',
    img: '/images/slabs/caesarstone-6131.jpg',
    description: 'Official Caesarstone 6131 Bianco Drift engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["6131 Bianco Drift design", "Grey quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-6141',
    name: '6141 Ocean Foam',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'white',
    img: '/images/slabs/caesarstone-6141.jpg',
    description: 'Official Caesarstone 6141 Ocean Foam engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["6141 Ocean Foam design", "White quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-6600',
    name: '6600 Nougat',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'white',
    img: '/images/slabs/caesarstone-6600.jpg',
    description: 'Official Caesarstone 6600 Nougat engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["6600 Nougat design", "White quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-8252',
    name: '8252 Sedara',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'white',
    img: '/images/slabs/caesarstone-8252.jpg',
    description: 'Official Caesarstone 8252 Sedara engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["8252 Sedara design", "White quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-8477',
    name: '8477 Ocean Sage',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'white',
    img: '/images/slabs/caesarstone-8477.jpg',
    description: 'Official Caesarstone 8477 Ocean Sage engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["8477 Ocean Sage design", "White quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'caesarstone-9141',
    name: '9141 Ice Snow',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $5,900',
    category: 'white',
    img: '/images/slabs/caesarstone-9141.jpg',
    description: 'Official Caesarstone 9141 Ice Snow engineered quartz countertop slab featuring high visual depth and premium durability for modern kitchens.',
    features: ["9141 Ice Snow design", "White quartz palette", "Non-porous & stain resistant", "Polished premium finish"]
  },
  {
    id: 'silestone-versailles-ivory',
    name: 'Le Chic Versailles Ivory',
    brand: 'Silestone',
    priceRange: '$115 – $160',
    typicalCost: '$5,000 – $7,800',
    category: 'warm',
    img: '/images/slabs/silestone-versailles-ivory.jpg',
    description: 'Golden metallic sparkles and warm ivory veining inspired by 18th century Parisian palaces.',
    features: ['Le Chic Collection', 'Golden metallic sparkles', 'Warm ivory veining', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-bohemian-flame',
    name: 'Le Chic Bohemian Flame',
    brand: 'Silestone',
    priceRange: '$120 – $165',
    typicalCost: '$5,200 – $8,200',
    category: 'warm',
    img: '/images/slabs/silestone-bohemian-flame.jpg',
    description: 'Deep copper and metallic amber veining flowing dramatically over a dark matte field.',
    features: ['Le Chic Bohème Collection', 'Metallic amber veining', 'Deep luxury contrast', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-eclectic-pearl',
    name: 'Le Chic Eclectic Pearl',
    brand: 'Silestone',
    priceRange: '$115 – $160',
    typicalCost: '$5,000 – $7,800',
    category: 'white',
    img: '/images/slabs/silestone-eclectic-pearl.jpg',
    description: 'Luminous pearl backdrop laced with metallic silver and subtle warm grey gradients.',
    features: ['Le Chic Collection', 'Luminous pearl base', 'Metallic silver accents', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-victorian-silver',
    name: 'Le Chic Victorian Silver',
    brand: 'Silestone',
    priceRange: '$110 – $155',
    typicalCost: '$4,800 – $7,500',
    category: 'grey',
    img: '/images/slabs/silestone-victorian-silver.jpg',
    description: 'Soft silver-grey background detailed with subtle gradient white marble veining.',
    features: ['Le Chic Collection', 'Victorian silver tones', 'Gradient marble veins', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-parisien-bleu',
    name: 'Le Chic Parisien Bleu',
    brand: 'Silestone',
    priceRange: '$125 – $175',
    typicalCost: '$5,500 – $8,500',
    category: 'dark',
    img: '/images/slabs/silestone-parisien-bleu.jpg',
    description: 'Deep Parisian blue-charcoal field with striking bronze-copper veining.',
    features: ['Le Chic Collection', 'Parisian blue-charcoal', 'Bronze-copper veins', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-romantic-ash',
    name: 'Le Chic Romantic Ash',
    brand: 'Silestone',
    priceRange: '$110 – $155',
    typicalCost: '$4,800 – $7,500',
    category: 'grey',
    img: '/images/slabs/silestone-romantic-ash.jpg',
    description: 'Ash grey base with flowing chalk-white and silver striations.',
    features: ['Le Chic Bohème', 'Ash grey base', 'Chalk-white striations', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-jardin-emerald',
    name: 'Le Chic Jardin Emerald',
    brand: 'Silestone',
    priceRange: '$125 – $175',
    typicalCost: '$5,500 – $8,500',
    category: 'dark',
    img: '/images/slabs/silestone-jardin-emerald.jpg',
    description: 'Regal dark emerald green quartz with subtle gold and white vein networks.',
    features: ['Le Chic Bohème', 'Dark emerald green', 'Gold & white veining', 'Exotic luxury statement']
  },
  {
    id: 'silestone-riviere-rose',
    name: 'Le Chic Riviére Rose',
    brand: 'Silestone',
    priceRange: '$120 – $165',
    typicalCost: '$5,200 – $8,200',
    category: 'warm',
    img: '/images/slabs/silestone-riviere-rose.jpg',
    description: 'Soft rose-quartz blush tone with gentle warm white veining.',
    features: ['Le Chic Bohème', 'Soft rose blush tone', 'Gentle warm veining', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-lime-delight',
    name: 'Urban Crush Lime Delight',
    brand: 'Silestone',
    priceRange: '$95 – $135',
    typicalCost: '$4,200 – $6,500',
    category: 'warm',
    img: '/images/slabs/silestone-lime-delight.jpg',
    description: 'Warm limestone-textured beige quartz designed for modern urban minimalism.',
    features: ['Urban Crush Series', 'Limestone textured beige', 'Tactile matte finish', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-concrete-pulse',
    name: 'Urban Crush Concrete Pulse',
    brand: 'Silestone',
    priceRange: '$92 – $130',
    typicalCost: '$4,100 – $6,300',
    category: 'grey',
    img: '/images/slabs/silestone-concrete-pulse.jpg',
    description: 'Industrial raw concrete aesthetic featuring subtle grey shading and tactile depth.',
    features: ['Urban Crush Series', 'Raw concrete look', 'Industrial grey shading', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-brass-relish',
    name: 'Urban Crush Brass Relish',
    brand: 'Silestone',
    priceRange: '$98 – $140',
    typicalCost: '$4,300 – $6,800',
    category: 'warm',
    img: '/images/slabs/silestone-brass-relish.jpg',
    description: 'Rich brown sandstone texture with subtle brass-golden graining.',
    features: ['Urban Crush Series', 'Brown sandstone texture', 'Brass-golden graining', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-cinder-craze',
    name: 'Urban Crush Cinder Craze',
    brand: 'Silestone',
    priceRange: '$95 – $135',
    typicalCost: '$4,200 – $6,500',
    category: 'dark',
    img: '/images/slabs/silestone-cinder-craze.jpg',
    description: 'Dark charcoal cinder finish bringing urban industrial grain to kitchen counters.',
    features: ['Urban Crush Series', 'Dark charcoal cinder', 'Industrial graining', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-ethereal-dusk',
    name: 'Ethereal Dusk',
    brand: 'Silestone',
    priceRange: '$110 – $155',
    typicalCost: '$4,800 – $7,500',
    category: 'marble',
    img: '/images/slabs/silestone-ethereal-dusk.jpg',
    description: 'White canvas crossed with modern bluish-grey directionless veining.',
    features: ['Ethereal Collection', 'Bluish-grey veining', 'Directionless marble flow', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-ethereal-haze',
    name: 'Ethereal Haze',
    brand: 'Silestone',
    priceRange: '$105 – $150',
    typicalCost: '$4,600 – $7,200',
    category: 'marble',
    img: '/images/slabs/silestone-ethereal-haze.jpg',
    description: 'Soft neutral grey veining drifting gracefully over a crisp white field.',
    features: ['Ethereal Collection', 'Soft grey drifting veins', 'Versatile modern white', 'HybriQ+ Technology']
  },
  {
    id: 'silestone-ethereal-noctis',
    name: 'Ethereal Noctis',
    brand: 'Silestone',
    priceRange: '$115 – $160',
    typicalCost: '$5,000 – $7,800',
    category: 'marble',
    img: '/images/slabs/silestone-ethereal-noctis.jpg',
    description: 'Deep black and dark grey veining creating high-contrast architectural depth on pure white quartz.',
    features: ['Ethereal Collection', 'Deep black & grey veins', 'High-contrast marble depth', 'HybriQ+ Technology']
  },
  {
    id: 'tce-2015',
    name: 'TCE 2015 Starry Night<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'dark',
    img: '/images/slabs/tce-2015.jpg',
    description: 'Official TCE Stone TCE 2015 Starry Night<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2015 Starry Night<mark style=\"background design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1216',
    name: 'TCE 1216 Electric Yellow<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-1216.jpg',
    description: 'Official TCE Stone TCE 1216 Electric Yellow<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1216 Electric Yellow<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1219',
    name: 'TCE 1219 Gardenia<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-1219.jpg',
    description: 'Official TCE Stone TCE 1219 Gardenia<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1219 Gardenia<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1414',
    name: 'TCE 1414 Coral Bay<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-1414.jpg',
    description: 'Official TCE Stone TCE 1414 Coral Bay<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1414 Coral Bay<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1504',
    name: 'TCE 1504 Pure Grey<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'grey',
    img: '/images/slabs/tce-1504.jpg',
    description: 'Official TCE Stone TCE 1504 Pure Grey<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1504 Pure Grey<mark style=\"background design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1529',
    name: 'TCE 1529 Light Brick<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-1529.jpg',
    description: 'Official TCE Stone TCE 1529 Light Brick<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1529 Light Brick<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1531',
    name: 'TCE 1531 Espresso Swirl<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-1531.jpg',
    description: 'Official TCE Stone TCE 1531 Espresso Swirl<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1531 Espresso Swirl<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1538',
    name: 'TCE 1538 Electric Red<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-1538.jpg',
    description: 'Official TCE Stone TCE 1538 Electric Red<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1538 Electric Red<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1560',
    name: 'TCE 1560 Slate Grey<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'grey',
    img: '/images/slabs/tce-1560.jpg',
    description: 'Official TCE Stone TCE 1560 Slate Grey<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1560 Slate Grey<mark style=\"background design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1565',
    name: 'TCE 1565 Moss Green<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-1565.jpg',
    description: 'Official TCE Stone TCE 1565 Moss Green<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1565 Moss Green<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1607',
    name: 'TCE 1607 Pacific Grey<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'grey',
    img: '/images/slabs/tce-1607.jpg',
    description: 'Official TCE Stone TCE 1607 Pacific Grey<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1607 Pacific Grey<mark style=\"background design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1612',
    name: 'TCE 1612 Salmon Pink<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-1612.jpg',
    description: 'Official TCE Stone TCE 1612 Salmon Pink<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1612 Salmon Pink<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1674',
    name: 'TCE 1674 Baltic Brown<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-1674.jpg',
    description: 'Official TCE Stone TCE 1674 Baltic Brown<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1674 Baltic Brown<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-1902',
    name: 'TCE 1902 Simple Stream<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-1902.jpg',
    description: 'Official TCE Stone TCE 1902 Simple Stream<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 1902 Simple Stream<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2011',
    name: 'TCE 2011 Cream Nougat<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2011.jpg',
    description: 'Official TCE Stone TCE 2011 Cream Nougat<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2011 Cream Nougat<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2013',
    name: 'TCE 2013 Crystal Frost<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2013.jpg',
    description: 'Official TCE Stone TCE 2013 Crystal Frost<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2013 Crystal Frost<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2014',
    name: 'TCE 2014 Jet Black<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'dark',
    img: '/images/slabs/tce-2014.jpg',
    description: 'Official TCE Stone TCE 2014 Jet Black<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2014 Jet Black<mark style=\"background design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2016',
    name: 'TCE 2016 Crystal Grey<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'grey',
    img: '/images/slabs/tce-2016.jpg',
    description: 'Official TCE Stone TCE 2016 Crystal Grey<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2016 Crystal Grey<mark style=\"background design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2017',
    name: 'TCE 2017 Crystal Black<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'dark',
    img: '/images/slabs/tce-2017.jpg',
    description: 'Official TCE Stone TCE 2017 Crystal Black<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2017 Crystal Black<mark style=\"background design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2019',
    name: 'TCE 2019 Crystal White<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2019.jpg',
    description: 'Official TCE Stone TCE 2019 Crystal White<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2019 Crystal White<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2020',
    name: 'TCE 2020 Butter White<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2020.jpg',
    description: 'Official TCE Stone TCE 2020 Butter White<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2020 Butter White<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2025',
    name: 'TCE 2025 Crystal Brown<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2025.jpg',
    description: 'Official TCE Stone TCE 2025 Crystal Brown<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2025 Crystal Brown<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2026',
    name: 'TCE 2026 Crystal Mist<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2026.jpg',
    description: 'Official TCE Stone TCE 2026 Crystal Mist<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2026 Crystal Mist<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2027',
    name: 'TCE 2027 Crystal Mustard<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2027.jpg',
    description: 'Official TCE Stone TCE 2027 Crystal Mustard<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2027 Crystal Mustard<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2031',
    name: 'TCE 2031 Crystal Khaki<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2031.jpg',
    description: 'Official TCE Stone TCE 2031 Crystal Khaki<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2031 Crystal Khaki<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2032',
    name: 'TCE 2032 Multi Grey<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'grey',
    img: '/images/slabs/tce-2032.jpg',
    description: 'Official TCE Stone TCE 2032 Multi Grey<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2032 Multi Grey<mark style=\"background design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2033',
    name: 'TCE 2033 Multi Rust<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2033.jpg',
    description: 'Official TCE Stone TCE 2033 Multi Rust<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2033 Multi Rust<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2034',
    name: 'TCE 2034 Multi Taro<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2034.jpg',
    description: 'Official TCE Stone TCE 2034 Multi Taro<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2034 Multi Taro<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2035',
    name: 'TCE 2035 Multi Espresso<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2035.jpg',
    description: 'Official TCE Stone TCE 2035 Multi Espresso<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2035 Multi Espresso<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2036',
    name: 'TCE 2036 Multi Panda<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2036.jpg',
    description: 'Official TCE Stone TCE 2036 Multi Panda<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2036 Multi Panda<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2037',
    name: 'TCE 2037 Multi Light<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2037.jpg',
    description: 'Official TCE Stone TCE 2037 Multi Light<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2037 Multi Light<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2038',
    name: 'TCE 2038 Classic Calacatta<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$75 – $95',
    typicalCost: '$3,500 – $5,500',
    category: 'marble',
    img: '/images/slabs/tce-2038.jpg',
    description: 'Official TCE Stone TCE 2038 Classic Calacatta<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2038 Classic Calacatta<mark style=\"background design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2041',
    name: 'TCE 2041 Striking Stream<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-2041.jpg',
    description: 'Official TCE Stone TCE 2041 Striking Stream<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2041 Striking Stream<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-2042',
    name: 'TCE 2042 Calacatta Extra<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$75 – $95',
    typicalCost: '$3,500 – $5,500',
    category: 'marble',
    img: '/images/slabs/tce-2042.jpg',
    description: 'Official TCE Stone TCE 2042 Calacatta Extra<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 2042 Calacatta Extra<mark style=\"background design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4002',
    name: 'TCE 4002 Ivory White<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4002.jpg',
    description: 'Official TCE Stone TCE 4002 Ivory White<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4002 Ivory White<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4004',
    name: 'TCE 4004 Ivory Nougat<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4004.jpg',
    description: 'Official TCE Stone TCE 4004 Ivory Nougat<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4004 Ivory Nougat<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4006',
    name: 'TCE 4006 Organic Grey<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'grey',
    img: '/images/slabs/tce-4006.jpg',
    description: 'Official TCE Stone TCE 4006 Organic Grey<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4006 Organic Grey<mark style=\"background design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4007',
    name: 'TCE 4007 Organic Sand<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4007.jpg',
    description: 'Official TCE Stone TCE 4007 Organic Sand<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4007 Organic Sand<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4008',
    name: 'TCE 4008 Organic Umber<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4008.jpg',
    description: 'Official TCE Stone TCE 4008 Organic Umber<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4008 Organic Umber<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4012',
    name: 'TCE 4012 Pure Espresso<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4012.jpg',
    description: 'Official TCE Stone TCE 4012 Pure Espresso<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4012 Pure Espresso<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4013',
    name: 'TCE 4013 Pure Cedar<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4013.jpg',
    description: 'Official TCE Stone TCE 4013 Pure Cedar<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4013 Pure Cedar<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4018',
    name: 'TCE 4018 Soft Haze<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4018.jpg',
    description: 'Official TCE Stone TCE 4018 Soft Haze<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4018 Soft Haze<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4019',
    name: 'TCE 4019 Reflective Scatter<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4019.jpg',
    description: 'Official TCE Stone TCE 4019 Reflective Scatter<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4019 Reflective Scatter<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4020',
    name: 'TCE 4020 Reflective Grey<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'grey',
    img: '/images/slabs/tce-4020.jpg',
    description: 'Official TCE Stone TCE 4020 Reflective Grey<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4020 Reflective Grey<mark style=\"background design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4021',
    name: 'TCE 4021 Reflective Black<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'dark',
    img: '/images/slabs/tce-4021.jpg',
    description: 'Official TCE Stone TCE 4021 Reflective Black<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4021 Reflective Black<mark style=\"background design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4022',
    name: 'TCE 4022 Lagoon<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4022.jpg',
    description: 'Official TCE Stone TCE 4022 Lagoon<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4022 Lagoon<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4023',
    name: 'TCE 4023 Estuary<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4023.jpg',
    description: 'Official TCE Stone TCE 4023 Estuary<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4023 Estuary<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4024',
    name: 'TCE 4024 Carrara Bianca<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$65 – $85',
    typicalCost: '$3,000 – $4,800',
    category: 'marble',
    img: '/images/slabs/tce-4024.jpg',
    description: 'Official TCE Stone TCE 4024 Carrara Bianca<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4024 Carrara Bianca<mark style=\"background design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4025',
    name: 'TCE 4025 Carrara Crema<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$65 – $85',
    typicalCost: '$3,000 – $4,800',
    category: 'marble',
    img: '/images/slabs/tce-4025.jpg',
    description: 'Official TCE Stone TCE 4025 Carrara Crema<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4025 Carrara Crema<mark style=\"background design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4026',
    name: 'TCE 4026 Carrara Bruno<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$65 – $85',
    typicalCost: '$3,000 – $4,800',
    category: 'marble',
    img: '/images/slabs/tce-4026.jpg',
    description: 'Official TCE Stone TCE 4026 Carrara Bruno<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4026 Carrara Bruno<mark style=\"background design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4028',
    name: 'TCE 4028 Ice River<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4028.jpg',
    description: 'Official TCE Stone TCE 4028 Ice River<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4028 Ice River<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4029',
    name: 'TCE 4029 Calacatta Max<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$75 – $95',
    typicalCost: '$3,500 – $5,500',
    category: 'marble',
    img: '/images/slabs/tce-4029.jpg',
    description: 'Official TCE Stone TCE 4029 Calacatta Max<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4029 Calacatta Max<mark style=\"background design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4030',
    name: 'TCE 4030 Glacier<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4030.jpg',
    description: 'Official TCE Stone TCE 4030 Glacier<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4030 Glacier<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4031',
    name: 'TCE 4031 Calacatta Forest<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$75 – $95',
    typicalCost: '$3,500 – $5,500',
    category: 'marble',
    img: '/images/slabs/tce-4031.jpg',
    description: 'Official TCE Stone TCE 4031 Calacatta Forest<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4031 Calacatta Forest<mark style=\"background design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4033',
    name: 'TCE 4033 Winter Whisper<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4033.jpg',
    description: 'Official TCE Stone TCE 4033 Winter Whisper<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4033 Winter Whisper<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4034',
    name: 'TCE 4034 Origin<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4034.jpg',
    description: 'Official TCE Stone TCE 4034 Origin<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4034 Origin<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4035',
    name: 'TCE 4035 Blossom<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4035.jpg',
    description: 'Official TCE Stone TCE 4035 Blossom<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4035 Blossom<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4036',
    name: 'TCE 4036 Tranquility<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4036.jpg',
    description: 'Official TCE Stone TCE 4036 Tranquility<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4036 Tranquility<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4037',
    name: 'TCE 4037 Misty Arabescato<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4037.jpg',
    description: 'Official TCE Stone TCE 4037 Misty Arabescato<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4037 Misty Arabescato<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4038',
    name: 'TCE 4038 Charcoal Arabescato<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'dark',
    img: '/images/slabs/tce-4038.jpg',
    description: 'Official TCE Stone TCE 4038 Charcoal Arabescato<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4038 Charcoal Arabescato<mark style=\"background design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4041',
    name: 'TCE 4041 Tundra<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-4041.jpg',
    description: 'Official TCE Stone TCE 4041 Tundra<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4041 Tundra<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4046',
    name: 'TCE 4046 Statuario Grigio<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$75 – $95',
    typicalCost: '$3,500 – $5,500',
    category: 'marble',
    img: '/images/slabs/tce-4046.jpg',
    description: 'Official TCE Stone TCE 4046 Statuario Grigio<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4046 Statuario Grigio<mark style=\"background design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4050',
    name: 'TCE 4050 Deep Concrete<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'grey',
    img: '/images/slabs/tce-4050.jpg',
    description: 'Official TCE Stone TCE 4050 Deep Concrete<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4050 Deep Concrete<mark style=\"background design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-4051',
    name: 'TCE 4051 Light Concrete<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'grey',
    img: '/images/slabs/tce-4051.jpg',
    description: 'Official TCE Stone TCE 4051 Light Concrete<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 4051 Light Concrete<mark style=\"background design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-6002',
    name: 'TCE 6002 Spring Sky<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-6002.jpg',
    description: 'Official TCE Stone TCE 6002 Spring Sky<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 6002 Spring Sky<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-6021',
    name: 'TCE 6021 Sepia Swirl<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-6021.jpg',
    description: 'Official TCE Stone TCE 6021 Sepia Swirl<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 6021 Sepia Swirl<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-6024',
    name: 'TCE 6024 Linen Swirl<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-6024.jpg',
    description: 'Official TCE Stone TCE 6024 Linen Swirl<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 6024 Linen Swirl<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'tce-8003',
    name: 'TCE 8003 Icy Mist<mark style="background',
    brand: 'TCE Stone',
    priceRange: '$58 – $72',
    typicalCost: '$2,600 – $4,200',
    category: 'white',
    img: '/images/slabs/tce-8003.jpg',
    description: 'Official TCE Stone TCE 8003 Icy Mist<mark style="background quartz countertop slab. Premium engineered surface designed for residential and commercial kitchens.',
    features: ["TCE 8003 Icy Mist<mark style=\"background design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksl8701',
    name: 'Kasa KSL8701',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KSL8701 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSL8701 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksl8602',
    name: 'Kasa KSL8602',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KSL8602 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSL8602 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksl6011',
    name: 'Kasa KSL6011',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KSL6011 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSL6011 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksl6010',
    name: 'Kasa KSL6010',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KSL6010 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSL6010 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksv5101',
    name: 'Kasa KSV5101',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KSV5101 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSV5101 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksv1105',
    name: 'Kasa KSV1105',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KSV1105 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSV1105 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksv1102',
    name: 'Kasa KSV1102',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KSV1102 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSV1102 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksv1101',
    name: 'Kasa KSV1101',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KSV1101 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSV1101 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky078',
    name: 'Kasa KY078',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KY078 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY078 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky066',
    name: 'Kasa KY066',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KY066 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY066 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky063',
    name: 'Kasa KY063',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KY063 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY063 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky060',
    name: 'Kasa KY060',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KY060 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY060 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky059',
    name: 'Kasa KY059',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KY059 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY059 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky057',
    name: 'Kasa KY057',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KY057 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY057 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky055',
    name: 'Kasa KY055',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KY055 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY055 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky052',
    name: 'Kasa KY052',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KY052 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY052 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksl8601',
    name: 'Kasa KSL8601',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KSL8601 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSL8601 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksl6017',
    name: 'Kasa KSL6017',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KSL6017 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSL6017 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksl6015',
    name: 'Kasa KSL6015',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KSL6015 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSL6015 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksv9200',
    name: 'Kasa KSV9200',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KSV9200 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSV9200 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksv1106',
    name: 'Kasa KSV1106',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KSV1106 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSV1106 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky070',
    name: 'Kasa KY070',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KY070 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY070 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky067',
    name: 'Kasa KY067',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KY067 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY067 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky061',
    name: 'Kasa KY061',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KY061 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY061 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky058',
    name: 'Kasa KY058',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KY058 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY058 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky056',
    name: 'Kasa KY056',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KY056 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY056 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky046',
    name: 'Kasa KY046',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KY046 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY046 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky045',
    name: 'Kasa KY045',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KY045 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY045 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky043',
    name: 'Kasa KY043',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KY043 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY043 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky042',
    name: 'Kasa KY042',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KY042 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY042 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky041',
    name: 'Kasa KY041',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KY041 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY041 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky040',
    name: 'Kasa KY040',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KY040 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY040 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky037',
    name: 'Kasa KY037',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KY037 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY037 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksl6032',
    name: 'Kasa KSL6032',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KSL6032 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSL6032 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksl6031',
    name: 'Kasa KSL6031',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KSL6031 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSL6031 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksl6030',
    name: 'Kasa KSL6030',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KSL6030 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSL6030 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ksl6016',
    name: 'Kasa KSL6016',
    brand: 'Kasa Quartz',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,300',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KSL6016 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KSL6016 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky036',
    name: 'Kasa KY036',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KY036 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY036 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky031',
    name: 'Kasa KY031',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KY031 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY031 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky028',
    name: 'Kasa KY028',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KY028 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY028 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky025',
    name: 'Kasa KY025',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KY025 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY025 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky021',
    name: 'Kasa KY021',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KY021 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY021 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky008',
    name: 'Kasa KY008',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KY008 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY008 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'ky007',
    name: 'Kasa KY007',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KY007 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KY007 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kd017',
    name: 'Kasa KD017',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KD017 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KD017 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kd016',
    name: 'Kasa KD016',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KD016 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KD016 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kd008',
    name: 'Kasa KD008',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KD008 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KD008 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kd007',
    name: 'Kasa KD007',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KD007 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KD007 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv019',
    name: 'Kasa KV019',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KV019 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV019 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv018',
    name: 'Kasa KV018',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KV018 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV018 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv017',
    name: 'Kasa KV017',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KV017 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV017 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv016',
    name: 'Kasa KV016',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KV016 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV016 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv015',
    name: 'Kasa KV015',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KV015 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV015 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv011',
    name: 'Kasa KV011',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KV011 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV011 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv007',
    name: 'Kasa KV007',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KV007 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV007 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv006',
    name: 'Kasa KV006',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KV006 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV006 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv005',
    name: 'Kasa KV005',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KV005 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV005 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv003',
    name: 'Kasa KV003',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa KV003 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV003 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv002',
    name: 'Kasa KV002',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa KV002 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV002 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kv001',
    name: 'Kasa KV001',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa KV001 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KV001 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kr7009',
    name: 'Kasa KR7009',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa KR7009 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa KR7009 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9927',
    name: 'Kasa K9927',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa K9927 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9927 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9926',
    name: 'Kasa K9926',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa K9926 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9926 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9925',
    name: 'Kasa K9925',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa K9925 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9925 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9924',
    name: 'Kasa K9924',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa K9924 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9924 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9923',
    name: 'Kasa K9923',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa K9923 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9923 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9922',
    name: 'Kasa K9922',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa K9922 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9922 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9919',
    name: 'Kasa K9919',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa K9919 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9919 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9917',
    name: 'Kasa K9917',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa K9917 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9917 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9912',
    name: 'Kasa K9912',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa K9912 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9912 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9911',
    name: 'Kasa K9911',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa K9911 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9911 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9910',
    name: 'Kasa K9910',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa K9910 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9910 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9909',
    name: 'Kasa K9909',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'dark',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa K9909 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9909 design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9907',
    name: 'Kasa K9907',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa K9907 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9907 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9906',
    name: 'Kasa K9906',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'grey',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa K9906 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9906 design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9908',
    name: 'Kasa K9908',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa K9908 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9908 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9905',
    name: 'Kasa K9905',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa K9905 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9905 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'k9902',
    name: 'Kasa K9902',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa K9902 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa K9902 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9020',
    name: 'Kasa R9020',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa R9020 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9020 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9019',
    name: 'Kasa R9019',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa R9019 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9019 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9018',
    name: 'Kasa R9018',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa R9018 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9018 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9017',
    name: 'Kasa R9017',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa R9017 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9017 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9016',
    name: 'Kasa R9016',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa R9016 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9016 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9015',
    name: 'Kasa R9015',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa R9015 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9015 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9013',
    name: 'Kasa R9013',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa R9013 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9013 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9012',
    name: 'Kasa R9012',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa R9012 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9012 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9011',
    name: 'Kasa R9011',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa R9011 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9011 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9010',
    name: 'Kasa R9010',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa R9010 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9010 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9009',
    name: 'Kasa R9009',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa R9009 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9009 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9008',
    name: 'Kasa R9008',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa R9008 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9008 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9006',
    name: 'Kasa R9006',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa R9006 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9006 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9005',
    name: 'Kasa R9005',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa R9005 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9005 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r9001',
    name: 'Kasa R9001',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa R9001 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R9001 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r8008',
    name: 'Kasa R8008',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa R8008 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R8008 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r8007',
    name: 'Kasa R8007',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv5101.jpg',
    description: 'Official Kasa Quartz Kasa R8007 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R8007 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-r8006',
    name: 'Kasa R8006',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksv1101.jpg',
    description: 'Official Kasa Quartz Kasa R8006 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa R8006 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-jhu100',
    name: 'Kasa JHU100',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl8701.jpg',
    description: 'Official Kasa Quartz Kasa JHU100 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa JHU100 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kasa-jhu200',
    name: 'Kasa JHU200',
    brand: 'Kasa Quartz',
    priceRange: '$48 – $56',
    typicalCost: '$1,900 – $2,800',
    category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg',
    description: 'Official Kasa Quartz Kasa JHU200 countertop slab. Factory-direct engineered quartz surface for Toronto & GTA kitchen renovations.',
    features: ["Kasa JHU200 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2002',
    name: 'KStone P2002 Statuario / H Statuario (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'marble',
    img: '/images/slabs/kstone-p2002.jpg',
    description: 'Official KStone Surfaces KStone P2002 Statuario / H Statuario (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2002 Statuario / H Statuario (Honed) design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2003',
    name: 'KStone P2003 Thunder Night / H Thunder Night (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'dark',
    img: '/images/slabs/kstone-p2003.jpg',
    description: 'Official KStone Surfaces KStone P2003 Thunder Night / H Thunder Night (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2003 Thunder Night / H Thunder Night (Honed) design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2006',
    name: 'KStone P2006 Nero Marquina/ Nero Marquina (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'dark',
    img: '/images/slabs/kstone-p2006.jpg',
    description: 'Official KStone Surfaces KStone P2006 Nero Marquina/ Nero Marquina (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2006 Nero Marquina/ Nero Marquina (Honed) design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2007',
    name: 'KStone P2007 Statuario Extra',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'marble',
    img: '/images/slabs/kstone-p2007.jpg',
    description: 'Official KStone Surfaces KStone P2007 Statuario Extra quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2007 Statuario Extra design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2008',
    name: 'KStone P2008 Calacatta White (Full Body Pattern)',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-p2008.jpg',
    description: 'Official KStone Surfaces KStone P2008 Calacatta White (Full Body Pattern) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2008 Calacatta White (Full Body Pattern) design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2009',
    name: 'KStone P2009 Statuario Bello (Full Body Pattern)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'marble',
    img: '/images/slabs/kstone-p2009.jpg',
    description: 'Official KStone Surfaces KStone P2009 Statuario Bello (Full Body Pattern) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2009 Statuario Bello (Full Body Pattern) design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2010',
    name: 'KStone P2010 Pietra Grigio/ H Pietra Grigio (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2010.jpg',
    description: 'Official KStone Surfaces KStone P2010 Pietra Grigio/ H Pietra Grigio (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2010 Pietra Grigio/ H Pietra Grigio (Honed) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2011',
    name: 'KStone P2011 Imperial Fantasy / H Imperial Fantasy (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-p2011.jpg',
    description: 'Official KStone Surfaces KStone P2011 Imperial Fantasy / H Imperial Fantasy (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2011 Imperial Fantasy / H Imperial Fantasy (Honed) design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2012',
    name: 'KStone P2012 Statuario Gold / H Statuario Gold(Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-p2012.jpg',
    description: 'Official KStone Surfaces KStone P2012 Statuario Gold / H Statuario Gold(Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2012 Statuario Gold / H Statuario Gold(Honed) design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2014',
    name: 'KStone P2014 Carrara Gold',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-p2014.jpg',
    description: 'Official KStone Surfaces KStone P2014 Carrara Gold quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2014 Carrara Gold design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2015',
    name: 'KStone P2015 Arabescato',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2015.jpg',
    description: 'Official KStone Surfaces KStone P2015 Arabescato quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2015 Arabescato design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2016',
    name: 'KStone P2016 Bianco Staturio (Full Body Pattern)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2016.jpg',
    description: 'Official KStone Surfaces KStone P2016 Bianco Staturio (Full Body Pattern) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2016 Bianco Staturio (Full Body Pattern) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2017',
    name: 'KStone P2017 Calacatta Oro',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-p2017.jpg',
    description: 'Official KStone Surfaces KStone P2017 Calacatta Oro quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2017 Calacatta Oro design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2018',
    name: 'KStone P2018 White Beauty (Continuous pattern)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2018.jpg',
    description: 'Official KStone Surfaces KStone P2018 White Beauty (Continuous pattern) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2018 White Beauty (Continuous pattern) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2020',
    name: 'KStone P2020 Taj Mahal/ H Taj Mahal (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2020.jpg',
    description: 'Official KStone Surfaces KStone P2020 Taj Mahal/ H Taj Mahal (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2020 Taj Mahal/ H Taj Mahal (Honed) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2021h',
    name: 'KStone P2021H Travertina (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2021h.jpg',
    description: 'Official KStone Surfaces KStone P2021H Travertina (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2021H Travertina (Honed) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2022h',
    name: 'KStone P2022H Travertine (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2022h.jpg',
    description: 'Official KStone Surfaces KStone P2022H Travertine (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2022H Travertine (Honed) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2033',
    name: 'KStone P2033 Crystal White/ Crystal White (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2033.jpg',
    description: 'Official KStone Surfaces KStone P2033 Crystal White/ Crystal White (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2033 Crystal White/ Crystal White (Honed) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2035h',
    name: 'KStone P2035H Pure Black (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'dark',
    img: '/images/slabs/kstone-p2035h.jpg',
    description: 'Official KStone Surfaces KStone P2035H Pure Black (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2035H Pure Black (Honed) design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2055',
    name: 'KStone P2055 Patagon Grey (6mm, Continuous pattern)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'grey',
    img: '/images/slabs/kstone-p2055.jpg',
    description: 'Official KStone Surfaces KStone P2055 Patagon Grey (6mm, Continuous pattern) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2055 Patagon Grey (6mm, Continuous pattern) design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2055h',
    name: 'KStone P2055H Alaska White (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2055h.jpg',
    description: 'Official KStone Surfaces KStone P2055H Alaska White (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2055H Alaska White (Honed) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2056h',
    name: 'KStone P2056H Calcatta Viola',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2056h.jpg',
    description: 'Official KStone Surfaces KStone P2056H Calcatta Viola quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2056H Calcatta Viola design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2058',
    name: 'KStone P2058 Lapis Blue (6mm, Continuous pattern)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2058.jpg',
    description: 'Official KStone Surfaces KStone P2058 Lapis Blue (6mm, Continuous pattern) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2058 Lapis Blue (6mm, Continuous pattern) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2061h',
    name: 'KStone P2061H Glacier (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2061h.jpg',
    description: 'Official KStone Surfaces KStone P2061H Glacier (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2061H Glacier (Honed) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2101',
    name: 'KStone P2101 Macchia Antica',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'white',
    img: '/images/slabs/kstone-p2101.jpg',
    description: 'Official KStone Surfaces KStone P2101 Macchia Antica quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2101 Macchia Antica design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2104',
    name: 'KStone P2104 Invisible Grey',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'grey',
    img: '/images/slabs/kstone-p2104.jpg',
    description: 'Official KStone Surfaces KStone P2104 Invisible Grey quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2104 Invisible Grey design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2105',
    name: 'KStone P2105 Calacatta Vagli',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-p2105.jpg',
    description: 'Official KStone Surfaces KStone P2105 Calacatta Vagli quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2105 Calacatta Vagli design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-p2107',
    name: 'KStone P2107 Pietra Grey',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'grey',
    img: '/images/slabs/kstone-p2107.jpg',
    description: 'Official KStone Surfaces KStone P2107 Pietra Grey quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone P2107 Pietra Grey design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-a3000',
    name: 'KStone A3000 Cemento',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-a3000.jpg',
    description: 'Official KStone Surfaces KStone A3000 Cemento quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone A3000 Cemento design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-a3011',
    name: 'KStone A3011 Sprinkle Salt',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-a3011.jpg',
    description: 'Official KStone Surfaces KStone A3011 Sprinkle Salt quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone A3011 Sprinkle Salt design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-a3022',
    name: 'KStone A3022 Smoky Grey',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'grey',
    img: '/images/slabs/kstone-a3022.jpg',
    description: 'Official KStone Surfaces KStone A3022 Smoky Grey quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone A3022 Smoky Grey design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-a3097',
    name: 'KStone A3097 Glossy White',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-a3097.jpg',
    description: 'Official KStone Surfaces KStone A3097 Glossy White quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone A3097 Glossy White design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-b4001',
    name: 'KStone B4001 Crystal Dust',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-b4001.jpg',
    description: 'Official KStone Surfaces KStone B4001 Crystal Dust quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone B4001 Crystal Dust design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-b4002',
    name: 'KStone B4002 White Sea Salt',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-b4002.jpg',
    description: 'Official KStone Surfaces KStone B4002 White Sea Salt quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone B4002 White Sea Salt design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-b4005',
    name: 'KStone B4005 Sparkle Cream',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'warm',
    img: '/images/slabs/kstone-b4005.jpg',
    description: 'Official KStone Surfaces KStone B4005 Sparkle Cream quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone B4005 Sparkle Cream design", "Warm quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-b4011',
    name: 'KStone B4011 Black Galaxy',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'dark',
    img: '/images/slabs/kstone-b4011.jpg',
    description: 'Official KStone Surfaces KStone B4011 Black Galaxy quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone B4011 Black Galaxy design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5000',
    name: 'KStone C5000 Buttery Cream',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'warm',
    img: '/images/slabs/kstone-c5000.jpg',
    description: 'Official KStone Surfaces KStone C5000 Buttery Cream quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5000 Buttery Cream design", "Warm quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5009',
    name: 'KStone C5009 Cristallo Bianco',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-c5009.jpg',
    description: 'Official KStone Surfaces KStone C5009 Cristallo Bianco quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5009 Cristallo Bianco design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5010',
    name: 'KStone C5010 Smoky White',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-c5010.jpg',
    description: 'Official KStone Surfaces KStone C5010 Smoky White quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5010 Smoky White design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5013',
    name: 'KStone C5013 Chestnut',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-c5013.jpg',
    description: 'Official KStone Surfaces KStone C5013 Chestnut quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5013 Chestnut design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5027',
    name: 'KStone C5027 White Pearl',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-c5027.jpg',
    description: 'Official KStone Surfaces KStone C5027 White Pearl quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5027 White Pearl design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5079',
    name: 'KStone C5079 Cotton Grey',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'grey',
    img: '/images/slabs/kstone-c5079.jpg',
    description: 'Official KStone Surfaces KStone C5079 Cotton Grey quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5079 Cotton Grey design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5109',
    name: 'KStone C5109 Carrara White',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'marble',
    img: '/images/slabs/kstone-c5109.jpg',
    description: 'Official KStone Surfaces KStone C5109 Carrara White quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5109 Carrara White design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5110',
    name: 'KStone C5110 Grigio Imperiale',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'white',
    img: '/images/slabs/kstone-c5110.jpg',
    description: 'Official KStone Surfaces KStone C5110 Grigio Imperiale quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5110 Grigio Imperiale design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5111',
    name: 'KStone C5111',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-c5111.jpg',
    description: 'Official KStone Surfaces KStone C5111 quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5111 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5121',
    name: 'KStone C5121 Seashell',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-c5121.jpg',
    description: 'Official KStone Surfaces KStone C5121 Seashell quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5121 Seashell design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5123',
    name: 'KStone C5123 Satin light Concrete',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'grey',
    img: '/images/slabs/kstone-c5123.jpg',
    description: 'Official KStone Surfaces KStone C5123 Satin light Concrete quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5123 Satin light Concrete design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5126',
    name: 'KStone C5126 Venato Carrara',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'marble',
    img: '/images/slabs/kstone-c5126.jpg',
    description: 'Official KStone Surfaces KStone C5126 Venato Carrara quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5126 Venato Carrara design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-c5127',
    name: 'KStone C5127 Satin Fresh Concrete',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'grey',
    img: '/images/slabs/kstone-c5127.jpg',
    description: 'Official KStone Surfaces KStone C5127 Satin Fresh Concrete quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone C5127 Satin Fresh Concrete design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-f7004',
    name: 'KStone F7004 Elbony Grey',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'grey',
    img: '/images/slabs/kstone-f7004.jpg',
    description: 'Official KStone Surfaces KStone F7004 Elbony Grey quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone F7004 Elbony Grey design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1001',
    name: 'KStone K1001 Macchia Gold (Printed Quartz)',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-k1001.jpg',
    description: 'Official KStone Surfaces KStone K1001 Macchia Gold (Printed Quartz) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1001 Macchia Gold (Printed Quartz) design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1002',
    name: 'KStone K1002 Symphony Grey (Printed Quartz)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'grey',
    img: '/images/slabs/kstone-k1002.jpg',
    description: 'Official KStone Surfaces KStone K1002 Symphony Grey (Printed Quartz) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1002 Symphony Grey (Printed Quartz) design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1003',
    name: 'KStone K1003 Azul Veil (Printed Quartz)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1003.jpg',
    description: 'Official KStone Surfaces KStone K1003 Azul Veil (Printed Quartz) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1003 Azul Veil (Printed Quartz) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1025',
    name: 'KStone K1025 Spindrift',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1025.jpg',
    description: 'Official KStone Surfaces KStone K1025 Spindrift quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1025 Spindrift design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1026',
    name: 'KStone K1026 Cristallo Gold',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-k1026.jpg',
    description: 'Official KStone Surfaces KStone K1026 Cristallo Gold quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1026 Cristallo Gold design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1050',
    name: 'KStone K1050 Gold Statuario',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-k1050.jpg',
    description: 'Official KStone Surfaces KStone K1050 Gold Statuario quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1050 Gold Statuario design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1053',
    name: 'KStone K1053 Arabescato Venato',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1053.jpg',
    description: 'Official KStone Surfaces KStone K1053 Arabescato Venato quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1053 Arabescato Venato design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1058',
    name: 'KStone K1058 Ocean Wave',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1058.jpg',
    description: 'Official KStone Surfaces KStone K1058 Ocean Wave quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1058 Ocean Wave design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1060',
    name: 'KStone K1060 Ocean Shore',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1060.jpg',
    description: 'Official KStone Surfaces KStone K1060 Ocean Shore quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1060 Ocean Shore design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1062',
    name: 'KStone K1062 Taj White',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1062.jpg',
    description: 'Official KStone Surfaces KStone K1062 Taj White quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1062 Taj White design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1064',
    name: 'KStone K1064 Taj Desert',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1064.jpg',
    description: 'Official KStone Surfaces KStone K1064 Taj Desert quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1064 Taj Desert design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1065',
    name: 'KStone K1065 Taj Cremo',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1065.jpg',
    description: 'Official KStone Surfaces KStone K1065 Taj Cremo quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1065 Taj Cremo design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1065m',
    name: 'KStone K1065M Taj Cremo (Matte)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1065m.jpg',
    description: 'Official KStone Surfaces KStone K1065M Taj Cremo (Matte) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1065M Taj Cremo (Matte) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1069m',
    name: 'KStone K1069M Taj Mahal (Matte)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1069m.jpg',
    description: 'Official KStone Surfaces KStone K1069M Taj Mahal (Matte) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1069M Taj Mahal (Matte) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1072',
    name: 'KStone K1072 Bianco Namibia',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1072.jpg',
    description: 'Official KStone Surfaces KStone K1072 Bianco Namibia quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1072 Bianco Namibia design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1074',
    name: 'KStone K1074 Naica',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1074.jpg',
    description: 'Official KStone Surfaces KStone K1074 Naica quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1074 Naica design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1076',
    name: 'KStone K1076 Travertine White (Leathered)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1076.jpg',
    description: 'Official KStone Surfaces KStone K1076 Travertine White (Leathered) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1076 Travertine White (Leathered) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1103',
    name: 'KStone K1103 Cremo Fantasy',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-k1103.jpg',
    description: 'Official KStone Surfaces KStone K1103 Cremo Fantasy quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1103 Cremo Fantasy design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1103m',
    name: 'KStone K1103M Cremo Fantasy (Matte)',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-k1103m.jpg',
    description: 'Official KStone Surfaces KStone K1103M Cremo Fantasy (Matte) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1103M Cremo Fantasy (Matte) design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-k1104',
    name: 'KStone K1104 Silky Shore',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-k1104.jpg',
    description: 'Official KStone Surfaces KStone K1104 Silky Shore quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone K1104 Silky Shore design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6101',
    name: 'KStone Q6101 Calacatta Gold',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-q6101.jpg',
    description: 'Official KStone Surfaces KStone Q6101 Calacatta Gold quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6101 Calacatta Gold design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6102',
    name: 'KStone Q6102 Kingsman',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-q6102.jpg',
    description: 'Official KStone Surfaces KStone Q6102 Kingsman quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6102 Kingsman design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6103',
    name: 'KStone Q6103 Nova Grey',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'grey',
    img: '/images/slabs/kstone-q6103.jpg',
    description: 'Official KStone Surfaces KStone Q6103 Nova Grey quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6103 Nova Grey design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6104',
    name: 'KStone Q6104 Misty Drift',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-q6104.jpg',
    description: 'Official KStone Surfaces KStone Q6104 Misty Drift quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6104 Misty Drift design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6106',
    name: 'KStone Q6106 Botanica White',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-q6106.jpg',
    description: 'Official KStone Surfaces KStone Q6106 Botanica White quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6106 Botanica White design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6107',
    name: 'KStone Q6107 Statuario Pearl',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'marble',
    img: '/images/slabs/kstone-q6107.jpg',
    description: 'Official KStone Surfaces KStone Q6107 Statuario Pearl quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6107 Statuario Pearl design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6108',
    name: 'KStone Q6108 Polar White',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-q6108.jpg',
    description: 'Official KStone Surfaces KStone Q6108 Polar White quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6108 Polar White design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6109',
    name: 'KStone Q6109 Imperial White',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'white',
    img: '/images/slabs/kstone-q6109.jpg',
    description: 'Official KStone Surfaces KStone Q6109 Imperial White quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6109 Imperial White design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6110',
    name: 'KStone Q6110 Calacatta Arctic',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-q6110.jpg',
    description: 'Official KStone Surfaces KStone Q6110 Calacatta Arctic quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6110 Calacatta Arctic design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6111',
    name: 'KStone Q6111 River Gold',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-q6111.jpg',
    description: 'Official KStone Surfaces KStone Q6111 River Gold quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6111 River Gold design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6112',
    name: 'KStone Q6112 Urban Noir',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-q6112.jpg',
    description: 'Official KStone Surfaces KStone Q6112 Urban Noir quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6112 Urban Noir design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6113',
    name: 'KStone Q6113 Sahara Noir',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-q6113.jpg',
    description: 'Official KStone Surfaces KStone Q6113 Sahara Noir quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6113 Sahara Noir design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6114',
    name: 'KStone Q6114 Lunar Grey',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'grey',
    img: '/images/slabs/kstone-q6114.jpg',
    description: 'Official KStone Surfaces KStone Q6114 Lunar Grey quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6114 Lunar Grey design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6116',
    name: 'KStone Q6116 Panda',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-q6116.jpg',
    description: 'Official KStone Surfaces KStone Q6116 Panda quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6116 Panda design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6118',
    name: 'KStone Q6118 Bianco Thunder',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-q6118.jpg',
    description: 'Official KStone Surfaces KStone Q6118 Bianco Thunder quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6118 Bianco Thunder design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6119',
    name: 'KStone Q6119 Tranquility Gold',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-q6119.jpg',
    description: 'Official KStone Surfaces KStone Q6119 Tranquility Gold quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6119 Tranquility Gold design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6120',
    name: 'KStone Q6120 Fusion Caramel',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-q6120.jpg',
    description: 'Official KStone Surfaces KStone Q6120 Fusion Caramel quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6120 Fusion Caramel design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6122',
    name: 'KStone Q6122 White Lux',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-q6122.jpg',
    description: 'Official KStone Surfaces KStone Q6122 White Lux quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6122 White Lux design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6125',
    name: 'KStone Q6125 Aqua',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-q6125.jpg',
    description: 'Official KStone Surfaces KStone Q6125 Aqua quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6125 Aqua design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-q6155',
    name: 'KStone Q6155 Misty Grey',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'grey',
    img: '/images/slabs/kstone-q6155.jpg',
    description: 'Official KStone Surfaces KStone Q6155 Misty Grey quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Q6155 Misty Grey design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8001',
    name: 'KStone V8001 Calacatta Vintage',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-v8001.jpg',
    description: 'Official KStone Surfaces KStone V8001 Calacatta Vintage quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8001 Calacatta Vintage design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8002',
    name: 'KStone V8002 Statuario Caldia',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'marble',
    img: '/images/slabs/kstone-v8002.jpg',
    description: 'Official KStone Surfaces KStone V8002 Statuario Caldia quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8002 Statuario Caldia design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8004',
    name: 'KStone V8004 Bianco Nuvo',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-v8004.jpg',
    description: 'Official KStone Surfaces KStone V8004 Bianco Nuvo quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8004 Bianco Nuvo design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8005',
    name: 'KStone V8005 Calacatta Snow',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-v8005.jpg',
    description: 'Official KStone Surfaces KStone V8005 Calacatta Snow quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8005 Calacatta Snow design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8006',
    name: 'KStone V8006 Dove White',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-v8006.jpg',
    description: 'Official KStone Surfaces KStone V8006 Dove White quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8006 Dove White design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8007',
    name: 'KStone V8007 Calacatta Fusion',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-v8007.jpg',
    description: 'Official KStone Surfaces KStone V8007 Calacatta Fusion quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8007 Calacatta Fusion design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8008',
    name: 'KStone V8008 Calacatta Extra',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-v8008.jpg',
    description: 'Official KStone Surfaces KStone V8008 Calacatta Extra quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8008 Calacatta Extra design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8010',
    name: 'KStone V8010 Venato Gold',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-v8010.jpg',
    description: 'Official KStone Surfaces KStone V8010 Venato Gold quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8010 Venato Gold design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8011',
    name: 'KStone V8011 White Dream',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-v8011.jpg',
    description: 'Official KStone Surfaces KStone V8011 White Dream quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8011 White Dream design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8012',
    name: 'KStone V8012 Maquina Night',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'dark',
    img: '/images/slabs/kstone-v8012.jpg',
    description: 'Official KStone Surfaces KStone V8012 Maquina Night quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8012 Maquina Night design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8015',
    name: 'KStone V8015 Calacatta Ice',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-v8015.jpg',
    description: 'Official KStone Surfaces KStone V8015 Calacatta Ice quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8015 Calacatta Ice design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v8016',
    name: 'KStone V8016 Calacatta Oro',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-v8016.jpg',
    description: 'Official KStone Surfaces KStone V8016 Calacatta Oro quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V8016 Calacatta Oro design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-y9006',
    name: 'KStone Y9006 Forest River',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-y9006.jpg',
    description: 'Official KStone Surfaces KStone Y9006 Forest River quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Y9006 Forest River design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-y9008',
    name: 'KStone Y9008 Oceano',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-y9008.jpg',
    description: 'Official KStone Surfaces KStone Y9008 Oceano quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Y9008 Oceano design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-y9014',
    name: 'KStone Y9014 Colonial Cream',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'warm',
    img: '/images/slabs/kstone-y9014.jpg',
    description: 'Official KStone Surfaces KStone Y9014 Colonial Cream quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Y9014 Colonial Cream design", "Warm quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-y9015',
    name: 'KStone Y9015 Imperial Grey',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'grey',
    img: '/images/slabs/kstone-y9015.jpg',
    description: 'Official KStone Surfaces KStone Y9015 Imperial Grey quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Y9015 Imperial Grey design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-y9016',
    name: 'KStone Y9016 Imperial Titanium',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'white',
    img: '/images/slabs/kstone-y9016.jpg',
    description: 'Official KStone Surfaces KStone Y9016 Imperial Titanium quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Y9016 Imperial Titanium design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-y9017',
    name: 'KStone Y9017 Crystal Lake',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-y9017.jpg',
    description: 'Official KStone Surfaces KStone Y9017 Crystal Lake quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Y9017 Crystal Lake design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-y9022',
    name: 'KStone Y9022 Crystallo Fog',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-y9022.jpg',
    description: 'Official KStone Surfaces KStone Y9022 Crystallo Fog quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Y9022 Crystallo Fog design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-y9028',
    name: 'KStone Y9028 Cotton Cloud',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-y9028.jpg',
    description: 'Official KStone Surfaces KStone Y9028 Cotton Cloud quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Y9028 Cotton Cloud design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-0002',
    name: 'KStone 0002 Alpinus 8326',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-0002.jpg',
    description: 'Official KStone Surfaces KStone 0002 Alpinus 8326 quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 0002 Alpinus 8326 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-3307',
    name: 'KStone 3307 Alpinus',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-3307.jpg',
    description: 'Official KStone Surfaces KStone 3307 Alpinus quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 3307 Alpinus design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-avalanche',
    name: 'KStone Avalanche',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-avalanche.jpg',
    description: 'Official KStone Surfaces KStone Avalanche quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Avalanche design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2867',
    name: 'KStone 2867 Avocatus 3 (Leathered)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2867.jpg',
    description: 'Official KStone Surfaces KStone 2867 Avocatus 3 (Leathered) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2867 Avocatus 3 (Leathered) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-3151',
    name: 'KStone 3151 Avocatus',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-3151.jpg',
    description: 'Official KStone Surfaces KStone 3151 Avocatus quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 3151 Avocatus design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2073',
    name: 'KStone 2073 Biancatto',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2073.jpg',
    description: 'Official KStone Surfaces KStone 2073 Biancatto quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2073 Biancatto design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2079',
    name: 'KStone 2079 Macchia Vecchia',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2079.jpg',
    description: 'Official KStone Surfaces KStone 2079 Macchia Vecchia quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2079 Macchia Vecchia design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2083',
    name: 'KStone 2083 Bianco Superiore',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2083.jpg',
    description: 'Official KStone Surfaces KStone 2083 Bianco Superiore quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2083 Bianco Superiore design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-7155',
    name: 'KStone 7155 Black Galaxy',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'dark',
    img: '/images/slabs/kstone-7155.jpg',
    description: 'Official KStone Surfaces KStone 7155 Black Galaxy quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 7155 Black Galaxy design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-3318',
    name: 'KStone 3318 Blue Deep',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-3318.jpg',
    description: 'Official KStone Surfaces KStone 3318 Blue Deep quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 3318 Blue Deep design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-classic',
    name: 'KStone Classic White',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-classic.jpg',
    description: 'Official KStone Surfaces KStone Classic White quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Classic White design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2046',
    name: 'KStone 2046 Cristallo Bianco',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2046.jpg',
    description: 'Official KStone Surfaces KStone 2046 Cristallo Bianco quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2046 Cristallo Bianco design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2086',
    name: 'KStone 2086 Cristallo Gold',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-2086.jpg',
    description: 'Official KStone Surfaces KStone 2086 Cristallo Gold quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2086 Cristallo Gold design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-3238',
    name: 'KStone 3238 Cristallo Gold',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-3238.jpg',
    description: 'Official KStone Surfaces KStone 3238 Cristallo Gold quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 3238 Cristallo Gold design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2066',
    name: 'KStone 2066 Cristallo Iluminato',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2066.jpg',
    description: 'Official KStone Surfaces KStone 2066 Cristallo Iluminato quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2066 Cristallo Iluminato design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-3092',
    name: 'KStone 3092 Negresco',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-3092.jpg',
    description: 'Official KStone Surfaces KStone 3092 Negresco quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 3092 Negresco design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-fantasy',
    name: 'KStone Fantasy Brown 3cm',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-fantasy.jpg',
    description: 'Official KStone Surfaces KStone Fantasy Brown 3cm quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Fantasy Brown 3cm design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-0209',
    name: 'KStone 0209 Fusion',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-0209.jpg',
    description: 'Official KStone Surfaces KStone 0209 Fusion quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 0209 Fusion design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2062',
    name: 'KStone 2062 Matarazzo',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2062.jpg',
    description: 'Official KStone Surfaces KStone 2062 Matarazzo quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2062 Matarazzo design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-z1014',
    name: 'KStone Z1014 Mont Blanc (Y3)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-z1014.jpg',
    description: 'Official KStone Surfaces KStone Z1014 Mont Blanc (Y3) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Z1014 Mont Blanc (Y3) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2072',
    name: 'KStone 2072 Namib Calacatta',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-2072.jpg',
    description: 'Official KStone Surfaces KStone 2072 Namib Calacatta quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2072 Namib Calacatta design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2087',
    name: 'KStone 2087 Negresco',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2087.jpg',
    description: 'Official KStone Surfaces KStone 2087 Negresco quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2087 Negresco design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2021',
    name: 'KStone 2021 Negresco 3cm Leathered',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2021.jpg',
    description: 'Official KStone Surfaces KStone 2021 Negresco 3cm Leathered quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2021 Negresco 3cm Leathered design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-nero',
    name: 'KStone Nero Assoluto 3cm',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'dark',
    img: '/images/slabs/kstone-nero.jpg',
    description: 'Official KStone Surfaces KStone Nero Assoluto 3cm quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Nero Assoluto 3cm design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-v3501',
    name: 'KStone V3501 Oyster White (SF)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-v3501.jpg',
    description: 'Official KStone Surfaces KStone V3501 Oyster White (SF) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone V3501 Oyster White (SF) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2060',
    name: 'KStone 2060 Patagonia',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2060.jpg',
    description: 'Official KStone Surfaces KStone 2060 Patagonia quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2060 Patagonia design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-3375',
    name: 'KStone 3375 Patagonia Alpinus 5',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-3375.jpg',
    description: 'Official KStone Surfaces KStone 3375 Patagonia Alpinus 5 quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 3375 Patagonia Alpinus 5 design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2410',
    name: 'KStone 2410 Platinus Polished',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2410.jpg',
    description: 'Official KStone Surfaces KStone 2410 Platinus Polished quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2410 Platinus Polished design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-statuario',
    name: 'KStone Statuario Extra',
    brand: 'KStone Surfaces',
    priceRange: '$58 – $72',
    typicalCost: '$2,400 – $3,800',
    category: 'marble',
    img: '/images/slabs/kstone-statuario.jpg',
    description: 'Official KStone Surfaces KStone Statuario Extra quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone Statuario Extra design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2260',
    name: 'KStone 2260 Steel Grey Leathered',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'grey',
    img: '/images/slabs/kstone-2260.jpg',
    description: 'Official KStone Surfaces KStone 2260 Steel Grey Leathered quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2260 Steel Grey Leathered design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2281',
    name: 'KStone 2281 Steel Grey Leathered 3cm',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'grey',
    img: '/images/slabs/kstone-2281.jpg',
    description: 'Official KStone Surfaces KStone 2281 Steel Grey Leathered 3cm quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2281 Steel Grey Leathered 3cm design", "Grey quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2077',
    name: 'KStone 2077 Taj Blue',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2077.jpg',
    description: 'Official KStone Surfaces KStone 2077 Taj Blue quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2077 Taj Blue design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-0208',
    name: 'KStone 0208 Taj Mahal',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-0208.jpg',
    description: 'Official KStone Surfaces KStone 0208 Taj Mahal quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 0208 Taj Mahal design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-1256',
    name: 'KStone 1256 Taj Mahal (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-1256.jpg',
    description: 'Official KStone Surfaces KStone 1256 Taj Mahal (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 1256 Taj Mahal (Honed) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2082',
    name: 'KStone 2082 Taj Mahal (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2082.jpg',
    description: 'Official KStone Surfaces KStone 2082 Taj Mahal (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2082 Taj Mahal (Honed) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2076',
    name: 'KStone 2076 Taj Mahal 3cm',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2076.jpg',
    description: 'Official KStone Surfaces KStone 2076 Taj Mahal 3cm quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2076 Taj Mahal 3cm design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2092',
    name: 'KStone 2092 Taj Mahal 3cm',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2092.jpg',
    description: 'Official KStone Surfaces KStone 2092 Taj Mahal 3cm quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2092 Taj Mahal 3cm design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2055',
    name: 'KStone 2055 Taj Mahal 3cm Leathered',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2055.jpg',
    description: 'Official KStone Surfaces KStone 2055 Taj Mahal 3cm Leathered quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2055 Taj Mahal 3cm Leathered design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-ss600',
    name: 'KStone SS600 Taj Mahal Honed',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-ss600.jpg',
    description: 'Official KStone Surfaces KStone SS600 Taj Mahal Honed quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone SS600 Taj Mahal Honed design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-t1955',
    name: 'KStone T1955 Taj Mahal',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-t1955.jpg',
    description: 'Official KStone Surfaces KStone T1955 Taj Mahal quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone T1955 Taj Mahal design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-t2511',
    name: 'KStone T2511 Taj Mahal',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-t2511.jpg',
    description: 'Official KStone Surfaces KStone T2511 Taj Mahal quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone T2511 Taj Mahal design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-ss579',
    name: 'KStone SS579 Taj Mahal (Honed)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-ss579.jpg',
    description: 'Official KStone Surfaces KStone SS579 Taj Mahal (Honed) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone SS579 Taj Mahal (Honed) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-1258',
    name: 'KStone 1258 Taj Mahal Leathered',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-1258.jpg',
    description: 'Official KStone Surfaces KStone 1258 Taj Mahal Leathered quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 1258 Taj Mahal Leathered design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2201',
    name: 'KStone 2201 Taj Mahal Leathered',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2201.jpg',
    description: 'Official KStone Surfaces KStone 2201 Taj Mahal Leathered quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2201 Taj Mahal Leathered design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2202',
    name: 'KStone 2202 Taj Mahal Leathered',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2202.jpg',
    description: 'Official KStone Surfaces KStone 2202 Taj Mahal Leathered quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2202 Taj Mahal Leathered design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2203',
    name: 'KStone 2203 Taj Mahal Leathered 3cm',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2203.jpg',
    description: 'Official KStone Surfaces KStone 2203 Taj Mahal Leathered 3cm quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2203 Taj Mahal Leathered 3cm design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-j2407',
    name: 'KStone J2407 Taj Mahal Leathered (T20)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-j2407.jpg',
    description: 'Official KStone Surfaces KStone J2407 Taj Mahal Leathered (T20) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone J2407 Taj Mahal Leathered (T20) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-j5992',
    name: 'KStone J5992 Taj Mahal Leathered',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-j5992.jpg',
    description: 'Official KStone Surfaces KStone J5992 Taj Mahal Leathered quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone J5992 Taj Mahal Leathered design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-l1571',
    name: 'KStone L1571 Taj Mahal',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-l1571.jpg',
    description: 'Official KStone Surfaces KStone L1571 Taj Mahal quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone L1571 Taj Mahal design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-3142',
    name: 'KStone 3142 Preto Titanium',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-3142.jpg',
    description: 'Official KStone Surfaces KStone 3142 Preto Titanium quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 3142 Preto Titanium design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-3236',
    name: 'KStone 3236 Titanium',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-3236.jpg',
    description: 'Official KStone Surfaces KStone 3236 Titanium quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 3236 Titanium design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2058',
    name: 'KStone 2058 Titanium Gold 00 Leathered',
    brand: 'KStone Surfaces',
    priceRange: '$65 – $82',
    typicalCost: '$2,800 – $4,500',
    category: 'marble',
    img: '/images/slabs/kstone-2058.jpg',
    description: 'Official KStone Surfaces KStone 2058 Titanium Gold 00 Leathered quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2058 Titanium Gold 00 Leathered design", "Marble quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-x2403',
    name: 'KStone X2403 Titanium (H)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-x2403.jpg',
    description: 'Official KStone Surfaces KStone X2403 Titanium (H) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone X2403 Titanium (H) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-3391',
    name: 'KStone 3391 Titanium Leathered',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-3391.jpg',
    description: 'Official KStone Surfaces KStone 3391 Titanium Leathered quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 3391 Titanium Leathered design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-t2147',
    name: 'KStone T2147 Vermont Black (H)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'dark',
    img: '/images/slabs/kstone-t2147.jpg',
    description: 'Official KStone Surfaces KStone T2147 Vermont Black (H) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone T2147 Vermont Black (H) design", "Dark quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  },
  {
    id: 'kstone-2607',
    name: 'KStone 2607 Winter Ridge (#)',
    brand: 'KStone Surfaces',
    priceRange: '$52 – $65',
    typicalCost: '$2,100 – $3,200',
    category: 'white',
    img: '/images/slabs/kstone-2607.jpg',
    description: 'Official KStone Surfaces KStone 2607 Winter Ridge (#) quartz countertop slab. Premium engineered surface designed for residential and commercial kitchen applications.',
    features: ["KStone 2607 Winter Ridge (#) design", "White quartz palette", "Factory direct engineered quartz", "Polished durable finish"]
  }
];
