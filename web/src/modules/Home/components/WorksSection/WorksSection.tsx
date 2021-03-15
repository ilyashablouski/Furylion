import React from 'react';
import styled from 'styled-components';

import Picture from '@/components/Picture';
import heroBgUrl from '@/assets/images/home/intro/intro-bg.jpg';
import heroBgUrl2x from '@/assets/images/home/intro/intro-bg@2x.jpg';
import { colors } from '@/constants/theme';

function WorksSection() {
  return (
    <WrapperSection>
      <Title>WORKS</Title>
    </WrapperSection>
  );
}

const WrapperSection = styled.section`
  margin-top: 80px;
`;

const Title = styled.span`
  display: block;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};
`;

export default WorksSection;
