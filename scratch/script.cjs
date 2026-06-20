const fs = require('fs');
let text = fs.readFileSync('src/data/cities.ts', 'utf8');

const imagesBlock = `\n    },\n    images: {\n      hero: "/images/markham-hero.jpg",\n      testimonial1: "/images/typical-kitchen.jpg",\n      testimonial2: "/images/modern-island-dark.jpg"\n    }`;

// Remove existing images blocks
text = text.replace(/,\s*images:\s*\{[\s\S]*?\n\s*\}/g, '');

// Append imagesBlock to the end of each city
// We match `testimonial3: { ... }` up to the closing brace.
text = text.replace(/(testimonial3:\s*\{[\s\S]*?\n\s*\})/g, '$1' + imagesBlock);

fs.writeFileSync('src/data/cities.ts', text);
console.log('Done!');
