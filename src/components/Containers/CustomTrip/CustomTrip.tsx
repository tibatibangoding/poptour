import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import TripForm from './components/TripForm';

const ContainerCustomTrip: FC = () => {
  return (
    <>
      <PageSEO
        title="Kustom Perjalanan - POP Tour"
        description={siteMetadata.description}
      />

      <main className="py-10 bg-[#f6f6f6]">
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
