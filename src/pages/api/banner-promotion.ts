import type { NextApiRequest, NextApiResponse } from 'next';
import { BannerPromotion } from '@/interfaces/bannerPromotion';

type Data = {
  banner: BannerPromotion[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    banner: [
      { img_src: 'assets/img/poster/1.png', title: 'poster' },
      { img_src: 'assets/img/poster/2.png', title: 'poster' },
      { img_src: 'assets/img/poster/3.png', title: 'poster' },
      { img_src: 'assets/img/poster/4.png', title: 'poster' },
      { img_src: 'assets/img/poster/5.png', title: 'poster' },
      { img_src: 'assets/img/poster/6.png', title: 'poster' },
      { img_src: 'assets/img/poster/7.png', title: 'poster' },
      { img_src: 'assets/img/poster/9.png', title: 'poster' },
      { img_src: 'assets/img/poster/10.jpeg', title: 'poster' },
      { img_src: 'assets/img/poster/11.jpeg', title: 'poster' },
    ],
  });
}
