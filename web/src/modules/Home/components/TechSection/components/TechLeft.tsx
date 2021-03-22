import React from 'react';
import styled from 'styled-components';

import Picture from '@/components/Picture';

function TechLeft() {
  return (
    <Container>
      <ImageContainer />
    </Container>
  );
}

const Container = styled.div`
  float: right;
  width: 48.6vw;
  height: 100%;
  clip-path: polygon(69% 0, 100% 0, 100% 100%, 0 100%);
  shape-outside: polygon(69% 0, 100% 0, 100% 100%, 0 100%);
`;

const ImageContainer = styled(Picture)`
  position: static;
  min-height: 750px;

  img {
    position: absolute;
    top: 0;
    right: 0;
    width: auto;
    min-height: 750px;
    height: 100%;
    object-fit: cover;
  }
`;

export default TechLeft;
