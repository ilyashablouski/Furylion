import React from 'react';
import styled from 'styled-components';

import useSettingItem from '@/hooks/useSettingItem';
import FeedbackBlock from '@/components/FeedbackBlock';

import HomeSection from './components/HeroSection';
import WorksSection from './components/WorksSection';
import ServicesSection from './components/ServicesSection';
import TechSection from './components/TechSection';
import PlatformSection from './components/PlatformSection';
import TeamSection from './components/TeamSection';
import ClientsSection from './components/ClientsSection';
import FeedbackSection from './components/FeedbackSection';

function Home() {
  return (
    <>
      <HomeSection />
      <WorksSection />
      <ServicesSection />
      <TechSection />
      <PlatformSection />
      <TeamSection />
      <ClientsSection />
      <FeedbackSection />
    </>
  );
}

export default Home;
