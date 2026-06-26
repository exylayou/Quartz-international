import { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, ArrowRight, Paintbrush, Search, X, User, Phone, Mail, MapPin, FileText, CheckCircle2, Sparkles, Eye, Columns3, LayoutGrid } from 'lucide-react';
import { SEO } from '../components/SEO';
import { materials, type SlabMaterial } from '../data/materials';
import { toPng } from 'html-to-image';

/* ────────────────────────────────────────────────
   Cabinet preset options
   ──────────────────────────────────────────────── */
const CABINET_OPTIONS = [
  { id: 'white', name: 'Classic White Shaker', color: '#f8f9fa', baseImage: '/images/visualizer/viz_white_white.png' },
  { id: 'navy', name: 'Navy Blue', color: '#1e3a5f', baseImage: '/images/visualizer/viz_navy_calacatta.png' },
  { id: 'wood', name: 'Natural Oak', color: '#c4a484', baseImage: '/images/visualizer/viz_wood_grey.png' },
  { id: 'grey', name: 'Charcoal Grey', color: '#333333', baseImage: '/images/visualizer/viz_grey_black.png' },
];

const COUNTERTOP_MASK_BY_CABINET: Record<string, string> = {
  white: '/images/visualizer/mask_white.png',
  navy: '/images/visualizer/mask_navy.png',
  wood: '/images/visualizer/mask_wood.png',
  grey: '/images/visualizer/mask_grey.png',
};

/* ────────────────────────────────────────────────
   Brand ordering for the slab catalog
   ──────────────────────────────────────────────── */
const BRAND_ORDER = ['Caesarstone', 'TCE Stone', 'Kstone', 'Silestone', 'Lucent Quartz', 'Kasa Quartz', 'Sio4'];

function groupByBrand(slabs: SlabMaterial[]) {
  const map = new Map<string, SlabMaterial[]>();
  for (const s of slabs) {
    const list = map.get(s.brand) || [];
    list.push(s);
    map.set(s.brand, list);
  }
  // Sort by BRAND_ORDER
  const sorted: [string, SlabMaterial[]][] = [];
  for (const b of BRAND_ORDER) {
    if (map.has(b)) sorted.push([b, map.get(b)!]);
  }
  // Any remaining brands
  for (const [b, list] of map) {
    if (!BRAND_ORDER.includes(b)) sorted.push([b, list]);
  }
  return sorted;
}

/* ────────────────────────────────────────────────
   GTA cities for the lead form
   ──────────────────────────────────────────────── */
const GTA_CITIES = [
  'Toronto', 'Mississauga', 'Brampton', 'Markham', 'Vaughan',
  'Richmond Hill', 'Oakville', 'Burlington', 'Hamilton', 'Scarborough',
  'North York', 'Etobicoke', 'Ajax', 'Pickering', 'Oshawa',
  'Newmarket', 'Aurora', 'Whitby', 'Milton', 'Other'
];

type FocusMode = 'full' | 'countertop' | 'cabinet';

/* ────────────────────────────────────────────────
   Main Component
   ──────────────────────────────────────────────── */
