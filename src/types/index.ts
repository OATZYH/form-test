// types/index.ts
import { z } from 'zod';
import {
  formulationTypeSchema,
  variantSchema,
  fieldConfigSchema,
  targetGroupSchema,
  otherSpecificationsSchema,
  formDataSchema,
} from '../schemas';

export type FormulationType = z.infer<typeof formulationTypeSchema>;
export type Variant = z.infer<typeof variantSchema>;
export type InputType = 'text' | 'number' | 'select' | 'radio' | 'checkbox';

export interface FieldConfig {
  name: string;
  label: string;
  type: InputType;
  required: boolean;
  options?: string[]; // Applicable for 'select', 'radio', 'checkbox'
  enable?: boolean; // New field to control availability
}

export type PhysicalAppearances = Record<string, any>; // Dynamic keys based on fields

export interface TargetGroup {
  gender?: string;
  age?: number;
  skinType?: string;
}

export interface OtherSpecifications {
  specificIngredients?: string;
  claims?: string;
  targetGroup?: TargetGroup;
  preferences?: Record<string, boolean>; // Updated to reflect checkbox preferences
}

export interface FormData {
  formulationType: FormulationType;
  variant: Variant;
  physicalAppearances: PhysicalAppearances;
  otherSpecifications: OtherSpecifications;
}
