import { FC, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const CarouselTrip: FC = () => {
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: number) => {
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide className="px-1 py-1">
          <div className="max-w-full mx-auto">
            <img
              className="w-full h-[600px] sm:h-[550px] object-cover object-center"
              src="/assets/img/template-carousel.jpg"
              loading="lazy"
              alt="SEA"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-full mx-auto">
            <img
              className="w-full h-[600px] sm:h-[550px] object-cover object-center"
              src="/assets/img/carousel-1.png"
              loading="lazy"
              alt="SEA"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-full mx-auto">
            <img
              className="w-full h-[600px] sm:h-[550px] object-cover object-center"
              src="/assets/img/carousel-template.jpg"
              loading="lazy"
              alt="SEA"
            />
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default CarouselTrip;
