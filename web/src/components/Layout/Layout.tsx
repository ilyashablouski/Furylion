import React from 'react';
import styled from 'styled-components';

import { Preloader } from '@tager/web-components';

import { colors } from '@/constants/theme';

import Header from './components/Header/Header';
import Footer from './components/Footer';

type Props = {
  children?: React.ReactNode;
  isPreloaderHidden?: boolean;
};

function Layout({ children, isPreloaderHidden }: Props) {
  return (
    <Container>
      <Preloader hidden={isPreloaderHidden} />

      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.main`
  margin-top: -100px;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  background: ${colors.dark};
`;

export default Layout;
