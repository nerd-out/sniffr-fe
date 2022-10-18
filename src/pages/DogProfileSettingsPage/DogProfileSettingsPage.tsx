// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  Box,
  Button,
  FormControl,
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

import { useCreateDogMutation } from '../../redux/dog/dogApi';
import { ErrorAlert, FullWidthCenteredWrapper } from '../ReusableComponents';

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
      temperament_id: useQueryResult?.data?.temperament_id,
      owner_id: useQueryResult?.data?.owner_id
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

  const [createOrEditDog, createOrEditDogStatus] = useCreateDogMutation();

  return (
    <FullWidthCenteredWrapper>
      <Box sx={{ width: 300, mb: 4 }}>
        <Typography
          variant="h1"
          data-testid="dog-settings-header"
          sx={{ mb: 4 }}
        >
          Create Dog
        </Typography>
        <form
          onSubmit={handleSubmit(values =>
            createOrEditDog({
              dog_name: values.dog_name,
              dog_id: values.dog_id,
              breed_id: values.breed_id,
              owner_id: values.owner_id,
              age: Number(values.age),
              sex: values.sex,
              is_vaccinated: Boolean(values.is_vaccinated),
              is_fixed: Boolean(values.is_fixed),
              dog_bio: values.dog_bio,
              dog_pic: ''
            })
          )}
        >
          <Stack spacing={4}>
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
                  isTouched={isTouched}
                  isDirty={isDirty}
                  {...formState}
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
              name="temperament_id"
              control={control}
              rules={{ required: true }}
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
            />
            <Controller
              name="breed_id"
              control={control}
              rules={{ required: true }}
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
            <Controller
              name="sex"
              control={control}
              rules={{ required: true }}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState
              }) => (
                <FormControl
                  inputRef={ref}
                  onChange={onChange}
                  name={name}
                  value={value}
                >
                  <FormLabel id="pet-sex-label">Sex</FormLabel>
                  <RadioGroup aria-labelledby="pet-sex-label" value={value}>
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
                </FormControl>
              )}
            />
            <Controller
              name="is_vaccinated"
              control={control}
              rules={{ required: true }}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState
              }) => (
                <FormControl
                  inputRef={ref}
                  onChange={onChange}
                  name={name}
                  value={value}
                >
                  <FormLabel id="pet-vaccinations-label">
                    Up to date on vaccinations?
                  </FormLabel>
                  <RadioGroup
                    aria-label="pet-vaccinations-label"
                    value={value}
                    name={name}
                  >
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
                </FormControl>
              )}
            />
            <Controller
              name="is_fixed"
              control={control}
              rules={{ required: true }}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState
              }) => (
                <FormControl
                  inputRef={ref}
                  onChange={onChange}
                  name={name}
                  value={value}
                >
                  <FormLabel id="pet-neutered-label">
                    Is this dog neutered/spayed?
                  </FormLabel>
                  <RadioGroup
                    aria-label="pet-neutered-label"
                    value={value}
                    name={name}
                  >
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
                </FormControl>
              )}
            />
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
            {useQueryResult.isError && !useQueryResult.isLoading && (
              <ErrorAlert error={useQueryResult.data.error} />
            )}
            {createOrEditDogStatus.isError &&
              !createOrEditDogStatus.isLoading && (
                <ErrorAlert
                  error={
                    createOrEditDogStatus.error.error ||
                    createOrEditDogStatus.error.data.error
                  }
                />
              )}
            <Button
              type="submit"
              data-testid="submit-button"
              variant="contained"
              fullWidth
              size="large"
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
