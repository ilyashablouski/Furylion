import React from 'react';
import styled from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import HeaderSection from '@/modules/PlayableAds/components/HeaderSection';

function PlayableAds() {
  const page = useCurrentPage();

  return (
    <>
      <HeaderSection />
    </>
  );
}

export default PlayableAds;
