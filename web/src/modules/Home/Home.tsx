import React, { useEffect } from 'react';
import styled from 'styled-components';

import { isBrowser } from '@tager/web-core';

import IntroSection from './components/HeroSection/HeroSection';

function Home() {
  return <IntroSection />;
}

// const Button = styled.button<{ isActive: boolean }>`
//   color: ${(props) => (props.isActive ? 'red' : 'green')};
//
//   &:last-child {
//   }
// `;

export default Home;
