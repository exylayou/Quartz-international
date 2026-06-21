import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, ArrowRight, Paintbrush } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useCalculator } from '../context/CalculatorContext';

const CABINET_OPTIONS = [
  { id: 'white', name: 'Classic White Shaker', color: '#f8f9fa' },
  { id: 'navy', name: 'Navy Blue', color: '#1e3a5f' },
  { id: 'wood', name: 'Natural Oak', color: '#c4a484' },
  { id: 'grey', name: 'Charcoal Grey', color: '#333333' }
];

const COUNTERTOP_OPTIONS = [
  { id: 'white', name: 'Pure White Quartz', img: '/images/quartz_slab.png' },
  { id: 'calacatta', name: 'Calacatta Gold', img: '/images/quartz_slab.png' },
  { id: 'grey', name: 'Concrete Grey', img: '/images/laminate_slab.png' },
  { id: 'black', name: 'Marquina Black', img: '/images/granite_slab.png' }
];

// Map combinations to our 4 generated images
const getImageUrl = (cabinet: string, countertop: string) => {
  // We generated 4 specific images, so we'll map combinations to the closest one.
  // In a full production app, you'd have 16 images or CSS overlays.
  if (cabinet === 'white') return '/images/visualizer/viz_white_white.png';
  if (cabinet === 'navy') return '/images/visualizer/viz_navy_calacatta.png';
  if (cabinet === 'wood') return '/images/visualizer/viz_wood_grey.png';
  if (cabinet === 'grey') return '/images/visualizer/viz_grey_black.png';
  
  // Fallbacks just in case
  if (countertop === 'white') return '/images/visualizer/viz_white_white.png';
  if (countertop === 'calacatta') return '/images/visualizer/viz_navy_calacatta.png';
  if (countertop === 'grey') return '/images/visualizer/viz_wood_grey.png';
  if (countertop === 'black') return '/images/visualizer/viz_grey_black.png';

  return '/images/visualizer/viz_white_white.png';
};

export default function KitchenVisualizer() {
  const [selectedCabinet, setSelectedCabinet] = useState('white');
  const [selectedCountertop, setSelectedCountertop] = useState('white');
  const [isImageLoading, setIsImageLoading] = useState(false);
  const { openCalculator } = useCalculator();

  const handleCabinetChange = (id: string) => {
    setIsImageLoading(true);
    setSelectedCabinet(id);
  };

  const handleCountertopChange = (id: string) => {
    setIsImageLoading(true);
    setSelectedCountertop(id);
  };

  const handleGetQuote = () => {
    // In a real implementation, we could pass the specific selections into the calculator context here
    openCalculator();
  };

  const currentImage = getImageUrl(selectedCabinet, selectedCountertop);

  return (
    <div className="bg-gray-50 min-h-screen font-sans selection:bg-accent/30 pt-24 pb-12">
      <SEO 
        title="Interactive Kitchen Visualizer | Quartz International" 
        description="Design your dream kitchen. Mix and match cabinet colors and premium quartz countertops in our interactive 3D visualizer." 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Kitchen Visualizer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experiment with different cabinet finishes and quartz countertops to find your perfect combination before you renovate.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left: Image Preview */}
          <div className="lg:w-2/3 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] w-full flex-grow flex items-center justify-center">
              
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImage}
                  src={currentImage}
                  alt="Kitchen Visualizer Preview"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full object-cover"
                  onLoad={() => setIsImageLoading(false)}
                />
              </AnimatePresence>

              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 backdrop-blur-sm z-10">
                  <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Controls Panel */}
          <div className="lg:w-1/3 flex flex-col">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 flex-grow flex flex-col h-full">
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Paintbrush size={20} />
                </div>
                <h2 className="text-2xl font-bold text-text-primary">Customize</h2>
              </div>

              {/* Cabinet Selection */}
              <div className="mb-10">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center justify-between">
                  1. Cabinet Finish
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {CABINET_OPTIONS.find(c => c.id === selectedCabinet)?.name}
                  </span>
                </h3>
                <div className="grid grid-cols-4 gap-3">
                  {CABINET_OPTIONS.map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleCabinetChange(option.id)}
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

              {/* Countertop Selection */}
              <div className="mb-auto">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center justify-between">
                  2. Quartz Countertop
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {COUNTERTOP_OPTIONS.find(c => c.id === selectedCountertop)?.name}
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {COUNTERTOP_OPTIONS.map(option => (
                    <button
                      key={option.id}
                      onClick={() => handleCountertopChange(option.id)}
                      className={`relative group rounded-xl overflow-hidden aspect-[4/3] transition-all duration-300 ${
                        selectedCountertop === option.id 
                          ? 'ring-2 ring-accent ring-offset-2 shadow-md' 
                          : 'border border-gray-200 hover:shadow-md'
                      }`}
                    >
                      <img 
                        src={option.img} 
                        alt={option.name} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {selectedCountertop === option.id && (
                        <div className="absolute inset-0 bg-accent/20 flex items-center justify-center">
                          <div className="bg-white rounded-full p-1 shadow-md">
                            <Check size={16} className="text-accent" />
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Lead Capture CTA */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="bg-accent/5 rounded-2xl p-5 mb-6 border border-accent/10 flex items-start gap-3">
                  <Info size={20} className="text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Found a combination you love? We can supply and install this exact kitchen design in your home within 2-3 weeks.
                  </p>
                </div>

                <button 
                  onClick={handleGetQuote}
                  className="btn-primary w-full h-16 text-lg flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:shadow-accent/40"
                >
                  Get a Quote for this Look
                  <ArrowRight size={20} />
                </button>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
