import { FC } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import { dataTourPackages } from '@/data/dataTourPackages';
import CardTour from './components/CardTour';

const ConatinerTourPackages: FC = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <div className="py-20">
        <div className="mx-10 md:mx-24 lg:mx-40 py-20 ">
          <div className="flex gap-5 mb-10 overflow-x-auto   ">
            <button className=" px-5 md:py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc] ">
              <h1 className="text-[#666]  w-[50px]">1 Day</h1>
            </button>
            <button className="px-5 py-2  rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc] ">
              <h1 className="text-[#666] text-center w-[50px] ">2 Day</h1>
            </button>
            <button className="px-5 py-2  rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
              <h1 className="text-[#666] text-center w-[50px] ">3 Day</h1>
            </button>
            <button className="px-5 py-2  rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
              <h1 className="text-[#666] text-center w-[50px] ">4 Day</h1>
            </button>
            <button className="px-5 py-2  rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
              <h1 className="text-[#666] text-center w-[50px] ">5 Day</h1>
            </button>
            <button className="px-5 py-2  rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
              <h1 className="text-[#666] text-center w-[50px] ">6 Day</h1>
            </button>
            <button className="px-5 py-2  rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
              <h1 className="text-[#666] text-center ">Haneym oon</h1>
            </button>
            <button className="px-5 py-2  rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
              <h1 className="text-[#666] text-center w-40">Gath Perusahaan</h1>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
            {dataTourPackages.map((item: any, index: number) => (
              <CardTour
                address={item.addres}
                tags={item.tags}
                title={item.title}
                day={item.day}
                airport={item.airport}
                price={item.price}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConatinerTourPackages;
