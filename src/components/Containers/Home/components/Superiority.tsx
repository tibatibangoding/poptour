import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import { primacy } from '@/data/primacy';

const Superiority = () => {
  return (
    <div>
      <div className="mx-10 md:mx-24 lg:mx-40 py-20 ">
        <h1 className="text-xl md:text-4xl font-semibold ">
          MENGAPA MEMILIH POP TOUR
        </h1>
        <div className="mt-10  flex items-center justify-center ">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            {primacy.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full  h-96 pb-10 ">
                  <div className="w-full h-full  relative rounded-lg">
                    <img
                      src="assets/img/carousel-template.jpg"
                      alt=""
                      className="object-cover w-full h-full rounded-lg"
                    />
                    <div className="absolute top-0 left-0  w-full h-full md:h-full rounded-lg  bg-black opacity-50" />
                    <div className="absolute top-0 left-0  w-full h-full md:h-full  flex flex-col justify-center items-center gap-4 px-6">
                      <h1 className="text-white text-4xl font-semibold">
                        #{item.no}
                      </h1>
                      <h2 className="text-white text-xl font-semibold">
                        {item.title}
                      </h2>
                      <p className="text-white text-center">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Superiority;
