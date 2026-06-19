import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { CalculatorProvider } from './context/CalculatorContext';
import CalculatorModal from './components/CalculatorModal';
import { AIChat } from './components/AIChat';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Cost from './pages/Cost';
import Estimate from './pages/Estimate';
import Results from './pages/Results';
import QuoteView from './pages/QuoteView';
import Admin from './pages/Admin';

// Countertop pages
import QuartzBrowse from './pages/QuartzBrowse';
import SlabDetail from './pages/SlabDetail';
import MaterialPage from './pages/MaterialPage';
import Caesarstone from './pages/Caesarstone';
import Silestone from './pages/Silestone';
import CalacattaGold from './pages/CalacattaGold';
import KasaQuartz from './pages/KasaQuartz';
import Kstone from './pages/Kstone';
import LucentQuartz from './pages/LucentQuartz';
import TCEStone from './pages/TCEStone';
import Guide2026 from './pages/Guide2026';

// Cabinet pages
import Cabinets from './pages/Cabinets';
import CabinetFinishes from './pages/CabinetFinishes';
import CabinetCostGuide from './pages/CabinetCostGuide';

// New Estimator & Cost Guide pages
import QuartzCountertopEstimator from './pages/QuartzCountertopEstimator';
import KitchenCabinetEstimator from './pages/KitchenCabinetEstimator';
import KitchenRenovationEstimator from './pages/KitchenRenovationEstimator';
import KitchenCabinetCost from './pages/KitchenCabinetCost';

// Local / City
import AreasWeServe from './pages/AreasWeServe';
import CityCostPage from './pages/CityCostPage';
import CityServicePage from './pages/CityServicePage';

export default function App() {
  return (
    <BrowserRouter>
      <CalculatorProvider>
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* Core */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/cost" element={<Cost />} />
            <Route path="/estimate" element={<Estimate />} />
            <Route path="/results" element={<Results />} />
            <Route path="/quote/:id" element={<QuoteView />} />
            <Route path="/admin" element={<Admin />} />

            {/* Countertops */}
            <Route path="/quartz-kitchen-countertops" element={<QuartzBrowse />} />
            <Route path="/slab/:id" element={<SlabDetail />} />
            <Route path="/material/:materialId" element={<MaterialPage />} />
            <Route path="/caesarstone" element={<Caesarstone />} />
            <Route path="/quartz-countertops-caesarstone" element={<Caesarstone />} />
            <Route path="/silestone" element={<Silestone />} />
            <Route path="/calacatta-gold" element={<CalacattaGold />} />
            <Route path="/kasa-quartz" element={<KasaQuartz />} />
            <Route path="/quartz-countertops-kasa" element={<KasaQuartz />} />
            <Route path="/kstone" element={<Kstone />} />
            <Route path="/quartz-countertops-kstone" element={<Kstone />} />
            <Route path="/lucent-quartz" element={<LucentQuartz />} />
            <Route path="/quartz-countertops-lucent" element={<LucentQuartz />} />
            <Route path="/tce-stone" element={<TCEStone />} />
            <Route path="/quartz-countertops-tce" element={<TCEStone />} />
            <Route path="/quartz-countertop-guide-2026" element={<Guide2026 />} />

            {/* Cabinets */}
            <Route path="/cabinets" element={<Cabinets />} />
            <Route path="/kitchen-cabinets" element={<Cabinets />} />
            <Route path="/cabinet-finishes" element={<CabinetFinishes />} />
            <Route path="/kitchen-cabinet-cost-guide" element={<CabinetCostGuide />} />

            {/* New SEO, GEO, PPC estimator and cost guide landing pages */}
            <Route path="/quartz-countertop-estimator" element={<QuartzCountertopEstimator />} />
            <Route path="/kitchen-cabinet-estimator" element={<KitchenCabinetEstimator />} />
            <Route path="/kitchen-renovation-estimator" element={<KitchenRenovationEstimator />} />
            <Route path="/kitchen-cabinet-cost" element={<KitchenCabinetCost />} />

            {/* Local / City */}
            <Route path="/areas-we-serve" element={<AreasWeServe />} />
            <Route path="/quartz-countertop-cost/:city" element={<CityCostPage />} />
            <Route path="/:city" element={<CityServicePage />} />
          </Routes>
        </Layout>
        <CalculatorModal />
        <AIChat />
      </CalculatorProvider>
    </BrowserRouter>
  );
}
