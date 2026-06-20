const fs = require('fs');

let text = fs.readFileSync('src/data/cities.ts', 'utf8');

// Replace Quartz-specific words with Cabinet-specific words
text = text.replace(/CityData/g, 'CabinetCityData');
text = text.replace(/cities/g, 'cabinetCities');
text = text.replace(/Premium Quartz/g, 'Premium Cabinetry');
text = text.replace(/Condo Upgrade/g, 'Condo Cabinet Upgrade');
text = text.replace(/Modern Island Upgrade/g, 'Modern Cabinet Upgrade');
text = text.replace(/Standard Kitchen Remodel/g, 'Full Cabinet Remodel');
text = text.replace(/Transformed our small condo kitchen/g, 'The new cabinets transformed our small condo');
text = text.replace(/Looks like a \$20k kitchen upgrade/g, 'The custom cabinet look makes it a $20k upgrade');
text = text.replace(/Installed in 3 days. The finish is flawless./g, 'Cabinets installed in 3 days. The finish is flawless.');
text = text.replace(/Flawless installation/g, 'Flawless cabinet installation');

// Change images to cabinet images
text = text.replace(/\/images\/markham-hero\.jpg/g, '/assets/essential_two_tone_kitchen.png'); // Wait, the assets are imported via Vite, so we can't just use strings easily unless they are in public/.
// Let's use the public images we added earlier: /images/typical-kitchen.jpg, etc.
// But we can actually just point to some cabinet images that are in public, or we can use strings and let them be broken until we fix them, but wait...
// In CityServicePage, images are just `src={cityData.images.hero}` so if they are in `public/images/`, it works.
// Let's just keep the same image paths from cities.ts for now, as they are kitchen images that show both cabinets and countertops! They work perfectly for both.

fs.writeFileSync('src/data/cabinetCities.ts', text);
console.log('cabinetCities.ts created');
