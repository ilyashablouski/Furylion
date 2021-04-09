import React from 'react';
import styled from 'styled-components';

import { ModalProps } from '@tager/web-components';
import { Nullable } from '@tager/web-core';

import TextInput from '@/components/TextInput';
import FeedbackBlock from '@/components/FeedbackBlock';
import { colors } from '@/constants/theme';

import CloseButton from '../shared/CloseButton';
// import {
//   Container,
//   Header,
//   HeaderTitle,
//   Content,
//   Footer,
//   FooterButton,
// } from '../shared/styles';

type FeedbackModalProps = ModalProps<{ formTitle: Nullable<string> }>;

function FeedbackModal({ innerProps, closeModal }: FeedbackModalProps) {
  const { formTitle } = innerProps;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    closeModal();
  }

  return (
    <Wrapper>
      <FeedbackBlock formTitle={formTitle} />
    </Wrapper>
  );
}

export default FeedbackModal;

const Wrapper = styled.div`
  background: ${colors.dark};
`;
