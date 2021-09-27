import React from 'react';
import styled, { css } from 'styled-components';

import { ModalProps } from '@tager/web-components';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import ContactsFormContainer from '@/components/form';

import CloseButton from '../shared/CloseButton';

function SignUpCourseModal({ closeModal }: ModalProps) {
  return (
    <Wrapper>
      <ButtonWrapper>
        <CloseButton onClick={closeModal} />
      </ButtonWrapper>
      <Title>Расскажите о себе</Title>
      <Form>
        <ContactsFormContainer isCvForm isSingleCourseForm />
      </Form>
    </Wrapper>
  );
}

export default SignUpCourseModal;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  min-width: 70vw;
  min-height: calc(var(--vh, 1vh) * 80);
  background: ${colors.dark};

  ${media.tablet(css`
    min-width: 100vw;
    min-height: calc(var(--vh, 1vh) * 100);
  `)}

  ${media.mobile(css`
    padding: 60px 20px;
  `)}
`;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 35px;
  right: 60px;
  display: inline-flex;

  ${media.mobile(css`
    right: 20px;
  `)}
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 58px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 40px;
  `)}
`;

const Form = styled.div`
  width: 100%;
  margin-top: 20px;
`;
