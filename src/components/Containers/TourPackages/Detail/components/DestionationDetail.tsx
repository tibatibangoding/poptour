import { FC } from 'react';
import { Tab } from '@headlessui/react';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';

// import { formatCurrency } from '@/lib/formatCurrency';
import { TourPackages } from '@/interfaces/tourPackages';
import { classNames } from '@/lib/classNames';
import { formatCurrency } from '@/lib/formatCurrency';

type Props = {
  data: TourPackages;
};

const DestinationDetail: FC<Props> = ({ data }) => {
  return (
    <div className="col-span-10 lg:col-span-7">
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

          <div className="flex flex-col gap-5 mb-3 my-3">
            <div className="flex gap-10">
              <div className="flex items-center gap-2 ">
                <FaRegCalendarAlt className="text-lg" />
                <h1 className="text-sm text-[#666]">{data.day} Hari</h1>
              </div>

              <div className="flex items-center gap-2 ">
                <FaMapMarkerAlt className="text-lg" />
                <h1 className="text-sm text-[#666]">{data.address}</h1>
              </div>
            </div>
          </div>

          <h1 className="text-xl font-medium text-orange-400">
            {formatCurrency(data.price)}
          </h1>

          <div className="my-4 bg-gray-100 shadow-md p-5 rounded-lg">
            <Tab.Group as="div">
              <Tab.List className="flex items-center justify-start overflow-x-auto">
                <Tab as="button">
                  {({ selected }) => (
                    <div
                      className={classNames(
                        selected
                          ? 'font-extrabold text-primary'
                          : 'font-medium text-secondarydark',
                        'font-primary text-base leading-6 mr-8'
                      )}
                    >
                      Deskripsi
                    </div>
                  )}
                </Tab>

                <Tab as="button">
                  {({ selected }) => (
                    <div
                      className={classNames(
                        selected
                          ? 'font-extrabold text-primary'
                          : 'font-medium text-secondarydark',
                        'font-primary text-base leading-6 mr-8'
                      )}
                    >
                      Fasilitas
                    </div>
                  )}
                </Tab>

                <Tab as="button">
                  {({ selected }) => (
                    <div
                      className={classNames(
                        selected
                          ? 'font-extrabold text-primary'
                          : 'font-medium text-secondarydark',
                        'font-primary text-base leading-6 mr-8'
                      )}
                    >
                      Destinasi
                    </div>
                  )}
                </Tab>
              </Tab.List>

              <div className="mt-2">
                <Tab.Panels>
                  <Tab.Panel>
                    <p>{data.desc}</p>
                  </Tab.Panel>

                  <Tab.Panel>
                    <ul className="list-disc px-4 mt-2">
                      {data.facilities.map((a: any, i: number) => (
                        <li key={i} className="font-secondary">
                          {a.text}
                        </li>
                      ))}
                    </ul>
                  </Tab.Panel>

                  <Tab.Panel>
                    <ul className="list-disc px-4 mt-2">
                      {data.destination.map((a: any, i: number) => (
                        <li key={i} className="font-secondary">
                          {a.text}
                        </li>
                      ))}
                    </ul>
                  </Tab.Panel>
                </Tab.Panels>
              </div>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
