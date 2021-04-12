import React from 'react';
import styled, { css } from 'styled-components';

import { ModalProps } from '@tager/web-components';
import { Nullable } from '@tager/web-core';

import FeedbackSection from '@/components/FeedbackSection';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

import CloseButton from '../shared/CloseButton';

type FeedbackModalProps = ModalProps<{ formTitle: Nullable<string> }>;

function FeedbackModal({ innerProps, closeModal }: FeedbackModalProps) {
  const { formTitle } = innerProps;

  return (
    <Wrapper>
      <ButtonWrapper>
        <CloseButton onClick={closeModal} />
      </ButtonWrapper>
      <FeedbackSection formTitle={formTitle} isModal={true} />
    </Wrapper>
  );
}

export default FeedbackModal;

const Wrapper = styled.div`
  position: relative;
  margin: 0 -10px;
  padding-top: 120px;
  padding-bottom: 110px;
  background: ${colors.dark};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 68px;
  display: inline-flex;

  ${media.tabletSmallOnly(css`
    top: 70px;
    right: 40px;
  `)}

  ${media.mobile(css`
    right: 20px;
  `)}
`;
