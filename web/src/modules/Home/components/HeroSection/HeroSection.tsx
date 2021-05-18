import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import Picture from '@/components/Picture';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import useCurrentPage from '@/hooks/useCurrentPage';
import { HeroSectionType } from '@/typings/model';
import { ReactComponent as ArrowIcon } from '@/assets/svg/down-arrow.svg';
import { media } from '@/utils/mixin';
import { scrollDown } from '@/utils/common';

function HeroSection() {
  const page = useCurrentPage<HeroSectionType>();
  const pageFields = page?.templateFields;
  const image = pageFields?.heroImage;
  const imageMobile = pageFields?.heroMobileImage;
  const title = pageFields?.heroTitle;
  const text = pageFields?.heroText;

  const arrowRef = useRef<HTMLElement>(null);
  return (
    <Wrapper id={pageFields?.heroId ?? ''}>
      <BackgroundPicture
        desktop={convertThumbnailToPictureImage(image?.desktop)}
        laptop={convertThumbnailToPictureImage(image?.laptop)}
        tabletLarge={convertThumbnailToPictureImage(image?.tablet)}
        mobileSmall={convertThumbnailToPictureImage(imageMobile?.mobile)}
        className="hero-background"
      />

      <ContentContainer>
        <Inner>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </Inner>

        <DownArrow ref={arrowRef} onClick={scrollDown}>
          <ArrowIcon />
        </DownArrow>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: relative;
  height: calc(var(--vh, 1vh) * 100);

  ${ContentContainer} {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

const BackgroundPicture = styled(Picture)`
  &.hero-background {
    position: initial;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
    top: 0;
    left: 0;
    background: #3e3e3e;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;

const Title = styled.span`
  margin: 0 auto;
  display: block;
  max-width: 642px;
  font-weight: 900;
  font-size: 72px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;

  ${media.tabletSmallOnly(css`
    font-size: 64px;
  `)}

  ${media.mobile(css`
    font-size: 40px;
    text-transform: initial;
  `)}
`;

const Text = styled.p`
  margin: 30px auto 0;
  max-width: 660px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
`;

const Inner = styled.div`
  position: relative;
  text-align: center;
  color: ${colors.white};
`;

const DownArrow = styled.i`
  position: absolute;
  left: 50%;
  bottom: 23px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  color: #939491;
  border-radius: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  transition: all 150ms ease-in-out;
  z-index: 2;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export default HeroSection;
