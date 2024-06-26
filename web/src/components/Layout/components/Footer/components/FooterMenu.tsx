import React from 'react';
import styled, { css } from 'styled-components';

import { MenuItemType } from '@tager/web-modules';

import Link from '@/components/Link';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import { isNewPage } from '@/utils/common';

type Props = {
  menuItemList: Array<MenuItemType>;
};

function FooterMenu({ menuItemList }: Props) {
  function onClick(menuItem: MenuItemType) {
    return () => {
      if (!isNewPage(menuItem.link ?? '#')) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    };
  }

  return (
    <MenuItems>
      {menuItemList.map((menuItem) => {
        return (
          <MenuItem key={menuItem.id} onClick={onClick(menuItem)}>
            <ItemLink
              to={menuItem.link ?? '#'}
              target={menuItem.isNewTab ? '_blank' : '_self'}
              dangerouslySetInnerHTML={{ __html: menuItem.label ?? '' }}
              isRed={menuItem.link?.includes('vacancies')}
            />
          </MenuItem>
        );
      })}
    </MenuItems>
  );
}

const MenuItems = styled.ul`
  margin: 0 -37.5px;
  margin-top: 12px;
  display: flex;

  ${media.tabletSmall(css`
    order: 1;
  `)}

  ${media.tabletSmallOnly(css`
    margin: 0 -11px;
  `)}

  ${media.mobile(css`
    display: block;
  `)}
`;

const MenuItem = styled.li`
  padding: 0 37.5px;

  ${media.tabletSmallOnly(css`
    padding: 0 11px;
  `)}

  ${media.mobile(css`
    &:not(:first-child) {
      margin-top: 24px;
    }
  `)}
`;

const ItemLink = styled(Link)<{ isRed?: boolean }>`
  position: relative;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  text-transform: capitalize;
  border-bottom: 1px solid ${colors.dark};
  transition: 150ms all ease-in-out;

  &:hover {
    color: ${colors.red};
    border-bottom-color: ${colors.red};
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

    color: ${colors.white};
    background: ${(props) =>
      props.isRed ? `${colors.red}` : `${colors.dark}`};
  }
`;

export default FooterMenu;
