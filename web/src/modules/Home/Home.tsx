import React from 'react';
import styled from 'styled-components';

import Link from '@/components/Link';
import { ReactComponent as OZiTAGLogo } from '@/assets/svg/ozitag-logo.svg';
import Picture from '@/components/Picture';
import infoBgUrl from '@/assets/images/home/intro/intro-bg.jpg';
import infoBgUrl2x from '@/assets/images/home/intro/intro-bg@2x.jpg';
import { colors } from '@/constants/theme';

function Home() {
  return (
    <Section>
      <Image>
        <Picture
          tabletLarge={{
            src: infoBgUrl,
            src2x: infoBgUrl2x,
          }}
        />
      </Image>
      <Inner>
        <span>WORK MIRACLES WITH US</span>
        <p>
          A full-service digital agency with global capabilities across web
          design and development, marketing and branding. We create digital
          experiences that are human-centered and future proof.
        </p>
      </Inner>

      {/*<OZiTAGLogo />*/}
      {/*<Link to="/test">*/}
      {/*  <h2>Go to test</h2>*/}
      {/*  <Picture desktop={{ src: '../assets/.' + '' }} />*/}
      {/*</Link>*/}

      {/*<Button isActive={true}>dqwdqwd</Button>*/}
    </Section>
  );
}

const Section = styled.section`
  position: relative;

  span {
    margin: 0 auto;
    max-width: 642px;
    font-weight: 900;
    font-size: 72px;
    line-height: 100%;
    text-transform: uppercase;
  }

  p {
    margin: 30px auto 0;
    max-width: 660px;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
  }

  picture {
    width: 100%;
  }
`;

const Image = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  top: 0;
  left: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Inner = styled.div`
  position: relative;
  padding: 313px 0 212px;
  text-align: center;
  color: ${colors.white};
`;

// const Button = styled.button<{ isActive: boolean }>`
//   color: ${(props) => (props.isActive ? 'red' : 'green')};
//
//   &:last-child {
//   }
// `;

export default Home;
