import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import BannerPromotion from '@/components/Common/BannerPromotion';
import { siteMetadata } from '@/data/siteMetadata';
import Service from './components/Service';
import TourPlace from './components/TourPlace';
import TitleLine from './components/TitleLine';
import Superiority from './components/Superiority';

const ContainerHome: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description="Selamat datang di Beranda POP Tour, pintu gerbang menuju petualangan dan pengalaman wisata yang mengesankan. Di halaman Beranda kami, Anda akan menemukan beragam pilihan destinasi wisata yang menakjubkan, paket tur yang menarik, serta layanan rental mobil yang handal."
      />

      <main className="py-[89px]">
        <BannerPromotion />
        <Service />
        <TourPlace />
        <TitleLine />
        <Superiority />
      </main>
    </>
  );
};

export default ContainerHome;
