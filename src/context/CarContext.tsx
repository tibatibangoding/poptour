import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useAxios } from '@/hooks/useAxios';
import { carMenu } from '@/interfaces/carMenu';

type ContextType = {
  car?: carMenu[];
  isLoading: boolean;
  setCar: Dispatch<SetStateAction<carMenu[] | undefined>>;
};

const defaultValue: ContextType = {
  isLoading: false,
  setCar: () => null,
};
const carContext = createContext<ContextType>(defaultValue);

export const CarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [car, setCar] = useState<carMenu[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const axios = useAxios();

  const getCar = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get('car-menu');
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
    <carContext.Provider value={{ car, isLoading, setCar }}>
      {children}
    </carContext.Provider>
  );
};
export default carContext;
