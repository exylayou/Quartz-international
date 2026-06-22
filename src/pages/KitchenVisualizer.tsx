import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Info, ArrowRight, Paintbrush, Upload, ScanLine, Wand2, Image as ImageIcon, Calculator } from 'lucide-react';
import { SEO } from '../components/SEO';
import { QuickEstimatorModal } from '../components/QuickEstimatorModal';

const CABINET_OPTIONS = [
  { id: 'white', name: 'Classic White Shaker', color: '#f8f9fa' },
  { id: 'navy', name: 'Navy Blue', color: '#1e3a5f' },
  { id: 'wood', name: 'Natural Oak', color: '#c4a484' },
  { id: 'grey', name: 'Charcoal Grey', color: '#333333' }
];

const COUNTERTOP_OPTIONS = [
  { id: 'white', name: 'Pure White Quartz', img: '/images/quartz_slab.png', textureFilter: 'brightness(1.1) contrast(0.9) saturate(0.8)' },
  { id: 'calacatta', name: 'Calacatta Gold', img: '/images/quartz_slab.png', textureFilter: 'brightness(1.05) sepia(0.2) hue-rotate(10deg)' },
  { id: 'grey', name: 'Concrete Grey', img: '/images/laminate_slab.png', textureFilter: 'brightness(0.8) contrast(1.1) grayscale(0.5)' },
  { id: 'black', name: 'Marquina Black', img: '/images/granite_slab.png', textureFilter: 'brightness(0.3) contrast(1.2)' }
];

const getImageUrl = (cabinet: string, countertop: string) => {
  if (cabinet === 'white') return '/images/visualizer/viz_white_white.png';
  if (cabinet === 'navy') return '/images/visualizer/viz_navy_calacatta.png';
  if (cabinet === 'wood') return '/images/visualizer/viz_wood_grey.png';
  if (cabinet === 'grey') return '/images/visualizer/viz_grey_black.png';
  return '/images/visualizer/viz_white_white.png';
};

export default function KitchenVisualizer() {
  const [mode, setMode] = useState<'sample' | 'upload'>('sample');
  const [selectedCabinet, setSelectedCabinet] = useState('white');
  const [selectedCountertop, setSelectedCountertop] = useState('white');
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [showQuickEstimator, setShowQuickEstimator] = useState(false);
  
  // Upload Mode States
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCabinetChange = (id: string) => {
    if (mode === 'sample') setIsImageLoading(true);
    setSelectedCabinet(id);
  };

  const handleCountertopChange = (id: string) => {
    if (mode === 'sample') setIsImageLoading(true);
    setSelectedCountertop(id);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImage(url);
      simulateAIScan();
    }
  };

  const simulateAIScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 2500); // 2.5s scanning effect
  };

  const currentImage = getImageUrl(selectedCabinet, selectedCountertop);
  const activeCountertop = COUNTERTOP_OPTIONS.find(c => c.id === selectedCountertop);

  return (
    <div className="bg-gray-50 min-h-screen font-sans selection:bg-accent/30 pt-24 pb-12">
      <SEO 
        title="Interactive Kitchen Visualizer | Quartz International" 
        description="Design your dream kitchen. Mix and match cabinet colors and premium quartz countertops in our interactive visualizer or upload your own photo." 
      />

      <QuickEstimatorModal 
        isOpen={showQuickEstimator} 
        onClose={() => setShowQuickEstimator(false)}
        selectedCabinet={CABINET_OPTIONS.find(c => c.id === selectedCabinet)?.name || ''}
        selectedCountertop={activeCountertop?.name || ''}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Kitchen Visualizer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experiment with different finishes or upload a photo of your own kitchen to see our premium quartz slabs in your space.
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-2xl border border-gray-200 inline-flex shadow-sm">
            <button
              onClick={() => setMode('sample')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                mode === 'sample' ? 'bg-accent text-white shadow-md' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <ImageIcon size={16} className="inline mr-2 -mt-0.5" />
              Sample Kitchens
            </button>
            <button
              onClick={() => setMode('upload')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                mode === 'upload' ? 'bg-accent text-white shadow-md' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <Wand2 size={16} className="inline mr-2 -mt-0.5" />
              Upload Your Own
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* Left: Image Preview Area */}
          <div className="lg:w-2/3 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200 aspect-[4/3] w-full flex-grow flex items-center justify-center">
              
              {mode === 'sample' ? (
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
              ) : (
                // Upload Mode Preview
                <div className="absolute inset-0 w-full h-full bg-white flex flex-col items-center justify-center">
                  {!uploadedImage ? (
                    <div 
                      className="w-full h-full p-8 flex flex-col items-center justify-center border-4 border-dashed border-gray-200 hover:border-accent/50 hover:bg-accent/5 transition-all cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
                      <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                        <Upload size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Upload a Photo</h3>
                      <p className="text-gray-500 text-center max-w-sm">Take a wide photo of your current kitchen. Our AI will automatically detect your countertops and replace them with your selection.</p>
                      <button className="btn-secondary mt-8">Select Photo</button>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      {/* Base Uploaded Image */}
                      <img src={uploadedImage} className="absolute inset-0 w-full h-full object-cover" alt="Uploaded Kitchen" />
                      
                      {/* AI Scanning Animation */}
                      <AnimatePresence>
                        {isScanning && (
                          <motion.div 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }} 
                            exit={{ opacity: 0 }} 
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center z-20"
                          >
                            <ScanLine size={48} className="text-accent mb-4 animate-pulse" />
                            <h3 className="text-white text-xl font-bold tracking-widest uppercase">AI Scanning Room...</h3>
                            <p className="text-gray-300 text-sm mt-2">Detecting countertops and lighting</p>
                            
                            {/* Scanning laser line */}
                            <motion.div 
                              className="absolute left-0 right-0 h-1 bg-accent shadow-[0_0_15px_rgba(206,173,120,1)]"
                              animate={{ top: ['0%', '100%', '0%'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Mock Rendered Output (Only shows when not scanning) */}
                      {!isScanning && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 pointer-events-none mix-blend-overlay"
                          style={{ 
                            backgroundImage: `url(${activeCountertop?.img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: 0.6,
                            filter: activeCountertop?.textureFilter
                          }}
                        />
                      )}

                      {/* Re-upload button */}
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-sm px-4 py-2 rounded-lg text-xs font-bold text-gray-700 hover:bg-white transition-colors z-30"
                      >
                        <Upload size={14} className="inline mr-2 -mt-0.5" />
                        Change Photo
                      </button>
                    </div>
                  )}
                </div>
              )}

              {isImageLoading && mode === 'sample' && (
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

              {/* Cabinet Selection (Only relevant for Sample mode usually, but keep it for visualizer options) */}
              {mode === 'sample' && (
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
              )}

              {/* Countertop Selection */}
              <div className="mb-auto">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center justify-between">
                  {mode === 'sample' ? '2. Quartz Countertop' : 'Select Quartz'}
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {activeCountertop?.name}
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
                    Like this look? Get a fast, rough estimate for replacing your countertops with {activeCountertop?.name}.
                  </p>
                </div>

                <button 
                  onClick={() => setShowQuickEstimator(true)}
                  className="btn-primary w-full h-16 text-lg flex items-center justify-center gap-3 shadow-xl shadow-accent/20 hover:shadow-accent/40"
                >
                  <Calculator size={20} />
                  Get a Quick Estimate
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
