import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';

function DoYouWantSection() {
  return <Wrapper></Wrapper>;
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
