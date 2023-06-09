import {
  HeaderLayout,
  HeaderContainer,
  Logo,
  NavList,
  ListLink,
  ListItem,
  PhoneNumber,
  HeaderButton,
} from './Header.styled';

import { LogoSvgComponent } from 'components/Logo/Logo';

export const Header = () => {
  return (
    <HeaderLayout>
      <HeaderContainer>
        <Logo href="">
          <LogoSvgComponent />
        </Logo>
        <nav>
          <NavList>
            <ListItem>
              <ListLink href="#about">О нас</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="#prices">Услуги и цены</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="#masters">Мастера</ListLink>
            </ListItem>
            <ListItem>
              <ListLink href="#contacts">Контакты</ListLink>
            </ListItem>
          </NavList>
        </nav>
        <PhoneNumber href="tel:+380441111111">+38 044 111 11 11</PhoneNumber>
        <HeaderButton type="button">онлайн-запись</HeaderButton>
      </HeaderContainer>
    </HeaderLayout>
  );
};
