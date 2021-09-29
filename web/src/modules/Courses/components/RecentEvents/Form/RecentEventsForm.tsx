import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useFormik } from 'formik';

import Button from '@/components/Button';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import MessageSuccess from '@/components/modals/MessageSuccess';

import TextField from './Components/TextField';
import {
  RecentEventsFormData,
  RecentEventsFormProps,
} from './RecentEventsForm.types';
import { validationSchema } from './RecentEventsForm.helpers';

function RecentEventsForm({ save }: RecentEventsFormProps) {
  const [isFormSend, setFormSend] = useState(false);
  const { recentEventsLabel, recentEventsDescription } = useCoursesData();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik<RecentEventsFormData>({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      try {
        if (save) {
          await save(values);
        }
        setFormSend(true);
      } catch (error) {
        console.error(error);
      }

      setSubmitting(false);
    },
  });

  return isFormSend ? (
    <MessageSuccess isSentSuccess={isFormSend} isCoursesPage />
  ) : (
    <Form onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextField
        placeholder="Email"
        id="email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        errorMessage={errors.email && touched.email ? errors.email : undefined}
      />

      <Actions>
        <SendButton
          variants={['large', 'red', 'w100']}
          type="submit"
          isSubmitting={isSubmitting}
        >
          {recentEventsLabel}
        </SendButton>
      </Actions>

      <Description>{recentEventsDescription}</Description>
    </Form>
  );
}

export default RecentEventsForm;

const Form = styled.form`
  position: relative;
  margin-top: 81px;

  ${media.tablet(css`
    margin-top: 32px;
  `)}

  ${media.mobile(css`
    margin-top: 24px;
  `)}
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

  ${media.tablet(css`
    font-size: 20px;
  `)}
`;

const Actions = styled.div`
  margin-top: 16px;
`;

const Description = styled.p`
  margin-top: 16px;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white08};
  text-align: center;
`;
