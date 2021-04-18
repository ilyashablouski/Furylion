import React from 'react';

import SecondArtSection from '@/modules/Services/components/SecondArtSection';
import AnimationSection from '@/modules/Services/components/AnimationSection';
import useSettingItem from '@/hooks/useSettingItem';
import FeedbackSection from '@/components/FeedbackSection';

import FirstArtSection from './components/FirstArtSection';
import HeaderSection from './components/HeaderSection';
import TextBannerSection from './components/TextBannerSection';

function Services() {
  const formTitle = useSettingItem('FORM_TITLE');
  return (
    <>
      <HeaderSection />
      <TextBannerSection />
      <FirstArtSection />
      <SecondArtSection />
      <AnimationSection />

      <FeedbackSection className="about-title--small" formTitle={formTitle} />
    </>
  );
}
export default Services;
