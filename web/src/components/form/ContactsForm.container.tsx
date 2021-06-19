import React, { useState } from 'react';
import { Formik, FormikErrors, FormikHelpers } from 'formik';

import { convertRequestErrorToMap, Nullable } from '@tager/web-core';

import { FormPayload, sendContactsForm, sendCvForm } from '@/services/requests';
import useCurrentVacancy from '@/hooks/useCurrentVacancy';

import ContactsForm, { ContactsFormValues } from './ContactsForm';

function getSendMethod(isCvForm: boolean) {
  return isCvForm ? sendCvForm : sendContactsForm;
}

function getOnlyTrueValues(values: Record<string, string | number>) {
  Object.keys(values).forEach((key) => {
    if (!values[key]) {
      delete values[key];
    }
  });
  return values as FormPayload;
}

function ContactsFormContainer({ isCvForm = false }: { isCvForm?: boolean }) {
  const [isSentSuccess, setSentSuccess] = useState(false);
  const [fileId, setFileId] = useState<number>(0);
  const [file, setFile] = useState<Nullable<File>>(null);
  const vacancy = useCurrentVacancy();

  function handleSubmit(
    values: FormPayload,
    formikHelpers: FormikHelpers<FormPayload>
  ) {
    const preValues = { ...values, file: fileId ?? null };

    const payload = getOnlyTrueValues(preValues);

    let params = isCvForm && vacancy ? { vacancyId: vacancy.data?.id } : {};

    getSendMethod(isCvForm)(payload, params)
      .then(() => {
        formikHelpers.resetForm();
        setSentSuccess(true);
        setFile(null);
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
        company: '',
        phone: '',
        email: '',
        message: '',
        file: null,
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(formProps) => (
        <ContactsForm
          {...formProps}
          file={file}
          setFile={setFile}
          isCvForm={isCvForm}
          isSentSuccess={isSentSuccess}
          fileId={fileId}
          setFileId={(value: number) => setFileId(value)}
        />
      )}
    </Formik>
  );
}

export default ContactsFormContainer;
