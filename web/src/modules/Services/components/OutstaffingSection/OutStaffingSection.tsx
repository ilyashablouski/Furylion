import React from 'react';
import styled from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { OutStaffingSectionType } from '@/typings/model';

function OutStaffingSection() {
  const page = useCurrentPage<any>();
  if (!page) return null;

  const pageFields = page.templateFields;
  // const tagsArray = tags ? tags.split(',') : [];
  return (
    <Wrapper>
      <Title></Title>

      <TextContainer>
        <TextItem>
          <Text>{}</Text>
        </TextItem>
        <TextItem>
          <Text>{}</Text>
        </TextItem>
      </TextContainer>

      <Main>
        <TagsBlock>
          <TagsTitle></TagsTitle>
          {/*<Tags>*/}
          {/*  {tagsArray.map((tag, index) => {*/}
          {/*    return <Tag key={index}></Tag>;*/}
          {/*  })}*/}
          {/*</Tags>*/}
        </TagsBlock>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1920px;
`;

const Title = styled.span``;
const TextContainer = styled.div``;
const TextItem = styled.div``;
const Text = styled.p``;
const Main = styled.div``;
const TagsBlock = styled.div``;
const TagsTitle = styled.div``;
const Tags = styled.div``;
const Tag = styled.span``;

export default OutStaffingSection;
