import { FC } from 'react';

const Location: FC = () => {
  return (
    <div className="container py-10 lg:py-24">
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full px-4 lg:w-1/2">
          <div className="mb-10 md:mb-16">
            <h2 className="font-primary font-semibold text-2xl lg:text-3xl text-primary mb-2">
              Lokasi Kami
            </h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg mx-auto">
              Kunjungi Biro Wisata POP Tour di Jl. Panji Suroso Kompleks Araya
              Business Center Kav.2-4, Kota Malang 65126
            </p>
          </div>
        </div>

        <div className="w-full px-4 lg:w-1/2">
          <iframe
            className="w-11/12 h-96 mx-auto mb-10 rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.213651392586!2d112.65414508470799!3d-7.976856659006551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6285c5c1b44e3%3A0xf6c889ac7452dc3a!2sSekolah%20Menengah%20Kejuruan%20Telkom%20Malang!5e0!3m2!1sid!2sid!4v1687869603235!5m2!1sid!2sid"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
