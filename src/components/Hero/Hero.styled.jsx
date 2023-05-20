import styled from '@emotion/styled';

export const HeroLayout = styled.div`
  width: 1170px;
  margin: 0 auto;
`;

export const HeroContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Rotate = styled.div`
  position: relative;
  width: 98px;
`;

export const SocialList = styled.ul`
  position: absolute;
  left: 50%;
  bottom: 0;
  display: flex;

  list-style: none;
  align-items: center;
  margin-bottom: 40px;

  transform: rotate(-90deg) translate(0%, -50%);
  transform-origin: top left;

  ::before {
    content: '';
    display: inline-block;
    height: 1px;
    width: 60px;
    background: #aaa;
    margin-right: 40px;
  }
`;

export const SocialListItem = styled.div`
  margin-left: 40px;

  :first-of-type {
    margin-left: 0px;
  }
`;

export const ItemLink = styled.a`
  color: #aaa;
  font-weight: 600;
  font-size: 11px;
  line-height: 1.36;
  text-decoration: none;

  padding: 20px 0px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #ff6c00;
  }
`;

export const HeroText = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 272px 0 206px 96px;
  color: #fff;

  flex-grow: 1;
`;
