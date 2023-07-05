import { FC } from 'react';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

import { formatCurrency } from '@/lib/formatCurrency';
import { usePackagesTour } from '@/hooks/usePackagesTour';

const RecomendedCard: FC = () => {
  const { packages, isLoading } = usePackagesTour();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {isLoading ? (
        <p className="col-span-2 text-center">Memuat Data...</p>
      ) : (
        packages?.slice(0, 3).map(
          (a, i) =>
            a.isPopular && (
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
                  {a.isPopular && (
                    <div className="absolute top-0 left-0 bg-secondary rounded-tl-lg px-3 py-1">
                      <h1 className="text-black text-sm">Populer</h1>
                    </div>
                  )}
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

                    <Link
                      href={`/tour-packages/detail/${a.slug}`}
                      legacyBehavior
                    >
                      <a className="flex items-center gap-2 bg-primary hover:bg-secondary text-white hover:text-primary font-semibold py-2 px-4 rounded-lg transition ease-in-out duration-200">
                        Lihat Detail
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )
        )
      )}
    </div>
  );
};

export default RecomendedCard;
