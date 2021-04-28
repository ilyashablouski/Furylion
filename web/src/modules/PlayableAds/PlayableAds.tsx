import React from 'react';

import useCurrentPage from '@/hooks/useCurrentPage';
import EditorSection from '@/modules/PlayableAds/components/EditorSection';
import FeedbackSection from '@/components/FeedbackSection';
import useSettingItem from '@/hooks/useSettingItem';
import { EditorFormType, FrameworkSectionType } from '@/typings/model';

import AdvantagesSection from './components/AdvantagesSection';
import CpiSection from './components/CpiSection';
import HeaderSection from './components/HeaderSection';
import RateSection from './components/RateSection';
import ReengagementSection from './components/ReengagementSection';
import FrameworkSection from './components/FrameworkSection';
import NetworksSection from './components/NetworksSection';
import DoYouWantSection from './components/DoYouWantSection';

function PlayableAds() {
  const page = useCurrentPage<EditorFormType>();
  if (!page) return null;

  const pageFields = page.templateFields;

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
      <DoYouWantSection />
      <FeedbackSection
        formTitle={pageFields.formTitle}
        formProfileTitle={pageFields.formProfileTitle}
        formProfileImage={pageFields.formProfileImage}
        formProfileLabel={pageFields.formProfileLabel}
        isProfileInfo={true}
      />
    </>
  );
}

export default PlayableAds;
