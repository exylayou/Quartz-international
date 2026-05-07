
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type QuartzLevel = 'standard' | 'premium' | 'luxury';
export type CabinetStyle = 'flat' | 'shaker' | 'matte' | 'gloss';
export type Timeline = 'asap' | '1-3-months' | 'exploring';
export type LayoutType = 'L-Shape' | 'U-Shape' | 'Galley' | 'Island-Only';
export type StyleDirection = 'modern' | 'classic' | 'industrial' | 'organic';

export interface CalculatorState {
  isOpen: boolean;
  step: number;
  layout: LayoutType;
  styleDirection: StyleDirection;
  countertopSqFt: number;
  quartzLevel: QuartzLevel;
  hasIsland: boolean;
  includeCabinets: boolean;
  cabinetLinearFt: number;
  cabinetStyle: CabinetStyle;
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
}

const INITIAL_STATE: CalculatorState = {
  isOpen: false,
  step: 1,
  layout: 'L-Shape',
  styleDirection: 'modern',
  countertopSqFt: 40,
  quartzLevel: 'premium',
  hasIsland: false,
  includeCabinets: false,
  cabinetLinearFt: 20,
  cabinetStyle: 'flat',
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
};

interface CalculatorContextType {
  state: CalculatorState;
  openCalculator: (params?: { type?: string; slab?: string; brand?: string; style?: string }) => void;
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

  const openCalculator = (params?: { type?: string; slab?: string; brand?: string; style?: string }) => {
    const newState = { ...INITIAL_STATE, isOpen: true };
    
    if (params) {
      if (params.type === 'full-kitchen') newState.includeCabinets = true;
      if (params.slab) newState.selectedSlab = params.slab;
      if (params.brand) newState.selectedBrand = params.brand;
      if (params.style) {
        if (['marble', 'luxury', 'dark'].includes(params.style)) newState.quartzLevel = 'premium';
        else if (params.style === 'white') newState.quartzLevel = 'standard';
      }
    }

    setState(newState);
    // Track modal_open
    console.log('Event: modal_open', newState);
  };

  const closeCalculator = () => {
    setState(prev => ({ ...prev, isOpen: false }));
  };

  const setStep = (step: number) => {
    setState(prev => ({ ...prev, step }));
    console.log(`Event: calculator_step_completed`, { step: state.step, nextStep: step });
  };

  const updateState = (updates: Partial<CalculatorState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const resetCalculator = () => {
    setState(INITIAL_STATE);
  };

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
