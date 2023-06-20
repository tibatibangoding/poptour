import React from 'react';
import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import Features from './components/Features';

const ContainerAbout = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <main className="py-20">
        <section className="max-w-7xl mx-auto">
          <div className="w-full px-4">
            <div className=" justify-center items-center mt-5 mb-5 md:mt-10 md:mb-10">
              <h1 className="font-bold text-2xl md:text-3xl text-center capitalize">
                Tentang Kami
              </h1>

              <img className="w-20 h-20 mx-auto my-10" src="" alt="Logo" />
              <p className="max-w-xl pt-5  text-center mx-auto">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque dolore quos incidunt non inventore! Alias officiis
                temporibus nisi ducimus rem praesentium sequi corporis
                necessitatibus veritatis, inventore quisquam illo dignissimos
                culpa Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Beatae, ex. Similique quo fugiat inventore eligendi veniam
                sapiente explicabo sequi consequatur reprehenderit, blanditiis
                repellendus labore consectetur amet! Ullam eveniet ratione ex?
              </p>
            </div>
            <img
              className="w-4/5 h-2/5 object-cover object-center mx-auto mb-10 rounded-xl"
              src="/assets/img/Bromo 1.JPG"
              loading="lazy"
              alt="Sunset in the mountains"
            />
            <Features />

            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
                  <div>
                    <h2 className="text-xl font-bold text-emerald-500 md:text-3xl">
                      Yukk Jalan-Jalan ke Bromo
                    </h2>
                  </div>

                  <a
                    href="#"
                    className="inline-block rounded-lg bg-emerald-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-emerald-600 focus-visible:ring active:bg-emerald-700 md:text-base"
                  >
                    Start now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContainerAbout;
