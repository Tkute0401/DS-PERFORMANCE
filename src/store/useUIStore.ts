import { create } from 'zustand';

interface UIState {
  isConversionModalOpen: boolean;
  openConversionModal: () => void;
  closeConversionModal: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isConversionModalOpen: false,
  openConversionModal: () => set({ isConversionModalOpen: true }),
  closeConversionModal: () => set({ isConversionModalOpen: false }),
}));
