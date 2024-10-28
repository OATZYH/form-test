// components/FormulationForm.tsx
"use client";
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormData } from './types';
import FormulationTypeSelector from './FormulationTypeSelector';
import PhysicalAppearancesForm from './PhysicalAppearancesForm';
import OtherSpecificationsForm from './OtherSpecificationsForm';
import HeroSection from './HeroSection'; // Import the HeroSection component

const FormulationForm: React.FC = () => {
  const methods = useForm<FormData>({
    defaultValues: {
      formulationType: undefined,
      variant: undefined,
      physicalAppearances: {},
      otherSpecifications: {},
    },
  });
  const [step, setStep] = useState(1);

  const onSubmit = async (data: FormData) => {
    console.log('Form Data:', data);
    // Implement your API call here
    try {
      const response = await fetch('/api/formulate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      // Optionally, display a success message or redirect
    } catch (error) {
      console.error('Error:', error);
      // Optionally, display an error message
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <FormulationTypeSelector onNext={() => setStep(2)} />}
        {step === 2 && (
          <>
            <HeroSection /> 
            <PhysicalAppearancesForm />
            <OtherSpecificationsForm />

            <button
              type="button"
              onClick={() => setStep(1)}
              style={{ marginRight: '1rem' }}
            >
              Back
            </button>

            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </FormProvider>
  );
};

export default FormulationForm;
