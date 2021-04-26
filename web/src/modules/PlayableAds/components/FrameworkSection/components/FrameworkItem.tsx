import React from 'react';
import styled from 'styled-components';

import { FrameworkItemType } from '@/typings/model';
import { colors } from '@/constants/theme';

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
`;

const Inner = styled.div`
  margin-top: 15px;
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
`;

const TopText = styled.div``;
const BottomText = styled.div`
  margin-top: 10px;
`;

export default FrameworkItem;
