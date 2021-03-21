import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  children: React.ReactNode;
  singleItem?: boolean;
  rightAlign?: boolean;
};

function ItemWrapper({ className, singleItem, rightAlign, children }: Props) {
  return (
    <Container
      className={className}
      singleItem={singleItem}
      rightAlign={rightAlign}
    >
      {children}
    </Container>
  );
}

const Container = styled.div<{ singleItem?: boolean; rightAlign?: boolean }>`
  position: relative;
  height: ${(props) => (props.singleItem ? '100%' : '50%')};
  overflow: hidden;
  text-align: ${(props) => (props.rightAlign ? 'right' : 'left')};

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
  }

  p {
    margin-left: ${(props) => (props.rightAlign ? 'auto' : 'initial')};
  }
`;

export default ItemWrapper;
