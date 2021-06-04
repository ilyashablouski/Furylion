import React from 'react';
import styled, { css } from 'styled-components';

import checkMarkUrl from '@/assets/svg/vacancy/check-mark.svg';
import ContentContainer from '@/components/ContentContainer';
import Tag from '@/components/Tag';
import useCurrentVacancy from '@/hooks/useCurrentVacancy';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';
import useSettingItem from '@/hooks/useSettingItem';

import VacancyCard from './components/VacancyCard';

function JobSection() {
  const vacancyFullListTypeData = useCurrentVacancy();
  const vacancyData = vacancyFullListTypeData?.data;
  const image = vacancyFullListTypeData?.data?.image;
  const tags = vacancyFullListTypeData?.data?.tags;
  const tagsArray = tags ? tags.split(',') : [];
  const introFirstText = vacancyFullListTypeData?.data?.introduction;
  const introSecondText = vacancyFullListTypeData?.data?.introductionSecond;
  const introThirdText = vacancyFullListTypeData?.data?.introductionThird;
  const responsibilitiesList = vacancyFullListTypeData?.data?.responsibilities;
  const requirementsList = vacancyFullListTypeData?.data?.requirements;

  const firstTitle = useSettingItem('FirstHeaderTitle');
  const secondTitle = useSettingItem('SecondHeaderTitle');

  return (
    <Wrapper>
      <ContentContainer>
        <Inner>
          <Left>
            <VacancyCard
              image={image || null}
              level={vacancyData?.level}
              typeOfWork={vacancyData?.typeOfWork}
            />
          </Left>
          <Right>
            <Tags>
              <TagsInner>
                {tagsArray.map((tag, index) => {
                  return <Tag key={index} tag={tag} />;
                })}
              </TagsInner>
            </Tags>
            <IntroBlock>
              <IntroFirstText>{introFirstText}</IntroFirstText>
              <IntroSecondText>{introSecondText}</IntroSecondText>

              <IntroThirdText>{introThirdText}</IntroThirdText>
            </IntroBlock>
          </Right>
          <Lists>
            <List>
              <ListTitle>{firstTitle}</ListTitle>
              <ListContent
                dangerouslySetInnerHTML={{
                  __html: responsibilitiesList ?? '',
                }}
              />
            </List>
            <List>
              <ListTitle>{secondTitle}</ListTitle>
              <ListContent
                dangerouslySetInnerHTML={{ __html: requirementsList ?? '' }}
              />
            </List>
          </Lists>
        </Inner>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 70px;
  padding-bottom: 100px;

  ${media.mobile(css`
    padding-top: 33px;
  `)}
`;

const Inner = styled.div``;

const Left = styled.div`
  float: left;
  margin-right: 40px;

  ${media.tabletSmallOnly(css`
    margin-right: 20px;
  `)}

  ${media.mobile(css`
    float: none;
    margin-right: 0;
    display: flex;
    justify-content: center;
  `)}
`;
const Right = styled.div`
  color: ${colors.white};

  ${media.mobile(css`
    margin-top: 25px;
  `)}
`;
const Tags = styled.div`
  display: flex;
`;
const TagsInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -10px -5px 0;
`;

const IntroBlock = styled.div`
  margin-top: 38px;
  display: flex;
  flex-wrap: wrap;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};

  ${media.tabletSmall(css`
    margin-top: 25px;
    display: block;
  `)}

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;

const IntroFirstText = styled.p`
  flex: 1 1 41.18%;
  max-width: 41.18%;

  ${media.tabletSmall(css`
    padding: 0;
    max-width: none;
  `)}
`;

const IntroSecondText = styled.p`
  margin-left: 24px;
  flex: 1 1 calc(58.82% - 24px);
  max-width: calc(58.82% - 24px);

  ${media.tabletSmall(css`
    margin-left: 0;
    margin-top: 24px;
    max-width: none;
  `)}

  ${media.mobile(css`
    margin-top: 20px;
  `)}
`;

const IntroThirdText = styled.p`
  margin-top: 35px;
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
  margin-top: 43px;
  display: flex;

  ${media.tabletSmall(css`
    margin-top: 0;
    display: block;
  `)}
`;
const List = styled.div`
  flex: 1 1 50%;
  max-width: 50%;

  &:first-child {
    ${media.tabletSmallOnly(css`
      margin-left: auto;
      max-width: 376px;
    `)}
  }

  &:not(:first-child) {
    margin-left: 100px;
    ${media.tablet(css`
      margin-left: 25px;
    `)}

    ${media.tabletSmall(css`
      margin-left: 0;
    `)}
  }

  ${media.tabletSmall(css`
    margin-top: 58px;
    margin-left: 0;
  `)}

  ${media.mobile(css`
    max-width: none;
  `)}
`;

const ListTitle = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  white-space: nowrap;
  color: ${colors.white};

  ${media.tablet(css`
    font-size: 26px;
  `)}

  ${media.tabletSmallOnly(css`
    font-size: 32px;
  `)}

  ${media.mobile(css`
    font-size: 24px;
  `)}
`;

const ListContent = styled.div`
  margin-top: 44px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    margin-top: 56px;
  `)}
  ${media.mobile(css`
    margin-top: 30px;
    font-size: 12px;
  `)}
  li {
    position: relative;
    padding-left: 52px;
    display: flex;
    align-items: center;
    min-height: 44px;
    color: ${colors.white};

    &:not(:first-child) {
      margin-top: 25px;

      ${media.mobile(css`
        margin-top: 20px;
      `)}
    }

    &:before {
      content: url(${checkMarkUrl});
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export default JobSection;
