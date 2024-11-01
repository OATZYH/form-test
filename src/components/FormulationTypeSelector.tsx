import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormData, FormulationType, Variant, FieldConfig } from '../types';
import { rinseoffConfigs } from '../configs/rinseoffConfigs';
import { leaveonConfigs } from '../configs/leaveonConfigs';

interface Props {
  onNext: () => void;
}

const FormulationTypeSelector: React.FC<Props> = ({ onNext }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<FormData>();

  const formulationType = watch('formulationType') as FormulationType;
  const variant = watch('variant') as Variant;

  const isNextDisabled = !formulationType || !variant;

  return (
    <div>
      <h2>Select Formulation Type</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ marginRight: '1rem' }}>
          <input
            type="radio"
            value="rinse-off"
            {...register('formulationType')}
          />
          Rinse-off
        </label>
        <label>
          <input
            type="radio"
            value="leave-on"
            {...register('formulationType')}
          />
          Leave-on
        </label>
      </div>
      {errors.formulationType && (
        <p style={{ color: 'red' }}>{errors.formulationType.message}</p>
      )}

      {/* Variant Selection */}
      {formulationType && (
        <div style={{ marginTop: '1rem' }}>
          <h3>Select Variant</h3>
          {formulationType === 'rinse-off' && (
            <>
              <div style={{ marginBottom: '0.5rem' }}>
                {Object.entries(rinseoffConfigs).map(([variantKey, configs]) => (
                  // Only render if at least one field is enabled
                  configs.some(field => field.enable !== false) && (
                    <label key={variantKey} style={{ marginRight: '1rem' }}>
                      <input
                        type="radio"
                        value={variantKey}
                        {...register('variant')}
                      />
                      {variantKey.charAt(0).toUpperCase() + variantKey.slice(1)}
                    </label>
                  )
                ))}
              </div>
              {/* Add other rinse-off variants here if any */}
            </>
          )}
          {formulationType === 'leave-on' && (
            <>
              <div style={{ marginBottom: '0.5rem' }}>
                {Object.entries(leaveonConfigs).map(([variantKey, configs]) => (
                  // Only render if at least one field is enabled
                  configs.some(field => field.enable !== false) && (
                    <label key={variantKey} style={{ marginRight: '1rem' }}>
                      <input
                        type="radio"
                        value={variantKey}
                        {...register('variant')}
                      />
                      {variantKey.charAt(0).toUpperCase() + variantKey.slice(1)}
                    </label>
                  )
                ))}
              </div>
              {/* Add other leave-on variants here if any */}
            </>
          )}
          {errors.variant && (
            <p style={{ color: 'red' }}>{errors.variant.message}</p>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={onNext}
        disabled={isNextDisabled}
        style={{ marginTop: '1rem' }}
      >
        Next
      </button>
    </div>
  );
};

export default FormulationTypeSelector;
