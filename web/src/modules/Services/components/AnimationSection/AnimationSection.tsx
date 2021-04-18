import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

function AnimationSection() {
  return (
    <Wrapper>
      <TitleBlock>
        <Title>Animation</Title>

        {/*<ProductionBlock />*/}
      </TitleBlock>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 1920px;
`;

const TitleBlock = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.span`
  width: 100%;
  font-weight: 900;
  font-size: 230px;
  line-height: 72%;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${colors.white};

  ${media.desktop1366(
    css`
      font-size: 16.8vw;
    `
  )}

  ${media.mobile(
    css`
      font-size: 34.1vw;
      white-space: normal;
    `
  )}
`;

export default AnimationSection;
