import { usePackagesTour } from '@/hooks/usePackagesTour';
import { TourPackages } from '@/interfaces/tourPackages';
import { errorToast, successToast } from '@/lib/toastNotify';

import Head from 'next/head';
import React, { use, useEffect, useRef, useState } from 'react';

const ContainerReviews = () => {
  const [data, setData] = useState<any>([]);
  const [formData, setFormData] = useState<any>({
    name: '',
    review: '',
    paketWisata: '',
  });
  const [image, setImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const { packages } = usePackagesTour();

  const fileInputRef = useRef<any>(null);

  const handleUpload = async () => {
    if (fileInputRef.current) {
      const file = fileInputRef.current.files[0];

      const dataImg = new FormData();
      dataImg.append('file', file);
      dataImg.append('upload_preset', 'poptour-img');

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dekcrxcff/image/upload`,
        {
          method: 'POST',
          body: dataImg,
        }
      );

      const data = await response.json();
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

  const handleSubmit = () => {
    fetch('/api/add-review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        review: formData.review,
        image: image,
        paket_wisata: formData.paketWisata,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        successToast('Berhasil Riview!');
      })
      .catch((err) => {
        errorToast('Gagal Review!');
      });
  };

  const getData = () => {
    fetch('/api/get-review', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.reviews);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        />
      </Head>

      <div className="py-24 px-5 md:px-10 lg:px-32 bg-[#f6f6f6]">
        
        <div className="w-full  bg-white rounded-xl drop-shadow-xl mt-10 p-5 md:p-20">
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
            Silahkan isi formulir dibawah untuk mengngungkapkan pengalaman anda saat
            Perjalanan.
          </p>
          <form>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 "
                htmlFor="file_input"
              >
                Photo Profile
              </label>
              <input
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                id="file_input"
                type="file"
                ref={fileInputRef}
                onChange={handleUpload}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Username
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="name@flowbite.com"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                paket wisata
              </label>
              <select
                id="countries"
                name="paketWisata"
                onChange={handleChange}
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
                Your Review
              </label>
              <textarea
                id="review"
                name="review"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Write your thoughts here..."
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </form>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {data.map((item: any) => {
              return (
                <div className="flex flex-col items-center bg-white rounded-xl drop-shadow-xl p-10">
                  <div className=" mb-5">
                    <img
                      className="w-32 h-32 rounded-full"
                      src={
                        item.image
                          ? item.image
                          : 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png'
                      }
                      alt="ChitChat Logo"
                    />
                  </div>
                  <div className="flex  flex-col items-center mb-6">
                    <p className="text-gray-900 leading-none text-lg font-semibold mb-3">
                      {item.name}
                    </p>
                    <p className="text-gray-500 leading-none  font-medium mb-3 text-center">
                      {item.paket_wisata}
                    </p>
                  </div>
                  <p className="text-gray-600 text-center">{item.review}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="flex items-center justify-center text-black text-4xl">
            Memuat Data...
          </p>
        )}
      </div>
    </div>
  );
};

export default ContainerReviews;
