import PackagesTourContext from '@/context/PackagesTourContext';

import { useContext } from 'react';

export const usePackagesTour = () => {
  const packagesTourContext = useContext(PackagesTourContext);

  return packagesTourContext;
};
