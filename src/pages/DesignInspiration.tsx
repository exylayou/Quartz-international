import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { 
  Upload, 
  ChevronRight, 
  ChevronLeft, 
  Loader2, 
  Check, 
  AlertCircle, 
  MapPin, 
  Calendar, 
  DollarSign, 
  ArrowRight,
  RefreshCw,
  Sparkles,
  Info,
  CheckCircle2,
  Trash2,
  FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCalculator } from '../context/CalculatorContext';
import { cn, trackLeadConversion } from '../lib/utils';
import { ConceptTemplate } from '../data/designCatalog';

interface UploadedImage {
  base64: string;
  name: string;
  previewUrl: string;
}

export default function DesignInspiration() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Form State
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [scope, setScope] = useState<'countertops' | 'cabinets-countertops' | 'full-refresh'>('cabinets-countertops');
  const [preferredStyle, setPreferredStyle] = useState<string>('Modern');
  const [cabinetColor, setCabinetColor] = useState<string>('white');
  const [budgetTier, setBudgetTier] = useState<'essential' | 'premium' | 'elite'>('premium');
  const [hasIsland, setHasIsland] = useState<boolean>(false);
  const [isCondo, setIsCondo] = useState<boolean>(false);
  const [postalCode, setPostalCode] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('3-6-months');
  
  // Lead Info
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');

  // Results State (populated by backend)
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [matchedConcepts, setMatchedConcepts] = useState<ConceptTemplate[]>([]);
  const [priceRange, setPriceRange] = useState<{ low: number; high: number } | null>(null);
  const [loadingMessage, setLoadingMessage] = useState<string>('Uploading images...');

  // Compress image helper using canvas
  const compressImageFile = (file: File): Promise<UploadedImage> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          // Compress to medium quality JPEG
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
          resolve({
            base64: compressedBase64,
            name: file.name,
            previewUrl: URL.createObjectURL(file)
          });
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setError('');

    if (uploadedImages.length + files.length > 3) {
      setError('You can upload a maximum of 3 kitchen photos.');
      return;
    }

    try {
      const promises = files.map(file => compressImageFile(file));
      const results = await Promise.all(promises);
      setUploadedImages(prev => [...prev, ...results]);
    } catch (err) {
      console.error(err);
      setError('Failed to process and compress images. Try another file.');
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  const validateStep1 = () => {
    if (uploadedImages.length === 0) {
      setError('Please upload at least 1 photo of your kitchen to proceed.');
      return false;
    }
    setError('');
    return true;
  };

  const validateStep2 = () => {
    if (!postalCode.trim()) {
      setError('Please enter your postal code.');
      return false;
    }
    // Simple Canada postal code validation
    const postalRegex = /^[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d$/;
    if (!postalRegex.test(postalCode.trim())) {
      setError('Please enter a valid Canadian postal code (e.g. M5V 2T6).');
      return false;
    }
    setError('');
    return true;
  };

  const validateStep3 = () => {
    if (!contactName.trim() || !contactEmail.trim() || !contactPhone.trim()) {
      setError('Please fill in all contact fields to unlock your packages.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async () => {
    if (!validateStep3()) return;

    setStep(5);
    setIsSubmitting(true);
    setLoadingMessage('Uploading and compressing photos...');

    const interval = setInterval(() => {
      const messages = [
        'Analyzing layout and spatial coordinates...',
        'Checking lighting vectors and existing colors...',
        'Matching colors to the Quartz International catalog...',
        'Compiling two-tone concept proposals...',
        'Calculating rules-based pricing range...'
      ];
      setLoadingMessage(prev => {
        const nextIdx = (messages.indexOf(prev) + 1) % messages.length;
        return messages[nextIdx] || prev;
      });
    }, 2500);

    try {
      const payload = {
        name: contactName,
        email: contactEmail,
        phone: contactPhone,
        scope,
        preferredStyle,
        cabinetColor,
        budgetTier,
        hasIsland,
        isCondo,
        postalCode,
        timeline,
        images: uploadedImages.map(img => ({
          base64: img.base64,
          name: img.name
        }))
      };

      const response = await fetch('/api/design-recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      clearInterval(interval);

      if (!response.ok) {
        throw new Error(data.error || 'Server error generating design packages');
      }

      setAnalysisResults(data.analysis);
      setMatchedConcepts(data.matchedConcepts);
      setPriceRange(data.priceRange);
      setStep(6);
      trackLeadConversion(data.priceRange?.high);
    } catch (err: any) {
      clearInterval(interval);
      console.error(err);
      setError(err.message || 'Failed to submit. Please try again.');
      setStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetWizard = () => {
    setUploadedImages([]);
    setContactName('');
    setContactEmail('');
    setContactPhone('');
    setPostalCode('');
    setAnalysisResults(null);
    setMatchedConcepts([]);
    setPriceRange(null);
    setStep(1);
    setError('');
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-accent/30 text-text-primary">
      <SEO 
        title="Free AI Kitchen Design Concept Package | Quartz International" 
        description="Upload photos of your existing kitchen and receive 2 custom styling concepts, actual catalog material matching, and a rules-based budget range."
      />

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 min-h-[70vh] flex flex-col justify-center">
        
        {/* Step Indicator */}
        {step < 5 && (
          <div className="max-w-md mx-auto w-full mb-12">
            <div className="flex justify-between items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
              <span>Step {step} of 4</span>
              <span>{Math.round((step / 4) * 100)}% Complete</span>
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-500" 
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Global Error Banner */}
        {error && (
          <div className="max-w-lg mx-auto w-full mb-8 bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl flex items-start gap-3">
            <AlertCircle className="shrink-0 mt-0.5" size={18} />
            <span className="text-sm font-semibold">{error}</span>
          </div>
        )}

        <AnimatePresence mode="wait">
          
          {/* STEP 1: Landing / Start Page */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 bg-[#F0EBE1] border border-border-custom px-4 py-1.5 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none">
                  <Sparkles size={12} className="text-accent animate-pulse" />
                  AI-Powered Lead Magnet
                </span>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tighter leading-[1.05]">
                  See What Your Kitchen <br />
                  Could <span className="text-accent underline decoration-8 underline-offset-8 decoration-accent/20">Become</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed font-medium">
                  Upload three photos of your existing kitchen to receive two personalized design concept directions, actual catalog matches, and a preliminary project range.
                </p>
              </div>

              <div className="bg-background/80 border border-border-custom rounded-3xl p-8 max-w-lg mx-auto grid grid-cols-3 gap-6 text-left">
                {[
                  { num: "01", title: "Upload Photos", desc: "No measurements needed." },
                  { num: "02", title: "Select Style", desc: "Set style & budget preferences." },
                  { num: "03", title: "Get Package", desc: "Two concepts & local pricing." },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <span className="text-xs font-black text-accent">{item.num}</span>
                    <h4 className="font-bold text-sm tracking-tight">{item.title}</h4>
                    <p className="text-[10px] text-gray-400 font-semibold leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="btn-primary px-12 py-5 text-lg font-bold shadow-xl shadow-accent/20 cursor-pointer"
                >
                  Start My Kitchen Concept &rarr;
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Guided Photo Upload */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto space-y-8"
            >
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Upload Kitchen Photos</h2>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  For the best AI analysis, upload up to 3 photos showing different angles (Entrance view, countertop details, and main layout).
                </p>
              </div>

              {/* Upload Drop Zone */}
              <div className="border-2 border-dashed border-border-custom hover:border-accent rounded-[2rem] p-10 text-center bg-background/20 group transition-colors cursor-pointer relative">
                <input 
                  type="file" 
                  multiple 
                  accept="image/jpeg,image/png,image/webp" 
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="mx-auto text-gray-400 group-hover:text-accent transition-colors mb-4" size={40} />
                <h4 className="font-bold text-lg mb-1">Drag & Drop Photos</h4>
                <p className="text-xs text-gray-400 font-medium">JPEG, PNG, WebP format. Max 3 files.</p>
              </div>

              {/* Preview Grid */}
              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                  {uploadedImages.map((img, idx) => (
                    <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden border border-border-custom group bg-gray-50">
                      <img src={img.previewUrl} alt={img.name} className="w-full h-full object-cover" />
                      <button
                        onClick={() => removeImage(idx)}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full shadow hover:bg-red-600 transition-colors"
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Angle Examples */}
              <div className="bg-[#FAF9F6] border border-border-custom rounded-2xl p-6">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Recommended Angles</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-accent shrink-0" /> Entrance / Full View
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-accent shrink-0" /> Countertops & Cabinets
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={14} className="text-accent shrink-0" /> Opposite wall / Side view
                  </li>
                </ul>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6">
                <button onClick={() => setStep(1)} className="btn-outline px-6 py-3 text-xs uppercase tracking-widest font-bold">
                  Back
                </button>
                <button 
                  onClick={() => validateStep1() && setStep(3)} 
                  className="btn-primary px-8 py-3.5 text-xs uppercase tracking-widest font-bold"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Project Preferences */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-2xl mx-auto space-y-8"
            >
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Project Preferences</h2>
                <p className="text-gray-400 text-sm">Tell us what you are considering so we can customize your package rules.</p>
              </div>

              <div className="space-y-6">
                
                {/* Scope Selection */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Project Scope</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { id: 'countertops', title: 'Countertops Only', desc: 'Slabs, fabrication, and install.' },
                      { id: 'cabinets-countertops', title: 'Cabinets & Countertops', desc: 'Matching cabinet + quartz bundle.' },
                      { id: 'full-refresh', title: 'Complete Refresh', desc: 'Full package with backsplash, etc.' }
                    ].map(item => (
                      <button
                        key={item.id}
                        onClick={() => setScope(item.id as any)}
                        className={cn(
                          "p-5 rounded-2xl border text-left flex flex-col justify-between h-32 transition-all",
                          scope === item.id ? "border-accent bg-accent/5 ring-1 ring-accent" : "border-border-custom hover:border-gray-300"
                        )}
                      >
                        <h4 className="font-bold text-sm text-text-primary">{item.title}</h4>
                        <p className="text-[10px] text-gray-400 font-semibold leading-tight mt-2">{item.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style Preferences */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Preferred Style</label>
                    <select
                      value={preferredStyle}
                      onChange={(e) => setPreferredStyle(e.target.value)}
                      className="input-field py-3 text-xs font-bold"
                    >
                      <option value="Modern">Modern Flat Panel</option>
                      <option value="Shaker">Classic Shaker</option>
                      <option value="Slim Shaker">Refined Slim Shaker</option>
                      <option value="High Gloss">High Gloss Modern</option>
                      <option value="Matte">Sleek Matte Contemporary</option>
                      <option value="Not Sure">Not Sure (Let AI Suggest)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Cabinet Color Family</label>
                    <select
                      value={cabinetColor}
                      onChange={(e) => setCabinetColor(e.target.value)}
                      className="input-field py-3 text-xs font-bold"
                    >
                      <option value="white">Pure White / Off-White</option>
                      <option value="wood">Warm Oak / Light Wood</option>
                      <option value="grey-black">Charcoal / Matte Black</option>
                      <option value="blue">Deep Navy Blue Accent</option>
                    </select>
                  </div>

                </div>

                {/* Budget, Condo, Island */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-gray-100">
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Approximate Budget</label>
                    <select
                      value={budgetTier}
                      onChange={(e) => setBudgetTier(e.target.value as any)}
                      className="input-field py-3 text-xs font-bold"
                    >
                      <option value="essential">Budget-Friendly (Essential)</option>
                      <option value="premium">Mid-Range (Premium Collection)</option>
                      <option value="elite">Luxury/Bespoke (Elite Collection)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Postal Code</label>
                    <input
                      type="text"
                      placeholder="e.g. M5V 2T6"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="input-field py-3 text-xs font-bold"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Renovation Timeline</label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="input-field py-3 text-xs font-bold"
                    >
                      <option value="immediate">Immediate (Within 1 month)</option>
                      <option value="1-3-months">1–3 Months</option>
                      <option value="3-6-months">3–6 Months</option>
                      <option value="just-exploring">Just planning / exploring</option>
                    </select>
                  </div>

                </div>

                <div className="flex gap-8 pt-4">
                  <label className="flex items-center gap-3 text-sm font-bold text-text-primary cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={hasIsland} 
                      onChange={(e) => setHasIsland(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent"
                    />
                    Include Kitchen Island
                  </label>

                  <label className="flex items-center gap-3 text-sm font-bold text-text-primary cursor-pointer select-none">
                    <input 
                      type="checkbox" 
                      checked={isCondo} 
                      onChange={(e) => setIsCondo(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent"
                    />
                    Is Condo installation
                  </label>
                </div>

              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6">
                <button onClick={() => setStep(2)} className="btn-outline px-6 py-3 text-xs uppercase tracking-widest font-bold">
                  Back
                </button>
                <button 
                  onClick={() => validateStep2() && setStep(4)} 
                  className="btn-primary px-8 py-3.5 text-xs uppercase tracking-widest font-bold"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Gated Lead Capture Form */}
          {step === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-md mx-auto space-y-8"
            >
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Unlock Your Package</h2>
                <p className="text-gray-400 text-sm">
                  We've calculated your rules and selected the concept templates. Enter your details to send the package to your inbox and reveal your designs.
                </p>
              </div>

              <div className="space-y-4">
                
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="input-field py-3.5 text-xs font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="input-field py-3.5 text-xs font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 block">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(647) 555-0199"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="input-field py-3.5 text-xs font-semibold"
                  />
                </div>

              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-6">
                <button onClick={() => setStep(3)} className="btn-outline px-6 py-3 text-xs uppercase tracking-widest font-bold">
                  Back
                </button>
                <button 
                  onClick={handleSubmit} 
                  disabled={isSubmitting}
                  className="btn-primary px-8 py-3.5 text-xs uppercase tracking-widest font-bold flex items-center gap-2"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={14} /> : null}
                  Generate My Concept Package &rarr;
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 5: Loading / Processing Screen */}
          {step === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-md mx-auto text-center py-20 space-y-8"
            >
              <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                <Loader2 className="animate-spin text-accent" size={64} />
                <Sparkles className="absolute text-accent/50 animate-bounce" size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold tracking-tight">Generating Your Concept Package</h3>
                <p className="text-sm text-gray-500 font-medium italic animate-pulse">{loadingMessage}</p>
              </div>
            </motion.div>
          )}

          {/* STEP 6: Results / Proposals View */}
          {step === 6 && (
            <motion.div
              key="step-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              {/* Headline summary */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Analysis Completed</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">Your Kitchen Concept Package</h2>
                <p className="text-gray-500 leading-relaxed font-semibold">
                  We've successfully processed your kitchen photos and mapped recommendations to our inventory. A copy of this package has been sent to <strong className="text-text-primary">{contactEmail}</strong>.
                </p>
              </div>

              {/* Kitchen Analysis Summary Card */}
              {analysisResults && (
                <div className="bg-[#FAF9F6] border border-border-custom rounded-[2.5rem] p-8 md:p-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Uploaded Photos */}
                  <div className="md:col-span-5 space-y-4">
                    <h4 className="text-xs font-black uppercase tracking-widest text-accent">Your Existing Space</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {uploadedImages.map((img, i) => (
                        <div key={i} className="aspect-square rounded-xl overflow-hidden border border-border-custom bg-white">
                          <img src={img.previewUrl || img.base64} alt="Before" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#F0EBE1] border border-border-custom/55 px-4 py-3 rounded-xl text-[10px] text-gray-500 font-bold leading-normal flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                      <span>
                        AI detected your <strong>{analysisResults.layout || 'L-Shaped'}</strong> footprint. Your project range will preserve this layout footprint to avoid structural plumbing charges.
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Detected Specs */}
                  <div className="md:col-span-7 space-y-6">
                    <h3 className="text-xl font-bold text-text-primary uppercase tracking-tight flex items-center gap-3">
                      <FileText className="text-accent" /> AI Space Analysis
                    </h3>
                    <div className="grid grid-cols-2 gap-6 text-xs font-bold text-gray-600">
                      <div>
                        <span className="block text-[9px] text-gray-400 uppercase tracking-widest mb-1">Layout Classification</span>
                        <span className="text-sm text-text-primary capitalize">{analysisResults.layout || 'L-Shaped'} Footprint</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-gray-400 uppercase tracking-widest mb-1">Estimated Size Class</span>
                        <span className="text-sm text-text-primary capitalize">{analysisResults.estimated_kitchen_size || 'Medium'} Kitchen</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-gray-400 uppercase tracking-widest mb-1">Current Cabinet Style</span>
                        <span className="text-sm text-text-primary capitalize">{analysisResults.existing_cabinet_style || 'Standard'} Doors</span>
                      </div>
                      <div>
                        <span className="block text-[9px] text-gray-400 uppercase tracking-widest mb-1">Detected Lighting</span>
                        <span className="text-sm text-text-primary capitalize">{analysisResults.natural_light || 'Moderate'} Ambient Light</span>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* Side-by-Side Concepts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {matchedConcepts.map((concept, idx) => (
                  <div 
                    key={concept.id} 
                    className="bg-white border border-border-custom rounded-[3rem] p-8 md:p-10 shadow-xl flex flex-col justify-between"
                  >
                    <div>
                      {/* Concept image */}
                      <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-4 border border-border-custom bg-gray-50 relative group">
                        <img src={concept.image} alt={concept.name} className="w-full h-full object-cover" />
                        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                          Color & Material Palette
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-400 font-semibold mb-6 italic text-center leading-normal">
                        Illustration of styling on template layout. Your physical {analysisResults?.layout || 'L-shaped'} footprint will be preserved.
                      </p>
                      
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                        Concept Direction {idx === 0 ? 'A' : 'B'}
                      </span>
                      <h3 className="text-3xl font-bold mt-2 mb-4">{concept.name}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-8">{concept.explanation}</p>

                      <div className="border-t border-gray-100 pt-6 space-y-4 text-sm font-semibold">
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-400 text-xs uppercase tracking-wider">Cabinets Match:</span>
                          <span className="text-text-primary text-right">{concept.cabinetFinish}</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-400 text-xs uppercase tracking-wider">Quartz Match:</span>
                          <span className="text-text-primary text-right">{concept.quartzStyle}</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-400 text-xs uppercase tracking-wider">Backsplash Match:</span>
                          <span className="text-text-primary text-right">{concept.backsplash}</span>
                        </div>
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-400 text-xs uppercase tracking-wider">Hardware Direction:</span>
                          <span className="text-text-primary text-right">{concept.hardware}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-wider">Actual Catalog Inventory Matches:</h4>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        {concept.matchedQuartz.map((product, pIdx) => (
                          <div key={pIdx} className="bg-background border border-border-custom p-3 rounded-xl flex flex-col justify-between">
                            <span className="font-bold text-[10px] text-accent uppercase tracking-wider">{product.brand}</span>
                            <span className="font-bold text-text-primary mt-1">{product.productName}</span>
                            <span className="text-[10px] text-gray-400 mt-2 font-medium">{product.costRange}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rules-Based Pricing Section */}
              {priceRange && (
                <div className="max-w-4xl mx-auto border border-border-custom rounded-[3rem] p-10 bg-[#1A1A1A] text-white text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 blur-[80px]" />
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Preliminary Range</span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4 italic">Project Cost Projection</h3>
                  
                  <div className="my-8">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Estimated Package Total</p>
                    <div className="text-5xl md:text-6xl font-black text-white italic tracking-tighter">
                      ${priceRange.low.toLocaleString()} – ${priceRange.high.toLocaleString()}
                    </div>
                    <p className="text-[10px] text-gray-500 mt-2">Includes Cabinets, Slabs, Fabrication, and Professional GTA Installation</p>
                  </div>

                  <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed italic border-t border-white/5 pt-6 mt-4">
                    Based on the photos and information provided, projects similar to yours generally fall into this range. This is a preliminary planning estimate. Final pricing is subject to physical site scan, design details, and material tag.
                  </p>
                </div>
              )}

              {/* Required Disclaimer */}
              <div className="max-w-2xl mx-auto text-center flex gap-3 bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                <Info size={20} className="text-blue-500 shrink-0 mt-0.5" />
                <p className="text-left text-xs text-blue-700 leading-relaxed font-semibold">
                  <strong>AI-Generated Inspiration Concept:</strong> Images are intended to help visualize potential design directions and are not construction drawings or exact product representations. Colours, veining, proportions, and finishes may differ from actual materials. Final design, availability, and pricing are confirmed after professional measurement and material selection.
                </p>
              </div>

              {/* Call to action */}
              <div className="text-center pt-8 border-t border-border-custom max-w-xl mx-auto space-y-6">
                <h4 className="text-xl font-bold tracking-tight">Ready to Take the Next Step?</h4>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => navigate('/contact')}
                    className="btn-primary px-12 py-5 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-accent/20"
                  >
                    Book My Free Measurement <ArrowRight size={16} />
                  </button>
                  <button 
                    onClick={() => navigate('/areas-we-serve')}
                    className="btn-outline px-12 py-5 text-sm font-bold cursor-pointer"
                  >
                    Visit the Showroom
                  </button>
                </div>
                <button onClick={resetWizard} className="text-xs font-bold text-gray-400 hover:text-accent uppercase tracking-wider flex items-center justify-center gap-1.5 mx-auto">
                  <RefreshCw size={12} /> Start Over / Upload New Photos
                </button>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </div>
  );
}
