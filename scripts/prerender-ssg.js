import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render, coreRoutes, productRoutes, aliasRoutes } from '../.ssg/entry-server.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
  .replace(/<title>[\s\S]*?<\/title>/i, '');
fs.writeFileSync(path.join(dist, 'app-shell.html'), template);
const site = 'https://quartzinternational.ca';
const routes = [...new Set([...coreRoutes, ...productRoutes, ...aliasRoutes])];
const xmlEscape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;');
const reports = [];

for (const route of routes) {
  // Throw on any failed route; never ship a successful build of empty stubs.
  const { body, head } = render(route);
  if (!body.includes('<h1') || !head.includes('name="description"')) {
    throw new Error(`Missing real content or metadata for ${route}`);
  }
  const html = template.replace('</head>', `<!--ssg-head:start-->${head}<!--ssg-head:end-->\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  const dir = path.join(dist, route.slice(1));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  // A body-only text export provides a readable long-form AI reference using
  // exactly the public page content, without invented claims or extra copy.
  if (['/', '/cost', '/faq', '/best-countertop-for-rental-properties', '/contact'].includes(route)) {
    const text = body.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    reports.push(`## ${site}${route}\n\n${text}\n`);
  }
}

// Separate guides/service pages from the product catalogue. Aliases and private
// quote/admin/results URLs never enter either sitemap. Omit fabricated lastmod.
function sitemap(name, paths) {
  fs.writeFileSync(path.join(dist, name), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(paths)].map(route => `  <url><loc>${xmlEscape(site + route)}</loc></url>`).join('\n')}\n</urlset>\n`);
}
sitemap('sitemap-pages.xml', coreRoutes);
sitemap('sitemap-products.xml', productRoutes);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${site}/sitemap-pages.xml</loc></sitemap>\n  <sitemap><loc>${site}/sitemap-products.xml</loc></sitemap>\n</sitemapindex>\n`);
fs.writeFileSync(path.join(dist, 'llms-full.txt'), `# Quartz International — public website reference\n\nSource: ${site}\nThese are public website statements, not independent verification. Prices are estimates in CAD; confirm a written project quote and current availability.\n\n${reports.join('\n')}`);
fs.writeFileSync(path.join(dist, 'prerender-manifest.json'), JSON.stringify(routes, null, 2));
console.log(`Rendered ${routes.length} complete React pages, metadata, sitemaps and llms-full.txt.`);
