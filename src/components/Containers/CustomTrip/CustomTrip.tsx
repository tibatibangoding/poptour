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

      <main className="py-20">
        <section className="max-w-full mx-auto">
          {/* Carousel Start */}
          <div className="w-full h-max">
            <CarouselTrip />
          </div>

          <div className="w-full px-4 my-28">
            <div className="flex justify-center items-center">
              <TripForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerCustomTrip;
