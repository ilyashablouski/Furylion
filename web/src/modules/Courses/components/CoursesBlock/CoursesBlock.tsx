import React from 'react';

import { useCoursesData } from '@/modules/Courses/Courses.hooks';

import CourseCard from './components/CourseCard';
import { Component, Header, Title, Cards } from './CoursesBlock.styles';

function CoursesBlock() {
  const { coursesId, coursesTitle, coursesItems } = useCoursesData();

  return (
    <Component id={coursesId ?? ''}>
      <Header>
        <Title>{coursesTitle}</Title>
      </Header>
      <Cards>
        {coursesItems.map((course, index) => (
          <CourseCard {...course} key={index} />
        ))}
      </Cards>
    </Component>
  );
}

export default CoursesBlock;
