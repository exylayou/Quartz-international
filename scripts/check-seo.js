import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const routes = JSON.parse(fs.readFileSync(path.join(dist, 'prerender-manifest.json'), 'utf8'));
const read = route => fs.readFileSync(path.join(dist, route.slice(1), 'index.html'), 'utf8');
const plainText = html => html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
let schemas = 0;
for (const route of routes) {
  const html = read(route);
  assert.equal((html.match(/<title>/g) || []).length, 1, `${route}: title count`);
  assert.equal((html.match(/name="description"/g) || []).length, 1, `${route}: description count`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${route}: canonical count`);
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  assert.ok(canonical?.startsWith('https://quartzinternational.ca/'), `${route}: canonical origin`);
  assert.ok(!canonical.includes('https://quartzinternational.cahttps'), `${route}: malformed canonical`);
  assert.ok(html.includes('<h1'), `${route}: missing content heading`);
  assert.ok(!html.includes('static-ssg-content'), `${route}: placeholder content`);
  assert.ok(!html.includes('Page not found'), `${route}: invalid generated route`);
  for (const script of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    JSON.parse(script[1]);
    schemas++;
  }
  assert.ok(html.includes('application/ld+json'), `${route}: missing structured data`);
}
for (const route of ['/', '/cost', '/faq', '/toronto', '/scarborough', '/brampton', '/best-countertop-for-rental-properties']) {
  const html = read(route);
  const body = html.match(/<div id="root">([\s\S]*?)<script type="module"/)?.[1] || html.split('<div id="root">')[1];
  const words = plainText(body).split(' ').length;
  assert.ok(words > 300, `${route}: only ${words} words`);
  console.log(`${route}: ${words} words in initial page content`);
}
assert.ok(read('/faq').includes('FAQPage'));
assert.ok(read('/cost').includes('FAQPage'));
assert.ok(read('/contact').includes('We do not operate our own showroom'));
assert.ok(read('/').includes('36 HomeStars reviews'));
assert.ok(!read('/').includes('aggregateRating'));
const coreSitemap = fs.readFileSync(path.join(dist, 'sitemap-pages.xml'), 'utf8');
const productSitemap = fs.readFileSync(path.join(dist, 'sitemap-products.xml'), 'utf8');
assert.ok(!coreSitemap.includes('/slab/'));
for (const excluded of ['/admin', '/quote/', '/results', '<lastmod>']) {
  assert.ok(!(coreSitemap + productSitemap).includes(excluded), `Sitemap contains ${excluded}`);
}
for (const file of ['llms.txt', 'llms-full.txt', 'robots.txt', '404.html', 'app-shell.html']) assert.ok(fs.existsSync(path.join(dist, file)), file);
assert.ok(!fs.readFileSync(path.join(dist, 'app-shell.html'), 'utf8').includes('HomeStars: 4.8'));
console.log(`PASS: ${routes.length} rendered pages; ${schemas} valid JSON-LD blocks; sitemap and public-reference checks.`);
