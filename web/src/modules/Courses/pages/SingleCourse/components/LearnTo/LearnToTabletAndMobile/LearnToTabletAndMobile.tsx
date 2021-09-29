import React from 'react';
import styled from 'styled-components';

import { useSingleCourseData } from '@/modules/Courses/pages/SingleCourse/SingleCourse.hooks';

import LearnToTabletAndMobileCard from './Card';

function LearnToTabletAndMobile() {
  const { learnItems } = useSingleCourseData();

  return (
    <Component>
      {learnItems &&
        learnItems.map(({ title, description, image }, index: number) => (
          <LearnToTabletAndMobileCard
            key={index}
            title={title}
            description={description}
            image={image}
          />
        ))}
    </Component>
  );
}

export default LearnToTabletAndMobile;

const Component = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 24px;
`;
