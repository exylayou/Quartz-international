import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Calculator,
  Grid,
  ChevronRight
} from 'lucide-react';
import { useCalculator } from '../context/CalculatorContext';

// Import swatches
import pureWhiteSlab from '../assets/images/pure_white_slab.png';
import whitishMapleFlat from '../assets/images/whitish_maple_flat.png';
import naturalWoodSlab from '../assets/images/natural_wood_slab.png';
import smokedOakSlab from '../assets/images/smoked_oak_slab.png';
import shakerDoors from '../assets/images/shaker_doors.png';
import slimShakerDoors from '../assets/images/slim_shaker_doors.png';
import highGlossDoors from '../assets/images/high_gloss_doors.png';
import matteDoors from '../assets/images/matte_doors.png';
import woodShakerDoor from '../assets/images/wood_shaker_door.png';
import mattBlackSlab from '../assets/images/matt_black_slab.png';
import mattGreySlab from '../assets/images/matt_grey_slab.png';
import mattWhiteSlab from '../assets/images/matt_white_slab.png';
import mattAshSlab from '../assets/images/matt_ash_slab.png';

// New Shaker image uploads
import whiteShakerNew from '../assets/images/white_shaker_new.jpg';
import blueShakerNew from '../assets/images/blue_shaker_new.png';
import grayShakerNew from '../assets/images/gray_shaker_new.png';

// Gloss swatch uploads
import glossWhite from '../assets/images/gloss_white.jpg';
import glossAsh from '../assets/images/gloss_ash.jpg';
import glossGray from '../assets/images/gloss_gray.jpg';
import slimShakerWhiteNew from '../assets/images/slim_shaker_white_new.jpg';

// Import collection lifestyle banners
import essentialKitchenBanner from '../assets/images/essential_kitchen_banner.jpg';
import premiumKitchenBanner from '../assets/images/premium_kitchen_banner.png';
import eliteKitchenBanner from '../assets/images/elite_kitchen_banner.jpg';

// Import kitchen project images for examples
import condoKitchen from '../assets/images/condo_kitchen.png';
import familyKitchen from '../assets/images/family_kitchen.png';
import highGlossKitchen from '../assets/images/high_gloss_kitchen.png';
import modernTwoTone from '../assets/images/modern_two_tone.png';
import suburbanRemodel from '../assets/images/suburban_remodel.png';

interface FinishItem {
  id: string;
  name: string;
  collection: 'essential' | 'premium' | 'elite';
  style: 'Flat Panel' | 'Shaker' | 'Slim Shaker' | 'High Gloss' | 'Matte' | 'Designer';
  colorGroup: 'white' | 'wood' | 'grey-black' | 'blue';
  swatchImg: string;
  kitchenImg: string;
  desc: string;
}

