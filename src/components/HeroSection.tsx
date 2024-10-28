// components/HeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { variantImages } from '../configs/physicalAppearancesConfig';
import { FormData } from './types';

const HeroSection: React.FC = () => {
  const { watch } = useFormContext<FormData>();
  const variant = watch('variant');

  const imageUrl = variantImages[variant];

  if (!imageUrl) {
    return null; // Optionally, display a default image or nothing
  }

  return (
    <div style={{ marginBottom: '2rem' }}>
      <Image
        src={imageUrl}
        alt={`${variant} image`}
        width={600} // Adjust as needed
        height={400} // Adjust as needed
        objectFit="cover"
      />
    </div>
  );
};

export default HeroSection;
