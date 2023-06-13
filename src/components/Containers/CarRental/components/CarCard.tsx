import { FC } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const CarCard: FC = () => {
  const hrefTransition = () => {
    const carForm = document.querySelector('#form-rental');
    carForm?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-[200px] object-cover object-center"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-primary">AVANZA</h2>

            <p className="font-semibold text-lg text-gray-500">
              IDR 150.000/hari
            </p>

            <div className="pt-3">
              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">Driver</p>
              </div>

              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">BBM</p>
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">
                  6-7 Penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pt-1 pb-5">
            <Link
              href="/car-rental?product=halo#form-rental"
              onClick={hrefTransition}
              legacyBehavior
            >
              <a className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
                Sewa Armada
              </a>
            </Link>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-[200px] object-cover object-center"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-primary">AVANZA</h2>

            <p className="font-semibold text-lg text-gray-500">
              IDR 150.000/hari
            </p>

            <div className="pt-3">
              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">Driver</p>
              </div>

              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">BBM</p>
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">
                  6-7 Penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pt-1 pb-5">
            <Link
              href="/car-rental?product=haiii#form-rental"
              onClick={hrefTransition}
              legacyBehavior
            >
              <a className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
                Sewa Armada
              </a>
            </Link>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-[200px] object-cover object-center"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-primary">AVANZA</h2>

            <p className="font-semibold text-lg text-gray-500">
              IDR 150.000/hari
            </p>

            <div className="pt-3">
              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">Driver</p>
              </div>

              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">BBM</p>
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">
                  6-7 Penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pt-1 pb-5">
            <Link
              href="/car-rental?product=halo#form-rental"
              onClick={hrefTransition}
              legacyBehavior
            >
              <a className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
                Sewa Armada
              </a>
            </Link>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-[200px] object-cover object-center"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-primary">AVANZA</h2>

            <p className="font-semibold text-lg text-gray-500">
              IDR 150.000/hari
            </p>

            <div className="pt-3">
              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">Driver</p>
              </div>

              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">BBM</p>
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">
                  6-7 Penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pt-1 pb-5">
            <Link
              href="/car-rental?product=halo#form-rental"
              onClick={hrefTransition}
              legacyBehavior
            >
              <a className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
                Sewa Armada
              </a>
            </Link>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-[200px] object-cover object-center"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-primary">AVANZA</h2>

            <p className="font-semibold text-lg text-gray-500">
              IDR 150.000/hari
            </p>

            <div className="pt-3">
              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">Driver</p>
              </div>

              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">BBM</p>
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">
                  6-7 Penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pt-1 pb-5">
            <Link
              href="/car-rental?product=halo#form-rental"
              onClick={hrefTransition}
              legacyBehavior
            >
              <a className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
                Sewa Armada
              </a>
            </Link>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden  shadow-md">
          <img
            className="w-full h-[200px] object-cover object-center"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-primary">AVANZA</h2>

            <p className="font-semibold text-lg text-gray-500">
              IDR 150.000/hari
            </p>

            <div className="pt-3">
              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">Driver</p>
              </div>

              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">BBM</p>
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">
                  6-7 Penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pt-1 pb-5">
            <Link
              href="/car-rental?product=halo#form-rental"
              onClick={hrefTransition}
              legacyBehavior
            >
              <a className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
                Sewa Armada
              </a>
            </Link>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden  shadow-md">
          <img
            className="w-full h-[200px] object-cover object-center"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-primary">AVANZA</h2>

            <p className="font-semibold text-lg text-gray-500">
              IDR 150.000/hari
            </p>

            <div className="pt-3">
              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">Driver</p>
              </div>

              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">BBM</p>
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">
                  6-7 Penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pt-1 pb-5">
            <Link
              href="/car-rental?product=halo#form-rental"
              onClick={hrefTransition}
              legacyBehavior
            >
              <a className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
                Sewa Armada
              </a>
            </Link>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden  shadow-md">
          <img
            className="w-full h-[200px] object-cover object-center"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-primary">AVANZA</h2>

            <p className="font-semibold text-lg text-gray-500">
              IDR 150.000/hari
            </p>

            <div className="pt-3">
              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">Driver</p>
              </div>

              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">BBM</p>
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">
                  6-7 Penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pt-1 pb-5">
            <Link
              href="/car-rental?product=halo#form-rental"
              onClick={hrefTransition}
              legacyBehavior
            >
              <a className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
                Sewa Armada
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-20 mt-5 md:mx-20">
        <div className="rounded-lg overflow-hidden  shadow-md">
          <img
            className="w-full h-[350px] object-cover object-center"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-primary">AVANZA</h2>

            <p className="font-semibold text-lg text-gray-500">
              IDR 150.000/hari
            </p>

            <div className="pt-3">
              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">Driver</p>
              </div>

              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">BBM</p>
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">
                  6-7 Penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pt-1 pb-5">
            <Link
              href="/car-rental?product=halo#form-rental"
              onClick={hrefTransition}
              legacyBehavior
            >
              <a className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
                Sewa Armada
              </a>
            </Link>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden  shadow-md">
          <img
            className="w-full h-[350px] object-cover object-center"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
            loading="lazy"
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <h2 className="font-bold text-xl text-primary">AVANZA</h2>

            <p className="font-semibold text-lg text-gray-500">
              IDR 150.000/hari
            </p>

            <div className="pt-3">
              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">Driver</p>
              </div>

              <div className="flex items-center pb-1">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">BBM</p>
              </div>

              <div className="flex items-center">
                <span className="mr-2 text-lg text-teal-500">
                  <FaCheckCircle />
                </span>
                <p className="font-sans text-sm text-[#4F4F4F]">
                  6-7 Penumpang
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 pt-1 pb-5">
            <Link
              href="/car-rental?product=halo#form-rental"
              onClick={hrefTransition}
              legacyBehavior
            >
              <a className="bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
                Sewa Armada
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarCard;
