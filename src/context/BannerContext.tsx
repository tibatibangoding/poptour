import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { BannerPromotion } from '@/interfaces/bannerPromotion';
import { useAxios } from '@/hooks/useAxios';

type ContextType = {
  banner?: BannerPromotion[];
  isLoading: boolean;
};

const defaultValue: ContextType = {
  isLoading: false,
};

const BannerContext = createContext<ContextType>(defaultValue);

export const BannerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [banner, setBanner] = useState<BannerPromotion[] | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const axios = useAxios();

  const getBanner = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get('banner-promotion');
      setBanner(data.banner);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [axios]);

  useEffect(() => {
    getBanner();
  }, [getBanner]);

  return (
    <BannerContext.Provider value={{ banner, isLoading }}>
      {children}
    </BannerContext.Provider>
  );
};

export default BannerContext;
