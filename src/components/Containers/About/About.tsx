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
            <div className=" justify-center items-center mt-5 mb-5 md:mt-10 md:mb-10 ">
              <h1 className="font-bold text-2xl md:text-3xl text-center capitalize">
                Tentang Kami
              </h1>

              <img
                className="w-20 h-20 mx-auto my-10"
                src="/assets/img/logo/POPTour_4.png"
                alt="Logo"
              />
              <h2 className="font-medium text-lg">
                Selamat datang di Pop Tour,
              </h2>

              <p className="w-full pt-5   mx-auto  ">
                sahabat wisata dan perjalanan Anda. Pop Tour berpengalaman
                dalam perencanaa perjalanan wisata ke berbagai destinasi di
                Indonesia. Di Pop Tour, Kami membantu anda untuk mengeksplor
                dan menjelajahi budaya baru, bersantai di pantai, menikmati
                keindahan gunung atau memulai petualangan yang belum pernah anda
                rasakan sebelumnya. Kami bangga dengan perhatian yang kami
                berikan pada detail dan layanan untuk menjamin bahwa setiap
                perjalanan Anda akan menjadi menyenangkan dan berjalan sesuai
                dengan keinginan.
              </p>
              <br />
              <p>Adapun pelayanan yang kami tawarkan adalah:</p>
              <br />
              <ul className="list-disc ml-10 sm:ml-32 ">
                <li>Paket Wisata / Study Banding</li>
                <li>
                  Paket Meeting ( MICE ) / Gathering / Kunjungan Kerja /
                  Kunjungan Perusahaan
                </li>
                <li>
                  Paket Outbound, Team Building, Adventure , Fun Games & Fun Off
                  Road
                </li>
                <li>Reservasi Tiket Pesawat</li>
                <li>Rental Mobil, Elf, Hiace & Bus Pariwisata</li>
                <li>Reservasi Hotel</li>
                <li>EO</li>
              </ul>
              <br />
              <p>
                Didukung oleh staf kami yang berpengalaman dibidangnya, kami
                yakin bahwa kami bisa membangun hubungan bisnis yang baik.
              </p>
            </div>
            {/* <img
              className="w-4/5 h-2/5 object-cover object-center mx-auto mb-10 rounded-xl"
              src="/assets/img/Bromo 1.JPG"
              loading="lazy"
              alt="Sunset in the mountains"
            /> */}
            <iframe
              className="w-4/5 h-96  mx-auto mb-10 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.213651392586!2d112.65414508470799!3d-7.976856659006551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6285c5c1b44e3%3A0xf6c889ac7452dc3a!2sSekolah%20Menengah%20Kejuruan%20Telkom%20Malang!5e0!3m2!1sid!2sid!4v1687869603235!5m2!1sid!2sid"
              loading="lazy"
            ></iframe>
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
