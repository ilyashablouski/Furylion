import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  children: React.ReactNode;
};

function ServicesBlock({ className, children }: Props) {
  return <Container className={className}>{children}</Container>;
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-height: 705px;
  overflow: hidden;
`;

export default ServicesBlock;
