import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { MATERIALS } from './constants';
import { cities } from './data/cities';
import { materials } from './data/materials';
import { cabinetPseoPages } from './data/cabinetPseoData';

// Use the same components and data as the browser. No browser or external API
// is required during deployment, including Vercel builds.
export function render(url: string) {
  // React 19 hoists Helmet's native metadata into this document head.
  const document = renderToString(
    <html lang="en"><head /><body>
      <HelmetProvider>
        <StaticRouter location={url}><App /></StaticRouter>
      </HelmetProvider>
    </body></html>
  );
  const head = document.match(/<head>([\s\S]*?)<\/head>/)?.[1];
  const body = document.match(/<body>([\s\S]*?)<\/body>/)?.[1];
  if (head === undefined || body === undefined) throw new Error(`Failed to render ${url}`);
  return { body, head };
}

export const coreRoutes = [
  '/', '/about', '/contact', '/gallery', '/blog', '/cost', '/faq',
  '/quartz-kitchen-countertops', '/white-quartz-kitchen-countertops',
  '/cabinets', '/cabinet-finishes', '/kitchen-cabinet-cost-guide',
  '/caesarstone', '/silestone', '/calacatta-gold', '/kasa-quartz',
  '/kstone', '/lucent-quartz', '/tce-stone', '/quartz-countertop-guide-2026',
  '/estimate', '/quartz-countertop-estimator', '/kitchen-cabinet-estimator',
  '/kitchen-renovation-estimator', '/kitchen-cabinet-cost',
  '/quartz-vs-quartzite-countertops-toronto', '/best-countertop-for-rental-properties',
  '/design-inspiration', '/quartz-vs-granite-vs-marble-toronto',
  '/flat-panel-vs-shaker-cabinets', '/modernize-kitchen-without-moving-plumbing',
  '/full-height-quartz-backsplash-toronto', '/kitchen-refresh-without-full-renovation-toronto',
  '/most-durable-countertops-busy-toronto-kitchens', '/pre-list-kitchen-refresh-toronto',
  '/lp/quartz-countertops', '/lp/kitchen-cabinets', '/lp/kitchen-renovation',
  '/areas-we-serve',
  ...MATERIALS.map(material => `/material/${material.id}`),
  ...Object.values(cities).map(city => `/${city.slug}`),
  ...cabinetPseoPages.map(page => `/${page.slug}`),
];
export const productRoutes = [...new Set(materials.map(material => `/slab/${material.id}`))];

// Retain old Kasa links with canonical metadata, but keep aliases out of sitemaps.
export const aliasRoutes = materials.filter(m => m.id.startsWith("kasa-")).map(m => `/slab/${m.id.slice(5)}`);
