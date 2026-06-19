export interface CityData {
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

export const cities: Record<string, CityData> = {
  toronto: {
    slug: 'toronto',
    name: 'Toronto',
    region: 'GTA',
    areasServed: 'Toronto, North York, Scarborough, Vaughan, and Mississauga',
    popularMaterial: 'Premium Quartz',
    testimonial1: {
      title: "Typical Toronto Condo Upgrade",
      quote: "Transformed our small condo kitchen in just 2 days.",
      author: "Sarah",
      neighborhood: "North York"
    },
    testimonial2: {
      title: "Modern Island Upgrade",
      quote: "Looks like a $20k kitchen upgrade. Worth every dollar.",
      author: "Michael",
      neighborhood: "Downtown"
    },
    testimonial3: {
      title: "Standard Kitchen Remodel",
      quote: "Installed in 3 days. The finish is flawless.",
      author: "Jessica",
      neighborhood: "Etobicoke"
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
      title: "Modern Island Upgrade",
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
      hero: "/images/markham-hero.jpg",
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
    }
  },
  scarborough: {
    slug: 'scarborough',
    name: 'Scarborough',
    region: 'Toronto East',
    areasServed: 'Scarborough, East York, and North York',
    popularMaterial: 'Premium Quartz',
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
    }
  },
  mississauga: {
    slug: 'mississauga',
    name: 'Mississauga',
    region: 'Peel Region',
    areasServed: 'Mississauga, Port Credit, and Streetsville',
    popularMaterial: 'Premium Quartz',
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
    }
  },
  brampton: {
    slug: 'brampton',
    name: 'Brampton',
    region: 'Peel Region',
    areasServed: 'Brampton, Caledon, and Mississauga',
    popularMaterial: 'Premium Quartz',
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
    }
  },
  burlington: {
    slug: 'burlington',
    name: 'Burlington',
    region: 'Halton Region',
    areasServed: 'Burlington, Oakville, and Waterdown',
    popularMaterial: 'Premium Quartz',
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
    }
  }
};
