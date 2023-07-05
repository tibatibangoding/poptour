import { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { usePackagesTour } from '@/hooks/usePackagesTour';
import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import DestinationDetail from './components/DestionationDetail';
import FormDestination from './components/FormDestination';
import According from './components/According';
import RecomendationTour from './components/RecomendationTour';

const ContainerDetailTourPackages: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { packages } = usePackagesTour();

  const findData = packages?.find((item) => item.slug === slug);

  const recomendedPackages = packages?.filter(
    (item) => item.tags[0].tag === findData?.tags[0].tag && item.slug !== slug
  );

  return (
    <>
      {findData && (
        <>
          <PageSEO
            title={`${findData.title} - POP Tour`}
            description={siteMetadata.description}
          />

          <div className="mx-4 md:mx-24 lg:mx-40 pt-24 pb-10 md:pt-28 md:pb-14">
            <Link href="/tour-packages" legacyBehavior>
              <a className="flex items-center">
                <div className="p-1 rounded-lg border-[1px] border-black">
                  <IoIosArrowBack className="text-center" />
                </div>

                <h1 className="text-xl ml-2">Kembali ke Paket Wisata</h1>
              </a>
            </Link>

            <div className="w-full py-5 grid grid-cols-10 gap-8">
              <DestinationDetail data={findData} />
              <FormDestination data={findData} />
            </div>

            <div className="w-full flex flex-col gap-2 mt-5 md:mt-0">
              <h1 className="text-2xl font-semibold">Rundown Wisata</h1>
              {findData.rundown.map((a: any, i: number) => (
                <According title={a.text} day={a.time} desc={a.desc} key={i} />
              ))}
            </div>

            <div className="flex flex-col mt-5 md:mt-8">
              <h1 className="text-2xl font-semibold">Paket Wisata Lainnya</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {recomendedPackages?.map((a, i) => (
                  <RecomendationTour
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
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ContainerDetailTourPackages;
