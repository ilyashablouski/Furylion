import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';
import { colors } from '@/constants/theme';
import { StringFieldType } from '@/typings/common';

type Props = {
  tagsArray: Array<string>;
  title: StringFieldType;
  onChangeBackgroundColor: () => void;
};

function TagsElement({ tagsArray, title, onChangeBackgroundColor }: Props) {
  const [isShown, setIsShown] = useState(false);
  return (
    <TagsInner isShown={isShown}>
      <TagsContainer>
        <TagsBlock
          onMouseEnter={() => {
            setIsShown(true);
            onChangeBackgroundColor();
          }}
          onMouseLeave={() => {
            setIsShown(false);
            onChangeBackgroundColor();
          }}
        >
          <TagsTitle>{title}</TagsTitle>
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
}

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

const TagsBlock = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px dashed rgba(194, 25, 30, 0.8);
  transition: all 150ms ease-in-out;

  ${media.tabletSmall(css`
    padding: 20px 25px;
    height: 100%;
    display: block;
  `)}
`;

const TagsInner = styled.div<{ isShown: boolean }>`
  margin-top: 25px;
  transition: all 150ms ease-in-out;
  @media (min-width: 1024px) {
    ${media.tabletSmall(css`
      margin: 20px 10px 0;
      flex: 1 1 calc(50% - 20px);
      max-width: calc(50% - 20px);
    `)}

    ${media.mobile(css`
      margin: 10px 0 0;
      max-width: none;
    `)}

  ${(props) =>
      props.isShown &&
      css`
        background: ${colors.dark};

        ${TagsBlock} {
          border: 1px dashed ${colors.dark};
        }

        ${TagsTitle} {
          color: ${colors.white};
        }

        ${Tag} {
          background: ${colors.white};
        }
      `}
  }
`;

const TagsTitle = styled.div`
  margin-left: 25px;
  padding: 10px 0;
  flex: 0 0 178px;
  font-weight: 900;
  font-size: 24px;
  line-height: 130%;
  color: rgba(255, 255, 255, 0.8);
  transition: all 150ms ease-in-out;

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
  transition: all 150ms ease-in-out;
`;

export default TagsElement;
