import Slider from 'components/Slider/Slider';
import {
  HeroLayout,
  HeroContainer,
  Rotate,
  SocialList,
  SocialListItem,
  ItemLink,
  HeroText,
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
            <p lang="en" class="sub-title">
              A hair salon for men in Kyiv
            </p>
            <h1 lang="en" class="hero-title">
              BarberShop
            </h1>
            <p class="text">
              Мы эксперты в модных мужских стрижках. Работаем быстро, осторожно
              и со вкусом.
            </p>
          </HeroText>
          <Slider />
        </div>
      </HeroContainer>
    </HeroLayout>
  );
};
