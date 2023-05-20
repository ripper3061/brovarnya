import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import hero from '../img/hero.jpg';

import { Autoplay, Pagination } from 'swiper';

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={hero} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
