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
        description={siteMetadata.description}
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
