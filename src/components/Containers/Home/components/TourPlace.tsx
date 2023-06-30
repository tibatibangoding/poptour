import { FC } from 'react';

const TourPlace: FC = () => {
  return (
    <section className="mx-4 md:mx-10 lg:mx-40 py-5 md:py-10">
      <h1 className="font-primary font-semibold text-2xl md:text-3xl">
        Rekomendasi Paket Wisata
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 ">
        <div className="w-full h-[300px] md:h-[500px] rounded-lg relative overflow-hidden z-[-1]">
          <img
            src="assets/img/Bromo 1.JPG"
            alt=""
            className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-110 "
          />
        </div>

        <div className="w-full h-[300px] md:h-[500px] rounded-lg relative overflow-hidden z-[-1]">
          <img
            src="assets/img/Bromo 1.JPG"
            alt=""
            className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
};

export default TourPlace;
