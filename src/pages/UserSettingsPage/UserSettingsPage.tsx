import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
// import { SingleSelect } from "react-select-material-ui";
interface UserInputs {
  email: string;
  name: string;
  age: number;
  gender: string;
  user_pic: string;
  user_bio: string;
  max_distance: number;
  zipcode: number;
}

const UserSettingsPage: React.FC = (): React.ReactElement => {
  const { control, handleSubmit } = useForm<UserInputs>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      name: '',
      age: 0,
      gender: '',
      user_pic: '',
      user_bio: '',
      max_distance: 10,
      zipcode: 20036
    }
  });

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
      <Typography variant="h1" data-testid="dog-settings-header" sx={{ mb: 4 }}>
        User Settings
      </Typography>
      <Box
        sx={{
          width: '25%',
          maxWidth: '350px',
          minWidth: '250px'
        }}
      >
        <form onSubmit={handleSubmit(values => console.log(values))}>
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
            render={({ field }) => {
              return (
                <TextField
                  {...field}
                  label="Gender"
                  select
                  sx={{ mb: 2, width: '100%' }}
                  variant="outlined"
                >
                  {genderOptions.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              );
            }}
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
            render={({ field }) => (
              <TextField
                {...field}
                label="Max Distance (miles)"
                select
                sx={{ mb: 2, width: '100%' }}
                variant="outlined"
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
          />
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ mb: 2 }}
            type="submit"
          >
            Save
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default UserSettingsPage;
