import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useCurrentPage from '@/hooks/useCurrentPage';
import { ProductionBlockType } from '@/typings/model';

import ProductionBlock from './components/ProductionBlock';
import PortingBlock from './components/PortingBlock';

gsap.registerPlugin(ScrollTrigger);

function AnimationSection() {
  const page = useCurrentPage<ProductionBlockType>();
  const animationTitleRef = useRef<HTMLSpanElement>(null);

  const id = page?.templateFields.productionId ?? '';

  useEffect(() => {
    const delayedCall = gsap.delayedCall(0, () => {
      if (!animationTitleRef.current) return null;

      gsap.to(animationTitleRef.current, {
        yPercent: 105,
        scrollTrigger: {
          start: 'bottom 90%',
          end: 'bottom 40%',
          trigger: animationTitleRef.current,
          scrub: true,
        },
      });
    });

    return () => {
      delayedCall.kill();
    };
  }, []);

  if (!page) return null;

  return (
    <Wrapper id={id}>
      <TitleBlock>
        <Title ref={animationTitleRef}>Animation</Title>
      </TitleBlock>
      <ProductionBlock />
      <PortingBlock />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  padding-bottom: 100px;
  max-width: 1920px;
`;

const TitleBlock = styled.div`
  margin: 0 auto;
  overflow: hidden;
`;

const Title = styled.span`
  display: block;
  text-align: center;
  width: 100%;
  font-weight: 900;
  font-size: 227px;
  line-height: 74%;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${colors.white};
  transform: translateY(-105%);

  ${media.desktop1366(
    css`
      font-size: 16.5vw;
    `
  )}

  ${media.tabletSmallOnly(
    css`
      font-size: 16.4vw;
    `
  )}

  ${media.mobile(
    css`
      font-size: 16vw;
    `
  )}
`;

export default AnimationSection;
