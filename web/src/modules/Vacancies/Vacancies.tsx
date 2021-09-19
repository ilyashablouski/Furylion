import React from 'react';

import FeedbackSection from '@/components/FeedbackSection';
import useSettingItem from '@/hooks/useSettingItem';

import FlSchool from './components/FlSchool';
import HeaderSection from './components/HeaderSection';
import JobsSection from './components/JobsSection';
import TeamLifeSection from './components/TeamLifeSection';

function Vacancies() {
  const formTitle = useSettingItem('FORM_TITLE');

  return (
    <>
      <HeaderSection />
      <JobsSection />
      <FlSchool />
      <TeamLifeSection />
      <FeedbackSection
        className="about-title--small"
        formTitle={formTitle}
        idAnchor="contacts"
      />
    </>
  );
}

export default Vacancies;
