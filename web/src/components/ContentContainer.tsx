import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';

const ContentContainer = styled.div`
  max-width: 1368px;
  width: 100%;
  margin: 0 auto;
  padding: 0 68px;

  ${media.tabletSmall(css`
    padding: 0 40px;
  `)}

  ${media.mobile(css`
    padding: 0 20px;
  `)}
`;

export default ContentContainer;
