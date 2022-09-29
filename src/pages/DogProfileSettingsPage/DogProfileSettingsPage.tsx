import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useGetDogQuery } from '../../redux/dog/dogApi';

interface IBreed {
  breed_id: number;
  breed_name: string;
}

interface ISize {
  size_id: number;
  size: string;
}

interface ITemperament {
  temperament_id: number;
  temperament_type: string;
}

interface IFormInput {
  petSex: string;
  petName: string;
  petAge: number;
  petBio: string;
  petBreed: string;
  petNeutered: boolean;
  petVaccinations: boolean;
  petSize: string;
  petTemperament: string;
}

const DogProfileSettingsPage: React.FC = (): React.ReactElement => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      petSex: '',
      petName: '',
      petAge: 0,
      petBreed: '',
      petBio: '',
      petVaccinations: false,
      petNeutered: false,
      petSize: '',
      petTemperament: ''
    }
  });

  const [reloadQuery, setReloadQuery] = useState(true);
  const useQueryResult = useGetDogQuery(reloadQuery, {
    refetchOnMountOrArgChange: true
  });
  console.log(useQueryResult);

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
  };

  const [breeds, setBreeds] = useState([
    { label: 'select breed', value: 'default' }
  ]);
  const [sizes, setSizes] = useState([
    { label: 'select size', value: 'default' }
  ]);
  const [temperaments, setTemperaments] = useState([
    { label: 'select size', value: 'default' }
  ]);

  useEffect(() => {
    fetch('http://sniffr-be.herokuapp.com/breeds')
      .then(response => response.json())
      .then(data => {
        const breedData = data.map((breed: IBreed) => ({
          label: breed.breed_name,
          value: breed.breed_id
        }));
        setBreeds(breedData);
      });

    fetch('http://sniffr-be.herokuapp.com/sizes')
      .then(response => response.json())
      .then(data => {
        const sizeData = data.map((size: ISize) => ({
          label: size.size,
          value: size.size_id
        }));
        setSizes(sizeData);
      });

    fetch('http://sniffr-be.herokuapp.com/temperaments')
      .then(response => response.json())
      .then(data => {
        const temperamentData = data.map((temperament: ITemperament) => ({
          label: temperament.temperament_type,
          value: temperament.temperament_id
        }));
        setTemperaments(temperamentData);
      });
  }, []);

  return (
    <Box sx={{ width: 300 }}>
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log(event);
        }}
      >
        <Stack spacing={4}>
          <Typography variant="h1" data-testid="dog-settings-header">
            Create Dog
          </Typography>
          <Avatar sx={{ width: 56, height: 56, bgcolor: deepPurple[500] }}>
            OP
          </Avatar>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                required
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
              />
            )}
            name="petName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Age"
                required
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
              />
            )}
            name="petAge"
            control={control}
            defaultValue={0}
            rules={{ required: true }}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Temperament"
                required
                select
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
              >
                {temperaments.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
            name="petTemperament"
            control={control}
            defaultValue=""
            rules={{ required: true }}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Breed"
                required
                select
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
              >
                {breeds.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
            name="petBreed"
            control={control}
            defaultValue=""
            rules={{ required: true }}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Size"
                required
                select
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
              >
                {sizes.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
            name="petSize"
            control={control}
            defaultValue=""
            rules={{ required: true }}
          />

          <FormLabel
            id="pet-sex-label"
            sx={{ fontWeight: 600, fontSize: 20 }}
            required
          >
            Sex
          </FormLabel>
          <Controller
            render={({ field }) => (
              <RadioGroup
                aria-labelledby="pet-sex-label"
                defaultValue="female"
                {...field}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio required />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio required />}
                  label="Male"
                />
              </RadioGroup>
            )}
            name="petSex"
            control={control}
            rules={{ required: true }}
          />
          <FormLabel
            id="pet-vaccinations-label"
            required
            sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}
          >
            Up to date on vaccinations?
          </FormLabel>
          <Controller
            render={({ field }) => (
              <RadioGroup
                aria-label="pet-vaccinations-label"
                defaultValue={false}
                {...field}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio required />}
                  label="Yes"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio required />}
                  label="No"
                />
              </RadioGroup>
            )}
            name="petVaccinations"
            control={control}
            rules={{ required: true }}
          />
          <FormLabel
            id="pet-neutered-label"
            required
            sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}
          >
            Is this dog neutered/spayed?
          </FormLabel>
          <Controller
            render={({ field }) => (
              <RadioGroup
                aria-label="pet-neutered-label"
                defaultValue={false}
                {...field}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio required />}
                  label="Yes"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio required />}
                  label="No"
                />
              </RadioGroup>
            )}
            name="petNeutered"
            control={control}
            rules={{ required: true }}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                id="pet-bio-field"
                label="Pet Bio"
                multiline
                rows={4}
              />
            )}
            name="petBio"
            control={control}
            defaultValue=""
            rules={{ required: true }}
          />
          <Button
            type="submit"
            data-testid="submit-button"
            variant="contained"
            fullWidth
            size="large"
            sx={{ mb: 2 }}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default DogProfileSettingsPage;
