// configs/leaveonConfigs.ts
import { FieldConfig } from '../types';

export const leaveonConfigs: Record<string, FieldConfig[]> = {
  moisturizer: [
    {
      name: 'dosageForm',
      label: 'Dosage Form',
      type: 'select',
      required: true,
      options: ['Cream', 'Lotion', 'Gel'],
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
  sunscreen: [
    {
      name: 'dosageForm',
      label: 'Dosage Form',
      type: 'select',
      required: true,
      options: ['Spray', 'Cream', 'Gel'],
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
      name: 'type',
      label: 'Type',
      type: 'radio',
      required: true,
      options: ['Chemical', 'Physical'],
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
      name: 'spf',
      label: 'SPF',
      type: 'number',
      required: true,
      enable: true,
    },
    {
      name: 'pa',
      label: 'PA',
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
  'dark-spot treatment': [
    {
      name: 'dosageForm',
      label: 'Dosage Form',
      type: 'select',
      required: true,
      options: ['Serum', 'Cream'],
      enable: true,
    },
    {
      name: 'activeIngredients',
      label: 'Active Ingredients',
      type: 'text',
      required: true,
      enable: true,
    },
    // Add more fields as needed
  ],
  'acne spot treatment': [
    {
      name: 'dosageForm',
      label: 'Dosage Form',
      type: 'select',
      required: true,
      options: ['Gel', 'Cream'],
      enable: true,
    },
    {
      name: 'activeIngredients',
      label: 'Active Ingredients',
      type: 'text',
      required: true,
      enable: true,
    },
    // Add more fields as needed
  ],
  'under-eye treatment': [
    {
      name: 'dosageForm',
      label: 'Dosage Form',
      type: 'select',
      required: true,
      options: ['Cream', 'Gel'],
      enable: true,
    },
    {
      name: 'activeIngredients',
      label: 'Active Ingredients',
      type: 'text',
      required: true,
      enable: true,
    },
    // Add more fields as needed
  ],
  'lip care': [
    {
      name: 'dosageForm',
      label: 'Dosage Form',
      type: 'select',
      required: true,
      options: ['Balm', 'Gloss'],
      enable: true,
    },
    {
      name: 'activeIngredients',
      label: 'Active Ingredients',
      type: 'text',
      required: true,
      enable: true,
    },
    // Add more fields as needed
  ],
  // Add configurations for other leave-on variants
};
