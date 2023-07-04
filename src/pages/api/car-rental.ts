import type { NextApiRequest, NextApiResponse } from 'next';

import { CarRental } from '@/interfaces/carRental';

type Data = {
  car?: CarRental[];
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
          img_src: '/assets/img/car/innova-reborn.png',
          brand: 'Innova Reborn',
          price: '950k/Day',
          include: 'BBM & driver',
          exclude: 'Parkir & makan driver',
        },
        {
          img_src: '/assets/img/car/hiace-premium.png',
          brand: 'Hiace Premium',
          price: '1500k/Day',
          include: 'BBM & driver',
          exclude: 'Parkir & makan driver',
        },
      ],
    });
  } else {
    return res.status(404).json({
      message: 'Not Found',
    });
  }
}
