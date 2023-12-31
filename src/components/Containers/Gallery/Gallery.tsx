import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';

const ContainerGallery: FC = () => {
  return (
    <>
      <PageSEO
        title="Galeri - POP Tour"
        description="Nikmati keindahan destinasi wisata paling menakjubkan melalui Galeri POP Tour. Dalam halaman Galeri kami, Anda akan menemukan koleksi foto-foto yang memukau, memperlihatkan panorama alam yang menawan, budaya yang kaya, dan momen-momen berharga dari perjalanan pelanggan kami."
      />

      <main className="py-20">
        <div className="max-w-full md:max-w-7xl mx-auto">
          {/* gallery start */}
          <div className="min-h-screen bg-white py-10">
            <div className="over container mx-auto w-full md:max-w-7xl px-4 lg:px-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 rounded md:border bg-white">
                {/* vertical */}
                <div className="border grid row-span-2 overflow-hidden">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="/assets/img/gallery/potrait-1.jpg"
                    loading="lazy"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="/assets/img/gallery/bromo_1.jpg"
                    loading="lazy"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="/assets/img/gallery/bromo_2.jpg"
                    loading="lazy"
                    alt="BromoImage"
                  />
                </div>

                {/* vertical */}
                <div className="border overflow-hidden grid row-span-2">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="/assets/img/gallery/potrait-2.jpg"
                    loading="lazy"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="/assets/img/gallery/bromo_5.jpg"
                    loading="lazy"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="/assets/img/gallery/bromo_3.jpg"
                    loading="lazy"
                    alt="BromoImage"
                  />
                </div>

                {/* vertical */}
                <div className="border overflow-hidden grid row-span-2">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="/assets/img/gallery/potrait-3.jpg"
                    loading="lazy"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="/assets/img/gallery/tumpaksewu_1.jpg"
                    loading="lazy"
                    alt="BromoImage"
                  />
                </div>

                <div className="border overflow-hidden">
                  <img
                    className="w-full h-full bg-cover bg-center hover:scale-105 inset-0 transition duration-200"
                    src="/assets/img/gallery/bromo_4.jpg"
                    loading="lazy"
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
