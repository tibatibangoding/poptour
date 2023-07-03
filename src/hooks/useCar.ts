import { useContext } from 'react';

import CarContext from '@/context/CarContext';

export const useCar = () => {
  const carContext = useContext(CarContext);

  return carContext;
};
