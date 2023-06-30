import { FC, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

type Props = {
  product?: string | string[];
};

const CarForm: FC<Props> = ({ product }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section>
      <details
        className="p-4 rounded-lg shadow-md"
        open={product ? true : isOpen ? true : false}
      >
        <summary className="font-semibold text-xl leading-5 text-black flex items-center">
          Formulir Pemesanan Rental Mobil
          {/* open svg (plus) */}
          <button className="ml-auto" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="svg_open fill-current opacity-75 w-4 h-4 -mr-1 text-teal-500 hover:text-teal-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z" />
            </svg>
          </button>
          {/* close svg (minus) */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="svg_close fill-current opacity-75 w-4 h-4 -mr-1 text-teal-500 hover:text-teal-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M312 232C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H312zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z" />
            </svg>
          </button>
        </summary>

        <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2 my-10">
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Nama Lengkap <span className="text-red-500">*</span>
            </label>

            <input
              name="fullName"
              id="fullName"
              type="text"
              placeholder="Masukkan Nama Lengkap"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Alamat Email <span className="text-red-500">*</span>
            </label>

            <input
              name="email"
              id="email"
              type="email"
              placeholder="Masukkan Alamat Email"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="product"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Armada <span className="text-red-500">*</span>
            </label>

            {product ? (
              <div className="flex items-center gap-4">
                <input
                  name="product"
                  id="product"
                  type="text"
                  disabled={product ? true : false}
                  value={product}
                  className={`${
                    product ? 'cursor-not-allowed' : ''
                  } w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring`}
                />

                <Link href="/car-rental" legacyBehavior>
                  <a className="bg-red-500 hover:bg-red-600 p-2.5 rounded-md">
                    <FaTimes className="text-white" />
                  </a>
                </Link>
              </div>
            ) : (
              <select
                name="product"
                id="product"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              >
                <option selected disabled>
                  -- Pilih Armada --
                </option>
                <option value="1">Avanza</option>
                <option value="1">Avanza</option>
              </select>
            )}
          </div>

          <div>
            <label
              htmlFor="startDate"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Tanggal Menyewa <span className="text-red-500">*</span>
            </label>

            <input
              name="startDate"
              id="startDate"
              type="date"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="endDate"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Tanggal Selesai Menyewa <span className="text-red-500">*</span>
            </label>

            <input
              name="endDate"
              id="endDate"
              type="date"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Pesan Tambahan
            </label>

            <textarea
              name="message"
              id="message"
              placeholder="Masukkan Pesan Tambahan (opsional)"
              className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring resize-none"
            ></textarea>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button className="w-full rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Pesan Sekarang
            </button>
          </div>

          <span className="text-sm text-red-500">*Wajib</span>

          {/* <p className="text-xs text-gray-400">
            By signing up to our newsletter you agree to our{' '}
            <a
              href="#"
              className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Privacy Policy
            </a>
            .
          </p> */}
        </form>
      </details>
    </section>
  );
};

export default CarForm;
