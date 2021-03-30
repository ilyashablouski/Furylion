import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { StringFieldType } from '@/typings/common';
import ContactsFormContainer from '@/components/form';
import { media } from '@/utils/mixin';

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

const Wrapper = styled.div`
  ${ContentContainer} {
    max-width: 1592px;
  }
`;
const Inner = styled.div`
  padding-top: 158px;
  display: flex;

  ${media.tabletSmall(css`
    display: block;
  `)}

  ${media.tabletSmallOnly(css`
    padding-top: 70px;
  `)}

  ${media.mobile(css`
    padding-top: 78px;
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
    font-size: 64px;
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
  margin-left: 40px;
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

export default FooterAbout;
