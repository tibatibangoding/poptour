import { FC, useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';

// import 'swiper/css';
// import 'swiper/css/pagination';

import { primacy } from '@/data/primacy';

const Superiority: FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:600px)');
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = (e: {
      matches: boolean | ((prevState: boolean) => boolean);
    }) => {
      setIsSmallScreen(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);
  return (
    <section>
      {/* <div className="mx-4 md:mx-10 lg:mx-40 py-5 md:py-10">
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
      </div> */}

      <div className="mx-4 md:mx-10 lg:mx-40 py-5 md:py-10">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Mengapa Memilih Kami?
            </h2>
          </div>

          <div className="grid gap-8 grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            {primacy.map((a, i) => (
              <div className="col-span-3 md:col-span-1" key={i}>
                <div className="flex items-center md:items-start gap-4 md:gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                    <img src={a.icon} alt="Icons" className="py-3 px-3" />
                  </div>

                  <div>
                    <h3 className="mb-2 py-3 md:py-0 text-lg font-semibold md:text-xl">
                      {a.title}
                    </h3>
                    {!isSmallScreen && (
                      <p className="mb-2 text-gray-500">{a.desc}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Superiority;
