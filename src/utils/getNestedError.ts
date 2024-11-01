// utils/getNestedError.ts
import { FieldErrors, FieldError } from 'react-hook-form';

/**
 * ดึงข้อผิดพลาดที่ซ้อนกันจากอ็อบเจ็กต์ errors ตามเส้นทางที่กำหนด
 *
 * @param errors - อ็อบเจ็กต์ข้อผิดพลาดจาก React Hook Form
 * @param name - เส้นทางของฟิลด์ในรูปแบบ "parent.child.grandchild"
 * @returns FieldError หรือ undefined ถ้าไม่มีข้อผิดพลาด
 */

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
