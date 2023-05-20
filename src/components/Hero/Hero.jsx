import Slider from 'components/Slider/Slider';
import {
  HeroLayout,
  HeroContainer,
  Rotate,
  SocialList,
  SocialListItem,
  ItemLink,
  HeroText,
  SubTitle,
  HeroTitle,
  Text,
} from './Hero.styled';

export const Hero = () => {
  return (
    <HeroLayout>
      <HeroContainer>
        <Rotate>
          <SocialList>
            <SocialListItem>
              <ItemLink
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Instagram
              </ItemLink>
            </SocialListItem>
            <SocialListItem>
              <ItemLink
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Youtube
              </ItemLink>
            </SocialListItem>
          </SocialList>
        </Rotate>
        <div style={{ position: 'relative' }}>
          <HeroText>
            <SubTitle lang="en">A hair salon for men in Kyiv</SubTitle>
            <HeroTitle lang="en">BarberShop</HeroTitle>
            <Text>
              Мы эксперты в модных мужских стрижках. Работаем быстро, осторожно
              и со вкусом.
            </Text>
          </HeroText>
          <Slider />
        </div>
      </HeroContainer>
    </HeroLayout>
  );
};
