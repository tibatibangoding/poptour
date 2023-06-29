import { FC } from 'react';

const Service: FC = () => {
  return (
    <div>
      <div className="mx-10 md:mx-24 lg:mx-40 py-5 md:py-10 ">
        <h1 className="text-2xl md:text-4xl font-semibold ">
          Produk & Layanan Kami
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          <div className="w-full h-[50px] md:h-[100px]  rounded-lg relative">
            <img
              src="assets/img/Bromo 1.JPG"
              alt=""
              className="object-cover w-full h-full  rounded-lg"
            />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Tour
              </h1>
            </div>
          </div>

          <div className="w-full h-[50px] md:h-[100px] rounded-lg relative">
            <img
              src="assets/img/Bromo 1.JPG"
              alt=""
              className="object-cover w-full h-full  rounded-lg"
            />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Ticket Pesawat
              </h1>
            </div>
          </div>

          <div className="w-full h-[50px] md:h-[100px] rounded-lg relative">
            <img
              src="assets/img/Bromo 1.JPG"
              alt=""
              className="object-cover w-full h-full  rounded-lg"
            />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Cruise
              </h1>
            </div>
          </div>
          
          <div className="w-full h-[50px] md:h-[100px] rounded-lg relative">
            <img
              src="assets/img/Bromo 1.JPG"
              alt=""
              className="object-cover w-full h-full  rounded-lg"
            />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Hotel
              </h1>
            </div>
          </div>
          <div className="w-full h-[50px] md:h-[100px]  rounded-lg relative">
            <img
              src="assets/img/Bromo 1.JPG"
              alt=""
              className="object-cover w-full h-full  rounded-lg"
            />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Paket Wisata
              </h1>
            </div>
          </div>

          <div className="w-full h-[50px] md:h-[100px] rounded-lg relative">
            <img
              src="assets/img/Bromo 1.JPG"
              alt=""
              className="object-cover w-full h-full  rounded-lg"
            />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg bg-black opacity-50" />
            <div className="absolute top-0 left-0  w-full h-[50px] md:h-[100px] rounded-lg flex justify-center items-center">
              <h1 className="text-white text-sm md:text-xl font-semibold">
                Atraksi & Hiburan
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
