import React, { useRef } from 'react';

import SecondArtSection from '@/modules/Services/components/SecondArtSection';
import AnimationSection from '@/modules/Services/components/AnimationSection';
import useSettingItem from '@/hooks/useSettingItem';
import FeedbackSection from '@/components/FeedbackSection';
import DevelopmentSection from '@/modules/Services/components/DevelopmentSection';
import CoDevelopmentSection from '@/modules/Services/components/CoDevelopmentSection';
import AdsSection from '@/modules/Services/components/AdsSection';

import FirstArtSection from './components/FirstArtSection';
import HeaderSection from './components/HeaderSection';
import TextBannerSection from './components/TextBannerSection';
import OutStaffingSection from './components/OutstaffingSection';

function Services() {
  const formTitle = useSettingItem('FORM_TITLE');
  const artSectionRef = useRef<HTMLDivElement>(null);

  function scrollToArtSection() {
    if (artSectionRef.current) {
      window.scroll({
        top: artSectionRef.current.offsetTop ?? 0,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
      <HeaderSection scrollDown={scrollToArtSection} />
      <TextBannerSection />
      <FirstArtSection artRef={artSectionRef} />
      <SecondArtSection />
      <AnimationSection />
      <DevelopmentSection />
      <OutStaffingSection />
      <CoDevelopmentSection />
      <AdsSection />

      <FeedbackSection
        className="about-title--small"
        formTitle={formTitle}
        idAnchor="contacts"
      />
    </>
  );
}

export default Services;
