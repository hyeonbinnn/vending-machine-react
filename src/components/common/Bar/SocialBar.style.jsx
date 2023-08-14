import styled, { css } from 'styled-components';
import map_l from '../../../assets/map_l.jpg';
import map_s from '../../../assets/map_s.jpg';
import insta from '../../../assets/insta.svg';
import facebook from '../../../assets/facebook.svg';
import youtube from '../../../assets/youtube.svg';
import blog from '../../../assets/blog.svg';

export const Footer = styled.footer``;

export const FooterBg = styled.div`
  position: relative;
  height: 340px;
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    z-index: 1;
  }
  background: url(${map_l}) center/cover no-repeat;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    height: 240px;
    background: url(${map_s}) center/cover no-repeat;
  }
`;

export const FooterBox = styled.div`
  max-width: 1280px;
  padding: 22px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const H2 = styled.h2`
  width: 150px;
`;

export const SocialLink = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 90px;

  li {
  }

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    margin-top: 30px;
  }
`;

const aSocial = css`
  display: inline-block;
  width: 42px;
  height: 42px;
  background-color: #d97652;
  border-radius: 50%;

  @media screen and (min-width: 375px) and (max-width: 1000px) {
    width: 33px;
    height: 33px;
  }
`;

export const BaseLink = styled.a`
  ${aSocial}
`;

export const InstaLink = styled(BaseLink)`
  background: url(${insta}) #d97652 center no-repeat;
`;

export const YoutubeLink = styled(BaseLink)`
  background: url(${youtube}) #d97652 center no-repeat;
`;
export const FacebookLink = styled(BaseLink)`
  background: url(${facebook}) #d97652 center no-repeat;
`;
export const BlogLink = styled(BaseLink)`
  background: url(${blog}) #d97652 center no-repeat;
`;
