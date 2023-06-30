import { FC, useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useAxios } from '@/hooks/useAxios';
import { BannerPromotion } from '@/interfaces/bannerPromotion';

const SlidePoster: FC = () => {
  const [bannerPromotion, setBannerPromotion] = useState<BannerPromotion[]>();

  const axios = useAxios();

  const getData = useCallback(async () => {
    const { data, status } = await axios.get('banner-promotion');

    if (status === 200) {
      setBannerPromotion(data.banner);
    }
  }, [axios]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
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
      {bannerPromotion?.map((item: BannerPromotion, index: number) => (
        <SwiperSlide key={index}>
          <section className="w-full h-[200px] md:h-[300px] lg:h-[400px]">
            <div className="w-full h-full">
              <img
                src={item.img_src}
                alt={item.title}
                loading="lazy"
                className="object-cover object-left w-full h-[200px] md:h-[300px] lg:h-[400px]"
              />
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlidePoster;
