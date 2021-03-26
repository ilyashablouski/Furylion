import React from 'react';
import styled from 'styled-components';

import { ReactComponent as FooterLogoIcon } from '@/assets/svg/footer-logo.svg';
import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';

import ContactBlock from './components/ContactBlock';

function ContactsSection() {
  return (
    <Wrapper>
      <ContentContainer>
        <ContentWrapper>
          <LogoWrapper>
            <FooterLogoIcon />
          </LogoWrapper>

          <Inner>
            <ContactBlock />
          </Inner>
        </ContentWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 97px;
  padding-bottom: 75px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.white};
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
`;

export default ContactsSection;
