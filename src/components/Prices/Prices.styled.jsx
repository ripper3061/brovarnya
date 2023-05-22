import styled from '@emotion/styled';
import Backk from '../img/prices-bg.png';

export const PricesLayout = styled.section`
  border-color: #090b13;
  background-image: url(${Backk}), linear-gradient(#111319, #111319);
  background-position: center;
  background-size: cover;
  padding-top: 100px;
  padding-bottom: 100px;

  max-width: 1280px;

  margin: 0 auto;
`;

export const PricesContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const PricesSubTitle = styled.p`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 11px;
  line-height: 1.36;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: rgba(157, 164, 189, 0.6);

  margin-bottom: 20px;

  ::before {
    content: '';
    height: 1px;
    width: 60px;
    background: currentColor;
    margin-right: 20px;
  }
`;

export const Title = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.17;
  letter-spacing: 0.05em;
  font-style: normal;
  color: #fff;

  margin-bottom: 44px;
`;

export const PricesLists = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;

  margin-bottom: 50px;
`;

export const PriceList = styled.li`
  padding: 30px 40px;
  flex-grow: 1;

  background: linear-gradient(180deg, #171a24 0%, rgba(23, 26, 36, 0.2) 100%);

  :last-child {
    background: linear-gradient(180deg, #090b13 0%, rgba(9, 11, 19, 0.2) 100%);
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 20px;
  :first-of-type {
    margin-top: 0px;
  }

  ::after {
    content: '';
    width: 100px;
    height: 1px;
    background-color: rgba(157, 164, 189, 0.12);
    flex-grow: 1;
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const P = styled.p`
  color: #9da4bd;

  :last-child {
    order: 1;
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
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
