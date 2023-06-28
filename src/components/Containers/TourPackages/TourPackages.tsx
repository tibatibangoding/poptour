import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import React from 'react';
import CardTour from './components/CardTour';

const ConatinerTourPackages = () => {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <div className="py-20">
        <div className="mx-10 md:mx-24 lg:mx-40 py-20 ">
          <div className='flex gap-5 mb-10'>
            <div className='px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]'>
              <h1 className='text-[#666]'>1 Day</h1>
            </div>
            <div className='px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc] '>
              <h1 className='text-[#666]'>2 Day</h1>
            </div>
            <div className='px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]'>
              <h1 className='text-[#666]'>3 Day</h1>
            </div>
            <div className='px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]'>
              <h1 className='text-[#666]'>4 Day</h1>
            </div>
            <div className='px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]'>
              <h1 className='text-[#666]'>5 Day</h1>
            </div>
            <div className='px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]'>
              <h1 className='text-[#666]'>6 Day</h1>
            </div>
            <div className='px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]'>
              <h1 className='text-[#666]'>Haneymoon</h1>
            </div>
            <div className='px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]'>
              <h1 className='text-[#666]'>Gath Perusahaan</h1>
            </div>

          </div>
          <div className="grid grid-cols-3 gap-10 ">
            <CardTour />
            <CardTour />
            <CardTour />
            <CardTour />
            <CardTour />
            <CardTour />
            <CardTour />
            <CardTour />
            <CardTour />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConatinerTourPackages;
