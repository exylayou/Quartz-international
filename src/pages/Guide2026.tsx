import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { SEO } from '../components/SEO';
import { PRICING_CONSTANTS, QUARTZ_INSTALLED_PRICE_RANGE } from '../constants';

const guidePath = '/quartz-countertop-guide-2026';
const guideUrl = `https://quartzinternational.ca${guidePath}`;
const title = 'Quartz Countertop Guide 2026: Toronto Prices, Colours & Installation';
const description = 'Plan quartz countertops in Toronto & the GTA: installed price tiers, 30–50 sq ft examples, colours, thickness, backsplashes, care and the Quartz International process.';
const money = (amount: number) => `$${amount.toLocaleString('en-CA')}`;
const tiers = [
  { name: 'Group 1 · Standard', look: 'Solid whites, fine-grain greys and simple patterns', ...PRICING_CONSTANTS.LEVELS.standard },
  { name: 'Group 2 · Premium', look: 'Soft veining and concrete-look designs', ...PRICING_CONSTANTS.LEVELS.premium },
  { name: 'Group 3 · Luxury', look: 'Bold Calacatta- and Statuario-style veining', ...PRICING_CONSTANTS.LEVELS.luxury },
];
const questions = [
  {
    q: 'How much does a 50 sq ft quartz kitchen cost in Toronto?',
    a: `At our published standard-tier rate of ${money(PRICING_CONSTANTS.LEVELS.standard.low)}–${money(PRICING_CONSTANTS.LEVELS.standard.high)} per square foot, the area-based planning calculation is ${money(50 * PRICING_CONSTANTS.LEVELS.standard.low)}–${money(50 * PRICING_CONSTANTS.LEVELS.standard.high)}. This assumes 50 sq ft includes the island top. HST, cutouts, removal, plumbing, backsplash and other project-specific extras are excluded from this illustration; your written quote confirms the total and inclusions.`,
  },
  {
    q: 'Does quartz need sealing?',
    a: 'Engineered quartz generally does not require sealing. It still needs routine cleaning and protection from hot cookware, abrasive treatment and unsuitable chemicals. Follow the care instructions for your selected brand and finish.',
  },
  {
    q: 'Can I see full slabs before buying?',
    a: 'Yes. Quartz International arranges slab viewing at supplier or partner showrooms. We do not operate our own showroom. Contact us to confirm the location, appointment arrangements and availability of your preferred model before travelling.',
  },
  {
    q: 'How long does the countertop process take?',
    a: 'Allow approximately 7–10 days from final measurement to installation for a typical project, subject to material availability, cabinet readiness and scheduling. Many straightforward countertop installations take about 2–3 hours on site. Confirm the measurement date and installation window with us for your specific project.',
  },
  {
    q: 'Are sink cutouts, removal and plumbing included?',
    a: 'The written project quote must identify which cutouts and services are included or separately charged. Do not assume an installed per-square-foot rate includes a sink, old-countertop removal, plumbing disconnection/reconnection, waterfall panels or a full-height backsplash.',
  },
  {
    q: 'Can I order kitchen cabinets and quartz countertops together?',
    a: 'Quartz International supplies and installs kitchen cabinets as well as quartz countertops, full-height quartz backsplash and bathroom quartz surfaces. Cabinet positioning and readiness need to be coordinated before final countertop measurement. We do not offer tile installation.',
  },
];

