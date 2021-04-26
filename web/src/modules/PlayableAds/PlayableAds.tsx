import React from 'react';
import styled from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import HeaderSection from '@/modules/PlayableAds/components/HeaderSection';

import AdvantagesSection from './components/AdvantagesSection';

function PlayableAds() {
  const page = useCurrentPage();

  return (
    <>
      <HeaderSection />
      <AdvantagesSection />
    </>
  );
}

export default PlayableAds;
