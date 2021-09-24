import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

type Props = {
  isSentSuccess: boolean;
  isCoursesPage?: boolean;
};

function MessageSuccess({ isSentSuccess, isCoursesPage }: Props) {
  return (
    <Message isSentSuccess={isSentSuccess} isCoursesPage={isCoursesPage}>
      {isCoursesPage ? (
        <Title>Спасибо за подписку!</Title>
      ) : (
        <Title>Thank you for your message!</Title>
      )}
    </Message>
  );
}

const Message = styled.div<{
  isSentSuccess: boolean;
  isCoursesPage: Props['isCoursesPage'];
}>`
  position: absolute;
  top: 50%;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  border: 1px dashed rgba(255, 255, 255, 0.5);
  transform: translateY(-50%);
  transition: all 300ms ease-in-out;
  ${(props) =>
    props.isSentSuccess
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}

  ${(props) =>
    props.isCoursesPage
      ? css`
          position: relative;

          ${media.tablet(css`
            transform: translateY(0);
            margin-top: 30px;
          `)}
        `
      : css``}
`;

const Title = styled.span`
  display: block;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: ${colors.white};
  text-align: center;

  ${media.laptop(css`
    font-size: 24px;
    line-height: 32px;
  `)}
`;

export default MessageSuccess;
