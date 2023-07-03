import { FC, useState } from 'react';

import { FormPemesananDestinasi } from '@/interfaces/formPemesanan';
import { TourPackages } from '@/interfaces/tourPackages';
import { errorToast, successToast } from '@/lib/toastNotify';
import InputField from './InputField';

type FormProps = {
  data: TourPackages;
};

const FormDestination: FC<FormProps> = ({ data }) => {
  const [formData, setFormData] = useState<FormPemesananDestinasi>({
    fullName: '',
    emailAddress: '',
    noWa: '',
    tglBerangkat: '',
    jumlahPeserta: '',
    paketWisata: data.title,
    notes: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      formData.noWa !== '' &&
      formData.tglBerangkat !== '' &&
      formData.jumlahPeserta !== '' &&
      formData.paketWisata !== ''
    ) {
      const phone = process.env.NEXT_PUBLIC_WHATSAPP;
      const walink2 = 'Halo POP Tour,';
      const walink3 =
        'Saya ingin booking paket wisata dengan data diri sebagai berikut:';
      // const text_yes = 'Terkirim.';
      // const text_no = 'Isi semua Formulir lalu klik Send.';

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
        'Nomor WhatsApp : ' +
        formData.noWa +
        '%0A' +
        'Tanggal Berangkat : ' +
        formData.tglBerangkat +
        '%0A' +
        'Jumlah Peserta : ' +
        formData.jumlahPeserta +
        '%0A' +
        '%0A' +
        'Paket Wisata : ' +
        formData.paketWisata +
        '%0A' +
        'Catatan : ' +
        formData.notes +
        '%0A';

      setIsLoading(false);
      setFormData({
        fullName: '',
        emailAddress: '',
        noWa: '',
        tglBerangkat: '',
        jumlahPeserta: '',
        paketWisata: data.title,
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
    <form className="col-span-10 lg:col-span-3" onSubmit={handleSubmit}>
      <div className="w-full p-5 bg-gray-100 shadow-md rounded-xl flex flex-col">
        <div className="grid lg:grid-cols-2 gap-3">
          <InputField
            onchange={handleChange}
            title="Nama Lengkap"
            placeholder="Masukkan Nama Lengkap"
            type="text"
            name="fullName"
            value={formData.fullName}
          />

          <InputField
            onchange={handleChange}
            title="Alamat Email"
            placeholder="Masukkan Alamat Email"
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-3">
          <InputField
            onchange={handleChange}
            title="No. Telepon"
            placeholder="Masukkan No. Telepon"
            type="text"
            name="noWa"
            value={formData.noWa}
          />

          <InputField
            onchange={handleChange}
            title="Tanggal Berangkat"
            placeholder="Tanggal Berangkat"
            type="date"
            name="tglBerangkat"
            value={formData.tglBerangkat}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-3">
          <InputField
            onchange={handleChange}
            title="Banyak Peserta"
            placeholder="Banyak Peserta"
            type="text"
            name="jumlahPeserta"
            value={formData.jumlahPeserta}
          />

          <div className="mb-6">
            <label
              htmlFor="default-input"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Paket Wisata
            </label>
            <input
              placeholder="Paket Wisata"
              type="text"
              name="paketWisata"
              id="default-input"
              value={formData.paketWisata}
              required
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Catatan
          </label>
          <textarea
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Masukkan Pesan Tambahan (opsional)"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>

        <button
          className={`${
            isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
          } bg-primary hover:bg-secondary py-3 text-lg font-primary font-semibold rounded-xl text-white hover:text-primary transition ease-in-out duration-200 mt-5 w-full px-8 text-center outline-none ring-primary/50 focus-visible:ring active:bg-secondary/80 md:text-base`}
          type="submit"
          disabled={isLoading ? true : false}
        >
          {isLoading ? 'Memuat...' : 'Pesan'}
        </button>
      </div>
    </form>
  );
};

export default FormDestination;
