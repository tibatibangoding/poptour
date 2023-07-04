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
          title: 'Paket Wisata Bromo',
          slug: 'paket-wisata-bromo-1-day',
          tags: [{ tag: 'Populer' }, { tag: 'Gunung Bromo' }],
          address: 'Malang, Jawa Timur',
          day: 1,
          price: 8000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/tiga-warna.jpg',
          title: 'Paket Wisata Pantai 3 Warna',
          slug: 'paket-wisata-pantai-3-warna-1-day',
          tags: [{ tag: 'Populer' }, { tag: 'Pantai' }],
          address: 'Malang, Jawa Timur',
          day: 1,
          price: 8000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/tumpak-sewu.jpg',
          title: 'Paket Wisata Tumpak Sewu',
          slug: 'paket-wisata-tumpak-sewu-1-day',
          tags: [{ tag: 'Populer' }, { tag: 'Air Terjun' }],
          address: 'Malang, Jawa Timur',
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
