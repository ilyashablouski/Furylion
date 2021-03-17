import React from 'react';
import styled, { css } from 'styled-components';

import { MenuItemType } from '@tager/web-modules';

import Link from '@/components/Link';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

type Props = {
  menuItemList: Array<MenuItemType>;
};

function FooterMenu({ menuItemList }: Props) {
  return (
    <MenuItems>
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
  );
}

const MenuItems = styled.ul`
  margin: 0 -37.5px;
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

const ItemLink = styled(Link)`
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
`;

export default FooterMenu;
