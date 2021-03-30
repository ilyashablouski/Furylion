import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

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
    <Wrapper>
      <BackgroundPicture
        tabletLarge={{
          src: image?.url,
          src2x: image?.url_2x,
          webp: image?.url_webp,
          webp2x: image?.url_webp_2x,
        }}
        mobileSmall={{
          src: imageMobile?.url,
          src2x: imageMobile?.url_2x,
          webp: imageMobile?.url_webp,
          webp2x: imageMobile?.url_webp_2x,
        }}
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
  height: 100vh;

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
  padding: 313px 0 212px;
  text-align: center;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    padding: 439px 0 383px;
  `)}

  ${media.mobile(css`
    padding: 212px 0 214px;
    min-height: 640px;
  `)}
`;

const DownArrow = styled.i`
  position: absolute;
  left: 50%;
  bottom: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  transition: all 150ms ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export default HeroSection;
