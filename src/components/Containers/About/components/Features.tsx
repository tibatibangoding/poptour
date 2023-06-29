import Link from 'next/link';
import { FC } from 'react';
import { FaJoget } from 'react-icons/fa';

const Features: FC = () => {
  return (
    <>
      <section>
        <h2 className="font-bold text-2xl md:text-3xl text-center capitalize">
          Mengapa Harus Kami?
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-3  gap-5 md:gap-28 mt-5">
          <div className="shadow-lg rounded-lg hover:-translate-y-1 transition-all ease-in-out duration-200">
            <div className="mx-auto items-center justify-center bg-white rounded-lg p-5">
              <FaJoget className="w-20 h-20 object-cover object-center mx-auto rounded-full" />

              <div className="flex justify-center">
                <Link href="#" legacyBehavior>
                  <a className="font-rubik font-medium text-xs mt-2 text-center md:flex md:text-xl md:leading-6 text-primary hover:text-primarydark">
                    Pelayanan Terpercaya
                  </a>
                </Link>

                <p className="font-rubik font-normal text-sm leading-5 text-secondarydark" />
              </div>
            </div>
          </div>

          <div className="shadow-lg rounded-lg hover:-translate-y-1 transition-all ease-in-out duration-200">
            <div className="mx-auto items-center justify-center bg-white rounded-lg p-5">
              <FaJoget className="w-20 h-20 object-cover object-center mx-auto rounded-full" />

              <div className="flex justify-center">
                <Link href="#" legacyBehavior>
                  <a className="font-rubik font-medium text-xs mt-2 text-center md:flex md:text-xl md:leading-6 text-primary hover:text-primarydark">
                    Cara order mudah
                  </a>
                </Link>

                <p className="font-rubik font-normal text-sm leading-5 text-secondarydark" />
              </div>
            </div>
          </div>

          <div className="shadow-lg rounded-lg hover:-translate-y-1 transition-all ease-in-out duration-200">
            <div className="mx-auto items-center justify-center bg-white rounded-lg p-5">
              <FaJoget className="w-20 h-20 object-cover object-center mx-auto rounded-full" />

              <div className="flex justify-center">
                <Link href="#" legacyBehavior>
                  <a className="font-rubik font-medium text-xs mt-2 text-center md:flex md:text-xl md:leading-6 text-primary hover:text-primarydark">
                    Akses Mudah
                  </a>
                </Link>

                <p className="font-rubik font-normal text-sm leading-5 text-secondarydark" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
