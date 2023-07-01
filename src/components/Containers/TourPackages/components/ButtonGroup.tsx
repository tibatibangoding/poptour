import { FC } from 'react';

const ButtonGroup: FC = () => {
  return (
    <div className="flex gap-3 md:gap-5 mb-10 overflow-x-auto">
      <button className="px-3 md:px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
        <h1 className="text-[#666] w-[50px]">1 Day</h1>
      </button>
      <button className="px-3 md:px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
        <h1 className="text-[#666] text-center w-[50px] ">2 Day</h1>
      </button>
      <button className="px-3 md:px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
        <h1 className="text-[#666] text-center w-[50px] ">3 Day</h1>
      </button>
      <button className="px-3 md:px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
        <h1 className="text-[#666] text-center w-[50px] ">4 Day</h1>
      </button>
      <button className="px-3 md:px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
        <h1 className="text-[#666] text-center w-[50px] ">5 Day</h1>
      </button>
      <button className="px-3 md:px-5 py-2 rounded-full bg-[#f6f6f6] border-[1px] border-[#ccc]">
        <h1 className="text-[#666] text-center w-[50px] ">6 Day</h1>
      </button>
    </div>
  );
};

export default ButtonGroup;
