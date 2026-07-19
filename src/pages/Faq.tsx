import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

/* ──────────────────────────── FAQ data ──────────────────────────── */

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  id: string;
  label: string;
  icon: string;
  faqs: FaqItem[];
}

const categories: FaqCategory[] = [
  {
    id: 'countertops',
    label: 'Quartz Countertops',
    icon: '◆',
    faqs: [
      {
        q: 'How much do quartz countertops cost in Toronto & GTA?',
        a: 'Quartz countertops typically cost $48 to $170 per square foot installed in the Toronto & GTA area, with most full kitchen projects ranging from $2,000 to $8,500 depending on size and quartz tier.',
      },
      {
        q: 'Is quartz worth it for kitchen countertops?',
        a: 'Quartz is widely considered a strong long-term value because it is non-porous, does not require sealing, and resists staining and scratching better than natural stone alternatives like granite or marble, while offering a comparable range of colors and patterns.',
      },
      {
        q: 'Do quartz countertops require sealing?',
        a: 'No. Unlike natural stone, quartz does not require sealing. It is engineered with polymer resins that make the surface completely non-porous, which means it is stain-resistant and easy to maintain with just soap and water.',
      },
      {
        q: 'Does quartz stain or scratch?',
        a: 'Quartz is highly resistant to both stains and scratches. However, we always recommend using cutting boards and trivets to maintain the surface for decades.',
      },
      {
        q: 'Is quartz better than granite?',
        a: 'Quartz is non-porous and never requires sealing, unlike granite. It is more stain-resistant and offers more consistent patterns, making it the preferred choice for modern Toronto kitchens. Granite offers more natural variation but requires periodic maintenance.',
      },
      {
        q: 'Which countertop is better for resale value?',
        a: 'Both quartz and quartzite offer a fantastic return on investment and are highly sought after by home buyers. Quartz is extremely popular for its low-maintenance appeal, while quartzite attracts buyers looking for high-end, one-of-a-kind luxury features.',
      },
    ],
  },
  {
    id: 'quartz-vs-quartzite',
    label: 'Quartz vs Quartzite',
    icon: '⚖',
    faqs: [
      {
        q: 'Which is more durable, quartz or quartzite?',
        a: 'Both are exceptionally durable. Quartzite is technically harder on the Mohs scale (7–8 vs. 7 for quartz), making it slightly more scratch-resistant. However, quartz is more flexible due to the polymer resins, which makes it less brittle and less prone to edge chipping. Additionally, quartz is completely stain-resistant without any maintenance, whereas quartzite can stain if not regularly sealed.',
      },
      {
        q: 'Does quartzite need to be sealed?',
        a: 'Yes. Quartzite is a natural, porous stone. It must be sealed upon installation and resealed annually (or every 6 months for heavy-use kitchens) to prevent oil, wine, and acidic liquids from penetrating the stone and causing permanent stains.',
      },
      {
        q: 'Can I place hot pans directly on quartz and quartzite?',
        a: 'You can place hot pans on quartzite because it is a natural stone formed under intense volcanic heat. Quartz, however, will be damaged by direct contact with hot pans (above 300°F) because the resins holding the quartz crystals together will scorch, melt, or discolor. Always use trivets or hot pads on quartz.',
      },
      {
        q: 'Why is quartzite more expensive than quartz?',
        a: 'Quartzite is a natural stone that must be quarried in blocks, sliced into slabs, and transported. Because it is extremely hard, it is difficult to cut and fabricate, requiring diamond-blade saws, advanced CNC machinery, and high labor hours, which drives up the cost. Quartz is manufactured under controlled conditions, making fabrication more predictable and less labor-intensive.',
      },
    ],
  },
  {
    id: 'cabinets',
    label: 'Kitchen Cabinets',
    icon: '▣',
    faqs: [
      {
        q: 'How much do kitchen cabinets cost in Toronto?',
        a: 'Kitchen cabinets in Toronto typically range from $2,100 for RTA (Ready-To-Assemble) options up to $9,000+ for large fully installed custom setups. Pricing depends on kitchen size, layout, finish style (matte, gloss, wood), and delivery method.',
      },
      {
        q: 'Are the cabinets durable?',
        a: 'Yes. Our European-style cabinets use premium materials, soft-close hardware, and durable finishes designed to last a lifetime.',
      },
      {
        q: 'Do I have to assemble the cabinets myself?',
        a: 'Not at all! We offer Ready-To-Assemble (RTA) for DIYers, Ready-To-Install (RTI) factory-built cabinets, and Full Professional Installation — so you can choose the level of involvement that suits you best.',
      },
      {
        q: 'What is the difference between a slim shaker and a regular shaker?',
        a: 'A standard shaker door typically has a 2.5-inch to 3-inch outer frame. A slim shaker has a much narrower frame, usually between 0.5 to 1 inch wide, creating a more modern, minimalist look that is extremely popular in contemporary Toronto kitchens.',
      },
      {
        q: 'Plywood vs MDF vs Particle Board — which is best?',
        a: 'Plywood is made of layers of wood veneer glued together, offering the highest strength and moisture resistance. MDF is dense and smooth, making it perfect for painted doors. Particle board is cost-effective but has lower moisture resistance. The best choice depends on your budget and kitchen environment.',
      },
      {
        q: 'Does "affordable" mean cheap quality?',
        a: 'Not at all. Our affordable lines still feature solid construction and durable hinges. The savings come from mass-produced standard sizing and simpler door profiles, not from cutting corners on structural quality.',
      },
    ],
  },
  {
    id: 'installation',
    label: 'Installation & Process',
    icon: '⚙',
    faqs: [
      {
        q: 'How long does quartz countertop installation take?',
        a: 'Most quartz countertop installations are completed in 1 to 2 days once templating is done, though the full process — including measuring, fabrication, and scheduling — typically takes 1 to 3 weeks from initial consultation to final install.',
      },
      {
        q: 'How long does cabinet installation take?',
        a: 'RTA and RTI cabinets are available quickly. Full installations are typically completed within 1–2 weeks depending on the kitchen size and complexity.',
      },
      {
        q: 'Can I bundle my countertops with new kitchen cabinets?',
        a: 'Yes! We offer cabinet and quartz bundle packages, which simplifies scheduling and ensures your countertops are measured the exact day your cabinets are installed. Bundling often results in better overall pricing and reduces coordination fees.',
      },
      {
        q: 'How long does the whole bundled process take?',
        a: 'Once cabinets are installed, we template the quartz. Fabrication takes about 5–7 days, meaning your fully functional kitchen is ready much faster than coordinating with multiple vendors.',
      },
      {
        q: 'Can I get an exact quote online?',
        a: 'Yes. Use our instant pricing tool to get a real, accurate estimate in under 30 seconds based on your kitchen layout. No guesswork, no waiting for callbacks.',
      },
      {
        q: 'Do you handle condo elevator bookings for Toronto installs?',
        a: 'Yes. Let us know your condo management rules and elevator booking windows, and we will schedule our installation team accordingly. We are experienced with GTA condo installations.',
      },
    ],
  },
  {
    id: 'brands',
    label: 'Brands & Materials',
    icon: '★',
    faqs: [
      {
        q: 'Is Caesarstone expensive?',
        a: 'Caesarstone is considered a premium quartz brand. While more expensive than entry-level stones, it offers superior durability and a world-class design palette that maintains high resale value.',
      },
      {
        q: 'What is usually included in a 10x10 kitchen cabinet price?',
        a: 'Typically, it includes basic base cabinets, wall cabinets, a sink base, and basic toe kicks. It assumes a simple L-shape without an island. It rarely includes installation, appliances, sinks, hardware, crown moulding, light valances, finished end panels, or countertops unless explicitly stated.',
      },
      {
        q: 'Are high-gloss cabinets hard to keep clean?',
        a: 'High-gloss cabinets are actually very easy to wipe down because they have no grooves or ridges. Fingerprints may show more on dark gloss finishes, but a quick wipe with a microfiber cloth keeps them looking pristine.',
      },
      {
        q: 'Can I do a two-tone modern kitchen?',
        a: 'Absolutely. A very popular modern look in Toronto is pairing textured wood-grain base cabinets with solid white or matte black upper cabinets. It creates a striking contrast that feels designer-curated.',
      },
      {
        q: 'Are RTA cabinets good quality?',
        a: 'Yes. Quality depends on the manufacturer, but premium RTA cabinets feature plywood boxes, solid wood doors, dovetail drawers, and soft-close hardware — comparable to much more expensive custom options.',
      },
    ],
  },
];

