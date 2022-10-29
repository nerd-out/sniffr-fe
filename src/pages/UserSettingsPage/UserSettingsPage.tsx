import { LoadingButton } from '@mui/lab';
import {
  Alert,
  Box,
  Grow,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import {
  useGetCurrentUserQuery,
  useUpdateUserMutation
} from '../../redux/user/userApi';

// TODO:
// Add "get current user" (GET /user) endpoint to backend
// Add useEffect if it isn't fetched automatically
// Add CenteredLoader component from /ReusableComponents
// Replace "age" field with "birthday"
// Ensure "x-authorization" header is set
// Add "ErrorAlert" from /ReusableComponents above "Save" button
// Add unit tests
// Fix "uncrontrolled to controlled" errors
// Fix default value warnings for select boxes

interface UserInputs {
  email: string;
  name: string;
  age: number;
  gender: string;
  user_pic: string;
  user_bio: string;
  zipcode: number;
  max_distance: number;
}

const UserSettingsPage: React.FC = (props: any): React.ReactElement => {
  const [reloadQuery, setReloadQuery] = useState(true);
  const useQueryResult = useGetCurrentUserQuery(reloadQuery, {
    refetchOnMountOrArgChange: true
  });
  const { control, handleSubmit } = useForm<UserInputs>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: useQueryResult?.data?.email,
      name: useQueryResult?.data?.name,
      age: useQueryResult?.data?.age,
      gender: useQueryResult?.data?.gender,
      user_pic: useQueryResult?.data?.user_pic,
      user_bio: useQueryResult?.data?.user_bio,
      zipcode: useQueryResult?.data?.zipcode,
      max_distance: useQueryResult?.data?.max_distance
    }
  });

  const [updateUser, updateUserStatus] = useUpdateUserMutation();

  const maxDistanceOptions = [
    { value: 2, label: '2 miles' },
    { value: 5, label: '5 miles' },
    { value: 10, label: '10 miles' },
    { value: 20, label: '20 miles' },
    { value: 50, label: '50 miles' },
    { value: 100, label: '100 miles' }
  ];

  const genderOptions = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'non-binary', label: 'Non-Binary' },
    { value: 'trans', label: 'Transgender' },
    { value: 'intersex', label: 'Intersex' },
    { value: 'other', label: 'Other' },
    { value: 'not-disclosed', label: 'Prefer not to say' }
  ];

  return (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography
        variant="h1"
        data-testid="user-settings-header"
        sx={{ mb: 4 }}
      >
        User Settings
      </Typography>
      <Box
        sx={{
          width: '25%',
          maxWidth: '350px',
          minWidth: '250px'
        }}
      >
        <form
          onSubmit={handleSubmit(values => {
            console.log(values);
            updateUser(values);
          })}
        >
          <Controller
            control={control}
            name="email"
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState
            }) => (
              <TextField
                label="Email"
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                inputRef={ref}
                helperText={
                  !!error &&
                  isTouched && <>Please enter a valid email format.</>
                }
                error={!!error && isTouched}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
              />
            )}
            rules={{
              required: true,
              pattern:
                /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
            }}
          />
          <Controller
            control={control}
            name="name"
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState
            }) => (
              <TextField
                label="Full Name"
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                inputRef={ref}
                helperText={
                  !!error && isTouched && <>This field is required.</>
                }
                error={!!error && isTouched}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
              />
            )}
            rules={{ required: true }}
          />
          <Controller
            control={control}
            name="age"
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState
            }) => (
              <TextField
                label="Age"
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                inputRef={ref}
                helperText={
                  !!error &&
                  isTouched && <>Users must be at least 18 years old.</>
                }
                error={!!error && isTouched}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
              />
            )}
            rules={{ required: true, min: 18 }}
          />
          <Controller
            name="gender"
            control={control}
            render={({ field, fieldState }) => {
              return (
                <TextField
                  {...field}
                  label="Gender"
                  select
                  sx={{ mb: 2, width: '100%' }}
                  variant="outlined"
                  helperText={
                    !!fieldState.error &&
                    fieldState.isTouched && <>This field is required.</>
                  }
                  error={!!fieldState.error && fieldState.isTouched}
                >
                  {genderOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              );
            }}
            rules={{ required: true }}
          />
          <Controller
            control={control}
            name="user_pic"
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState
            }) => (
              <TextField
                label="User Picture"
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                inputRef={ref}
                helperText={
                  !!error && isTouched && <>URL to picture. May be blank.</>
                }
                error={!!error && isTouched}
                onChange={onChange}
                onBlur={onBlur}
                placeholder="https://example.com/picture.jpg"
                value={value}
                name={name}
              />
            )}
            rules={{
              required: false,
              pattern: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg|webp)$/
            }}
          />
          <Controller
            control={control}
            name="user_bio"
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState
            }) => (
              <TextField
                label="User Bio"
                variant="outlined"
                multiline
                minRows={2}
                sx={{ mb: 2, width: '100%' }}
                inputRef={ref}
                helperText={
                  !!error &&
                  isTouched && <>Please say something about yourself.</>
                }
                error={!!error && isTouched}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
              />
            )}
            rules={{ required: true }}
          />
          <Controller
            control={control}
            name="zipcode"
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState
            }) => (
              <TextField
                label="Zip Code"
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                inputRef={ref}
                placeholder={'20036'}
                helperText={
                  !!error && isTouched && <>Please enter a valid zip code.</>
                }
                error={!!error && isTouched}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                name={name}
              />
            )}
            rules={{
              required: true,
              pattern: /^\d{5}(?:[-\s]\d{4})?$/
            }}
          />
          <Controller
            name="max_distance"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Max Distance (miles)"
                select
                sx={{ mb: 2, width: '100%' }}
                variant="outlined"
                helperText={
                  !!fieldState.error &&
                  fieldState.isTouched && <>This field is required.</>
                }
                error={!!fieldState.error && fieldState.isTouched}
                // inputProps={params.inputProps}
                // inputRef={params.ref}
              >
                {maxDistanceOptions.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
            rules={{ required: true }}
          />
          {updateUserStatus.isSuccess &&
            !updateUserStatus.isLoading &&
            !updateUserStatus.isError && (
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
            loading={updateUserStatus.isLoading}
          >
            Save
          </LoadingButton>
        </form>
      </Box>
    </Box>
  );
};

export default UserSettingsPage;
