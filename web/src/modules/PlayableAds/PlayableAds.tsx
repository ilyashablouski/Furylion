import React from 'react';

import useCurrentPage from '@/hooks/useCurrentPage';

import AdvantagesSection from './components/AdvantagesSection';
import CpiSection from './components/CpiSection';
import HeaderSection from './components/HeaderSection';
import RateSection from './components/RateSection';
import ReengagementSection from './components/ReengagementSection';

function PlayableAds() {
  const page = useCurrentPage();

  return (
    <>
      <HeaderSection />
      <AdvantagesSection />
      <RateSection />
      <CpiSection />
      <ReengagementSection />
    </>
  );
}

export default PlayableAds;
