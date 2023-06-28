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
          <div className='flex gap-5'>
            <div className='px-3 bg-[#f6f6f6]'>
              <h1>1 Day</h1>
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
