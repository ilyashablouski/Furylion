import React from 'react';
import styled from 'styled-components';

import { ReactComponent as InstagramIcon } from '@/assets/svg/social/instagram.svg';
import { ReactComponent as VkIcon } from '@/assets/svg/social/vk.svg';
import { ReactComponent as AppleIcon } from '@/assets/svg/social/apple.svg';
import { ReactComponent as AndroidIcon } from '@/assets/svg/social/android.svg';
import ContentContainer from '@/components/ContentContainer';
import { useTypedSelector } from '@/store/store';
import { selectMenuItemListByAlias } from '@/store/reducers/tager/menus';

import FooterSocial from './components/FooterSocial';

const socials = [
  {
    href: 'https://www.instagram.com/',
    svg: <InstagramIcon />,
  },
  {
    href: 'https://vk.com/',
    svg: <VkIcon />,
  },
  {
    href: 'https://www.apple.com/',
    svg: <AppleIcon />,
  },
  {
    href: 'https://play.google.com/',
    svg: <AndroidIcon />,
  },
];

function Footer() {
  const footerMenuItemList =
    useTypedSelector((state) => selectMenuItemListByAlias(state, 'footer')) ??
    [];
  return (
    <FooterContainer>
      <ContentContainer>
        <FooterTop>
          <FooterSocials>
            {socials.map((social) => {
              return <FooterSocial href={social.href} iconSVG={social.svg} />;
            })}
          </FooterSocials>

          {/*<FooterLinks>*/}
          {/*  */}
          {/*</FooterLinks>*/}
        </FooterTop>

        <FooterBottom></FooterBottom>
      </ContentContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding-top: 55px;
  padding-bottom: 72px;
`;

const FooterTop = styled.div``;

const FooterBottom = styled.div``;

const FooterSocials = styled.div`
  display: flex;
  margin: 0 -17.5px;
`;

export default Footer;
