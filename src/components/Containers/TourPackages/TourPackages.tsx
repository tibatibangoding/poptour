/* eslint-disable prettier/prettier */
import { FC } from 'react';
import { TourPackages } from '@/interfaces/tourPackages';
import { PageSEO } from '@/components/Common/SEO';
import BannerPromotion from '@/components/Common/BannerPromotion';
import CallToAction from '@/components/Common/CallToAction';
// import ButtonGroup from './components/ButtonGroup';
import CardTour from './components/CardTour';
import { usePackagesTour } from '@/hooks/usePackagesTour';
import { useRouter } from 'next/router';

const ConatinerTourPackages: FC = () => {
  // const [day, setDay] = useState<number>(0);
  // const [sortByPrice, setSortByPrice] = useState<string>('');

  const router = useRouter();
  const { tags } = router.query;

  const { packages, isLoading } = usePackagesTour();

  // const sortedPackages =
  //   sortByPrice === 'lowest'
  //     ? packages?.slice().sort((a, b) => a.price - b.price)
  //     : sortByPrice === 'highest'
  //       ? packages?.slice().sort((a, b) => b.price - a.price)
  //       : tags
  //         ? packages?.filter((item: TourPackages) =>
  //           item.tags.some((tag:any) => tag.tag === tags)
  //         )
  //         : packages;
  
  const sortedPackages =
     tags
       ? packages?.filter((item: TourPackages) =>
         item.tags.some((tag:any) => tag.tag === tags)
       )
       : packages;

  return (
    <>
      <PageSEO
        title="Paket Wisata - POP Tour"
        description="Dapatkan pengalaman perjalanan yang tak terlupakan melalui halaman Paket Wisata POP Tour. Menawarkan beragam pilihan destinasi menarik dan itinerary yang terperinci, kami menghadirkan paket wisata yang dirancang untuk memenuhi kebutuhan dan impian perjalanan Anda."
      />

      <div className="py-[89px]">
        <BannerPromotion />

        <div className="mx-4 md:mx-10 lg:mx-40 py-10 md:py-14">
          {/* <ButtonGroup
            active={day}
            setState={setDay}
            setSelectedPrice={setSortByPrice}
          /> */}

          {isLoading ? (
            <p className="flex items-center justify-center">Memuat Data...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* {sortedPackages?.map((item: TourPackages, index: number) => {
                if (
                  day === 0 ||
                  item.day === day ||
                  (item.day === day && sortByPrice === 'highest') ||
                  (item.day === day && sortByPrice === 'lowest')
                ) {
                  return (
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
                  );
                }

                return null;
              })} */}

              {sortedPackages?.map((a: TourPackages, i: number) => (
                <CardTour
                  img_src={a.img_src}
                  title={a.title}
                  slug={a.slug}
                  isPopular={a.isPopular}
                  address={a.address}
                  day={a.day}
                  price={a.price}
                  key={i}
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
