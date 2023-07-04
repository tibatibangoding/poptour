import { FC, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

type Props = {
  day: number;
  title: string;
  desc: string;
};

const According: FC<Props> = ({ day, title, desc }) => {
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
          <h1 className="text-md font-normal text-blue-500">{day} WIB</h1>
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
          <p className="text-[#666]">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default According;
