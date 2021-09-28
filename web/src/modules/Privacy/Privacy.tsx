import React from 'react';
import styled, { css } from 'styled-components';

import ContentContainer from '@/components/ContentContainer';
import useCurrentPage from '@/hooks/useCurrentPage';
import { colors } from '@/constants/theme';
import { media } from '@/utils/mixin';

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

  ${media.mobile(css`
    margin-top: 100px;
  `)}

  p {
    font-size: 20px;
    margin-top: 20px;
    font-weight: 500;
    line-height: 25px;
    text-align: justify;

    i {
      color: ${colors.white08};
    }

    ${media.mobile(css`
      font-size: 17px;
    `)}
  }

  h2 {
    font-size: 40px;
    font-weight: 900;
    margin-top: 25px;
    color: ${colors.white};
    text-align: center;
    line-height: 56px;
    text-transform: uppercase;

    ${media.mobile(css`
      font-size: 31px;
      text-align: left;
    `)}
  }

  h3 {
    font-size: 25px;
    font-weight: 700;
    margin-top: 20px;
    line-height: 30px;
    text-align: center;
    color: ${colors.gray};

    ${media.mobile(css`
      font-size: 22px;
      text-align: left;
    `)}
  }

  ul {
    margin-top: 20px;

    li {
      font-size: 17px;
      line-height: 25px;
      word-wrap: break-word;

      &:not(:first-child) {
        margin-top: 10px;
      }

      &:before {
        content: '—';
        margin-right: 5px;
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
