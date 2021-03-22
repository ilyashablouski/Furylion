import React from 'react';
import styled from 'styled-components';

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
`;

export default ServicesBlock;
