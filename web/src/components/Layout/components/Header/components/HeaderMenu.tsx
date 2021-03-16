import React from 'react';
import styled from 'styled-components';

import { MenuItemType } from '@tager/web-modules';

import Link from '@/components/Link';
import { colors } from '@/constants/theme';

type Props = {
  menuItemList: Array<MenuItemType>;
};

function HeaderMenu({ menuItemList }: Props) {
  return (
    <Nav>
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
    </Nav>
  );
}

const Nav = styled.nav``;

const MenuItems = styled.ul`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.li`
  &:not(:last-child) {
    margin: 0 26px;
  }

  &:last-child {
    position: relative;
    padding: 41px 65px;
    background: ${colors.red};
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 10% 0);
  }
`;

const ItemLink = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: ${colors.white};
  text-transform: capitalize;
  transition: 150ms all ease-in-out;

  &:hover {
    color: #ccc;
  }
`;

export default HeaderMenu;
