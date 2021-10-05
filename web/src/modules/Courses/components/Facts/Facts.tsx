import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap, { Power1 } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { generateNumberArray } from '@tager/web-core';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import { media } from '@/utils/mixin';

import FactsCard from './Card';

gsap.registerPlugin(ScrollTrigger);

type AnimationType = string | number | gsap.plugins.StartEndFunc | undefined;

function Facts() {
  const { factsId, factsTitle, factsItems, factsText } = useCoursesData();

  const numbersArray = factsItems
    ? generateNumberArray(factsItems.length)
    : [1];

  const counterRefs = useRef(
    numbersArray.map(() => React.createRef<HTMLSpanElement>())
  );

  const componentRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    let tl: gsap.core.Timeline;

    const delayCall = gsap.delayedCall(0, () => {
      if (!componentRef.current || !counterRefs.current) return;

      let startAnimation: AnimationType;
      let endAnimation: AnimationType;

      ScrollTrigger.matchMedia({
        '(min-width: 768px)': function () {
          startAnimation = 'top top';
          endAnimation = 'top top';
        },

        '(max-width: 767px)': function () {
          startAnimation = 'top 50%';
          endAnimation = 'top 50%';
        },
      });

      counterRefs.current.forEach((el, index) => {
        if (!componentRef.current) return;

        tl = gsap.timeline({
          scrollTrigger: {
            scroller: 'body',
            trigger: componentRef.current,
            start: startAnimation,
            end: endAnimation,
            scrub: 1,
          },
        });

        tl = tl.from(counterRefs.current[index].current, {
          textContent: 0,
          duration: 2,
          ease: Power1.easeOut,
          snap: { textContent: 1 },
        });
      });
    });

    return () => {
      delayCall?.kill();
      tl?.kill();
    };
  }, []);
  return (
    <Component id={factsId ?? ''} ref={componentRef}>
      <ContentContainer>
        <Title>{factsTitle}</Title>
        <Cards>
          {factsItems &&
            factsItems.map(
              ({ title, subtitle, description }, index: number) => (
                <FactsCard
                  key={index}
                  title={title}
                  subtitle={subtitle}
                  description={description}
                  counterRef={counterRefs.current[index]}
                />
              )
            )}
        </Cards>
        <Text>{factsText}</Text>
      </ContentContainer>
    </Component>
  );
}

export default Facts;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.dark};
  z-index: 1;
`;

const Title = styled.span`
  margin: 0 auto;
  display: block;
  max-width: 790px;
  font-weight: 900;
  font-size: 64px;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
    text-align: left;
  `)}
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 54px;

  ${media.tabletSmallOnly(css`
    grid-template-columns: repeat(2, 1fr);

    & > div :last-child {
      grid-column: 1 / span 2;
    }
  `)}

  ${media.mobile(css`
    grid-template-columns: repeat(1, 1fr);
  `)}
`;

const Text = styled(Title)`
  font-size: 32px !important;
  line-height: 130% !important;
  text-transform: initial !important;
  margin-top: 54px !important;

  ${media.tabletSmallOnly(css`
    line-height: 160% !important;
  `)}

  ${media.mobile(css`
    font-size: 24px !important;
    line-height: 130% !important;
    text-align: center;
  `)}
`;
