import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { useTypedSelector } from '@/store/store';
import { selectMenuItemListByAlias } from '@/store/reducers/tager/menus';
import { colors } from '@/constants/theme';
import SocialNetwork from '@/components/SocialNetwork';
import { media } from '@/utils/mixin';
import Link from '@/components/Link';
import { SocialsType } from '@/typings/model';

import FooterMenu from './components/FooterMenu';

function Footer({ socialsData }: SocialsType) {
  const footerMenuItemList =
    useTypedSelector((state) => selectMenuItemListByAlias(state, 'footer')) ??
    [];

  return (
    <FooterContainer>
      <ContentContainer>
        <FooterTop>
          <FooterSocials>
            {socialsData.map((social, index) => {
              return (
                <SocialWrapper key={index}>
                  <SocialNetwork
                    href={social.href ?? '#'}
                    iconSVG={social.svg}
                  />
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

          <FooterCreatorLink to="#">
            Made with fury in&nbsp;
            <FooterCreatorFirst>69</FooterCreatorFirst>
            <FooterCreatorSecond>pixels.</FooterCreatorSecond>
          </FooterCreatorLink>
        </FooterBottom>
      </ContentContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding-top: 69px;
  padding-bottom: 72px;

  ${media.tabletSmallOnly(css`
    padding-top: 47px;
    padding-bottom: 40px;
  `)}

  ${media.mobile(css`
    padding-top: 40px;
    padding-bottom: 24px;
  `)}
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tabletSmall(css`
    flex-direction: column;
  `)}

  ${media.tabletSmallOnly(css`
    align-items: flex-end;
  `)}

  ${media.mobile(css`
    align-items: flex-start;
  `)}
`;

const FooterSocials = styled.div`
  display: flex;
  margin: 0 -17.5px;

  ${media.tabletSmall(css`
    order: 2;
    margin: 0 -16px;
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    align-self: center;
  `)}
`;

const FooterBottom = styled.div`
  margin-top: 69px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 25px;
    flex-direction: column;
  `)}
`;

const FooterCopyright = styled.span`
  font-weight: 300;
  font-size: 11px;
  line-height: 17px;
  color: ${colors.dark};

  ${media.mobile(css`
    margin-top: 24px;
    order: 2;
  `)}
`;

const FooterCreatorLink = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: ${colors.dark};
  transition: all 150ms ease-in-out;
  &:hover {
    opacity: 0.85;
  }

  ${media.mobile(css`
    order: 1;
  `)}
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

  ${media.tabletSmall(css`
    margin: 0 16px;
  `)}
  }
`;

export default Footer;
