import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import { SingleCourseProps } from '@/modules/Courses/pages/SingleCourse/SingleCourse.types';

export const Component = styled.section`
  position: relative;
  background: ${colors.dark};
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  max-width: 1920px;
  text-align: center;
  transform: translateX(-50%);
`;

export const Title = styled.span`
  width: 100%;
  font-weight: 900;
  font-size: 368px;
  line-height: 75%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.desktop1366(
    css`
      font-size: 27.1vw;
    `
  )}
`;

export const Cards = styled.div<{
  singleCourse: SingleCourseProps['singleCourse'];
}>`
  position: relative;

  & > div:last-child > div:first-child {
    &:after {
      background: rgba(25, 24, 20, 0.6);
      backdrop-filter: blur(7px);

      ${({ singleCourse }) =>
        singleCourse &&
        css`
          background: none;
          backdrop-filter: none;
        `};
    }
  }

  ${media.mobile(css`
    margin-top: 50px;
  `)}

  ${({ singleCourse }) =>
    singleCourse &&
    css`
      ${media.mobile(css`
        margin-top: 0;
      `)}
    `};
`;

export const SingleCourseTitle = styled.span`
  display: block;
  margin-bottom: 54px;
  max-width: 1127px;
  font-weight: 900;
  font-size: 64px;
  line-height: 120%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 52px;
    line-height: 130%;
  `)}

  ${media.mobile(css`
    font-size: 32px;
    margin-bottom: 32px;
  `)}
`;
