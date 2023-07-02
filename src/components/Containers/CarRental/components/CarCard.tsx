import { FC } from 'react';
import Link from 'next/link';
import { carMenu } from '@/interfaces/carMenu';
import { useCar } from '@/hooks/useCar';

const CarCard: FC = () => {
  const { car } = useCar();

  const hrefTransition = () => {
    const carForm = document.querySelector('#form-rental') as HTMLFormElement;
    carForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {car?.map((item: carMenu, index: number) => (
            <div className="overflow-hidden flex rounded-lg border" key={index}>
              <div className="flex py-2 px-3">
                <div className="w-64">
                  <h1 className="font-bold text-2xl text-blue-600">
                    {item.brand}
                  </h1>
                  <div className="my-2 mr-24 border border-1 border-yellow-300" />

                  <p className="font-sans text-gray-500">
                    Include: {item.include}
                    <span className="flex">Exclude: {item.exclude}</span>
                  </p>
                  <div className="mt-2 flex">
                    <p className="font-bold text-xl mt-1 text-gray-500">
                      {item.price}
                    </p>
                    <Link
                      href={`/car-rental?armada=${item.brand}#form-rental`}
                      onClick={hrefTransition}
                      legacyBehavior
                    >
                      <a className="ml-5 bg-blue-600 hover:bg-secondary text-white hover:text-primary transition ease-in-out duration-200 font-semibold py-2 px-3 rounded-lg">
                        Sewa
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="relative ml-16 h-44 w-full shrink-0 justify-end items-center overflow-hidden bg-white md:h-40 md:w-64">
                  <img
                    src={item.img_src}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className=" inset-0 h-20 md:h-28 mt-10 object-cover object-center transition duration-200 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-20">
        <h1>Keterangan:</h1>

        <ul className="list-disc px-4">
          <li>
            Harga sewa diatas hanya berlaku untuk area Kota Malang dan Batu
            saja.
          </li>
          <li>
            Harga diatas sudah termasuk Driver, BBM dan Mobil. belum termasuk
            Parkir, Makan Driver dan Tips (Optional).
          </li>
          <li>
            Untuk perjalanan luar Kota Malang dan Batu, ada biaya tambahan
            sekitar Rp 50.000/hari untuk mobil dan belum termasuk biaya tambahan
            BBM.
          </li>
          <li>Pemakaian per hari maksimal sampai pukul 22.00 WIB.</li>
          <li>Harga sewa bisa berubah sewaktu-waktu sesuai dengan keadaan.</li>
        </ul>
      </div>
    </>
  );
};

export default CarCard;
