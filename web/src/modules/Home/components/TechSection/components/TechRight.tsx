import React from 'react';
import styled from 'styled-components';

import { TechSectionType } from '@/typings/model';

function TechRight({ ...props }: TechSectionType) {
  // console.log(props);
  return (
    <Container>
      <Title></Title>
      <Text></Text>
      <Logos></Logos>
      <Additional></Additional>
      <Buttons></Buttons>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 100px;
  padding-left: 68px;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
`;
const Text = styled.p`
  margin-top: 35px;
  max-width: 388px;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
`;
const Logos = styled.div`
  margin-top: 71px;
  display: flex;
  align-items: center;
`;
const Additional = styled.div`
  margin-top: 47px;
`;
const Buttons = styled.div`
  margin-top: 35px;
  display: inline-flex;
`;

export default TechRight;
