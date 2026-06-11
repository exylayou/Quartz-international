import React from 'react';
import { motion } from 'motion/react';
import { Newspaper, ArrowRight, ArrowLeft, Calendar, User, Clock, Check, Star, X, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

import blogHero from '../assets/images/blog_hero.png';
import blogWarmWhite from '../assets/images/blog_warm_white.png';
import blogBeigeGreige from '../assets/images/blog_beige_greige.png';
import blogTajMahal from '../assets/images/blog_taj_mahal.png';
import blogDramatic from '../assets/images/blog_dramatic.png';
import blogQuartzCare from '../assets/images/blog_quartz_care.png';
import blogQuartzGranite from '../assets/images/blog_quartz_granite.png';

const POSTS = [
  { 
    id: 1, 
    title: 'Top Quartz Trends for 2026: Colours, Finishes, and Design Ideas Homeowners Are Choosing', 
    excerpt: 'Discover the latest color palettes and finishes dominating the market this year, including the move toward warm whites, beiges, and Taj Mahal tones.', 
    date: 'May 12, 2026' 
  },
  { 
    id: 2, 
    title: 'How to Care for Your Quartz Surfaces', 
    excerpt: 'Keep your countertops looking brand new with these simple daily tips, heat protection guides, and recommended cleaning products.', 
    date: 'April 28, 2026' 
  },
  { 
    id: 3, 
    title: 'Quartz vs. Granite: The Final Verdict', 
    excerpt: 'A deep dive into why more homeowners are choosing engineered stone over natural slabs for durability and ease of maintenance.', 
    date: 'April 15, 2026' 
  },
];

export default function Blog() {
  const [activePostId, setActivePostId] = React.useState<number | null>(null);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePostId]);

  if (activePostId === 1) {
    return (
      <div className="bg-background pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setActivePostId(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest hover:text-text-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to insights
          </button>

          <article className="prose prose-lg max-w-none">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]">
                Top Quartz Trends for 2026: Colours, Finishes, and Design Ideas Homeowners Are Choosing
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-xs text-text-muted border-y border-border-custom py-4">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-accent" /> Updated for 2026
                </span>
                <span className="flex items-center gap-2">
                  <User size={14} className="text-accent" /> Quartz International
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-accent" /> 8 min read
                </span>
              </div>
            </header>

            <div className="mb-12 group">
              <div className="overflow-hidden rounded-3xl border border-border-custom shadow-md bg-white/50">
                <img 
                  src={blogHero} 
                  alt="Warm white quartz countertop with soft beige veining in a modern Toronto kitchen" 
                  className="w-full aspect-[16/9] object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
              <p className="mt-3 text-center text-xs text-text-muted italic">
                Warm white quartz countertop with soft beige veining in a modern Toronto kitchen.
              </p>
            </div>

            <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-base">
              <p>
                Quartz countertops are still one of the most popular choices for kitchen renovations because they offer the look of natural stone with easier maintenance, strong durability, and a wide range of colours. But the quartz styles homeowners want in 2026 are changing.
              </p>

              <p className="border-l-4 border-accent pl-6 py-2 my-8 italic text-base font-medium text-text-primary bg-accent/5 rounded-r-xl">
                The biggest shift is clear: <strong className="text-text-primary">cool grey and stark white quartz are being replaced by warmer, softer, more natural-looking surfaces</strong>. Designers and manufacturers are seeing more demand for creamy whites, beige undertones, soft gold veining, taupe movement, dramatic stone-look patterns, and matte or satin finishes. Houzz’s 2026 surface trend report also highlights warm neutrals, including creamy off-whites, taupe, beige, sand, chocolate, brown, and soft gold veining as leading countertop directions for the year. (<a href="https://www.houzz.com/magazine/5-trends-in-countertops-and-other-surfaces-shaping-2026-stsetivw-vs~184687407?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Houzz</a>)
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Quick Answer: What Are the Top Quartz Trends for 2026?
              </h2>
              
              <p>The top quartz countertop trends for 2026 are:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2 text-sm font-semibold text-text-primary">
                <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 1. Warm white quartz instead of cold white</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 2. Soft beige, cream, greige, and taupe</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 3. Natural stone-inspired veining</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 4. Taj Mahal quartzite-inspired looks</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 5. Dramatic veining statement islands</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 6. Matte and satin finishes</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 7. Full-height matching backsplashes</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 8. Waterfall and half-waterfall islands</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 9. Dark quartz with soft contrast</li>
                <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> 10. Low-maintenance luxury surfaces</li>
              </ul>

              <p>
                For Toronto and GTA homeowners, the most practical 2026 trend is <strong className="text-text-primary">warm, natural-looking quartz that feels timeless instead of trendy</strong>.
              </p>

              {/* Section 1 */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                1. Warm White Quartz Is Replacing Stark White
              </h2>
              <p>
                For years, bright white quartz with sharp grey veining dominated modern kitchens. In 2026, homeowners still love white kitchens, but the look is becoming softer and warmer.
              </p>
              <p>Instead of icy white, the new quartz whites have:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Creamy undertones</li>
                <li>Soft beige veining</li>
                <li>Warm grey movement</li>
                <li>Subtle gold or taupe accents</li>
                <li>A more natural stone appearance</li>
              </ul>
              <p>
                This shift matches the broader kitchen trend away from sterile white spaces toward warmer, more layered kitchens. House Beautiful recently noted that white kitchens are evolving in 2026 with creamier hues, natural textures, warm woods, and softer stone choices replacing the colder all-white kitchens of the early 2010s. (<a href="https://www.housebeautiful.com/room-decorating/kitchens/a71336579/modern-white-kitchen-style/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">House Beautiful</a>)
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl space-y-3">
                <p><strong className="text-text-primary text-[10px] font-bold uppercase tracking-wider block mb-1">Best for:</strong> Homeowners who want a bright kitchen that still feels warm, inviting, and expensive.</p>
                <p><strong className="text-text-primary text-[10px] font-bold uppercase tracking-wider block mb-1">Pairs well with:</strong> White oak cabinets, warm white cabinets, champagne bronze hardware, brushed nickel, beige tile, and light hardwood floors.</p>
              </div>

              <div className="my-8 group">
                <div className="overflow-hidden rounded-3xl border border-border-custom shadow-sm bg-white/50">
                  <img 
                    src={blogWarmWhite} 
                    alt="Warm white quartz countertop trend for 2026 with subtle natural veining" 
                    className="w-full aspect-[16/10] object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                  />
                </div>
                <p className="mt-3 text-center text-xs text-text-muted italic">
                  Warm white quartz countertop trend for 2026 with subtle natural veining.
                </p>
              </div>

              {/* Section 2 */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                2. Cream, Beige, Greige, and Taupe Quartz Are Leading the Market
              </h2>
              <p>
                The strongest colour trend for 2026 is the move toward <strong className="text-text-primary">warm neutrals</strong>. These include cream, beige, mushroom, sand, taupe, soft brown, and greige quartz.
              </p>
              <p>
                MSI’s 2026 quartz colour forecast points to inviting hues and organic movement, with quartz surfaces that feel updated while remaining timeless. (<a href="https://www.msisurfaces.com/blogs/post/2025/12/24/top-quartz-countertops-color-forecast.aspx?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">msisurfaces.com</a>) Another 2026 colour trend report describes the shift as a “warm-up,” with creamy ivories, soft mushroom beiges, and sandy taupes replacing the cooler grey tones that dominated previous years. (<a href="https://glstoneexpo.com/quartz-kitchen-countertops-2026-color-trends-you-need-to-know/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">GLStoneExpo</a>)
              </p>
              <p>
                This is especially important in Toronto kitchens, where many homes have limited natural light. Warm quartz can make a kitchen feel brighter without looking cold.
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Trending quartz colour families for 2026</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-text-primary">
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Creamy white quartz</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Soft beige quartz</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Warm grey quartz</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Greige quartz</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Taupe quartz</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Light brown quartz</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Sand-coloured quartz</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Off-white quartz with gold veining</li>
                </ul>
              </div>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <p><strong className="text-text-primary text-[10px] font-bold uppercase tracking-wider block mb-1">Best for:</strong> Transitional kitchens, modern organic kitchens, condos, family homes, and resale-friendly renovations.</p>
              </div>

              <div className="my-8 group">
                <div className="overflow-hidden rounded-3xl border border-border-custom shadow-sm bg-white/50">
                  <img 
                    src={blogBeigeGreige} 
                    alt="Beige and greige quartz countertop colours trending for 2026 kitchens" 
                    className="w-full aspect-[16/10] object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                  />
                </div>
                <p className="mt-3 text-center text-xs text-text-muted italic">
                  Beige and greige quartz countertop colours trending for 2026 kitchens.
                </p>
              </div>

              {/* Section 3 */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                3. Natural Stone-Look Quartz Is the New Standard
              </h2>
              <p>
                In 2026, homeowners want quartz that looks less manufactured and more like natural marble, quartzite, or limestone.
              </p>
              <p>
                Caesarstone’s 2026 countertop material guidance says quartz remains on trend, but the preference is moving toward styles, colours, and finishes that most closely resemble natural stone. (<a href="https://www.caesarstoneus.com/blog/best-kitchen-countertop-materials-for-2026/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Caesarstone US</a>) Colonial Marble’s 2026 countertop trend report also highlights natural-looking surfaces with soft movement and veining, especially quartz and porcelain designs that mimic marble and quartzite. (<a href="https://colonialmarble.net/kitchen-countertop-trends-for-2026/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Colonial Marble & Granite</a>)
              </p>
              <p className="font-semibold text-text-primary">
                The key is movement without looking fake.
              </p>
              <p>In 2026, the best quartz patterns have:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Softer veining</li>
                <li>More organic flow</li>
                <li>Less repetitive patterning</li>
                <li>Warmer undertones</li>
                <li>Marble or quartzite-inspired depth</li>
                <li>A natural slab-like appearance</li>
              </ul>
              <div className="bg-accent/5 border border-accent/20 p-6 rounded-2xl italic text-xs">
                <strong className="text-text-primary font-bold not-italic block uppercase tracking-wider mb-2 text-[10px]">Design tip:</strong> When choosing quartz, look at a full slab photo or large sample whenever possible. Small samples do not always show the full veining pattern.
              </div>

              {/* Section 4 */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                4. Taj Mahal-Inspired Quartz Looks Are in High Demand
              </h2>
              <p>
                One of the biggest luxury countertop inspirations for 2026 is <strong className="text-text-primary">Taj Mahal quartzite</strong>. It is not quartz; it is a natural quartzite. But its warm cream, beige, and soft gold tones are influencing quartz designs heavily.
              </p>
              <p>
                Designers are seeing homeowners ask for the “Taj Mahal look” because it feels warm, elegant, and less cold than grey-veined marble looks. Maria Killam identified Taj Mahal quartzite as a major 2026 countertop trend and described it as a warm alternative to white quartz. (<a href="https://mariakillam.com/the-trending-countertop-for-2026-taj-mahal/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Maria Killam | Timeless Colour</a>)
              </p>
              <p>
                Because real quartzite can be more expensive and require more maintenance, many homeowners are choosing quartz slabs that imitate the same palette.
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Look for quartz with</h4>
                <ul className="space-y-2 text-xs font-semibold text-text-primary">
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Creamy background</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Beige-gold veining</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Soft taupe movement</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Warm natural stone appearance</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Low contrast patterning</li>
                </ul>
              </div>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <p><strong className="text-text-primary text-[10px] font-bold uppercase tracking-wider block mb-1">Best for:</strong> Luxury kitchens, white oak cabinets, cream cabinets, warm transitional homes, and high-end Toronto renovations.</p>
              </div>

              <div className="my-8 group">
                <div className="overflow-hidden rounded-3xl border border-border-custom shadow-sm bg-white/50">
                  <img 
                    src={blogTajMahal} 
                    alt="Taj Mahal inspired quartz countertop with cream beige and soft gold veining" 
                    className="w-full aspect-[16/10] object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                  />
                </div>
                <p className="mt-3 text-center text-xs text-text-muted italic">
                  Taj Mahal inspired quartz countertop with cream beige and soft gold veining.
                </p>
              </div>

              {/* Section 5 */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                5. Dramatic Veining Is Becoming a Statement Feature
              </h2>
              <p>
                Not every homeowner wants subtle quartz. In 2026, dramatic veining is still popular, especially for islands, waterfall edges, and full-height backsplashes.
              </p>
              <p>
                Premier Granite’s 2026 trend report identifies bold, expressive stone and high-end quartz with dramatic veining and organic movement as a major countertop direction, especially when the countertop becomes the focal point of the kitchen. (<a href="https://premiergranitetops.com/2026-kitchen-countertop-design-trends/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Premier Granite & Stone</a>)
              </p>
              <p>
                The difference in 2026 is that dramatic veining is becoming more refined. Instead of harsh grey lines on a bright white background, the new dramatic quartz often uses:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Warm gold veining</li>
                <li>Soft brown movement</li>
                <li>Charcoal contrast</li>
                <li>Marble-inspired veining</li>
                <li>Bookmatched or slab backsplash effects</li>
                <li>Large island statement pieces</li>
              </ul>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <p><strong className="text-text-primary text-[10px] font-bold uppercase tracking-wider block mb-1">Best use:</strong> Dramatic quartz works best when the cabinets, backsplash, and flooring are kept simple.</p>
              </div>

              <div className="my-8 group">
                <div className="overflow-hidden rounded-3xl border border-border-custom shadow-sm bg-white/50">
                  <img 
                    src={blogDramatic} 
                    alt="Dramatic veined quartz island with waterfall edge in a luxury kitchen" 
                    className="w-full aspect-[16/10] object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                  />
                </div>
                <p className="mt-3 text-center text-xs text-text-muted italic">
                  Dramatic veined quartz island with waterfall edge in a luxury kitchen.
                </p>
              </div>

              {/* Section 6 */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                6. Matte and Satin Finishes Are Gaining Popularity
              </h2>
              <p>
                Polished quartz is still common, but 2026 kitchens are seeing more interest in <strong className="text-text-primary">matte, honed, and satin-look finishes</strong>.
              </p>
              <p>
                These finishes create a softer, more natural look and pair well with warm woods, flat-panel cabinetry, plaster-look walls, and organic modern interiors. Recent design coverage also points to satin-finished stone and matte cabinetry as part of the warmer, more textural luxury kitchen direction for 2026. (<a href="https://www.homesandgardens.com/celebrity-style/kris-jenner-textural-black-and-white-kitchen?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Homes and Gardens</a>)
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Popular finish choices</h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li><strong className="text-text-primary">Polished quartz:</strong> bright, reflective, classic</li>
                  <li><strong className="text-text-primary">Matte quartz:</strong> soft, modern, understated</li>
                  <li><strong className="text-text-primary">Honed-look quartz:</strong> natural stone feel</li>
                  <li><strong className="text-text-primary">Satin quartz:</strong> balanced between matte and polished</li>
                </ul>
              </div>
              <div className="bg-accent/5 border border-accent/20 p-6 rounded-2xl italic text-xs">
                <strong className="text-text-primary font-bold not-italic block uppercase tracking-wider mb-2 text-[10px]">Practical note:</strong> Matte finishes can show fingerprints, oils, and marks more than polished quartz, depending on the brand and colour. Always test a sample before choosing.
              </div>

              {/* Section 7 */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                7. Full-Height Quartz Backsplashes Are Becoming More Popular
              </h2>
              <p>
                One of the most premium quartz trends for 2026 is carrying the countertop material up the wall as a <strong className="text-text-primary">full-height backsplash</strong>.
              </p>
              <p>
                Instead of using tile between the counter and upper cabinets, homeowners are choosing the same quartz slab for a seamless look.
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Why homeowners like quartz backsplashes</h4>
                <ul className="space-y-2 text-xs font-semibold text-text-primary">
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Fewer grout lines</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Easier cleaning</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> More luxurious appearance</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Strong visual impact</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Works well behind ranges and sinks</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Makes small kitchens feel cleaner and larger</li>
                </ul>
              </div>
              <p>
                This trend is especially strong with marble-look quartz, warm white quartz, and dramatic veining.
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <p><strong className="text-text-primary text-[10px] font-bold uppercase tracking-wider block mb-1">Best for:</strong> Modern kitchens, luxury condos, custom homes, and homeowners who want an easier-to-clean backsplash.</p>
              </div>

              {/* Section 8 */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                8. Waterfall and Half-Waterfall Islands Are Still Popular
              </h2>
              <p>
                Quartz islands remain one of the biggest visual features in modern kitchens. In 2026, waterfall islands are still popular, but designers are also using softer variations.
              </p>
              <p>
                Livingetc’s 2026 island trend coverage highlights more sculptural island details, including showpiece edges, soft geometry, and half-waterfall designs that balance modern style with warmth. (<a href="https://www.livingetc.com/ideas/kitchen-island-design-trends-26?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Livingetc</a>)
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">2026 island trends include</h4>
                <ul className="space-y-2 text-xs font-semibold text-text-primary">
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Full waterfall quartz sides</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Half-waterfall edges</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Thicker-looking edges</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Soft rounded corners</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Bookmatched veining</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Quartz used as a furniture-like statement piece</li>
                </ul>
              </div>
              <p>
                For many Toronto homeowners, the island is where it makes sense to spend more on a premium slab, while keeping the perimeter countertops simpler.
              </p>

              {/* Section 9 */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                9. Dark Quartz Is Returning, But Softer and More Luxurious
              </h2>
              <p>
                Black and dark quartz are making a comeback in 2026, especially in high-contrast kitchens. But the new dark quartz trend is not flat, plain black. It is richer and more layered.
              </p>
              <p>Popular dark quartz looks include:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Black quartz with soft white veining</li>
                <li>Charcoal quartz</li>
                <li>Soapstone-look quartz</li>
                <li>Dark brown quartz</li>
                <li>Black quartz with gold veining</li>
                <li>Deep grey quartz with subtle movement</li>
              </ul>
              <p>
                This trend works well with white oak, walnut, cream cabinets, and warm lighting. It can also create a strong luxury feel when used on an island or bar area.
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <p><strong className="text-text-primary text-[10px] font-bold uppercase tracking-wider block mb-1">Best for:</strong> Large kitchens, statement islands, bar counters, modern homes, and homeowners who want contrast.</p>
              </div>

              {/* Section 10 */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                10. Quartz Is Being Chosen for Low-Maintenance Luxury
              </h2>
              <p>
                The practical reason quartz remains popular in 2026 is simple: homeowners want kitchens that look beautiful but are easy to maintain.
              </p>
              <p>
                Quartz is engineered to be non-porous, which means it does not require sealing like many natural stones. It is also consistent in colour and pattern, making it easier to plan a kitchen design.
              </p>
              <p>
                That said, quartz is not indestructible. Recent homeowner discussions and designer commentary continue to point out that quartz can be damaged by direct high heat and that cheaper quartz can sometimes look artificial or pixelated. (<a href="https://www.realsimple.com/homeowners-who-got-quartz-countertops-and-regret-it-11967767?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Real Simple</a>)
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Quartz care tips</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-text-primary">
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Do not place hot pans directly on quartz</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Use trivets under air fryers, pots, and pans</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Clean with mild soap and water</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Avoid harsh chemicals</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Use cutting boards</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Choose quality quartz from reputable brands</li>
                </ul>
              </div>

              {/* Best Colors */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-12 border-t border-border-custom">
                Best Quartz Colours for 2026
              </h2>
              <p>Here are the colour families homeowners should consider this year.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-border-custom p-6 rounded-2xl">
                  <h3 className="text-base font-bold text-text-primary mb-2">Warm White Quartz</h3>
                  <p className="text-xs text-text-muted mb-4">Warm white quartz is the safest 2026 choice for homeowners who want a bright kitchen without a cold look.</p>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-wider">Best with: white oak, cream cabinets, brushed gold, warm grey floors.</p>
                </div>
                <div className="bg-white border border-border-custom p-6 rounded-2xl">
                  <h3 className="text-base font-bold text-text-primary mb-2">Beige and Cream Quartz</h3>
                  <p className="text-xs text-text-muted mb-4">Beige quartz is becoming one of the strongest choices for 2026 because it works with both modern and traditional kitchens.</p>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-wider">Best with: natural wood, off-white cabinets, taupe walls, champagne bronze hardware.</p>
                </div>
                <div className="bg-white border border-border-custom p-6 rounded-2xl">
                  <h3 className="text-base font-bold text-text-primary mb-2">Greige Quartz</h3>
                  <p className="text-xs text-text-muted mb-4">Greige quartz blends grey and beige. It is ideal for homeowners who want warmth but still need something neutral.</p>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-wider">Best with: shaker cabinets, warm grey floors, transitional kitchens.</p>
                </div>
                <div className="bg-white border border-border-custom p-6 rounded-2xl">
                  <h3 className="text-base font-bold text-text-primary mb-2">Gold-Veined Quartz</h3>
                  <p className="text-xs text-text-muted mb-4">Gold veining gives quartz a luxury look without being too bold.</p>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-wider">Best with: cream cabinets, white oak, brass hardware, luxury kitchens.</p>
                </div>
                <div className="bg-white border border-border-custom p-6 rounded-2xl">
                  <h3 className="text-base font-bold text-text-primary mb-2">Marble-Look Quartz</h3>
                  <p className="text-xs text-text-muted mb-4">Marble-look quartz remains popular, but 2026 versions are softer and warmer.</p>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-wider">Best with: white cabinets, black accents, full-height backsplashes.</p>
                </div>
                <div className="bg-white border border-border-custom p-6 rounded-2xl">
                  <h3 className="text-base font-bold text-text-primary mb-2">Dark Quartz</h3>
                  <p className="text-xs text-text-muted mb-4">Dark quartz is ideal for contrast, especially on islands.</p>
                  <p className="text-[10px] font-bold text-accent uppercase tracking-wider">Best with: light cabinets, walnut, white oak, warm lighting.</p>
                </div>
              </div>

              {/* Finishes */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-12 border-t border-border-custom">
                Quartz Finishes Trending in 2026
              </h2>
              <div className="space-y-4 text-sm">
                <p><strong className="text-text-primary">Polished Quartz:</strong> Still the most common finish. It reflects light, looks clean, and is easy for most homeowners to maintain.</p>
                <p><strong className="text-text-primary">Matte Quartz:</strong> Matte quartz gives a softer, designer look. It works especially well in organic modern kitchens.</p>
                <p><strong className="text-text-primary">Honed-Look Quartz:</strong> A honed-look finish mimics natural stone and is ideal for homeowners who do not want a glossy surface.</p>
                <p><strong className="text-text-primary">Textured Quartz:</strong> Subtle texture is growing, especially as kitchens become more layered and natural. This works best in premium designs where the lighting and cabinetry support the finish.</p>
              </div>

              {/* Going out */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-12 border-t border-border-custom">
                What Quartz Trends Are Going Out in 2026?
              </h2>
              <p>Some quartz styles are not disappearing completely, but they are becoming less desirable.</p>
              <div className="space-y-4 text-sm">
                <p><strong className="text-text-primary">1. Cold Grey Quartz:</strong> Cool grey quartz is less popular than it was a few years ago. Homeowners are moving toward warmer greige, taupe, cream, and beige tones.</p>
                <p><strong className="text-text-primary">2. Stark White Quartz With Harsh Grey Veins:</strong> High-contrast white-and-grey quartz can still work, but softer veining is more current for 2026.</p>
                <p><strong className="text-text-primary">3. Busy Repetitive Patterns:</strong> Quartz that looks obviously printed or repetitive can make a kitchen feel less premium.</p>
                <p><strong className="text-text-primary">4. Ultra-Glossy Everything:</strong> Gloss is still useful, but many luxury kitchens are mixing polished quartz with matte cabinetry, wood, and softer textures.</p>
              </div>

              {/* Directions */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-12 border-t border-border-custom">
                Resale Value, Luxury, and Small Kitchen Directions
              </h2>
              <div className="space-y-6 text-sm">
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Best 2026 Quartz Trend for Resale Value</h3>
                  <p className="text-gray-500">For resale, the safest quartz choice is warm white or soft cream quartz with subtle beige, taupe, or light grey veining. This gives the kitchen a bright, clean, updated look without being too trendy. It also works with many cabinet colours, flooring styles, and hardware finishes. For Toronto and GTA homes, this is often the best balance between beauty, resale appeal, and long-term style.</p>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Best 2026 Quartz Trend for Luxury Kitchens</h3>
                  <p className="text-gray-500">For a luxury kitchen, the strongest quartz trends are Taj Mahal-inspired quartz, gold-veined quartz, full-height quartz backsplash, waterfall island, matte or satin finish, large-format slab look, and a warm white or cream base colour. The most expensive-looking kitchens in 2026 are not necessarily the boldest. They are the ones where the countertop, cabinets, hardware, lighting, and backsplash all feel intentional.</p>
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-1">Best 2026 Quartz Trend for Small Kitchens and Condos</h3>
                  <p className="text-gray-500">For small kitchens, choose quartz that makes the space feel open but not cold. Best options include warm white quartz, cream quartz, light greige quartz, subtle marble-look quartz, low-contrast veining, and a polished or satin finish. Avoid very busy patterns in small kitchens unless used carefully. A full-height quartz backsplash can also make a small kitchen feel cleaner and more seamless.</p>
                </div>
              </div>

              {/* Selection Summary */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-12 border-t border-border-custom">
                How to Choose the Right Quartz Countertop in 2026
              </h2>
              <ul className="space-y-3 text-sm">
                <li>💡 <strong className="text-text-primary">Choose warm white quartz</strong> if you want timeless and bright. This is the safest choice for most homeowners.</li>
                <li>💡 <strong className="text-text-primary">Choose beige or cream quartz</strong> if you want warm and modern. This works beautifully with white oak, cream cabinets, and natural design.</li>
                <li>💡 <strong className="text-text-primary">Choose dramatic quartz</strong> if you want a statement kitchen. Use it on the island or backsplash for maximum impact.</li>
                <li>💡 <strong className="text-text-primary">Choose dark quartz</strong> if you want contrast. Dark quartz looks best with lighter cabinets and strong lighting.</li>
                <li>💡 <strong className="text-text-primary">Choose matte quartz</strong> if you want a designer look. Just test the sample first to make sure you like how it handles fingerprints and cleaning.</li>
              </ul>

              {/* Final Takeaway */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-12 border-t border-border-custom">
                Final Takeaway
              </h2>
              <p>
                The top quartz trend for 2026 is <strong className="text-text-primary">warm, natural-looking luxury</strong>.
              </p>
              <p>
                Homeowners are moving away from cold grey and stark white countertops and choosing quartz that feels softer, warmer, and more connected to natural stone. The most popular looks include creamy whites, beige undertones, taupe movement, gold veining, Taj Mahal-inspired colours, matte finishes, and seamless quartz backsplashes.
              </p>
              <p>
                For most Toronto and GTA homeowners, the best quartz countertop for 2026 is a <strong className="text-text-primary">warm white, cream, or greige quartz with soft natural veining</strong>. It feels current, works with many cabinet styles, and is more likely to age well than a highly trendy pattern.
              </p>

              {/* FAQs */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-12 border-t border-border-custom">
                FAQs About 2026 Quartz Countertop Trends
              </h2>
              <div className="space-y-6 text-xs">
                <div>
                  <h4 className="font-bold text-text-primary mb-1">What is the most popular quartz colour for 2026?</h4>
                  <p className="text-gray-500">The most popular quartz colours for 2026 are warm white, cream, beige, greige, taupe, and soft gold-veined quartz. These colours are replacing cold grey and stark white quartz in many kitchen renovations.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Is white quartz still in style in 2026?</h4>
                  <p className="text-gray-500">Yes, white quartz is still in style, but the trend has shifted toward warmer whites. Creamy white quartz with soft beige, taupe, or gold veining looks more current than bright white quartz with harsh grey veins.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Are grey quartz countertops out of style?</h4>
                  <p className="text-gray-500">Grey quartz is not completely out of style, but cool grey is less popular than before. In 2026, homeowners are choosing warmer greige, taupe, mushroom, and beige-based quartz instead.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">What quartz looks most expensive?</h4>
                  <p className="text-gray-500">Quartz that looks most expensive usually has natural-looking veining, a warm white or cream background, soft gold or taupe movement, and a slab-like pattern. Taj Mahal-inspired quartz and marble-look quartz are especially popular for luxury kitchens.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Are matte quartz countertops popular in 2026?</h4>
                  <p className="text-gray-500">Yes, matte and satin quartz finishes are gaining popularity because they create a softer, more natural designer look. However, homeowners should test samples because matte finishes can show fingerprints and marks differently than polished quartz.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">What countertop edge is trending in 2026?</h4>
                  <p className="text-gray-500">Waterfall edges, half-waterfall islands, thicker-looking edges, and softer rounded edges are trending in 2026. These details make the island feel more custom and high-end.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Is quartz better than quartzite?</h4>
                  <p className="text-gray-500">Quartz and quartzite are different materials. Quartz is engineered, non-porous, and low maintenance. Quartzite is natural stone and can offer a unique high-end look, but it usually requires more care and sealing. Many homeowners choose quartz when they want the look of natural stone with easier maintenance.</p>
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">What is the safest quartz choice for resale?</h4>
                  <p className="text-gray-500">The safest quartz choice for resale is warm white or soft cream quartz with subtle natural veining. It looks clean, modern, and timeless without being too bold.</p>
                </div>
              </div>
            </div>

            {/* In-article CTA block */}
            <div className="mt-16 p-8 bg-white border border-border-custom rounded-3xl text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-3">Planning a GTA Kitchen Renovation?</h3>
              <p className="text-text-muted text-sm mb-6">Use our instant countertop price estimator to get an accurate budget estimate in 30 seconds.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/estimate" className="btn-primary py-4 px-8 text-xs font-bold uppercase tracking-widest text-center">
                  Get Instant Estimate
                </Link>
                <Link to="/cost" className="bg-background border border-border-custom py-4 px-8 rounded-[var(--radius-button)] text-xs font-bold text-text-primary hover:border-accent transition-all text-center flex items-center justify-center">
                  View Cost Guide
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  if (activePostId === 2) {
    return (
      <div className="bg-background pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setActivePostId(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest hover:text-text-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to insights
          </button>

          <article className="prose prose-lg max-w-none">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]">
                How to Care for Your Quartz Surfaces
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-xs text-text-muted border-y border-border-custom py-4">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-accent" /> Published April 28, 2026
                </span>
                <span className="flex items-center gap-2">
                  <User size={14} className="text-accent" /> Quartz International
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-accent" /> 6 min read
                </span>
              </div>
            </header>

            <div className="mb-12 group">
              <div className="overflow-hidden rounded-3xl border border-border-custom shadow-md bg-white/50">
                <img 
                  src={blogQuartzCare} 
                  alt="Warm white quartz countertop with soft beige veining in a modern Toronto kitchen" 
                  className="w-full aspect-[16/9] object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
              <p className="mt-3 text-center text-xs text-text-muted italic">
                A clean, premium white quartz countertop with a soft microfiber cloth and a mild soap bottle in a beautiful modern kitchen.
              </p>
            </div>

            <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-base">
              <p className="text-lg text-text-primary font-medium">
                Keep your countertops looking brand new with these simple daily tips, heat protection guides, and recommended cleaning products.
              </p>

              <p>
                Quartz countertops are one of the easiest surfaces to maintain, which is one of the reasons they are so popular in Toronto and GTA kitchen renovations. They are durable, non-porous, and resistant to everyday stains, making them a practical choice for busy families, home cooks, rental properties, and modern kitchens.
              </p>

              <p className="font-semibold text-text-primary">
                But quartz is not maintenance-free.
              </p>

              <p>
                To keep your quartz countertops looking beautiful for years, you need to clean them properly, protect them from high heat, avoid harsh chemicals, and use the right products for daily care.
              </p>

              <p>
                This guide explains exactly how to care for your quartz surfaces, what to use, what to avoid, and how to prevent common problems like dull spots, heat marks, hard water stains, and surface residue.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Quick Answer: How Do You Care for Quartz Countertops?
              </h2>
              
              <p className="bg-accent/5 border-l-4 border-accent p-6 rounded-r-2xl italic">
                The best way to care for quartz countertops is to clean them daily with warm water, mild dish soap, and a soft cloth. Wipe spills quickly, dry the surface after cleaning, use cutting boards, and always place hot pots, pans, air fryers, and baking trays on trivets or heat pads.
              </p>

              <p>
                Avoid bleach, oven cleaner, drain cleaner, abrasive powders, harsh chemicals, and direct heat. Quartz is durable, but extreme heat and aggressive cleaning products can damage the resin and finish.
              </p>

              {/* Daily Quartz Cleaning Routine */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Daily Quartz Cleaning Routine
              </h2>
              <p>
                For everyday cleaning, quartz does not need anything complicated. In most cases, warm water and mild dish soap are enough.
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">What You Need</h4>
                <ul className="grid grid-cols-2 gap-3 text-xs font-semibold text-text-primary">
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Warm water</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Mild dish soap</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Soft microfiber cloth</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Non-abrasive sponge</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Dry towel or paper towel</li>
                </ul>
              </div>

              <h4 className="font-bold text-text-primary mb-2 uppercase text-xs tracking-wider">Daily Cleaning Steps</h4>
              <ol className="list-decimal list-inside space-y-2 pl-4 text-sm">
                <li>Wipe the countertop with a soft cloth and warm soapy water.</li>
                <li>Remove crumbs, grease, coffee spills, and food residue.</li>
                <li>Rinse with clean water if soap remains on the surface.</li>
                <li>Dry the countertop with a clean towel to prevent streaks and water spots.</li>
              </ol>
              <p>
                Drying is important, especially on darker quartz, polished quartz, and areas around sinks. If water is left to sit, it can leave mineral marks or a cloudy film over time.
              </p>

              {/* What to Clean Quartz Countertops With */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                What to Clean Quartz Countertops With
              </h2>
              <p>
                The safest cleaning products for quartz are simple, non-abrasive, and pH-balanced.
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Recommended Daily Cleaning Products</h4>
                <ul className="space-y-2 text-xs font-semibold text-text-primary">
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Mild dish soap and warm water</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Microfiber cloth or non-abrasive sponge</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Quartz-safe countertop cleaner</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent shrink-0" /> Gentle multi-surface cleaner (if approved by the quartz brand)</li>
                </ul>
              </div>

              <p>
                <strong>Best Cleaner for Grease:</strong> For cooking grease, use warm water with a small amount of mild dish soap. Let it sit for a minute, then wipe with a soft cloth. Avoid using strong degreasers unless they are clearly marked safe for quartz.
              </p>

              <p>
                <strong>Best Cleaner for Dried Food:</strong> For dried food, sauce, or sticky residue:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-4 text-sm">
                <li>Soften the area with warm soapy water and let it sit for a few minutes.</li>
                <li>Use a plastic scraper or soft sponge to gently remove the residue.</li>
                <li>Wipe clean and dry with a microfiber cloth.</li>
              </ol>
              <p className="bg-accent/5 border border-accent/20 p-4 rounded-xl text-xs italic">
                Do not use metal scrapers, razor blades, steel wool, or rough scouring pads.
              </p>

              {/* What Not to Use on Quartz Countertops */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                What Not to Use on Quartz Countertops
              </h2>
              <p>
                Quartz is durable, but harsh products can damage the surface, dull the finish, or affect the resin used in engineered stone.
              </p>
              <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl">
                <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-4">Avoid These Products</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-text-primary">
                  <li className="flex items-center gap-2 text-gray-600"><X size={14} className="text-red-400 shrink-0" /> Bleach</li>
                  <li className="flex items-center gap-2 text-gray-600"><X size={14} className="text-red-400 shrink-0" /> Oven & drain cleaner</li>
                  <li className="flex items-center gap-2 text-gray-600"><X size={14} className="text-red-400 shrink-0" /> Paint & furniture stripper</li>
                  <li className="flex items-center gap-2 text-gray-600"><X size={14} className="text-red-400 shrink-0" /> Strong alkaline or acidic cleaners</li>
                  <li className="flex items-center gap-2 text-gray-600"><X size={14} className="text-red-400 shrink-0" /> Abrasive scouring powders</li>
                  <li className="flex items-center gap-2 text-gray-600"><X size={14} className="text-red-400 shrink-0" /> Steel wool & rough pads</li>
                  <li className="flex items-center gap-2 text-gray-600"><X size={14} className="text-red-400 shrink-0" /> Magic erasers used aggressively</li>
                  <li className="flex items-center gap-2 text-gray-600"><X size={14} className="text-red-400 shrink-0" /> Cleaners with high or low pH levels</li>
                </ul>
              </div>
              <p>
                A good rule is simple: if the product is strong enough to strip, dissolve, or heavily degrease, it is probably too harsh for quartz.
              </p>

              {/* Downloadable Visual Reference Card: Do This / Avoid This */}
              <div className="my-12 p-8 bg-gradient-to-br from-[#0E1116] to-[#1A1F26] rounded-3xl text-white relative overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -mr-32 -mt-32" />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 pb-6 border-b border-white/10">
                    <div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">Exclusive Owner Guide</span>
                      <h3 className="text-2xl font-bold tracking-tight">Quartz Care Cheat Sheet</h3>
                      <p className="text-gray-400 text-xs mt-1">Quick daily reference checklist for home usage</p>
                    </div>
                    <button 
                      onClick={() => window.print()}
                      className="flex items-center gap-2 bg-white/10 border border-white/15 hover:bg-white/20 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shrink-0 cursor-pointer"
                    >
                      <Download size={14} className="text-accent" /> Print / Save PDF
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* DO COLUMN */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-widest mb-6">
                        <span className="w-6 h-6 bg-accent/15 rounded-full flex items-center justify-center text-accent">✓</span>
                        What to Do
                      </h4>
                      <ul className="space-y-4">
                        {[
                          { title: 'Clean Daily', desc: 'Use warm water, mild dish soap, and a soft microfiber cloth.' },
                          { title: 'Always Use Trivets', desc: 'Place hot pans, baking sheets, and air fryers on hot pads.' },
                          { title: 'Wipe Spills Quickly', desc: 'Clean coffee, tea, wine, and oils before they can sit.' },
                          { title: 'Use Cutting Boards', desc: 'Always slice on boards to protect the resin from scratching.' },
                          { title: 'Dry After Rinsing', desc: 'Buff with a dry cloth to prevent streaks and hard water spots.' },
                        ].map((item, idx) => (
                          <li key={idx} className="flex gap-3">
                            <Check size={16} className="text-accent shrink-0 mt-0.5" />
                            <div>
                              <span className="text-sm font-bold text-white block mb-0.5">{item.title}</span>
                              <span className="text-xs text-gray-400 leading-relaxed">{item.desc}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* AVOID COLUMN */}
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-red-400 uppercase tracking-widest mb-6">
                        <span className="w-6 h-6 bg-red-400/15 rounded-full flex items-center justify-center text-red-400">✗</span>
                        What to Avoid
                      </h4>
                      <ul className="space-y-4">
                        {[
                          { title: 'Direct High Heat', desc: 'Never place items fresh from the oven or stove directly on quartz.' },
                          { title: 'Bleach & Oven Cleaners', desc: 'Avoid harsh chemicals, degreasers, or highly acidic products.' },
                          { title: 'Scouring Pads & Steel Wool', desc: 'Never use rough pads, metal scrapers, or abrasive powders.' },
                          { title: 'Cutting Directly', desc: 'Do not use knives directly on the surface as it can leave marks.' },
                          { title: 'Outdoor UV Exposure', desc: 'Avoid installing standard quartz outside in direct sunlight.' },
                        ].map((item, idx) => (
                          <li key={idx} className="flex gap-3">
                            <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-sm font-bold text-white block mb-0.5">{item.title}</span>
                              <span className="text-xs text-gray-400 leading-relaxed">{item.desc}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 text-center border-t border-white/10 pt-6">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">© 2026 Quartz International Countertops & Cabinetry. All rights reserved.</p>
                  </div>
                </div>
              </div>

              {/* Can You Put Hot Pots on Quartz? */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Can You Put Hot Pots on Quartz?
              </h2>
              <p>
                No, you should not place hot pots, pans, baking trays, or air fryer baskets directly on quartz countertops.
              </p>
              <p>
                Quartz is heat resistant, but it is not heat-proof. High heat can damage the resin in the surface and may cause discoloration, burn marks, cracking, or a permanent ring.
              </p>
              
              <h4 className="font-bold text-text-primary mb-2 uppercase text-xs tracking-wider">Always Use Heat Protection</h4>
              <p>
                Use trivets, hot pads, silicone mats, or wooden boards under all hot items. This is especially important for:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-sm text-gray-600">
                <li>Hot pots and pans from the stove</li>
                <li>Baking trays from the oven</li>
                <li>Air fryer baskets</li>
                <li>Slow cookers & pressure cookers</li>
                <li>Toaster ovens & electric griddles</li>
                <li>Coffee machines that generate heat underneath</li>
              </ul>
              <p>
                Even if the quartz looks fine after one hot item, repeated heat exposure can cause long-term damage.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Quartz Heat Protection Guide
              </h2>
              <div className="bg-white border border-border-custom p-6 rounded-2xl space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">Safe</h4>
                  <p className="text-xs text-text-muted">Warm plates, coffee mugs, room-temperature appliances, brief contact with warm items.</p>
                </div>
                <div className="border-t border-border-custom pt-4">
                  <h4 className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Use Caution</h4>
                  <p className="text-xs text-text-muted">Hot pans, baking sheets, air fryer baskets, electric skillets, crockpots, toaster ovens, espresso machines, curling irons in bathrooms.</p>
                </div>
                <div className="border-t border-border-custom pt-4">
                  <h4 className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">Always Use Protection</h4>
                  <p className="text-xs text-text-muted">Any item that comes directly from the oven, stove, air fryer, or high-heat appliance should be placed on a trivet or hot pad.</p>
                </div>
              </div>

              {/* Can You Cut Directly on Quartz? */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Can You Cut Directly on Quartz?
              </h2>
              <p>
                You should not cut directly on quartz countertops.
              </p>
              <p>
                Quartz is scratch resistant, but not scratch-proof. Cutting directly on the surface can dull your knives and may leave marks, especially on darker colours or matte finishes.
              </p>
              <p className="font-semibold text-text-primary">
                Always use a cutting board. This protects both the countertop and your knives.
              </p>

              {/* How to Remove Common Quartz Stains */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                How to Remove Common Quartz Stains
              </h2>
              <p>
                Quartz is non-porous, so most stains sit on the surface rather than soaking in. The sooner you clean the spill, the easier it is to remove.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-text-primary mb-1">Coffee and Tea Stains</h4>
                  <p className="text-sm text-text-muted">Use warm water, mild dish soap, and a soft cloth. For stubborn marks, let the soapy water sit for a few minutes before wiping.</p>
                </div>
                <div className="border-t border-border-custom pt-4">
                  <h4 className="text-sm font-bold text-text-primary mb-1">Wine and Juice Spills</h4>
                  <p className="text-sm text-text-muted">Wipe spills quickly. Use warm water and mild soap, then rinse and dry the surface thoroughly.</p>
                </div>
                <div className="border-t border-border-custom pt-4">
                  <h4 className="text-sm font-bold text-text-primary mb-1">Grease and Oil</h4>
                  <p className="text-sm text-text-muted">Use mild dish soap and warm water. Avoid harsh degreasers unless approved for quartz surfaces.</p>
                </div>
                <div className="border-t border-border-custom pt-4">
                  <h4 className="text-sm font-bold text-text-primary mb-1">Hard Water Marks</h4>
                  <p className="text-sm text-text-muted">Around sinks, hard water can leave cloudy marks or mineral buildup. Dry the area after use and clean regularly with a quartz-safe cleaner.</p>
                </div>
                <div className="border-t border-border-custom pt-4">
                  <h4 className="text-sm font-bold text-text-primary mb-1">Dried Food or Sauce</h4>
                  <p className="text-sm text-text-muted">Soften with warm soapy water and use a plastic scraper if needed. Never use a metal blade or scraper.</p>
                </div>
                <div className="border-t border-border-custom pt-4">
                  <h4 className="text-sm font-bold text-text-primary mb-1">Metal Marks</h4>
                  <p className="text-sm text-text-muted">Metal marks can happen from pots, pans, knives, or utensils rubbing against the surface. Use a quartz-safe cleaner and a non-abrasive pad. Test first in a hidden area.</p>
                </div>
              </div>

              {/* How to Prevent Dull Spots on Quartz */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                How to Prevent Dull Spots on Quartz
              </h2>
              <p>
                Dull spots usually come from harsh cleaners, abrasive scrubbing, chemical exposure, or residue buildup. To prevent dullness:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-sm text-gray-600">
                <li>Avoid bleach, vinegar, and harsh chemicals</li>
                <li>Do not use abrasive scouring pads</li>
                <li>Always rinse off soap residue completely</li>
                <li>Dry the countertop thoroughly after cleaning</li>
                <li>Use quartz-safe cleaners</li>
                <li>Clean spills quickly and avoid leaving cleaners sitting on the surface</li>
              </ul>
              <p className="bg-white border border-border-custom p-6 rounded-2xl text-xs italic">
                Matte and honed-look quartz may show oils, fingerprints, and residue more easily than polished quartz, so they may need more frequent wiping and drying.
              </p>

              {/* How to Care for White, Dark, and Matte Quartz */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                How to Care for White, Dark, and Matte Quartz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-border-custom p-6 rounded-2xl">
                  <h3 className="text-base font-bold text-text-primary mb-2">White Quartz</h3>
                  <p className="text-xs text-text-muted mb-4">White quartz is beautiful but shows spills, dark liquids, and residue more easily.</p>
                  <ul className="text-[10px] space-y-1 font-semibold text-text-primary uppercase tracking-wider">
                    <li>• Wipe coffee & tea quickly</li>
                    <li>• Avoid dark liquids overnight</li>
                    <li>• Do not use bleach to "brighten"</li>
                    <li>• Use trivets to prevent yellowing</li>
                  </ul>
                </div>
                <div className="bg-white border border-border-custom p-6 rounded-2xl">
                  <h3 className="text-base font-bold text-text-primary mb-2">Dark Quartz</h3>
                  <p className="text-xs text-text-muted mb-4">Dark quartz looks luxurious but shows fingerprints, dust, and water spots more easily.</p>
                  <ul className="text-[10px] space-y-1 font-semibold text-text-primary uppercase tracking-wider">
                    <li>• Use a microfiber cloth</li>
                    <li>• Dry after cleaning to avoid spots</li>
                    <li>• Use minimal soap to avoid streaks</li>
                    <li>• Buff dry with a clean towel</li>
                  </ul>
                </div>
                <div className="bg-white border border-border-custom p-6 rounded-2xl">
                  <h3 className="text-base font-bold text-text-primary mb-2">Matte Quartz</h3>
                  <p className="text-xs text-text-muted mb-4">Matte quartz has a modern look but shows fingerprints and marks differently than polished surfaces.</p>
                  <ul className="text-[10px] space-y-1 font-semibold text-text-primary uppercase tracking-wider">
                    <li>• Wipe fingerprints quickly</li>
                    <li>• Avoid oily cleaners & residue</li>
                    <li>• Use mild soap and water only</li>
                    <li>• Do not use abrasive pads</li>
                  </ul>
                </div>
              </div>

              {/* Do Quartz Countertops Need to Be Sealed? */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Do Quartz Countertops Need to Be Sealed?
              </h2>
              <p>
                No, quartz countertops do not need to be sealed. Unlike many natural stones, quartz is engineered to be non-porous. That means it does not require annual sealing, making it much easier to maintain than granite, marble, or quartzite. This is one of the biggest reasons homeowners choose quartz for kitchens, bathrooms, laundry rooms, bars, and rental properties.
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Can Quartz Be Used Outdoors?
              </h2>
              <p>
                Quartz is generally not recommended for outdoor use unless the manufacturer specifically approves that product for exterior applications. Sunlight and UV exposure can affect some quartz surfaces over time, causing fading, discoloration, or changes in appearance. For outdoor kitchens, porcelain or natural stone may be a better choice depending on the application.
              </p>

              {/* Quartz Care Checklist */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Quartz Care Checklist
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                <div className="bg-green-50/30 border border-green-100 p-6 rounded-2xl">
                  <h4 className="font-bold text-green-600 mb-4 uppercase tracking-wider">Do</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600 shrink-0" /> Clean daily with mild soap & warm water</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600 shrink-0" /> Use microfiber cloths or soft sponges</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600 shrink-0" /> Dry the surface after cleaning</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600 shrink-0" /> Wipe spills quickly</li>
                    <li className="flex items-center gap-2"><Check size={14} className="text-green-600 shrink-0" /> Use cutting boards & trivets</li>
                  </ul>
                </div>
                <div className="bg-red-50/30 border border-red-100 p-6 rounded-2xl">
                  <h4 className="font-bold text-red-600 mb-4 uppercase tracking-wider">Do Not</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><X size={14} className="text-red-500 shrink-0" /> Place hot pans directly on quartz</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-red-500 shrink-0" /> Cut directly on the surface</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-red-500 shrink-0" /> Use bleach, vinegar, or oven cleaners</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-red-500 shrink-0" /> Scrub with steel wool or rough pads</li>
                    <li className="flex items-center gap-2"><X size={14} className="text-red-500 shrink-0" /> Leave spills sitting overnight</li>
                  </ul>
                </div>
              </div>

              {/* Recommended Products & Weekly Routine */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Recommended Products & Weekly Routine
              </h2>
              <p>
                For most kitchens, you do not need a long list of specialty products.
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-sm text-gray-600">
                <li><strong>Best Everyday Option:</strong> Mild dish soap, warm water, and a microfiber cloth. This is the safest and most cost-effective way to clean quartz daily.</li>
                <li><strong>Best for Streaks:</strong> Clean water and a dry microfiber cloth to buff and remove soap residue.</li>
                <li><strong>Best for Grease:</strong> Mild dish soap with warm water. Let it sit briefly, then wipe clean.</li>
                <li><strong>Best for Stubborn Residue:</strong> Use a quartz-safe surface cleaner recommended by your manufacturer or installer (e.g. Caesarstone care line). Test first in a hidden area.</li>
              </ul>

              <h4 className="font-bold text-text-primary mb-2 uppercase text-xs tracking-wider">Simple 5-Minute Weekly Quartz Care Routine</h4>
              <ol className="list-decimal list-inside space-y-2 pl-4 text-sm text-gray-600">
                <li>Remove everything from the countertops.</li>
                <li>Wipe crumbs and dust.</li>
                <li>Clean with warm water and mild soap, then rinse with a clean damp cloth.</li>
                <li>Dry with a microfiber towel.</li>
                <li>Check areas around the sink, cooktop, and coffee station to remove any mineral or food buildup.</li>
              </ol>

              {/* Final Takeaway */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Final Takeaway
              </h2>
              <p>
                Quartz countertops are easy to maintain, but the right habits matter. Clean them daily with mild soap and warm water. Dry the surface after cleaning. Use cutting boards. Protect the countertop from hot pots, pans, air fryers, and baking trays. Avoid bleach, oven cleaner, drain cleaner, abrasive pads, and harsh chemicals.
              </p>
              <p>
                With simple daily care, your quartz surfaces can stay beautiful, clean, and polished-looking for years. For Toronto and GTA homeowners, quartz remains one of the best countertop choices for a low-maintenance kitchen that looks modern, elegant, and practical.
              </p>

              {/* FAQs */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-12 border-t border-border-custom">
                FAQs About Quartz Countertop Care
              </h2>
              <div className="space-y-6 text-xs border-b border-border-custom pb-12">
                {[
                  { q: "What is the best way to clean quartz countertops?", a: "The best way to clean quartz countertops is with warm water, mild dish soap, and a soft microfiber cloth. Rinse away soap residue and dry the surface to prevent streaks or water marks." },
                  { q: "Can I use vinegar on quartz countertops?", a: "It is better to avoid vinegar on quartz. Vinegar is acidic and may affect the surface over time, especially with repeated use. Use mild soap and water instead." },
                  { q: "Can I use bleach on quartz countertops?", a: "No, bleach is not recommended for quartz countertops. It can damage the surface and may cause discoloration or dull spots." },
                  { q: "Can I put hot pans directly on quartz?", a: "No. Always use a trivet or hot pad. Quartz is heat resistant, but direct high heat can damage the resin and cause permanent marks or cracking." },
                  { q: "Do quartz countertops stain?", a: "Quartz is stain resistant, but not completely stain-proof. Wipe spills quickly, especially coffee, tea, wine, oil, tomato sauce, turmeric, and dark liquids." },
                  { q: "Do quartz countertops scratch?", a: "Quartz is scratch resistant, but not scratch-proof. Always use a cutting board and avoid dragging sharp or heavy objects across the surface." },
                  { q: "Do quartz countertops need sealing?", a: "No. Quartz countertops do not need sealing because they are non-porous." },
                  { q: "What should I avoid on quartz countertops?", a: "Avoid bleach, oven cleaner, drain cleaner, paint remover, abrasive pads, steel wool, harsh acidic cleaners, strong alkaline cleaners, and direct heat." },
                  { q: "How do I keep white quartz countertops clean?", a: "Wipe spills quickly, clean daily with mild soap and water, avoid bleach, and dry the surface after cleaning. Use trivets to prevent heat marks or discoloration." },
                  { q: "How do I keep dark quartz from showing streaks?", a: "Use a microfiber cloth, avoid too much soap, rinse with clean water, and dry the surface after cleaning. Dark quartz often shows water spots and streaks more easily than light quartz." }
                ].map((faq, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-text-primary mb-1">{faq.q}</h4>
                    <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* In-article CTA block */}
            <div className="mt-16 p-8 bg-white border border-border-custom rounded-3xl text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-3">Planning a GTA Kitchen Renovation?</h3>
              <p className="text-text-muted text-sm mb-6">Use our instant countertop price estimator to get an accurate budget estimate in 30 seconds.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/estimate" className="btn-primary py-4 px-8 text-xs font-bold uppercase tracking-widest text-center">
                  Get Instant Estimate
                </Link>
                <Link to="/cost" className="bg-background border border-border-custom py-4 px-8 rounded-[var(--radius-button)] text-xs font-bold text-text-primary hover:border-accent transition-all text-center flex items-center justify-center">
                  View Cost Guide
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  if (activePostId === 3) {
    return (
      <div className="bg-background pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setActivePostId(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest hover:text-text-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to insights
          </button>

          <article className="prose prose-lg max-w-none">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight leading-[1.1]">
                Quartz vs. Granite: The Final Verdict
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-xs text-text-muted border-y border-border-custom py-4">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-accent" /> Published April 15, 2026
                </span>
                <span className="flex items-center gap-2">
                  <User size={14} className="text-accent" /> Quartz International
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-accent" /> 7 min read
                </span>
              </div>
            </header>

            <div className="mb-12 group">
              <div className="overflow-hidden rounded-3xl border border-border-custom shadow-md bg-white/50">
                <img 
                  src={blogQuartzGranite} 
                  alt="Side by side comparison of white engineered quartz and natural granite stone patterns" 
                  className="w-full aspect-[16/9] object-cover group-hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
              <p className="mt-3 text-center text-xs text-text-muted italic">
                A visual side-by-side comparison: White engineered quartz with clean veining (left) vs. natural granite with organic mineral patterns (right).
              </p>
            </div>

            <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-base">
              <p className="text-lg text-text-primary font-medium">
                A deep dive into why more homeowners are choosing engineered stone over natural slabs for durability and ease of maintenance.
              </p>

              <p>
                For decades, granite was the dream countertop material. It was natural, durable, and seen as a premium upgrade in kitchens across Toronto and the GTA. But in recent years, quartz has become the more popular choice for many homeowners who want the look of stone without the extra maintenance.
              </p>

              <p className="border-l-4 border-accent pl-6 py-2 my-8 italic text-base font-medium text-text-primary bg-accent/5 rounded-r-xl">
                The reason is simple: <strong>quartz offers a better balance of durability, stain resistance, design consistency, and everyday ease of care.</strong>
              </p>

              <p>
                Granite is still a beautiful natural material. It has unique patterns, strong heat resistance, and a one-of-a-kind appearance that many homeowners still love. But for busy families, rental properties, modern kitchens, and homeowners who want less maintenance, quartz often makes more sense.
              </p>

              <p>
                So, which is better: quartz or granite?
              </p>

              <p>
                The final verdict is this: <strong>quartz is the better choice for most homeowners who want a durable, low-maintenance countertop. Granite is better for homeowners who prioritize natural stone character and higher heat resistance.</strong>
              </p>

              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Quick Answer: Is Quartz Better Than Granite?
              </h2>
              
              <p className="bg-[#F8F9FA] p-6 rounded-2xl border border-border-custom">
                Quartz is better than granite for most modern kitchens because it is non-porous, does not need sealing, resists stains well, and offers more consistent colour and pattern options. Granite is better if you want a completely natural slab, unique stone movement, and stronger heat resistance.
              </p>

              <p>
                For most Toronto and GTA homeowners, quartz is the more practical choice because it gives the kitchen a clean, high-end look with less long-term maintenance.
              </p>

              {/* What is Quartz */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                What Is Quartz?
              </h2>
              <p>
                Quartz countertops are engineered stone surfaces made from natural quartz minerals, resins, and pigments. This manufacturing process creates a hard, non-porous surface that is designed for daily kitchen use.
              </p>
              <p>
                Because quartz is engineered, it can be made in a wide range of colours and patterns, including marble-look, quartzite-look, warm white, beige, grey, black, and dramatic veined styles.
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Quartz Strengths</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-text-primary">
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Low maintenance</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Strong stain resistance</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> No sealing required</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Consistent colour and pattern</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Modern design options</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Durable everyday performance</li>
                </ul>
              </div>
              <p>
                Unlike natural stone, quartz is designed to be predictable. That makes it easier for homeowners, designers, and installers to plan a kitchen around a specific look.
              </p>

              {/* What is Granite */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                What Is Granite?
              </h2>
              <p>
                Granite is a natural stone quarried from the earth and cut into slabs. Every granite slab is unique, with its own mineral patterns, colours, specks, and movement.
              </p>
              <p>
                Granite became popular because it offered a real stone surface that was stronger and more durable than laminate, tile, and many older countertop materials.
              </p>
              <div className="bg-white border border-border-custom p-6 rounded-2xl space-y-3">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Granite Strengths</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-text-primary">
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Natural stone beauty</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Unique slab patterns</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Strong heat resistance</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Good durability</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Long-term value</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Traditional luxury appeal</li>
                </ul>
              </div>
              <p>
                But because granite is natural, it is also porous to some degree. That means many granite countertops need to be sealed to help protect against stains from oil, wine, coffee, sauces, and everyday spills. The <a href="https://www.naturalstoneinstitute.org/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Natural Stone Institute</a> says that in many cases it makes sense to seal granite and marble countertops with a quality sealer to improve resistance against dirt and spills.
              </p>

              {/* Main Difference */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                Quartz vs. Granite: The Main Difference
              </h2>
              <p>
                The biggest difference between quartz and granite is that <strong>quartz is engineered and non-porous, while granite is natural and usually needs sealing.</strong>
              </p>
              <p>
                That difference affects almost everything homeowners care about, including maintenance, stain resistance, cleaning, appearance, heat resistance, cost predictability, and long-term care. Quartz is designed to reduce the maintenance problems that come with natural stone. Granite is chosen when homeowners want a natural slab with unique character.
              </p>

              {/* Maintenance */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                1. Maintenance: Quartz Wins
              </h2>
              <p>
                Quartz is easier to maintain than granite. Most quartz countertops can be cleaned with mild soap, warm water, and a soft cloth. They do not need sealing. <a href="https://www.caesarstone.com/care-maintenance/quartz-mineral-surfaces/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Caesarstone</a> states that quartz surfaces do not require sealing because they are non-porous, while natural stone such as granite has pores and may require sealing.
              </p>
              <p>
                Granite usually requires more care. Depending on the stone, finish, use, and sealer, homeowners may need to reseal granite periodically to protect against stains.
              </p>

              {/* Stain Resistance */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                2. Stain Resistance: Quartz Wins
              </h2>
              <p>
                Quartz is non-porous, which makes it highly resistant to stains from common kitchen spills. Liquids are less likely to penetrate the surface, making quartz easier to clean after spills.
              </p>
              <p>
                <a href="https://www.caesarstone.com/care-maintenance/quartz-mineral-surfaces/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Caesarstone Canada</a> explains that quartz countertops are non-porous, so stains cannot penetrate the material’s surface in the same way they can with porous materials.
              </p>
              <p>
                Granite can also resist stains when properly sealed, but it is still a natural porous material. If the sealer wears down, spills can become more of a problem.
              </p>

              {/* Heat Resistance */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                3. Heat Resistance: Granite Wins
              </h2>
              <p>
                Granite has better heat resistance than quartz. Because granite is natural stone, it can generally handle heat better than engineered quartz.
              </p>
              <p>
                Quartz is heat resistant, but not heat-proof. The resin used in quartz can be damaged by direct high heat. <a href="https://www.caesarstone.com/care-maintenance/quartz-mineral-surfaces/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Caesarstone</a> notes that quartz can be damaged by excessive heat and recommends avoiding direct exposure from very hot items such as pans from the oven.
              </p>
              <p>
                Granite is more forgiving with heat, but even granite should be protected with trivets. <a href="https://www.msisurfaces.com/blogs/post/2025/12/24/top-quartz-countertops-color-forecast.aspx?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">MSI</a> notes that while granite is more heat-resistant than quartz, it can still weaken over time with constant high heat exposure.
              </p>

              {/* Durability */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                4. Durability: Quartz Wins for Everyday Use
              </h2>
              <p>
                Both quartz and granite are durable. Either material can last for many years when properly installed and cared for. But for everyday homeowner use, quartz often has the advantage because it combines hardness with non-porous stain resistance and predictable performance.
              </p>
              <p>
                Quartz is especially practical for family kitchens, rental units, condos, busy households, bathroom vanities, laundry rooms, and homeowners who do not want the hassle of sealing maintenance.
              </p>

              {/* Appearance */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                5. Appearance: It Depends
              </h2>
              <p>
                This category depends on personal taste. Granite has natural beauty. Every slab is unique. Some homeowners love the fact that no two granite countertops are exactly the same.
              </p>
              <p>
                Quartz offers more design control. It can be made to look like marble, quartzite, concrete, soapstone, or natural stone, while keeping a more consistent pattern. In 2026, quartz is especially strong because homeowners are choosing warm whites, creams, soft beige, taupe, greige, and natural stone-inspired veining. The National Kitchen and Bath Association’s 2026 trend coverage has also pointed to quartz as one of the leading countertop materials, with quartz projected to remain more popular than granite among design professionals.
              </p>

              {/* Cleaning & Sealing */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                6 & 7. Cleaning & Sealing: Quartz Wins
              </h2>
              <p>
                Quartz is easier to clean because it does not need stone-specific maintenance products for everyday use. For most quartz countertops, daily cleaning only requires warm water, mild dish soap, and a soft cloth.
              </p>
              <p>
                <strong>Sealing:</strong> Quartz does not need sealing. Granite often does. <a href="https://www.caesarstone.com/care-maintenance/quartz-mineral-surfaces/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">Caesarstone’s</a> care guide states that no sealer should be used on quartz surfaces. <a href="https://www.msisurfaces.com/blogs/post/2025/12/24/top-quartz-countertops-color-forecast.aspx?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-bold">MSI</a> also explains that quartz does not need sealing because its non-porous surface blocks liquids and stains from penetrating.
              </p>

              {/* Cost & Resale */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                8 & 9. Cost & Resale Value: Quartz Has the Advantage
              </h2>
              <p>
                Quartz and granite can both range from affordable to expensive. However, quartz pricing is often more predictable because it is manufactured in collections and colour groups, whereas granite pricing varies wildly based on slab rarity and exotic colours.
              </p>
              <p>
                <strong>Resale Value:</strong> Both quartz and granite can improve the look and value of a kitchen. But in modern renovations, quartz often has a stronger resale advantage because it matches what many buyers want now: clean design, low maintenance, and lighter, warmer neutral colour options.
              </p>

              {/* Best choice for Toronto */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                10. Best Choice for Toronto and GTA Homes
              </h2>
              <p>
                For Toronto and GTA homeowners, quartz is usually the better choice because many local renovations focus on practical upgrades, resale value, and low-maintenance design. It works especially well for detached homes, semi-detached homes, condos, basement apartments, and busy family kitchens.
              </p>

              {/* Visual Table */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-12 border-t border-border-custom">
                Quartz vs. Granite Comparison Chart
              </h2>
              <div className="overflow-x-auto border border-border-custom rounded-2xl bg-white shadow-sm mb-12 min-w-full">
                <table className="w-full text-left border-collapse min-w-[600px] text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#0E1116] text-white">
                      <th className="p-4 font-bold uppercase tracking-wider">Category</th>
                      <th className="p-4 font-bold uppercase tracking-wider">Quartz</th>
                      <th className="p-4 font-bold uppercase tracking-wider">Granite</th>
                      <th className="p-4 font-bold uppercase tracking-wider">Winner</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-custom text-text-primary">
                    {[
                      { cat: 'Maintenance', quartz: 'Very low maintenance', granite: 'Requires more care', winner: 'Quartz' },
                      { cat: 'Sealing', quartz: 'No sealing required', granite: 'Often needs sealing', winner: 'Quartz' },
                      { cat: 'Stain resistance', quartz: 'Excellent', granite: 'Good if sealed', winner: 'Quartz' },
                      { cat: 'Heat resistance', quartz: 'Good, but direct heat can damage it', granite: 'Better heat resistance', winner: 'Granite' },
                      { cat: 'Scratch resistance', quartz: 'Strong', granite: 'Strong', winner: 'Tie' },
                      { cat: 'Appearance', quartz: 'Consistent, modern, many colours', granite: 'Natural and unique', winner: 'Tie' },
                      { cat: 'Cleaning', quartz: 'Easy with mild soap and water', granite: 'Needs stone-safe care', winner: 'Quartz' },
                      { cat: 'Resale appeal', quartz: 'Strong for modern kitchens', granite: 'Depends on slab style', winner: 'Quartz' },
                      { cat: 'Pattern consistency', quartz: 'Very consistent', granite: 'Varies by slab', winner: 'Quartz' },
                      { cat: 'Natural character', quartz: 'Engineered', granite: '100% natural stone', winner: 'Granite' },
                      { cat: 'Best for busy families', quartz: 'Excellent', granite: 'Good', winner: 'Quartz' },
                      { cat: 'Best for stone lovers', quartz: 'Good stone-look options', granite: 'Excellent', winner: 'Granite' },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50">
                        <td className="p-4 font-bold uppercase tracking-wider text-[10px] text-text-muted">{row.cat}</td>
                        <td className="p-4 font-medium">{row.quartz}</td>
                        <td className="p-4 font-medium">{row.granite}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                            row.winner === 'Quartz' ? 'bg-accent/10 text-accent' : 
                            row.winner === 'Granite' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {row.winner}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* When Should You Choose Quartz? */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                When Should You Choose Quartz?
              </h2>
              <p>Choose quartz if you want:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-sm text-gray-600">
                <li>A low-maintenance countertop with no sealing requirements.</li>
                <li>Excellent stain resistance for cooking, coffee, or wine spills.</li>
                <li>Modern colour options and consistent slab appearance.</li>
                <li>A family-friendly kitchen surface that looks like marble without marble maintenance.</li>
              </ul>

              {/* When Should You Choose Granite? */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                When Should You Choose Granite?
              </h2>
              <p>Choose granite if you want:</p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-sm text-gray-600">
                <li>A 100% natural stone slab with unique variation and mineral movement.</li>
                <li>Strong heat resistance directly on the countertop.</li>
                <li>A traditional stone character and one-of-a-kind kitchen feature.</li>
              </ul>

              {/* The Final Verdict */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-6 border-t border-border-custom">
                The Final Verdict
              </h2>
              <p>
                Quartz is the better countertop choice for most homeowners in 2026.
              </p>
              <p>
                Granite is still beautiful, durable, and valuable, but quartz offers the features most homeowners now prioritize: low maintenance, stain resistance, no sealing, modern colours, and consistent design. With simple heat protection (trivets and pads), quartz performs exceptionally well in everyday kitchens.
              </p>
              <p className="font-semibold text-text-primary">
                Final verdict: Quartz wins for most homes. Granite wins for natural stone lovers.
              </p>

              {/* FAQs */}
              <h2 className="text-xl md:text-2xl font-bold text-text-primary pt-12 border-t border-border-custom">
                FAQs About Quartz vs. Granite
              </h2>
              <div className="space-y-6 text-xs border-b border-border-custom pb-12">
                {[
                  { q: "Is quartz better than granite?", a: "Quartz is better than granite for most homeowners who want low maintenance, stain resistance, and no sealing. Granite is better for homeowners who want natural stone character and stronger heat resistance." },
                  { q: "Which is easier to maintain, quartz or granite?", a: "Quartz is easier to maintain because it is non-porous and does not need sealing. Granite may need periodic sealing to protect against stains." },
                  { q: "Which lasts longer, quartz or granite?", a: "Both quartz and granite can last for many years when properly installed and cared for. Quartz usually requires less maintenance over time, while granite depends more on sealing and stone care." },
                  { q: "Does quartz need to be sealed?", a: "No. Quartz does not need to be sealed. In fact, quartz manufacturers generally advise against using sealers on quartz surfaces." },
                  { q: "Does granite need to be sealed?", a: "Many granite countertops should be sealed to help protect against stains. The need for sealing depends on the specific granite slab, finish, and use." },
                  { q: "Can you put hot pans on quartz?", a: "No. You should not place hot pans directly on quartz. Use trivets or heat pads to prevent heat damage." },
                  { q: "Can you put hot pans on granite?", a: "Granite has better heat resistance than quartz, but it is still smart to use trivets to protect the stone and sealer from repeated high heat exposure." },
                  { q: "Which looks better, quartz or granite?", a: "This depends on personal preference. Granite looks more natural and unique. Quartz offers cleaner, more consistent, modern designs." },
                  { q: "Which is better for resale, quartz or granite?", a: "Quartz is usually better for modern resale because many buyers prefer low-maintenance surfaces and lighter, more current countertop colours." }
                ].map((faq, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-text-primary mb-1">{faq.q}</h4>
                    <p className="text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* In-article CTA block */}
            <div className="mt-16 p-8 bg-white border border-border-custom rounded-3xl text-center shadow-sm">
              <h3 className="text-2xl font-bold mb-3">Planning a GTA Kitchen Renovation?</h3>
              <p className="text-text-muted text-sm mb-6">Use our instant countertop price estimator to get an accurate budget estimate in 30 seconds.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/estimate" className="btn-primary py-4 px-8 text-xs font-bold uppercase tracking-widest text-center">
                  Get Instant Estimate
                </Link>
                <Link to="/cost" className="bg-background border border-border-custom py-4 px-8 rounded-[var(--radius-button)] text-xs font-bold text-text-primary hover:border-accent transition-all text-center flex items-center justify-center">
                  View Cost Guide
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Placeholder views for other posts
  if (activePostId !== null) {
    const post = POSTS.find(p => p.id === activePostId);
    return (
      <div className="bg-background pt-24 pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setActivePostId(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest hover:text-text-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to insights
          </button>
          <div className="bg-white border border-border-custom p-10 rounded-3xl">
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-4">{post?.date}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post?.title}</h1>
            <p className="text-text-muted leading-relaxed mb-8">{post?.excerpt}</p>
            <div className="border-t border-border-custom pt-8 space-y-4">
              <p className="text-gray-500 italic text-sm">Full guide content for this article is being finalized by the Quartz International design team. Check back soon for the complete publication.</p>
              <Link to="/cost" className="btn-primary w-fit mt-4">
                Browse Countertop Pricing Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Newspaper size={14} />
            Insights & Guides
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-text-primary uppercase">Kitchen Design Blog</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">Stay informed with the latest industry news and expert design advice.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <div key={post.id} className="glass-panel p-10 bg-white hover:border-accent transition-all group flex flex-col justify-between rounded-3xl">
              <div>
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">{post.date}</p>
                <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-8">{post.excerpt}</p>
              </div>
              <button 
                onClick={() => setActivePostId(post.id)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-primary group-hover:gap-4 transition-all mt-auto w-fit"
              >
                Read More <ArrowRight size={14} className="text-accent" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
