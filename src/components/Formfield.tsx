import React from 'react';
import { useFormContext, FieldError } from 'react-hook-form';
import { FieldConfig } from '../types';
import { getNestedError } from '../utils/getNestedError';

interface FormFieldProps {
  field: FieldConfig;
  parentName: string;
}

const FormField: React.FC<FormFieldProps> = ({ field, parentName }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldName = `${parentName}.${field.name}`;
  const error = getNestedError(errors, fieldName) as FieldError | undefined;

  const renderInput = () => {
    switch (field.type) {
      case 'text':
      case 'number':
        return (
          <input
            type={field.type}
            {...register(fieldName)}
            style={{ marginLeft: '0.5rem' }}
          />
        );

      case 'select':
        return (
          <select
            {...register(fieldName)}
            style={{ marginLeft: '0.5rem' }}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case 'radio':
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {field.options?.map((option) => (
              <label key={option} style={{ marginRight: '1rem' }}>
                <input
                  type="radio"
                  value={option}
                  {...register(fieldName)}
                />
                {option}
              </label>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {field.options?.map((option) => (
              <label key={option} style={{ marginRight: '1rem' }}>
                <input
                  type="checkbox"
                  value={option}
                  {...register(`${fieldName}.${option}`)}
                />
                {option}
              </label>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label>
        {field.label} {field.required && '*'}:
        {renderInput()}
      </label>
      {error && (
        <p style={{ color: 'red', marginTop: '0.25rem' }}>
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormField;
