import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { OutStaffingSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import { media } from '@/utils/mixin';

function OutStaffingSection() {
  const [isShown, setIsShown] = useState(false);

  const page = useCurrentPage<OutStaffingSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper className="section-wrapper">
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
      </ContentContainer>

      <Main>
        <MainWrapper>
          {pageFields.outStaffingItems
            ? pageFields.outStaffingItems.map((outStaffingItem, index) => {
                const tagsArray = outStaffingItem.tags
                  ? outStaffingItem.tags.split(',')
                  : [];
                return (
                  <TagsInner key={index} isShown={isShown}>
                    <TagsContainer>
                      <TagsBlock
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                      >
                        <TagsTitle>{outStaffingItem.title}</TagsTitle>
                        <TagsWrapper>
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
                        </TagsWrapper>
                      </TagsBlock>
                    </TagsContainer>
                  </TagsInner>
                );
              })
            : null}
        </MainWrapper>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 100px 0;

  ${media.tabletSmall(css`
    padding: 70px 0;
  `)}
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;
const TextContainer = styled.div`
  margin-top: 25px;
  margin-left: -10px;
  margin-right: -10px;
  display: flex;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 30px;
    display: block;
  `)}
`;

const TextItem = styled.div`
  padding: 0 10px;

  ${media.mobile(css`
    &:not(:first-child) {
      margin-top: 20px;
    }
  `)}
`;

const Text = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};

  ${media.mobile(css`
    font-size: 12px;
  `)}
`;
const Main = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  ${media.tabletSmallOnly(css`
    margin-top: 50px;
    margin-left: -10px;
    margin-right: -10px;
  `)}

  ${media.tabletSmallOnly(css`
    padding: 0 40px;
  `)}

  ${media.mobile(css`
    padding: 0 20px;
  `)}
`;

const MainWrapper = styled.div`
  margin-top: -25px;
  width: 100%;
  ${media.tabletSmallOnly(css`
    margin: -20px -10px 0;
    display: flex;
    flex-wrap: wrap;
  `)}

  ${media.mobile(css`
    margin-top: -10px;
    display: block;
    width: 100%;
  `)}
`;

const TagsContainer = styled.div`
  max-width: 1368px;
  width: 100%;
  margin: 0 auto;
  padding: 0 68px;
  
  ${media.tabletSmall(css`
    padding: 0;
    height: 100%;
  `)} 
}
`;

const TagsInner = styled.div<{ isShown: boolean }>`
  margin-top: 25px;
  transition: all 150ms ease-in-out;

  ${media.tabletSmall(css`
    margin: 20px 10px 0;
    flex: 1 1 calc(50% - 20px);
    max-width: calc(50% - 20px);
  `)}

  ${media.mobile(css`
    margin: 10px 0 0;
    max-width: none;
  `)}
`;

const TagsBlock = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px dashed rgba(194, 25, 30, 0.8);

  ${media.tabletSmall(css`
    padding: 20px 25px;
    height: 100%;
    display: block;
  `)}
`;

const TagsTitle = styled.div`
  margin-left: 25px;
  padding: 10px 0;
  flex: 0 0 178px;
  font-weight: 900;
  font-size: 24px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.8);

  ${media.tabletSmall(css`
    margin-left: 0;
    padding: 0;
  `)}
`;
const TagsWrapper = styled.div`
  padding: 25px;
  display: inline-grid;
  width: 100%;

  ${media.tabletSmall(css`
    margin-top: 20px;
    padding: 0;
    display: block;
  `)}
`;

const Tags = styled.div`
  display: flex;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.tabletSmall(css`
    display: block;
    overflow: initial;
  `)}
`;

const TagItem = styled.div`
  &:not(:first-child) {
    margin-left: 25px;

    ${media.tabletSmall(css`
      margin-top: 10px;
      margin-left: 0;
    `)}
  }
`;

const Tag = styled.span`
  padding: 10px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.8);
  color: ${colors.dark};
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  white-space: nowrap;
`;

export default OutStaffingSection;
