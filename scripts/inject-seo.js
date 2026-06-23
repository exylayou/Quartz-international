import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const INDEX_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(INDEX_PATH)) {
  console.error("No dist/index.html found. Please run vite build first.");
  process.exit(1);
}

const htmlTemplate = fs.readFileSync(INDEX_PATH, 'utf-8');

const costSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.quartzinternational.ca/#organization",
      "name": "Quartz International",
      "url": "https://www.quartzinternational.ca/"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.quartzinternational.ca/cost#webpage",
      "url": "https://www.quartzinternational.ca/cost",
      "name": "Quartz Countertop Cost Guide 2026"
    },
    {
      "@type": "TechArticle",
      "@id": "https://www.quartzinternational.ca/cost#article",
      "headline": "Quartz Countertop Cost in Toronto & GTA (2026 Pricing Guide)",
      "description": "Quartz countertops installed in the Toronto & GTA region cost $48 to $170 per square foot. Get an instant custom estimate.",
      "mainEntityOfPage": {"@id": "https://www.quartzinternational.ca/cost#webpage"},
      "author": {"@type": "Organization", "name": "Quartz International"},
      "publisher": {"@id": "https://www.quartzinternational.ca/#organization"},
      "datePublished": "2026-06-23",
      "dateModified": "2026-06-23",
      "inLanguage": "en-CA"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.quartzinternational.ca/cost#faq",
      "mainEntity": [
        { "@type": "Question", "name": "How much do quartz countertops cost in Toronto & GTA?", "acceptedAnswer": { "@type": "Answer", "text": "Quartz countertops typically cost $48 to $170 per square foot installed in the Toronto & GTA area, with most full kitchen projects ranging from $2,000 to $8,500 depending on size and quartz tier." } },
        { "@type": "Question", "name": "How long does quartz countertop installation take?", "acceptedAnswer": { "@type": "Answer", "text": "Most quartz countertop installations are completed in 1 to 2 days once templating is done, though the full process — including measuring, fabrication, and scheduling — typically takes 1 to 3 weeks from initial consultation to final install." } },
        { "@type": "Question", "name": "Is quartz worth it for kitchen countertops?", "acceptedAnswer": { "@type": "Answer", "text": "Quartz is widely considered a strong long-term value because it is non-porous, does not require sealing, and resists staining and scratching better than natural stone alternatives like granite or marble, while offering a comparable range of colors and patterns." } },
        { "@type": "Question", "name": "Do you provide both countertops and cabinets?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — countertops and custom cabinetry can be bundled into a single kitchen project, which typically reduces overall cost compared to ordering them separately and gives you one point of contact for the full renovation." } }
      ]
    }
  ]
};

const schemaScript = `<script type="application/ld+json">${JSON.stringify(costSchema)}</script>`;

const costHtml = `
  <article>
    <header>
      <h1>Quartz Countertop Cost in Toronto & GTA (2026 Pricing Guide)</h1>
      <p>Quartz countertops installed in the Toronto & GTA region cost $48 to $170 per square foot, including materials, fabrication, and professional installation. Most kitchen projects total $2,000 to $8,500, depending on kitchen size, quartz tier, and edge detailing. Get an instant custom estimate below.</p>
    </header>
    <section>
      <h2>Quartz Countertop Cost Per Square Foot (Installed)</h2>
      <table>
        <thead>
          <tr>
            <th>Quartz Tier</th>
            <th>Description</th>
            <th>Installed Cost per sq ft</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Standard Quartz</td><td>Simple, clean designs</td><td>$48 – $68</td></tr>
          <tr><td>Premium Quartz</td><td>Popular patterns</td><td>$69 – $95</td></tr>
          <tr><td>Luxury Quartz</td><td>High-end designs</td><td>$100 – $170</td></tr>
        </tbody>
      </table>
    </section>
  </article>
`;

let injectedHtml = htmlTemplate.replace('</head>', `  ${schemaScript}\n</head>`);
injectedHtml = injectedHtml.replace(/<title>.*?<\/title>/, '<title>Quartz Countertop Cost in Toronto & GTA (2026 Pricing Guide)</title>');
injectedHtml = injectedHtml.replace('<div id="root"></div>', `<div id="root">${costHtml}</div>`);

const costDir = path.join(DIST_DIR, 'cost');
if (!fs.existsSync(costDir)) {
  fs.mkdirSync(costDir, { recursive: true });
}

fs.writeFileSync(path.join(costDir, 'index.html'), injectedHtml);
console.log('Successfully injected SEO HTML into dist/cost/index.html');
