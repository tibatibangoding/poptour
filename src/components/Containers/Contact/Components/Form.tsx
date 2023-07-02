import { FC, useState } from 'react';

import { FormContact } from '@/interfaces/formContact';
import { useAxios } from '@/hooks/useAxios';
import { errorToast, successToast } from '@/lib/toastNotify';

const Form: FC = () => {
  const [formData, setFormData] = useState<FormContact>({
    fullName: '',
    email: '',
    noWa: '',
    typeForm: '',
    notes: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axios = useAxios();

  const handleChange = (e: any) => {
    setFormData((prevalue) => {
      return {
        ...prevalue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { status } = await axios.post('contact', formData);

      if (status === 200) {
        setIsLoading(false);
        setFormData({
          fullName: '',
          email: '',
          noWa: '',
          typeForm: '',
          notes: '',
        });
        successToast('Kritik dan Saran berhasil dikirim!');
      }
    } catch (err) {
      setFormData({
        fullName: '',
        email: '',
        noWa: '',
        typeForm: '',
        notes: '',
      });
      errorToast('Oops! Terjadi kesalahan, silahkan coba lagi!');
    } finally {
      setIsLoading(false);
      setFormData({
        fullName: '',
        email: '',
        noWa: '',
        typeForm: '',
        notes: '',
      });
    }
  };

  return (
    <div className="container mx-auto py-10 lg:py-24">
      <div className="flex flex-wrap">
        <div className="mb-10 lg:mb-0 w-full px-4 lg:w-2/3">
          <h1 className="font-primary font-semibold text-2xl lg:text-3xl mb-2">
            Kritik dan Saran
          </h1>

          <form className="my-5" onSubmit={handleSubmit}>
            <div className="flex flex-wrap mb-2">
              <div className="w-full lg:pr-4 lg:w-1/2">
                <label
                  htmlFor="fullName"
                  className="text-gray-500 xl:text-lg leading-relaxed"
                >
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>

                <input
                  onChange={handleChange}
                  value={formData.fullName}
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Masukkan Nama Lengkap"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primary/70 my-2"
                  required
                />
              </div>

              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="email"
                  className="text-gray-500 xl:text-lg leading-relaxed"
                >
                  Email <span className="text-red-500">*</span>
                </label>

                <input
                  onChange={handleChange}
                  value={formData.email}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Masukkan Email"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primary/70 my-2"
                  required
                />
              </div>
            </div>

            <div className="mb-2">
              <label
                htmlFor="noWa"
                className="text-gray-500 xl:text-lg leading-relaxed"
              >
                No. Telepon <span className="text-red-500">*</span>
              </label>

              <input
                onChange={handleChange}
                value={formData.noWa}
                type="text"
                id="noWa"
                name="noWa"
                placeholder="Masukkan No. Telepon"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primary/70 my-2"
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="typeForm"
                className="text-gray-500 xl:text-lg leading-relaxed"
              >
                Jenis Formulir <span className="text-red-500">*</span>
              </label>

              <select
                onChange={handleChange}
                value={formData.typeForm || ''}
                name="typeForm"
                id="typeForm"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring my-2"
                required
              >
                <option defaultValue="Pilih Jenis Formulir" selected disabled>
                  -- Pilih Jenis Formulir --
                </option>
                <option value="Kritik">Kritik</option>
                <option value="Saran">Saran</option>
              </select>
            </div>

            <div className="mb-2">
              <div className="flex flex-col">
                <label
                  htmlFor="notes"
                  className="text-gray-500 xl:text-lg leading-relaxed"
                >
                  Kritik dan Saran <span className="text-red-500">*</span>
                </label>

                <textarea
                  onChange={handleChange}
                  value={formData.notes}
                  name="notes"
                  id="notes"
                  cols={8}
                  rows={8}
                  placeholder="Masukkan Kritik dan Saran"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:ring-primary/70 my-2"
                />
              </div>
            </div>

            <div className="mb-2">
              <button
                type="submit"
                className={`${
                  isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
                } w-full bg-primary hover:bg-secondary active:bg-secondary/70 focus-visible:ring ring-primary/30 text-white hover:text-primary text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-200 px-5 py-3`}
                disabled={isLoading ? true : false}
              >
                {isLoading ? 'Memuat...' : 'Kirim'}
              </button>
            </div>

            <span className="text-sm text-red-500">*Wajib</span>
          </form>
        </div>

        <div className="w-full px-4 lg:w-1/3">
          <div className="mb-5">
            <h1 className="font-primary font-semibold text-2xl lg:text-3xl mb-5">
              Jam Operasional
            </h1>

            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-between mb-2">
                <p className="text-gray-500 xl:text-lg leading-relaxed">
                  Senin - Sabtu
                </p>

                <p className="text-gray-500 xl:text-lg leading-relaxed">
                  07:00 - 21:00 WIB
                </p>
              </div>

              <div className="border mb-2" />

              <div className="flex flex-row items-center justify-between mb-5">
                <p className="text-gray-500 xl:text-lg leading-relaxed">
                  Minggu
                </p>

                <p className="text-gray-500 xl:text-lg leading-relaxed">
                  Tutup
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-primary font-semibold text-2xl lg:text-3xl mb-5">
              Kontak Kami
            </h1>

            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-between">
                <p className="text-gray-500 xl:text-lg place-content-between leading-relaxed">
                  WhatsApp:
                </p>
                <p className="text-gray-500 xl:text-lg place-content-between leading-relaxed">
                  <a
                    href="https://wa.me/6282245103862"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +62 822-4510-3862
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
