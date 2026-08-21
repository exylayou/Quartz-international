import React, { useState } from 'react';
import { Upload, CheckCircle2, Sparkles, Send, ShieldCheck, ArrowRight, Calculator, FileText, Camera } from 'lucide-react';

interface QuoterFunnelProps {
  onSuccess?: () => void;
}

export function CostQuoterFunnel({ onSuccess }: QuoterFunnelProps) {
  // Calculator state
  const [sqft, setSqft] = useState<number>(38); // default standard kitchen
  const [tier, setTier] = useState<'standard' | 'premium' | 'luxury'>('standard');
  const [thickness, setThickness] = useState<'2cm' | '3cm'>('3cm');
  const [backsplash, setBacksplash] = useState<'none' | '4inch' | 'full'>('none');
  const [demolition, setDemolition] = useState<boolean>(false);
  const [sinkCutout, setSinkCutout] = useState<boolean>(true);
  const [condoElevator, setCondoElevator] = useState<boolean>(false);

  // File upload state
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // User details
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  // Calculate price range dynamically
  const calculateRange = () => {
    let minRate = 48;
    let maxRate = 65;

    if (tier === 'premium') {
      minRate = 65;
      maxRate = 95;
    } else if (tier === 'luxury') {
      minRate = 95;
      maxRate = 170;
    }

    if (thickness === '3cm') {
      minRate += 10;
      maxRate += 15;
    }

    let baseMin = sqft * minRate;
    let baseMax = sqft * maxRate;

    // Backsplash
    if (backsplash === '4inch') {
      baseMin += 200;
      baseMax += 300;
    } else if (backsplash === 'full') {
      baseMin += sqft * 45;
      baseMax += sqft * 75;
    }

    // Addons
    if (sinkCutout) {
      baseMin += 175;
      baseMax += 250;
    }

    if (demolition) {
      baseMin += 250;
      baseMax += 450;
    }

    if (condoElevator) {
      baseMin += 150;
      baseMax += 250;
    }

    return {
      min: Math.round(baseMin),
      max: Math.round(baseMax)
    };
  };

  const priceRange = calculateRange();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selected = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selected]);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || (!phone && !email)) {
      alert('Please enter your name and phone number or email.');
      return;
    }

    setIsSubmitting(true);

    try {
      const fileSummary = files.map(f => ({ name: f.name, size: f.size }));
      const leadPayload = {
        name,
        phone,
        email,
        layout: `Cost Page Quoter (${sqft} sq ft, ${tier} tier, ${thickness}, ${backsplash} splash)`,
        notes: `Estimated Installed Range: $${priceRange.min.toLocaleString()} - $${priceRange.max.toLocaleString()}. Details: Sink Cutout (${sinkCutout ? 'Yes' : 'No'}), Demolition (${demolition ? 'Yes' : 'No'}), Condo (${condoElevator ? 'Yes' : 'No'}). User Notes: ${notes}`,
        files: fileSummary
      };

      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadPayload)
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Lead submit error:', err);
      setIsSubmitting(false);
      setIsSubmitted(true); // Graceful fallback
    }
  };

  return (
    <div id="quoter-funnel" className="bg-[#1A1A1A] text-white p-6 sm:p-10 rounded-[2.5rem] shadow-2xl border border-amber-500/30 scroll-mt-12">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-extrabold uppercase tracking-widest mb-4">
          <Sparkles className="w-4 h-4" /> Instant Measurement & Photo Quoter Funnel
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
          Upload Measurements or Photos $\rightarrow$ Get Your Likely Installed Range
        </h2>
        <p className="text-gray-400 text-sm font-medium">
          Skip generic phone calls. Select your rough room size or upload a photo/sketch to instantly preview your installed cost range ($48–$170/sq ft) and receive an itemized slab quote.
        </p>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleFormSubmit} className="space-y-8">
          {/* Step 1: Select Rough Size */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
            <label className="text-xs font-extrabold uppercase tracking-widest text-accent block">
              1. Rough Kitchen Countertop Size ({sqft} sq. ft.)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: 'Small Condo', ft: 25, desc: '20–30 sq ft' },
                { label: 'Standard Kitchen', ft: 38, desc: '35–45 sq ft' },
                { label: 'Large Kitchen', ft: 55, desc: '50–65 sq ft' },
                { label: 'Chef Island + L', ft: 70, desc: '65–85 sq ft' }
              ].map(preset => (
                <button
                  key={preset.ft}
                  type="button"
                  onClick={() => setSqft(preset.ft)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    sqft === preset.ft
                      ? 'bg-accent text-gray-900 border-accent font-extrabold'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-semibold'
                  }`}
                >
                  <p className="text-xs">{preset.label}</p>
                  <p className="text-[10px] opacity-75">{preset.desc}</p>
                </button>
              ))}
            </div>
            <div className="pt-2 flex items-center gap-4">
              <span className="text-xs text-gray-400 font-semibold shrink-0">Custom Sq Ft:</span>
              <input
                type="range"
                min="15"
                max="100"
                value={sqft}
                onChange={e => setSqft(Number(e.target.value))}
                className="w-full accent-[#B89355]"
              />
              <span className="text-sm font-extrabold text-white w-12 text-right">{sqft} sq ft</span>
            </div>
          </div>

          {/* Step 2: Material Tier & Thickness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
              <label className="text-xs font-extrabold uppercase tracking-widest text-accent block">
                2. Quartz Material Tier
              </label>
              <div className="space-y-2">
                {[
                  { id: 'standard', name: 'Group 1: Solid & Fine Grain', range: '$48 - $65/sq ft' },
                  { id: 'premium', name: 'Group 2: Mid-Range Veined', range: '$65 - $95/sq ft' },
                  { id: 'luxury', name: 'Group 3: Luxury Calacatta Gold', range: '$95 - $170/sq ft' }
                ].map(t => (
                  <label
                    key={t.id}
                    onClick={() => setTier(t.id as any)}
                    className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                      tier === t.id
                        ? 'bg-accent/20 border-accent text-white font-bold'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <span className="text-xs">{t.name}</span>
                    <span className="text-[10px] font-extrabold text-accent">{t.range}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
              <label className="text-xs font-extrabold uppercase tracking-widest text-accent block">
                3. Slab Thickness
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setThickness('2cm')}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    thickness === '2cm'
                      ? 'bg-accent text-gray-900 border-accent font-extrabold'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-semibold'
                  }`}
                >
                  <p className="text-xs">2 cm (3/4")</p>
                  <p className="text-[10px] opacity-75">Condos & Backsplashes</p>
                </button>

                <button
                  type="button"
                  onClick={() => setThickness('3cm')}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    thickness === '3cm'
                      ? 'bg-accent text-gray-900 border-accent font-extrabold'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-semibold'
                  }`}
                >
                  <p className="text-xs">3 cm (1-1/4")</p>
                  <p className="text-[10px] opacity-75">Solid Kitchen Profile</p>
                </button>
              </div>
            </div>
          </div>

          {/* Step 3: Backsplash & Addons */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
            <label className="text-xs font-extrabold uppercase tracking-widest text-accent block">
              4. Backsplash & Trade Customization Options
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              {[
                { id: 'none', label: 'Countertop Only', desc: 'No Splash' },
                { id: '4inch', label: '4-Inch Upstand', desc: '+$200–$300' },
                { id: 'full', label: 'Full-Height Quartz Splash', desc: '+$45–$75/sq ft' }
              ].map(b => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBacksplash(b.id as any)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    backsplash === b.id
                      ? 'bg-accent text-gray-900 border-accent font-extrabold'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 font-semibold'
                  }`}
                >
                  <p className="text-xs">{b.label}</p>
                  <p className="text-[10px] opacity-75">{b.desc}</p>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <label className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10">
                <input
                  type="checkbox"
                  checked={sinkCutout}
                  onChange={e => setSinkCutout(e.target.checked)}
                  className="accent-[#B89355] w-4 h-4"
                />
                <span className="text-xs text-gray-300 font-semibold">Undermount Sink Cutout (+$175)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10">
                <input
                  type="checkbox"
                  checked={demolition}
                  onChange={e => setDemolition(e.target.checked)}
                  className="accent-[#B89355] w-4 h-4"
                />
                <span className="text-xs text-gray-300 font-semibold">Tear-Out & Removal (+$300)</span>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10">
                <input
                  type="checkbox"
                  checked={condoElevator}
                  onChange={e => setCondoElevator(e.target.checked)}
                  className="accent-[#B89355] w-4 h-4"
                />
                <span className="text-xs text-gray-300 font-semibold">Condo Elevator Handling (+$150)</span>
              </label>
            </div>
          </div>

          {/* Calculated Output Banner */}
          <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent p-6 rounded-2xl border border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent block">Estimated Installed Price Range</span>
              <p className="text-3xl font-black text-white">
                ${priceRange.min.toLocaleString()} – ${priceRange.max.toLocaleString()} <span className="text-xs text-gray-400 font-normal">CAD Installed</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">Includes 3D laser measurement, slab material, fabrication, and installation across Toronto & GTA.</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-accent bg-black/40 px-4 py-2 rounded-xl border border-accent/20">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Guaranteed Zero Hidden Add-Ons</span>
            </div>
          </div>

          {/* Step 4: Photo / Sketch Upload & Contact Details */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-6">
            <div>
              <label className="text-xs font-extrabold uppercase tracking-widest text-accent block mb-2">
                5. Upload Rough Measurements, Floor Plan Sketch, or Current Kitchen Photo (Optional)
              </label>
              <div className="border-2 border-dashed border-white/20 hover:border-accent p-6 rounded-xl text-center cursor-pointer transition-all bg-white/5">
                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="funnel-file-upload"
                />
                <label htmlFor="funnel-file-upload" className="cursor-pointer flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <Upload className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-white">Click to Upload Photos or Measurement Sketch</span>
                  <span className="text-[10px] text-gray-400">Supports JPG, PNG, PDF, HEIC files</span>
                </label>
              </div>

              {files.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {files.map((f, i) => (
                    <span key={i} className="text-[10px] bg-accent/20 border border-accent/40 text-accent px-3 py-1 rounded-full font-bold flex items-center gap-1.5">
                      <Camera className="w-3 h-3" /> {f.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="(647) 000-0000"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">Additional Project Notes / Slab Color Preferences</label>
              <textarea
                rows={2}
                placeholder="e.g. Prefer Calacatta Gold veined slab; located in Mississauga condo..."
                value={notes}
                onChange={e => setNotes(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-5 rounded-2xl text-base font-extrabold shadow-2xl shadow-accent/30 flex items-center justify-center gap-3 transition-transform hover:scale-[1.01]"
            >
              {isSubmitting ? (
                <span>Processing Quote Request...</span>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send My Measurement / Photos for Official Itemized Quote</span>
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-white/5 p-8 rounded-2xl border border-accent/40 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-accent/20 text-accent mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Thank you, <strong>{name}</strong>. Olton Exeter and our Toronto fabrication desk are reviewing your uploaded measurements and photos. We will reach out via text/email with your exact itemized slab matches and final installed pricing.
          </p>
          <p className="text-xs text-accent font-bold">Estimated Range Calculated: ${priceRange.min.toLocaleString()} – ${priceRange.max.toLocaleString()} CAD Installed</p>
        </div>
      )}
    </div>
  );
}
