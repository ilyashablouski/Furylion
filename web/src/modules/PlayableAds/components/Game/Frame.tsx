import React from 'react';
import styled from 'styled-components';

function Frame() {
  return <Iframe src="game.html" />;
}

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export default Frame;
