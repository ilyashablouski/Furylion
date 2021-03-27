import React, { useState } from 'react';
import { Formik, FormikErrors, FormikHelpers } from 'formik';

import { convertRequestErrorToMap } from '@tager/web-core';

import { ContactsFormPayload, sendContactsForm } from '@/services/requests';

import ContactsForm, { ContactsFormValues } from './ContactsForm';

function ContactsFormContainer() {
  const [isSentSuccess, setSentSuccess] = useState(false);
  const [fileId, setFileId] = useState<number>(0);

  function handleSubmit(
    values: ContactsFormValues,
    formikHelpers: FormikHelpers<ContactsFormValues>
  ) {
    const payload: ContactsFormPayload = {
      name: values.name,
      companyName: values.companyName,
      email: values.email,
      message: values.message,
      fileId: fileId ?? null,
    };

    sendContactsForm(payload)
      .then(() => {
        formikHelpers.resetForm();
        setSentSuccess(true);
        setTimeout(() => {
          setSentSuccess(false);
        }, 2500);
      })
      .catch((error) => {
        const errorMap = convertRequestErrorToMap(
          error
        ) as FormikErrors<ContactsFormValues>;
        formikHelpers.setErrors(errorMap);
      })
      .finally(() => {
        formikHelpers.setSubmitting(false);
      });
  }

  return (
    <Formik<ContactsFormValues>
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        companyName: '',
        email: '',
        message: '',
        fileId: null,
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(formProps) => (
        <ContactsForm
          {...formProps}
          isSentSuccess={isSentSuccess}
          fileId={fileId}
          setFileId={(value: number) => setFileId(value)}
        />
      )}
    </Formik>
  );
}

export default ContactsFormContainer;
