import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import TripForm from './components/TripForm';

const ContainerCustomTrip: FC = () => {
  return (
    <>
      <PageSEO
        title="Kustom Perjalanan - POP Tour"
        description="Ingin menjalani pengalaman perjalanan yang unik dan sesuai dengan keinginan Anda? Temukan layanan Kustom Trip yang menghadirkan perjalanan yang didesain khusus untuk memenuhi impian wisata Anda di POP Tour."
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
