const fs = require('fs');

let text = fs.readFileSync('src/pages/CabinetCityPage.tsx', 'utf8');

// Hero section fixes
text = text.replace(/Quartz Cabinet Specialists/g, 'Kitchen Cabinet Specialists');

// Replace Pricing Section (Lines 182-264 approx)
// The easiest way is to use regex to replace the entire Section 2 content with cabinet pricing
const newPricingSection = `
      {/* Section 2: Pricing Guide */}
      <section className="py-24 bg-background/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Kitchen Cabinet Cost in {cityData.name} <br className="hidden md:block" />
              <span className="text-accent">(2026 Pricing Guide)</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Cabinet prices in {cityData.name} typically range from $2,100 for DIY RTA kits to $9,000+ for large, fully installed luxury setups.
            </motion.p>
          </div>

          {/* Pricing Table */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "RTA (Ready To Assemble)",
                price: "$2,100 – $4,500",
                features: ["Flat-packed for easy transport", "Lowest cost option", "Perfect for DIY & contractors"],
                color: "bg-green-50 border-green-100"
              },
              {
                title: "RTI (Ready To Install)",
                popular: true,
                price: "$2,240 – $4,600",
                features: ["Factory assembled cabinets", "Faster installation time", "Best value for most homeowners"],
                color: "bg-accent/5 border-accent/20"
              },
              {
                title: "Fully Installed",
                price: "$3,800 – $6,200",
                features: ["Turnkey professional installation", "Full project management", "Includes delivery & assembly"],
                color: "bg-gray-50 border-gray-100"
              }
            ].map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={\`p-8 border rounded-2xl relative \${tier.color}\`}
              >
                {tier.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-4">{tier.title}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-text-primary">{tier.price}</span>
                  <span className="text-gray-500 text-xs ml-2">/ avg kitchen</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-20">
            <p className="inline-block bg-text-primary text-white px-6 py-2 rounded-full text-sm font-bold">
              Based on a standard 10x10 kitchen layout.
            </p>
          </div>
`;

text = text.replace(/\{\/\* Section 2: Pricing Guide \*\/\}[\s\S]*?<div className="border-t border-gray-200 pt-20">/, newPricingSection + '\n          {/* Factors & Visuals */}\n          <div className="border-t border-gray-200 pt-20">');

// Replace "What Impacts Quartz Cabinet Cost?"
text = text.replace(/What Impacts Quartz Cabinet Cost\?/g, 'What Impacts Kitchen Cabinet Cost?');

// Replace the factors list
text = text.replace(/\{ title: "Cutouts & Sinks", desc: "Number of holes for sinks, faucets, and cooktops.", icon: <Check size=\{20\} \/> \}/g, '{ title: "Cabinet Finishes", desc: "High gloss, matte, shaker, or slim shaker styles.", icon: <Check size={20} /> }');
text = text.replace(/\{ title: "Edge Profiles", desc: "Simple eased edges vs. complex decorative profiles.", icon: <Layers size=\{20\} \/> \}/g, '{ title: "Delivery Method", desc: "RTA, RTI, or Fully Installed turnkey service.", icon: <Layers size={20} /> }');
text = text.replace(/\{ title: "Slab Thickness", desc: "Standard 3cm vs. thinner 2cm options.", icon: <Maximize size=\{20\} \/> \}/g, '{ title: "Custom Modifications", desc: "Pantry pullouts, matching islands, lazy susans.", icon: <Maximize size={20} /> }');

// Replace the visual images
text = text.replace(/\/images\/thickness-options\.jpg/g, '/assets/modern_two_tone.png');
text = text.replace(/Quartz slab thickness and stone detail/g, 'Modern two tone kitchen cabinets');
text = text.replace(/Thickness Options/g, 'Modern Finishes');

// Replace "Quartz fabrication and installation process"
text = text.replace(/Quartz fabrication and installation process/g, 'Cabinet assembly and installation process');

// The Close section
text = text.replace(/Luxury quartz cabinet detail/g, 'Luxury kitchen cabinet detail');
text = text.replace(/Get Your Exact Quartz Cabinet Price in 30 Seconds/g, 'Get Your Exact Kitchen Cabinet Price in 30 Seconds');

// Fix "Quartz Kitchen Transformations"
text = text.replace(/Real Quartz Kitchen Transformations in/g, 'Real Kitchen Cabinet Transformations in');

fs.writeFileSync('src/pages/CabinetCityPage.tsx', text);
console.log('Fixed cabinet content!');
