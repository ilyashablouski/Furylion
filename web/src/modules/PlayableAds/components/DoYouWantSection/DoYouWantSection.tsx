import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';

function DoYouWantSection() {
  return (
    <Wrapper>
      <Title></Title>
    </Wrapper>
  );
}

export default DoYouWantSection;

const Wrapper = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: 1920px;
  text-align: center;

  ${media.tabletSmallOnly(css``)}

  ${media.mobile(css``)}
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 178.605px;
  line-height: 72.5%;
  text-align: center;
  text-transform: uppercase;
`;
