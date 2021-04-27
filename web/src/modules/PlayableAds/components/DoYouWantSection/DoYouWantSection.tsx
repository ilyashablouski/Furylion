import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { DoYouWantSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';

import ImagesRow from './components/ImagesRow';

function DoYouWantSection() {
  const page = useCurrentPage<DoYouWantSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  const firstGalleryImages = page.templateFields.doYouWantFirstGallery;
  const secondGalleryImages = page.templateFields.doYouWantSecondGallery;
  const thirdGalleryImages = page.templateFields.doYouWantThirdGallery;

  return (
    <Wrapper>
      <Title>{pageFields.doYouWantTitle}</Title>

      <ImagesContainer>
        <ImagesRow imagesGallery={firstGalleryImages} />
      </ImagesContainer>
    </Wrapper>
  );
}

export default DoYouWantSection;

const Wrapper = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: 1920px;
  text-align: center;
  background: ${colors.red};

  ${media.tabletSmallOnly(css``)}

  ${media.mobile(css``)}
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 178.605px;
  line-height: 72.5%;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};
`;

const ImagesContainer = styled.div``;
