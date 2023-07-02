import { FC } from 'react';

import RecomendedCard from '@/components/Common/RecomendedCard';

const TourPlace: FC = () => {
  return (
    <section className="mx-4 md:mx-10 lg:mx-40 py-5 md:py-10">
      <h1 className="font-primary font-semibold text-2xl md:text-3xl">
        Rekomendasi Paket Wisata
      </h1>

      <RecomendedCard />
    </section>
  );
};

export default TourPlace;
