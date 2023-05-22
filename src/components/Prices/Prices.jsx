// import {
//   HeaderLayout,
//   HeaderContainer,
//   Logo,
//   NavList,
//   ListLink,
//   ListItem,
//   PhoneNumber,
//   HeaderButton,
// } from './Header.styled';

import {
  Item,
  List,
  PriceList,
  PricesContainer,
  PricesLayout,
  PricesLists,
  PricesSubTitle,
  Title,
  P,
  Button,
} from './Prices.styled';

// import { LogoSvgComponent } from 'components/Logo/Logo';

export const Prices = () => {
  return (
    <PricesLayout id="prices">
      <PricesContainer>
        <PricesSubTitle>
          Проведи время в компании лучших мастеров
        </PricesSubTitle>
        <Title>Услуги и цены</Title>
        <PricesLists>
          <PriceList>
            <List>
              <Item>
                <P>Мужская стрижка</P>
                <P>от 300 грн.</P>
              </Item>
              <Item>
                <P>Мужская стрижка</P>
                <P>от 200 грн.</P>
              </Item>
              <Item>
                <P>Стрижка усов</P>
                <P>от 200 грн.</P>
              </Item>
              <Item>
                <P>Бритье опасной бритвой</P>
                <P>от 200 грн.</P>
              </Item>
            </List>
          </PriceList>
          <PriceList>
            <List>
              <Item>
                <P>Cтрижка у стажера</P>
                <P>от 50 грн.</P>
              </Item>
              <Item>
                <P>Стрижка под насадку</P>
                <P>от 200 грн.</P>
              </Item>
              <Item>
                <P>Детская стрижка (до 12 лет)</P>
                <P>от 300 грн.</P>
              </Item>
              <Item>
                <P>Камуфлирование седины</P>
                <P>от 200 грн.</P>
              </Item>
            </List>
          </PriceList>
        </PricesLists>
        <Button type="button">онлайн-запись</Button>
      </PricesContainer>
    </PricesLayout>
  );
};
