import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import WhiteQuartzPage from './pages/WhiteQuartzPage';

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

// New standalone landing pages
import QuartzVsQuartzite from './pages/QuartzVsQuartzite';
import RentalPropertyCountertops from './pages/RentalPropertyCountertops';
import DesignInspiration from './pages/DesignInspiration';
import Faq from './pages/Faq';

// New SEO Guides
import QuartzVsGraniteVsMarble from './pages/QuartzVsGraniteVsMarble';
import FlatPanelVsShakerCabinets from './pages/FlatPanelVsShakerCabinets';
import ModernizeKitchenNoLayoutChange from './pages/ModernizeKitchenNoLayoutChange';
import FullHeightQuartzBacksplash from './pages/FullHeightQuartzBacksplash';
import KitchenRefreshNoRenovation from './pages/KitchenRefreshNoRenovation';
import MostDurableCountertops from './pages/MostDurableCountertops';

// Dedicated PPC Landing Pages
import PpcCountertops from './pages/lp/PpcCountertops';
import PpcCabinets from './pages/lp/PpcCabinets';
import PpcRenovation from './pages/lp/PpcRenovation';

// Local / City
import AreasWeServe from './pages/AreasWeServe';
import CityCostPage from './pages/CityCostPage';
import CityServicePage from './pages/CityServicePage';
import CabinetCityPage from './pages/CabinetCityPage';
import CabinetPseoPage from './pages/CabinetPseoPage';
import { cabinetPseoPages } from './data/cabinetPseoData';

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
            <Route path="/faq" element={<Faq />} />

            {/* Countertops */}
            <Route path="/quartz-kitchen-countertops" element={<QuartzBrowse />} />
            <Route path="/white-quartz-kitchen-countertops" element={<WhiteQuartzPage />} />
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
            <Route path="/quartz-vs-quartzite" element={<QuartzVsQuartzite />} />
            <Route path="/best-countertop-for-rental-properties" element={<RentalPropertyCountertops />} />
            <Route path="/design-inspiration" element={<DesignInspiration />} />
            <Route path="/quartz-vs-granite-vs-marble-toronto" element={<QuartzVsGraniteVsMarble />} />
            <Route path="/flat-panel-vs-shaker-cabinets" element={<FlatPanelVsShakerCabinets />} />
            <Route path="/modernize-kitchen-without-moving-plumbing" element={<ModernizeKitchenNoLayoutChange />} />
            <Route path="/full-height-quartz-backsplash-toronto" element={<FullHeightQuartzBacksplash />} />
            <Route path="/kitchen-refresh-without-full-renovation-toronto" element={<KitchenRefreshNoRenovation />} />
            <Route path="/most-durable-countertops-busy-toronto-kitchens" element={<MostDurableCountertops />} />

            {/* Dedicated PPC Landing Pages */}
            <Route path="/lp/quartz-countertops" element={<PpcCountertops />} />
            <Route path="/lp/kitchen-cabinets" element={<PpcCabinets />} />
            <Route path="/lp/kitchen-renovation" element={<PpcRenovation />} />

            {/* Local / City */}
            <Route path="/areas-we-serve" element={<AreasWeServe />} />
            <Route path="/quartz-countertop-cost/:city" element={<CityCostPage />} />
            {cabinetPseoPages.map(page => (
              <Route key={page.slug} path={`/${page.slug}`} element={<CabinetPseoPage />} />
            ))}
            <Route path="/kitchen-cabinets/:city" element={<CabinetCityPage />} />
            <Route path="/:city" element={<CityServicePage />} />

            {/* Catch-all Fallbacks */}
            <Route path="/quartz-kitchen-countertops/*" element={<Navigate to="/quartz-kitchen-countertops" replace />} />
            <Route path="/kitchen-cabinets/*" element={<Navigate to="/cabinets" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
        <CalculatorModal />
        <AIChat />
      </CalculatorProvider>
    </BrowserRouter>
  );
}
