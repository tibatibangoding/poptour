import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import CarCard from './components/CarCard';
import CarForm from './components/CarForm';

const ContainerCarRental: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <main className="py-24">
        <section className="max-w-7xl mx-auto">
          {/* HEADING TEXT */}
          <div className="w-full px-4">
            <div className="flex justify-center items-center mt-5 mb-10 md:mt-10 md:mb-20">
              <h1 className="font-bold text-3xl text-center capitalize">
                Pilihan Armada Yang Kami Sediakan
              </h1>
            </div>
          </div>

          {/* GRID CARS AVAILABLE */}
          <div className="w-full px-4 mt-5 mb-10 md:mt-10 md:mb-20">
            <CarCard />
          </div>

          {/* FORM RENTAL */}
          <div className="w-full px-4 ">
            <CarForm />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerCarRental;
