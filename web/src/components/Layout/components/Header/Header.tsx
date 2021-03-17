import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as Logo } from '@/assets/svg/logo.svg';
import ContentContainer from '@/components/ContentContainer';
import Link from '@/components/Link';
import { useTypedSelector } from '@/store/store';
import { selectMenuItemListByAlias } from '@/store/reducers/tager/menus';
import { media } from '@/utils/mixin';

import HeaderMenu from './components/HeaderMenu';
import HeaderBurger from './components/HeaderBurger';

function Header() {
  const headerMenuItemList =
    useTypedSelector((state) => selectMenuItemListByAlias(state, 'header')) ??
    [];
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

            <HeaderRight>
              <HeaderBurger />
              <HeaderMenu menuItemList={headerMenuItemList} />
            </HeaderRight>
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

  ${ContentContainer} {
    padding-right: 0;
  }
`;

const HeaderWrapper = styled.div``;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  height: 100px;

  ${media.tabletSmall(css`
    height: 56px;
  `)}
`;

const HeaderLeft = styled.div``;

const HeaderRight = styled.div`
  margin-left: auto;
`;

const LogoWrapper = styled.div`
  display: inline-flex;
  width: 221px;

  ${media.tabletSmall(css`
    padding: 8px 0;
    width: 174px;
  `)}
`;

const LogoLink = styled(Link)`
  display: inline-flex;
`;

export default Header;
