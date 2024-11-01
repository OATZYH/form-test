import React from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { variantImages } from '../configs/variantImages';
import { FormData, Variant } from '../types';

const HeroSection: React.FC = () => {
  const { watch } = useFormContext<FormData>();
  const variant = watch('variant') as Variant;

  const imageUrl = variantImages[variant];

  if (!imageUrl) {
    return null; // Optionally, display a default image or nothing
  }

  return (
    <div style={{ marginBottom: '2rem', position: 'relative', width: '100%', height: '300px' }}>
      <Image
        src={imageUrl}
        alt={`${variant} image`}
        layout="fill"
        objectFit="cover"
        priority // Optional: prioritize loading
      />
    </div>
  );
};

export default HeroSection;
