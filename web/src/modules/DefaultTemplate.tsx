import React, { useEffect } from 'react';
import styled from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';

function DefaultTemplate() {
  return (
    <Container>
      {/*<h1>{page?.title}</h1>*/}
      {/*<div dangerouslySetInnerHTML={{ __html: page?.body ?? '' }} />*/}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
`;

export default DefaultTemplate;
