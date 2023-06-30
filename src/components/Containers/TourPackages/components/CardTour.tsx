import { FC } from 'react';
import { CgCalendarToday } from 'react-icons/cg';
import { LuPlaneTakeoff } from 'react-icons/lu';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

type Props = {
  address: string;
  tags: string[];
  title: string;
  day: number;
  airport: string;
  price: string;
  href: string;
};

const CardTour: FC<Props> = ({
  address,
  tags,
  title,
  day,
  airport,
  price,
  href,
}) => {
  return (
    <div className="w-full h-full bg-white drop-shadow-lg rounded-lg">
      <div className="w-full h-[200px] relative">
        <img
          src="assets/img/Bromo 1.JPG"
          alt=""
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute bottom-0 left-0 ">
          <h1 className="ml-3 text-white font-bold ">{address}</h1>
        </div>
      </div>

      <div className="p-5">
        <div className="flex gap-2">
          {tags?.map((item: any, index: number) => (
            <div className="bg-blue-700 px-2 rounded-full " key={index}>
              <h1 className="text-white text-sm">{item.tag}</h1>
            </div>
          ))}
        </div>

        <h1 className="text-xl font-semibold mt-2">{title}</h1>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <CgCalendarToday className="text-lg" />
            <h1 className="text-sm text-[#666]">{day} day</h1>
          </div>

          <div className="flex items-center gap-2">
            <LuPlaneTakeoff className="text-lg" />
            <h1 className="text-sm text-[#666]">{airport}</h1>
          </div>
        </div>

        <p className="my-3 text-[#666]">Mulai dari</p>

        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium text-orange-400">IDR {price}</h1>

          <Link href={href} legacyBehavior>
            <a className="flex items-center gap-2">
              Lihat Detail
              <BsArrowRight />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardTour;
