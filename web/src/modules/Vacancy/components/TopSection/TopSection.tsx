import React from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/theme';

function TopSection() {
  return (
    <Wrapper>
      <Title>TopSection</Title>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  background: ${colors.red};
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 180.531px;
  line-height: 100%;
  color: ${colors.white};
`;

export default TopSection;
