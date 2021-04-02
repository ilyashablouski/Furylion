import React from 'react';
import styled from 'styled-components';

import testBg from '@/assets/images/test.jpg';
import ContentContainer from '@/components/ContentContainer';
import Tag from '@/components/Tag';
import useCurrentVacancy from '@/hooks/useCurrentVacancy';

import VacancyCard from './components/VacancyCard';

function JobSection() {
  const vacancyFullData = useCurrentVacancy();
  const vacancyData = vacancyFullData?.data;
  const tags = vacancyFullData?.data?.tags;
  const tagsArray = tags ? tags.split(',') : [];

  return (
    <Wrapper>
      <ContentContainer>
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
        </Right>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const Left = styled.div``;
const Right = styled.div``;
const Tags = styled.div``;

export default JobSection;
