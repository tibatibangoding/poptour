import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import SlidePoster from './components/SlidePoster';
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

      <main className="py-20">
        <SlidePoster />
        <Service />
        <TourPlace />
        <TitleLine />
        <Superiority />
      </main>
    </>
  );
};

export default ContainerHome;
