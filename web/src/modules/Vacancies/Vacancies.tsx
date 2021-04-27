import React from 'react';

import FeedbackSection from '@/components/FeedbackSection';
import useSettingItem from '@/hooks/useSettingItem';

import HeaderSection from './components/HeaderSection';
import JobsSection from './components/JobsSection';
import TeamLifeSection from './components/TeamLifeSection';

function Vacancies() {
  const formTitle = useSettingItem('FORM_TITLE');

  return (
    <>
      {/*<HeaderSection />*/}
      {/*<JobsSection />*/}
      {/*<TeamLifeSection />*/}
      {/*<FeedbackSection className="about-title--small" formTitle={formTitle} />*/}
    </>
  );
}

export default Vacancies;
