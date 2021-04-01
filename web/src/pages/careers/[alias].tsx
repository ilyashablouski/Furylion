import React from 'react';

import { isBrowser } from '@tager/web-core';

import Layout from '@/components/Layout';
import Vacancy from '@/modules/Vacancy';
import { convertAliasToPath } from '@/utils/common';
import { CustomApp_PageContext } from '@/typings/hocs';
import { getCareersVacancyByAlias } from '@/services/requests';

function CareersVacancy() {
  return (
    <Layout>
      <Vacancy />
    </Layout>
  );
}

CareersVacancy.getInitialProps = async function ({
  query,
}: CustomApp_PageContext) {
  const alias = convertAliasToPath(query.alias);
  const response = await getCareersVacancyByAlias(alias);
};

export default CareersVacancy;
