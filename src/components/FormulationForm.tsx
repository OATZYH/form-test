"use client";
import React, { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formDataSchema } from '../schemas';
import { FormData, FormulationType, Variant } from '../types';
import FormulationTypeSelector from './FormulationTypeSelector';
import PhysicalAppearancesForm from './PhysicalAppearancesForm';
import OtherSpecificationsForm from './OtherSpecificationsForm';
import HeroSection from './HeroSection';
import { rinseoffConfigs } from '../configs/rinseoffConfigs';
import { leaveonConfigs } from '../configs/leaveonConfigs';

const FormulationForm: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(formDataSchema),
    defaultValues: {
      formulationType: 'rinse-off', // Default to 'rinse-off'
      variant: 'make-up remover' as Variant, // Default to an enabled variant within 'rinse-off'
      physicalAppearances: {},
      otherSpecifications: {},
    },
  });
  const { watch, setValue } = methods;
  const formulationType = watch('formulationType') as FormulationType;

  // Update the variant when formulationType changes
  useEffect(() => {
    let defaultVariant: Variant = 'make-up remover'; // Fallback variant

    if (formulationType === 'rinse-off') {
      const rinseVariants = Object.keys(rinseoffConfigs) as Variant[];
      // Find the first enabled variant
      const enabledRinseVariant = rinseVariants.find(variant => {
        const fields = rinseoffConfigs[variant];
        return fields.some(field => field.enable !== false);
      });
      if (enabledRinseVariant) {
        defaultVariant = enabledRinseVariant;
      }
    } else if (formulationType === 'leave-on') {
      const leaveonVariants = Object.keys(leaveonConfigs) as Variant[];
      // Find the first enabled variant
      const enabledLeaveonVariant = leaveonVariants.find(variant => {
        const fields = leaveonConfigs[variant];
        return fields.some(field => field.enable !== false);
      });
      if (enabledLeaveonVariant) {
        defaultVariant = enabledLeaveonVariant;
      }
    }

    setValue('variant', defaultVariant);
  }, [formulationType, setValue]);

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
        <FormulationTypeSelector onNext={() => {}} />
        <HeroSection />
        <PhysicalAppearancesForm />
        <OtherSpecificationsForm />

        {/* Navigation Buttons */}
        <div style={{ marginTop: '2rem' }}>
          {/* Back Button can be implemented if there are multiple steps */}
          {/* <button type="button" onClick={() => setStep(1)} style={{ marginRight: '1rem' }}>
            Back
          </button> */}

          <button type="submit">Submit</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default FormulationForm;
