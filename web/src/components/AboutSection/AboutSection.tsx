import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { StringFieldType } from '@/typings/common';
import ContactsFormContainer from '@/components/form';
import { media } from '@/utils/mixin';

type Props = {
  formTitle?: StringFieldType;
  children?: React.ReactNode;
};

function AboutSection({ formTitle, children }: Props) {
  return (
    <Wrapper>
      <ContentContainer>
        <Inner>
          <Left>
            <Title>{formTitle}</Title>
            {children}
          </Left>
          <Right>
            <ContactsFormContainer />
          </Right>
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 120px;
  
  ${ContentContainer} {
    max-width: 1920px;
  }

  ${media.tabletSmall(css`
    padding-top: 70px;
  `)}}
`;
const Inner = styled.div`
  display: flex;

  ${media.tabletSmall(css`
    display: block;
  `)}
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

  ${media.tabletSmall(css`
    max-width: none;
  `)}

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Left = styled.div`
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tabletSmall(css`
    max-width: none;
  `)}
`;

const Right = styled.div`
  margin-left: 20px;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tabletSmall(css`
    margin-left: 0;
    max-width: none;
  `)}

  ${media.tabletSmallOnly(css`
    margin-top: 80px;
  `)}

  ${media.mobile(css`
    margin-top: 35px;
  `)}
`;

export default AboutSection;
