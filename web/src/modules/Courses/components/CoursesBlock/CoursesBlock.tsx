import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
  const coursesCardsRef = useRef<HTMLDivElement>(null);
  const isComingSoon =
    coursesItems.length &&
    coursesItems[coursesItems.length - 1].information.length;

  useEffect(() => {
    let tw: gsap.core.Tween;
    const delayedCall = gsap.delayedCall(0, () => {
      if (!coursesCardsRef.current) return null;

      let marginTop: gsap.TweenValue | undefined;

      ScrollTrigger.matchMedia({
        '(min-width: 1500px)': function () {
          marginTop = '14%';
        },
        '(max-width: 1500px)': function () {
          marginTop = '19%';
        },
        '(max-width: 1259.9px)': function () {
          marginTop = '21%';
        },

        '(max-width: 768px)': function () {
          marginTop = '75px';
        },
      });

      tw = gsap.to(coursesCardsRef.current, {
        marginTop: marginTop,
        scrollTrigger: {
          start: 'center 120%',
          end: '50% 50%',
          trigger: coursesCardsRef.current,
          scrub: true,
        },
      });
    });

    return () => {
      delayedCall.kill();
      tw?.kill();
    };
  }, []);

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

      <Cards
        singleCourse={singleCourse}
        ref={!singleCourse ? coursesCardsRef : null}
        comingSoon={!isComingSoon}
      >
        {coursesItems &&
          coursesItems.map((course, index) => (
            <CourseCard {...course} key={index} />
          ))}
      </Cards>
    </Component>
  );
}

export default CoursesBlock;
