import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';
import { posterImg } from '@/data/posterImg';

const SlidePoster = () => {
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
            <section className=" w-full h-[200px] md:h-[300px] lg:h-[400px] ">
              <div className="w-full h-full bg-blue-400">
                <img src={item.img} alt={item.title} className='object-cover  object-left w-full h-[200px] md:h-[300px] lg:h-[400px]' />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidePoster;
