import React from 'react';
import styled, { css } from 'styled-components';

import { Nullish } from '@tager/web-core';

import { media } from '@/utils/mixin';
import Link from '@/components/Link';
import { getPathWithScrollParam } from '@/utils/common';

type Props = {
  className?: string;
  children: React.ReactNode;
  singleItem?: boolean;
  rightAlign?: boolean;
  linkUrl?: string;
  scrollTo?: Nullish<string>;
  isNewTab: boolean;
};

function ItemWrapper({
  className,
  scrollTo,
  singleItem,
  linkUrl,
  children,
  isNewTab,
}: Props) {
  return (
    <Container className={className} singleItem={singleItem}>
      <Shadow />
      <ItemLink
        to={getPathWithScrollParam(linkUrl, scrollTo)}
        target={isNewTab ? '_blank' : '_self'}
      />
      {children}
    </Container>
  );
}

const Container = styled.div<{ singleItem?: boolean }>`
  position: relative;
  height: ${(props) => (props.singleItem ? '100%' : '50%')};
  overflow: hidden;

  ${media.mobile(css`
    margin-top: 30px;
    padding-top: 83.88%;
  `)}
  &:hover {
    .item-label {
      border-bottom-color: transparent;
    }

    img {
      transform: scale(1.2);
    }
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(25, 24, 20, 0) 41.15%, #191814 100%);
  z-index: 1;

  ${media.mobile(css`
    display: none;
  `)}
`;

const ItemLink = styled(Link)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export default ItemWrapper;
