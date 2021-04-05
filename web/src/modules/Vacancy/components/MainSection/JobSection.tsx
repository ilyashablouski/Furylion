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
            <Intro>
              <IntroInner>
                <IntroFirstText>{introFirstText}</IntroFirstText>
                <IntroSecondText>{introSecondText}</IntroSecondText>
              </IntroInner>
              <IntroThirdText>{introThirdText}</IntroThirdText>
            </Intro>

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
          </Right>
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
`;
const Tags = styled.div`
  margin: 0 -5px;
  display: flex;
`;

const Intro = styled.div`
  margin-top: 38px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const IntroInner = styled.div`
  display: flex;
  margin: 0 -8px;
`;

const IntroFirstText = styled.p`
  padding: 0 8px;
  flex: 1 1 41.18%;
  max-width: 41.18%;
`;

const IntroSecondText = styled.p`
  padding: 0 8px;
  flex: 1 1 58.82%;
  max-width: 58.82%;
`;

const IntroThirdText = styled.p`
  margin-top: 37px;
`;

const Lists = styled.div`
  margin-top: 40px;
  margin-left: -50px;
  margin-right: -50px;
  display: flex;
`;

const LeftList = styled.div`
  padding: 0 50px;
  flex: 1 1 50%;
  max-width: 50%;
`;
const RightList = styled.div`
  padding: 0 50px;
  flex: 1 1 50%;
  max-width: 50%;
`;

const ListTitle = styled.span`
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
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
