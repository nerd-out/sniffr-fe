import { useState } from 'react';

import { useGetDogQuery } from '../../redux/dog/dogApi';
import { isObjectEmptyNullOrUndefined } from '../../utils';
import { CenteredLoader } from '../ReusableComponents/CenteredLoader';
import DogProfileSettingsPage from './DogProfileSettingsPage';

export const DogProfileWrapper = () => {
  const [reloadQuery, setReloadQuery] = useState(true);

  const useQueryResult = useGetDogQuery(reloadQuery, {
    refetchOnMountOrArgChange: true
  });

  if (isObjectEmptyNullOrUndefined(useQueryResult.data)) {
    return <CenteredLoader isLoading={true} />;
  }

  return <DogProfileSettingsPage useQueryResult={useQueryResult} />;
};
