const fs = require('fs');

let sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');

// The new routes we added for cabinets
const newRoutes = [
  // The 8 Cabinet pSEO pages
  'white-shaker-kitchen-cabinets-toronto',
  'slim-shaker-kitchen-cabinets-toronto',
  'modern-kitchen-cabinets-toronto',
  'plywood-kitchen-cabinets-toronto',
  'rta-kitchen-cabinets-toronto',
  '10x10-kitchen-cabinets-toronto',
  'kitchen-cabinets-and-quartz-countertops-toronto',
  'affordable-kitchen-cabinets-toronto',
  // The 10 Cabinet City pages
  'kitchen-cabinets/toronto',
  'kitchen-cabinets/markham',
  'kitchen-cabinets/mississauga',
  'kitchen-cabinets/vaughan',
  'kitchen-cabinets/etobicoke',
  'kitchen-cabinets/scarborough',
  'kitchen-cabinets/brampton',
  'kitchen-cabinets/richmond-hill',
  'kitchen-cabinets/ajax',
  'kitchen-cabinets/burlington'
];

let newXmlNodes = '';
const today = new Date().toISOString().split('T')[0];

for (const route of newRoutes) {
  newXmlNodes += `  <url>
    <loc>https://quartzinternational.ca/${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
}

sitemap = sitemap.replace('</urlset>', newXmlNodes + '</urlset>');

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('Sitemap updated');
