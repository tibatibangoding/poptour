import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const CarouselTrip: FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="px-1 py-1">
          <div className="max-w-full mx-auto">
            <img
              className="w-full h-[250px] md:h-[350px] lg:h-[480px] xl:h-[550px] object-cover object-center"
              src="/assets/img/template-carousel.jpg"
              loading="lazy"
              alt="Promotion Banner"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-full mx-auto">
            <img
              className="w-full h-[250px] md:h-[350px] lg:h-[480px] xl:h-[550px] object-cover object-center"
              src="/assets/img/carousel-1.png"
              loading="lazy"
              alt="Promotion Banner"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-full mx-auto">
            <img
              className="w-full h-[250px] md:h-[350px] lg:h-[480px] xl:h-[550px] object-cover object-center"
              src="/assets/img/carousel-template.jpg"
              loading="lazy"
              alt="Promotion Banner"
            />
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end"></div>
      </Swiper>
    </>
  );
};

export default CarouselTrip;
