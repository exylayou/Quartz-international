
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { materials } from '../data/materials';

export type QuartzLevel = 'standard' | 'premium' | 'luxury';
export type CabinetStyle = 'essential' | 'premium' | 'elite';
export type Timeline = 'asap' | '1-3-months' | 'exploring';
export type LayoutType = 'L-Shape' | 'U-Shape' | 'Galley' | 'Island-Only';
export type StyleDirection = 'modern' | 'classic' | 'industrial' | 'organic';
export type IslandType = 'none' | 'small' | 'large' | 'waterfall';

export interface CalculatorState {
  isOpen: boolean;
  step: number;
  layout: LayoutType;
  styleDirection: StyleDirection;
  countertopSqFt: number;
  countertopLinearFt: number;
  quartzLevel: QuartzLevel;
  hasIsland: boolean;
  islandType: IslandType;
  includeCabinets: boolean;
  cabinetLinearFt: number;
  cabinetStyle: CabinetStyle;
  deliveryMethod: 'rta' | 'rti' | 'installed';
  selectedCabinetStyle?: string;
  extras: {
    sink: boolean;
    cooktop: boolean;
    backsplash: boolean;
    waterfall: boolean;
    removal: boolean;
    pantry: boolean;
    islandCabinets: boolean;
    decorativePanels: boolean;
  };
  timeline: Timeline;
  selectedSlab?: string;
  selectedBrand?: string;
  includeCountertops: boolean;
  startedFromCabinets: boolean;
}

const INITIAL_STATE: CalculatorState = {
  isOpen: false,
  step: 1,
  layout: 'L-Shape',
  styleDirection: 'modern',
  countertopSqFt: 35,
  countertopLinearFt: 20,
  quartzLevel: 'standard',
  hasIsland: false,
  islandType: 'none',
  includeCabinets: false,
  cabinetLinearFt: 20,
  cabinetStyle: 'essential',
  deliveryMethod: 'rta',
  extras: {
    sink: false,
    cooktop: false,
    backsplash: false,
    waterfall: false,
    removal: false,
    pantry: false,
    islandCabinets: false,
    decorativePanels: false,
  },
  timeline: 'asap',
  includeCountertops: true,
  startedFromCabinets: false,
};

interface CalculatorContextType {
  state: CalculatorState;
  openCalculator: (params?: { 
    type?: string; 
    slab?: string; 
    brand?: string; 
    style?: string; 
    level?: QuartzLevel;
    step?: number;
    sqFt?: number;
    deliveryMethod?: 'rta' | 'rti' | 'installed';
    cabinetStyle?: CabinetStyle;
    cabinetDoorStyle?: string;
  }) => void;
  closeCalculator: () => void;
  setStep: (step: number) => void;
  updateState: (updates: Partial<CalculatorState>) => void;
  resetCalculator: () => void;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<CalculatorState>(INITIAL_STATE);
  const location = useLocation();
  const navigate = useNavigate();

  const openCalculator = (params?: { 
    type?: string; 
    slab?: string; 
    brand?: string; 
    style?: string; 
    level?: QuartzLevel;
    step?: number;
    sqFt?: number;
    deliveryMethod?: 'rta' | 'rti' | 'installed';
    cabinetStyle?: CabinetStyle;
    cabinetDoorStyle?: string;
  }) => {
    const newState = { ...INITIAL_STATE, isOpen: true };
    
    if (params) {
      if (params.type === 'full-kitchen') newState.includeCabinets = true;
      if (params.brand) newState.selectedBrand = params.brand;
      if (params.style) {
        if (['marble', 'luxury', 'dark'].includes(params.style)) newState.quartzLevel = 'premium';
        else if (params.style === 'white') newState.quartzLevel = 'standard';
      }
      if (params.slab) {
        newState.selectedSlab = params.slab;
        // Dynamically determine quartz level based on materials database
        const foundSlab = materials.find(m => m.name === params.slab || m.id === params.slab);
        if (foundSlab) {
          const firstNumMatch = foundSlab.priceRange.match(/\d+/);
          if (firstNumMatch) {
            const price = parseInt(firstNumMatch[0]);
            if (price <= 68) {
              newState.quartzLevel = 'standard';
            } else if (price <= 95) {
              newState.quartzLevel = 'premium';
            } else {
              newState.quartzLevel = 'luxury';
            }
          }
        }
      }
      if (params.level) newState.quartzLevel = params.level;
      if (params.step) {
        newState.step = params.step;
        if (params.step === 4 || params.step === 5) {
          newState.startedFromCabinets = true;
          newState.includeCabinets = true;
        }
      }
      if (params.sqFt) {
        newState.countertopSqFt = params.sqFt;
        newState.countertopLinearFt = Math.max(0, Math.round((params.sqFt + 5) / 2));
      }
      if (params.deliveryMethod) newState.deliveryMethod = params.deliveryMethod;
      if (params.cabinetStyle) newState.cabinetStyle = params.cabinetStyle;
      if (params.cabinetDoorStyle) newState.selectedCabinetStyle = params.cabinetDoorStyle;
    }

    setState(newState);
    
    // Track modal_open in behavior stats
    try {
      const behaviorRaw = sessionStorage.getItem('qi_user_behavior');
      if (behaviorRaw) {
        const behavior = JSON.parse(behaviorRaw);
        behavior.calculatorOpenedCount = (behavior.calculatorOpenedCount || 0) + 1;
        behavior.totalInteractions = (behavior.totalInteractions || 0) + 1;
        sessionStorage.setItem('qi_user_behavior', JSON.stringify(behavior));
      }
    } catch (e) {
      console.error('Failed to update modal open behavior stats:', e);
    }

    console.log('Event: modal_open', newState);
  };

