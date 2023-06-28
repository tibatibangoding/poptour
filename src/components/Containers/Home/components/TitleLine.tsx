import React from 'react';

const TitleLine = () => {
  return (
    <div>
      <div className="w-full h-[150px] bg-red-500 relative">
        <img
          src="assets/img/Bromo 1.JPG"
          alt="bg"
          className="object-cover w-full h-full "
        />
        <div className="absolute top-0 left-0  w-full h-[50px] md:h-[150px]  bg-black opacity-50" />
        <div className="absolute top-0 left-0  w-full h-[50px] md:h-[150px] rounded-lg flex justify-center items-center">
          <h1 className="text-white text-xl md:text-4xl font-semibold tracking-wide">
            BUSINESS TRAVEL MANAGEMENT
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TitleLine;
