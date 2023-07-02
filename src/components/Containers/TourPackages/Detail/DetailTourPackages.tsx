import { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';

import { TourPackages } from '@/interfaces/tourPackages';
import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import DestinationDetail from './components/DestionationDetail';
import FormDestination from './components/FormDestination';
import According from './components/According';

type Props = {
  data: TourPackages[];
};

const ContainerDetailTourPackages: FC<Props> = ({ data }) => {
  return (
    <>
      {data.map((a, i) => (
        <>
          <PageSEO
            title={`${a.title} - POP Tour`}
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
              <DestinationDetail data={a} key={i} />
              <FormDestination data={a} />
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
      ))}
    </>
  );
};

export default ContainerDetailTourPackages;