function GuideSection({ id, heading, children }: { id: string; heading: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-28 border-b border-border-custom py-10 sm:py-14 last:border-0">
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6 text-text-primary">{heading}</h2>
    <div className="space-y-5 text-base sm:text-lg text-gray-600 leading-relaxed">{children}</div>
  </section>;
}

export default function Guide2026() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${guideUrl}#article`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': guideUrl },
        headline: title,
        description,
        dateModified: '2026-10-24',
        inLanguage: 'en-CA',
        author: { '@type': 'Organization', '@id': 'https://quartzinternational.ca/#organization', name: 'Quartz International' },
        publisher: { '@id': 'https://quartzinternational.ca/#organization' },
        image: 'https://quartzinternational.ca/images/hero8.jpeg',
      },
      {
        '@type': 'FAQPage',
        '@id': `${guideUrl}#faq`,
        mainEntity: questions.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
    ],
  };

  return <article className="bg-white text-text-primary" data-testid="quartz-buyer-guide">
    <SEO title={`${title} | Quartz International`} description={description} canonical={guidePath} type="article" />
    <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>

    <header className="bg-[#FAF9F6] border-b border-border-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-accent text-xs font-bold uppercase tracking-[0.24em] mb-5">Toronto & GTA buyer’s guide</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] mb-6">Quartz Countertop Guide 2026: Toronto Prices, Colours & Installation</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">Compare installed prices, choose a colour and thickness, and plan the details that affect your kitchen quote. A practical buying guide from Quartz International for Toronto and GTA homeowners, landlords and contractors.</p>
          <p className="text-sm text-gray-500 mb-8">Updated October 24, 2026 · Prices in Canadian dollars</p>
          <Link to="/quartz-countertop-estimator" className="btn-primary inline-flex items-center gap-2">Estimate my countertops <ArrowRight size={18} /></Link>
        </div>
        <img src="/images/hero8.jpeg" alt="Kitchen with light quartz countertops and a quartz backsplash" width="900" height="720" className="w-full aspect-[5/4] object-cover rounded-3xl shadow-lg" />
      </div>
    </header>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <aside className="my-10 p-6 sm:p-8 rounded-2xl border border-accent/30 bg-[#FAF9F6]" aria-label="Quick buying facts">
        <h2 className="text-xl font-bold mb-5">The quick answer</h2>
        <ul className="space-y-4 text-gray-700 leading-relaxed">
          <li><strong>Published price range:</strong> {QUARTZ_INSTALLED_PRICE_RANGE}, with the selected material and project details determining the quote.</li>
          <li><strong>50 sq ft in standard quartz:</strong> {money(50 * PRICING_CONSTANTS.LEVELS.standard.low)}–{money(50 * PRICING_CONSTANTS.LEVELS.standard.high)} as an area-based illustration, before HST and project-specific extras.</li>
          <li><strong>Where to view slabs:</strong> supplier or partner showrooms by arrangement. Quartz International is a service business and does not operate its own showroom.</li>
          <li><strong>What we supply and install:</strong> quartz countertops, full-height quartz backsplash, bathroom quartz surfaces and kitchen cabinets.</li>
        </ul>
      </aside>
      <nav aria-label="On this page" className="text-sm text-gray-600 leading-loose border-b border-border-custom pb-8">
        <p className="font-bold text-text-primary mb-2">On this page</p>
        <div className="flex flex-wrap gap-x-5 gap-y-1">
          {[
            ['pricing', 'Installed prices'], ['examples', 'Kitchen examples'], ['colours', 'Colours & patterns'],
            ['thickness', 'Thickness & edges'], ['quote-details', 'Quote inclusions'], ['rentals', 'Rental properties'],
            ['process', 'Our process'], ['care', 'Care & maintenance'], ['faq', 'FAQs'],
          ].map(([id, label]) => <a key={id} href={`#${id}`} className="underline underline-offset-4 hover:text-accent">{label}</a>)}
        </div>
      </nav>

      <GuideSection id="pricing" heading="2026 price snapshot: installed quartz in Toronto">
        <p>Quartz International’s published installed rates start at {money(PRICING_CONSTANTS.LEVELS.standard.low)} per square foot for standard designs and extend to {money(PRICING_CONSTANTS.LEVELS.luxury.high)} or more for luxury selections. Pattern, brand, thickness, fabrication details and slab usage all affect the final price. Use the tiers below to narrow a budget before requesting a material-specific quote.</p>
        <div className="overflow-x-auto rounded-xl border border-border-custom" tabIndex={0} aria-label="Installed quartz price tiers">
          <table className="w-full text-left text-sm">
            <caption className="text-left p-4 bg-[#FAF9F6] font-semibold text-text-primary">Published installed-quartz price tiers · CAD per sq ft</caption>
            <thead className="bg-gray-50 text-text-primary"><tr><th scope="col" className="p-4">Tier</th><th scope="col" className="hidden sm:table-cell p-4">Typical look</th><th scope="col" className="p-4">Installed rate</th></tr></thead>
            <tbody>{tiers.map((tier, index) => <tr key={tier.name} className="border-t border-border-custom"><th scope="row" className="p-4 font-semibold text-text-primary">{tier.name}</th><td className="hidden sm:table-cell p-4">{tier.look}</td><td className="p-4 whitespace-nowrap">{money(tier.low)}–{money(tier.high)}{index === 2 ? '+' : ''}</td></tr>)}</tbody>
          </table>
        </div>
        <p>A square-foot rate is a useful starting point. Two kitchens with the same surface area can have different totals when one needs more slab waste, extra cutouts, waterfall panels or difficult access. Confirm the selected model, measured layout and service inclusions together. See our <Link to="/cost" className="text-accent underline">Toronto quartz countertop cost guide</Link> for the detailed published pricing breakdown.</p>
      </GuideSection>

      <GuideSection id="examples" heading="Worked examples: 30, 40 and 50 sq ft kitchens">
        <p>These are area-based planning calculations using the standard tier of {money(PRICING_CONSTANTS.LEVELS.standard.low)}–{money(PRICING_CONSTANTS.LEVELS.standard.high)} per square foot. They are illustrative budgets, with HST and project-specific extras excluded. They are not completed-project prices or fixed package offers.</p>
        <div className="overflow-x-auto rounded-xl border border-border-custom" tabIndex={0} aria-label="Standard quartz area-based examples">
          <table className="w-full text-left text-sm">
            <caption className="text-left p-4 bg-[#FAF9F6] font-semibold text-text-primary">Surface area × standard installed rate · before extras and HST</caption>
            <thead className="bg-gray-50 text-text-primary"><tr><th scope="col" className="p-4">Total countertop area</th><th scope="col" className="hidden sm:table-cell p-4">Calculation</th><th scope="col" className="p-4">Planning range</th></tr></thead>
            <tbody>{[30, 40, 50].map(area => <tr key={area} className="border-t border-border-custom"><th scope="row" className="p-4 font-semibold text-text-primary">{area} sq ft</th><td className="hidden sm:table-cell p-4">{area} × {money(PRICING_CONSTANTS.LEVELS.standard.low)}–{money(PRICING_CONSTANTS.LEVELS.standard.high)}</td><td className="p-4 whitespace-nowrap">{money(area * PRICING_CONSTANTS.LEVELS.standard.low)}–{money(area * PRICING_CONSTANTS.LEVELS.standard.high)}</td></tr>)}</tbody>
          </table>
        </div>
        <p>For the 50 sq ft example, a 35 sq ft perimeter plus a 15 sq ft island gives 50 sq ft in total. Include the island top once in the measured area. Waterfall legs and backsplash are separate surfaces. A written quote needs to account for slab layout, edge treatment and any island-specific fabrication or handling.</p>
        <p>Ask whether sink cutouts, faucet holes, removal and plumbing are already included before adding allowances. The same item should appear only once in an itemised quote. Our <Link to="/quartz-countertop-estimator" className="text-accent underline">online estimator</Link> can help you explore a layout; final measurements and your selected slab determine the confirmed quotation.</p>
      </GuideSection>

      <GuideSection id="colours" heading="Colours and patterns to consider in 2026">
        <p>Start with the cabinet colour, floor, lighting and how much pattern you want to see across the entire kitchen. Compare a quiet solid white or fine-grain grey with a softly veined design before moving to a bold Calacatta-style pattern. Warm whites and beige-toned designs can soften a room with wood cabinets, while cooler whites and greys can suit a more restrained palette.</p>
        <p>For a rental or a busy family kitchen, consider whether a subtle fleck or gentle movement will be easier to live with between cleans. For a large island or full-height backsplash, view the larger pattern repeat: a small sample cannot show every vein, the whole slab layout or how a seam will meet.</p>
        <p>Engineered surfaces offer repeatable design families, but colour tone and pattern can still vary. View the actual slab where possible, especially for pronounced veining, and agree the proposed seam and vein direction before fabrication. Compare finishes in your lighting and check the selected manufacturer’s care instructions for polished, honed or textured surfaces.</p>
        <p>Our online collections include <Link to="/kasa-quartz" className="text-accent underline">Kasa</Link>, <Link to="/caesarstone" className="text-accent underline">Caesarstone</Link>, <Link to="/silestone" className="text-accent underline">Silestone</Link>, <Link to="/lucent-quartz" className="text-accent underline">Lucent</Link>, <Link to="/tce-stone" className="text-accent underline">TCE Stone</Link> and <Link to="/kstone" className="text-accent underline">KStone</Link>. Confirm the exact model, thickness, finish, current stock and applicable warranty with us. Catalogue appearance alone does not confirm availability.</p>
      </GuideSection>

      <GuideSection id="thickness" heading="Thickness, edges and cutouts: what to decide">
        <p>Common quartz options include 2 cm (20 mm) and 3 cm (30 mm) slabs. Choose the thickness together with the edge profile, cabinet construction, sink, overhang and backsplash plan. A built-up or mitred edge can create a thicker visual profile; ask the fabricator how that edge will be constructed and where any joints will be visible.</p>
        <p>Support requirements are specific to the selected manufacturer and installation. A 3 cm slab can still need support at an overhang or opening. A 2 cm installation may require a sub-top or additional support. Have the support design confirmed before cabinets and appliances are finalised rather than relying on thickness alone.</p>
        <p>Supply the exact sink and cooktop specifications early. An undermount opening, polished inner edge, drainboard detail and faucet hole each affect fabrication differently. Confirm the edge included in the price and request separate pricing for upgraded edges or waterfall panels, with the units clearly identified as per piece, linear foot or square foot.</p>
      </GuideSection>

      <GuideSection id="quote-details" heading="What the written quote should include">
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Material and measurement:</strong> brand, model, finish, thickness, measured countertop area and the final layout.</li>
          <li><strong>Fabrication:</strong> edge profile, seam locations, sink and appliance cutouts, faucet holes and any vein-matching work.</li>
          <li><strong>Installation:</strong> delivery, access arrangements, required support and the scope of fitting and finishing.</li>
          <li><strong>Separate services:</strong> old-countertop removal and disposal, sink supply, plumbing disconnection/reconnection and any other trades required.</li>
          <li><strong>Additional surfaces:</strong> full-height quartz backsplash, short upstands and waterfall legs, measured and priced separately where applicable.</li>
          <li><strong>Commercial details:</strong> HST, deposit, payment schedule, installation window and the warranty for your selected material and work.</li>
        </ul>
        <p>For a condo, check the building’s elevator booking and access arrangements before agreeing an installation date. For an older kitchen, discuss the condition and level of the existing cabinets and whether anything needs to be corrected before measurement. Quartz International installs quartz backsplash; tile installation is outside our service scope.</p>
      </GuideSection>

      <GuideSection id="rentals" heading="Quartz for rental properties and landlords">
        <p>Quartz is worth considering for rentals because it generally needs no sealing and can be cleaned with a simple routine. Standard designs can keep the material budget contained while providing a durable kitchen surface. Tenants still need clear care instructions: use trivets and cutting boards, clean spills promptly and avoid unsuitable cleaners.</p>
        <p>For a turnover project, prioritise a readily available model, a confirmed schedule and a quote that separates removal, countertop installation and plumbing. For several units, send the layouts and quantities together so we can assess the scope and provide a project-specific quote. See our <Link to="/best-countertop-for-rental-properties" className="text-accent underline">rental-property countertop guide</Link> for more planning considerations.</p>
      </GuideSection>

      <GuideSection id="process" heading="The Quartz International process">
        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>Send the project details.</strong> Share your city, rough measurements, kitchen photos, preferred slab colour or model number, and whether you need backsplash or cabinets.</li>
          <li><strong>Arrange material viewing.</strong> We do not operate our own showroom. Full-slab viewing is arranged at supplier or partner showrooms; confirm the appointment and model availability before visiting.</li>
          <li><strong>Review the quote and measurement plan.</strong> Agree the scope, inclusions and payment terms. Final countertop measurements depend on the cabinets being ready and the sink and appliance details being available.</li>
          <li><strong>Confirm fabrication and installation.</strong> Allow approximately 7–10 days from final measurement to installation for a typical project, subject to material availability, cabinet readiness and scheduling. Many straightforward installations take about 2–3 hours on site; larger or more complex work can take longer.</li>
          <li><strong>Check completion and care.</strong> Review the finished surfaces and the agreed remaining work, including any plumbing arrangements, and retain the care and warranty information.</li>
        </ol>
        <p>We supply and install kitchen cabinets as well as quartz countertops, full-height quartz backsplash and bathroom quartz surfaces across Toronto and the GTA. If you are replacing cabinets, coordinate that work with the countertop measurement date. Explore our <Link to="/cabinets" className="text-accent underline">cabinet options</Link> or <Link to="/areas-we-serve" className="text-accent underline">service areas</Link> before requesting a combined quote.</p>
      </GuideSection>

      <GuideSection id="care" heading="Care and maintenance after installation">
        <p>Engineered quartz generally needs no sealing, but routine care still matters. Clean with a soft cloth and a mild cleaner approved for your product, and deal with spills promptly. Use cutting boards and trivets. Stain and scratch resistance do not mean every spill, chemical, impact or heat exposure is harmless.</p>
        <p>Follow the exact instructions for your slab brand and finish before trying a stain treatment. Manufacturer guidance explains suitable cleaning products and protection from heat. Useful references are <a href="https://www.caesarstone.ca/care-and-maintenace/quartz-surfaces/" className="text-accent underline" target="_blank" rel="noopener noreferrer">Caesarstone’s surface care guidance</a>, <a href="https://www.cosentino.com/en-ca/silestone/maintenance/" className="text-accent underline" target="_blank" rel="noopener noreferrer">Silestone maintenance instructions</a> and <a href="https://www.caesarstone.ca/design-and-specification/" className="text-accent underline" target="_blank" rel="noopener noreferrer">Caesarstone’s design and specification information</a>.</p>
      </GuideSection>

      <GuideSection id="faq" heading="Frequently asked questions">
        <div className="space-y-3">{questions.map(({ q, a }) => <details key={q} className="group border border-border-custom rounded-xl bg-white">
          <summary className="cursor-pointer p-5 font-bold text-base text-text-primary leading-relaxed">{q}</summary>
          <p className="px-5 pb-5 text-base leading-relaxed">{a}</p>
        </details>)}</div>
      </GuideSection>

      <section className="rounded-2xl bg-[#1A1A1A] text-white p-7 sm:p-10 mt-10" aria-labelledby="guide-contact">
        <CheckCircle2 className="text-accent mb-4" size={28} />
        <h2 id="guide-contact" className="text-2xl sm:text-3xl font-bold mb-4">Plan your countertop project with us</h2>
        <p className="text-gray-300 leading-relaxed mb-6">Send your rough dimensions, preferred material and project location to Quartz International. We’ll help you clarify the options and scope for a written quote.</p>
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">Request a quote <ArrowRight size={18} /></Link>
          <a href="tel:16473706938" className="inline-flex items-center gap-2 font-semibold"><Phone size={18} />647-370-6938</a>
        </div>
        <a href="mailto:info@quartzinternational.ca" className="inline-block mt-5 text-sm text-gray-300 underline break-all">info@quartzinternational.ca</a>
      </section>
    </div>
  </article>;
}
