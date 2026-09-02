
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
    id: 'caesarstone-5114',
    name: '5114 Calacatta Maximus',
    brand: 'Caesarstone',
    priceRange: '$139 – $201',
    typicalCost: '$5,200 – $8,800',
    category: 'marble',
    img: '/images/slabs/caesarstone-5114.jpg',
    description: 'Dramatic broad grey veins with subtle gold accents flowing across an oversized pure white slab.',
    features: ['Calacatta Maximus design', 'Broad sweeping veins', 'Gold & grey highlights', 'Luxury focal centerpiece']
  },
  {
    id: 'caesarstone-5144',
    name: '5144 Rossa Nova',
    brand: 'Caesarstone',
    priceRange: '$109 – $150',
    typicalCost: '$4,750 – $7,500',
    category: 'warm',
    img: '/images/slabs/caesarstone-5144.jpg',
    description: 'Warm creamy background enriched with delicate amber and golden gradient veining for cozy, inviting interiors.',
    features: ['Rossa Nova warm series', 'Golden amber gradients', 'Soft velvety warmth', 'Ideal for wood cabinetry']
  },
  {
    id: 'caesarstone-5222',
    name: '5222 Adamina',
    brand: 'Caesarstone',
    priceRange: '$95 – $135',
    typicalCost: '$4,200 – $6,800',
    category: 'warm',
    img: '/images/slabs/caesarstone-5222.jpg',
    description: 'Soft desert sand palette capturing gentle terracotta and golden hues with natural earth-stone warmth.',
    features: ['Adamina earth palette', 'Warm sandstone texture', 'Organic natural look', 'Non-porous durability']
  },
  {
    id: 'caesarstone-5820',
    name: '5820 Darcrest',
    brand: 'Caesarstone',
    priceRange: '$96 – $128',
    typicalCost: '$4,150 – $6,400',
    category: 'dark',
    img: '/images/slabs/caesarstone-5820.jpg',
    description: 'Rich dark charcoal honed surface detailed with organic earthy-brown and white mineral sediments.',
    features: ['Darcrest honed dark finish', 'Earthy mineral sediments', 'Low-glare matte look', 'Scratch & stain resistant']
  },
  {
    id: 'caesarstone-5101',
    name: '5101 Empira Black',
    brand: 'Caesarstone',
    priceRange: '$145 – $207',
    typicalCost: '$5,800 – $9,500',
    category: 'dark',
    img: '/images/slabs/caesarstone-5101.jpg',
    description: 'Deep obsidian black marble base laced with delicate, webbed white and light grey veining.',
    features: ['Empira Black marble luxury', 'Obsidian dark base', 'Fine webbed white veins', 'High-contrast statement']
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
    id: 'caesarstone-5171',
    name: '5171 Arbetto',
    brand: 'Caesarstone',
    priceRange: '$120 – $175',
    typicalCost: '$5,000 – $8,200',
    category: 'marble',
    img: '/images/slabs/caesarstone-5171.jpg',
    description: 'Sophisticated crisp white quartz accented by dynamic smoky grey marble veins with high visual movement.',
    features: ['Arbetto marble veining', 'Crisp white quartz base', 'Smoky grey dynamics', 'Waterfall island favorite']
  },
  {
    id: 'caesarstone-5011',
    name: '5011 Intense White',
    brand: 'Caesarstone',
    priceRange: '$85 – $120',
    typicalCost: '$3,800 – $6,000',
    category: 'white',
    img: '/images/slabs/caesarstone-5011.jpg',
    description: 'Ultra-clean bright white field designed for crisp, light-maximizing contemporary kitchen countertops.',
    features: ['Intense White pure field', 'Ultra-clean finish', 'Light maximizing surface', 'Stain resistant']
  },
  {
    id: 'caesarstone-5104',
    name: '5104 Tuscan Dawn',
    brand: 'Caesarstone',
    priceRange: '$108 – $155',
    typicalCost: '$4,700 – $7,500',
    category: 'warm',
    img: '/images/slabs/caesarstone-5104.jpg',
    description: 'Warm taupe field infused with luminous white veil patterns reminiscent of Tuscan morning light.',
    features: ['Tuscan Dawn warm tones', 'Luminous white veil', 'Soft organic warmth', 'Premium polished surface']
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
    id: 'sio4-statuario', name: 'Sio4 Statuario', brand: 'Sio4',
    priceRange: '$139 – $201', typicalCost: '$3,500 – $6,000', category: 'marble',
    img: '/images/slabs/sio4-statuario.jpg', description: 'A clean, bright white base featuring subtle, elegant Statuario veins.',
    features: ['Elegant Statuario veins', 'Clean bright base', 'Sophisticated style', 'High durability']
  }, {
    id: 'sio4-carrara', name: 'Sio4 Carrara', brand: 'Sio4',
    priceRange: '$51 – $59', typicalCost: '$3,200 – $5,200', category: 'marble',
    img: '/images/slabs/sio4-carrara.jpg', description: 'A classic Sio4 Carrara design with soft, feathered grey patterns.',
    features: ['Classic Carrara design', 'Soft feathered patterns', 'Versatile appeal', 'Excellent value']
  }, {
    id: 'sio4-concrete', name: 'Sio4 Concrete', brand: 'Sio4',
    priceRange: '$92 – $126', typicalCost: '$3,500 – $5,500', category: 'grey',
    img: '/images/slabs/sio4-concrete.jpg', description: 'An urban grey quartz that beautifully mimics poured architectural concrete.',
    features: ['Poured concrete look', 'Urban grey', 'Industrial aesthetic', 'Durable finish']
  }, {
    id: 'sio4-nero-marquina', name: 'Sio4 Nero Marquina', brand: 'Sio4',
    priceRange: '$85 – $110', typicalCost: '$4,000 – $6,000', category: 'dark',
    img: '/images/slabs/sio4-nero-marquina.jpg', description: 'A dramatic black quartz highlighted by energetic white veining.',
    features: ['Dramatic black base', 'Energetic white veining', 'Luxury statement', 'High contrast']
  }, {
    id: 'sio4-pietra-grey', name: 'Sio4 Pietra Grey', brand: 'Sio4',
    priceRange: '$80 – $105', typicalCost: '$3,800 – $5,800', category: 'dark',
    img: '/images/slabs/sio4-pietra-grey.jpg', description: 'A warm, sophisticated grey base crossed by striking white lines.',
    features: ['Warm sophisticated grey', 'Striking white lines', 'Elegant contrast', 'Engineered strength']
  }, {
    id: 'sio4-bianco', name: 'Sio4 Bianco', brand: 'Sio4',
    priceRange: '$51 – $59', typicalCost: '$3,200 – $5,200', category: 'white',
    img: '/images/slabs/sio4-bianco.jpg', description: 'A lively white quartz featuring subtle texture and depth.',
    features: ['Subtle texture and depth', 'Lively white', 'Inviting feel', 'Cost-effective']
  }, {
    id: 'sio4-grigio', name: 'Sio4 Grigio', brand: 'Sio4',
    priceRange: '$75 – $95', typicalCost: '$3,500 – $5,500', category: 'grey',
    img: '/images/slabs/sio4-grigio.jpg', description: 'A versatile mid-grey quartz that pairs beautifully with any cabinet color.',
    features: ['Versatile mid-grey', 'Pairs well with cabinets', 'Modern neutral', 'Stain resistant']
  }, {
    id: 'sio4-venato', name: 'Sio4 Venato', brand: 'Sio4',
    priceRange: '$70 – $90', typicalCost: '$3,800 – $5,800', category: 'marble',
    img: '/images/slabs/sio4-venato.jpg', description: 'A stunning white quartz defined by an intricate, sprawling vein network.',
    features: ['Intricate sprawling veins', 'Stunning white base', 'Premium Sio4 tier', 'Highly durable']
  }

  , {
    id: 'silestone-white-arabesque', name: 'White Arabesque', brand: 'Silestone',
    priceRange: '$85 – $114', typicalCost: '$4,500 – $7,000', category: 'marble',
    img: '/images/slabs/white-arabesque.jpg', description: 'A bright white background heavily threaded with contrasting dark grey veins.',
    features: ['Heavy grey threading', 'Bright white background', 'HybriQ+ Technology', 'Striking contrast']
  }, {
    id: 'silestone-lagoon', name: 'Lagoon', brand: 'Silestone',
    priceRange: '$73 – $96', typicalCost: '$4,000 – $6,500', category: 'marble',
    img: '/images/slabs/lagoon.jpg', description: 'A delicate white surface featuring soft, cloudy grey veining reminiscent of natural stone.',
    features: ['Cloudy grey veining', 'Delicate white base', 'HybriQ+ Technology', 'Natural stone look']
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
  }
];
