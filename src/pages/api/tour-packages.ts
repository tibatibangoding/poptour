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
          img_src: 'https:://poptour.vercel.app/assets/img/tour/bromo.jpg',
          title: 'Paket Wisata Bromo',
          slug: 'paket-wisata-bromo',
          tags: [{ tag: 'Populer' }],
          address: 'Gunung Bromo, Jawa Timur',
          day: 1,
          price: 5000000,
        },
        {
          img_src:
            'https:://poptour.vercel.app/assets/img/tour/sendang-biru.jpg',
          title: 'Paket Wisata Pantai Sendang Biru',
          slug: 'paket-wisata-pantai-sendang-biru',
          tags: [{ tag: 'All in' }, { tag: 'All in' }],
          address: 'Pantai Sendang Biru, Jawa Timur',
          day: 1,
          price: 5000000,
        },
        {
          img_src:
            'https:://poptour.vercel.app/assets/img/tour/balekambang.jpg',
          title: 'Paket Wisata Pantai Balekambang',
          slug: 'paket-wisata-pantai-balekambang',
          tags: [{ tag: 'All in' }, { tag: 'All in' }],
          address: 'Pantai Balekambang, Jawa Timur',
          day: 1,
          price: 5000000,
        },
      ],
    });
  }
}
