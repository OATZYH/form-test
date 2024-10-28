// components/OtherSpecificationsForm.tsx
import React from 'react';
import { useFormContext } from 'react-hook-form';

const OtherSpecificationsForm: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div>
      <h2>Other Specifications</h2>
      <div>
        <label>
          Specific Ingredients:
          <input {...register('otherSpecifications.specificIngredients')} />
        </label>
      </div>
      <div>
        <label>
          Claims:
          <input {...register('otherSpecifications.claims')} />
        </label>
      </div>
      <div>
        <label>
          Target Group - Gender:
          <input {...register('otherSpecifications.targetGroup.gender')} />
        </label>
      </div>
      <div>
        <label>
          Target Group - Age:
          <input
            type="number"
            {...register('otherSpecifications.targetGroup.age')}
          />
        </label>
      </div>
      <div>
        <label>
          Target Group - Skin Type:
          <input {...register('otherSpecifications.targetGroup.skinType')} />
        </label>
      </div>
      <div>
        <label>
          Preferences:
          <input {...register('otherSpecifications.preferences')} />
        </label>
      </div>
    </div>
  );
};

export default OtherSpecificationsForm;
