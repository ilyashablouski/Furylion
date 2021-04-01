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
  padding-bottom: 77px;

  ${ContentContainer} {
    max-width: 1920px;
  }
F
  ${media.tabletSmallOnly(css`
    margin-top: 139px;
    padding-bottom: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 77px;
    padding-bottom: 50px;
  `)}
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
  margin-top: 17px;
  margin-right: 54px;

  ${media.desktop1366(css`
    margin-top: 0;
    margin-right: 0;
    flex: 1 1 100%;
    max-width: 100%;
  `)}

  svg {
    ${media.tabletSmallOnly(css`
      width: 71px;
      height: auto;
    `)}

    ${media.mobile(css`
      margin: 0 auto;
      display: block;
      width: 102px;
      height: auto;
    `)}
  }
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

  ${media.tablet(css`
    margin-left: -10px;
    margin-right: -10px;
  `)}

  ${media.mobile(css`
    margin: 25px 0 0;
    display: block;
  `)}
`;

export default FooterContacts;