export default function KitchenVisualizer() {
  const [selectedCabinet, setSelectedCabinet] = useState('white');
  const [selectedSlab, setSelectedSlab] = useState<SlabMaterial>(materials[0]);
  const [focusMode, setFocusMode] = useState<FocusMode>('full');
  const [slabSearch, setSlabSearch] = useState('');
  const [showLeadModal, setShowLeadModal] = useState(false);

  const visualizerRef = useRef<HTMLDivElement>(null);

  const activeCabinet = CABINET_OPTIONS.find(c => c.id === selectedCabinet)!;
  const activeMask = COUNTERTOP_MASK_BY_CABINET[selectedCabinet] || COUNTERTOP_MASK_BY_CABINET.white;

  /* ── Filtered slab list ── */
  const filteredSlabs = useMemo(() => {
    if (!slabSearch.trim()) return materials;
    const q = slabSearch.toLowerCase();
    return materials.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.brand.toLowerCase().includes(q) ||
      s.category.toLowerCase().includes(q)
    );
  }, [slabSearch]);

  const groupedSlabs = useMemo(() => groupByBrand(filteredSlabs), [filteredSlabs]);

  /* ── Focus mode helpers ── */
  const showCabinets = focusMode === 'full' || focusMode === 'cabinet';
  const showCountertop = focusMode === 'full' || focusMode === 'countertop';

  return (
    <div className="bg-gray-50 min-h-screen font-sans selection:bg-accent/30 pt-24 pb-12">
      <SEO
        title="Interactive Kitchen Visualizer | Quartz International"
        description="Design your dream kitchen. Mix and match cabinet colors and premium quartz countertops from Caesarstone, TCE Stone, and more in our interactive visualizer."
      />

      {/* Lead Modal */}
      <AnimatePresence>
        {showLeadModal && (
          <LeadCaptureModal
            onClose={() => setShowLeadModal(false)}
            visualizerRef={visualizerRef}
            selectedCabinet={activeCabinet.name}
            selectedSlab={selectedSlab}
          />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Sparkles size={14} />
            Interactive Preview
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Kitchen Visualizer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mix and match cabinet finishes with premium quartz countertops from our full catalog.
          </p>
        </div>

        {/* Focus Mode Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-2xl border border-gray-200 inline-flex shadow-sm">
            {([
              { id: 'full', label: 'Full Kitchen', icon: LayoutGrid },
              { id: 'countertop', label: 'Countertop Focus', icon: Eye },
              { id: 'cabinet', label: 'Cabinet Focus', icon: Columns3 },
            ] as const).map(tab => (
              <button
                key={tab.id}
                onClick={() => setFocusMode(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  focusMode === tab.id ? 'bg-accent text-white shadow-md' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <tab.icon size={15} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* ──────────── Left: Visualizer Viewport ──────────── */}
          <div className="lg:w-2/3 flex flex-col">
            <div
              ref={visualizerRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] w-full flex-grow"
            >
              {/* Layer 1: Cabinet base image */}
              <img
                src={activeCabinet.baseImage}
                alt="Kitchen base"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Layer 2: Slab texture masked to countertop area */}
              {showCountertop && (
                <motion.div
                  key={selectedSlab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${selectedSlab.img})`,
                    backgroundSize: '600px 600px',
                    backgroundRepeat: 'repeat',
                    WebkitMaskImage: `url(${activeMask})`,
                    maskImage: `url(${activeMask})`,
                    WebkitMaskSize: 'cover',
                    maskSize: 'cover',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                  }}
                />
              )}

              {/* Layer 3: Shadow overlay (multiply) for depth */}
              {showCountertop && (
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    backgroundImage: `url(${activeCabinet.baseImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'multiply',
                    opacity: 0.7,
                    WebkitMaskImage: `url(${activeMask})`,
                    maskImage: `url(${activeMask})`,
                    WebkitMaskSize: 'cover',
                    maskSize: 'cover',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    filter: 'grayscale(1) brightness(0.85)',
                  }}
                />
              )}

              {/* Layer 4: Highlight overlay (screen) for gloss */}
              {showCountertop && (
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    backgroundImage: `url(${activeCabinet.baseImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'screen',
                    opacity: 0.35,
                    WebkitMaskImage: `url(${activeMask})`,
                    maskImage: `url(${activeMask})`,
                    WebkitMaskSize: 'cover',
                    maskSize: 'cover',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    filter: 'contrast(3) brightness(0.3) grayscale(1)',
                  }}
                />
              )}

              {/* Active slab tag */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg border border-gray-100 z-10">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-0.5">{selectedSlab.brand}</p>
                <p className="text-sm font-bold text-gray-800">{selectedSlab.name}</p>
              </div>

              {/* Cabinet tag */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg border border-gray-100 z-10 flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-gray-300" style={{ backgroundColor: activeCabinet.color }} />
                <p className="text-sm font-bold text-gray-800">{activeCabinet.name}</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-4 flex items-start gap-2.5 bg-amber-50 border border-amber-200/60 rounded-xl px-4 py-3">
              <Info size={16} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 leading-relaxed">
                Visualizer images are for inspiration only. Final colours, slab pattern, and measurements may vary. Visit our showroom to view full slabs before purchase.
              </p>
            </div>
          </div>

          {/* ──────────── Right: Controls Panel ──────────── */}
          <div className="lg:w-1/3 flex flex-col">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 flex-grow flex flex-col h-full overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Paintbrush size={20} />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">Customize</h2>
              </div>

              {/* ── Cabinet Selection ── */}
              {showCabinets && (
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                    1. Cabinet Finish
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full normal-case tracking-normal">
                      {activeCabinet.name}
                    </span>
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    {CABINET_OPTIONS.map(option => (
                      <button
                        key={option.id}
                        onClick={() => setSelectedCabinet(option.id)}
                        className={`relative aspect-square rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
                          selectedCabinet === option.id
                            ? 'ring-2 ring-accent ring-offset-2 scale-105'
                            : 'hover:scale-105 hover:shadow-md border border-gray-200'
                        }`}
                        style={{ backgroundColor: option.color }}
                        title={option.name}
                      >
                        {selectedCabinet === option.id && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <Check size={20} className="text-white drop-shadow-md" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Countertop Slab Selection ── */}
              {showCountertop && (
                <div className="flex flex-col min-h-0 flex-1">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                    {showCabinets ? '2. ' : ''}Quartz Countertop
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full normal-case tracking-normal max-w-[140px] truncate">
                      {selectedSlab.name}
                    </span>
                  </h3>

                  {/* Search */}
                  <div className="relative mb-3">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search slabs..."
                      value={slabSearch}
                      onChange={e => setSlabSearch(e.target.value)}
                      className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent bg-gray-50"
                    />
                    {slabSearch && (
                      <button onClick={() => setSlabSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  {/* Scrollable slab grid */}
                  <div className="overflow-y-auto flex-1 -mr-2 pr-2 min-h-[200px] max-h-[340px]">
                    {groupedSlabs.map(([brand, slabs]) => (
                      <div key={brand} className="mb-4">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 sticky top-0 bg-white py-1 z-10">{brand}</p>
                        <div className="grid grid-cols-3 gap-2">
                          {slabs.map(slab => (
                            <button
                              key={slab.id}
                              onClick={() => setSelectedSlab(slab)}
                              className={`relative group rounded-lg overflow-hidden aspect-square transition-all duration-200 ${
                                selectedSlab.id === slab.id
                                  ? 'ring-2 ring-accent ring-offset-1 shadow-md'
                                  : 'border border-gray-200 hover:shadow-md hover:border-gray-300'
                              }`}
                              title={`${slab.name} — ${slab.priceRange}`}
                            >
                              <img
                                src={slab.img}
                                alt={slab.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                              {selectedSlab.id === slab.id && (
                                <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                                  <div className="bg-white rounded-full p-0.5 shadow-md">
                                    <Check size={12} className="text-accent" />
                                  </div>
                                </div>
                              )}
                              {/* Name tooltip on hover */}
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-1.5">
                                <p className="text-[9px] text-white font-bold truncate">{slab.name}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                    {filteredSlabs.length === 0 && (
                      <div className="text-center py-8 text-gray-400 text-sm">
                        No slabs found for "{slabSearch}"
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* ── CTA ── */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button
                  onClick={() => setShowLeadModal(true)}
                  className="btn-primary w-full h-14 text-base flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:shadow-accent/40"
                >
                  Get Quote for This Look
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Lead Capture Modal
   ──────────────────────────────────────────────────────────────── */
interface LeadModalProps {
  onClose: () => void;
  visualizerRef: React.RefObject<HTMLDivElement | null>;
  selectedCabinet: string;
  selectedSlab: SlabMaterial;
}

function LeadCaptureModal({ onClose, visualizerRef, selectedCabinet, selectedSlab }: LeadModalProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', notes: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    setIsSubmitting(true);

    try {
      // Step 1: Capture screenshot of the visualizer viewport
      let screenshotUrl = '';
      if (visualizerRef.current) {
        try {
          const dataUrl = await toPng(visualizerRef.current, { quality: 0.9, pixelRatio: 2 });
          const uploadRes = await fetch('/api/visualizer/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fileBase64: dataUrl, fileName: 'kitchen_visualizer_design.png' })
          });
          if (uploadRes.ok) {
            const uploadData = await uploadRes.json();
            screenshotUrl = uploadData.url;
          }
        } catch (screenshotErr) {
          console.error('Screenshot capture failed:', screenshotErr);
        }
      }

      // Step 2: Submit the lead
      const files = screenshotUrl ? [{ name: 'kitchen_visualizer_design.png', fileName: 'kitchen_visualizer_design.png', size: 'Screenshot', fileSize: 'Screenshot', url: screenshotUrl }] : [];

      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          notes: `Visualizer Lead — City: ${form.city || 'Not specified'}. Cabinet: ${selectedCabinet}. Countertop: ${selectedSlab.name} (${selectedSlab.brand}). Notes: ${form.notes || 'None'}`,
          selectedSlab: selectedSlab.name,
          selectedCabinetStyle: selectedCabinet,
          source: 'visualizer',
          files,
        })
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting visualizer lead:', err);
      setIsSubmitted(true); // Still show success so user isn't stuck
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="bg-gray-50 border-b border-border-custom p-6 flex justify-between items-center relative overflow-hidden shrink-0">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-border-custom flex items-center justify-center text-accent">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 tracking-tight">Get Quote for This Look</h2>
              <p className="text-sm text-gray-500">We'll follow up with a personalized estimate</p>
            </div>
          </div>
          <button onClick={handleClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative z-10">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>

                {/* Design Summary Card */}
                <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100 flex items-center gap-4">
                  <img src={selectedSlab.img} alt={selectedSlab.name} className="w-14 h-14 rounded-xl object-cover border border-gray-200" />
                  <div className="min-w-0">
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Your Selection</p>
                    <p className="text-sm font-bold text-gray-800 truncate">{selectedSlab.name} <span className="text-gray-400">×</span> {selectedCabinet}</p>
                    <p className="text-xs text-gray-500">{selectedSlab.brand} • {selectedSlab.priceRange}/sqft</p>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5"><User size={12} />Full Name *</label>
                    <input
                      type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm bg-gray-50"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5"><Mail size={12} />Email *</label>
                      <input
                        type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5"><Phone size={12} />Phone *</label>
                      <input
                        type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="(416) 555-0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm bg-gray-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5"><MapPin size={12} />City</label>
                    <select
                      value={form.city} onChange={e => setForm({ ...form, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm bg-gray-50 appearance-none"
                    >
                      <option value="">Select your city</option>
                      {GTA_CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5"><FileText size={12} />Notes / Measurements</label>
                    <textarea
                      value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })}
                      placeholder="Approximate countertop length, layout shape, any special requirements..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent text-sm bg-gray-50 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !form.name || !form.email || !form.phone}
                  className="btn-primary w-full h-14 text-base disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Saving your design...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">Design Saved!</h3>
                <p className="text-gray-500 mb-4">We've captured your kitchen design and contact details.</p>

                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 mb-6 text-left">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Your Selection</p>
                  <p className="text-sm text-gray-800"><strong>Countertop:</strong> {selectedSlab.name} ({selectedSlab.brand})</p>
                  <p className="text-sm text-gray-800"><strong>Cabinets:</strong> {selectedCabinet}</p>
                </div>

                <p className="text-sm text-gray-600 mb-8">A design specialist will review your selections and reach out shortly to discuss exact measurements and schedule a free in-home consultation.</p>

                <button onClick={handleClose} className="btn-primary w-full h-14">
                  Done
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
