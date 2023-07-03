import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import CarCard from './components/CarCard';
import CarForm from './components/CarForm';

const ContainerCarRental: FC = () => {
  return (
    <>
      <PageSEO
        title="Rental Mobil - POP Tour"
        description={siteMetadata.description}
      />

      <main className="py-24">
        <section className="max-w-7xl mx-auto">
          {/* HEADING TEXT */}
          <div className="w-full px-4">
            <div className="flex flex-col justify-center items-center mt-5 mb-10 md:mt-10 md:mb-14">
              <p className="font-primary font-semibold text-md lg:text-lg text-primary uppercase mb-2">
                Rental Mobil
              </p>

              <div className="">
                <h1 className="font-primary font-semibold text-xl md:text-3xl text-center capitalize">
                  Butuh Kendaraan Untuk Perjalanan Anda?
                </h1>

                <h3 className="font-primary font-medium text-lg md:text-xl text-center text-gray-500 capitalize">
                  Kami punya banyak pilihan!
                </h3>
              </div>
            </div>
          </div>

          {/* GRID CARS AVAILABLE */}
          <div className="w-full px-4 mt-5 mb-10 md:mt-10 md:mb-20">
            <CarCard />
            <div id="form-rental" className="py-5"></div>
          </div>

          {/* FORM RENTAL */}
          <div className="w-full px-4">
            <CarForm />
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerCarRental;
