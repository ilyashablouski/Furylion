import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as SmallArrowIcon } from '@/assets/svg/ads/small-arrow-down.svg';
import useCurrentPage from '@/hooks/useCurrentPage';
import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';
import { AdsHeadSectionType } from '@/typings/model';

function HeaderSection() {
  const page = useCurrentPage<AdsHeadSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper id={pageFields?.headAdsId ?? ''}>
      <InnerWrapper>
        <Inner>
          <Title data-text="PLAYABLE ADS">Playable ADS</Title>
          <Text>{pageFields.headAdsText}</Text>
        </Inner>
        <DownArrow>
          <SmallArrowIcon />
        </DownArrow>
      </InnerWrapper>
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
  padding-top: 164px;
  display: flex;
  justify-content: center;
  text-align: center;
  overflow: hidden;

  ${media.tabletSmallOnly(css`
    padding-top: 143px;
  `)}

  ${media.mobile(css`
    padding-top: 138px;
  `)}
`;

const InnerWrapper = styled.div`
  max-width: 1920px;
`;

const Inner = styled.div`
  position: relative;
  display: inline-block;
`;

const Title = styled.span`
  position: relative;
  display: block;
  text-align: center;
  width: 100%;
  font-weight: 900;
  font-size: 176px;
  line-height: 100%;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${colors.white};
  z-index: 1;

  ${media.desktop1366(css`
    font-size: 12.7vw;
  `)}
  ${media.mobile(css`
    font-size: 12.4vw;
  `)}
  &:before {
    content: attr(data-text);
    position: absolute;
    top: -27%;
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
  margin-top: 30px;
  display: block;
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    margin-top: 81px;
    font-size: 24px;
  `)}

  ${media.mobile(css`
    margin-top: 51px;
    font-size: 20px;
    line-height: 160%;
  `)}
`;

const DownArrow = styled.div`
  margin-top: 25px;
  animation: ${animateUpDown} 500ms linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  ${media.tabletSmall(css`
    display: none;
  `)}
`;

export default HeaderSection;
