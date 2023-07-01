import { FC } from 'react';
import Link from 'next/link';

import { siteMetadata } from '@/data/siteMetadata';
import { PageSEO } from '@/components/Common/SEO';

const ContainerNotFound: FC = () => {
  return (
    <>
      <PageSEO
        title="Halaman Tidak Ditemukan - POP Tour"
        description={siteMetadata.description}
      />

      <main className="py-20">
        <section className="py-24">
          <div className="container mx-auto">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap-reverse items-center justify-center">
                <div className="w-full px-4 lg:w-1/2">
                  <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
                    <p className="text-primary text-sm md:text-base font-semibold uppercase mb-4">
                      Error 404
                    </p>
                    <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
                      Halaman Tidak Ditemukan
                    </h1>

                    <p className="text-gray-500 md:text-lg text-center sm:text-left mb-8">
                      Mohon maaf, halaman yang Anda cari tidak dapat kami
                      temukan.
                    </p>

                    <Link href="/" legacyBehavior>
                      <a className="inline-block bg-primary hover:bg-secondary text-white hover:text-primary active:bg-secondary/70 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition ease-in-out duration-200 px-5 py-3">
                        Kembali ke Beranda
                      </a>
                    </Link>
                  </div>
                </div>

                <div className="w-full px-4 lg:w-1/2">
                  <div className="mb-10 lg:mb-0">
                    <img
                      src="/assets/svg/hero-404.svg"
                      loading="lazy"
                      alt="404 Not Found"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerNotFound;
