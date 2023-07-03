import type { NextApiRequest, NextApiResponse } from 'next';
import { TourPackages } from '../../interfaces/tourPackages';

type Data = {
  tour: TourPackages[];
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
          title: 'Paket Wisata Bromo',
          slug: 'paket-wisata-bromo-day-1',
          tags: [{ tag: 'Populer' }, { tag: 'Gunung Bromo' }],
          address: 'Malang, Jawa Timur',
          day: 1,
          price: 8000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/bromo.jpg',
          title: 'Paket Wisata Bromo',
          slug: 'paket-wisata-bromo-day-6',
          tags: [{ tag: 'Populer' }, { tag: 'Gunung Bromo' }],
          address: 'Malang, Jawa Timur',
          day: 6,
          price: 2000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/bromo.jpg',
          title: 'Paket Wisata Bromo',
          slug: 'paket-wisata-bromo-day-3',
          tags: [{ tag: 'Populer' }, { tag: 'Gunung Bromo' }],
          address: 'Malang, Jawa Timur',
          day: 3,
          price: 3000000,
        },
        {
          img_src:
            'https://poptour.vercel.app/assets/img/tour/sendang-biru.jpg',
          title: 'Paket Wisata Pantai Sendang Biru',
          slug: 'paket-wisata-pantai-sendang-biru-day-2',
          tags: [{ tag: 'Populer' }, { tag: 'Pantai' }],
          address: 'Malang, Jawa Timur',
          day: 2,
          price: 6000000,
        },
        {
          img_src:
            'https://poptour.vercel.app/assets/img/tour/sendang-biru.jpg',
          title: 'Paket Wisata Pantai Sendang Biru',
          slug: 'paket-wisata-pantai-sendang-biru-day-4',
          tags: [{ tag: 'Populer' }, { tag: 'Pantai' }],
          address: 'Malang, Jawa Timur',
          day: 4,
          price: 7000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/balekambang.jpg',
          title: 'Paket Wisata Pantai Balekambang',
          slug: 'paket-wisata-pantai-balekambang-day-5',
          tags: [{ tag: 'Populer' }, { tag: 'Pantai' }],
          address: 'Malang, Jawa Timur',
          day: 5,
          price: 8000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/balekambang.jpg',
          title: 'Paket Wisata Pantai Balekambang',
          slug: 'paket-wisata-pantai-balekambang-day-1',
          tags: [{ tag: 'Populer' }, { tag: 'Pantai' }],
          address: 'Malang, Jawa Timur',
          day: 1,
          price: 9000000,
        },
      ],
    });
  }
}
