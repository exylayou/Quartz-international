
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
    let url = '/quartz-countertop-estimator';
    const queryParts: string[] = [];
    
    if (params) {
      if (params.slab) queryParts.push(`slab=${encodeURIComponent(params.slab)}`);
      if (params.brand) queryParts.push(`brand=${encodeURIComponent(params.brand)}`);
      if (params.level) queryParts.push(`level=${encodeURIComponent(params.level)}`);
      if (params.type === 'full-kitchen') queryParts.push('includeCabinets=true');
      
      if (params.slab && !params.level) {
        const foundSlab = materials.find(m => m.name === params.slab || m.id === params.slab);
        if (foundSlab) {
          const firstNumMatch = foundSlab.priceRange.match(/\d+/);
          if (firstNumMatch) {
            const price = parseInt(firstNumMatch[0]);
            if (price <= 68) {
              queryParts.push('level=standard');
            } else if (price <= 95) {
              queryParts.push('level=premium');
            } else {
              queryParts.push('level=luxury');
            }
          }
        }
      }
    }
    
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }
    
    navigate(url);
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

      // 1.5 Real-time Analytics Logging
      let sessionId = sessionStorage.getItem('qi_session_id');
      let isNewSession = false;
      if (!sessionId) {
        sessionId = 'session-' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('qi_session_id', sessionId);
        isNewSession = true;
      }

      if (isNewSession) {
        fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            type: 'session_start',
            utmSource: utmSource || undefined,
            utmMedium: utmMedium || undefined,
            utmCampaign: utmCampaign || undefined,
            referrer: document.referrer || undefined
          })
        }).catch(err => console.error('Failed to track session start:', err));
      }

      const lastSessionPage = sessionStorage.getItem('qi_last_tracked_path');
      if (lastSessionPage !== location.pathname) {
        sessionStorage.setItem('qi_last_tracked_path', location.pathname);
        fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId,
            type: 'page_view',
            path: location.pathname
          })
        }).catch(err => console.error('Failed to track page view:', err));
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
