import { FC, useState, useCallback, useEffect } from 'react';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

import { TourPackages } from '@/interfaces/tourPackages';
import { useAxios } from '@/hooks/useAxios';
import { formatCurrency } from '@/lib/formatCurrency';

const RecomendedCard: FC = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
      {isLoading ? (
        <p className="flex items-center justify-center">Memuat Data...</p>
      ) : (
        tourPackages?.slice(0, 2).map((a: TourPackages, i: number) => (
          <div
            className="w-full h-full bg-white drop-shadow-lg rounded-lg transition-all hover:-translate-y-1"
            key={i}
          >
            <div className="w-full h-[250px] relative">
              <Link href={`/tour-packages/detail/${a.slug}`} legacyBehavior>
                <a>
                  <img
                    src={a.img_src}
                    alt={a.title}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </a>
              </Link>
              {a?.tags?.slice(0, 1).map((b: any, i: number) => (
                <div
                  className="absolute top-0 left-0 bg-secondary rounded-tl-lg px-3 py-1"
                  key={i}
                >
                  <h1 className="text-black text-sm">{b.tag}</h1>
                </div>
              ))}
            </div>

            <div className="p-4">
              <Link href={`/tour-packages/detail/${a.slug}`} legacyBehavior>
                <a className="text-xl font-semibold">{a.title}</a>
              </Link>

              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <FaRegCalendarAlt className="text-lg" />
                  <h1 className="text-sm text-[#666]">{a.day} Hari</h1>
                </div>

                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-lg" />
                  <h1 className="text-sm text-[#666]">{a.address}</h1>
                </div>
              </div>

              <p className="mt-3 text-[#666]">Mulai dari</p>

              <div className="flex items-center justify-between">
                <h1 className="text-xl font-medium text-orange-400">
                  {formatCurrency(a.price)}
                </h1>

                <Link href={`/tour-packages/detail/${a.slug}`} legacyBehavior>
                  <a className="flex items-center gap-2 bg-primary hover:bg-secondary text-white hover:text-primary font-semibold py-2 px-4 rounded-lg transition ease-in-out duration-200">
                    Lihat Detail
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecomendedCard;
