// configs/physicalAppearancesConfig.ts
import { FieldConfig } from '../components/types';

export const leaveonConfigs: Record<string, FieldConfig[]> = {
  moisturizer: [
    { name: 'dosageForm', label: 'Dosage Form', type: 'select', required: true, options: ['Cream', 'Lotion', 'Gel'] },
    { name: 'viscosity', label: 'Viscosity', type: 'number', required: false },
    { name: 'texture', label: 'Texture', type: 'text', required: false },
    { name: 'function', label: 'Function', type: 'text', required: true },
    { name: 'pH', label: 'pH', type: 'number', required: true },
    { name: 'timeOfUse', label: 'Time of Use', type: 'text', required: false },
    { name: 'appearance', label: 'Appearance', type: 'text', required: false },
  ],
  sunscreen: [
    { name: 'dosageForm', label: 'Dosage Form', type: 'select', required: true, options: ['Spray', 'Cream', 'Gel'] },
    { name: 'viscosity', label: 'Viscosity', type: 'number', required: false },
    { name: 'texture', label: 'Texture', type: 'text', required: false },
    { name: 'type', label: 'Type', type: 'radio', required: true, options: ['Chemical', 'Physical'] },
    { name: 'pH', label: 'pH', type: 'number', required: true },
    { name: 'spf', label: 'SPF', type: 'number', required: true },
    { name: 'pa', label: 'PA', type: 'text', required: false },
    { name: 'appearance', label: 'Appearance', type: 'text', required: false },
  ],
};

export const rinseoffConfigs: Record<string, FieldConfig[]> = {
  cleanser: [
    { name: 'dosageForm', label: 'Dosage Form', type: 'select', required: true, options: ['Gel', 'Cream', 'Foam'] },
    { name: 'viscosity', label: 'Viscosity', type: 'number', required: false },
    { name: 'texture', label: 'Texture', type: 'text', required: false },
    { name: 'pH', label: 'pH', type: 'number', required: true },
    { name: 'timeOfUse', label: 'Time of Use', type: 'text', required: false },
    { name: 'appearance', label: 'Appearance', type: 'text', required: false },
  ],
  'make-up remover': [
    { name: 'dosageForm', label: 'Dosage Form', type: 'select', required: true, options: ['Oil', 'Micellar Water', 'Cream'] },
    { name: 'viscosity', label: 'Viscosity', type: 'number', required: false },
    { name: 'texture', label: 'Texture', type: 'text', required: false },
    { name: 'pH', label: 'pH', type: 'number', required: true },
    { name: 'timeOfUse', label: 'Time of Use', type: 'text', required: false },
    { name: 'appearance', label: 'Appearance', type: 'text', required: false },
  ],
  'rinse-off mask': [
    { name: 'dosageForm', label: 'Dosage Form', type: 'select', required: true, options: ['Clay', 'Gel', 'Cream'] },
    { name: 'viscosity', label: 'Viscosity', type: 'number', required: false },
    { name: 'texture', label: 'Texture', type: 'text', required: false },
    { name: 'pH', label: 'pH', type: 'number', required: true },
    { name: 'timeOfUse', label: 'Time of Use', type: 'text', required: false },
    { name: 'appearance', label: 'Appearance', type: 'text', required: false },
  ],
};

// Additional configuration mapping variants to images
export const variantImages: Record<string, string> = {
  'make-up remover': 'https://placehold.co/600x400',
  cleanser: 'https://placehold.co/600x400',
  'rinse-off mask': 'https://placehold.co/600x400',
  moisturizer: 'https://placehold.co/600x400',
  sunscreen: '/FullSizeRender_VSCO.jpg',
  'dark-spot treatment': '/images/variants/dark_spot_treatment.jpg',
  'acne spot treatment': '/images/variants/acne_spot_treatment.jpg',
  'under-eye treatment': '/images/variants/under_eye_treatment.jpg',
  'lip care': '/images/variants/lip_care.jpg',
  // Add paths for other variants
};
