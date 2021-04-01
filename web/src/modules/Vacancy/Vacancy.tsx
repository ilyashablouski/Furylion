import React, { useEffect } from 'react';

import useCurrentVacancy from '@/hooks/useCurrentVacancy';

import TopSection from './components/TopSection';
import GetSection from './components/GetSection';
import JobSection from './components/MainSection/JobSection';

function Vacancy() {
  const vacancy = useCurrentVacancy();
  useEffect(() => {
    console.log(vacancy);
  }, []);
  return (
    <>
      <TopSection />
      <JobSection />
      <GetSection />
    </>
  );
}

export default Vacancy;
