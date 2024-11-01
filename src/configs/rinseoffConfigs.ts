// configs/rinseoffConfigs.ts
import { FieldConfig } from '../types';

export const rinseoffConfigs: Record<string, FieldConfig[]> = {
  'make-up remover': [
    {
      name: 'dosageForm',
      label: 'Dosage Form',
      type: 'select',
      required: true,
      options: ['Oil', 'Water-Based', 'Micellar'],
      enable: true,
    },
    {
      name: 'viscosity',
      label: 'Viscosity',
      type: 'number',
      required: false,
      enable: true,
    },
    {
      name: 'texture',
      label: 'Texture',
      type: 'text',
      required: false,
      enable: true,
    },
    {
      name: 'function',
      label: 'Function',
      type: 'text',
      required: true,
      enable: true,
    },
    {
      name: 'pH',
      label: 'pH',
      type: 'number',
      required: true,
      enable: true,
    },
    {
      name: 'timeOfUse',
      label: 'Time of Use',
      type: 'text',
      required: false,
      enable: true,
    },
    {
      name: 'appearance',
      label: 'Appearance',
      type: 'text',
      required: false,
      enable: true,
    },
    // Add more fields as needed
  ],
  cleanser: [
    {
      name: 'dosageForm',
      label: 'Dosage Form',
      type: 'select',
      required: true,
      options: ['Gel', 'Foam', 'Cream'],
      enable: true,
    },
    {
      name: 'viscosity',
      label: 'Viscosity',
      type: 'number',
      required: false,
      enable: true,
    },
    {
      name: 'texture',
      label: 'Texture',
      type: 'text',
      required: false,
      enable: true,
    },
    {
      name: 'function',
      label: 'Function',
      type: 'text',
      required: true,
      enable: true,
    },
    {
      name: 'pH',
      label: 'pH',
      type: 'number',
      required: true,
      enable: true,
    },
    {
      name: 'timeOfUse',
      label: 'Time of Use',
      type: 'text',
      required: false,
      enable: true,
    },
    {
      name: 'appearance',
      label: 'Appearance',
      type: 'text',
      required: false,
      enable: true,
    },
    // Add more fields as needed
  ],
  'rinse-off mask': [
    {
      name: 'dosageForm',
      label: 'Dosage Form',
      type: 'select',
      required: true,
      options: ['Sheet', 'Clay', 'Exfoliating'],
      enable: true,
    },
    {
      name: 'viscosity',
      label: 'Viscosity',
      type: 'number',
      required: false,
      enable: true,
    },
    {
      name: 'texture',
      label: 'Texture',
      type: 'text',
      required: false,
      enable: true,
    },
    {
      name: 'function',
      label: 'Function',
      type: 'text',
      required: true,
      enable: true,
    },
    {
      name: 'pH',
      label: 'pH',
      type: 'number',
      required: true,
      enable: true,
    },
    {
      name: 'timeOfUse',
      label: 'Time of Use',
      type: 'text',
      required: false,
      enable: true,
    },
    {
      name: 'appearance',
      label: 'Appearance',
      type: 'text',
      required: false,
      enable: true,
    },
    // Add more fields as needed
  ],
  // Add configurations for other rinse-off variants
};
