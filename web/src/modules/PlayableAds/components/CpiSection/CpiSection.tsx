import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import ContentContainer from '@/components/ContentContainer';
import CurveButton from '@/components/CurveButton';
import SkewButton from '@/components/SkewButton';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { CpiSectionType } from '@/typings/model';
import Picture from '@/components/Picture';
import { ReactComponent as SmallArrowIcon } from '@/assets/svg/ads/small-arrow-down.svg';

function CpiSection() {
  const page = useCurrentPage<CpiSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper>
      <ContentContainer>
        <Title>{pageFields.cpiTitle}</Title>

        <ImageContainer>
          <Picture
            mobileSmall={convertThumbnailToPictureImage(pageFields.cpiImage)}
          />
        </ImageContainer>

        <DownArrow>
          <SmallArrowIcon />
        </DownArrow>

        <ButtonWrapper>
          <SkewButton href={pageFields.cpiButtonUrl} color="dark">
            {pageFields.cpiButtonLabel}
          </SkewButton>
        </ButtonWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

export default CpiSection;

const animateUpDown = keyframes`
  from {
    transform: translateY(0);
  }
  
  to {
    transform: translateY(-10px);
  }
`;

const Wrapper = styled.section`
  padding: 100px 0;
  background: ${colors.red};
`;
const Title = styled.span`
  display: block;
  text-align: center;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const ImageContainer = styled.div`
  margin: 35px auto 0;
  max-width: 703px;

  img {
    image-rendering: -webkit-optimize-contrast;
  }
`;

const DownArrow = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  animation: ${animateUpDown} 500ms linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

const ButtonWrapper = styled.div`
  margin: 47px auto 0;
  max-width: 397px;
`;
