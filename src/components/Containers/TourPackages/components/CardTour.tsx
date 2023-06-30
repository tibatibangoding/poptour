import { FC } from 'react';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

import { TourPackages } from '@/interfaces/tourPackages';
import { formatCurrency } from '@/lib/formatCurrency';

const CardTour: FC<TourPackages> = ({
  img_src,
  title,
  slug,
  tags,
  address,
  day,
  price,
}) => {
  return (
    <div className="w-full h-full bg-white drop-shadow-lg rounded-lg">
      <div className="w-full h-[200px] relative">
        <img
          src={img_src}
          alt={title}
          className="w-full h-full object-cover rounded-t-lg"
        />
        {tags?.map((a: any, i: number) => (
          <div
            className="absolute top-0 left-0 bg-secondary rounded-tl-lg px-3 py-1"
            key={i}
          >
            <h1 className="text-black text-sm">{a.tag}</h1>
          </div>
        ))}
      </div>

      <div className="p-4">
        <Link href={`/tour-packages/detail/${slug}`} legacyBehavior>
          <a className="text-xl font-semibold">{title}</a>
        </Link>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt className="text-lg" />
            <h1 className="text-sm text-[#666]">{day} Hari</h1>
          </div>

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-lg" />
            <h1 className="text-sm text-[#666]">{address}</h1>
          </div>
        </div>

        <p className="mt-3 text-[#666]">Mulai dari</p>

        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-orange-400">
            {formatCurrency(price)}
          </h1>

          <Link href={`/tour-packages/detail/${slug}`} legacyBehavior>
            <a className="flex items-center gap-2 bg-primary hover:bg-secondary text-white hover:text-primary font-semibold py-2 px-4 rounded-lg transition ease-in-out duration-200">
              Lihat Detail
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardTour;
