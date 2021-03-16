import React, { useEffect } from 'react';
import styled from 'styled-components';

import { isBrowser } from '@tager/web-core';

import useCurrentPage from '@/hooks/useCurrentPage';
import { HomePageTemplate } from '@/typings/model';

import HomeSection from './components/HeroSection';
import WorksSection from './components/WorksSection';

function Home() {
  // const page = useCurrentPage<HomePageTemplate>();

  return (
    <>
      <HomeSection />
      <WorksSection />
    </>
  );
}

// const Button = styled.button<{ isActive: boolean }>`
//   color: ${(props) => (props.isActive ? 'red' : 'green')};
//
//   &:last-child {
//   }
// `;

export default Home;
