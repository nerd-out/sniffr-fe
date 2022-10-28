// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Box,
  FormControlLabel,
  FormLabel,
  Grow,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { useCreateDogMutation } from '../../redux/dog/dogApi';
import { ErrorAlert, FullWidthCenteredWrapper } from '../ReusableComponents';

const DogProfileSettingsPage: React.FC = (props: any): React.ReactElement => {
  const { useQueryResult, breeds, sizes, temperaments } = props;

  const { control, handleSubmit } = useForm({
    defaultValues: {
      age: useQueryResult?.data?.age,
      breed_id: useQueryResult?.data?.breed_id,
      dog_bio: useQueryResult?.data?.dog_bio,
      dog_id: useQueryResult?.data?.dog_id,
      dog_name: useQueryResult?.data?.dog_name,
      dog_pic: useQueryResult?.data?.dog_pic,
      is_fixed: useQueryResult?.data?.is_fixed.toString(),
      is_vaccinated: useQueryResult?.data?.is_vaccinated.toString(),
      sex: useQueryResult?.data?.sex,
      size_id: useQueryResult?.data?.size_id,
      temperament_id: useQueryResult?.data?.temperament_id,
      owner_id: useQueryResult?.data?.owner_id
    }
  });

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
          onSubmit={handleSubmit(values => {
            createOrEditDog({
              dog_name: values.dog_name,
              dog_id: values.dog_id,
              breed_id: values.breed_id,
              owner_id: values.owner_id,
              age: Number(values.age),
              sex: values.sex,
              is_vaccinated: values.is_vaccinated === 'true' ? true : false,
              is_fixed: values.is_fixed === 'true' ? true : false,
              dog_bio: values.dog_bio,
              dog_pic: '',
              activities: [],
              temperament_id: values.temperament_id,
              size_id: values.size_id
            });
          })}
        >
          <Stack spacing={4}>
            <Controller
              name="dog_name"
              control={control}
              rules={{ required: true }}
              render={({
                field: { ref, onChange, onBlur, value, name },
                fieldState: { isTouched, isDirty, error }
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
                  istouched={isTouched.toString()}
                  isdirty={isDirty.toString()}
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
                fieldState: { isTouched, isDirty, error }
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
                  istouched={isTouched.toString()}
                  isdirty={isDirty.toString()}
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
              name="size_id"
              control={control}
              rules={{ required: true }}
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
            />
            <Controller
              name="sex"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <FormLabel id="pet-sex-label">
                  Sex
                  <RadioGroup
                    aria-labelledby="pet-sex-label"
                    inputRef={ref}
                    onChange={onChange}
                    name={name}
                    value={value}
                    onBlur={onBlur}
                  >
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
                </FormLabel>
              )}
            />
            <Controller
              name="is_vaccinated"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <FormLabel id="pet-vaccinations-label">
                  Up to date on vaccinations?
                  <RadioGroup
                    aria-label="pet-vaccinations-label"
                    inputRef={ref}
                    onChange={onChange}
                    name={name}
                    value={value}
                    onBlur={onBlur}
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
                </FormLabel>
              )}
            />
            <Controller
              name="is_fixed"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <FormLabel id="pet-neutered-label">
                  Is this dog neutered/spayed?
                  <RadioGroup
                    aria-label="pet-neutered-label"
                    inputRef={ref}
                    onChange={onChange}
                    name={name}
                    value={value}
                    onBlur={onBlur}
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
                </FormLabel>
              )}
            />
            <Controller
              name="dog_bio"
              control={control}
              rules={{ required: true }}
              render={({
                field: { ref, onChange, onBlur, value, name },
                fieldState: { isTouched, isDirty, error }
              }) => (
                <TextField
                  label="Pet Bio"
                  multiline
                  rows={4}
                  value={value}
                  onChange={onChange}
                  inputRef={ref}
                  name={name}
                  onBlur={onBlur}
                  error={!!error}
                  istouched={isTouched.toString()}
                  isdirty={isDirty.toString()}
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
            {createOrEditDogStatus.isSuccess &&
              !createOrEditDogStatus.isLoading &&
              !createOrEditDogStatus.isError && (
                <Grow in={true}>
                  <Alert severity="success" sx={{ mt: 0, mb: 0 }}>
                    Success!
                  </Alert>
                </Grow>
              )}
            <LoadingButton
              variant="contained"
              fullWidth
              size="large"
              sx={{ mb: 2 }}
              type="submit"
              loading={createOrEditDogStatus.isLoading}
            >
              Submit
            </LoadingButton>
          </Stack>
        </form>
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default DogProfileSettingsPage;
