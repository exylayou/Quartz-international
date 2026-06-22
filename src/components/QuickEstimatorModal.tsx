import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calculator, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface QuickEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCabinet: string;
  selectedCountertop: string;
}

const SHAPES = [
  { id: 'l-shape', label: 'L-Shape' },
  { id: 'u-shape', label: 'U-Shape' },
  { id: 'galley', label: 'Galley' },
  { id: 'island-only', label: 'Island Only' }
];

const SIZES = [
  { id: 'small', label: 'Small', desc: 'Under 50 sqft' },
  { id: 'medium', label: 'Medium', desc: '50-100 sqft' },
  { id: 'large', label: 'Large', desc: '100+ sqft' }
];

export function QuickEstimatorModal({ isOpen, onClose, selectedCabinet, selectedCountertop }: QuickEstimatorModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [shape, setShape] = useState('');
  const [size, setSize] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimate, setEstimate] = useState<{ min: number, max: number } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!shape || !size || !email) return;

    setIsSubmitting(true);

    // Simulate API delay
    await new Promise(res => setTimeout(res, 1500));

    // Calculate mock estimate based on size
    let baseMin = 2500;
    let baseMax = 3500;
    if (size === 'medium') { baseMin = 4500; baseMax = 6000; }
    if (size === 'large') { baseMin = 7500; baseMax = 11000; }

    setEstimate({ min: baseMin, max: baseMax });

    // Send lead to backend
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Visualizer User',
          email,
          phone: '',
          projectType: 'kitchen_countertop',
          timeline: '1-3 months',
          budget: `$${baseMin} - $${baseMax}`,
          notes: `Lead from Visualizer. Shape: ${shape}, Size: ${size}. Cabinets: ${selectedCabinet}, Countertop: ${selectedCountertop}.`,
          layout: shape,
          source: 'visualizer'
        })
      });
    } catch (err) {
      console.error('Error saving visualizer lead:', err);
    }

    setIsSubmitting(false);
    setStep(3);
  };

  const reset = () => {
    setStep(1);
    setShape('');
    setSize('');
    setEmail('');
    setEstimate(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={reset} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="bg-gray-50 border-b border-border-custom p-6 flex justify-between items-center relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-border-custom flex items-center justify-center text-accent">
              <Calculator size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 tracking-tight">Quick Estimate</h2>
              <p className="text-sm text-gray-500">Get a ballpark price instantly</p>
            </div>
          </div>
          <button onClick={reset} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative z-10">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <h3 className="text-lg font-bold text-gray-800 mb-6">1. What's your kitchen layout?</h3>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {SHAPES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setShape(s.id)}
                      className={`p-4 rounded-xl border-2 text-sm font-bold transition-all ${
                        shape === s.id ? 'border-accent bg-accent/5 text-accent' : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-6">2. Roughly how big is it?</h3>
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {SIZES.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setSize(s.id)}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        size === s.id ? 'border-accent bg-accent/5' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className={`text-sm font-bold mb-1 ${size === s.id ? 'text-accent' : 'text-gray-800'}`}>{s.label}</div>
                      <div className="text-[10px] text-gray-500">{s.desc}</div>
                    </button>
                  ))}
                </div>

                <button 
                  disabled={!shape || !size}
                  onClick={() => setStep(2)}
                  className="btn-primary w-full h-14 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step <ArrowRight size={20} className="ml-2" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.form key="step2" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-4">
                    <Mail size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Where should we send your design?</h3>
                  <p className="text-gray-500 text-sm">We'll reveal your instant ballpark price and email you a copy of your design profile.</p>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-lg"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="btn-primary w-full h-14 text-lg disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>See My Instant Price & Save Design <ArrowRight size={20} /></>
                  )}
                </button>
                <button type="button" onClick={() => setStep(1)} className="w-full mt-4 text-gray-500 text-sm font-bold hover:text-gray-700">
                  Back
                </button>
              </motion.form>
            )}

            {step === 3 && estimate && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-black text-gray-800 mb-2">Design Saved!</h3>
                <p className="text-gray-500 mb-8">We've emailed you a copy. Here is your quick estimate:</p>
                
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 mb-8">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Estimated Cost</p>
                  <p className="text-4xl font-black text-accent">${estimate.min.toLocaleString()} <span className="text-gray-400 text-2xl font-normal">to</span> ${estimate.max.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-4">Includes material, fabrication, and standard installation.</p>
                </div>

                <p className="text-sm text-gray-600 mb-8">A design specialist will review your selections and reach out shortly to discuss exact measurements and schedule a free in-home consultation.</p>

                <button onClick={reset} className="btn-primary w-full h-14">
                  Done
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
