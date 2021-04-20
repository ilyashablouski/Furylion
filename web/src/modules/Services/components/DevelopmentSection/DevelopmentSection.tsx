import React from 'react';
import styled, { css } from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import Picture from '@/components/Picture';
import useCurrentPage from '@/hooks/useCurrentPage';
import { DevelopmentSectionType } from '@/typings/model';
import Link from '@/components/Link';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';
import { media } from '@/utils/mixin';

function DevelopmentSection() {
  const page = useCurrentPage<DevelopmentSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper>
      <Inner>
        <ContentContainer>
          <Title>{pageFields.developmentTitle}</Title>

          <ItemsWrapper>
            <Items>
              {pageFields.developmentItems.length > 0
                ? pageFields.developmentItems.map((item, index) => {
                    return (
                      <Item key={index}>
                        <ImageContainer>
                          <Picture
                            mobileSmall={convertThumbnailToPictureImage(
                              item.image
                            )}
                          />
                        </ImageContainer>

                        <ItemTitle>{item.title}</ItemTitle>

                        <ItemText>{item.text}</ItemText>

                        <Logos>
                          <LogosWrapper>
                            {item.logos.map((logo, index) => {
                              return (
                                <Logo key={index}>
                                  <LogoLink to={logo.linkUrl ?? '#'}>
                                    <Picture
                                      mobileSmall={convertThumbnailToPictureImage(
                                        logo.image
                                      )}
                                    />
                                  </LogoLink>
                                </Logo>
                              );
                            })}
                          </LogosWrapper>
                        </Logos>
                      </Item>
                    );
                  })
                : null}
            </Items>
          </ItemsWrapper>
        </ContentContainer>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 100px 0 100px;
  background: ${colors.red};

  ${media.tabletSmall(css`
    padding: 70px 0 70px;
  `)}
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 1920px;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 64px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${colors.white};

  ${media.tabletSmallOnly(css`
    font-size: 56px;
  `)}

  ${media.mobile(css`
    font-size: 32px;
  `)}
`;

const ItemsWrapper = styled.div`
  margin-top: 35px;
  display: flex;

  ${media.tabletSmallOnly(css`
    margin-top: 40px;
  `)}

  ${media.mobile(css`
    margin-top: 30px; ;
  `)}
`;

const Items = styled.div`
  margin-left: -10px;
  margin-right: -10px;
  display: flex;
  flex-wrap: wrap;

  ${media.tabletSmallOnly(css`
    margin-top: -45px;
    justify-content: center;
  `)}

  ${media.mobile(css`
    margin-top: -50px;
    margin-left: 0;
    margin-right: 0;
    display: block;
  `)}
`;

const Item = styled.div`
  padding: 0 10px;
  flex: 1 1 33.33%;
  max-width: 33.33%;

  ${media.tabletSmallOnly(css`
    margin-top: 45px;
    flex: 1 1 50%;
    max-width: 50%;
  `)}

  ${media.mobile(css`
    margin-top: 50px;
    padding: 0;
    max-width: none;
  `)}
`;

const ImageContainer = styled.div`
  picture {
    width: 100%;
  }

  img {
    width: 100%;
    min-height: 219px;
    max-height: 219px;
    object-fit: cover;
    background: #3e3e3e;

    ${media.tabletSmallOnly(css`
      min-height: 185px;
      max-height: 185px;
    `)}

    ${media.mobile(css`
      min-height: 177px;
      max-height: 177px;
    `)}
  }
`;

const ItemTitle = styled.span`
  margin-top: 25px;
  display: block;
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.white};

  ${media.tabletSmall(css`
    margin-top: 20px;
  `)}
`;

const ItemText = styled.p`
  margin-top: 15px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};

  ${media.tabletSmall(css`
    margin-top: 10px;
    font-size: 12px;
  `)}
`;

const Logos = styled.div`
  margin-top: 25px;

  ${media.tabletSmall(css`
    margin-top: 20px;
    font-size: 12px;
  `)}
`;

const LogosWrapper = styled.div`
  margin-top: -15px;
  margin-left: -17.5px;
  margin-right: -17.5px;
  display: flex;
  flex-wrap: wrap;

  ${media.tabletSmall(css`
    justify-content: space-between;
  `)}
`;

const Logo = styled.div`
  margin-top: 15px;
  padding-left: 17.5px;
  padding-right: 17.5px;
  flex: 0 1 auto;
  display: flex;
  align-items: center;

  img {
    image-rendering: -webkit-optimize-contrast;
  }
`;

const LogoLink = styled(Link)`
  &:hover {
    img {
      opacity: 0.75;
    }
  }
`;

export default DevelopmentSection;
