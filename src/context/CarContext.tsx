import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useAxios } from '@/hooks/useAxios';
import { CarRental } from '@/interfaces/carRental';

type ContextType = {
  car?: CarRental[];
  isLoading: boolean;
};

const defaultValue: ContextType = {
  isLoading: false,
};
const carContext = createContext<ContextType>(defaultValue);

export const CarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [car, setCar] = useState<CarRental[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const axios = useAxios();

  const getCar = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get('car-rental');
      setCar(data.car);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [axios]);

  useEffect(() => {
    getCar();
  }, [getCar]);

  return (
    <carContext.Provider value={{ car, isLoading }}>
      {children}
    </carContext.Provider>
  );
};
export default carContext;
