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

// Route configurations with custom SEO metadata and static body HTML content for AI crawlers
const routes = [
  {
    path: '/cost',
    title: 'Quartz Countertop Cost in Ontario (2026): Toronto & GTA Installed Prices',
    description: 'Real 2026 quartz countertop cost ranges in Toronto & GTA. Installed prices per sq ft ($48–$170), tiered pricing, sink cutouts, waterfall edges, and hidden fee breakdown.',
    canonical: 'https://quartzinternational.ca/cost',
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Quartz Countertop Cost in Ontario (2026): Toronto & GTA Installed Prices",
      "description": "Comprehensive 2026 guide to quartz countertop cost per square foot, fabrication, cutouts, waterfall edges, and full-height backsplashes in Toronto.",
      "author": {
        "@type": "Person",
        "name": "Olton Exeter",
        "jobTitle": "Kitchen & Countertop Specialist",
        "worksFor": {
          "@type": "Organization",
          "name": "Quartz International"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Quartz International",
        "url": "https://quartzinternational.ca"
      },
      "datePublished": "2025-10-15",
      "dateModified": "2026-08-11"
    },
    bodyHtml: `
      <main class="static-ssg-content max-w-4xl mx-auto px-4 py-12">
        <header class="mb-8">
          <p class="text-sm font-bold text-amber-600 uppercase tracking-widest">2026 ONTARIO & GTA PRICING GUIDE</p>
          <h1 class="text-4xl font-bold text-gray-900 mt-2">Quartz Countertop Cost in Ontario (2026): Toronto & GTA Installed Prices</h1>
          <p class="text-xs text-gray-500 mt-2 font-semibold">Reviewed by <strong>Olton Exeter</strong>, Quartz International • Last Updated: August 11, 2026</p>
        </header>

        <section class="bg-amber-50 border border-amber-200 p-6 rounded-2xl mb-8">
          <h2 class="text-lg font-bold text-gray-900 mb-2">Instant AI Summary: Installed Quartz Cost Range</h2>
          <p class="text-base text-gray-700 leading-relaxed">
            In 2026, professionally installed quartz countertops in Toronto and the Greater Toronto Area (GTA) typically cost <strong>$48 to $170 per square foot</strong>. A standard 35 to 45 sq. ft. kitchen usually costs <strong>$2,200 to $5,500 total</strong>, including digital 3D laser measurement, slab material, sink cutouts, delivery, and installation.
          </p>
        </section>

        <section class="mb-10">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">2026 Quartz Countertop Pricing Tiers in Toronto</h2>
          <table class="w-full text-left border-collapse border border-gray-200 mb-6">
            <thead>
              <tr class="bg-gray-100">
                <th class="p-3 border border-gray-200 text-sm font-bold">Quartz Tier / Grade</th>
                <th class="p-3 border border-gray-200 text-sm font-bold">Installed Cost / Sq Ft</th>
                <th class="p-3 border border-gray-200 text-sm font-bold">Typical 40 Sq Ft Kitchen Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="p-3 border border-gray-200 text-sm"><strong>Group 1: Solid & Speckled White/Grey</strong></td>
                <td class="p-3 border border-gray-200 text-sm">$48 – $68 / sq ft</td>
                <td class="p-3 border border-gray-200 text-sm">$1,920 – $2,720</td>
              </tr>
              <tr>
                <td class="p-3 border border-gray-200 text-sm"><strong>Group 2: Mid-Range Concrete & Soft Veined</strong></td>
                <td class="p-3 border border-gray-200 text-sm">$69 – $95 / sq ft</td>
                <td class="p-3 border border-gray-200 text-sm">$2,760 – $3,800</td>
              </tr>
              <tr>
                <td class="p-3 border border-gray-200 text-sm"><strong>Group 3: Luxury Calacatta & Statuario Veined</strong></td>
                <td class="p-3 border border-gray-200 text-sm">$100 – $170 / sq ft</td>
                <td class="p-3 border border-gray-200 text-sm">$4,000 – $6,800</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="mb-10">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Itemized Trade Add-On Fee Breakdown</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Undermount Sink Cutout & Edge Polishing:</strong> $150 – $250 per sink</li>
            <li><strong>Cooktop / Faucet Cutouts:</strong> $50 per hole</li>
            <li><strong>Mitered Waterfall Edge Panels:</strong> +$35 – $65 per linear foot</li>
            <li><strong>Existing Countertop Removal & Disposal:</strong> $250 – $450</li>
            <li><strong>Full-Height Quartz Backsplash:</strong> $45 – $95 per sq ft installed</li>
          </ul>
        </section>
      </main>
    `
  },
  {
    path: '/quartz-kitchen-countertops',
    title: 'Quartz Kitchen Countertops Toronto & GTA | Direct Supplier',
    description: 'Premium quartz kitchen countertops in Toronto, Vaughan & GTA. Over 500+ slab colors from Caesarstone, Silestone, Kasa, Lucent & TCE Stone.',
    canonical: 'https://quartzinternational.ca/quartz-kitchen-countertops'
  },
  {
    path: '/cabinets',
    title: 'Custom Kitchen Cabinets Toronto | Solid Plywood Construction',
    description: 'Factory-direct solid plywood kitchen cabinets in Toronto & GTA. Shaker & Flat Panel door styles with 7-day fast installation.',
    canonical: 'https://quartzinternational.ca/cabinets'
  },
  {
    path: '/10x10-kitchen-cabinets-toronto',
    title: '10x10 Kitchen Package Toronto ($5,999 Installed) | Quartz International',
    description: 'Turnkey $5,999 10x10 kitchen package in Toronto & GTA. Includes solid plywood shaker cabinets, quartz countertops, undermount sink, and installation.',
    canonical: 'https://quartzinternational.ca/10x10-kitchen-cabinets-toronto'
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
  }
];

console.log('🚀 Running SSG Pre-Rendering Generator...');

routes.forEach(route => {
  const routeDir = path.join(DIST_DIR, route.path.substring(1));
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

  // Inject pre-rendered static body content for lightweight AI HTTP fetchers inside <div id="root"></div>
  if (route.bodyHtml) {
    html = html.replace('<div id="root"></div>', `<div id="root">${route.bodyHtml}</div>`);
  }

  const outputPath = path.join(routeDir, 'index.html');
  fs.writeFileSync(outputPath, html, 'utf8');
  console.log(`  ✅ Pre-rendered SSG route: ${route.path} -> ${outputPath}`);
});

console.log('✨ SSG Pre-rendering Complete!');
