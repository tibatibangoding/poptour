import { FC } from 'react';
import { ImPriceTags } from 'react-icons/im';

type ButtonGroupProps = {
  setState: (value: number) => void;
  setSelectedPrice: (value: string) => void;
  active: number;
};

const ButtonGroup: FC<ButtonGroupProps> = ({
  setState,
  setSelectedPrice,
  active,
}) => {
  const handleSelectByPrice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPrice(e.target.value);
    setState(0);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:mb-10 justify-between">
      <div className=" flex gap-3 md:gap-5  overflow-x-auto my-4 lg:my-0">
        <button
          onClick={() => setState(0)}
          className={`px-3 md:px-5 py-2 rounded-full transition-colors ${
            active == 0
              ? 'bg-blue-500 border-[3px] border-secondary text-secondary'
              : 'bg-[#f6f6f6] border-[1px] border-[#ccc] text-[#666]'
          }`}
        >
          <h1
            className={`${
              active == 0 ? '' : ''
            } w-[50px]`}
          >
            All
          </h1>
        </button>
        <button
          onClick={() => setState(1)}
          className={`px-3 md:px-5 py-2 rounded-full transition-colors ${
            active == 1
              ? 'bg-blue-500 border-[3px] border-secondary text-secondary'
              : 'bg-[#f6f6f6] border-[1px] border-[#ccc] text-[#666]'
          }`}
        >
          <h1
            className={`${
              active == 1 ? '' : ''
            } w-[50px]`}
          >
            1 Day
          </h1>
        </button>
        <button
          onClick={() => setState(2)}
          className={`px-3 md:px-5 py-2 rounded-full transition-colors ${
            active == 2
              ? 'bg-blue-500 border-[3px] border-secondary text-secondary'
              : 'bg-[#f6f6f6] border-[1px] border-[#ccc] text-[#666]'
          }`}
        >
          <h1
            className={`${
              active == 2 ? '' : ''
            } w-[50px]`}
          >
            2 Day
          </h1>
        </button>
        <button
          onClick={() => setState(3)}
          className={`px-3 md:px-5 py-2 rounded-full transition-colors ${
            active == 3
              ? 'bg-blue-500 border-[3px] border-secondary text-secondary'
              : 'bg-[#f6f6f6] border-[1px] border-[#ccc] text-[#666]'
          }`}
        >
          <h1
            className={`${
              active == 3 ? '' : ''
            } w-[50px]`}
          >
            3 Day
          </h1>
        </button>
        <button
          onClick={() => setState(4)}
          className={`px-3 md:px-5 py-2 rounded-full transition-colors ${
            active == 4
              ? 'bg-blue-500 border-[3px] border-secondary text-secondary'
              : 'bg-[#f6f6f6] border-[1px] border-[#ccc] text-[#666]'
          }`}
        >
          <h1
            className={`${
              active == 4 ? '' : ''
            } w-[50px]`}
          >
            4 Day
          </h1>
        </button>
        <button
          onClick={() => setState(5)}
          className={`px-3 md:px-5 py-2 rounded-full transition-colors ${
            active == 5
              ? 'bg-blue-500 border-[3px] border-secondary text-secondary'
              : 'bg-[#f6f6f6] border-[1px] border-[#ccc] text-[#666]'
          }`}
        >
          <h1
            className={`${
              active == 5 ? '' : ''
            } w-[50px]`}
          >
            5 Day
          </h1>
        </button>
        <button
          onClick={() => setState(6)}
          className={`px-3 md:px-5 py-2 rounded-full transition-colors ${
            active == 6
              ? 'bg-blue-500 border-[3px] border-secondary text-secondary'
              : 'bg-[#f6f6f6] border-[1px] border-[#ccc] text-[#666]'
          }`}
        >
          <h1
            className={`${
              active == 6 ? '' : ''
            } w-[50px]`}
          >
            6 Day
          </h1>
        </button>
      </div>
      <div className="flex items-center gap-3 pr-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
        <ImPriceTags className="h-full text-[50px] px-3 border-r border-gray-300 text-blue-500 rounded-l-lg " />
        <select
          id="large"
          className="block w-full px- py-3 bg-gray-50 rounded-lg text-base text-gray-900"
          onChange={handleSelectByPrice}
        >
          <option value="">Filter Harga</option>
          <option value="lowest">Terendah</option>
          <option value="highest">Termahal</option>
        </select>
      </div>
    </div>
  );
};

export default ButtonGroup;
