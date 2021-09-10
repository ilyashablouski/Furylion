import React from 'react';
import styled from 'styled-components';

import HeroSection from '@/modules/Home/components/HeroSection';
import Facts from '@/modules/Courses/components/Facts';
import Steps from '@/modules/Courses/components/Steps';
import PopularQuestions from '@/modules/Courses/components/PopularQuestions';
import Projects from '@/modules/Courses/components/Projects';
import RecentEvents from '@/modules/Courses/components/RecentEvents';
import CoursesBlock from '@/modules/Courses/components/CoursesBlock';
import AboutUs from '@/modules/Courses/components/AboutUs';

function Courses() {
  return (
    <Component>
      <HeroSection />
      <AboutUs />
      <CoursesBlock />
      <Facts />
      <Steps />
      <PopularQuestions />
      <Projects />
      <RecentEvents />
    </Component>
  );
}

export default Courses;

const Component = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
