import React from 'react';

import useSettingItem from '@/hooks/useSettingItem';
import FeedbackBlock from '@/components/FeedbackBlock';

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
      <FeedbackBlock className="about-title--small" formTitle={formTitle} />
    </>
  );
}

export default Vacancies;
