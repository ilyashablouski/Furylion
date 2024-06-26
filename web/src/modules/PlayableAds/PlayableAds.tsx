import React from 'react';

import useCurrentPage from '@/hooks/useCurrentPage';
import EditorSection from '@/modules/PlayableAds/components/EditorSection';
import FeedbackSection from '@/components/FeedbackSection';
import { EditorFormType } from '@/typings/model';
import GallerySection from '@/modules/PlayableAds/components/GallerySection';

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
      <GallerySection />
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
        formProfileEmail={pageFields.formProfileEmail}
        formProfilePosition={pageFields.formProfilePosition}
        isProfileInfo={true}
        idAnchor="contacts"
      />
    </>
  );
}

export default PlayableAds;
