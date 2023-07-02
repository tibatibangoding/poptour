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
          slug: 'paket-wisata-bromo',
          tags: [{ tag: 'Populer' }, { tag: 'Gunung Bromo' }],
          address: 'Malang, Jawa Timur',
          day: 1,
          price: 5000000,
        },
        {
          img_src:
            'https://poptour.vercel.app/assets/img/tour/sendang-biru.jpg',
          title: 'Paket Wisata Pantai Sendang Biru',
          slug: 'paket-wisata-pantai-sendang-biru',
          tags: [{ tag: 'Populer' }, { tag: 'Pantai' }],
          address: 'Malang, Jawa Timur',
          day: 1,
          price: 5000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/balekambang.jpg',
          title: 'Paket Wisata Pantai Balekambang',
          slug: 'paket-wisata-pantai-balekambang',
          tags: [{ tag: 'Populer' }, { tag: 'Pantai' }],
          address: 'Malang, Jawa Timur',
          day: 1,
          price: 5000000,
        },
      ],
    });
  } else {
    res.status(404).json({
      message: 'Not Found',
    });
  }
}
