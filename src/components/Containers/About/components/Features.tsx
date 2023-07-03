import { FC } from 'react';

import RecomendedCard from '@/components/Common/RecomendedCard';

const Features: FC = () => {
  return (
    <>
      <section>
        <h2 className="font-primary font-semibold text-center text-2xl md:text-3xl">
          Rekomendasi Paket Liburan
        </h2>

        <RecomendedCard />
      </section>
    </>
  );
};

export default Features;
