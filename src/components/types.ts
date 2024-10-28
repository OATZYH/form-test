// types.ts
export type FormulationType = 'rinse-off' | 'leave-on';

export type Variant =
  | 'make-up remover'
  | 'cleanser'
  | 'rinse-off mask'
  | 'moisturizer'
  | 'sunscreen'
  | 'dark-spot treatment'
  | 'acne spot treatment'
  | 'under-eye treatment'
  | 'lip care';

export type InputType = 'text' | 'number' | 'select' | 'radio' | 'checkbox';

export interface FieldConfig {
  name: string;
  label: string;
  type: InputType;
  required: boolean;
  options?: string[]; // Applicable for 'select', 'radio', 'checkbox'
}

export interface PhysicalAppearances {
  [key: string]: any; // Dynamic keys based on fields
}

export interface TargetGroup {
  gender?: string;
  age?: number;
  skinType?: string;
}

export interface OtherSpecifications {
  specificIngredients?: string;
  claims?: string;
  targetGroup?: TargetGroup;
  preferences?: string;
}

export interface FormData {
  formulationType: FormulationType;
  variant: Variant;
  physicalAppearances: PhysicalAppearances;
  otherSpecifications: OtherSpecifications;
}
