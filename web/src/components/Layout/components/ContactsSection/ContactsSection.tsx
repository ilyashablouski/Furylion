import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as FooterLogoIcon } from '@/assets/svg/footer-logo.svg';
import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useSettingItem from '@/hooks/useSettingItem';

import ContactBlock from './components/ContactBlock';

function ContactsSection() {
  const contactsArray = useSettingItem('FOOTER_OFFICES');
  if (!contactsArray) return null;
  return (
    <Wrapper id="contacts-section">
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

const Wrapper = styled.section`
  padding-top: 100px;
  padding-bottom: 77px;
  background: ${colors.dark};

  ${media.tabletSmallOnly(css`
    padding-top: 139px;
    padding-bottom: 40px;
  `)}

  ${media.mobile(css`
    padding-top: 77px;
    padding-bottom: 50px;
  `)}
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};

  @media (max-width: 1365px) {
    display: block;
  }
`;

const LogoWrapper = styled.div`
  margin-top: 17px;
  margin-right: 54px;

  @media (max-width: 1365px) {
    margin-top: 0;
    margin-right: 0;
    flex: 1 1 100%;
    max-width: 100%;
  }

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

  @media (max-width: 1365px) {
    width: auto;
    margin-top: 30px;
  }

  ${media.tablet(css`
    margin-left: -10px;
    margin-right: -10px;
  `)}

  ${media.mobile(css`
    margin: 25px 0 0;
    display: block;
  `)}
`;

export default ContactsSection;
