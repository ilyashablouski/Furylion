import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as SmallArrowIcon } from '@/assets/svg/ads/small-arrow-down.svg';
import useCurrentPage from '@/hooks/useCurrentPage';
import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';
import { AdsHeadSectionType } from '@/typings/model';

import AdsHeadSwiper from './components/AdsHeadSwiper';

function HeaderSection() {
  const page = useCurrentPage<AdsHeadSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper>
      <Inner>
        <Title data-text="PLAYABLE ADS">Playable ADS</Title>
        <Text>{pageFields.headAdsText}</Text>
      </Inner>

      <DownArrow>
        <SmallArrowIcon />
      </DownArrow>

      <AdsHeadSwiper adsHeadItems={pageFields.headAdsItems} />
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
  position: relative;
  margin: 0 auto;
  padding-top: 215px;
  padding-bottom: 170px;
  max-width: 1920px;
  text-align: center;

  ${media.tabletSmallOnly(css`
    padding-top: 140px;
    padding-bottom: 115px;
  `)}

  ${media.mobile(css`
    padding-top: 140px;
    padding-bottom: 102px;
  `)}
`;

const Inner = styled.div`
  position: relative;
  display: inline-block;
`;
const Title = styled.span`
  position: relative;
  z-index: 1;
  width: 100%;
  font-weight: 900;
  font-size: 265px;
  line-height: 100%;
  text-transform: uppercase;
  word-break: break-word;
  color: ${colors.white};

  ${media.desktop1366(css`
    font-size: 19.2vw;
  `)}

  ${media.mobile(css`
    font-size: 18.7vw;
  `)}

  &:before {
    content: attr(data-text);
    position: absolute;
    top: -13.1%;
    left: 0;
    transform-origin: bottom;
    transform: rotateX(180deg);
    line-height: 1em;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.26) -0.06%,
      rgba(155, 155, 155, 0) 37.65%
    );
    filter: blur(2px);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const Text = styled.span`
  margin-top: 52px;
  display: block;
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    margin-top: 60px;
    font-size: 24px;
  `)}

  ${media.mobile(css`
    margin-top: 93px;
    font-size: 20px;
    line-height: 160%;
  `)}
`;

const DownArrow = styled.div`
  animation: ${animateUpDown} 500ms linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export default HeaderSection;
