import React from 'react';
import styled from 'styled-components';

import { colors } from '@/constants/theme';
import useSettingItem from '@/hooks/useSettingItem';
import { ReactComponent as InstagramIcon } from '@/assets/svg/social/instagram.svg';
import { ReactComponent as VkIcon } from '@/assets/svg/social/vk.svg';
import { ReactComponent as AppleIcon } from '@/assets/svg/social/apple.svg';
import { ReactComponent as AndroidIcon } from '@/assets/svg/social/android.svg';
import Preloader from '@/components/Preloader';

import Footer from './components/Footer';
import Header from './components/Header';
import ContactsSection from './components/ContactsSection';

type Props = {
  children?: React.ReactNode;
  isPreloaderHidden?: boolean;
  isWhite?: boolean;
};

function Layout({ children, isPreloaderHidden, isWhite }: Props) {
  const instagramUrl = useSettingItem('INSTAGRAM_URL');
  const vkontakteUrl = useSettingItem('VKONTAKTE_URL');
  const appstoreUrl = useSettingItem('APPSTORE_URL');
  const googleplayUrl = useSettingItem('GOOGLEPLAY_URL');

  const socialsData = [
    {
      href: instagramUrl,
      svg: <InstagramIcon />,
    },
    {
      href: vkontakteUrl,
      svg: <VkIcon />,
    },
    {
      href: appstoreUrl,
      svg: <AppleIcon />,
    },
    {
      href: googleplayUrl,
      svg: <AndroidIcon />,
    },
  ];

  return (
    <Container>
      <Preloader hidden={isPreloaderHidden} />
      <Header socialsData={socialsData} />
      <Main isWhite={isWhite}>{children}</Main>
      <ContactsSection />
      <Footer socialsData={socialsData} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const Main = styled.main<{ isWhite?: boolean }>`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.isWhite ? colors.white : colors.dark)};
`;

export default Layout;
