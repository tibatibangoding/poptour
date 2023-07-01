import type { NextApiRequest, NextApiResponse } from 'next';
import { BannerPromotion } from '@/interfaces/bannerPromotion';

type Data = {
  banner: BannerPromotion[];
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
          img_src: 'https://poptour.vercel.app/assets/img/poster/1.png',
          title: 'Banner Promotion',
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/poster/2.png',
          title: 'Banner Promotion',
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/poster/3.png',
          title: 'Banner Promotion',
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/poster/4.png',
          title: 'Banner Promotion',
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/poster/5.png',
          title: 'Banner Promotion',
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/poster/6.png',
          title: 'Banner Promotion',
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/poster/7.png',
          title: 'Banner Promotion',
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/poster/9.png',
          title: 'Banner Promotion',
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/poster/10.jpeg',
          title: 'Banner Promotion',
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/poster/11.jpeg',
          title: 'Banner Promotion',
        },
      ],
    });
  }
}
