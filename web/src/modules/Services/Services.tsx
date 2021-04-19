import React from 'react';

import SecondArtSection from '@/modules/Services/components/SecondArtSection';
import AnimationSection from '@/modules/Services/components/AnimationSection';
import useSettingItem from '@/hooks/useSettingItem';
import FeedbackSection from '@/components/FeedbackSection';
import DevelopmentSection from '@/modules/Services/components/DevelopmentSection';
import CoDevelopmentSection from '@/modules/Services/components/CoDevelopmentSection';

import FirstArtSection from './components/FirstArtSection';
import HeaderSection from './components/HeaderSection';
import TextBannerSection from './components/TextBannerSection';
import OutStaffingSection from './components/OutstaffingSection';

function Services() {
  const formTitle = useSettingItem('FORM_TITLE');
  return (
    <>
      <HeaderSection />
      <TextBannerSection />
      <FirstArtSection />
      <SecondArtSection />
      <AnimationSection />
      <DevelopmentSection />
      <OutStaffingSection />
      <CoDevelopmentSection />
      <FeedbackSection className="about-title--small" formTitle={formTitle} />
    </>
  );
}
export default Services;
