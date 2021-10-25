import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { useMedia } from '@tager/web-core';

import ContentContainer from '@/components/ContentContainer';
import { useSingleCourseData } from '@/modules/Courses/pages/SingleCourse/SingleCourse.hooks';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import Picture from '@/components/Picture';

import LearnToTabletAndMobile from './LearnToTabletAndMobile';
import LearnToCard from './Card';

function LearnTo() {
  const { learnId, learnTitle, learnItems } = useSingleCourseData();
  const [activeIndexCard, setActiveIndexCard] = useState(0);
  const tabletMedia = useMedia('(max-width: 1259.9px)');

  return (
    <Component id={learnId ?? ''}>
      <ContentContainer>
        <Title>{learnTitle}</Title>

        {tabletMedia ? (
          <LearnToTabletAndMobile />
        ) : (
          <Content>
            <Left>
              {learnItems &&
                learnItems.map(
                  ({ title, description, isActive }, index: number) => (
                    <LearnToCard
                      key={index}
                      title={title}
                      description={description}
                      isActive={index === activeIndexCard}
                      onPointerDown={() => setActiveIndexCard(index)}
                    />
                  )
                )}
            </Left>

            <Right>
              {learnItems && (
                <CardImage
                  src={learnItems[activeIndexCard].image?.url}
                  src2x={learnItems[activeIndexCard].image?.url_2x}
                  srcWebp={learnItems[activeIndexCard].image?.url_webp}
                  srcWebp2x={learnItems[activeIndexCard].image?.url_webp_2x}
                />
              )}
              <CardImageFilter />
            </Right>
          </Content>
        )}
      </ContentContainer>
    </Component>
  );
}

export default LearnTo;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.dark};

  ${media.tablet(css`
    padding: 70px 0;
  `)}
`;

const Title = styled.span`
  display: block;
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 31px;
  `)}
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 54px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 709px;
`;

const Right = styled.div`
  position: relative;
  margin-left: 47px;
  flex: 1 1 447px;
  max-width: 447px;
`;

const CardImage = styled(Picture)`
  position: relative;
  padding-top: 84.144%;
  width: 100%;
  margin-top: -25px;
  z-index: 2;

  picture {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const CardImageFilter = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  top: 26%;
  left: 0;
  bottom: 0;
  right: 0;
  background: #413f3a;
  filter: blur(70px);
  transform: rotate(-38.85deg);
`;
