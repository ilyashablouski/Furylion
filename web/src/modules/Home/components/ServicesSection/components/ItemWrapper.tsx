import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';

type Props = {
  className?: string;
  children: React.ReactNode;
  singleItem?: boolean;
  rightAlign?: boolean;
};

function ItemWrapper({ className, singleItem, children }: Props) {
  return (
    <Container className={className} singleItem={singleItem}>
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
    padding-top: 83.33%;
  `)}

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      180deg,
      rgba(25, 24, 20, 0) 41.15%,
      #191814 100%
    );
    z-index: 1;

    ${media.mobile(css`
      display: none;
    `)}
  }
`;

export default ItemWrapper;
