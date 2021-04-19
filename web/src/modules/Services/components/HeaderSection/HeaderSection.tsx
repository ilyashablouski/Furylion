import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { scrollDown } from '@/utils/common';
import { ReactComponent as ArrowIcon } from '@/assets/svg/down-arrow.svg';
import { ServiceHeaderSectionType } from '@/typings/model';

function HeaderSection() {
  const arrowRef = useRef<HTMLElement>(null);
  const page = useCurrentPage<ServiceHeaderSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper>
      <Inner>
        <Title data-text="SERVICES">Services</Title>
        <Text>{pageFields.headText}</Text>
      </Inner>

      <DownArrow ref={arrowRef} onClick={scrollDown}>
        <ArrowIcon />
      </DownArrow>
    </Wrapper>
  );
}

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
  font-size: 269px;
  line-height: 100%;
  text-transform: uppercase;
  word-break: break-word;
  color: ${colors.white};

  ${media.desktop1366(css`
    font-size: 19.6vw;
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

const DownArrow = styled.i`
  position: absolute;
  left: 50%;
  bottom: 44px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  color: #610d0f;
  border-radius: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  transition: all 150ms ease-in-out;
  z-index: 2;

  ${media.tabletSmall(css`
    display: none;
  `)}

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

export default HeaderSection;
