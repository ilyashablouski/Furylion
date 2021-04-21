import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

import ProductionBlock from './components/ProductionBlock';
import PortingBlock from './components/PortingBlock';

function AnimationSection() {
  return (
    <Wrapper>
      <TitleBlock>
        <Title>Animation</Title>
      </TitleBlock>
      <ProductionBlock />
      <PortingBlock />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  padding-bottom: 100px;
  max-width: 1920px;
`;

const TitleBlock = styled.div`
  margin: 0 auto;
`;

const Title = styled.span`
  display: block;
  text-align: center;
  width: 100%;
  font-weight: 900;
  font-size: 227px;
  line-height: 74%;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${colors.white};

  ${media.desktop1366(
    css`
      font-size: 16.8vw;
    `
  )}

  ${media.tabletSmallOnly(
    css`
      font-size: 16.4vw;
    `
  )}

  ${media.mobile(
    css`
      font-size: 16vw;
    `
  )}
`;

export default AnimationSection;
