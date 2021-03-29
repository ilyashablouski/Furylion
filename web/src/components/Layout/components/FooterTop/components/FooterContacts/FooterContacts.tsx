import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as FooterLogoIcon } from '@/assets/svg/footer-logo.svg';
import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { SettingOptionsListType } from '@/typings/model';
import { media } from '@/utils/mixin';

import ContactBlock from './components/ContactBlock';

type Props = {
  contactsArray: SettingOptionsListType;
};

function FooterContacts({ contactsArray }: Props) {
  return (
    <Wrapper>
      <ContentContainer>
        <ContentWrapper>
          <LogoWrapper>
            <FooterLogoIcon />
          </LogoWrapper>

          <Inner>
            {contactsArray.length > 0
              ? contactsArray.map((contact, index) => (
                  <ContactBlock key={index} {...contact} />
                ))
              : null}
          </Inner>
        </ContentWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 97px;
  padding-bottom: 75px;

  ${ContentContainer} {
    max-width: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
  ${media.desktop1366(css`
    display: block;
  `)}
`;

const LogoWrapper = styled.div`
  margin-right: 54px;
  flex: 1 2 40%;
  max-width: 40%;
`;

const Inner = styled.div`
  margin: 0 -45px;
  display: flex;
  width: 100%;
  justify-content: space-between;

  ${media.desktop1366(css`
    width: auto;
    margin-top: 30px;
  `)}
`;

export default FooterContacts;
