import { FC, useState, useCallback, useEffect } from 'react';

import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import { TourPackages } from '@/interfaces/tourPackages';
import { useAxios } from '@/hooks/useAxios';
import CardTour from './components/CardTour';

const ConatinerTourPackages: FC = () => {
  const [tourPackages, setTourPackages] = useState<TourPackages[]>();

  const axios = useAxios();

  const getData = useCallback(async () => {
    const { data, status } = await axios.get('tour-packages');

    if (status === 200) {
      setTourPackages(data.tour);
    }
  }, [axios]);

  useEffect(() => {
    getData();
  }, [getData]);

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
            {tourPackages?.map((item: TourPackages, index: number) => (
              <CardTour
                address={item.address}
                tags={item.tags}
                title={item.title}
                day={item.day}
                airport={item.airport}
                price={item.price}
                href={item.href}
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
