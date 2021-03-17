import React from 'react';
import styled from 'styled-components';

import { ReactComponent as InstagramIcon } from '@/assets/svg/social/instagram.svg';
import { ReactComponent as VkIcon } from '@/assets/svg/social/vk.svg';
import { ReactComponent as AppleIcon } from '@/assets/svg/social/apple.svg';
import { ReactComponent as AndroidIcon } from '@/assets/svg/social/android.svg';
import ContentContainer from '@/components/ContentContainer';
import { useTypedSelector } from '@/store/store';
import { selectMenuItemListByAlias } from '@/store/reducers/tager/menus';
import { colors } from '@/constants/theme';
import SocialNetwork from '@/components/SocialNetwork';

import FooterMenu from './components/FooterMenu';

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
            {socials.map((social, index) => {
              return (
                <SocialWrapper key={index}>
                  <SocialNetwork href={social.href} iconSVG={social.svg} />
                </SocialWrapper>
              );
            })}
          </FooterSocials>

          <FooterMenu menuItemList={footerMenuItemList} />
        </FooterTop>

        <FooterBottom>
          <FooterCopyright>
            © 2010-2021 FuryLion Development LLC.
          </FooterCopyright>

          <FooterCreator>
            Made with fury in&nbsp;
            <FooterCreatorFirst>69</FooterCreatorFirst>
            <FooterCreatorSecond>pixels.</FooterCreatorSecond>
          </FooterCreator>
        </FooterBottom>
      </ContentContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding-top: 55px;
  padding-bottom: 72px;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterBottom = styled.div`
  margin-top: 69px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterSocials = styled.div`
  display: flex;
  margin: 0 -17.5px;
`;

const FooterCopyright = styled.span`
  font-weight: 300;
  font-size: 11px;
  line-height: 17px;
  color: ${colors.dark};
`;

const FooterCreator = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: ${colors.dark};
`;

const FooterCreatorFirst = styled.span`
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  color: ${colors.red};
`;

const FooterCreatorSecond = styled(FooterCreatorFirst)`
  color: ${colors.dark};
`;

const SocialWrapper = styled.div`
  margin: 0 17.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  color: ${colors.dark};
  border: 1px solid ${colors.red};
  transition: 150ms all ease-in-out;
  
    &:hover {
      background: #000;
      color: ${colors.white};
    }
  }
`;

export default Footer;
