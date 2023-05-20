import styled from '@emotion/styled';

export const AboutLayout = styled.section`
  display: flex;
  padding-top: 139px;
  padding-bottom: 121px;
  padding-left: 15px;
  padding-right: 15px;
  width: 1170px;
  margin: 0 auto;
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
`;

export const AboutPhoto = styled.ul`
  display: flex;
  list-style: none;
`;

export const PhotoItem = styled.li`
  margin-left: 30px;

  :first-of-type {
    margin-left: 0px;
  }
`;

export const AboutText = styled.div`
  margin-left: 64px;
`;

export const SubTitle = styled.p`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 11px;
  line-height: 1.36;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #303030;

  margin-bottom: 20px;

  ::before {
    content: '';
    height: 1px;
    width: 60px;
    background: currentColor;
    margin-right: 20px;
  }
`;

export const AboutTitle = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.17;
  letter-spacing: 0.05em;
  font-style: normal;
  color: #303030;

  margin-bottom: 20px;
`;

export const AboutTitleText = styled.p`
  margin-bottom: 20px;
`;

export const AboutTitleSubText = styled.p`
  font-size: 14px;
  line-height: 1.86;

  margin-bottom: 40px;
`;

export const Button = styled.button`
  margin-left: 40px;
  color: #303030;
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
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #ff6c00;
  }
`;
