import React from 'react';

const TourPlace = () => {
  return (
    <div>
      <div className="mx-10 md:mx-24 lg:mx-40 py-10 ">
        <h1 className="text-2xl md:text-4xl font-semibold ">
          Rekomendasi Pop Tour
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 ">
          <div className="w-full h-[300px] md:h-[500px]  rounded-lg relative overflow-hidden z-[-1] ">
            <img
              src="assets/img/Bromo 1.JPG"
              alt=""
              className="object-cover w-full h-full  rounded-lg transition-transform duration-300 hover:scale-110 "
            />
          </div>
          <div className="w-full h-[300px] md:h-[500px]  rounded-lg relative overflow-hidden z-[-1]">
            <img
              src="assets/img/Bromo 1.JPG"
              alt=""
              className="object-cover w-full h-full  rounded-lg transition-transform duration-300 hover:scale-110 "
            />
          </div>
          <div className="w-full h-[300px] md:h-[500px]  rounded-lg relative overflow-hidden z-[-1]">
            <img
              src="assets/img/Bromo 1.JPG"
              alt=""
              className="object-cover w-full h-full  rounded-lg transition-transform duration-300 hover:scale-110 "
            />
          </div>
          <div className="w-full h-[300px] md:h-[500px]  rounded-lg relative overflow-hidden z-[-1]">
            <img
              src="assets/img/Bromo 1.JPG"
              alt=""
              className="object-cover w-full h-full  rounded-lg transition-transform duration-300 hover:scale-110 "
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default TourPlace;
