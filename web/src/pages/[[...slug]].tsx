import React from 'react';
import { useRouter } from 'next/router';

import { Page } from '@tager/web-components';
import { convertSeoParamsToPageProps } from '@tager/web-modules';

import ErrorPage from '@/pages/_error';
import NotFoundPage from '@/pages/404';
import { CustomApp_PageContext } from '@/typings/hocs';
import Layout from '@/components/Layout';
import {
  getPageByPathThunk,
  getPageListThunk,
  selectPageByPath,
} from '@/store/reducers/tager/pages';
import { getPageModuleByTemplate } from '@/services/pageModules';
import { convertErrorToProps, convertSlugToPath } from '@/utils/common';
import { getSharedThunkList } from '@/utils/thunks';
import { useTypedSelector } from '@/store/store';

type Props =
  | {
      pageType: 'DYNAMIC_PAGE';
      template: string;
    }
  | {
      pageType: 'NOT_FOUND';
    }
  | {
      pageType: 'ERROR';
      error: any;
    };

function DynamicPage(props: Props) {
  const router = useRouter();
  const currentPath = convertSlugToPath(router.query.slug);
  const page = useTypedSelector((state) =>
    selectPageByPath(state, currentPath)
  );

  if (props.pageType === 'NOT_FOUND') {
    return <NotFoundPage />;
  }

  if (props.pageType === 'ERROR') {
    return <ErrorPage {...convertErrorToProps(props.error)} />;
  }

  const foundPageModule = getPageModuleByTemplate(props.template);
  const pageElement = React.createElement(foundPageModule.component);

  return (
    <Page {...convertSeoParamsToPageProps(page?.seoParams)}>
      <Layout>{pageElement}</Layout>
    </Page>
  );
}

DynamicPage.getInitialProps = async (
  context: CustomApp_PageContext
): Promise<Props> => {
  const { store, query } = context;
  const currentPath = convertSlugToPath(query.slug);

  try {
    const [pageList] = await Promise.all([
      store.dispatch(getPageListThunk()),
      ...getSharedThunkList(store.dispatch),
    ]);

    const foundPage = pageList.find((page) => page.path === currentPath);
    const foundPageModule = getPageModuleByTemplate(foundPage?.template);

    if (!foundPage) {
      if (context.res) {
        context.res.statusCode = 404;
      }
      return { pageType: 'NOT_FOUND' };
    }

    await Promise.all([
      store.dispatch(getPageByPathThunk(currentPath)),
      foundPageModule.getInitialProps
        ? foundPageModule.getInitialProps(context)
        : Promise.resolve(),
    ]);

    return { pageType: 'DYNAMIC_PAGE', template: foundPageModule.template };
  } catch (error) {
    return { pageType: 'ERROR', error };
  }
};

export default DynamicPage;
