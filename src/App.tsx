import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CalculatorProvider } from './context/CalculatorContext';
import CalculatorModal from './components/CalculatorModal';
import { AIChat } from './components/AIChat';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Cost from './pages/Cost';
import Guide2026 from './pages/Guide2026';
import SlabDetail from './pages/SlabDetail';
import Estimate from './pages/Estimate';
import Results from './pages/Results';
import Admin from './pages/Admin';
import MaterialPage from './pages/MaterialPage';
import QuartzBrowse from './pages/QuartzBrowse';
import Caesarstone from './pages/Caesarstone';
import Silestone from './pages/Silestone';
import CalacattaGold from './pages/CalacattaGold';
import Cabinets from './pages/Cabinets';
import Toronto from './pages/Toronto';
import Pickering from './pages/Pickering';
import Scarborough from './pages/Scarborough';
import Markham from './pages/Markham';
import Vaughan from './pages/Vaughan';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Blog from './pages/Blog';
import AreasWeServe from './pages/AreasWeServe';
import Contact from './pages/Contact';
import CityCostPage from './pages/CityCostPage';

export default function App() {
  return (
    <Router>
      <CalculatorProvider>
        <ScrollToTop />
        <CalculatorModal />
        <AIChat />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/cost" element={<Cost />} />
          <Route path="/2026-countertop" element={<Guide2026 />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/results" element={<Results />} />
          <Route path="/cabinets" element={<Cabinets />} />
          <Route path="/kitchen-cabinets" element={<Cabinets />} />
          <Route path="/toronto" element={<Toronto />} />
          <Route path="/quartz-countertops-pickering" element={<Pickering />} />
          <Route path="/quartz-countertops-scarborough" element={<Scarborough />} />
          <Route path="/quartz-countertops-markham" element={<Markham />} />
          <Route path="/vaughan" element={<Vaughan />} />
          <Route path="/quartz-countertops-vaughan" element={<Vaughan />} />
          
          {/* Dynamic City SEO Pages */}
          <Route path="/quartz-countertop-cost/:city" element={<CityCostPage />} />
          
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/areas-we-serve" element={<AreasWeServe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          
          {/* Material Pages & Aliases */}
          <Route path="/quartz-countertops" element={<QuartzBrowse />} />
          <Route path="/quartz-kitchen-countertops" element={<QuartzBrowse />} />
          <Route path="/quartz-countertops-caesarstone" element={<Caesarstone />} />
          <Route path="/quartz-countertops-silestone" element={<Silestone />} />
          <Route path="/slab/:id" element={<SlabDetail />} />
          <Route path="/caesarstone-calacatta-gold-price" element={<CalacattaGold />} />
        </Routes>
      </Layout>
    </CalculatorProvider>
  </Router>
);
}
