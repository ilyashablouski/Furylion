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

// import MessageSuccess from './MessageSuccess';

export type ContactsFormValues = ContactsFormPayload;

type Props = FormikProps<ContactsFormValues> & {
  isSentSuccess: boolean;
  fileId: number;
  setFileId: (value: number) => void;
};
//TODO: Refactor logic for own requirements (edit requests.ts), look at korona
function ContactsForm({
  isSentSuccess,
  isSubmitting,
  fileId,
  setFileId,
}: Props) {
  return (
    <Form autoComplete="off" noValidate>
      <FormContent>
        {/*<MessageSuccess isSentSuccess={isSentSuccess} />*/}
        <FormInner isSentSuccess={isSentSuccess}>
          <Top>
            <Title>Не нашли подходящую вакансию? Предложите свое резюме!</Title>
          </Top>

          <Center>
            <Row>
              <Col>
                <Input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Имя"
                  autoComplete="off"
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="lastName"
                  required
                  placeholder="Фамилия"
                  autoComplete="off"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  autoComplete="off"
                />
              </Col>
            </Row>
          </Center>
          <AttachWrapper>
            <AttachFile
              name={'fileId'}
              type={'file'}
              isSmall={true}
              fileId={fileId}
              setFileId={setFileId}
            />
          </AttachWrapper>
          <Bottom>
            <SendButton
              // variant="orange"
              type="submit"
              isSubmitting={isSubmitting}
            >
              {!isSubmitting ? (
                'Отправить резюме'
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

const FormRow = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FormContent = styled.fieldset`
  border: none;
  position: relative;
  padding: 0;
  width: 100%;
  flex: 1 1 auto;
`;

const FormInner = styled.div<{ isSentSuccess: boolean }>`
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.isSentSuccess
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `};
`;

const Top = styled.div`
  max-width: 648px;
  margin-bottom: 45px;

  ${media.laptop(css`
    max-width: 500px;
    margin-bottom: 40px;
  `)}
`;

const Center = styled.div`
  margin: -11px -16px;

  ${media.laptop(css`
    margin: -14px -12px;
  `)}
`;

const AttachWrapper = styled.div`
  margin-top: 40px;

  ${media.laptop(css`
    margin-top: 33px;
  `)}
`;

const Bottom = styled.div`
  margin-top: 50px;
  text-align: center;

  ${media.laptop(css`
    margin-top: 40px;
  `)}
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Col = styled.div`
  flex: 1 1 50%;
  position: relative;
  padding: 11px 16px;

  ${media.laptop(css`
    padding: 14px 12px;
  `)}

  input {
    border: none;
    border-bottom: 2px solid ${colors.black};
    padding: 8px 0;
    height: 40px;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    color: ${colors.black};

    ${media.laptop(css`
      padding: 4px 0;
      height: 30px;
      border-bottom: 1px solid ${colors.black};
      font-size: 20px;
      line-height: 26px;
    `)}

    &::placeholder {
      color: ${colors.grayLight};

      ${media.laptop(css`
        font-size: 20px;
        line-height: 26px;
      `)}
    }
  }

  span {
    right: 16px;

    ${media.laptop(css`
      right: 12px;
    `)}
  }
`;

const Input = styled(TextInputFormik)`
  input {
    border: none;
    border-bottom: 2px solid ${colors.black};
    padding: 8px 0;
    height: 40px;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    color: ${colors.black};

    ${media.laptop(css`
      padding: 4px 0;
      height: 30px;
      border-bottom: 1px solid ${colors.black};
      font-size: 20px;
      line-height: 26px;
    `)}

    &::placeholder {
      color: ${colors.grayLight};

      ${media.laptop(css`
        font-size: 20px;
        line-height: 26px;
      `)}
    }
  }
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: ${colors.black};

  ${media.laptop(css`
    font-size: 24px;
    line-height: 32px;
  `)}
`;

const SendButton = styled(Button)<{ isSubmitting: boolean }>`
  position: relative;
  display: block;
  min-height: 70px;
  height: 100%;
  width: 100%;
  padding: 19px 35px;

  font-weight: 500;
  font-size: 20px;
  line-height: 26px;

  transition: all 0.3s linear;

  ${media.laptop(css`
    min-height: 50px;
    padding: 9px 35px;
    font-size: 16px;
    line-height: 24px;
  `)}

  ${(props) =>
    props.isSubmitting
      ? css`
          border: none;
        `
      : css``}
`;

export default ContactsForm;
