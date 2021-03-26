import React from 'react';
import styled, { css } from 'styled-components';

import { ImageType } from '@/typings/model';
import PlainPicture from '@/components/Picture';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

type Props = {
  top?: true;
  logosArray?: Array<ImageType>;
};

function LogosLine({ top, logosArray }: Props) {
  return (
    <Container top={top}>
      <LogosWrapper>
        {logosArray
          ? logosArray.map((logo, index) => (
              <Logo
                key={index}
                mobileSmall={{
                  src: logo?.url,
                  src2x: logo?.url_2x,
                  webp: logo?.url_webp,
                  webp2x: logo?.url_webp_2x,
                }}
                className="logo-image"
              />
            ))
          : null}
      </LogosWrapper>
    </Container>
  );
}

const Container = styled.div<{ top?: boolean }>`
  margin: 0 -20px;
  display: flex;
  align-items: center;
  height: 150px;
  margin-top: ${(props) => (props.top ? '0' : '-6%')};
  background: ${(props) => (props.top ? `${colors.white}` : `${colors.red}`)};
  transform: ${(props) => (props.top ? 'rotate(-3deg)' : 'rotate(3deg)')};

  @media (min-width: 1366px) {
    margin-top: ${(props) => (props.top ? '0' : '-3%')};
  }

  ${media.tabletSmall(css`
    margin-top: 3%;
  `)}

  ${media.tabletSmallOnly(css`
    height: 90px;
  `)}

  ${media.mobile(css`
    height: 40px;
  `)}
`;

const LogosWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled(PlainPicture)`
  &.logo-image {
    padding: 0 50px;

    ${media.tabletSmallOnly(css`
      padding: 0 35px;
    `)}

    ${media.mobile(css`
      padding: 0 15px;
    `)}
  }

  img {
    //TODO:Add to all logos images
    //noinspection CssInvalidPropertyValue
    image-rendering: -webkit-optimize-contrast;
    max-height: 90px;

    ${media.tabletSmallOnly(css`
      max-height: 55px;
    `)}

    ${media.mobile(css`
      max-height: 25px;
    `)}
  }
`;

export default LogosLine;
