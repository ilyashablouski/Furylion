import React from 'react';
import styled from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { OutStaffingSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';

function OutStaffingSection() {
  const page = useCurrentPage<OutStaffingSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;
  return (
    <Wrapper>
      <ContentContainer>
        <Title>{pageFields.outStaffingTitle}</Title>

        <TextContainer>
          <TextItem>
            <Text>{pageFields.outStaffingText1}</Text>
          </TextItem>
          <TextItem>
            <Text>{pageFields.outStaffingText2}</Text>
          </TextItem>
        </TextContainer>

        <Main>
          {pageFields.outStaffingItems
            ? pageFields.outStaffingItems.map((outStaffingItem, index) => {
                const tagsArray = outStaffingItem.tags
                  ? outStaffingItem.tags.split(',')
                  : [];
                return (
                  <TagsBlock key={index}>
                    <TagsTitle>{outStaffingItem.title}</TagsTitle>
                    <Tags>
                      {tagsArray
                        ? tagsArray.map((tag, index) => {
                            return (
                              <TagItem key={index}>
                                <Tag>{tag}</Tag>
                              </TagItem>
                            );
                          })
                        : null}
                    </Tags>
                  </TagsBlock>
                );
              })
            : null}
        </Main>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1920px;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  color: ${colors.white};
`;
const TextContainer = styled.div`
  margin-top: 25px;
  margin-left: -10px;
  margin-right: -10px;
  display: flex;
`;
const TextItem = styled.div`
  padding: 10px;
`;
const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;
const Main = styled.div`
  margin-top: 30px;
`;
const TagsBlock = styled.div`
  padding: 25px;
  display: flex;
  width: fit-content;
  align-items: center;
  border: 1px dashed rgba(194, 25, 30, 0.8);

  &:not(:first-child) {
    margin-top: 25px;
  }
`;
const TagsTitle = styled.div`
  font-weight: 900;
  font-size: 24px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.8);
`;
const Tags = styled.div`
  margin-left: 43px;
  display: flex;
`;

const TagItem = styled.div`
  &:not(:first-child) {
    margin-left: 25px;
  }
`;

const Tag = styled.span`
  padding: 10px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.8);
  color: ${colors.dark};
  white-space: nowrap;
`;

export default OutStaffingSection;
