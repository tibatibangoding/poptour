import type { NextApiRequest, NextApiResponse } from 'next';

import { carMenu } from '@/interfaces/carMenu';

type Data = {
  car?: carMenu[];
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  if (method === 'GET') {
    res.status(200).json({
      car: [
        {
          img_src: '/assets/img/car/avanza.png',
          brand: 'Avanza',
          price: '650k/Day',
          include: 'BBM & driver',
          exclude: 'Parkir & makan driver',
        },
        {
          img_src: '/assets/img/car/avanza.png',
          brand: 'Xenia',
          price: '550k/Day',
          include: 'BBM & driver',
          exclude: 'Parkir & makan driver',
        },
      ],
    });
  }
}
