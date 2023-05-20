import styled from '@emotion/styled';

export const HeaderLayout = styled.header`
  position: relative;
  z-index: 11;

  width: 1170px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 15px;
  padding-right: 15px;

  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
`;

export const Logo = styled.a`
  margin-left: 8px;
`;

export const LogoIcon = styled.svg`
  fill: #090b13;
`;
export const NavList = styled.ul`
  display: flex;
  margin-left: 70px;

  list-style: none;
`;

export const ListLink = styled.a`
  display: block;

  padding-top: 32px;
  padding-bottom: 32px;

  color: #aaa;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.1em;
  text-decoration: none;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: #ff6c00;
  }
`;

export const ListItem = styled.li`
  margin-left: 40px;

  :first-of-type {
    margin-left: 0px;
  }
`;

export const PhoneNumber = styled.a`
  display: block;

  margin-left: auto;
  padding-top: 12px;
  padding-bottom: 12px;

  color: #aaa;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.1em;
  text-decoration: none;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #ff6c00;
  }
`;

export const HeaderButton = styled.button`
  margin-left: 40px;
  color: #aaa;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.09em;
  cursor: pointer;
  text-transform: uppercase;

  min-width: 160px;
  height: 40px;

  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #ff6c00;
  box-sizing: border-box;
  border-radius: 25px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #ff6c00;
  }
`;
