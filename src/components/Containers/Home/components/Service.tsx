import Link from 'next/link';
import { FC } from 'react';

const Service: FC = () => {
  return (
    <section className="mx-4 md:mx-10 lg:mx-40 py-5 md:py-10">
      <h1 className="font-primary font-semibold text-2xl md:text-3xl">
        Mau Kemana Hari Ini?
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <Link href="/tour-packages?tags=Gunung%20Bromo" legacyBehavior>
          <a className="w-full h-[50px] md:h-[100px] rounded-lg relative">
            <img
              src="assets/img/bromo.jpg"
              alt="Bromo"
              loading="lazy"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Bromo
              </h1>
            </div>
          </a>
        </Link>

        <Link href="/tour-packages?tags=Pantai" legacyBehavior>
          <a className="w-full h-[50px] md:h-[100px] rounded-lg relative">
            <img
              src="assets/img/pantai.jpg"
              alt="Pantai"
              loading="lazy"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Pantai
              </h1>
            </div>
          </a>
        </Link>

        <Link href="/tour-packages?tags=Air%20Terjun" legacyBehavior>
          <a className="w-full h-[50px] md:h-[100px] rounded-lg relative">
            <img
              src="assets/img/tumpak-sewu.jpg"
              alt="Batu"
              loading="lazy"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Air Terjun
              </h1>
            </div>
          </a>
        </Link>
        {/* 
        <Link>
          <div className="w-full h-[50px] md:h-[100px] rounded-lg relative">
            <img
              src="assets/img/jogja.jpg"
              alt="Jogja"
              loading="lazy"
              className="object-cover w-full h-full  rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Jogja
              </h1>
            </div>
          </div>
        </Link>

        <Link>
          <div className="w-full h-[50px] md:h-[100px] rounded-lg relative">
            <img
              src="assets/img/bali.jpeg"
              alt="Bali"
              loading="lazy"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Bali
              </h1>
            </div>
          </div>
        </Link>

        <Link>
          <div className="w-full h-[50px] md:h-[100px] rounded-lg relative">
            <img
              src="assets/img/rafting.jpg"
              alt="Atraksi & Hiburan"
              loading="lazy"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0 w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Atraksi & Hiburan
              </h1>
            </div>
          </div>
        </Link> */}
      </div>
    </section>
  );
};

export default Service;
