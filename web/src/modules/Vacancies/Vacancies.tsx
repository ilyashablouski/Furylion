import React from 'react';

import useSettingItem from '@/hooks/useSettingItem';
import FeedbackBlock from '@/components/FeedbackBlock';
import FeedbackSection from '@/modules/Vacancies/components/FeedbackSection';

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
      <FeedbackSection />
    </>
  );
}

export default Vacancies;
