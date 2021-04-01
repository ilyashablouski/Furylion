import React from 'react';

import Layout from '@/components/Layout';
import Vacancy from '@/modules/Vacancy';

function CareersVacancy() {
  return (
    <Layout>
      <Vacancy />
    </Layout>
  );
}

CareersVacancy.getInitialProps = function () {};

export default CareersVacancy;
