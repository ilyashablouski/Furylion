import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import useCurrentPage from '@/hooks/useCurrentPage';
import { OutStaffingSectionType } from '@/typings/model';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import { media } from '@/utils/mixin';

import TagsElement from './components/TagsElement';

function OutStaffingSection() {
  const [isChangedColor, setChangedColor] = useState(false);

  function onChangeBackgroundColor() {
    setChangedColor(!isChangedColor);
  }

  const page = useCurrentPage<OutStaffingSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper
      id={pageFields?.outStaffingId ?? ''}
      isChangedColor={isChangedColor}
    >
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
                  <TagsElement
                    key={index}
                    tagsArray={tagsArray}
                    title={outStaffingItem.title}
                    onChangeBackgroundColor={onChangeBackgroundColor}
                  />
                );
              })
            : null}
        </MainWrapper>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.section<{ isChangedColor: boolean }>`
  padding: 100px 0;
  transition: all 150ms ease-in-out;

  ${media.tabletSmall(css`
    padding: 70px 0;
  `)}

  ${(props) =>
    props.isChangedColor &&
    css`
      background: ${colors.red};
    `}
}
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

export default OutStaffingSection;
