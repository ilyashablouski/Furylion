import React from 'react';
import styled from 'styled-components';

import { convertThumbnailToPictureImage } from '@tager/web-modules';

import Picture from '@/components/Picture';
import useCurrentPage from '@/hooks/useCurrentPage';
import { DevelopmentSectionType } from '@/typings/model';
import Link from '@/components/Link';
import { colors } from '@/constants/theme';
import ContentContainer from '@/components/ContentContainer';

function DevelopmentSection() {
  const page = useCurrentPage<DevelopmentSectionType>();
  if (!page) return null;

  const pageFields = page.templateFields;

  return (
    <Wrapper>
      <Inner>
        <ContentContainer>
          <Title>{pageFields.developmentTitle}</Title>

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
        </ContentContainer>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 100px 0 100px;
  background: ${colors.red};
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
`;

const Items = styled.div`
  margin-top: 35px;
  margin-left: -10px;
  margin-right: -10px;
  display: flex;
`;

const Item = styled.div`
  padding: 0 10px;
  flex: 1 1 33.33%;
  max-width: 33.33%;
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
  }
`;

const ItemTitle = styled.span`
  margin-top: 25px;
  display: block;
  font-weight: 900;
  font-size: 32px;
  line-height: 130%;
  color: ${colors.white};
`;

const ItemText = styled.p`
  margin-top: 15px;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
  color: ${colors.white};
`;

const Logos = styled.div`
  margin-top: 25px;
`;

const LogosWrapper = styled.div`
  margin-top: -15px;
  margin-left: -17.5px;
  margin-right: -17.5px;
  display: flex;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  margin-top: 15px;
  margin-left: 17.5px;
  margin-right: 17.5px;
`;

const LogoLink = styled(Link)`
  &:hover {
    img {
      opacity: 0.75;
    }
  }
`;

export default DevelopmentSection;
