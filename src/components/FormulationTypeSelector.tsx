// components/FormulationTypeSelector.tsx
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useFormulationStore } from './store'; 
import { leaveonConfigs, rinseoffConfigs } from '../configs/physicalAppearancesConfig'; // Import the physicalAppearancesConfig

interface Props {
  onNext: () => void;
}

const FormulationTypeSelector: React.FC<Props> = ({ onNext }) => {
  const { register, watch } = useFormContext();
  const formulationType = watch('formulationType');
  const setFormData = useFormulationStore((state: { setFormData: any; }) => state.setFormData);

  const currentConfigs = formulationType === 'leave-on' ? leaveonConfigs : rinseoffConfigs;
  const variants = Object.keys(currentConfigs);

  const handleNext = () => {
    setFormData({ formulationType });
    onNext();
  };

  return (
    <div>
      <h2>Select Formulation Type</h2>
      <label>
        <input
          type="radio"
          value="rinse-off"
          {...register('formulationType', { required: true })}
        />
        Rinse-off
      </label>
      <label>
        <input
          type="radio"
          value="leave-on"
          {...register('formulationType', { required: true })}
        />
        Leave-on
      </label>

      {/* Variant Selection */}
      {formulationType && (
        <div>
          <h3>Select Variant</h3>
          {variants.map((variant) => (
            <label key={variant} style={{ display: 'block', marginBottom: '8px' }}>
              <input
                type="radio"
                value={variant}
                {...register('variant', { required: true })}
              />
              {variant
                .split('-') // Handle cases like 'make-up remover'
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </label>
          ))}
        </div>
      )}

      <button type="button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default FormulationTypeSelector;
