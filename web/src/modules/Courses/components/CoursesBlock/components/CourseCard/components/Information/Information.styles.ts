import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

export const Component = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 2px dashed ${colors.white};

  &:not(:first-child) {
    margin-left: 24px;

    ${media.tablet(css`
      margin-left: 0;
    `)}
  }
`;

export const Title = styled.span`
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

export const Content = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  margin-top: 8px;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 24px;
  `)}
`;
