import { FC, useState, useCallback, useEffect } from 'react';

import { useAxios } from '@/hooks/useAxios';
import { TourPackages } from '@/interfaces/tourPackages';
import { siteMetadata } from '@/data/siteMetadata';
import { PageSEO } from '@/components/Common/SEO';
import BannerPromotion from '@/components/Common/BannerPromotion';
import CallToAction from '@/components/Common/CallToAction';
import ButtonGroup from './components/ButtonGroup';
import CardTour from './components/CardTour';

const ConatinerTourPackages: FC = () => {
  const [tourPackages, setTourPackages] = useState<TourPackages[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axios = useAxios();

  const getData = useCallback(async () => {
    setIsLoading(true);
    const { data, status } = await axios.get('tour-packages');

    if (status === 200) {
      setIsLoading(false);
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

      <div className="py-[75px]">
        <BannerPromotion />

        <div className="mx-4 md:mx-24 lg:mx-40 py-10 md:py-14">
          <ButtonGroup />

          {isLoading ? (
            <p className="flex items-center justify-center">Memuat Data...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {tourPackages?.map((item: TourPackages, index: number) => (
                <CardTour
                  img_src={item.img_src}
                  title={item.title}
                  slug={item.slug}
                  tags={item.tags}
                  address={item.address}
                  day={item.day}
                  price={item.price}
                  key={index}
                />
              ))}
            </div>
          )}

          <CallToAction
            message="Ingin Kustomisasi Perjalanan Anda?"
            href="/tour-packages/custom-trip"
            action="Kustomisasi Sekarang"
          />
        </div>
      </div>
    </>
  );
};

export default ConatinerTourPackages;
