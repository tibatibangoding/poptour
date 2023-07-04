import { useAxios } from '@/hooks/useAxios';
import { TourPackages } from '@/interfaces/tourPackages';
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

type ContextType = {
  packages?: TourPackages[];
  isLoading: boolean;
};

const defaultValue: ContextType = {
  isLoading: false,
};

const PackagesTourContext = createContext<ContextType>(defaultValue);

export const PackagesTourProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [packages, setPackages] = useState<TourPackages[] | undefined>(
    undefined
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const axios = useAxios();

  const getPackagesTour = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get('tour-packages');
      setPackages(data.tour);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [axios]);

  useEffect(() => {
    getPackagesTour();
  }, [getPackagesTour]);

  return (
    <PackagesTourContext.Provider value={{ packages, isLoading }}>
      {children}
    </PackagesTourContext.Provider>
  );
};

export default PackagesTourContext;
