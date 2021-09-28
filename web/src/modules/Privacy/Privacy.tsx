import React from 'react';
import styled from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import useCurrentPage from '@/hooks/useCurrentPage';
import { colors } from '@/constants/theme';

function Privacy() {
  const page = useCurrentPage();
  return (
    <Component>
      <ContentContainer>
        <Content dangerouslySetInnerHTML={{ __html: page.body ?? '' }} />
      </ContentContainer>
    </Component>
  );
}

export default Privacy;

const Component = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin-top: 180px;
  color: ${colors.white};

  p {
    font-size: 20px;
    margin-top: 20px;
    font-weight: 500;
    line-height: 25px;
    text-align: justify;

    i {
      color: ${colors.white08};
    }
  }

  h2 {
    font-size: 40px;
    font-weight: 900;
    margin-top: 25px;
    text-decoration: underline ${colors.red};
    text-underline-offset: 8px;
    text-decoration-thickness: 3px;
    color: ${colors.white};
    text-align: center;
    line-height: 56px;
    text-transform: uppercase;
  }

  h3 {
    font-size: 25px;
    font-weight: 700;
    margin-top: 20px;
    text-align: center;
    color: ${colors.gray};
  }

  ul {
    margin-top: 20px;

    li {
      font-size: 17px;
      line-height: 25px;
      text-align: justify;

      &:not(:first-child) {
        margin-top: 10px;
      }

      &:before {
        content: '—';
        margin-right: 5px;
      }

      strong {
        text-decoration: underline ${colors.red};
        text-underline-offset: 2px;
        text-decoration-thickness: 3px;
      }

      a {
        border-bottom: 2px solid transparent;
        font-weight: 700;

        &:hover {
          border-color: ${colors.red};
        }
      }
    }
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 70px 0;
  }
`;
