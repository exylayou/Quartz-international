const fs = require('fs');

let text = fs.readFileSync('src/pages/CabinetCityPage.tsx', 'utf8');

// Imports
text = text.replace(/import \{ cities \} from '\.\.\/data\/cities';/g, "import { cabinetCities as cities } from '../data/cabinetCities';");
text = text.replace(/CityServicePage/g, 'CabinetCityPage');
text = text.replace(/quartz-countertops-/g, 'kitchen-cabinets-');

// FAQs
text = text.replace(/How much do quartz countertops cost in/g, 'How much do kitchen cabinets cost in');
text = text.replace(/Quartz countertops in/g, 'Kitchen cabinets in');
text = text.replace(/typically range from \$48 to \$170 per square foot installed, with most kitchens falling between \$3,000 and \$6,000 depending on size and design/g, 'typically range from $2,100 for RTA options up to $9,000+ for large fully installed custom setups');
text = text.replace(/Most quartz countertop projects are completed within 5-7 days, including templating, fabrication, and installation/g, 'RTA and RTI cabinets are available quickly. Full installations are typically completed within 1-2 weeks depending on the kitchen size');
text = text.replace(/What affects the cost of quartz countertops/g, 'What affects the cost of kitchen cabinets');
text = text.replace(/Pricing depends on: Kitchen size and layout, number of cutouts \(sink, cooktop\), edge profile, thickness \(2cm vs 3cm\), and material selection/g, 'Pricing depends on: Kitchen size, layout (number of cabinets), finish style (matte, gloss, wood), and delivery method (RTA, RTI, or Installed)');
text = text.replace(/Are quartz countertops durable/g, 'Are the cabinets durable');
text = text.replace(/Yes\. Quartz is non-porous, scratch-resistant, and low maintenance, making it one of the most durable countertop materials available/g, 'Yes. Our European-style cabinets use premium materials, soft-close hardware, and durable finishes designed to last a lifetime');
text = text.replace(/Do quartz countertops require sealing/g, 'Do I have to assemble the cabinets myself');
text = text.replace(/No\. Unlike natural stone, quartz does not require sealing, making it easy to maintain/g, 'Not at all! We offer Ready-To-Assemble (RTA) for DIYers, but we also offer Ready-To-Install (RTI) factory-built cabinets, and Full Professional Installation');

// SEO tags
text = text.replace(/Quartz Countertops/g, 'Kitchen Cabinets');
text = text.replace(/quartz countertops/g, 'kitchen cabinets');
text = text.replace(/Quartz countertops/g, 'Kitchen cabinets');
text = text.replace(/Countertop/g, 'Cabinet');
text = text.replace(/countertop/g, 'cabinet');

// Links
text = text.replace(/\/quartz-countertop-estimator/g, '/kitchen-cabinet-estimator');
text = text.replace(/Get My Quartz Price/g, 'Get My Cabinets Price');
text = text.replace(/Get My Quote/g, 'Get Cabinet Estimate');

// Delete the specific sections that don't make sense for cabinets like "edge profiles", "thickness"
// It's probably easier to just replace the "Popular Materials" list with cabinet collections
text = text.replace(/Calacatta Gold/g, 'Premium High Gloss');
text = text.replace(/Pure White/g, 'Modern Matte');
text = text.replace(/Statuario/g, 'Slim Shaker');
text = text.replace(/Nero Marquina/g, 'Natural Wood Slab');
text = text.replace(/White Carrara/g, 'Classic White Shaker');
text = text.replace(/Grey Sparkle/g, 'Smoked Oak Slab');

text = text.replace(/Premium Quartz Collections/g, 'Premium Cabinet Collections');
text = text.replace(/Choose from over 200\+ slabs/g, 'Choose from our Essential, Premium, and Elite collections');

// Hero text
text = text.replace(/Your trusted local fabricator/g, 'Your trusted local cabinet supplier & installer');
text = text.replace(/Premium custom quartz installations/g, 'Premium modern kitchen cabinetry');
text = text.replace(/Browse 200\+ Quartz Colors/g, 'Browse Cabinet Finishes');
text = text.replace(/\/quartz-kitchen-countertops/g, '/cabinet-finishes');

fs.writeFileSync('src/pages/CabinetCityPage.tsx', text);
console.log('CabinetCityPage.tsx created and customized');
