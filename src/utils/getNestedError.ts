// utils/getNestedError.ts
import { FieldErrors, FieldError } from 'react-hook-form';

export const getNestedError = (
  errors: FieldErrors,
  name: string
): FieldError | undefined => {
  const keys = name.split('.');
  let current: any = errors;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }

  return current as FieldError;
};
