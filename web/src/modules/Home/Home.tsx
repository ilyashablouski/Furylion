import React from 'react';

import useSettingItem from '@/hooks/useSettingItem';
import AboutSection from '@/components/AboutSection';

import HomeSection from './components/HeroSection';
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
      <HomeSection />
      <WorksSection />
      <ServicesSection />
      <TechSection />
      <PlatformSection />
      <TeamSection />
      <ClientsSection />
      <AboutSection formTitle={formTitle} />
    </>
  );
}

export default Home;
