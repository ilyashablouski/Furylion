import React from 'react';
import styled, { css } from 'styled-components';

import { getSettingValueByKey } from '@tager/web-modules';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import { useTypedSelector } from '@/store/store';
import { selectSettingItemList } from '@/store/reducers/tager/settings';

type Props = {
  isSentSuccess: boolean;
};

function MessageSuccess({ isSentSuccess }: Props) {
  //TODO:Use if need form from admin panel
  // const settingsList = useTypedSelector(selectSettingItemList);
  // const careersSuccessText = getSettingValueByKey(
  //   settingsList,
  //   'careersSuccessText'
  // );

  return (
    <Message isSentSuccess={isSentSuccess}>
      <Title>Success message</Title>
    </Message>
  );
}

const Message = styled.div<{ isSentSuccess: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms ease-in-out;
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
`;

const Title = styled.span`
  display: block;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: ${colors.black};
  text-align: center;

  ${media.laptop(css`
    font-size: 24px;
    line-height: 32px;
  `)}
`;

export default MessageSuccess;
