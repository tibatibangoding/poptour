import { FC } from 'react';

const TitleLine: FC = () => {
  return (
    <section className="w-full h-[150px] relative z-[-1] my-10">
      <img
        src="assets/img/Bromo 1.JPG"
        alt="bg"
        className="object-cover w-full h-full"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-70" />

      <div className="absolute top-0 left-0 w-full h-full rounded-lg flex justify-center items-center">
        <h1 className="font-primary font-semibold text-secondary text-xl md:text-4xl tracking-wide">
          ENJOY YOUR JOURNEY
        </h1>
      </div>
    </section>
  );
};

export default TitleLine;
