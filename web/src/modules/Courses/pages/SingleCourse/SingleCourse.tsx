import React from 'react';
import styled from 'styled-components';

import CoursesBlock from '@/modules/Courses/components/CoursesBlock';
import Facts from '@/modules/Courses/components/Facts';
import Steps from '@/modules/Courses/components/Steps';
import PopularQuestions from '@/modules/Courses/components/PopularQuestions';
import StudentWork from '@/modules/Courses/components/StudentWork';
import Projects from '@/modules/Courses/components/Projects';
import Hero from '@/modules/Courses/pages/SingleCourse/components/Hero';

import LearnTo from './components/LearnTo';
import CourseAudience from './components/CourseAudience';
import TargetCourse from './components/TargetCourse';
import AfterCompleteCourse from './components/AfterCompleteCourse';

function SingleCourse() {
  return (
    <Component>
      <Hero />
      <TargetCourse />
      <CourseAudience />
      <LearnTo />
      <StudentWork />
      <Steps singleCourse />
      <Facts />
      <Projects />
      <AfterCompleteCourse />
      <PopularQuestions />
      <CoursesBlock singleCourse />
    </Component>
  );
}

export default SingleCourse;

const Component = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
