import React from 'react';
import styled from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import Tag from '@/components/Tag';

import VacancyCard from './components/VacancyCard';
//TODO: Add dynamic data & types for them
function JobSection({ tagsArray }: any) {
  return (
    <Wrapper>
      <ContentContainer>
        <Left>
          <VacancyCard />
        </Left>
        <Right>
          <Tags>
            {tagsArray.map((tag: any, index: any) => {
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
