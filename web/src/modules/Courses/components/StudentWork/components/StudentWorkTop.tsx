import React from 'react';
import styled, { css } from 'styled-components';

import { media } from '@/utils/mixin';
import { StudentsItem } from '@/modules/Courses/Courses.types';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';

import StudentWorkBlock from './StudentWorkBlock';
import StudentWorkItem from './StudentWorkItem';
import ItemWrapper from './ItemWrapper';

type Props = {
  studentWorksItems: Array<StudentsItem>;
};

function StudentWorkTop({ studentWorksItems }: Props) {
  const { studentsItems } = useCoursesData();
  if (studentWorksItems.length === 0) return null;

  const studentWorksMarkupArray = studentWorksItems.map((studentWorksItem) => {
    return (
      <StudentWorkItem
        image={studentWorksItem.image}
        title={studentWorksItem.title}
        text={studentWorksItem.text}
        className="service-item-info"
      />
    );
  });

  return (
    <StudentWorkBlock>
      <BlockLeft>
        <ItemWrapper
          className="item-wrapper"
          singleItem
          gallery={studentsItems[0].gallery}
        >
          {studentWorksMarkupArray[0]}
        </ItemWrapper>
      </BlockLeft>

      <BlockRight>
        <ItemWrapper
          className="item-wrapper"
          gallery={studentsItems[1].gallery}
        >
          {studentWorksMarkupArray[1]}
        </ItemWrapper>
        <ItemWrapper
          className="item-wrapper"
          gallery={studentsItems[2].gallery}
        >
          {studentWorksMarkupArray[2]}
        </ItemWrapper>
      </BlockRight>
    </StudentWorkBlock>
  );
}

const BlockLeft = styled.div`
  clip-path: polygon(0 0, 100% 0, 68% 100%, 0 100%);
  flex: 0 1 66.1%;
  max-width: 66.1%;
  z-index: 3;
  transform: translateZ(0);

  ${media.tabletSmall(css`
    margin-top: -10px;
    position: relative;
    width: 100%;
    max-width: 100%;
    clip-path: initial;
  `)}
  ${media.mobile(css`
    margin-top: -30px;
  `)}
  .item-wrapper {
    ${media.tabletSmallOnly(css`
      margin-top: 10px;
    `)}

    ${media.mobile(css`
      margin-top: 30px;
    `)}
  }

  .item-image-container {
    ${media.tabletSmall(css`
      padding-top: 65.88%;
    `)}

    ${media.mobile(css`
      padding-top: 83.33%;
    `)}
  }
`;
const BlockRight = styled.div`
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0 100%);
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 53.45%;
  height: 100%;
  z-index: 3;
  transform: translateZ(0);

  ${media.tabletSmall(css`
    position: relative;
    width: 100%;
    max-width: 100%;
    clip-path: initial;
  `)}
  .item-wrapper {
    &:nth-child(1) {
      margin-bottom: 11px;

      ${media.tabletSmallOnly(css`
        margin-top: 10px;
        margin-bottom: 0;
      `)}

      ${media.mobile(css`
        margin-top: 30px;
        margin-bottom: 0;
      `)}
    }

    &:nth-child(2) {
      margin-top: 11px;
      ${media.tabletSmallOnly(css`
        margin-top: 10px;
      `)}

      ${media.mobile(css`
        margin-top: 30px;
      `)}
    }
  }

  .service-item-info {
    right: 0;
    text-align: right;

    ${media.mobile(css`
      left: 0;
      right: auto;
      text-align: left;
    `)}
    p {
      margin-left: auto;

      ${media.mobile(css`
        margin-left: 0;
        margin-right: auto;
      `)}
    }
  }

  .item-image-container {
    ${media.tabletSmall(css`
      padding-top: 31.51%;
    `)}

    ${media.mobile(css`
      padding-top: 41.66%;
    `)}
  }
`;

export default StudentWorkTop;
