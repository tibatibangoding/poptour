import { FC, useEffect, useRef, useState, useCallback } from 'react';

import { useAxios } from '@/hooks/useAxios';
import { usePackagesTour } from '@/hooks/usePackagesTour';
import { TourPackages } from '@/interfaces/tourPackages';
import { PageSEO } from '@/components/Common/SEO';
import { siteMetadata } from '@/data/siteMetadata';
import { errorToast, successToast } from '@/lib/toastNotify';

const ContainerReviews: FC = () => {
  const [data, setData] = useState<any>([]);
  const [formData, setFormData] = useState<any>({
    name: '',
    review: '',
    paketWisata: '',
  });
  const [image, setImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { packages } = usePackagesTour();

  const axios = useAxios();

  const fileInputRef = useRef<any>(null);

  const handleUpload = async () => {
    if (fileInputRef.current) {
      const file = fileInputRef.current.files[0];

      const dataImg = new FormData();
      dataImg.append('file', file);
      dataImg.append('upload_preset', 'poptour-img');

      const BASE_API = process.env.NEXT_PUBLIC_API_CLOUDINARY_URL;

      const { data } = await axios.post(BASE_API + '/image/upload', dataImg);

      setImage(data.secure_url);
    }
  };

  const handleChange = (e: any) => {
    setFormData((prevalue: any) => {
      return {
        ...prevalue,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const dataSubmit = {
      name: formData.name,
      review: formData.review,
      image: image,
      paket_wisata: formData.paketWisata,
    };

    const res = await axios.post('add-review', dataSubmit);

    const { status } = res;

    if (status === 200) {
      setFormData({
        name: '',
        review: '',
        paketWisata: '',
      });
      setImage('');
      getData();
      successToast('Hore! Ulasan Anda telah kami terima!');
    } else {
      setFormData({
        name: '',
        review: '',
        paketWisata: '',
      });
      setImage('');
      errorToast('Opps! Terjadi kesalahan.');
    }
  };

  const getData = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data, status } = await axios.get('get-review');

      if (status === 200) {
        setData(data.reviews);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [axios]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <PageSEO
        title="Ulasan - POP Tour"
        description={siteMetadata.description}
      />

      <div className="py-24 px-4 md:px-10 lg:px-32 bg-[#f6f6f6]">
        <div className="flex flex-col justify-center items-center mt-5 mb-10 md:mt-10 md:mb-14">
          <p className="font-primary font-semibold text-md lg:text-lg text-primary uppercase mb-2">
            Ulasan
          </p>

          <div>
            <h1 className="font-primary font-semibold text-xl md:text-3xl text-center capitalize">
              Masih ragu untuk liburan bersama kami?
            </h1>

            <h3 className="font-primary font-medium text-lg md:text-xl text-center text-gray-500 capitalize">
              Yuk dengerin apa kata pelanggan kami!
            </h3>
          </div>
        </div>

        {isLoading ? (
          <p className="flex items-center justify-center text-center text-xl mt-5">
            Memuat Data...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {data.map((a: any, i: number) => {
              return (
                <div
                  className="flex flex-col items-center bg-white rounded-xl drop-shadow-xl px-5 py-8"
                  key={i}
                >
                  <div className=" mb-5">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={
                        a.image
                          ? a.image
                          : 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png'
                      }
                      alt="ChitChat Logo"
                    />
                  </div>
                  <div className="flex flex-col items-center mb-2">
                    <p className="text-gray-900 leading-none text-lg font-semibold mb-2">
                      {a.name}
                    </p>
                    <p className="text-gray-500 leading-none font-medium text-sm text-center">
                      {a.paket_wisata}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm text-center italic">
                    &quot;{a.review}&quot;
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <div className="w-full bg-white rounded-xl drop-shadow-xl mt-10 p-5 md:p-20">
          <div className="w-full  flex justify-center items-center mb-5">
            <img
              src="/assets/img/review-ils.png"
              alt="illustration"
              loading="lazy"
              className="w-96"
            />
          </div>

          <h2 className="font-semibold text-lg md:text-2xl text-center capitalize">
            Formulir Review Wisata
          </h2>

          <p className="max-w-md mx-auto font-normal text-lg md:text-base text-center text-gray-500 capitalize mb-7">
            Silahkan isi formulir dibawah untuk mengngungkapkan pengalaman anda
            saat Perjalanan.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 "
                htmlFor="file_input"
              >
                Foto Profil
              </label>
              <input
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                id="file_input"
                type="file"
                ref={fileInputRef}
                onChange={handleUpload}
                value={image}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Masukkan Nama Lengkap"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="paketWisata"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Paket Wisata <span className="text-red-500">*</span>
              </label>
              <select
                id="paketWisata"
                name="paketWisata"
                onChange={handleChange}
                value={formData.paketWisata}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected disabled>
                  --- Pilih Paket Wisata ---
                </option>
                {packages?.map((a: TourPackages, i: number) => (
                  <option key={i} value={a.title}>
                    {a.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="review"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Pesan <span className="text-red-500">*</span>
              </label>
              <textarea
                id="review"
                name="review"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Write your thoughts here..."
                onChange={handleChange}
                value={formData.review}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`${
                isLoading ? 'cursor-not-allowed' : ''
              } rounded-lg bg-primary font-primary px-5 py-2.5 text-center text-sm font-semibold text-white hover:text-primary outline-none ring-primary/50 transition duration-100 hover:bg-secondary focus-visible:ring active:bg-secondary/80 md:text-base`}
              disabled={isLoading ? true : false}
            >
              {isLoading ? 'Memuat...' : 'Kirim'}
            </button>
          </form>
          <div className="text-sm text-red-500 mt-3">*Wajib</div>
        </div>
      </div>
    </>
  );
};

export default ContainerReviews;
