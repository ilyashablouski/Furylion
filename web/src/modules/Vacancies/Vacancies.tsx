import React from 'react';

import useSettingItem from '@/hooks/useSettingItem';
import AboutSection from '@/components/AboutSection';

import HeaderSection from './components/HeaderSection';
import JobsSection from './components/JobsSection';
import TeamLifeSection from './components/TeamLifeSection';

function Vacancies() {
  const formTitle = useSettingItem('FORM_TITLE');
  return (
    <>
      <HeaderSection />
      <JobsSection />
      <TeamLifeSection />
      <AboutSection className="about-title--small" formTitle={formTitle} />
    </>
  );
}

export default Vacancies;
