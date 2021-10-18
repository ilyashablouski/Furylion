import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import { colors } from '@/constants/theme';
import { useCoursesData } from '@/modules/Courses/Courses.hooks';
import { media } from '@/utils/mixin';
import ProjectsCard from '@/modules/Courses/components/Projects/Card';

function Projects() {
  const { projectsId, projectsTitle, projectsImages } = useCoursesData();

  return (
    <Component id={projectsId ?? ''}>
      <ContentContainer>
        <Title>{projectsTitle}</Title>
        <Cards>
          {projectsImages.map(
            ({ url, url_2x, url_webp, url_webp_2x }, index: number) => (
              <ProjectsCard
                url={url}
                url_2x={url_2x}
                url_webp={url_webp}
                url_webp_2x={url_webp_2x}
                key={index}
              />
            )
          )}
        </Cards>
      </ContentContainer>
    </Component>
  );
}

export default Projects;

const Component = styled.section`
  padding: 80px 0;
  background: ${colors.white};
`;

const Title = styled.p`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-align: left;
  text-transform: uppercase;
  color: ${colors.black};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 36px;

  ${media.tablet(css`
    flex-direction: column;
    margin-top: 56px;
  `)}
`;
