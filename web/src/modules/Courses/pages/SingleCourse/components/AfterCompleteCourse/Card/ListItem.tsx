import React from 'react';
import styled, { css } from 'styled-components';

import { AfterCompleteItem } from '@/modules/Courses/pages/SingleCourse/SingleCourse.types';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import checkMarkFillUrl from '@/assets/svg/vacancy/check-mark-fill.svg';

function ListItem({ skill }: AfterCompleteItem) {
  return <Component dangerouslySetInnerHTML={{ __html: skill ?? '' }} />;
}

export default ListItem;

const Component = styled.div`
  ul {
    li {
      position: relative;
      display: flex;
      align-items: center;
      font-weight: 900;
      font-size: 24px;
      line-height: 160%;
      padding-left: 55px;
      min-height: 44px;
      color: ${colors.white};

      &:before {
        content: url(${checkMarkFillUrl});
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
      }

      ${media.tablet(css`
        line-height: 130%;
      `)}

      ${media.mobile(css`
        font-size: 18px;
      `)}
    }
  }

  p {
    font-size: 14px;
    line-height: 160%;
    margin-top: 16px;
    color: ${colors.white};

    ${media.tablet(css`
      max-width: 700px;
    `)}
  }
`;
