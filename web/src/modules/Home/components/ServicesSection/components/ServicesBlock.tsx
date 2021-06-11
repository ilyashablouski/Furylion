import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';

type Props = {
  className?: string;
  children: React.ReactNode;
  second?: true;
};

function ServicesBlock({ second, children }: Props) {
  return <Container second={second}>{children}</Container>;
}

const Container = styled.div<{ second?: boolean }>`
  margin-top: ${(props) => (props.second ? '20px' : '0')};
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.second ? 'flex-end' : 'space-between')};
  max-height: 705px;
  overflow: hidden;

  ${media.tabletSmall(css`
    margin-top: 0;
    flex-direction: column;
    max-height: none;
  `)}
`;

export default ServicesBlock;
