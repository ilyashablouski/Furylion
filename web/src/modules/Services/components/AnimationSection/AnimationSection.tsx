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
        <ProductionBlock />
        {/*<PortingBlock />*/}
      </TitleBlock>
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
  font-size: 230px;
  line-height: 74%;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${colors.white};

  ${media.desktop1366(
    css`
      font-size: 16.8vw;
    `
  )}
`;

export default AnimationSection;
