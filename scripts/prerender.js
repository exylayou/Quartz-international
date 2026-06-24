import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { chromium } from '@playwright/test';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../dist');
const PORT = 3001;

// Dynamic routes from data files
const pseoFile = fs.readFileSync(path.resolve(__dirname, '../src/data/cabinetPseoData.ts'), 'utf8');
const pseoSlugs = [...pseoFile.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

const materialsFile = fs.readFileSync(path.resolve(__dirname, '../src/data/materials.ts'), 'utf8');
const slabIds = [...materialsFile.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

const citiesFile = fs.readFileSync(path.resolve(__dirname, '../src/data/cities.ts'), 'utf8');
const citySlugs = [...citiesFile.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

const cabinetCitiesFile = fs.readFileSync(path.resolve(__dirname, '../src/data/cabinetCities.ts'), 'utf8');
const cabinetCitySlugs = [...cabinetCitiesFile.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

// Core top-level routes to prerender
const CORE_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/gallery',
  '/cost',
  '/quartz-kitchen-countertops',
  '/cabinets',
  '/estimate',
  '/quartz-countertop-estimator',
  '/kitchen-cabinet-cost-guide',
  '/blog',
  '/visualizer',
  '/cabinet-finishes',
  '/kitchen-cabinet-estimator',
  '/kitchen-renovation-estimator',
  '/kitchen-cabinet-cost',
  '/areas-we-serve',
  '/caesarstone',
  '/quartz-countertops-caesarstone',
  '/silestone',
  '/kasa-quartz',
  '/quartz-countertops-kasa',
  '/kstone',
  '/quartz-countertops-kstone',
  '/lucent-quartz',
  '/quartz-countertops-lucent',
  '/tce-stone',
  '/quartz-countertops-tce',
  '/quartz-countertop-guide-2026'
];

const ROUTES = Array.from(new Set([
  ...CORE_ROUTES,
  ...pseoSlugs.map(slug => `/${slug}`),
  ...slabIds.map(id => `/slab/${id}`),
  ...citySlugs.map(slug => `/${slug}`),
  ...citySlugs.map(slug => `/quartz-countertop-cost/${slug}`),
  ...cabinetCitySlugs.map(slug => `/kitchen-cabinets/${slug}`)
]));

async function prerender() {
  if (!fs.existsSync(DIST_DIR) || !fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
    console.error("No dist/index.html found. Please run vite build first.");
    process.exit(1);
  }

  // Start a local Express server to serve the built assets
  const app = express();
  app.use(express.static(DIST_DIR));
  app.get('*', (req, res) => res.sendFile(path.join(DIST_DIR, 'index.html')));
  
  const server = app.listen(PORT, async () => {
    console.log(`\n🚀 Started local server on port ${PORT} for SSG Prerendering...`);

    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    for (const route of ROUTES) {
      console.log(`\n⏳ Prerendering ${route}...`);
      try {
        await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle' });
        
        // Ensure React has mounted (root div is no longer empty)
        await page.waitForSelector('#root > div', { timeout: 10000 }).catch(() => {});
        
        // Wait a small buffer for any final hydration or layout shifts
        await page.waitForTimeout(1000);

        const html = await page.content();

        // Determine save path
        const routePath = route === '/' ? '' : route;
        const targetDir = path.join(DIST_DIR, routePath);
        
        // Create directory if it doesn't exist
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }

        const targetFile = path.join(targetDir, 'index.html');
        fs.writeFileSync(targetFile, html);
        console.log(`✅ Saved ${targetFile}`);

      } catch (e) {
        console.error(`❌ Failed to prerender ${route}:`, e);
      }
    }

    console.log("\n🎉 Finished SSG Prerendering! Closing browser...");
    await browser.close();
    server.close();
    process.exit(0);
  });
}

prerender();
