import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '@/assets/svg/logo.svg';
import ContentContainer from '@/components/ContentContainer';
import Link from '@/components/Link';

function Header() {
  return (
    <HeaderContainer>
      <ContentContainer>
        <HeaderWrapper>
          <HeaderInner>
            <HeaderLeft>
              <LogoWrapper>
                <LogoLink to="/">
                  <Logo />
                </LogoLink>
              </LogoWrapper>
            </HeaderLeft>

            <HeaderRight></HeaderRight>
          </HeaderInner>
        </HeaderWrapper>
      </ContentContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

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

const LogoWrapper = styled.div``;

const LogoLink = styled(Link)`
  display: inline-flex;
`;

export default Header;
