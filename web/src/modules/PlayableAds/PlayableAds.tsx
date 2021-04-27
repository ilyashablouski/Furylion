import React from 'react';

import useCurrentPage from '@/hooks/useCurrentPage';
import EditorSection from '@/modules/PlayableAds/components/EditorSection';
import FeedbackSection from '@/components/FeedbackSection';
import useSettingItem from '@/hooks/useSettingItem';

import AdvantagesSection from './components/AdvantagesSection';
import CpiSection from './components/CpiSection';
import HeaderSection from './components/HeaderSection';
import RateSection from './components/RateSection';
import ReengagementSection from './components/ReengagementSection';
import FrameworkSection from './components/FrameworkSection';
import NetworksSection from './components/NetworksSection';

function PlayableAds() {
  // const formTitle = useCurrentPage<>();

  return (
    <>
      <HeaderSection />
      <AdvantagesSection />
      <RateSection />
      <CpiSection />
      <ReengagementSection />
      <FrameworkSection />
      <NetworksSection />
      <EditorSection />
      <FeedbackSection />
    </>
  );
}

export default PlayableAds;
