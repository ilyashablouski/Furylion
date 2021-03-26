import React from 'react';
import styled from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';

function AboutSection() {
  return (
    <Wrapper>
      <ContentContainer>
        <Inner>
          <Left>
            <Title>Tell us about everything</Title>
          </Left>
          <Right>
            <Form></Form>
          </Right>
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Inner = styled.div`
  padding-top: 158px;
  display: flex;
`;
const Title = styled.span`
  max-width: 260px;
  display: inline-block;
  font-style: normal;
  font-size: 64px;
  line-height: 130%;
  color: ${colors.white};
  font-weight: 900;
  text-transform: uppercase;
`;

const Left = styled.div`
  flex: 1 1 50%;
  max-width: 50%;
`;

const Right = styled.div`
  margin-left: 40px;
  flex: 1 1 50%;
  max-width: 50%;
`;

const Form = styled.div``;

export default AboutSection;
