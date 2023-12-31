import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

import { useCar } from '@/hooks/useCar';
import { FormPemesananRentalMobil } from '@/interfaces/formPemesanan';
import { errorToast, successToast } from '@/lib/toastNotify';

const CarForm: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormPemesananRentalMobil>({
    fullName: '',
    emailAddress: '',
    tglPemesanan: '',
    tglSelesai: '',
    armada: '',
    notes: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { car } = useCar();

  const router = useRouter();
  const { armada } = router.query;

  useEffect(() => {
    if (armada) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        armada: armada.toString(),
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        armada: '',
      }));
    }
  }, [armada]);

  const handleChange = (e: any) => {
    setFormData((prevalue) => {
      return {
        ...prevalue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      formData.fullName !== '' &&
      formData.emailAddress !== '' &&
      formData.tglPemesanan !== '' &&
      formData.tglSelesai !== '' &&
      formData.armada !== ''
    ) {
      const phone = process.env.NEXT_PUBLIC_WHATSAPP;
      const walink2 = 'Halo POP Tour,';
      const walink3 =
        'Saya ingin Rental Mobil dengan data diri sebagai berikut:';

      let walink = 'https://api.whatsapp.com/send';
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        walink = 'whatsapp://send';
      }

      const blanter_whatsapp =
        walink +
        '?phone=' +
        phone +
        '&text=' +
        walink2 +
        '%0A' +
        walink3 +
        '%0A%0A' +
        'Nama Lengkap : ' +
        formData.fullName +
        '%0A' +
        'Alamat Email : ' +
        formData.emailAddress +
        '%0A' +
        'Tanggal Pemesanan : ' +
        formData.tglPemesanan +
        '%0A' +
        'Tanggal Selesai : ' +
        formData.tglSelesai +
        '%0A' +
        'Armada : ' +
        formData.armada +
        '%0A' +
        '%0A' +
        'Catatan : ' +
        formData.notes +
        '%0A';

      setIsLoading(false);
      setFormData({
        fullName: '',
        emailAddress: '',
        tglPemesanan: '',
        tglSelesai: '',
        armada: '',
        notes: '',
      });
      window.open(blanter_whatsapp, '_blank');
      successToast('Pesanan Anda telah diterima!');
    } else {
      setIsLoading(false);
      errorToast('Formulir harus terisi penuh!');
    }
  };

  return (
    <section>
      <details
        className="p-4 rounded-lg shadow-md"
        open={armada ? true : isOpen ? true : false}
      >
        <summary className="font-semibold text-xl leading-5 text-black flex items-center">
          Formulir Pemesanan Rental Mobil
          {/* open svg (plus) */}
          <button className="ml-auto" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="svg_open fill-current opacity-75 w-4 h-4 -mr-1 text-blue-500 hover:text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z" />
            </svg>
          </button>
          {/* close svg (minus) */}
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="svg_close fill-current opacity-75 w-4 h-4 -mr-1 text-blue-500 hover:text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M312 232C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H312zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z" />
            </svg>
          </button>
        </summary>
        <div className="p-5 md:py-20 md:px-32 rounded-2xl mt-5">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="nama_lengkap"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.fullName}
                  name="fullName"
                  type="text"
                  id="nama_lengkap"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                  placeholder="Masukkan Nama Lengkap"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="alamat_email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Alamat Email <span className="text-red-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.emailAddress}
                  name="emailAddress"
                  type="email"
                  id="alamat_email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Masukkan Alamat Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="tanggal_pesan"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Tanggal Pesan <span className="text-red-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.tglPemesanan}
                  name="tglPemesanan"
                  type="date"
                  id="tanggal_pesan"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="tanggal_selesai"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Tanggal Selesai <span className="text-red-500">*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.tglSelesai}
                  name="tglSelesai"
                  type="date"
                  id="tanggal_selesai"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>
            {armada ? (
              <div className="mb-6">
                <label
                  htmlFor="armada"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Armada <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <input
                    onChange={() =>
                      setFormData((prevValue) => ({
                        ...prevValue,
                        armada: armada.toString(),
                      }))
                    }
                    name="armada"
                    type="text"
                    id="armada"
                    className={`${
                      armada ? 'cursor-not-allowed' : ''
                    }bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                    placeholder="Masukkan Armada"
                    disabled={armada ? true : false}
                    value={armada}
                    required
                  />
                  <Link href="/car-rental" legacyBehavior>
                    <a className="bg-red-600 hover:bg-red-800 p-2.5 rounded-md ">
                      <FaTimes className="text-white" />
                    </a>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <label
                  htmlFor="armada"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Armada <span className="text-red-500">*</span>
                </label>
                <select
                  onChange={(e) =>
                    setFormData((prevValue) => ({
                      ...prevValue,
                      armada: e.target.value,
                    }))
                  }
                  value={formData.armada}
                  name="armada"
                  id="armada"
                  className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected>-- Pilih Armada --</option>
                  {car?.map((a, i) => (
                    <option key={i} value={a.brand}>
                      {`${a.brand} => ${a.price}`}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="mb-8">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Catatan
              </label>
              <textarea
                id="message"
                className="h-40 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Masukkan Pesan Tambahan (opsional)"
                onChange={handleChange}
                value={formData.notes}
                name="notes"
              />
            </div>

            <button
              className={`${
                isLoading ? 'cursor-not-allowed' : ''
              } w-full rounded-lg bg-primary font-primary px-8 py-3 text-center text-sm font-semibold text-white hover:text-primary outline-none ring-primary/50 transition duration-100 hover:bg-secondary focus-visible:ring active:bg-secondary/80 md:text-base`}
              type="submit"
              disabled={isLoading ? true : false}
            >
              {isLoading ? 'Memuat...' : 'Pesan Sekarang'}
            </button>
          </form>
          <div className="text-sm text-red-500 mt-3">*Wajib</div>
        </div>
      </details>
    </section>
  );
};

export default CarForm;
