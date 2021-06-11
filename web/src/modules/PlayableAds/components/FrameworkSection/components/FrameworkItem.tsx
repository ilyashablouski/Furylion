import React from 'react';
import styled, { css } from 'styled-components';

import { FrameworkItemType } from '@/typings/model';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

function FrameworkItem({ title, topText, bottomText }: FrameworkItemType) {
  return (
    <Container>
      <Title>{title}</Title>
      <Inner>
        <TopText>{topText}</TopText>
        <BottomText>{bottomText}</BottomText>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  padding: 30px;
  height: 100%;
  background: ${colors.red};
  transition: all 0.15s ease-in-out;
  color: ${colors.white};

  ${media.tabletSmall(css`
    padding: 16px 10px;
  `)}

  &:hover {
    background: ${colors.white};
    color: ${colors.dark};
  }
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 24px;
  line-height: 100%;
  text-transform: uppercase;

  ${media.tabletSmall(css`
    font-size: 13px;
  `)}
`;

const Inner = styled.div`
  margin-top: 15px;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;

  ${media.tabletSmall(css`
    margin-top: 5px;
    font-size: 10px;
  `)}
`;

const TopText = styled.div``;
const BottomText = styled.div`
  margin-top: 10px;

  ${media.tabletSmall(css`
    margin-top: 5px;
  `)}
`;

export default FrameworkItem;
