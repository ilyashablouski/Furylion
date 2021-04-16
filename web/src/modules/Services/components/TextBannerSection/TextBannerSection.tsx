import React from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/theme';

function TextBannerSection() {
  return (
    <Wrapper>
      <Text>Art</Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${colors.white};
`;

const Text = styled.span`
  margin: -42px 0;
  max-width: 1920px;
  text-transform: uppercase;
  font-size: 300px;
  font-weight: 900;
  line-height: 100%;
`;

export default TextBannerSection;
