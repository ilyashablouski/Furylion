import React from 'react';

import SecondArtSection from '@/modules/Services/components/SecondArtSection';
import AnimationSection from '@/modules/Services/components/AnimationSection';

import FirstArtSection from './components/FirstArtSection';
import HeaderSection from './components/HeaderSection';
import TextBannerSection from './components/TextBannerSection';

function Services() {
  return (
    <>
      <HeaderSection />
      <TextBannerSection />
      <FirstArtSection />
      <SecondArtSection />
      <AnimationSection />
    </>
  );
}
export default Services;
