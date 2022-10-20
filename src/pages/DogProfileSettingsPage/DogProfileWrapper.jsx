import { useEffect, useState } from 'react';

import { useGetDogQuery } from '../../redux/dog/dogApi';
import { isObjectEmptyNullOrUndefined } from '../../utils';
import { CenteredLoader } from '../ReusableComponents/CenteredLoader';
import DogProfileSettingsPage from './DogProfileSettingsPage';

export const DogProfileWrapper = () => {
  const [reloadQuery, setReloadQuery] = useState(true);

  const useQueryResult = useGetDogQuery(reloadQuery, {
    refetchOnMountOrArgChange: true
  });

  const [breeds, setBreeds] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [temperaments, setTemperaments] = useState([]);

  useEffect(() => {
    fetch('http://sniffr-be.herokuapp.com/breeds')
      .then(response => response.json())
      .then(data => {
        const breedData = data.map(breed => ({
          label: breed.breed_name,
          value: breed.breed_id
        }));
        setBreeds(breedData);
      });

    fetch('http://sniffr-be.herokuapp.com/sizes')
      .then(response => response.json())
      .then(data => {
        const sizeData = data.map(size => ({
          label: size.size,
          value: size.size_id
        }));
        setSizes(sizeData);
      });

    fetch('http://sniffr-be.herokuapp.com/temperaments')
      .then(response => response.json())
      .then(data => {
        const temperamentData = data.map(temperament => ({
          label: temperament.temperament_type,
          value: temperament.temperament_id
        }));
        setTemperaments(temperamentData);
      });
  }, []);

  if (
    isObjectEmptyNullOrUndefined(useQueryResult.data) ||
    !breeds.length ||
    !sizes.length ||
    !temperaments.length
  ) {
    return <CenteredLoader isLoading={true} />;
  }

  return (
    <DogProfileSettingsPage
      useQueryResult={useQueryResult}
      breeds={breeds}
      sizes={sizes}
      temperaments={temperaments}
    />
  );
};
