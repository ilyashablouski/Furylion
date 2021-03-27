import React from 'react';
import styled from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { StringFieldType } from '@/typings/common';
import ContactsFormContainer from '@/components/form';

type Props = {
  formTitle: StringFieldType;
};

function FooterAbout({ formTitle }: Props) {
  return (
    <Wrapper>
      <ContentContainer>
        <Inner>
          <Left>
            <Title>{formTitle}</Title>
          </Left>
          <Right>
            <ContactsFormContainer />
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

export default FooterAbout;
