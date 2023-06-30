import { FC } from 'react';

const TripForm: FC = () => {
  return (
    <section className="shadow-md rounded-lg py-9 bg-gray-100">
      <h2 className="font-semibold text-lg md:text-2xl text-center capitalize">
        Formulir Kustom Perjalanan
      </h2>
      <p className="max-w-md mx-auto font-normal text-lg md:text-base text-center text-gray-500 capitalize mb-7">
        Silahkan isi formulir dibawah untuk melakukan pemesanan Kustom
        Perjalanan.
      </p>

      <div className="w-full px-4 md:px-8">
        <form className="grid gap-4 sm:grid-cols-2">
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
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
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
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              No. Telepon <span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              id="phone"
              type="tel"
              placeholder="Masukkan No. Telepon"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
            />
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="date"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Tanggal Berangkat <span className="text-red-500">*</span>
            </label>
            <input
              name="date"
              id="date"
              type="date"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="longTime"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Berapa Lama <span className="text-red-500">*</span>
            </label>
            <input
              name="longTime"
              id="longTime"
              type="number"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="sumPeople"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Jumlah Orang <span className="text-red-500">*</span>
            </label>
            <input
              name="sumPeople"
              id="sumPeople"
              type="number"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
            />
          </div>

          <div>
            <label
              htmlFor="car"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Armada <span className="text-red-500">*</span>
            </label>
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
          </div>

          <div>
            <label
              htmlFor="hotel"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Hotel <span className="text-red-500">*</span>
            </label>
            <select
              name="hotel"
              id="hotel"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            >
              <option selected disabled>
                -- Pilih Hotel --
              </option>
              <option value="1">Bintang 1</option>
              <option value="2">Bintang 2</option>
              <option value="3">Bintang 3</option>
              <option value="4">Bintang 4</option>
              <option value="5">Bintang 5</option>
            </select>
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
              className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring resize-none"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="terms"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Syarat dan Ketentuan <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center">
              <input
                name="terms"
                id="terms"
                type="checkbox"
                className="rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-gray-800 sm:text-base"
              >
                Saya setuju dengan{' '}
                <a
                  href="#"
                  className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                >
                  Syarat dan Ketentuan
                </a>{' '}
                yang sudah ditetapkan.
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button className="w-full rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white hover:text-primary outline-none ring-primary/50 transition duration-100 hover:bg-secondary focus-visible:ring active:bg-secondary/80 md:text-base">
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
      </div>
    </section>
  );
};

export default TripForm;
