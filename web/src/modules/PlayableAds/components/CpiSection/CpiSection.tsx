import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import ContentContainer from '@/components/ContentContainer';
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
    <Wrapper id="playableCpi">
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
          <SkewButton
            href={pageFields.cpiButtonUrl}
            color="dark"
            isNewTab={true}
          >
            {pageFields.cpiButtonLabel}
          </SkewButton>
        </ButtonWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

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

  ${media.tabletSmall(css`
    padding: 70px 0;
  `)}
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

  ${media.tabletSmallOnly(css`
    margin-top: -15px;
    max-width: 625px;
  `)}

  ${media.mobile(css`
    margin: 35px -20px 0;
  `)}

  img {
    image-rendering: -webkit-optimize-contrast;
  }
`;

const DownArrow = styled.div`
  margin: -18px auto 0;
  display: flex;
  justify-content: center;
  animation: ${animateUpDown} 500ms linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  ${media.tabletSmall(css`
    display: none;
  `)}

  ${media.mobile(css`
    margin-top: 34px;
    display: flex;
  `)}
`;

const ButtonWrapper = styled.div`
  margin: 46px auto 0;
  max-width: 377px;

  ${media.tabletSmallOnly(css`
    margin-top: 4px;
  `)}

  ${media.mobile(css`
    margin-top: 29px;
    max-width: 302px;
  `)}
`;

export default CpiSection;
