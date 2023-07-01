import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import BannerPromotion from '@/components/Common/BannerPromotion';
import TripForm from './components/TripForm';

const ContainerCustomTrip: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <main className="py-[89px]">
        <BannerPromotion />

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
