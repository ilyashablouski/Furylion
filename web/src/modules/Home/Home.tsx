import React from 'react';

import FeedbackSection from '@/components/FeedbackSection';
import useSettingItem from '@/hooks/useSettingItem';

import HeroSection from './components/HeroSection';
import WorksSection from './components/WorksSection';
import ServicesSection from './components/ServicesSection';
import TechSection from './components/TechSection';
import PlatformSection from './components/PlatformSection';
import TeamSection from './components/TeamSection';
import ClientsSection from './components/ClientsSection';

function Home() {
  const formTitle = useSettingItem('FORM_TITLE');
  return (
    <>
      <HeroSection />
      <WorksSection />
      <ServicesSection />
      <TechSection />
      <PlatformSection />
      <TeamSection />
      <ClientsSection />
      <FeedbackSection
        className="about-title--small"
        formTitle={formTitle}
        idAnchor="contacts"
      />
    </>
  );
}

export default Home;
