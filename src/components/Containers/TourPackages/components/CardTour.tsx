import React from 'react';
import { CgCalendarToday } from 'react-icons/cg';
import { LuPlaneTakeoff } from 'react-icons/lu';
import { BsArrowRight } from 'react-icons/bs';

const CardTour = () => {
  return (
    <div>
      <div className="w-full h-[300px] bg-white drop-shadow-lg rounded-lg">
        <div className="w-full h-[100px] relative">
          <img
            src="assets/img/Bromo 1.JPG"
            alt=""
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="absolute bottom-0 left-0 ">
            <h1 className="ml-3 text-white font-bold ">
              Bromo, Malang Jawa Timur
            </h1>
          </div>
        </div>
        <div className="w-full h-[200px] p-5">
          <div className="flex gap-2">
            <div className="bg-blue-700 px-2 rounded-full ">
              <h1 className="text-white text-sm">All in</h1>
            </div>
            <div className="bg-blue-700 px-2 rounded-full ">
              <h1 className="text-white text-sm">Super Sale</h1>
            </div>
          </div>
          <h1 className="text-xl font-semibold mt-2">
            Super Sale Malaysia + Getting Highland
          </h1>
          <div className='flex items-center gap-5'>
            <div className="flex items-center gap-2">
              <CgCalendarToday className='text-lg' />
              <h1 className='text-sm text-[#666]'>5 hari</h1>
            </div>
            <div className="flex items-center gap-2">
              <LuPlaneTakeoff className='text-lg' />
              <h1 className='text-sm text-[#666]'>Malaysia Airlanes</h1>
            </div>
          </div>
          <p className='my-3 text-[#666]'>Mulai dari</p>
          <div className='flex items-center justify-between'>
            <h1 className='text-xl font-medium text-orange-400'>IDR 5.000.000</h1>
            <div className='flex items-center gap-2'>
              <h1>Lihat Detail</h1>
              <BsArrowRight/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTour;
