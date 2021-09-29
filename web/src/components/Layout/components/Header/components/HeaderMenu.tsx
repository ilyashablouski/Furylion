import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

import { MenuItemType } from '@tager/web-modules';

import Link from '@/components/Link';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import SocialNetwork from '@/components/SocialNetwork';
import FadeElement from '@/components/FadeElement';
import { handleLinkFeedbackClick, isNewPage } from '@/utils/common';

type Props = {
  menuItemList: Array<MenuItemType>;
  mobileMenuRef: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  isAnimate: boolean;
  // FIXME: REFACTORING TYPINGS
  socialsData: Array<any>;
  onClickOverlay: () => void;
};

function HeaderMenu({
  menuItemList,
  isOpen,
  isAnimate,
  onClickOverlay,
  mobileMenuRef,
  socialsData,
}: Props) {
  //FIXME: Set correct overflow with scroller
  //   useEffect(() => {
  //     if (isOpen) {
  //       scroller.lock(mobileMenuRef.current);
  //     } else {
  //       scroller.unlock(mobileMenuRef.current);
  //     }
  //     return () => {
  //       scroller.unlockAll();
  //     };
  //   }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  return (
    <Container>
      <FadeElement isAnimate={isAnimate}>
        <BackgroundContainer onClick={onClickOverlay} />
      </FadeElement>
      <Nav isOpen={isOpen} ref={mobileMenuRef}>
        <MenuItems>
          {menuItemList.map((menuItem) => {
            return (
              <MenuItem
                onClick={() => {
                  if (isNewPage(menuItem.link ?? '#')) {
                    onClickOverlay();
                  } else {
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    });
                    onClickOverlay();
                  }
                }}
                key={menuItem.id}
              >
                {menuItem.link && menuItem.link.includes('#') ? (
                  <ItemLink
                    as="a"
                    href={menuItem.link ?? '#'}
                    onClick={handleLinkFeedbackClick}
                  >
                    {menuItem.label}
                  </ItemLink>
                ) : (
                  <ItemLink
                    to={menuItem.link ?? '#'}
                    target={menuItem.isNewTab ? '_blank' : '_self'}
                    dangerouslySetInnerHTML={{ __html: menuItem.label ?? '' }}
                    isDark={menuItem.link?.includes('vacancies')}
                  />
                )}
              </MenuItem>
            );
          })}
        </MenuItems>

        <MenuBottom>
          <MenuSocials>
            {socialsData.map((social, index) => {
              return (
                <SocialWrapper key={index}>
                  <SocialNetwork href={social.href} iconSVG={social.svg} />
                </SocialWrapper>
              );
            })}
          </MenuSocials>
        </MenuBottom>
      </Nav>
    </Container>
  );
}

const Container = styled.div``;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  background: rgba(0, 0, 0, 0.5);
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 1023.98px) {
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    text-align: right;
    background: ${colors.red};
    will-change: transform;
    transform: ${({ isOpen }) =>
      isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: 150ms all ease-in-out;
    z-index: 10;
  }

  ${media.tabletSmallOnly(css`
    padding: 91px 40px 30px 82px;
    max-width: 384px;
  `)}

  ${media.mobile(css`
    padding: 79px 44px 20px 54px;
    max-width: 359px;
  `)}

  ${media.mobile576(css`
    padding: 79px 44px 20px 54px;
    max-width: none;
  `)}
`;

const MenuBottom = styled.div`
  ${media.tabletSmall(css`
    margin-right: 10px;
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
    flex-direction: column;
    align-items: flex-end;
  `)}
`;

const ItemLink = styled(Link)<{ isDark?: boolean }>`
  position: relative;
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

  i {
    display: block;
    position: absolute;
    top: -50%;
    right: -29%;
    font-weight: bold;
    font-size: 10px;
    text-align: center;
    font-style: normal;

    width: 18px;
    height: 18px;
    border-radius: 100%;

    color: ${(props) => (props.isDark ? `${colors.white}` : `${colors.dark}`)};
    background: ${(props) =>
      props.isDark ? `${colors.dark}` : `${colors.white}`};

    ${media.tabletSmall(css`
      color: ${colors.white};
      background: ${colors.dark};
    `)}
  }
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
      order: 5;
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

export default HeaderMenu;
