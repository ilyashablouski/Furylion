import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { DoYouWantSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';
import TickerLine from '@/components/TickerLine';

import ImagesRow from './components/ImagesRow';

function DoYouWantSection() {
  const page = useCurrentPage<DoYouWantSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  const firstGalleryItems = page.templateFields.doYouWantFirstGallery;
  const secondGalleryItems = page.templateFields.doYouWantSecondGallery;
  const thirdGalleryItems = page.templateFields.doYouWantThirdGallery;

  return (
    <Wrapper id="playableDoYouWant">
      <Inner>
        <TitleBlock>
          <TickerLine
            backgroundTicket="transparent"
            isLabelTicket={true}
            isAbove={true}
          >
            <Title>{pageFields.doYouWantTitle}</Title>
          </TickerLine>
        </TitleBlock>
        <ImagesContainer>
          <ImagesRow galleryItems={firstGalleryItems} />
          <ImagesRow galleryItems={secondGalleryItems} />
          <ImagesRow galleryItems={thirdGalleryItems} />
        </ImagesContainer>
      </Inner>
    </Wrapper>
  );
}

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

const TitleBlock = styled.div`
  display: flex;
`;

const Title = styled.span`
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

  ${media.tabletSmall(css`
    margin-top: 70px;
    padding-left: 0;
    display: block;
    text-align: left;
    animation: none;
    white-space: normal;
    line-height: 130%;
  `)}

  ${media.tabletSmallOnly(css`
    padding: 0 40px;
    font-size: 56px;
    max-width: 540px;
  `)}

  ${media.mobile(css`
    padding: 0 20px;
    font-size: 32px;
    max-width: 328px;
  `)}
`;

const ImagesContainer = styled.div`
  transform-origin: center center;
  transform: rotate(17deg);
`;

export default DoYouWantSection;
