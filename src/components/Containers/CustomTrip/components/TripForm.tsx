import { errorToast, successToast } from '@/lib/toastNotify';
import { FC, useState } from 'react';

const TripForm: FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    days: '',
    jumlahPeserta: '',
    noWa: '',
    tglBerangkat: '',
    armada: '',
    hotel: '',
    paketWisata: '',
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

  const handleSubmit = () => {
    setIsLoading(true);

    if (
      formData.fullName !== '' &&
      formData.emailAddress !== '' &&
      formData.days !== '' &&
      formData.armada !== '' &&
      formData.hotel !== '' &&
      formData.noWa !== '' &&
      formData.tglBerangkat !== '' &&
      formData.jumlahPeserta !== '' &&
      formData.paketWisata !== ''
    ) {
      const phone = '6282245103862';
      const walink2 = 'Halo POP Tour,';
      const walink3 =
        'Saya ingin booking custom paket wisata dengan data diri sebagai berikut:';
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
        'Name : ' +
        formData.fullName +
        '%0A' +
        'Email Address : ' +
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
        'Hotel : ' +
        formData.hotel +
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
        hotel: '',
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
        <img src="/assets/img/maps.png" alt="" className="w-56" />
      </div>
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
              onChange={handleChange}
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
              onChange={handleChange}
              name="emailAddress"
              id="email"
              type="email"
              placeholder="Masukkan Alamat Email"
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
              onChange={handleChange}
              name="days"
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
              onChange={handleChange}
              name="jumlahPeserta"
              id="sumPeople"
              type="number"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
            />
          </div>

          <div className="">
            <label
              htmlFor="phone"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              No. Telepon <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              name="noWa"
              id="phone"
              type="tel"
              placeholder="Masukkan No. Telepon"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary/50 transition duration-100 focus:ring"
            />
          </div>

          <div className="">
            <label
              htmlFor="date"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Tanggal Berangkat <span className="text-red-500">*</span>
            </label>
            <input
              onChange={handleChange}
              name="tglBerangkat"
              id="date"
              type="date"
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
              value={formData.armada || ''}
              onChange={handleChange}
              name="armada"
              id="product"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            >
              <option selected disabled>
                -- Pilih Armada --
              </option>
              <option selected>Pilih armada</option>
              <option value="Avanza">Avanza</option>
              <option value="Supra">Supra</option>
              <option value="Mustang">Mustang</option>
              <option value="Ferari">Ferari</option>
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
              onChange={handleChange}
              value={formData.hotel || ''}
              name="hotel"
              id="hotel"
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            >
              <option selected disabled>
                -- Pilih Hotel --
              </option>
              <option value="Bintang 1">Bintang 1</option>
              <option value="Bintang 2">Bintang 2</option>
              <option value="Bintang 3">Bintang 3</option>
              <option value="Bintang 4">Bintang 4</option>
              <option value="Bintang 5">Bintang 5</option>
            </select>
          </div>

          <div className="sm:col-span-2">
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
            >
              <option selected disabled>
                -- Pilih Tujuan Wisata --
              </option>
              <option value="Bromo">Bromo</option>
              <option value="Batu">Batu</option>
              <option value="Jogja">Jogja</option>
              <option value="Bali">Bali</option>
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
              name="notes"
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
          </div>

          <div className="flex items-center justify-between sm:col-span-2">
            <button
              className="w-full rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white hover:text-primary outline-none ring-primary/50 transition duration-100 hover:bg-secondary focus-visible:ring active:bg-secondary/80 md:text-base"
              type="submit"
              onClick={handleSubmit}
            >
              Pesan Sekarang
            </button>
          </div>

          <span className="text-sm text-red-500">*Wajib</span>
        </form>
      </div>
    </section>
  );
};

export default TripForm;
