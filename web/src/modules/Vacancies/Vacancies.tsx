import React from 'react';
import styled from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';

function Vacancies() {
  const page = useCurrentPage();

  return (
    <Container>
      {/*<h1>{page?.title + "I'm from pageModules"}</h1>*/}
      {/*<div dangerouslySetInnerHTML={{ __html: page?.body ?? '' }} />*/}
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
`;

export default Vacancies;
