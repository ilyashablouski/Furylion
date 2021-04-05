import React from 'react';
import styled, { css } from 'styled-components';

import testBg from '@/assets/images/test.jpg';
import checkMarkUrl from '@/assets/svg/vacancy/check-mark.svg';
import ContentContainer from '@/components/ContentContainer';
import Tag from '@/components/Tag';
import useCurrentVacancy from '@/hooks/useCurrentVacancy';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

import VacancyCard from './components/VacancyCard';

function JobSection() {
  const vacancyFullData = useCurrentVacancy();
  const vacancyData = vacancyFullData?.data;
  const tags = vacancyFullData?.data?.tags;
  const tagsArray = tags ? tags.split(',') : [];
  const introFirstText = vacancyFullData?.data?.introduction;
  const introSecondText = vacancyFullData?.data?.introductionSecond;
  const introThirdText = vacancyFullData?.data?.introductionThird;
  //TODO:Delete from admin panel if no need
  // const mainInfo = vacancyFullData?.data?.body;
  const responsibilitiesList = vacancyFullData?.data?.responsibilities;
  const requirementsList = vacancyFullData?.data?.requirements;
  return (
    <Wrapper>
      <ContentContainer>
        <Inner>
          <Left>
            <VacancyCard
              image={testBg}
              level={vacancyData?.level}
              typeOfWork={vacancyData?.typeOfWork}
            />
          </Left>
          <Right>
            <Tags>
              {tagsArray.map((tag, index) => {
                return <Tag key={index} tag={tag} />;
              })}
            </Tags>
            <IntroBlock>
              <IntroFirstText>{introFirstText}</IntroFirstText>
              <IntroSecondText>{introSecondText}</IntroSecondText>

              <IntroThirdText>{introThirdText}</IntroThirdText>
            </IntroBlock>
          </Right>
          <Lists>
            <LeftList>
              <ListTitle>Your responsibilities:</ListTitle>
              <ListContent
                dangerouslySetInnerHTML={{
                  __html: responsibilitiesList ?? '',
                }}
              />
            </LeftList>
            <RightList>
              <ListTitle>Requirements:</ListTitle>
              <ListContent
                dangerouslySetInnerHTML={{ __html: requirementsList ?? '' }}
              />
            </RightList>
          </Lists>
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 70px;
  padding-bottom: 100px;
`;
const Inner = styled.div`
  display: flex;
`;
const Left = styled.div``;
const Right = styled.div`
  margin-left: 40px;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    margin-left: 20px;
  `)}

  ${media.mobile(css`
    margin-left: 0;
  `)}
`;
const Tags = styled.div`
  margin: 0 -5px;
  display: flex;
`;

const IntroBlock = styled.div`
  margin: 0 -8px;
  margin-top: 38px;
  display: flex;
  flex-wrap: wrap;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};

  ${media.tabletSmall(css`
    margin: 25px 0 0 0;
    display: block;
  `)}

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const IntroFirstText = styled.p`
  padding: 0 8px;
  flex: 1 1 41.18%;
  max-width: 41.18%;

  ${media.tabletSmall(css`
    padding: 0;
    max-width: none;
  `)}
`;

const IntroSecondText = styled.p`
  padding: 0 8px;
  flex: 1 1 58.82%;
  max-width: 58.82%;

  ${media.tabletSmall(css`
    padding: 0;
    margin-top: 24px;
    max-width: none;
  `)}

  ${media.mobile(css`
    margin-top: 20px;
  `)}
`;

const IntroThirdText = styled.p`
  margin-top: 37px;
  padding: 0 8px;
  flex: 1 1 100%;
  max-width: 100%;

  ${media.tabletSmall(css`
    margin-top: 24px;
  `)}

  ${media.mobile(css`
    margin-top: 13px;
  `)}
`;

const Lists = styled.div`
  margin-top: 40px;
  margin-left: -50px;
  margin-right: -50px;
  display: flex;

  ${media.tablet(css`
    margin-left: -25px;
    margin-right: -25px;
  `)}

  ${media.tabletSmall(css`
    margin-left: 0;
    margin-right: 0;
    display: block;
  `)}
`;

const LeftList = styled.div`
  padding: 0 50px;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tablet(css`
    padding-left: 25px;
    padding-right: 25px;
  `)}

  ${media.tabletSmall(css`
    margin-top: 58px;
    padding: 0;
  `)}

  ${media.tabletSmallOnly(css`
    margin-left: auto;
    max-width: 376px;
  `)}
`;
const RightList = styled.div`
  padding: 0 50px;
  flex: 1 1 50%;
  max-width: 50%;

  ${media.tablet(css`
    padding-left: 25px;
    padding-right: 25px;
  `)}

  ${media.tabletSmall(css`
    margin-top: 58px;
    padding: 0;
  `)}
`;

const ListTitle = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  white-space: nowrap;

  ${media.tablet(css`
    font-size: 26px;
  `)}
`;

const ListContent = styled.div`
  margin-top: 70px;

  ul {
    margin-top: -25px;
  }

  li {
    position: relative;
    margin-top: 25px;
    padding-left: 52px;
    min-height: 44px;
    font-weight: normal;
    font-size: 14px;
    line-height: 160%;
    color: ${colors.white};
    &:before {
      content: url(${checkMarkUrl});
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export default JobSection;
