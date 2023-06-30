import { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { CgCalendarToday } from 'react-icons/cg';
import { LuPlaneTakeoff } from 'react-icons/lu';
import Link from 'next/link';

import { TourPackages } from '@/interfaces/tourPackages';
import { formatCurrency } from '@/lib/formatCurrency';
import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import According from './components/According';

type Props = {
  data: TourPackages[];
};

const ContainerDetailTourPackages: FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />

      <div className="mx-4 md:mx-24 lg:mx-40 pt-24 pb-10 md:pt-28 md:pb-14">
        <Link href="/tour-packages" legacyBehavior>
          <a className="w-full relative flex items-center">
            <div className="block p-1 rounded-lg border-[1px] border-black">
              <IoIosArrowBack className="text-center" />
            </div>

            <h1 className="text-xl ml-2">Kembali ke halaman Paket Wisata</h1>
          </a>
        </Link>

        <div className="w-full py-5 grid grid-cols-10 gap-8">
          {data.map((a, i) => (
            <div className="col-span-10 md:col-span-7" key={i}>
              <div className="w-full h-60">
                <img
                  src={a.img_src}
                  alt={a.title}
                  loading="lazy"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>

              <div className="w-full py-5">
                <div className="flex gap-5 mb-3">
                  {a?.tags?.map((b: any, i: number) => (
                    <div className="bg-primary px-5 py-2 rounded-full" key={i}>
                      <h1 className=" text-white text-sm text-center">
                        {b.tag}
                      </h1>
                    </div>
                  ))}
                </div>

                <div>
                  <h1 className="text-2xl font-semibold">{a.title}</h1>

                  <h1 className="text-xl font-medium text-orange-400">
                    {formatCurrency(a.price)}
                  </h1>

                  <div className="my-3">
                    <p>
                      Ingin pergi berwisata ke gunung bromo sendirian? atau
                      rame-rame dengan teman? Berwisata merupakan kebutuhan
                      setiap individu. ada banyak tempat wisata di Kota Malang
                      yang bagus untuk dikunjungi. salah satunya adalah wisata
                      alam Gunung Bromo.
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex gap-10">
                      <div className="flex items-center gap-2 ">
                        <CgCalendarToday className="text-xl" />
                        <h1 className="text-sm text-[#666]">4 day</h1>
                      </div>

                      <div className="flex items-center gap-2 ">
                        <LuPlaneTakeoff className="text-xl" />
                        <h1 className="text-sm text-[#666]">Soekarna Hatta</h1>
                      </div>
                    </div>

                    <div className="flex gap-10">
                      <div className="flex items-center gap-2 ">
                        <CgCalendarToday className="text-xl" />
                        <h1 className="text-sm text-[#666]">4 day</h1>
                      </div>

                      <div className="flex items-center gap-2 ">
                        <LuPlaneTakeoff className="text-xl" />
                        <h1 className="text-sm text-[#666]">Soekarna Hatta</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-span-10 md:col-span-3">
            <div className="w-full p-7 bg-[#f6f6f6] shadow-md rounded-xl flex flex-col gap-3">
              <div className="grid lg:grid-cols-2 gap-3 ">
                <div>
                  <h3 className="text-lg font-semibold">Nama Lengkap</h3>
                  <input
                    type="text"
                    className="w-full px-2 py-3 text-lg rounded-xl mt-2"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <input
                    type="text"
                    className="w-full px-2 py-3 text-lg rounded-xl mt-2"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3 ">
                <div>
                  <h3 className="text-lg font-semibold">Nomor Hp / WA</h3>
                  <input
                    type="text"
                    className="w-full px-2 py-3 text-lg rounded-xl mt-2"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Tanggal Berangkat</h3>
                  <input
                    type="text"
                    className="w-full px-2 py-3 text-lg rounded-xl mt-2"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-3 ">
                <div>
                  <h3 className="text-lg font-semibold">Jumlah Peserta </h3>
                  <input
                    type="text"
                    className="w-full px-2 py-3 text-lg rounded-xl mt-2"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Paket Wisata </h3>
                  <input
                    type="text"
                    className="w-full px-2 py-3 text-lg rounded-xl mt-2"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Catatan </h3>
                <textarea className="w-full px-2 py-3 text-lg rounded-xl mt-2" />
              </div>
              <button className="bg-blue-700 py-3 text-xl font-semibold rounded-xl text-white">
                Pesan
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
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