const FINISHES: FinishItem[] = [
  {
    id: 'pure-white',
    name: 'Pure White',
    collection: 'essential',
    style: 'Flat Panel',
    colorGroup: 'white',
    swatchImg: pureWhiteSlab,
    kitchenImg: condoKitchen,
    desc: 'Clean, crisp white flat slab door offering an ultra-minimal modern look.'
  },
  {
    id: 'whitish-maple',
    name: 'Whitish Maple',
    collection: 'essential',
    style: 'Flat Panel',
    colorGroup: 'wood',
    swatchImg: whitishMapleFlat,
    kitchenImg: familyKitchen,
    desc: 'Soft, light maple wood texture adding warmth and Scandinavian appeal.'
  },
  {
    id: 'natural-wood',
    name: 'Natural Wood',
    collection: 'essential',
    style: 'Flat Panel',
    colorGroup: 'wood',
    swatchImg: naturalWoodSlab,
    kitchenImg: familyKitchen,
    desc: 'Warm oak wood grain displaying natural beauty and modern organic styling.'
  },
  {
    id: 'smoked-oak',
    name: 'Smoked Oak',
    collection: 'essential',
    style: 'Flat Panel',
    colorGroup: 'wood',
    swatchImg: smokedOakSlab,
    kitchenImg: modernTwoTone,
    desc: 'Rich, dark-toned oak slab giving a sophisticated, grounded kitchen feel.'
  },
  {
    id: 'premium-white-shaker',
    name: 'White Shaker',
    collection: 'premium',
    style: 'Shaker',
    colorGroup: 'white',
    swatchImg: whiteShakerNew,
    kitchenImg: condoKitchen,
    desc: 'Timeless shaker door construction with a clean, semi-matte white painted finish.'
  },
  {
    id: 'premium-blue-shaker',
    name: 'Blue Shaker',
    collection: 'premium',
    style: 'Shaker',
    colorGroup: 'blue',
    swatchImg: blueShakerNew,
    kitchenImg: suburbanRemodel,
    desc: 'Elegant deep navy blue shaker door perfect for bold, transitional kitchen islands.'
  },
  {
    id: 'premium-gray-shaker',
    name: 'Gray Shaker',
    collection: 'premium',
    style: 'Shaker',
    colorGroup: 'grey-black',
    swatchImg: grayShakerNew,
    kitchenImg: modernTwoTone,
    desc: 'Modern and versatile gray shaker door offering a balanced, sophisticated aesthetic.'
  },
  {
    id: 'slim-shaker-white',
    name: 'Slim Shaker White',
    collection: 'elite',
    style: 'Slim Shaker',
    colorGroup: 'white',
    swatchImg: slimShakerWhiteNew,
    kitchenImg: modernTwoTone,
    desc: 'Modern shaker detailing with delicate slim stiles and rails for refined borders.'
  },
  {
    id: 'gloss-white',
    name: 'Gloss White',
    collection: 'premium',
    style: 'High Gloss',
    colorGroup: 'white',
    swatchImg: glossWhite,
    kitchenImg: highGlossKitchen,
    desc: 'Mirror-like high gloss PET finish that reflects light and expands room spaces.'
  },
  {
    id: 'gloss-ash',
    name: 'Gloss Ash',
    collection: 'premium',
    style: 'High Gloss',
    colorGroup: 'grey-black',
    swatchImg: glossAsh,
    kitchenImg: highGlossKitchen,
    desc: 'Deep charcoal high gloss finish with a dramatic mirror-like sheen for modern kitchens.'
  },
  {
    id: 'gloss-gray',
    name: 'Gloss Gray',
    collection: 'premium',
    style: 'High Gloss',
    colorGroup: 'grey-black',
    swatchImg: glossGray,
    kitchenImg: highGlossKitchen,
    desc: 'Sophisticated silver-gray high gloss surface combining neutral tone with reflective depth.'
  },
  {
    id: 'matt-white',
    name: 'Matt White',
    collection: 'premium',
    style: 'Matte',
    colorGroup: 'white',
    swatchImg: mattWhiteSlab,
    kitchenImg: condoKitchen,
    desc: 'Velvety matte white finish with anti-fingerprint surface technology.'
  },
  {
    id: 'matt-ash',
    name: 'Matt Ash',
    collection: 'premium',
    style: 'Matte',
    colorGroup: 'grey-black',
    swatchImg: mattAshSlab,
    kitchenImg: suburbanRemodel,
    desc: 'Warm mid-tone matte ash finish with silky anti-fingerprint surface for contemporary kitchens.'
  },
  {
    id: 'matt-grey',
    name: 'Matt Grey',
    collection: 'premium',
    style: 'Matte',
    colorGroup: 'grey-black',
    swatchImg: mattGreySlab,
    kitchenImg: suburbanRemodel,
    desc: 'Sleek, modern charcoal grey matte flat panel offering muted luxury.'
  },
  {
    id: 'matt-black',
    name: 'Matt Black',
    collection: 'premium',
    style: 'Matte',
    colorGroup: 'grey-black',
    swatchImg: mattBlackSlab,
    kitchenImg: modernTwoTone,
    desc: 'Ultra-matte deep black door making a bold statement in architectural kitchens.'
  },
  {
    id: 'designer-slim-shaker-oak',
    name: 'Designer Slim Shaker Oak',
    collection: 'elite',
    style: 'Designer',
    colorGroup: 'wood',
    swatchImg: woodShakerDoor,
    kitchenImg: suburbanRemodel,
    desc: 'Luxury rift-cut natural oak slim shaker showing premium craftsmanship.'
  }
];

