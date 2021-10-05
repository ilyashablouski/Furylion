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
  justify-content: space-between;
  margin-top: 56px;

  ${media.tablet(css`
    flex-direction: column;
  `)}

  & > div:nth-child(1) > div picture img {
    max-width: 206px;
  }

  & > div:nth-child(2) > div picture img {
    max-width: 132px;
  }

  & > div:nth-child(3) > div picture img {
    min-width: 410px;

    ${media.mobile(css`
      min-width: initial;
      max-width: 360px;
    `)}
  }

  & > div:nth-child(4) > div picture img {
    max-width: 162px;
  }

  & > div:nth-child(5) > div picture img {
    max-width: 184px;
  }

  & > div:not(:first-child) {
    ${media.tablet(css`
      margin-top: 50px;
    `)}
  }
`;
