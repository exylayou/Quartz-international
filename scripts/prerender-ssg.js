import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_HTML_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error('❌ dist/index.html does not exist. Run "vite build" first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(INDEX_HTML_PATH, 'utf8');

const GTA_CITIES = [
  { slug: 'toronto', name: 'Toronto' },
  { slug: 'mississauga', name: 'Mississauga' },
  { slug: 'vaughan', name: 'Vaughan' },
  { slug: 'markham', name: 'Markham' },
  { slug: 'brampton', name: 'Brampton' },
  { slug: 'oakville', name: 'Oakville' },
  { slug: 'richmond-hill', name: 'Richmond Hill' },
  { slug: 'burlington', name: 'Burlington' },
  { slug: 'pickering', name: 'Pickering' },
  { slug: 'ajax', name: 'Ajax' },
  { slug: 'whitby', name: 'Whitby' },
  { slug: 'oshawa', name: 'Oshawa' },
  { slug: 'milton', name: 'Milton' },
  { slug: 'newmarket', name: 'Newmarket' },
  { slug: 'aurora', name: 'Aurora' },
  { slug: 'etobicoke', name: 'Etobicoke' },
  { slug: 'scarborough', name: 'Scarborough' },
  { slug: 'north-york', name: 'North York' }
];

const CABINET_PSEO_SLUGS = [
  'white-shaker-kitchen-cabinets-toronto',
  'slim-shaker-kitchen-cabinets-toronto',
  'modern-kitchen-cabinets-toronto',
  'plywood-kitchen-cabinets-toronto',
  'rta-kitchen-cabinets-toronto',
  '10x10-kitchen-cabinets-toronto',
  'kitchen-cabinets-and-quartz-countertops-toronto',
  'affordable-kitchen-cabinets-toronto'
];

// Core static routes definition
const routes = [
  {
    path: '/cost',
    title: 'Quartz Countertop Cost in Ontario (2026): Toronto & GTA Installed Prices',
    description: 'Real 2026 quartz countertop cost ranges in Toronto & GTA. Installed prices per sq ft ($48–$170), tiered pricing, sink cutouts, waterfall edges, and hidden fee breakdown.',
    canonical: 'https://quartzinternational.ca/cost'
  },
  {
    path: '/about',
    title: 'About Quartz International | Premier Toronto Countertop & Cabinet Fabricator',
    description: 'Learn about Quartz International. Over 15 years providing factory-direct quartz countertops and solid plywood kitchen cabinets across Toronto & the GTA.',
    canonical: 'https://quartzinternational.ca/about'
  },
  {
    path: '/contact',
    title: 'Contact Quartz International | Toronto Showroom & Quote Desk',
    description: 'Get in touch with Quartz International for showroom appointments, laser measurement scheduling, or custom kitchen package estimates in Toronto & GTA.',
    canonical: 'https://quartzinternational.ca/contact'
  },
  {
    path: '/gallery',
    title: 'Kitchen Project Gallery | Quartz International Toronto',
    description: 'Browse photos of completed quartz countertops, full-height backsplashes, and solid plywood shaker cabinet installations across Toronto and the GTA.',
    canonical: 'https://quartzinternational.ca/gallery'
  },
  {
    path: '/blog',
    title: 'Kitchen Renovation & Countertop Blog | Quartz International',
    description: 'Expert guides on quartz care, countertop costs, cabinet styles, material comparisons, and kitchen design trends in Toronto.',
    canonical: 'https://quartzinternational.ca/blog'
  },
  {
    path: '/areas-we-serve',
    title: 'Areas We Serve | Quartz Countertops & Cabinets Toronto & GTA',
    description: 'Quartz International serves Toronto, Mississauga, Vaughan, Markham, Brampton, Oakville, Richmond Hill, Burlington, and surrounding GTA municipalities.',
    canonical: 'https://quartzinternational.ca/areas-we-serve'
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions | Quartz International',
    description: 'Answers to common questions about quartz countertop installation, cabinet lead times, condo rules, 3D laser measurement, and warranties.',
    canonical: 'https://quartzinternational.ca/faq'
  },
  {
    path: '/quartz-kitchen-countertops',
    title: 'Quartz Kitchen Countertops Toronto & GTA | Direct Supplier',
    description: 'Premium quartz kitchen countertops in Toronto, Vaughan & GTA. Over 500+ slab colors from Caesarstone, Silestone, Kasa, Lucent & TCE Stone.',
    canonical: 'https://quartzinternational.ca/quartz-kitchen-countertops'
  },
  {
    path: '/white-quartz-kitchen-countertops',
    title: 'White Quartz Countertops Toronto | Pure, Calacatta & Veined Slabs',
    description: 'Browse top-rated white quartz countertops in Toronto & GTA. Pure white, Calacatta Gold, Statuario, and subtle grey veined slabs.',
    canonical: 'https://quartzinternational.ca/white-quartz-kitchen-countertops'
  },
  {
    path: '/cabinets',
    title: 'Custom Kitchen Cabinets Toronto | Solid Plywood Construction',
    description: 'Factory-direct solid plywood kitchen cabinets in Toronto & GTA. Shaker & Flat Panel door styles with 7-day fast installation.',
    canonical: 'https://quartzinternational.ca/cabinets'
  },
  {
    path: '/cabinet-finishes',
    title: 'Kitchen Cabinet Door Styles & Finishes | Quartz International',
    description: 'Explore solid wood shaker, slim shaker, high-gloss, and flat-panel cabinet door finishes available for Toronto kitchen renovations.',
    canonical: 'https://quartzinternational.ca/cabinet-finishes'
  },
  {
    path: '/kitchen-cabinet-cost-guide',
    title: 'Kitchen Cabinet Cost Guide Toronto (2026) | Quartz International',
    description: 'Detailed 2026 pricing guide for kitchen cabinets in Toronto & GTA. RTA vs assembled plywood vs custom cabinet package pricing.',
    canonical: 'https://quartzinternational.ca/kitchen-cabinet-cost-guide'
  },
  {
    path: '/caesarstone',
    title: 'Caesarstone Countertops Toronto | Authorized Dealer & Installer',
    description: 'Authorized Caesarstone quartz countertop dealer in Toronto & GTA. Shop Empira White, Montblanc, Statuario Maximus, and Airy Concrete slabs.',
    canonical: 'https://quartzinternational.ca/caesarstone'
  },
  {
    path: '/silestone',
    title: 'Silestone Quartz Countertops Toronto | Authorized Installer',
    description: 'Shop Silestone quartz countertops in Toronto. Sunlit Days, Ethereal Nocturne, and HybriQ+ eco-friendly quartz collections with 25-year warranty.',
    canonical: 'https://quartzinternational.ca/silestone'
  },
  {
    path: '/kasa-quartz',
    title: 'Kasa Quartz Countertops Toronto | Factory Direct Pricing',
    description: 'Direct Kasa Quartz supplier in Toronto & GTA. Affordable premium quartz slabs with K8803 Pure White and Calacatta veined collections.',
    canonical: 'https://quartzinternational.ca/kasa-quartz'
  },
  {
    path: '/kstone',
    title: 'KStone Quartz Countertops Toronto | Premium Slabs',
    description: 'KStone quartz countertop supplier in Toronto. Durable, non-porous quartz surfaces engineered for family kitchens and condo rentals.',
    canonical: 'https://quartzinternational.ca/kstone'
  },
  {
    path: '/lucent-quartz',
    title: 'Lucent Quartz Countertops Toronto | Modern Veined Slabs',
    description: 'Lucent Quartz countertops in Toronto & GTA. High-definition Calacatta veining, honed textures, and scratch-resistant surfaces.',
    canonical: 'https://quartzinternational.ca/lucent-quartz'
  },
  {
    path: '/tce-stone',
    title: 'TCE Stone Quartz Countertops Toronto | Factory Wholesale',
    description: 'TCE Stone quartz dealer in Toronto. Quality quartz slabs for builders, contractors, homeowners, and commercial kitchen projects.',
    canonical: 'https://quartzinternational.ca/tce-stone'
  },
  {
    path: '/calacatta-gold',
    title: 'Calacatta Gold Quartz Countertops Toronto | Warm Gold Veining',
    description: 'Calacatta Gold quartz countertops in Toronto & GTA. Luxurious white marble-look quartz with bold gold and grey veining.',
    canonical: 'https://quartzinternational.ca/calacatta-gold'
  },
  {
    path: '/quartz-countertop-guide-2026',
    title: 'Ultimate Quartz Countertop Guide 2026 | Toronto & GTA',
    description: 'Complete 2026 buyer guide to quartz countertops in Toronto. Selection, thickness, maintenance, brand comparison, and pricing.',
    canonical: 'https://quartzinternational.ca/quartz-countertop-guide-2026'
  },
  {
    path: '/quartz-countertop-estimator',
    title: 'Quartz Countertop Cost Estimator | Instant Toronto Price Calculator',
    description: 'Calculate instant quartz countertop estimates for your Toronto or GTA kitchen in 60 seconds. Material, fabrication, and install included.',
    canonical: 'https://quartzinternational.ca/quartz-countertop-estimator'
  },
  {
    path: '/kitchen-cabinet-estimator',
    title: 'Kitchen Cabinet Cost Estimator | Instant Package Calculator',
    description: 'Estimate solid plywood kitchen cabinet package costs for Toronto homes and condos. RTA, assembled, and installed options.',
    canonical: 'https://quartzinternational.ca/kitchen-cabinet-estimator'
  },
  {
    path: '/kitchen-renovation-estimator',
    title: 'Kitchen Renovation Estimator Toronto | Cabinets + Quartz Calculator',
    description: 'Get an instant all-in estimate for your Toronto kitchen refresh (cabinets + quartz countertops) with zero structural demolition.',
    canonical: 'https://quartzinternational.ca/kitchen-renovation-estimator'
  },
  {
    path: '/kitchen-cabinet-cost',
    title: 'Kitchen Cabinet Cost in Toronto & GTA | 2026 Package Pricing',
    description: 'How much do kitchen cabinets cost in Toronto? Transparent price breakdowns for 10x10 packages, plywood boxes, and door styles.',
    canonical: 'https://quartzinternational.ca/kitchen-cabinet-cost'
  },
  {
    path: '/quartz-vs-granite-vs-marble-toronto',
    title: 'Quartz vs. Granite vs. Marble Countertops Toronto | 2026 Comparison',
    description: 'Compare Quartz, Granite, and Marble for Toronto kitchens. Stain resistance, sealing, heat tolerance, maintenance, and installed cost.',
    canonical: 'https://quartzinternational.ca/quartz-vs-granite-vs-marble-toronto'
  },
  {
    path: '/flat-panel-vs-shaker-cabinets',
    title: 'Flat Panel vs. Shaker Kitchen Cabinets | Style & Cost Guide',
    description: 'Compare Slab Flat Panel vs. Classic Shaker kitchen cabinets for Toronto homes. Design trends, cleaning, costs, and quartz pairings.',
    canonical: 'https://quartzinternational.ca/flat-panel-vs-shaker-cabinets'
  },
  {
    path: '/modernize-kitchen-without-moving-plumbing',
    title: 'Modernize Kitchen Without Moving Plumbing | Fast GTA Refresh',
    description: 'How to modernize your Toronto kitchen without moving gas or plumbing lines. Save $20,000+ and complete in 7 days.',
    canonical: 'https://quartzinternational.ca/modernize-kitchen-without-moving-plumbing'
  },
  {
    path: '/full-height-quartz-backsplash-toronto',
    title: 'Full-Height Quartz Backsplash Toronto | Seamless Slab Upgrade',
    description: 'Replace dated 4-inch splashes and dirty tile grout with a full-height quartz backsplash in Toronto. Seamless, non-porous quartz wall cladding.',
    canonical: 'https://quartzinternational.ca/full-height-quartz-backsplash-toronto'
  },
  {
    path: '/kitchen-refresh-without-full-renovation-toronto',
    title: 'Kitchen Refresh Without a Full Renovation Toronto | Controlled & Fast',
    description: 'Upgrade your kitchen cabinets and quartz countertops in 7–10 days without structural demolition, cost overruns, or contractor headaches.',
    canonical: 'https://quartzinternational.ca/kitchen-refresh-without-full-renovation-toronto'
  },
  {
    path: '/most-durable-countertops-busy-toronto-kitchens',
    title: 'Most Durable Countertops for Busy Toronto Kitchens | Quartz Guide',
    description: 'Ranked durability guide for Toronto kitchens: Why non-porous quartz beats marble, granite, and laminate for stain resistance, zero sealing, and family life.',
    canonical: 'https://quartzinternational.ca/most-durable-countertops-busy-toronto-kitchens'
  },
  {
    path: '/quartz-vs-quartzite-countertops-toronto',
    title: 'Quartz vs. Quartzite Countertops Toronto | Cost & Maintenance Guide',
    description: 'Unbiased comparison of Quartz vs Quartzite for Toronto kitchens: Cost per sq ft, zero sealing vs natural variation, heat tolerance, and family durability.',
    canonical: 'https://quartzinternational.ca/quartz-vs-quartzite-countertops-toronto'
  },
  {
    path: '/pre-list-kitchen-refresh-toronto',
    title: 'Pre-List Kitchen Refresh Toronto | Add $30K+ to Home Resale Price',
    description: 'Pre-list kitchen upgrades for Toronto home sellers & Realtors. Spend $6K-$9K to add $30K+ to your MLS listing price in 7 days without demolition delays.',
    canonical: 'https://quartzinternational.ca/pre-list-kitchen-refresh-toronto'
  },
  {
    path: '/best-countertop-for-rental-properties',
    title: 'Best Countertop for Rental Properties & Condos Toronto | Landlord Guide',
    description: 'Why quartz is the #1 countertop investment for Toronto landlords and rental condos. Low vacancy loss, stain resistance, and zero maintenance.',
    canonical: 'https://quartzinternational.ca/best-countertop-for-rental-properties'
  },
  {
    path: '/design-inspiration',
    title: 'Kitchen Design Inspiration & Trends | Quartz International',
    description: 'Explore modern kitchen design inspiration, two-tone cabinet pairings, waterfall quartz islands, and backsplash trends in Toronto.',
    canonical: 'https://quartzinternational.ca/design-inspiration'
  },
  {
    path: '/lp/quartz-countertops',
    title: 'Quartz Countertops Toronto | Direct Supplier & Fast Installation',
    description: 'Factory-direct quartz countertops in Toronto & GTA. 3D laser measurement, 500+ slab options, and 7-day turnaround.',
    canonical: 'https://quartzinternational.ca/lp/quartz-countertops'
  },
  {
    path: '/lp/kitchen-cabinets',
    title: 'Kitchen Cabinets Toronto | Factory Direct Solid Plywood',
    description: 'Quality solid plywood kitchen cabinets in Toronto. Fast delivery, 3D design service, and turnkey installation options.',
    canonical: 'https://quartzinternational.ca/lp/kitchen-cabinets'
  },
  {
    path: '/lp/kitchen-renovation',
    title: 'Kitchen Renovation Packages Toronto | Turnkey Cabinets + Quartz',
    description: 'Turnkey kitchen renovation packages in Toronto. Retain your layout, upgrade cabinets and quartz tops in 7 days.',
    canonical: 'https://quartzinternational.ca/lp/kitchen-renovation'
  }
];

// Automatically generate city-specific routes for top GTA cities
GTA_CITIES.forEach(city => {
  routes.push({
    path: `/${city.slug}`,
    title: `Quartz Countertops & Kitchen Cabinets ${city.name} | Quartz International`,
    description: `Factory-direct quartz countertops and solid plywood kitchen cabinets in ${city.name}, ON. 3D laser measurement, 7-day fast installation, and turnkey packages.`,
    canonical: `https://quartzinternational.ca/${city.slug}`
  });
});

// Automatically generate cabinet pSEO routes
CABINET_PSEO_SLUGS.forEach(slug => {
  routes.push({
    path: `/${slug}`,
    title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} | Quartz International`,
    description: `Shop ${slug.replace(/-/g, ' ')} with solid plywood construction and quartz countertop bundle packages in Toronto & GTA.`,
    canonical: `https://quartzinternational.ca/${slug}`
  });
});

