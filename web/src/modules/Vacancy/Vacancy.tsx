import React from 'react';

import FeedbackSection from '@/components/FeedbackSection';
import useSettingItem from '@/hooks/useSettingItem';

import TopSection from './components/TopSection';
import GetSection from './components/GetSection';
import JobSection from './components/JobSection';

function Vacancy() {
  const formVacancyTitle = useSettingItem('FORM_VACANCIES_TITLE');

  return (
    <>
      <TopSection />
      <JobSection />
      <GetSection />
      <FeedbackSection formTitle={formVacancyTitle} />
    </>
  );
}

export default Vacancy;
