import { FC, Key, useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';

import { TourPackages } from '@/interfaces/tourPackages';
import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import DestinationDetail from './components/DestionationDetail';
import FormDestination from './components/FormDestination';
import According from './components/According';
import { useRouter } from 'next/router';
import { usePackagesTour } from '@/hooks/usePackagesTour';

// type Props = {
//   data: TourPackages[];
// };

const ContainerDetailTourPackages: FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { packages } = usePackagesTour();

  const [name, setName] = useState<string>('');

  const findData = packages?.find((item) => item.slug === slug);

  console.log(packages);
  console.log(slug);
  console.log(findData);

  return (
    <>
      <PageSEO
        title={siteMetadata.title}
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
          {findData && (
            <>
              <DestinationDetail data={findData} />
              <FormDestination data={findData} />
            </>
          )}
        </div>

        <div className="w-full flex flex-col gap-2 mt-5 md:mt-0">
          <h1 className="text-2xl font-semibold">Rundown Wisata</h1>
          <According title="Jakarta - Surabaya" day={1} />
          <According title="Surabaya - Malang" day={2} />
          <According title="Malang - Banyuwangi" day={3} />
          <According title="Banyuwangi - Bali" day={4} />
        </div>
      </div>
    </>
  );
};

export default ContainerDetailTourPackages;
