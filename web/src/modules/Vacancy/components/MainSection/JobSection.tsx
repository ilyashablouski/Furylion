import React from 'react';
import styled, { css } from 'styled-components';

import testBg from '@/assets/images/test.jpg';
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
  const introText = vacancyFullData?.data?.introduction;
  const mainInfo = vacancyFullData?.data?.body;

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

            <IntroText>{introText}</IntroText>
            <MainInfo dangerouslySetInnerHTML={{ __html: mainInfo ?? '' }} />

            {/*<ListBlock>*/}
            {/*  <LeftList />*/}
            {/*  <RightList/>*/}
            {/*</ListBlock>*/}
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
  margin: 0 -10px;
  display: flex;

  ${media.tabletSmall(css`
    margin: 0 -5px;
  `)}
`;
const IntroText = styled.p`
  margin-top: 44px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
`;

const MainInfo = styled.div``;

const ListBlock = styled.div`
  margin-top: 40px;
`;

const LeftList = styled.div``;
const RightList = styled.div``;

export default JobSection;
