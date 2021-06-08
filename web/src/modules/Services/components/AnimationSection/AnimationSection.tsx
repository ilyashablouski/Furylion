import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { ProductionBlockType } from '@/typings/model';

import ProductionBlock from './components/ProductionBlock';
import PortingBlock from './components/PortingBlock';

function AnimationSection() {
  const page = useCurrentPage<ProductionBlockType>();

  const id = page?.templateFields.productionId;

  return (
    <Wrapper id={id ?? ''}>
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
  overflow: hidden;
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
      font-size: 16.5vw;
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
