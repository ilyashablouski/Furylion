import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '@/assets/svg/logo.svg';
import ContentContainer from '@/components/ContentContainer';

function Header() {
  return (
    <HeaderContainer>
      <ContentContainer>
        <HeaderWrapper>
          <HeaderInner>
            <HeaderLeft>
              <HeaderLogo>link to logo</HeaderLogo>
            </HeaderLeft>

            <HeaderRight></HeaderRight>
          </HeaderInner>
        </HeaderWrapper>
      </ContentContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header``;

const HeaderWrapper = styled.div``;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div`
  margin-left: auto;
`;

const HeaderLogo = styled.a``;

export default Header;
