export interface CabinetCityData {
  slug: string;
  name: string;
  region: string;
  areasServed: string;
  popularMaterial: string;
  testimonial1: {
    author: string;
    neighborhood: string;
    quote: string;
    title: string;
  };
  testimonial2: {
    author: string;
    neighborhood: string;
    quote: string;
    title: string;
  };
  testimonial3: {
    author: string;
    neighborhood: string;
    quote: string;
    title: string;
  };
  images?: {
    hero?: string;
    testimonial1?: string;
    testimonial2?: string;
    testimonial3?: string;
  };
}

export const cabinetCities: Record<string, CabinetCityData> = {
  toronto: {
    slug: 'toronto',
    name: 'Toronto',
    region: 'GTA',
    areasServed: 'Toronto, North York, Scarborough, Vaughan, and Mississauga',
    popularMaterial: 'Premium Cabinetry',
    testimonial1: {
      title: "Typical Toronto Condo Cabinet Upgrade",
      quote: "The new cabinets transformed our small condo in just 2 days.",
      author: "Sarah",
      neighborhood: "North York"
    },
    testimonial2: {
      title: "Modern Cabinet Upgrade",
      quote: "The custom cabinet look makes it a $20k upgrade. Worth every dollar.",
      author: "Michael",
      neighborhood: "Downtown"
    },
    testimonial3: {
      title: "Full Cabinet Remodel",
      quote: "Cabinets installed in 3 days. The finish is flawless.",
      author: "Jessica",
      neighborhood: "Etobicoke"
    },
    images: {
      hero: "/images/kitchen_cabinets_toronto_hero.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  markham: {
    slug: 'markham',
    name: 'Markham',
    region: 'York Region',
    areasServed: 'Markham, Richmond Hill, and Unionville',
    popularMaterial: 'Luxury Quartz',
    testimonial1: {
      title: "Typical Kitchen Upgrade",
      quote: "Everything was done fast and exactly as promised.",
      author: "Linda",
      neighborhood: "Markham"
    },
    testimonial2: {
      title: "Modern Cabinet Upgrade",
      quote: "The island completely changed the space.",
      author: "Jason",
      neighborhood: "Richmond Hill"
    },
    testimonial3: {
      title: "Full Kitchen Refresh",
      quote: "Clean install and great attention to detail.",
      author: "Anita",
      neighborhood: "Unionville"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  pickering: {
    slug: 'pickering',
    name: 'Pickering',
    region: 'Durham Region',
    areasServed: 'Pickering, Ajax, and Whitby',
    popularMaterial: 'Standard Quartz',
    testimonial1: {
      title: "Townhouse Upgrade",
      quote: "Beautiful quartz, installed perfectly and on time.",
      author: "David",
      neighborhood: "Pickering"
    },
    testimonial2: {
      title: "Island Installation",
      quote: "Couldn't be happier with our new island.",
      author: "Melissa",
      neighborhood: "Ajax"
    },
    testimonial3: {
      title: "Full Remodel",
      quote: "Amazing value for the quality provided.",
      author: "Tom",
      neighborhood: "Whitby"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  scarborough: {
    slug: 'scarborough',
    name: 'Scarborough',
    region: 'Toronto East',
    areasServed: 'Scarborough, East York, and North York',
    popularMaterial: 'Premium Cabinetry',
    testimonial1: {
      title: "Bungalow Refresh",
      quote: "Transformed our older kitchen completely.",
      author: "Anna",
      neighborhood: "Scarborough"
    },
    testimonial2: {
      title: "Condo Renovation",
      quote: "Fast, professional, and very clean work.",
      author: "John",
      neighborhood: "East York"
    },
    testimonial3: {
      title: "Large Kitchen Upgrade",
      quote: "The seams are completely invisible. Incredible.",
      author: "Maria",
      neighborhood: "Scarborough"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  vaughan: {
    slug: 'vaughan',
    name: 'Vaughan',
    region: 'York Region',
    areasServed: 'Vaughan, Woodbridge, and Maple',
    popularMaterial: 'Luxury Quartz',
    testimonial1: {
      title: "Luxury Home Upgrade",
      quote: "The calacatta quartz looks stunning in our new home.",
      author: "Marco",
      neighborhood: "Woodbridge"
    },
    testimonial2: {
      title: "Custom Island",
      quote: "Precision cutting and excellent service.",
      author: "Angela",
      neighborhood: "Vaughan"
    },
    testimonial3: {
      title: "Full Kitchen Project",
      quote: "Best pricing for luxury stone in the area.",
      author: "Robert",
      neighborhood: "Maple"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  mississauga: {
    slug: 'mississauga',
    name: 'Mississauga',
    region: 'Peel Region',
    areasServed: 'Mississauga, Port Credit, and Streetsville',
    popularMaterial: 'Premium Cabinetry',
    testimonial1: {
      title: "Condo Kitchen Upgrade",
      quote: "Fast delivery and installation. Highly recommend.",
      author: "Priya",
      neighborhood: "Mississauga"
    },
    testimonial2: {
      title: "Townhome Remodel",
      quote: "Transformed our dark kitchen into a bright space.",
      author: "Kevin",
      neighborhood: "Streetsville"
    },
    testimonial3: {
      title: "Large Custom Kitchen",
      quote: "The team was professional from start to finish.",
      author: "Samantha",
      neighborhood: "Port Credit"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  richmondhill: {
    slug: 'richmond-hill',
    name: 'Richmond Hill',
    region: 'York Region',
    areasServed: 'Richmond Hill, Aurora, and Markham',
    popularMaterial: 'Luxury Quartz',
    testimonial1: {
      title: "Elegant Kitchen Update",
      quote: "Our new countertops are the highlight of the house.",
      author: "Emily",
      neighborhood: "Richmond Hill"
    },
    testimonial2: {
      title: "Full Renovation",
      quote: "Very impressed with the quality and speed.",
      author: "Daniel",
      neighborhood: "Aurora"
    },
    testimonial3: {
      title: "Island Replacement",
      quote: "Flawless edge profiles and great customer service.",
      author: "Sophie",
      neighborhood: "Richmond Hill"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  brampton: {
    slug: 'brampton',
    name: 'Brampton',
    region: 'Peel Region',
    areasServed: 'Brampton, Caledon, and Mississauga',
    popularMaterial: 'Premium Cabinetry',
    testimonial1: {
      title: "Family Kitchen Remodel",
      quote: "Durable quartz that handles our busy family life.",
      author: "Raj",
      neighborhood: "Brampton"
    },
    testimonial2: {
      title: "Basement Bar Setup",
      quote: "Great prices for smaller custom cuts.",
      author: "Chris",
      neighborhood: "Caledon"
    },
    testimonial3: {
      title: "New Build Installation",
      quote: "They handled the whole house seamlessly.",
      author: "Amanda",
      neighborhood: "Brampton"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  oakville: {
    slug: 'oakville',
    name: 'Oakville',
    region: 'Halton Region',
    areasServed: 'Oakville, Burlington, and Milton',
    popularMaterial: 'Luxury Quartz',
    testimonial1: {
      title: "Luxury Kitchen Makeover",
      quote: "Premium stone and exceptional installation quality.",
      author: "Jennifer",
      neighborhood: "Oakville"
    },
    testimonial2: {
      title: "Custom Build",
      quote: "Their luxury quartz selection is incredible.",
      author: "William",
      neighborhood: "Oakville"
    },
    testimonial3: {
      title: "Condo Renovation",
      quote: "Very clean work, left the condo spotless.",
      author: "Lisa",
      neighborhood: "Burlington"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  burlington: {
    slug: 'burlington',
    name: 'Burlington',
    region: 'Halton Region',
    areasServed: 'Burlington, Oakville, and Waterdown',
    popularMaterial: 'Premium Cabinetry',
    testimonial1: {
      title: "Full Kitchen Update",
      quote: "Beautiful edges and a perfect fit on our old cabinets.",
      author: "Mark",
      neighborhood: "Burlington"
    },
    testimonial2: {
      title: "Island Extension",
      quote: "Matched our existing countertops perfectly.",
      author: "Sarah",
      neighborhood: "Waterdown"
    },
    testimonial3: {
      title: "New Countertops",
      quote: "Best contractor experience we've had.",
      author: "Paul",
      neighborhood: "Burlington"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  aurora: {
    slug: 'aurora',
    name: 'Aurora',
    region: 'York Region',
    areasServed: 'Aurora, Newmarket, King, and Whitchurch-Stouffville',
    popularMaterial: 'Premium Cabinetry',
    testimonial1: {
      title: "Aurora Custom Shaker Cabinets",
      quote: "Beautiful, solid cabinets built to last. The soft-close hinges feel incredibly premium.",
      author: "David",
      neighborhood: "Aurora Highlands"
    },
    testimonial2: {
      title: "Modern Two-Tone Layout",
      quote: "The contrast between the white upper cabinets and oak base island is exactly what we wanted.",
      author: "Rachel",
      neighborhood: "Bayview Southeast"
    },
    testimonial3: {
      title: "Complete Kitchen Overhaul",
      quote: "Turnkey service from measurement to installation. We saved both time and money.",
      author: "Simon",
      neighborhood: "Aurora Heights"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  king: {
    slug: 'king',
    name: 'King',
    region: 'York Region',
    areasServed: 'King City, Nobleton, Schomberg, and surrounding estates',
    popularMaterial: 'Luxury Custom Cabinetry',
    testimonial1: {
      title: "King Estate Custom Kitchen",
      quote: "Grand, high-ceiling custom cabinets designed and installed with absolute precision.",
      author: "Charles",
      neighborhood: "King City"
    },
    testimonial2: {
      title: "Equestrian Property Upgrade",
      quote: "High-end cabinetry with custom organizers and deep drawers. Outstanding quality.",
      author: "Victoria",
      neighborhood: "Schomberg"
    },
    testimonial3: {
      title: "Farmhouse Style Cabinets",
      quote: "Stunning craftsmanship. The wood finish matches our country home's rustic style beautifully.",
      author: "Julian",
      neighborhood: "Pottageville"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  nobleton: {
    slug: 'nobleton',
    name: 'Nobleton',
    region: 'York Region',
    areasServed: 'Nobleton, King City, and Kleinburg',
    popularMaterial: 'High-End Modern Cabinets',
    testimonial1: {
      title: "Nobleton Ridge Executive Kitchen",
      quote: "Sleek, modern flat-panel cabinets. The matte finish is gorgeous and resists fingerprints.",
      author: "Adriano",
      neighborhood: "Nobleton Ridge"
    },
    testimonial2: {
      title: "Open-Concept Layout Upgrade",
      quote: "The seamless integration of the pantry cabinets and the giant island is flawless.",
      author: "Laura",
      neighborhood: "Nobleton East"
    },
    testimonial3: {
      title: "Wet Bar & Kitchenette Cabinets",
      quote: "Perfect cabinets for our basement walk-out bar. Very highly recommended.",
      author: "Marcus",
      neighborhood: "Nobleton Lakes"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  stouffville: {
    slug: 'stouffville',
    name: 'stouffville',
    region: 'York Region',
    areasServed: 'Whitchurch-Stouffville, Markham, and Uxbridge',
    popularMaterial: 'Classic Shaker Cabinetry',
    testimonial1: {
      title: "Stouffville New Build Kitchen",
      quote: "Replaced our basic builder cabinets with custom white shaker cabinets. It completely transformed the room.",
      author: "Daniele",
      neighborhood: "Wheler\'s Mill"
    },
    testimonial2: {
      title: "Farmhouse Kitchen Refresh",
      quote: "Stunning natural wood shaker cabinets. The installation team was extremely precise.",
      author: "Greg",
      neighborhood: "Ballantrae"
    },
    testimonial3: {
      title: "Turnkey Cabinets & Quartz Bundle",
      quote: "Getting the cabinets and quartz countertops together made the installation incredibly smooth.",
      author: "Vanessa",
      neighborhood: "Stouffville Main"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  },
  uxbridge: {
    slug: 'uxbridge',
    name: 'Uxbridge',
    region: 'Durham Region',
    areasServed: 'Uxbridge, Port Perry, and Stouffville',
    popularMaterial: 'Durable Family Cabinetry',
    testimonial1: {
      title: "Uxbridge Family Home Remodel",
      quote: "Sturdy cabinets with plenty of drawer space. Great for holding heavy pots and pans.",
      author: "Fiona",
      neighborhood: "Uxbridge Town"
    },
    testimonial2: {
      title: "Rustic Farmhouse Cabinets",
      quote: "Warm shaker cabinets that feel inviting. The design assistance we received was top-notch.",
      author: "Peter",
      neighborhood: "Uxbridge Wood"
    },
    testimonial3: {
      title: "Cottage Kitchenette Cabinets",
      quote: "Clean, simple RTA cabinets for our lakeside property. Very easy to assemble and install.",
      author: "Harlan",
      neighborhood: "Port Perry"
    },
    images: {
      hero: "/images/cabinet_cities_hero_common.jpg",
      testimonial1: "/images/typical-kitchen.jpg",
      testimonial2: "/images/modern-island-dark.jpg"
    }
  }
};
