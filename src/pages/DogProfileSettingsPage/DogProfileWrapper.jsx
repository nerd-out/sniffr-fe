import { useState } from 'react';

import { useGetDogQuery } from '../../redux/dog/dogApi';
import DogProfileSettingsPage from './DogProfileSettingsPage';

export const DogProfileWrapper = () => {
  const [reloadQuery, setReloadQuery] = useState(true);

  const useQueryResult = useGetDogQuery(reloadQuery, {
    refetchOnMountOrArgChange: true
  });

  return <DogProfileSettingsPage useQueryResult={useQueryResult} />;
};
