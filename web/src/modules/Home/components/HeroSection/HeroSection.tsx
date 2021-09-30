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

export interface HeroSectionProps {
  courses?: boolean;
}

function HeroSection({ courses }: HeroSectionProps) {
  const page = useCurrentPage<HeroSectionType>();
  const pageFields = page?.templateFields;
  const image = pageFields?.heroImage;
  const imageMobile = pageFields?.heroMobileImage;
  const video = pageFields?.heroVideo;
  const title = pageFields?.heroTitle;
  const text = pageFields?.heroText;

  const arrowRef = useRef<HTMLElement>(null);
  return (
    <Wrapper id={pageFields?.heroId ?? ''}>
      {courses ? (
        <>
          <BackgroundVideo src={video?.url ?? ''} muted autoPlay loop />
          <Shadow />
        </>
      ) : (
        <BackgroundPicture
          desktop={convertThumbnailToPictureImage(image?.desktop)}
          laptop={convertThumbnailToPictureImage(image?.laptop)}
          tabletLarge={convertThumbnailToPictureImage(image?.tablet)}
          mobileSmall={convertThumbnailToPictureImage(imageMobile?.mobile)}
          className="hero-background"
        />
      )}

      <ContentContainer>
        <Inner>
          <Title courses={courses}>{title}</Title>
          <Text courses={courses}>{text}</Text>
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
    height: calc(var(--vh, 1vh) * 100);
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

const BackgroundVideo = styled.video`
  position: absolute;
  z-index: 0;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

const Shadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
`;

const Title = styled.span<{ courses: HeroSectionProps['courses'] }>`
  margin: 0 auto;
  display: block;
  max-width: 642px;
  font-weight: 900;
  font-size: 72px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;

  ${({ courses }) =>
    courses &&
    css`
      font-size: 126px;
      line-height: 90%;

      ${media.tablet(css`
        font-size: 96px;
      `)}
    `};

  ${media.tabletSmallOnly(css`
    font-size: 64px;
  `)}

  ${({ courses }) =>
    courses &&
    css`
      ${media.tabletSmallOnly(css`
        font-size: 96px;
      `)}
    `};

  ${media.mobile(css`
    font-size: 38px;
    text-transform: initial;
  `)}

  ${({ courses }) =>
    courses &&
    css`
      ${media.mobile(css`
        text-transform: uppercase;
        font-size: 54px;
      `)}
    `};
`;

const Text = styled.p<{ courses: HeroSectionProps['courses'] }>`
  margin: 30px auto 0;
  max-width: 660px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;

  ${({ courses }) =>
    courses &&
    css`
      font-weight: 900;
      font-size: 32px;
      line-height: 130%;

      ${media.tablet(css`
        font-size: 24px;
      `)}

      ${media.tablet(css`
        font-size: 18px;
        line-height: 160%;
        text-transform: uppercase;
      `)}
    `};
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
  border-radius: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);

  svg {
    position: absolute;
    top: 55%;
    transform: translateY(-50%);
  }

  svg path {
    fill: rgba(142, 143, 140);

    transition: all 350ms ease-in-out;
    opacity: 0.7;
  }

  &:hover {
    svg path {
      opacity: 1;
    }
  }
`;

export default HeroSection;
