import { FC } from 'react';

const Maps: FC = () => {
  return (
    <section>
      <div className="justify-center items-center content-center mx-auto  md:my-10">
        <h3 className="font-bold text-center text-3xl">Alamat Kami</h3>
      </div>
      <iframe
        className="w-4/5 h-96 md:h-[600px] py-5 md:py-10 mx-auto mb-10 rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.213651392586!2d112.65414508470799!3d-7.976856659006551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6285c5c1b44e3%3A0xf6c889ac7452dc3a!2sSekolah%20Menengah%20Kejuruan%20Telkom%20Malang!5e0!3m2!1sid!2sid!4v1687869603235!5m2!1sid!2sid"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Maps;
