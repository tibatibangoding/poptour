import type { NextApiRequest, NextApiResponse } from 'next';

import { BannerPromotion } from '@/interfaces/bannerPromotion';

type Data = {
  banner?: BannerPromotion[];
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  if (method === 'GET') {
    return res.status(200).json({
      banner: [
        {
          img_src: '/assets/img/poster/1.jpg',
          title: 'Banner Promotion',
        },
        {
          img_src: '/assets/img/poster/2.jpg',
          title: 'Banner Promotion',
        },
        {
          img_src: '/assets/img/poster/3.jpg',
          title: 'Banner Promotion',
        },
      ],
    });
  } else {
    return res.status(404).json({
      message: 'Not Found',
    });
  }
}
