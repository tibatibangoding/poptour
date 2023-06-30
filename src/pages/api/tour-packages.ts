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
          address: 'Bromo, Malang Jawa Timur',
          tags: [{ tag: 'All in' }, { tag: 'All in' }],
          title: 'Paket Wisata Bromo',
          day: 4,
          airport: 'Soekarno Hatta',
          price: '5.000.000',
          href: '/tour-packages/detail/paket-wisata-bromo',
        },
        {
          address: 'Bromo, Malang Jawa Timur',
          tags: [{ tag: 'All in' }, { tag: 'All in' }],
          title: 'Paket Wisata Pantai Sendang Biru',
          day: 4,
          airport: 'Soekarno Hatta',
          price: '5.000.000',
          href: '/tour-packages/detail/paket-wisata-pantai-sendang-biru',
        },
        {
          address: 'Bromo, Malang Jawa Timur',
          tags: [{ tag: 'All in' }, { tag: 'All in' }],
          title: 'Paket Wisata Pantai Balekambang',
          day: 4,
          airport: 'Soekarno Hatta',
          price: '5.000.000',
          href: '/tour-packages/detail/paket-wisata-pantai-balekambang',
        },
      ],
    });
  }
}
