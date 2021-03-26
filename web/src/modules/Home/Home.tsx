import React, { useEffect } from 'react';
import styled from 'styled-components';

import { isBrowser } from '@tager/web-core';

import useCurrentPage from '@/hooks/useCurrentPage';
// import { HomePageTemplate } from '@/typings/model';

import HomeSection from './components/HeroSection';
import WorksSection from './components/WorksSection';
import ServicesSection from './components/ServicesSection';
import TechSection from './components/TechSection';
import PlatformSection from './components/PlatformSection';
import TeamSection from './components/TeamSection';
import ClientsSection from './components/ClientsSection';
import AboutSection from './components/AboutSection';
import ContactsSection from './components/ContactsSection';

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
      <AboutSection />
      <ContactsSection />
    </>
  );
}

export default Home;