export default function CabinetFinishes() {
  const { state, openCalculator } = useCalculator();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const hasScrolledRef = useRef(false);

  // Filters State
  const [filterCollection, setFilterCollection] = useState<string>('all');
  const [filterStyle, setFilterStyle] = useState<string>('all');
  const [filterColor, setFilterColor] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active kitchen preview modal
  const [activePreview, setActivePreview] = useState<FinishItem | null>(null);

  // Set collection filter based on query parameter
  useEffect(() => {
    const col = searchParams.get('collection');
    if (col && ['essential', 'premium', 'elite'].includes(col.toLowerCase())) {
      setFilterCollection(col.toLowerCase());
      
      // Only scroll on initial mount / page load
      if (!hasScrolledRef.current) {
        hasScrolledRef.current = true;
        setTimeout(() => {
          const el = document.getElementById('catalog-grid');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [searchParams]);

  // Filter Logic
  const filteredFinishes = FINISHES.filter(item => {
    const matchesCollection = filterCollection === 'all' || item.collection === filterCollection;
    const matchesStyle = filterStyle === 'all' || item.style === filterStyle;
    const matchesColor = filterColor === 'all' || item.colorGroup === filterColor;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.style.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.collection.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCollection && matchesStyle && matchesColor && matchesSearch;
  });

  const handleEstimateFinish = (item: FinishItem) => {
    openCalculator({
      type: 'full-kitchen',
      deliveryMethod: state.deliveryMethod,
      cabinetStyle: item.collection,
      cabinetDoorStyle: item.name,
      step: 5
    });
  };

  const scrollToOverview = () => {
    const el = document.getElementById('collection-overview');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#1A1A1A]">
      
      {/* SECTION 1 — HERO */}
      <section className="relative pt-20 pb-24 bg-gradient-to-b from-[#FAF8F5] to-white border-b border-[#E5E2DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <span className="text-[#C6A87D] font-bold uppercase tracking-[0.3em] text-[10px] block">
              Cabinet Catalog
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary">
              Cabinet Colours & Finishes
            </h1>
            <p className="text-[#555] text-lg max-w-xl mx-auto leading-relaxed font-medium">
              Explore every collection, style, and finish available for your kitchen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button 
              onClick={() => {
                const el = document.getElementById('catalog-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-[#C6A87D] hover:bg-[#b09164] text-white font-bold py-4 px-8 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
            >
              Browse Finishes
            </button>
            <button 
              onClick={scrollToOverview}
              className="w-full sm:w-auto bg-white hover:bg-gray-50 border border-[#E5E2DC] text-[#1A1A1A] font-bold py-4 px-8 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer"
            >
              View Collections
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 — FILTER BAR (STIKCY) */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E5E2DC] py-4 shadow-sm" id="catalog-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Collection Filter */}
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider mb-1">Collection</span>
              <select 
                value={filterCollection} 
                onChange={(e) => {
                  const val = e.target.value;
                  setFilterCollection(val);
                  if (val === 'all') {
                    setSearchParams({});
                  } else {
                    setSearchParams({ collection: val });
                  }
                }}
                className="bg-white border border-[#E5E2DC] rounded-xl px-4 py-2 text-xs font-bold text-[#1A1A1A] focus:outline-none focus:border-[#C6A87D]"
              >
                <option value="all">All Collections</option>
                <option value="essential">Essential Collection</option>
                <option value="premium">Premium Collection</option>
                <option value="elite">Elite Collection</option>
              </select>
            </div>

            {/* Style Filter */}
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider mb-1">Style</span>
              <select 
                value={filterStyle} 
                onChange={(e) => setFilterStyle(e.target.value)}
                className="bg-white border border-[#E5E2DC] rounded-xl px-4 py-2 text-xs font-bold text-[#1A1A1A] focus:outline-none focus:border-[#C6A87D]"
              >
                <option value="all">All Styles</option>
                <option value="Flat Panel">Flat Panel</option>
                <option value="Shaker">Shaker</option>
                <option value="Slim Shaker">Slim Shaker</option>
                <option value="High Gloss">High Gloss</option>
                <option value="Matte">Matte</option>
                <option value="Designer">Designer</option>
              </select>
            </div>

            {/* Color Group Filter */}
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider mb-1">Color Group</span>
              <select 
                value={filterColor} 
                onChange={(e) => setFilterColor(e.target.value)}
                className="bg-white border border-[#E5E2DC] rounded-xl px-4 py-2 text-xs font-bold text-[#1A1A1A] focus:outline-none focus:border-[#C6A87D]"
              >
                <option value="all">All Colors</option>
                <option value="white">White</option>
                <option value="wood">Wood grain</option>
                <option value="grey-black">Grey & Black</option>
                <option value="blue">Blue</option>
              </select>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex flex-col w-full md:w-64">
            <span className="text-[8px] font-black text-gray-400 uppercase tracking-wider mb-1">Search Finish</span>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search Pure White, Shaker..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E5E2DC] rounded-xl pl-9 pr-4 py-2 text-xs font-bold focus:outline-none focus:border-[#C6A87D]"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={14} />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 text-gray-400 hover:text-text-primary">
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 3 — FINISH GRID */}
      <section className="py-16 bg-white min-h-[400px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
              Showing {filteredFinishes.length} of {FINISHES.length} Finishes
            </p>
            {(filterCollection !== 'all' || filterStyle !== 'all' || filterColor !== 'all' || searchQuery) && (
              <button 
                onClick={() => {
                  setFilterCollection('all');
                  setFilterStyle('all');
                  setFilterColor('all');
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="text-xs text-[#C6A87D] hover:text-[#b09164] font-bold uppercase tracking-wider underline cursor-pointer"
              >
                Clear Filters
              </button>
            )}
          </div>

          {filteredFinishes.length === 0 ? (
            <div className="text-center py-20 bg-[#FAF8F5] border border-dashed border-[#E5E2DC] rounded-3xl">
              <SlidersHorizontal className="mx-auto text-gray-400 mb-4 animate-bounce" size={40} />
              <h4 className="text-lg font-bold text-text-primary">No Finishes Found</h4>
              <p className="text-xs text-gray-500 mt-1">Try resetting your filter parameters or search query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredFinishes.map((item) => (
                <div key={item.id} className="bg-[#FAF8F5] border border-[#E5E2DC] rounded-3xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow group">
                  <div>
                    {/* Swatch image container */}
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#E8E8E8] border border-[#E5E2DC] p-2 flex items-center justify-center relative">
                      <img src={item.swatchImg} alt={item.name} className="w-full h-full object-contain rounded-xl" />
                    </div>

                    <div className="mt-4 px-1">
                      <div className="flex justify-between items-center">
                        <span className="text-[8px] bg-white border border-[#E5E2DC] text-gray-400 font-extrabold uppercase tracking-wider px-2 py-0.5 rounded">
                          {item.collection} Collection
                        </span>
                        <span className="text-[9px] font-bold text-[#C6A87D] uppercase tracking-wider">{item.style}</span>
                      </div>
                      <h4 className="text-base font-black text-text-primary mt-2">{item.name}</h4>
                      <p className="text-[11px] text-gray-400 leading-normal mt-1.5 font-medium line-clamp-2">{item.desc}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E5E2DC] flex flex-col gap-2">
                    <button 
                      onClick={() => handleEstimateFinish(item)}
                      className="w-full bg-[#1A1A1A] hover:bg-[#333] text-white font-bold py-3 px-4 rounded-full text-[10px] uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Calculator size={12} />
                      Estimate This Finish
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* SECTION 4 — COLLECTION OVERVIEW */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#E5E2DC]" id="collection-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <span className="text-[#C6A87D] font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Cabinet Lineup
            </span>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-text-primary tracking-tight font-sans">
              Collection Overview
            </h2>
          </div>

          <div className="space-y-16">
            
            {/* 1. Essential Collection Overview */}
            <div className="bg-white border border-[#E5E2DC] rounded-[3rem] overflow-hidden p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 aspect-[16/10] rounded-3xl overflow-hidden border border-[#E5E2DC] shadow-sm">
                <img src={essentialKitchenBanner} alt="Essential Kitchen Banner" className="w-full h-full object-cover" />
              </div>
              <div className="w-full lg:w-1/2 text-left space-y-6">
                <div>
                  <span className="text-[#C6A87D] font-bold uppercase tracking-[0.2em] text-[9px] mb-1.5 block">Baseline Value</span>
                  <h3 className="text-2xl font-black text-text-primary uppercase tracking-tight">Essential Collection</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">Modern Minimal Flat Panels</p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  Sleek slab and flat-panel designs engineered for durability and contemporary styling. Perfect for builders, property investors, and homeowners aiming for a clean, minimal European kitchen layout at direct factory value.
                </p>
                <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs font-semibold text-gray-600">
                  <div>
                    <h5 className="font-extrabold text-[#1A1A1A] uppercase tracking-wider text-[10px] mb-1">Available Styles:</h5>
                    <p>Modern Flat Panel</p>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#1A1A1A] uppercase tracking-wider text-[10px] mb-1">Available Finishes:</h5>
                    <p>Pure White, Whitish Maple, Natural Wood, Smoked Oak</p>
                  </div>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => openCalculator({ type: 'full-kitchen', deliveryMethod: state.deliveryMethod, cabinetStyle: 'essential', step: 5 })}
                    className="bg-[#1A1A1A] hover:bg-[#333] text-white font-bold py-4.5 px-8 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2"
                  >
                    Estimate Essential Collection <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* 2. Premium Collection Overview (Alternating) */}
            <div className="bg-white border border-[#E5E2DC] rounded-[3rem] overflow-hidden p-8 md:p-12 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 aspect-[16/10] rounded-3xl overflow-hidden border border-[#E5E2DC] shadow-sm">
                <img src={premiumKitchenBanner} alt="Premium Kitchen Banner" className="w-full h-full object-cover" />
              </div>
              <div className="w-full lg:w-1/2 text-left space-y-6">
                <div>
                  <span className="text-[#C6A87D] font-bold uppercase tracking-[0.2em] text-[9px] mb-1.5 block">Most Popular Choice</span>
                  <h3 className="text-2xl font-black text-text-primary uppercase tracking-tight">Premium Collection</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">Matte, Gloss & Shaker Styling</p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  Elevated finishes featuring classic and contemporary designs. Built from high-quality core panels with advanced PET gloss/matte film laminate or painted lacquers. Perfect for standard family renovations demanding robust wear resistance and beautiful visual depth.
                </p>
                <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs font-semibold text-gray-600">
                  <div>
                    <h5 className="font-extrabold text-[#1A1A1A] uppercase tracking-wider text-[10px] mb-1">Available Styles:</h5>
                    <p>Shaker, Slim Shaker, High Gloss, Matte</p>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#1A1A1A] uppercase tracking-wider text-[10px] mb-1">Available Finishes:</h5>
                    <p>White Shaker, Blue Shaker, Gray Shaker, Gloss White, Gloss Ash, Gloss Gray, Matt White, Matt Ash, Matt Grey, Matt Black</p>
                  </div>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => openCalculator({ type: 'full-kitchen', deliveryMethod: state.deliveryMethod, cabinetStyle: 'premium', step: 5 })}
                    className="bg-[#C6A87D] hover:bg-[#b09164] text-white font-bold py-4.5 px-8 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2"
                  >
                    Estimate Premium Collection <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Elite Collection Overview */}
            <div className="bg-white border border-[#E5E2DC] rounded-[3rem] overflow-hidden p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2 aspect-[16/10] rounded-3xl overflow-hidden border border-[#E5E2DC] shadow-sm">
                <img src={eliteKitchenBanner} alt="Elite Kitchen Banner" className="w-full h-full object-cover" />
              </div>
              <div className="w-full lg:w-1/2 text-left space-y-6">
                <div>
                  <span className="text-[#C6A87D] font-bold uppercase tracking-[0.2em] text-[9px] mb-1.5 block">Architectural Luxury</span>
                  <h3 className="text-2xl font-black text-text-primary uppercase tracking-tight">Elite Collection</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-1">Bespoke Lacquer & Exotic Veneers</p>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                  Designer-grade details utilizing exotic real wood veneers and premium multi-layer bespoke painted lacquers. Built to order for architectural luxury spaces requesting unique texture alignments, integrated handle layouts, and hand-finished details.
                </p>
                <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs font-semibold text-gray-600">
                  <div>
                    <h5 className="font-extrabold text-[#1A1A1A] uppercase tracking-wider text-[10px] mb-1">Available Styles:</h5>
                    <p>Designer Slim Shaker, Exotic Slab</p>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#1A1A1A] uppercase tracking-wider text-[10px] mb-1">Available Finishes:</h5>
                    <p>Bespoke painted lacquer, rift-cut natural white oak, smoked dark walnut</p>
                  </div>
                </div>
                <div className="pt-4">
                  <button 
                    onClick={() => openCalculator({ type: 'full-kitchen', deliveryMethod: state.deliveryMethod, cabinetStyle: 'elite', step: 5 })}
                    className="bg-[#1A1A1A] hover:bg-[#333] text-white font-bold py-4.5 px-8 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center gap-2"
                  >
                    Estimate Elite Collection <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5 — FINAL CTA */}
      <section className="py-24 bg-[#0E1116] text-white relative overflow-hidden text-center border-t border-[#C6A87D]/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A87D]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="space-y-4">
            <span className="text-[#C6A87D] font-bold uppercase tracking-[0.3em] text-[10px] block">
              Budget Calculator
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Ready To Build Your Kitchen?
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Get a budget range instantly based on your preferred cabinet finish.
            </p>
          </div>

          <div>
            <button 
              onClick={() => {
                const el = document.getElementById('catalog-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#C6A87D] hover:bg-[#b09164] text-white font-bold py-5 px-12 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg shadow-[#C6A87D]/20 inline-flex items-center gap-2"
            >
              Select Finish to Estimate <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* VIEW KITCHEN EXAMPLE MODAL */}
      <AnimatePresence>
        {activePreview && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2.5rem] overflow-hidden max-w-4xl w-full shadow-2xl relative border border-[#E5E2DC]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActivePreview(null)}
                className="absolute top-6 right-6 z-10 bg-white/90 hover:bg-white text-text-primary p-2.5 rounded-full border border-[#E5E2DC] hover:border-[#C6A87D] shadow transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>

              <div className="flex flex-col md:flex-row h-full max-h-[90vh] md:max-h-[600px]">
                {/* Left side: large kitchen preview */}
                <div className="w-full md:w-3/5 bg-gray-100 relative min-h-[300px] md:min-h-full">
                  <img src={activePreview.kitchenImg} alt={activePreview.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Floating details on image */}
                  <div className="absolute bottom-6 left-6 text-white space-y-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#C6A87D]">Example Layout Preview</p>
                    <h5 className="text-xl font-bold">{activePreview.name} Kitchen Design</h5>
                  </div>
                </div>

                {/* Right side: details and CTA */}
                <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-between overflow-y-auto">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[8px] bg-gray-100 border border-[#E5E2DC] text-gray-500 font-extrabold uppercase tracking-wider px-2 py-0.5 rounded">
                        {activePreview.collection} Collection
                      </span>
                      <h4 className="text-2xl font-black text-text-primary mt-2">{activePreview.name}</h4>
                      <p className="text-xs font-bold text-[#C6A87D] uppercase tracking-widest mt-1">{activePreview.style} Style</p>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed font-semibold">
                      {activePreview.desc}
                    </p>

                    {/* Miniature swatch inside modal */}
                    <div className="flex items-center gap-3 bg-[#FAF8F5] border border-[#E5E2DC] p-3 rounded-2xl">
                      <div className="w-12 h-15 rounded-xl overflow-hidden bg-white border border-[#E5E2DC] shrink-0 p-1 flex items-center justify-center">
                        <img src={activePreview.swatchImg} alt={activePreview.name} className="w-full h-full object-cover rounded-lg" />
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Selected Swatch</p>
                        <p className="text-xs font-bold text-text-primary mt-0.5">{activePreview.name}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-[#E5E2DC] mt-8">
                    <button 
                      onClick={() => {
                        handleEstimateFinish(activePreview);
                        setActivePreview(null);
                      }}
                      className="w-full bg-[#C6A87D] hover:bg-[#b09164] text-white font-bold py-4 px-6 rounded-full text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow"
                    >
                      <Calculator size={14} />
                      Estimate This Finish →
                    </button>
                    <button 
                      onClick={() => setActivePreview(null)}
                      className="w-full bg-white hover:bg-gray-50 text-gray-500 font-bold py-4 px-6 rounded-full text-xs uppercase tracking-widest border border-[#E5E2DC] transition-all cursor-pointer flex items-center justify-center"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
