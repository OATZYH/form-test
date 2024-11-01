import React from 'react';
import { useFormContext } from 'react-hook-form';

const OtherSpecificationsForm: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div>
      <h2>Other Specifications</h2>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Specific Ingredients:
          <input
            {...register('otherSpecifications.specificIngredients')}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Claims:
          <input
            {...register('otherSpecifications.claims')}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Target Group - Gender:
          <input
            {...register('otherSpecifications.targetGroup.gender')}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Target Group - Age:
          <input
            type="number"
            {...register('otherSpecifications.targetGroup.age')}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Target Group - Skin Type:
          <input
            {...register('otherSpecifications.targetGroup.skinType')}
            style={{ marginLeft: '0.5rem' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Preferences:
          <div style={{ marginLeft: '0.5rem' }}>
            <label style={{ marginRight: '1rem' }}>
              <input
                type="checkbox"
                value="Organic"
                {...register('otherSpecifications.preferences.Organic')}
              />
              Organic
            </label>
            <label style={{ marginRight: '1rem' }}>
              <input
                type="checkbox"
                value="Vegan"
                {...register('otherSpecifications.preferences.Vegan')}
              />
              Vegan
            </label>
            <label>
              <input
                type="checkbox"
                value="Cruelty-Free"
                {...register('otherSpecifications.preferences.CrueltyFree')}
              />
              Cruelty-Free
            </label>
          </div>
        </label>
      </div>
    </div>
  );
};

export default OtherSpecificationsForm;
