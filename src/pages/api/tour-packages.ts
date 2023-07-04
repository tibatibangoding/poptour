import type { NextApiRequest, NextApiResponse } from 'next';

import { TourPackages } from '../../interfaces/tourPackages';

type Data = {
  tour?: TourPackages[];
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  if (method === 'GET') {
    res.status(200).json({
      tour: [
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/bromo.jpg',
          title: 'Paket Wisata Bromo Open Trip',
          slug: 'paket-wisata-bromo-1-day-open',
          tags: [{ tag: 'Populer' }, { tag: 'Gunung Bromo' }],
          address: 'Malang, Jawa Timur',
          desc: 'Ingin pergi berwisata ke gunung bromo sendirian? atau rame-rame dengan teman? Berwisata merupakan kebutuhan setiap individu. ada banyak tempat wisata di Kota Malang yang bagus untuk dikunjungi. salah satunya adalah wisata alam Gunung Bromo.',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'Jeep Bromo' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Sunrise Penanjakan' },
            { text: 'Bukit Widodaren' },
            { text: 'Kawah Bromo' },
            { text: 'Lautan Pasir' },
            { text: 'Savana Bukit Teletubbies' },
          ],
          rundown: [
            { time: '00.30', text: 'Penjemputan Area Kota Malang' },
            { time: '02.00', text: 'Prepare Basecamp' },
            { time: '04.00', text: 'Sunrise Penanjakan' },
            { time: '06.00', text: 'Explore Bromo' },
            { time: '10.30', text: 'Basecamp' },
          ],
          day: 1,
          price: 250000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/bromo.jpg',
          title: 'Paket Wisata Bromo Private Trip',
          slug: 'paket-wisata-bromo-1-day-private',
          tags: [{ tag: 'Populer' }, { tag: 'Gunung Bromo' }],
          address: 'Malang, Jawa Timur',
          desc: 'Ingin pergi berwisata ke gunung bromo sendirian? atau rame-rame dengan teman? Berwisata merupakan kebutuhan setiap individu. ada banyak tempat wisata di Kota Malang yang bagus untuk dikunjungi. salah satunya adalah wisata alam Gunung Bromo.',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'Jeep Bromo' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Sunrise Penanjakan' },
            { text: 'Bukit Widodaren' },
            { text: 'Kawah Bromo' },
            { text: 'Lautan Pasir' },
            { text: 'Savana Bukit Teletubbies' },
          ],
          rundown: [
            { time: '00.30', text: 'Penjemputan Area Kota Malang' },
            { time: '02.00', text: 'Prepare Basecamp' },
            { time: '04.00', text: 'Sunrise Penanjakan' },
            { time: '06.00', text: 'Explore Bromo' },
            { time: '10.30', text: 'Basecamp' },
          ],
          day: 1,
          price: 1500000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/tiga-warna.jpg',
          title: 'Paket Wisata Pantai 3 Warna Open Trip',
          slug: 'paket-wisata-pantai-3-warna-1-day-open',
          tags: [{ tag: 'Populer' }, { tag: 'Pantai' }],
          address: 'Malang, Jawa Timur',
          desc: '',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Sunrise Penanjakan' },
            { text: 'Bukit Widodaren' },
            { text: 'Kawah Bromo' },
            { text: 'Lautan Pasir' },
            { text: 'Savana Bukit Teletubbies' },
          ],
          rundown: [
            { time: '00.30', text: 'Penjemputan Area Kota Malang' },
            { time: '02.00', text: 'Prepare Basecamp' },
            { time: '04.00', text: 'Sunrise Penanjakan' },
            { time: '06.00', text: 'Explore Bromo' },
            { time: '10.30', text: 'Basecamp' },
          ],
          day: 1,
          price: 8000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/tiga-warna.jpg',
          title: 'Paket Wisata Pantai 3 Warna Private Trip',
          slug: 'paket-wisata-pantai-3-warna-1-day-private',
          tags: [{ tag: 'Populer' }, { tag: 'Pantai' }],
          address: 'Malang, Jawa Timur',
          desc: '',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Sunrise Penanjakan' },
            { text: 'Bukit Widodaren' },
            { text: 'Kawah Bromo' },
            { text: 'Lautan Pasir' },
            { text: 'Savana Bukit Teletubbies' },
          ],
          rundown: [
            { time: '00.30', text: 'Penjemputan Area Kota Malang' },
            { time: '02.00', text: 'Prepare Basecamp' },
            { time: '04.00', text: 'Sunrise Penanjakan' },
            { time: '06.00', text: 'Explore Bromo' },
            { time: '10.30', text: 'Basecamp' },
          ],
          day: 1,
          price: 8000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/tumpak-sewu.jpg',
          title: 'Paket Wisata Tumpak Sewu Open Trip',
          slug: 'paket-wisata-tumpak-sewu-1-day-open',
          tags: [{ tag: 'Populer' }, { tag: 'Air Terjun' }],
          address: 'Malang, Jawa Timur',
          desc: '',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Sunrise Penanjakan' },
            { text: 'Bukit Widodaren' },
            { text: 'Kawah Bromo' },
            { text: 'Lautan Pasir' },
            { text: 'Savana Bukit Teletubbies' },
          ],
          rundown: [
            { time: '00.30', text: 'Penjemputan Area Kota Malang' },
            { time: '02.00', text: 'Prepare Basecamp' },
            { time: '04.00', text: 'Sunrise Penanjakan' },
            { time: '06.00', text: 'Explore Bromo' },
            { time: '10.30', text: 'Basecamp' },
          ],
          day: 6,
          price: 2000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/tumpak-sewu.jpg',
          title: 'Paket Wisata Tumpak Sewu Private Trip',
          slug: 'paket-wisata-tumpak-sewu-1-day-private',
          tags: [{ tag: 'Populer' }, { tag: 'Air Terjun' }],
          address: 'Malang, Jawa Timur',
          desc: '',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Sunrise Penanjakan' },
            { text: 'Bukit Widodaren' },
            { text: 'Kawah Bromo' },
            { text: 'Lautan Pasir' },
            { text: 'Savana Bukit Teletubbies' },
          ],
          rundown: [
            { time: '00.30', text: 'Penjemputan Area Kota Malang' },
            { time: '02.00', text: 'Prepare Basecamp' },
            { time: '04.00', text: 'Sunrise Penanjakan' },
            { time: '06.00', text: 'Explore Bromo' },
            { time: '10.30', text: 'Basecamp' },
          ],
          day: 6,
          price: 2000000,
        },
      ],
    });
  } else {
    res.status(404).json({
      message: 'Not Found',
    });
  }
}
