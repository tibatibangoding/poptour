import { FC } from 'react';

const AboutContent: FC = () => {
  return (
    <div className="container py-10 lg:py-24">
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <p className="font-primary font-semibold text-md lg:text-lg text-primary uppercase lg:mb-2">
            Tentang Kami
          </p>

          <img
            src="/assets/img/logo/PopTour_Hori_Black.png"
            alt="Brand Logo"
            loading="lazy"
            className="w-96 h-40 mx-auto object-cover object-center"
          />
        </div>

        <div className="mt-5">
          <h2 className="font-medium text-lg">Selamat datang di Pop Tour,</h2>

          <p className="w-full pt-5 mx-auto">
            Kami adalah sahabat wisata dan perjalanan Anda. Pop Tour telah
            berpengalaman dalam perencanaan perjalanan wisata ke berbagai
            destinasi di Kota Malang. Bersama Pop Tour, Kami membantu anda untuk
            mengeksplor dan menjelajahi budaya baru, bersantai di pantai,
            menikmati keindahan gunung atau memulai petualangan yang belum
            pernah anda rasakan sebelumnya. Kami bangga dengan perhatian yang
            kami berikan pada detail dan layanan untuk menjamin bahwa setiap
            perjalanan Anda akan menjadi menyenangkan dan berjalan sesuai dengan
            keinginan.
          </p>

          <br />

          <p>Adapun pelayanan yang kami tawarkan adalah:</p>

          <br />

          <ul className="list-disc ml-10 sm:ml-32 ">
            <li>Paket Wisata / Study Banding</li>
            <li>
              Paket Outbound, Team Building, Adventure, Fun Games & Fun Off Road
            </li>
            <li>Rental Mobil, Elf, Hiace & Bus Pariwisata</li>
          </ul>

          <br />

          <p>
            Didukung oleh staf kami yang berpengalaman dibidangnya, kami yakin
            bahwa kami bisa membangun hubungan bisnis yang baik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
