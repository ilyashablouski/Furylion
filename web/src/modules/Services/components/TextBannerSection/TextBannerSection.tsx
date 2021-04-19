import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

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
  overflow: hidden;
`;

const Text = styled.span`
  margin: -6.8% 0;
  max-width: 1920px;
  text-transform: uppercase;
  font-size: 653px;
  font-weight: 900;
  line-height: 100%;

  ${media.desktop1366(css`
    font-size: 47.8vw;
  `)}
`;

export default TextBannerSection;