console.log(`🚀 Running SSG Pre-Rendering Generator for ${routes.length} total routes...`);

routes.forEach(route => {
  const routePathClean = route.path.startsWith('/') ? route.path.substring(1) : route.path;
  const routeDir = path.join(DIST_DIR, routePathClean);
  
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let html = templateHtml;

  // Replace Title
  if (route.title) {
    html = html.replace(/<title>.*?<\/title>/gi, `<title>${route.title}</title>`);
  }

  // Replace Description Meta
  if (route.description) {
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/gi,
      `<meta name="description" content="${route.description}" />`
    );
  }

  // Inject Canonical URL
  if (route.canonical) {
    if (html.includes('<link rel="canonical"')) {
      html = html.replace(/<link rel="canonical".*?\/>/gi, `<link rel="canonical" href="${route.canonical}" />`);
    } else {
      html = html.replace('</head>', `  <link rel="canonical" href="${route.canonical}" />\n</head>`);
    }
  }

  // Inject JSON-LD Schema
  if (route.schema) {
    const schemaTag = `<script type="application/ld+json">\n${JSON.stringify(route.schema, null, 2)}\n</script>\n`;
    html = html.replace('</head>', `${schemaTag}</head>`);
  }

  // Default pre-rendered static body content for lightweight AI HTTP fetchers inside <div id="root"></div>
  const staticBodyContent = route.bodyHtml || `
    <main class="static-ssg-content max-w-4xl mx-auto px-4 py-12">
      <header class="mb-6">
        <p class="text-xs font-bold text-amber-600 uppercase tracking-widest">QUARTZ INTERNATIONAL TORONTO</p>
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">${route.title}</h1>
        <p class="text-sm text-gray-600 mt-3 leading-relaxed">${route.description}</p>
      </header>
      <section class="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-6">
        <h2 class="text-base font-bold text-gray-900 mb-2">Factory Direct Countertop & Cabinet Service:</h2>
        <p class="text-sm text-gray-700 leading-relaxed">
          Quartz International provides 100% solid plywood kitchen cabinets and premium engineered quartz countertops across Toronto and the Greater Toronto Area. All projects include 3D laser precision measurement, custom fabrication, undermount sink cutouts, delivery, and professional 1-day installation.
        </p>
      </section>
    </main>
  `;

  html = html.replace('<div id="root"></div>', `<div id="root">${staticBodyContent}</div>`);

  const outputPath = path.join(routeDir, 'index.html');
  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`  ✅ Pre-rendered SSG route: ${route.path}`);
});

console.log(`✨ SSG Pre-rendering Complete! Successfully pre-rendered ${routes.length} static HTML files.`);
