import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormData, Variant, FormulationType, FieldConfig } from '../types';
import { rinseoffConfigs } from '../configs/rinseoffConfigs';
import { leaveonConfigs } from '../configs/leaveonConfigs';
import FormField from './Formfield';

const PhysicalAppearancesForm: React.FC = () => {
  const { watch } = useFormContext<FormData>();
  const formulationType = watch('formulationType') as FormulationType;
  const variant = watch('variant') as Variant;

  let fields: FieldConfig[] = [];

  if (formulationType === 'rinse-off') {
    fields = rinseoffConfigs[variant] || [];
  } else if (formulationType === 'leave-on') {
    fields = leaveonConfigs[variant] || [];
  }

  return (
    <div>
      <h2>Physical Appearances</h2>
      {fields.length > 0 ? (
        fields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            parentName="physicalAppearances"
          />
        ))
      ) : (
        <p>No fields configured for this variant.</p>
      )}
    </div>
  );
};

export default PhysicalAppearancesForm;
