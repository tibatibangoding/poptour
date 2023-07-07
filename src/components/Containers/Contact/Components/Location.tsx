import { FC } from 'react';

const Location: FC = () => {
  return (
    <div className="container mx-auto py-10 lg:py-24">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full px-4 lg:w-1/2">
          <div className="mb-10 md:mb-16">
            <h2 className="font-primary font-semibold text-2xl lg:text-3xl text-primary mb-2">
              Lokasi Kami
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg mx-auto">
              Kunjungi Biro Wisata POP Tour di Jl. Titan Asri X / Blok I - 11,
              Kel. Pandanwangi, Kec. Blimbing, Kota Malang, Jawa Timur,
              Indonesia 65124
            </p>
          </div>
        </div>

        <div className="w-full px-4 lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15805.643071495693!2d112.6552072!3d-7.9564327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6299ae9656f33%3A0x3fd63cad14e2c67b!2sPOP%20Tour!5e0!3m2!1sid!2sid!4v1688748769836!5m2!1sid!2sid"
            className="w-11/12 h-96 mx-auto mb-10 rounded-xl"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