  const closeCalculator = () => {
    setState(prev => ({ ...prev, isOpen: false }));
  };

  const incrementInteractions = () => {
    try {
      const behaviorRaw = sessionStorage.getItem('qi_user_behavior');
      if (behaviorRaw) {
        const behavior = JSON.parse(behaviorRaw);
        behavior.totalInteractions = (behavior.totalInteractions || 0) + 1;
        sessionStorage.setItem('qi_user_behavior', JSON.stringify(behavior));
      }
    } catch (e) {
      console.error('Failed to increment interactions:', e);
    }
  };

  const setStep = (step: number) => {
    setState(prev => ({ ...prev, step }));
    incrementInteractions();
    console.log(`Event: calculator_step_completed`, { step: state.step, nextStep: step });
  };

  const updateState = (updates: Partial<CalculatorState>) => {
    setState(prev => ({ ...prev, ...updates }));
    incrementInteractions();
  };

  const resetCalculator = () => {
    setState(INITIAL_STATE);
  };

  // Handle UTM parameters and page behavior tracking
  useEffect(() => {
    try {
      // 1. UTM and Click ID Capturing
      const searchParams = new URLSearchParams(location.search);
      const utmSource = searchParams.get('utm_source');
      const utmMedium = searchParams.get('utm_medium');
      const utmCampaign = searchParams.get('utm_campaign');
      const utmTerm = searchParams.get('utm_term');
      const utmContent = searchParams.get('utm_content');
      const gclid = searchParams.get('gclid');

      if (utmSource || utmMedium || utmCampaign || utmTerm || utmContent || gclid) {
        const existingUtm = JSON.parse(sessionStorage.getItem('qi_utm_data') || '{}');
        const newUtm = {
          utmSource: utmSource || existingUtm.utmSource,
          utmMedium: utmMedium || existingUtm.utmMedium,
          utmCampaign: utmCampaign || existingUtm.utmCampaign,
          utmTerm: utmTerm || existingUtm.utmTerm,
          utmContent: utmContent || existingUtm.utmContent,
          gclid: gclid || existingUtm.gclid,
        };
        sessionStorage.setItem('qi_utm_data', JSON.stringify(newUtm));
      }

      // 2. Page Behavior & Engagement Tracking
      const path = location.pathname + location.search;
      const now = Date.now();
      
      const behaviorRaw = sessionStorage.getItem('qi_user_behavior');
      let behavior = behaviorRaw ? JSON.parse(behaviorRaw) : {
        sessionStart: new Date().toISOString(),
        pageViews: [],
        calculatorOpenedCount: 0,
        totalInteractions: 0,
        timeSpentMs: 0
      };

      // Update duration of the previous page view if it exists
      if (behavior.pageViews.length > 0) {
        const prevIndex = behavior.pageViews.length - 1;
        const prevPage = behavior.pageViews[prevIndex];
        if (!prevPage.durationMs) {
          prevPage.durationMs = now - prevPage.enteredAt;
        }
      }

      // Avoid duplicate consecutive page view entries for the same path
      const lastPage = behavior.pageViews[behavior.pageViews.length - 1];
      if (!lastPage || lastPage.path !== path) {
        behavior.pageViews.push({
          path,
          enteredAt: now
        });
      }

      // Maintain limit on number of pages stored in history (e.g. max 30)
      if (behavior.pageViews.length > 30) {
        behavior.pageViews = behavior.pageViews.slice(-30);
      }

      sessionStorage.setItem('qi_user_behavior', JSON.stringify(behavior));
    } catch (e) {
      console.error('Error tracking behavior/UTM:', e);
    }
  }, [location]);

  // Handle URL parameters on initial load
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const open = params.get('open-calculator');
    if (open === 'true') {
      openCalculator({
        type: params.get('type') || undefined,
        slab: params.get('slab') || undefined,
        brand: params.get('brand') || undefined,
        style: params.get('style') || undefined,
      });
      // Clean up URL
      params.delete('open-calculator');
      const newSearch = params.toString();
      navigate({ search: newSearch }, { replace: true });
    }
  }, [location, navigate]);

  return (
    <CalculatorContext.Provider value={{ state, openCalculator, closeCalculator, setStep, updateState, resetCalculator }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (!context) throw new Error('useCalculator must be used within a CalculatorProvider');
  return context;
};
