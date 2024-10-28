// components/PhysicalAppearancesForm.tsx
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormData, FieldConfig } from './types';
import { physicalAppearancesConfig } from '../configs/physicalAppearancesConfig';
import FormField from './Formfield';

const PhysicalAppearancesForm: React.FC = () => {
  const { watch } = useFormContext<FormData>();
  const variant = watch('variant');

  // Get the field configurations for the selected variant
  const fields: FieldConfig[] = physicalAppearancesConfig[variant] || [];

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
