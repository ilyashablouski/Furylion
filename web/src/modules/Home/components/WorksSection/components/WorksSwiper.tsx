import React from 'react';
import styled, { css } from 'styled-components';

import { WorksItemType } from '@/typings/model';
import { media } from '@/utils/mixin';

import WorksItem from './WorksItem';

type Props = {
  worksItems: Array<WorksItemType>;
};

function WorksSwiper({ worksItems }: Props) {
  return (
    <WorksSwiperContainer>
      {worksItems.map((worksItem, index) => {
        return (
          <WorksSwiperSlide key={index}>
            <WorksItem
              image={worksItem.image}
              title={worksItem.title}
              text={worksItem.text}
              tags={worksItem.tags ?? ''}
            />
          </WorksSwiperSlide>
        );
      })}
    </WorksSwiperContainer>
  );
}

const WorksSwiperContainer = styled.div`
  margin-top: 55px;

  ${media.tabletSmallOnly(css`
    margin-top: 38px;
  `)}

  ${media.mobile(css`
    margin-top: 16px;
  `)}
`;

const WorksSwiperSlide = styled.div``;

export default WorksSwiper;
