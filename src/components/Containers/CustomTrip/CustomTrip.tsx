import { FC } from 'react';
import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';

import CarouselTrip from './components/Carousel/CarouselTrip';
import TripForm from './components/TripForm';

const ContainerCustomTrip: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <main className="py-16 md:py-20">
        <section className="max-w-full mx-auto">
          <div className="w-full h-max">
            <CarouselTrip />
          </div>
        </section>

        <section className="max-w-6xl mx-auto">
          <div className="w-full px-4 mt-10 md:mt-24 md:mb-8">
            <TripForm />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerCustomTrip;
