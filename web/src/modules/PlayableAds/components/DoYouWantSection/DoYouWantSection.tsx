import React from 'react';
import styled, { css, keyframes } from 'styled-components';

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
      <Inner>
        <Title>{pageFields.doYouWantTitle}</Title>

        <ImagesContainer>
          <ImagesRow imagesGallery={firstGalleryImages} />
          <ImagesRow imagesGallery={secondGalleryImages} />
          <ImagesRow imagesGallery={thirdGalleryImages} />
        </ImagesContainer>
      </Inner>
    </Wrapper>
  );
}

export default DoYouWantSection;

const animationMarquee = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background: ${colors.red};
`;

const Inner = styled.div`
  max-width: 1920px;
  min-height: 966px;
  overflow: hidden;
`;

const Title = styled.span`
  padding-left: 100%;
  display: inline-block;
  font-weight: 900;
  font-size: 178.605px;
  line-height: 72.5%;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${colors.white};
  position: relative;
  z-index: 1;
  animation: ${animationMarquee} 10s infinite linear;
`;

const ImagesContainer = styled.div`
  transform-origin: center center;
  transform: rotate(17deg);
`;
