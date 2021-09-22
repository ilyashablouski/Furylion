import React from 'react';

import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import ContentContainer from '@/components/ContentContainer';
import { SingleCourseProps } from '@/modules/Courses/pages/SingleCourse/SingleCourse.types';

import CourseCard from './components/CourseCard';
import {
  Component,
  Header,
  Title,
  Cards,
  SingleCourseTitle,
} from './CoursesBlock.styles';

function CoursesBlock({ singleCourse }: SingleCourseProps) {
  const { coursesId, coursesTitle, coursesItems } = useCoursesData();

  return (
    <Component id={coursesId ?? ''}>
      {singleCourse ? (
        <ContentContainer>
          <SingleCourseTitle>{coursesTitle}</SingleCourseTitle>
        </ContentContainer>
      ) : (
        <Header>
          <Title>{coursesTitle}</Title>
        </Header>
      )}

      <Cards singleCourse={singleCourse}>
        {coursesItems &&
          coursesItems.map((course, index) => (
            <CourseCard {...course} key={index} />
          ))}
      </Cards>
    </Component>
  );
}

export default CoursesBlock;
