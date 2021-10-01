import React from 'react';

import { Page } from '@tager/web-components';

import Layout from '@/components/Layout';
import Vacancy from '@/modules/Vacancy';
import { convertAliasToPath, convertErrorToProps } from '@/utils/common';
import { CustomApp_PageContext } from '@/typings/hocs';
import { getVacancyByAliasThunk } from '@/store/reducers/pages/vacancies';
import { getSharedThunkList } from '@/utils/thunks';
import { VacancyFullType } from '@/typings/model';
import ErrorPage from '@/pages/_error';
import NotFoundPage from '@/pages/404';

type Props =
  | { pageType: 'NOT_FOUND' }
  | { pageType: 'DYNAMIC_PAGE'; vacancy: VacancyFullType }
  | {
      pageType: 'ERROR';
      error: any;
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
      openGraphImage={
        props.vacancy.openGraphImage ?? props.vacancy.image?.default?.url
      }
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
    const [vacancy] = await Promise.all([
      store.dispatch(getVacancyByAliasThunk(alias)),
      ...getSharedThunkList(store.dispatch),
    ]);

    if (!vacancy) {
      return {
        pageType: 'NOT_FOUND',
      };
    }

    return {
      pageType: 'DYNAMIC_PAGE',
      vacancy: vacancy,
    };
  } catch (error) {
    return {
      pageType: 'ERROR',
      error,
    };
  }
};

export default CareersVacancy;
