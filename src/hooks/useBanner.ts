import { useContext } from 'react';

import BannerContext from '@/context/BannerContext';

export const useBanner = () => {
  const bannerContext = useContext(BannerContext);

  return bannerContext;
};
