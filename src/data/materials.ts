
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
    id: 'caesarstone-5152',
    name: '5152 Empira White',
    brand: 'Caesarstone',
    priceRange: '$124 – $170',
    typicalCost: '$4,950 – $8,500',
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
    id: 'silestone-ariel',
    name: 'Ariel',
    brand: 'Silestone',
    priceRange: '$85 – $105',
    typicalCost: '$3,500 – $5,500',
    category: 'warm',
    img: '/images/slabs/ariel.jpg',
    description: 'A calm off-white base with gentle, diffused warm veins running through.',
    features: ['Calm off-white base', 'Diffused warm veins', 'HybriQ+ Technology', 'Versatile design']
  },
  {
    id: 'silestone-blanco-zeus',
    name: 'Blanco Zeus',
    brand: 'Silestone',
    priceRange: '$85 – $110',
    typicalCost: '$3,500 – $5,500',
    category: 'white',
    img: '/images/slabs/blanco-zeus.jpg',
    description: 'The ultimate hero white. A consistent, solid, and bright white surface.',
    features: ['Hero solid white', 'Ultra-clean look', 'HybriQ+ Technology', 'Highly requested classic']
  },
  {
    id: 'silestone-serena',
    name: 'Serena',
    brand: 'Silestone',
    priceRange: '$95 – $120',
    typicalCost: '$4,000 – $6,000',
    category: 'grey',
    img: '/images/slabs/serena.jpg',
    description: 'A greenish-grey background with subtle white lines, earthy and sophisticated.',
    features: ['Greenish-grey earth tone', 'Subtle white lines', 'HybriQ+ Technology', 'Matte suede finish option']
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
    id: 'tce-2001', name: 'TCE 2001 Pure White', brand: 'TCE Stone',
    priceRange: '$55 – $75', typicalCost: '$2,500 – $4,500', category: 'white',
    img: '/images/slabs/tce-2001.jpg', description: 'A crisp, budget-friendly pure white quartz for modern designs.',
    features: ['Budget-friendly pure white', 'Clean aesthetic', 'Durable', 'Consistent finish']
  }, {
    id: 'tce-4005', name: 'TCE 4005 Calacatta', brand: 'TCE Stone',
    priceRange: '$65 – $85', typicalCost: '$3,000 – $5,000', category: 'marble',
    img: '/images/slabs/tce-4005.jpg', description: 'A popular and affordable Calacatta alternative with distinct grey veining.',
    features: ['Affordable Calacatta look', 'Distinct grey veining', 'Value focused', 'Beautiful finish']
  }, {
    id: 'tce-4016', name: 'TCE 4016 Statuario', brand: 'TCE Stone',
    priceRange: '$65 – $85', typicalCost: '$3,000 – $5,000', category: 'marble',
    img: '/images/slabs/tce-4016.jpg', description: 'A bright white base with delicate Statuario-style veining.',
    features: ['Statuario aesthetic', 'Delicate veining', 'Bright base', 'Excellent value']
  }, {
    id: 'tce-2040', name: 'TCE 2040 Carrara', brand: 'TCE Stone',
    priceRange: '$60 – $80', typicalCost: '$2,800 – $4,800', category: 'marble',
    img: '/images/slabs/tce-2040.jpg', description: 'A soft, blended Carrara marble look perfect for subtle kitchens.',
    features: ['Soft Carrara look', 'Blended veins', 'Timeless style', 'Budget friendly']
  }, {
    id: 'tce-4015', name: 'TCE 4015', brand: 'TCE Stone',
    priceRange: '$65 – $85', typicalCost: '$3,000 – $5,000', category: 'white',
    img: '/images/slabs/tce-4015.jpg', description: 'A dynamic white quartz with flowing grey patterns.',
    features: ['Flowing patterns', 'Dynamic visual', 'Stain resistant', 'Economical choice']
  }, {
    id: 'tce-5013', name: 'TCE 5013', brand: 'TCE Stone',
    priceRange: '$70 – $90', typicalCost: '$3,200 – $5,200', category: 'grey',
    img: '/images/slabs/tce-5013.jpg', description: 'A stylish mid-grey quartz featuring subtle white lines.',
    features: ['Mid-grey tone', 'Subtle white lines', 'Modern appeal', 'High value']
  }, {
    id: 'tce-5011', name: 'TCE 5011', brand: 'TCE Stone',
    priceRange: '$70 – $90', typicalCost: '$3,200 – $5,200', category: 'dark',
    img: '/images/slabs/tce-5011.jpg', description: 'A striking dark quartz with intricate veining details.',
    features: ['Striking dark tone', 'Intricate details', 'Bold statement', 'Durable surface']
  }, {
    id: 'tce-4019', name: 'TCE 4019', brand: 'TCE Stone',
    priceRange: '$65 – $85', typicalCost: '$3,000 – $5,000', category: 'warm',
    img: '/images/slabs/tce-4019.jpg', description: 'A warm beige base with delicate texture, ideal for inviting spaces.',
    features: ['Warm beige base', 'Delicate texture', 'Inviting feel', 'Cost-effective']
  }, {
    id: 'tce-5022', name: 'TCE 5022', brand: 'TCE Stone',
    priceRange: '$75 – $95', typicalCost: '$3,500 – $5,500', category: 'marble',
    img: '/images/slabs/tce-5022.jpg', description: 'A premium TCE option featuring grand marble-like veining.',
    features: ['Grand veining', 'Premium TCE tier', 'Luxurious look', 'Great alternative']
  }, {
    id: 'tce-5018', name: 'TCE 5018', brand: 'TCE Stone',
    priceRange: '$75 – $95', typicalCost: '$3,500 – $5,500', category: 'grey',
    img: '/images/slabs/tce-5018.jpg', description: 'A sophisticated grey quartz with a robust, textured appearance.',
    features: ['Sophisticated grey', 'Robust texture', 'Contemporary design', 'Enduring quality']
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
    id: 'sio4-calacatta', name: 'Sio4 Calacatta', brand: 'Sio4',
    priceRange: '$139 – $201', typicalCost: '$3,500 – $6,000', category: 'marble',
    img: '/images/slabs/sio4-calacatta.jpg', description: 'A striking Sio4 Calacatta with bold, sweeping grey veins.',
    features: ['Bold sweeping veins', 'Striking Calacatta', 'Premium Sio4', 'Stain resistant']
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
    id: 'sio4-pure-white', name: 'Sio4 Pure White', brand: 'Sio4',
    priceRange: '$92 – $126', typicalCost: '$3,000 – $5,000', category: 'white',
    img: '/images/slabs/sio4-pure-white.jpg', description: 'A flawless, solid white quartz perfect for modern and minimalist spaces.',
    features: ['Flawless solid white', 'Minimalist spaces', 'Clean look', 'Hygienic']
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

  ,{
    id: 'silestone-camden', name: 'Camden', brand: 'Silestone',
    priceRange: '$85 – $110', typicalCost: '$3,500 – $5,500', category: 'grey',
    img: '/images/slabs/camden.jpg', description: 'A soft, delicate cement grey inspired by the lofts of London, featuring a subtle white vein.',
    features: ['Loft series cement look', 'Soft delicate grey', 'HybriQ+ Technology', 'Urban industrial']
  }, {
    id: 'silestone-white-arabesque', name: 'White Arabesque', brand: 'Silestone',
    priceRange: '$85 – $114', typicalCost: '$4,500 – $7,000', category: 'marble',
    img: '/images/slabs/white-arabesque.jpg', description: 'A bright white background heavily threaded with contrasting dark grey veins.',
    features: ['Heavy grey threading', 'Bright white background', 'HybriQ+ Technology', 'Striking contrast']
  }, {
    id: 'silestone-kensho', name: 'Kensho', brand: 'Silestone',
    priceRange: '$90 – $115', typicalCost: '$4,000 – $6,000', category: 'grey',
    img: '/images/slabs/kensho.jpg', description: 'A serene mid-grey with subtle texture and soft white details.',
    features: ['Serene mid-grey', 'Subtle texture', 'HybriQ+ Technology', 'Timeless neutral']
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
    id: 'kasa-ksl8602', name: 'KSL8602 - Silver Mist', brand: 'Kasa Quartz',
    priceRange: '$75 – $95', typicalCost: '$3,500 – $5,500', category: 'grey',
    img: '/images/slabs/kasa-ksl8602.jpg', description: 'A delicate silver and grey mist pattern over a clean white background.',
    features: ['Silver Mist', 'Delicate pattern', 'Clean white', 'Great value']
  }, {
    id: 'kasa-ksl8601', name: 'KSL8601 - Obsidian Wave', brand: 'Kasa Quartz',
    priceRange: '$75 – $95', typicalCost: '$3,500 – $5,500', category: 'dark',
    img: '/images/slabs/kasa-ksl8601.jpg', description: 'A dramatic dark slab featuring flowing waves of black and obsidian.',
    features: ['Obsidian Wave', 'Dramatic dark', 'Flowing pattern', 'Striking']
  }, {
    id: 'kasa-ksl6011', name: 'KSL6011 - Alabaster Vein', brand: 'Kasa Quartz',
    priceRange: '$57 – $70', typicalCost: '$3,500 – $5,500', category: 'white',
    img: '/images/slabs/kasa-ksl6011.jpg', description: 'Soft alabaster background with delicate veining for a timeless look.',
    features: ['Alabaster Vein', 'Soft background', 'Timeless', 'Elegant']
  }, {
    id: 'kasa-ksl6010', name: 'KSL6010 - Glacier Gold', brand: 'Kasa Quartz',
    priceRange: '$36 – $36', typicalCost: '$3,500 – $5,500', category: 'marble',
    img: '/images/slabs/kasa-ksl6010.jpg', description: 'A pristine glacier white infused with sweeping gold veins.',
    features: ['Glacier Gold', 'Sweeping veins', 'Premium look', 'Warm accents']
  }, {
    id: 'kasa-ksv5101', name: 'KSV5101 - Lightning Gold', brand: 'Kasa Quartz',
    priceRange: '$52 – $62', typicalCost: '$3,500 – $5,500', category: 'marble',
    img: '/images/slabs/kasa-ksv5101.jpg', description: 'Striking lightning-like gold veins over a bright white base.',
    features: ['Lightning Gold', 'Striking veins', 'Bright white base', 'Luxury statement']
  }, {
    id: 'kasa-ksv1105', name: 'KSV1105 - Calacatta Silk', brand: 'Kasa Quartz',
    priceRange: '$75 – $95', typicalCost: '$3,500 – $5,500', category: 'marble',
    img: '/images/slabs/kasa-ksv1105.jpg', description: 'A silky smooth Calacatta style featuring soft grey veining.',
    features: ['Calacatta Silk', 'Smooth look', 'Soft grey veins', 'Italian style']
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
  }, {
    id: 'kasa-ky063', name: 'KY063 - Bernini Oro', brand: 'Kasa Quartz',
    priceRange: '$60 – $80', typicalCost: '$2,800 – $4,800', category: 'marble',
    img: '/images/slabs/kasa-ky063.jpg', description: 'Heat transfer printed quartz capturing the rich gold of classic Bernini marble.',
    features: ['Bernini Oro', 'Rich gold', 'Classic marble look', 'Durable']
  }
  , {
    id: 'lucent-lq7701', name: 'LQ7701 Black Belvedere', brand: 'Lucent Quartz',
    priceRange: '$80 – $105', typicalCost: '$4,000 – $6,000', category: 'dark',
    img: '/images/slabs/lucent-lq7701.jpg', description: 'Deep dramatic black featuring pronounced striking white veins reminiscent of natural belvedere.',
    features: ['Black Belvedere', 'Striking veins', 'Premium dark', 'Luxury finish']
  }, {
    id: 'lucent-lq7306', name: 'LQ7306 Precious Crystals', brand: 'Lucent Quartz',
    priceRange: '$80 – $105', typicalCost: '$4,000 – $6,000', category: 'white',
    img: '/images/slabs/lucent-lq7306.jpg', description: 'Lustrous crystalline white scattered with fine detailing for an elegant sparkle.',
    features: ['Precious Crystals', 'Lustrous white', 'Fine detailing', 'Elegant finish']
  }, {
    id: 'lucent-lq6838', name: 'LQ6838 Black Canyon', brand: 'Lucent Quartz',
    priceRange: '$80 – $105', typicalCost: '$4,000 – $6,000', category: 'dark',
    img: '/images/slabs/lucent-lq6838.jpg', description: 'A bold canyon-inspired dark slab with intense contrasting textures.',
    features: ['Black Canyon', 'Bold texture', 'Contrasting design', 'Statement piece']
  }, {
    id: 'lucent-lq4000', name: 'LQ4000 Pure Black', brand: 'Lucent Quartz',
    priceRange: '$75 – $95', typicalCost: '$3,800 – $5,500', category: 'dark',
    img: '/images/slabs/lucent-lq4000.jpg', description: 'An absolute, unblemished pure black quartz perfect for modern contrast.',
    features: ['Pure Black', 'Solid color', 'Modern style', 'High contrast']
  }, {
    id: 'lucent-lq4007', name: 'LQ4007 Infinity White', brand: 'Lucent Quartz',
    priceRange: '$75 – $95', typicalCost: '$3,800 – $5,500', category: 'white',
    img: '/images/slabs/lucent-lq4007.jpg', description: 'Endless pure white base with striking, sweeping black infinity lines.',
    features: ['Infinity White', 'Striking black veins', 'Endless pure white base']
  }, {
    id: 'lucent-lq4004', name: 'LQ4004 Obsidian Gold', brand: 'Lucent Quartz',
    priceRange: '$80 – $105', typicalCost: '$4,000 – $6,000', category: 'dark',
    img: '/images/slabs/lucent-lq4004.jpg', description: 'Rich obsidian base highlighted by spectacular threads of gold.',
    features: ['Obsidian Gold', 'Rich base', 'Gold threads', 'Spectacular design']
  }, {
    id: 'lucent-jade-onyx', name: 'Jade Onyx', brand: 'Lucent Quartz',
    priceRange: '$90 – $120', typicalCost: '$4,500 – $7,000', category: 'exotic',
    img: '/images/slabs/lucent-jade-onyx.jpg', description: 'Stunning exotic quartz mimicking natural jade onyx with green and earth tones.',
    features: ['Jade Onyx', 'Exotic look', 'Green tones', 'Natural aesthetic']
  }, {
    id: 'lucent-infinity-blue', name: 'Infinity Blue', brand: 'Lucent Quartz',
    priceRange: '$85 – $110', typicalCost: '$4,200 – $6,500', category: 'exotic',
    img: '/images/slabs/lucent-infinity-blue.jpg', description: 'Beautifully sweeping blue and grey patterns evoking infinite oceanic movement.',
    features: ['Infinity Blue', 'Oceanic movement', 'Sweeping patterns', 'Unique style']
  }, {
    id: 'lucent-crystal-noir', name: 'Crystal Noir', brand: 'Lucent Quartz',
    priceRange: '$80 – $105', typicalCost: '$4,000 – $6,000', category: 'dark',
    img: '/images/slabs/lucent-crystal-noir.jpg', description: 'A dramatic dark canvas illuminated by crystalline white fragments.',
    features: ['Crystal Noir', 'Dramatic dark', 'Crystalline fragments', 'Bold visual']
  }, {
    id: 'lucent-calacatta-vaticano-viola', name: 'Calacatta Vaticano Viola', brand: 'Lucent Quartz',
    priceRange: '$90 – $120', typicalCost: '$4,500 – $7,000', category: 'marble',
    img: '/images/slabs/lucent-calacatta-vaticano-viola.jpg', description: 'A luxurious Calacatta featuring stunning violet and burgundy veining.',
    features: ['Calacatta Vaticano Viola', 'Violet veining', 'Luxurious marble look', 'Burgundy accents']
  }
];
