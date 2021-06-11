import React from 'react';
import styled from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { AdsHeadSectionType } from '@/typings/model';
import Gallery from '@/modules/PlayableAds/components/Gallery';

function GallerySection() {
  const page = useCurrentPage<AdsHeadSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Section>
      <WrapperGallery>
        <Gallery itemList={pageFields.headAdsItemsTop} />
        <Gallery isRevert={true} itemList={pageFields.headAdsItemsBottom} />
      </WrapperGallery>
    </Section>
  );
}

const Section = styled.section`
  margin-bottom: 50px;
  width: 100%;
  overflow: hidden;
`;

const WrapperGallery = styled.div`
  max-width: 100%;
  margin: 30px 0;
`;

export default GallerySection;
