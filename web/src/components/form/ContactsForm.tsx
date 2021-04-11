import React from 'react';
import styled, { css } from 'styled-components';
import { Form, FormikProps } from 'formik';

import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';
import Button from '@/components/Button';
import { TextInputFormik } from '@/components/TextInput';
import Spinner from '@/components/Spinner';
import { ContactsFormPayload } from '@/services/requests';
import AttachFile from '@/components/AttachFile';
import { TextAreaFormik } from '@/components/TextArea';
import MessageSuccess from '@/components/modals/MessageSuccess';

export type ContactsFormValues = ContactsFormPayload;

type Props = FormikProps<ContactsFormValues> & {
  isModal?: boolean;
  isSentSuccess: boolean;
  fileId: number;
  setFileId: (value: number) => void;
};
function ContactsForm({
  isModal = false,
  isSentSuccess,
  isSubmitting,
  fileId,
  setFileId,
}: Props) {
  return (
    <Form autoComplete="off" noValidate>
      <FormContent>
        <MessageSuccess isSentSuccess={isSentSuccess} />
        <FormInner isSentSuccess={isSentSuccess}>
          <Input
            type="text"
            name="name"
            required
            placeholder="Name"
            autoComplete="off"
          />
          <Input
            type="text"
            name="company"
            required
            placeholder="Company"
            autoComplete="off"
          />
          <Input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            autoComplete="off"
          />

          <TextAreaContainer>
            <TextAreaFormik
              className="textarea-field"
              placeholder={'Message'}
              name="message"
              required
              autoHeight
              isSentSuccess={isSentSuccess}
            />
          </TextAreaContainer>
          <AttachWrapper>
            <AttachFile
              name={'file'}
              type={'file'}
              isSmall={true}
              setFileId={setFileId}
            />
          </AttachWrapper>
          <Bottom>
            <SendButton
              variants={['large', 'red', 'w100']}
              type="submit"
              isSubmitting={isSubmitting}
            >
              {!isSubmitting ? (
                'Send Message'
              ) : (
                <Spinner color="dark" absolute={true} />
              )}
            </SendButton>
          </Bottom>
        </FormInner>
      </FormContent>
    </Form>
  );
}

const FormContent = styled.fieldset`
  border: none;
  position: relative;
  padding: 0;
  width: 100%;
  flex: 1 1 auto;
`;

const FormInner = styled.div<{ isSentSuccess: boolean }>`
  margin-top: -57px;
  transition: all 0.15s ease-in-out;

  ${media.tabletSmallOnly(css`
    margin-top: -50px;
  `)}

  ${media.mobile(css`
    margin-top: -60px;
  `)}

  ${(props) =>
    props.isSentSuccess
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `};
`;

const Input = styled(TextInputFormik)`
  position: relative;
  margin-top: 59px;

  ${media.tabletSmallOnly(css`
    margin-top: 50px;
  `)}

  ${media.mobile(css`
    margin-top: 60px;
  `)}
  input {
    padding: 0;
    width: 100%;
    font-weight: 400;
    font-size: 21px;
    height: 35px;
    line-height: 100%;
    border-bottom: 1.77px solid ${colors.white};
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    background: transparent;
    color: ${colors.white};

    &::placeholder {
      color: ${colors.white};
    }

    &:focus {
      color: ${colors.white} !important;
      background: transparent !important;
      box-shadow: none !important;
      border-color: ${colors.white} !important;
    }
  }
`;

const TextAreaContainer = styled.div`
  position: relative;
  margin-top: 85px;
  .textarea-field {
    line-height: 0;
  }

  ${media.mobile(css`
    margin-top: 90px;
  `)}
`;

const AttachWrapper = styled.div`
  margin-top: 34px;

  ${media.mobile(css`
    margin-top: 20px;
  `)}
`;

const Bottom = styled.div`
  margin-top: 34px;
  text-align: center;
`;

const SendButton = styled(Button)<{ isSubmitting: boolean }>`
  position: relative;
  min-height: 70px;
  ${(props) =>
    props.isSubmitting
      ? css`
          border: none;
        `
      : css``}
`;

export default ContactsForm;
