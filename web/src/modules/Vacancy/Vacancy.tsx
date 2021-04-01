import React from 'react';
import styled from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';

import TopSection from './components/TopSection';
import GetSection from './components/GetSection';
import JobSection from './components/MainSection/JobSection';

function Vacancy() {
  const page = useCurrentPage();

  return (
    <>
      <TopSection />
      <JobSection />
      <GetSection />
    </>
  );
}

export default Vacancy;
