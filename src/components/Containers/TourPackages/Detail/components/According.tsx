import { FC, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

type Props = {
  day: number;
  title: string;
};

const According: FC<Props> = ({ day, title }) => {
  const [isOpen, setIsOpen] = useState(true);

  function HandleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <div
        className="cursor-pointer flex items-center justify-between font-semibold transition duration-300 ease-in-out  rounded-lg p-3"
        onClick={HandleOpen}
      >
        <div className="flex items-center gap-10">
          <h1 className="text-md font-normal text-[#666]">{day} WIB</h1>
          <h1 className="text-lg font-medium text-orange-400">{title}</h1>
        </div>
        <FiChevronDown
          className={`w-4 h-4 transition-transform duration-300 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'
        } overflow-hidden`}
      >
        <div className=" p-3 mt-2 rounded-lg">
          <p className="text-[#666]">
            Hari ini Anda berkumpul di bandara Soekarno – Hatta untuk memulai
            perjalanan tour menuju ke Kuala Lumpur. Setibanya Anda akan diantar
            menuju Putrajaya yang merupakan pusat administrasi (pemerintahan
            federal) yang menggantikan Kuala Lumpur, dimana Anda bisa melihat
            Putra Mosque, Putra Square, Putra Bridge dan lainnya. Lalu Anda akan
            diajak untuk city tour Kuala Lumpur dengan melewati / photo stop di
            Istana Negara, Merdeka Square, Petronas Twin Tower yang merupakan
            gedung iconic negara Malaysia, dilanjutkan ke Chocolate Factory,
            Bukit Bintang dan Chinatown.
          </p>
        </div>
      </div>
    </div>
  );
};

export default According;
