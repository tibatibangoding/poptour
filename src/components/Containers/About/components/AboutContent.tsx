import { FC } from 'react';

const AboutContent: FC = () => {
  return (
    <div className="justify-center items-center mt-5 mb-5 md:mt-10 md:mb-10 ">
      <h1 className="font-bold text-2xl md:text-3xl text-center capitalize">
        Tentang Kami
      </h1>

      <img
        className="w-20 h-20 mx-auto my-10"
        src="/assets/img/logo/POPTour_4.png"
        alt="Logo"
      />

      <h2 className="font-medium text-lg">Selamat datang di Pop Tour,</h2>

      <p className="w-full pt-5 mx-auto">
        Kami adalah sahabat wisata dan perjalanan Anda. Pop Tour telah
        berpengalaman dalam perencanaan perjalanan wisata ke berbagai destinasi
        di Kota Malang. Bersama Pop Tour, Kami membantu anda untuk mengeksplor
        dan menjelajahi budaya baru, bersantai di pantai, menikmati keindahan
        gunung atau memulai petualangan yang belum pernah anda rasakan
        sebelumnya. Kami bangga dengan perhatian yang kami berikan pada detail
        dan layanan untuk menjamin bahwa setiap perjalanan Anda akan menjadi
        menyenangkan dan berjalan sesuai dengan keinginan.
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
        <li>Reservasi Hotel</li>
      </ul>

      <br />

      <p>
        Didukung oleh staf kami yang berpengalaman dibidangnya, kami yakin bahwa
        kami bisa membangun hubungan bisnis yang baik.
      </p>
    </div>
  );
};

export default AboutContent;
