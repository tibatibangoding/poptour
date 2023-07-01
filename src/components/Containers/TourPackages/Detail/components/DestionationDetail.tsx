import { FC } from 'react';

// import { formatCurrency } from '@/lib/formatCurrency';
import { TourPackages } from '@/interfaces/tourPackages';

type Props = {
  data: TourPackages;
};

const DestinationDetail: FC<Props> = ({ data }) => {
  return (
    <div className="col-span-10 md:col-span-7">
      <div className="w-full h-80">
        <img
          src={data.img_src}
          alt={data.title}
          loading="lazy"
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      <div className="w-full py-5">
        <div className="flex gap-5 mb-3">
          {data?.tags?.map((b: any, i: number) => (
            <div className="bg-secondary px-3 py-2 rounded-full" key={i}>
              <h1 className=" text-black text-sm text-center">{b.tag}</h1>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-2xl font-semibold">{data.title}</h1>

          {/* <h1 className="text-xl font-medium text-orange-400">
            {formatCurrency(data.price)}
          </h1> */}

          <div className="my-3">
            <p>
              Ingin pergi berwisata ke gunung bromo sendirian? atau rame-rame
              dengan teman? Berwisata merupakan kebutuhan setiap individu. ada
              banyak tempat wisata di Kota Malang yang bagus untuk dikunjungi.
              salah satunya adalah wisata alam Gunung Bromo.
            </p>
          </div>

          {/* <div className="flex flex-col gap-5">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
