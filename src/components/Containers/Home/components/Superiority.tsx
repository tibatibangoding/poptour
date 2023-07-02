import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import { primacy } from '@/data/primacy';

const Superiority: FC = () => {
  return (
    <section>
      <div className="mx-4 md:mx-10 lg:mx-40 py-5 md:py-10">
        <h1 className="font-primary font-semibold text-2xl md:text-3xl">
          Mengapa Memilih Kami?
        </h1>

        <div className="mt-5 flex items-center justify-center">
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
                  <div className="w-full h-full relative rounded-lg">
                    <img
                      src="assets/img/carousel-template.jpg"
                      alt=""
                      loading="lazy"
                      className="object-cover w-full h-full rounded-lg"
                    />
                    <div className="absolute top-0 left-0 w-full h-full md:h-full rounded-lg bg-black opacity-50" />
                    <div className="absolute top-0 left-0 w-full h-full md:h-full flex flex-col justify-center items-center gap-4 px-6">
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
    </section>
  );
};

export default Superiority;
