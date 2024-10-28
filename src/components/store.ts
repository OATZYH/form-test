// store.ts
import { create } from 'zustand'; // Adjusted import statement

interface FormulationState {
  formData: Partial<FormData>;
  setFormData: (data: Partial<FormData>) => void;
}

export const useFormulationStore = create<FormulationState>((set) => ({
  formData: {},
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
}));
