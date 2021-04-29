import React from 'react';

import { isServer } from '@tager/web-core';
import { Page } from '@tager/web-components';

import Layout from '@/components/Layout';
import Vacancy from '@/modules/Vacancy';
import { convertAliasToPath, convertErrorToProps } from '@/utils/common';
import { CustomApp_PageContext } from '@/typings/hocs';
import {
  getVacancyByAliasThunk,
  selectVacancyByAliasResource,
} from '@/store/reducers/pages/vacancies';
import { getSharedThunkList } from '@/utils/thunks';
import { VacancyFullType } from '@/typings/model';
import ErrorPage from '@/pages/_error';
import NotFoundPage from '@/pages/404';

type Props =
  | { pageType: 'NOT_FOUND' }
  | { pageType: 'DYNAMIC_PAGE'; vacancy: VacancyFullType }
  | {
      pageType: 'ERROR';
      error: Error;
    };

function CareersVacancy(props: Props) {
  if (props.pageType === 'NOT_FOUND') {
    return <NotFoundPage />;
  }

  if (props.pageType === 'ERROR') {
    return <ErrorPage {...convertErrorToProps(props.error)} />;
  }

  return (
    <Page
      title={props.vacancy.pageTitle}
      description={props.vacancy.pageDescription}
      openGraphImage={props.vacancy.openGraphImage}
    >
      <Layout>
        <Vacancy />
      </Layout>
    </Page>
  );
}

CareersVacancy.getInitialProps = async function ({
  query,
  store,
}: CustomApp_PageContext): Promise<Props> {
  const alias = convertAliasToPath(query.alias);
  try {
    await store.dispatch(getVacancyByAliasThunk(alias));

    const vacancyResource = selectVacancyByAliasResource(
      store.getState(),
      alias
    );

    if (!vacancyResource?.data) {
      return {
        pageType: 'NOT_FOUND',
      };
    }

    if (isServer()) {
      await Promise.all([...getSharedThunkList(store.dispatch)]);
    }

    return {
      pageType: 'DYNAMIC_PAGE',
      vacancy: vacancyResource.data,
    };
  } catch (error) {
    return {
      pageType: 'ERROR',
      error,
    };
  }
};

export default CareersVacancy;