/* Flatten all FAQs for the JSON-LD schema */
const allFaqs = categories.flatMap((cat) => cat.faqs);

/* ──────────────────────────── Component ──────────────────────────── */

export default function Faq() {
  const [openFaq, setOpenFaq] = React.useState<string | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<string>(categories[0].id);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const el = document.getElementById(`faq-${id}`);
    if (el) {
      const yOffset = -100; // offset for sticky header
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  /* Track which section is in view */
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace('faq-', '');
            setActiveCategory(id);
          }
        }
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: 0 }
    );

    categories.forEach((cat) => {
      const el = document.getElementById(`faq-${cat.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.quartzinternational.ca/#organization',
        name: 'Quartz International',
        url: 'https://www.quartzinternational.ca/',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.quartzinternational.ca/faq#webpage',
        url: 'https://www.quartzinternational.ca/faq',
        name: 'Frequently Asked Questions — Quartz International',
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.quartzinternational.ca/faq#faq',
        mainEntity: allFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <article className="bg-white min-h-screen font-sans">
      <SEO
        title="Frequently Asked Questions — Quartz Countertops & Kitchen Cabinets | Quartz International"
        description="Get answers to the most common questions about quartz countertops, kitchen cabinets, pricing, installation timelines, and materials in Toronto & GTA."
        canonical="/faq"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* ─── Hero ─── */}
      <header className="relative pt-12 md:pt-20 pb-16 overflow-hidden" aria-labelledby="page-title">
        {/* Subtle background accent */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>

        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 relative">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.4em]">
            <Link to="/" className="hover:text-accent-hover transition-colors">Home</Link> › <span>FAQ</span>
          </p>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <HelpCircle size={14} />
              <span>Help Center</span>
            </div>
            <h1 id="page-title" className="text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1] text-text-primary">
              Frequently Asked{' '}
              <span className="text-accent">Questions</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Everything you need to know about quartz countertops, kitchen cabinets, pricing, installation, and our process — answered by our team of experts.
            </p>
          </motion.div>
        </div>
      </header>

      {/* ─── Category Navigation ─── */}
      <div className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-border-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 shrink-0 cursor-pointer',
                  activeCategory === cat.id
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-text-primary'
                )}
              >
                <span className="text-xs">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FAQ Sections ─── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {categories.map((cat, catIdx) => (
          <motion.section
            key={cat.id}
            id={`faq-${cat.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn('scroll-mt-36', catIdx > 0 && 'mt-20')}
            aria-labelledby={`heading-${cat.id}`}
          >
            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-lg">
                {cat.icon}
              </div>
              <div>
                <h2 id={`heading-${cat.id}`} className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
                  {cat.label}
                </h2>
                <p className="text-sm text-gray-400 font-medium mt-0.5">{cat.faqs.length} questions</p>
              </div>
            </div>

            {/* FAQ accordion items */}
            <div className="space-y-4">
              {cat.faqs.map((faq, faqIdx) => {
                const faqKey = `${cat.id}-${faqIdx}`;
                const isOpen = openFaq === faqKey;

                return (
                  <div
                    key={faqKey}
                    className={cn(
                      'border rounded-2xl bg-white overflow-hidden transition-all duration-300',
                      isOpen
                        ? 'border-accent/30 shadow-lg shadow-accent/5'
                        : 'border-border-custom hover:border-accent/20'
                    )}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faqKey)}
                      className="w-full p-6 text-left flex justify-between items-start gap-4 group transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-bold text-lg text-text-primary leading-snug pr-4">{faq.q}</h3>
                      <div
                        className={cn(
                          'transition-transform duration-300 shrink-0 mt-1',
                          isOpen ? 'rotate-180' : ''
                        )}
                      >
                        <ChevronDown size={20} className="text-accent" />
                      </div>
                    </button>
                    <div
                      className={cn(
                        'grid transition-all duration-300 ease-in-out',
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>
        ))}
      </div>

      {/* ─── Still Have Questions + CTA ─── */}
      <section className="py-32 bg-accent relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-10 w-64 h-64 border border-white/10 rounded-full" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-white/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
              Still Have Questions?
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
              Get a personalized answer from our team, or use our instant estimator to see real pricing for your kitchen project in under 30 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quartz-countertop-estimator"
                className="bg-white text-accent px-12 py-5 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-3"
              >
                Get Instant Estimate
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </article>
  );
}
