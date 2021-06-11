import React from 'react';

import { Page } from '@tager/web-components';

import NotFound from '@/modules/NotFound';
import Layout from '@/components/Layout';

function NotFoundPage() {
  return (
    <Page title="Page not found">
      <Layout isWhite>
        <NotFound />
      </Layout>
    </Page>
  );
}

export default NotFoundPage;
