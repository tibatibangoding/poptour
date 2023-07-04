import { FC, useState } from 'react';

import { usePackagesTour } from '@/hooks/usePackagesTour';
import { useCar } from '@/hooks/useCar';
import { FormPemesananCustomTrip } from '@/interfaces/formPemesanan';
import { errorToast, successToast } from '@/lib/toastNotify';
import { formatCurrency } from '@/lib/formatCurrency';

const TripForm: FC = () => {
  const [formData, setFormData] = useState<FormPemesananCustomTrip>({
    fullName: '',
    emailAddress: '',
    days: '',
    jumlahPeserta: '',
    noWa: '',
    tglBerangkat: '',
    armada: '',
    paketWisata: '',
    notes: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { car } = useCar();
  const { packages } = usePackagesTour();

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
      formData.days !== '' &&
      formData.armada !== '' &&
      formData.noWa !== '' &&
      formData.tglBerangkat !== '' &&
      formData.jumlahPeserta !== '' &&
      formData.paketWisata !== ''
    ) {
      const phone = process.env.NEXT_PUBLIC_WHATSAPP;
      const walink2 = 'Halo POP Tour,';
      const walink3 =
        'Saya ingin booking kustom paket wisata dengan data diri sebagai berikut:';
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
        'Berapa Hari : ' +
        formData.days +
        '%0A' +
        'Jumlah Peserta : ' +
        formData.jumlahPeserta +
        '%0A' +
        'Nomor WhatsApp : ' +
        formData.noWa +
        '%0A' +
        'Tanggal Berangkat : ' +
        formData.tglBerangkat +
        '%0A' +
        'Armada : ' +
        formData.armada +
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
        days: '',
        jumlahPeserta: '',
        noWa: '',
        tglBerangkat: '',
        armada: '',
        paketWisata: '',
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
    <section className="shadow-md rounded-lg pb-9 bg-white">
      <div className="w-full  flex justify-center items-center">
        <img
          src="/assets/img/maps.png"
          alt="illustration"
          loading="lazy"
          className="w-56"
        />
      </div>

      <h2 className="font-semibold text-lg md:text-2xl text-center capitalize">
        Formulir Kustom Perjalanan
      </h2>

      <p className="max-w-md mx-auto font-normal text-lg md:text-base text-center text-gray-500 capitalize mb-7">
        Silahkan isi formulir dibawah untuk melakukan pemesanan Kustom
        Perjalanan.
      </p>

      <div className="w-full px-4 md:px-8">
        <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="fullName"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              value={formData.fullName}
              name="fullName"
              id="fullName"
              type="text"
              placeholder="Masukkan Nama Lengkap"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
              required
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
              onChange={handleChange}
              value={formData.emailAddress}
              name="emailAddress"
              id="email"
              type="email"
              placeholder="Masukkan Alamat Email"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
              required
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
              onChange={handleChange}
              value={formData.days}
              name="days"
              id="longTime"
              type="number"
              placeholder="Input berapa hari"
              min={1}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
              required
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
              onChange={handleChange}
              value={formData.jumlahPeserta}
              name="jumlahPeserta"
              id="sumPeople"
              type="number"
              placeholder="Input jumlah peserta"
              min={1}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              No. Telepon <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              value={formData.noWa}
              name="noWa"
              id="phone"
              type="tel"
              placeholder="Masukkan No. Telepon"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
              required
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Tanggal Berangkat <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              value={formData.tglBerangkat}
              name="tglBerangkat"
              id="date"
              type="date"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
              required
            />
          </div>

          <div>
            <label
              htmlFor="armada"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Armada <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.armada || ''}
              onChange={handleChange}
              name="armada"
              id="armada"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              required
            >
              <option defaultValue="Pilih Armada" selected disabled>
                -- Pilih Armada --
              </option>
              {car?.map((a, i) => (
                <option value={a.brand} key={i}>
                  {`${a.brand} => ${a.price}`}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="tourDestination"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Tujuan Wisata <span className="text-red-500">*</span>
            </label>
            <select
              onChange={handleChange}
              value={formData.paketWisata || ''}
              name="paketWisata"
              id="tourDestination"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              required
            >
              <option defaultValue="Pilih Tujuan Wisata" selected disabled>
                -- Pilih Tujuan Wisata --
              </option>
              {packages?.map((p, i) => (
                <option value={p.title} key={i}>
                  {`${p.title} => ${formatCurrency(p.price)}/pax`}
                </option>
              ))}
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
              onChange={handleChange}
              value={formData.notes}
              name="notes"
              id="message"
              placeholder="Masukkan Pesan Tambahan (opsional)"
              className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring resize-none"
            ></textarea>
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button
              className={`${
                isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
              } w-full rounded-lg bg-primary font-primary px-8 py-3 text-center text-sm font-semibold text-white hover:text-primary outline-none ring-primary/50 transition duration-100 hover:bg-secondary focus-visible:ring active:bg-secondary/80 md:text-base`}
              type="submit"
              disabled={isLoading ? true : false}
            >
              {isLoading ? 'Memuat...' : 'Pesan Sekarang'}
            </button>
          </div>

          <span className="text-sm text-red-500">*Wajib</span>
        </form>
      </div>
    </section>
  );
};

export default TripForm;
