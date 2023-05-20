import {
  AboutLayout,
  AboutContainer,
  AboutPhoto,
  PhotoItem,
  AboutText,
  SubTitle,
  AboutTitle,
  AboutTitleText,
  AboutTitleSubText,
  Button,
} from './AboutUs.styled';
import aboutImg1 from '../img/about1.jpg';
import aboutImg2 from '../img/about2.jpg';

export const AboutUs = () => {
  return (
    <AboutLayout id="about">
      <AboutContainer>
        <AboutPhoto>
          <PhotoItem>
            <img src={aboutImg1} width="270px" alt="стрижка бороды" />
          </PhotoItem>
          <PhotoItem>
            <img src={aboutImg2} width="270px" alt="стрижка головы" />
          </PhotoItem>
        </AboutPhoto>
        <AboutText>
          <SubTitle>О нас</SubTitle>
          <AboutTitle>Лучший Барбершоп твоего города</AboutTitle>
          <AboutTitleText>
            Если ты хочешь добавить в свой образ больше уверенности – тебе точно
            к нам.
          </AboutTitleText>
          <AboutTitleSubText>
            Мы команда, которая никогда не останавливается на достигнутом и
            жаждет перемен. И когда ты попадешь в руки нашего мастера, то уже
            никогда не сможешь быть прежним. Мы команда, которая всегда с
            клиентами "на одной волне". Поэтому, мы всегда готовы
            усовершенствовать каждого, кто к нам приходит!
          </AboutTitleSubText>
          <Button>онлайн-запись</Button>
        </AboutText>
      </AboutContainer>
    </AboutLayout>
  );
};
