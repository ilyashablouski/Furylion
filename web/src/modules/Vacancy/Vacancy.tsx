import React from 'react';

import AboutSection from '@/components/AboutSection';
import useCurrentPage from '@/hooks/useCurrentPage';

import TopSection from './components/TopSection';
import GetSection from './components/GetSection';
import JobSection from './components/MainSection/JobSection';

function Vacancy() {
  return (
    <>
      <TopSection />
      <JobSection />
      {/*<GetSection />*/}
      {/*<AboutSection />*/}
    </>
  );
}

export default Vacancy;
