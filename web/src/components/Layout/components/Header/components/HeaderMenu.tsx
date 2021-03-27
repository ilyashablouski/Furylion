import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { MenuItemType } from '@tager/web-modules';
import { scroller } from '@tager/web-core';

import { ReactComponent as InstagramIcon } from '@/assets/svg/social/instagram.svg';
import { ReactComponent as VkIcon } from '@/assets/svg/social/vk.svg';
import { ReactComponent as AppleIcon } from '@/assets/svg/social/apple.svg';
import { ReactComponent as AndroidIcon } from '@/assets/svg/social/android.svg';
import Link from '@/components/Link';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import SocialNetwork from '@/components/SocialNetwork';

const socials = [
  {
    href: 'https://www.instagram.com/',
    svg: <InstagramIcon />,
  },
  {
    href: 'https://vk.com/',
    svg: <VkIcon />,
  },
  {
    href: 'https://www.apple.com/',
    svg: <AppleIcon />,
  },
  {
    href: 'https://play.google.com/',
    svg: <AndroidIcon />,
  },
];

type Props = {
  menuItemList: Array<MenuItemType>;
  mobileMenuRef: React.RefObject<HTMLUListElement>;
  isOpen: boolean;
};

function HeaderMenu({ menuItemList, isOpen, mobileMenuRef }: Props) {
  const backgroundRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (isOpen) {
  //     scroller.lock(mobileMenuRef.current);
  //   } else {
  //     scroller.unlock(mobileMenuRef.current);
  //   }
  //   return () => {
  //     scroller.unlockAll();
  //   };
  // }, [isOpen]);

  return (
    <Container>
      <BackgroundContainer
        isOpen={isOpen}
        ref={backgroundRef}
      ></BackgroundContainer>
      <Nav isOpen={isOpen}>
        <MenuItems ref={mobileMenuRef}>
          {menuItemList.map((menuItem) => {
            return (
              <MenuItem key={menuItem.id}>
                <ItemLink
                  to={menuItem.link ?? '#'}
                  target={menuItem.isNewTab ? '_blank' : '_self'}
                >
                  {menuItem.label}
                </ItemLink>
              </MenuItem>
            );
          })}
        </MenuItems>

        <MenuSocials>
          {socials.map((social, index) => {
            return (
              <SocialWrapper key={index}>
                <SocialNetwork href={social.href} iconSVG={social.svg} />
              </SocialWrapper>
            );
          })}
        </MenuSocials>
      </Nav>
    </Container>
  );
}

const Container = styled.div``;

const BackgroundContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: black;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  will-change: opacity;
  -webkit-tap-highlight-color: transparent;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: all 150s ease-in-out;
  z-index: 9;
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 1024px) {
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    text-align: right;
    z-index: 10;
    background: ${colors.red};
    will-change: transform;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: 150ms all ease-in-out;
  }

  ${media.tabletSmallOnly(css`
    padding: 91px 40px 30px 82px;
    max-width: 384px;
  `)}

  ${media.mobile(css`
    padding: 79px 44px 20px 54px;
    max-width: 359px;
  `)}
`;

const MenuSocials = styled.div`
  display: none;

  ${media.tabletSmall(css`
    margin: 32px -15px 0;
    display: flex;
    justify-content: space-between;
  `)}
`;

const SocialWrapper = styled.div`
  margin: 0 15px;
  width: 24px;
  height: 24px;
  color: ${colors.white};
`;

const MenuItems = styled.ul`
  display: flex;
  align-items: center;

  ${media.tabletSmall(css`
    display: block;
  `)}
`;

const MenuItem = styled.li`
  &:not(:last-child) {
    margin: 0 26px;

    ${media.tabletSmall(css`
      margin: 0;
    `)}
  }

  &:nth-child(3) {
    margin-right: 46px;

    ${media.tabletSmall(css`
      margin: 0;
    `)}
  }

  &:not(:first-child) {
    ${media.tabletSmall(css`
      margin-top: 24px;
    `)}
  }

  &:last-child {
    position: relative;
    height: 100px;
    line-height: 100px;
    padding: 0 66px;
    background: ${colors.red};
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 10% 0);

    ${media.tabletSmall(css`
      padding: 0;
      background: initial;
      clip-path: initial;
      height: auto;
      line-height: initial;
    `)}
  }
`;

const ItemLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: ${colors.white};
  text-transform: capitalize;
  transition: 150ms all ease-in-out;

  ${media.tabletSmall(css`
    font-weight: 700;
  `)}
  &:hover {
    color: #ccc;
  }
`;

export default HeaderMenu;
