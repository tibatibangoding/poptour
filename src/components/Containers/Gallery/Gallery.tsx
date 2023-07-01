import { FC } from 'react';
import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';

const ContainerGallery: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <main className="py-20">
        <div className="max-w-full md:max-w-7xl mx-auto">
          {/* gallery start */}
          <div className="min-h-screen bg-white py-10">
            <div className="over container mx-auto w-full md:max-w-7xl px-10 lg:px-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 rounded md:border bg-white">
                {/* vertical */}
                <div className="border grid row-span-2 overflow-hidden">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="assets/img/bromo-sunset.jpg"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="assets/img/bromo.jpg"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden ">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="assets/img/bromo.jpg"
                    alt="BromoImage"
                  />
                </div>

                {/* vertical */}
                <div className="border overflow-hidden grid row-span-2 ">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="assets/img/bromo-sunset.jpg"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden ">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="assets/img/bromo.jpg"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden ">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="assets/img/bromo.jpg"
                    alt="BromoImage"
                  />
                </div>

                {/* vertical */}
                <div className="border overflow-hidden grid row-span-2">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="assets/img/bromo-sunset.jpg"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden ">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="assets/img/bromo.jpg"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden ">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="assets/img/bromo.jpg"
                    alt="BromoImage"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* gallery end */}
        </div>
      </main>
    </>
  );
};

export default ContainerGallery;
