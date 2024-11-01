// schemas/index.ts
import { z } from 'zod';
import { rinseoffConfigs } from '../configs/rinseoffConfigs';
import { leaveonConfigs } from '../configs/leaveonConfigs';

// Formulation Type Schema
export const formulationTypeSchema = z.enum(['rinse-off', 'leave-on']);

// Variant Schema
export const variantSchema = z.enum([
  'make-up remover',
  'cleanser',
  'rinse-off mask',
  'moisturizer',
  'sunscreen',
  'dark-spot treatment',
  'acne spot treatment',
  'under-eye treatment',
  'lip care',
]);

// Input Type Schema
export const inputTypeSchema = z.enum(['text', 'number', 'select', 'radio', 'checkbox']);

// Field Configuration Schema
export const fieldConfigSchema = z.object({
  name: z.string(),
  label: z.string(),
  type: inputTypeSchema,
  required: z.boolean(),
  options: z.array(z.string()).optional(),
  enable: z.boolean().optional(),
});

// Physical Appearances Schema (Dynamic based on formulation type and variant)
export const physicalAppearancesSchema = z.record(z.any());

// Target Group Schema
export const targetGroupSchema = z.object({
  gender: z.string().optional(),
  age: z.number().optional(),
  skinType: z.string().optional(),
});

// Other Specifications Schema
export const otherSpecificationsSchema = z.object({
  specificIngredients: z.string().optional(),
  claims: z.string().optional(),
  targetGroup: targetGroupSchema.optional(),
  preferences: z.record(z.boolean()).optional(),
});

// Form Data Schema with conditional validation
export const formDataSchema = z.object({
  formulationType: formulationTypeSchema,
  variant: variantSchema,
  physicalAppearances: physicalAppearancesSchema,
  otherSpecifications: otherSpecificationsSchema,
}).refine((data) => {
  const { formulationType, variant } = data;
  if (formulationType === 'rinse-off') {
    return variant in rinseoffConfigs && rinseoffConfigs[variant].some(field => field.enable !== false);
  } else if (formulationType === 'leave-on') {
    return variant in leaveonConfigs && leaveonConfigs[variant].some(field => field.enable !== false);
  }
  return false;
}, {
  message: 'Selected variant is not available for the chosen formulation type.',
  path: ['variant'], // Path of the error
});
