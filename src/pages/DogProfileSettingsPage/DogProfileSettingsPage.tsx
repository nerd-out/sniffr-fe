// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
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
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { FullWidthCenteredWrapper } from '../ReusableComponents';

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

const DogProfileSettingsPage: React.FC = (props: any): React.ReactElement => {
  const { useQueryResult } = props;
  const { control, handleSubmit } = useForm({
    defaultValues: {
      age: useQueryResult?.data?.age,
      breed_id: useQueryResult?.data?.breed_id,
      dog_bio: useQueryResult?.data?.dog_bio,
      dog_id: useQueryResult?.data?.dog_id,
      dog_name: useQueryResult?.data?.dog_name,
      dog_pic: useQueryResult?.data?.dog_pic,
      is_fixed: useQueryResult?.data?.is_fixed,
      is_vaccinated: useQueryResult?.data?.is_vaccinated,
      sex: useQueryResult?.data?.sex,
      size_id: useQueryResult?.data?.size_id,
      temperament_id: useQueryResult?.data?.temperament_id
    }
  });

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
    <FullWidthCenteredWrapper>
      <Box sx={{ width: 300, mt: 4 }}>
        <form onSubmit={handleSubmit(values => console.log('values', values))}>
          <Stack spacing={4}>
            <Typography variant="h1" data-testid="dog-settings-header">
              Create Dog
            </Typography>
            <Controller
              name="dog_name"
              control={control}
              rules={{ required: true }}
              render={({
                field: { ref, onChange, onBlur, value, name },
                fieldState: { isTouched, isDirty, error },
                formState
              }) => (
                <TextField
                  label="Name"
                  variant="outlined"
                  sx={{ mb: 2, width: '100%' }}
                  value={value}
                  onChange={onChange}
                  inputRef={ref}
                  name={name}
                  onBlur={onBlur}
                  error={!!error}
                  helperText={
                    !!error && (
                      <Box sx={{ textTransform: 'capitalize' }}>
                        {error.type}
                      </Box>
                    )
                  }
                />
              )}
            />
            <Controller
              name="age"
              control={control}
              rules={{ required: true }}
              render={({
                field: { ref, onChange, onBlur, value, name },
                fieldState: { isTouched, isDirty, error },
                formState
              }) => (
                <TextField
                  label="Age"
                  variant="outlined"
                  sx={{ mb: 2, width: '100%' }}
                  value={value}
                  onChange={onChange}
                  inputRef={ref}
                  name={name}
                  onBlur={onBlur}
                  error={!!error}
                  helperText={
                    !!error && (
                      <Box sx={{ textTransform: 'capitalize' }}>
                        {error.type}
                      </Box>
                    )
                  }
                />
              )}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Temperament"
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
              name="temperament_id"
              control={control}
              rules={{ required: true }}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Breed"
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
              name="breed_id"
              control={control}
              rules={{ required: true }}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Size"
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
              name="size_id"
              control={control}
              rules={{ required: true }}
            />

            <FormLabel id="pet-sex-label">
              Sex
              <Controller
                render={({ field }) => (
                  <RadioGroup aria-labelledby="pet-sex-label" {...field}>
                    <FormControlLabel
                      value="Female"
                      control={<Radio size="small" />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio size="small" />}
                      label="Male"
                    />
                  </RadioGroup>
                )}
                name="sex"
                control={control}
                rules={{ required: true }}
              />
            </FormLabel>
            <FormLabel id="pet-vaccinations-label">
              Up to date on vaccinations?
              <Controller
                render={({ field }) => (
                  <RadioGroup aria-label="pet-vaccinations-label" {...field}>
                    <FormControlLabel
                      value={true}
                      control={<Radio size="small" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio size="small" />}
                      label="No"
                    />
                  </RadioGroup>
                )}
                name="is_vaccinated"
                control={control}
                rules={{ required: true }}
              />
            </FormLabel>
            <FormLabel id="pet-neutered-label">
              Is this dog neutered/spayed?
              <Controller
                name="is_fixed"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <RadioGroup aria-label="pet-neutered-label" {...field}>
                    <FormControlLabel
                      value={true}
                      control={<Radio size="small" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio size="small" />}
                      label="No"
                    />
                  </RadioGroup>
                )}
              />
            </FormLabel>
            <Controller
              name="dog_bio"
              control={control}
              rules={{ required: true }}
              render={({
                field: { ref, onChange, onBlur, value, name },
                fieldState: { isTouched, isDirty, error },
                formState
              }) => (
                <TextField
                  inputRef={ref}
                  id="pet-bio-field"
                  label="Pet Bio"
                  multiline
                  rows={4}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  name={name}
                  error={!!error}
                  helperText={
                    !!error && (
                      <Box sx={{ textTransform: 'capitalize' }}>
                        {error.type}
                      </Box>
                    )
                  }
                />
              )}
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
    </FullWidthCenteredWrapper>
  );
};

export default DogProfileSettingsPage;
