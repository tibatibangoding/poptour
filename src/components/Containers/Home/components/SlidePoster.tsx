import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { posterImg } from '@/data/posterImg';

const SlidePoster: FC = () => {
  return (
    <div>
      <Swiper
        navigation={false}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        {posterImg.map((item, index) => (
          <SwiperSlide key={index}>
            <section className=" w-full ">
              <img src={item.img} alt={item.title} />
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidePoster;
