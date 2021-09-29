import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

import { InformationProps } from './Information.types';

export const Component = styled.div<{
  singleCourse: InformationProps['singleCourse'];
}>`
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

    ${({ singleCourse }) =>
      singleCourse &&
      css`
        margin-left: 0;
      `}
  }

  ${({ singleCourse }) =>
    singleCourse &&
    css`
      padding: 24px;

      ${media.mobile(css`
        padding: 10px;
      `)}
    `}
`;

export const Title = styled.span`
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

export const Content = styled.span<{
  singleCourse: InformationProps['singleCourse'];
}>`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  margin-top: 8px;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 24px;
  `)}

  ${({ singleCourse }) =>
    singleCourse &&
    css`
      ${media.mobile(css`
        font-size: 21px;
      `)}
    `}
`;
