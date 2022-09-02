import { Box, Button, TextField, Select, InputLabel, MenuItem, FormControl } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

interface UserInputs {
  username: string;
  email: string;
  name: string;
  age: number;
  gender: string;
  user_pic: string;
  user_bio: string;
  max_distance: number;
  zipcode: number;
  // creation_time: string;
  // last_update: string | null;
}

const UserSettingsPage: React.FC = (): React.ReactElement => {
  const { control, handleSubmit } = useForm<UserInputs>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      username: '',
      email: '',
      name: '',
      age: 0,
      gender: '',
      user_pic: '',
      user_bio: '',
      max_distance: 0,
      zipcode: 88901,
    }
  });

  return (
    <Box
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '25%',
          maxWidth: '350px',
          minWidth: '250px' }}
      >
        <form onSubmit={handleSubmit((values) => console.log(values))}>
          <Controller
            control={control}
            name="username"
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                label="Username"
                // TODO: Can users change their usernames?
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                inputRef={ref}
                helperText={
                  !!error && isTouched && <>This field <em>may</em> be required.</>
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
            name="email"
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                label="Email"
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                inputRef={ref}
                helperText={
                  !!error && isTouched && <>Please enter a valid email format.</>
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
              pattern: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/ 
            }}
          />
          <Controller
            control={control}
            name="name"
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState,
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
              formState,
            }) => (
              <TextField
                label="Age"
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                inputRef={ref}
                helperText={
                  !!error && isTouched && <>Users must be at least 18 years old.</>
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
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="gender">Gender</InputLabel>
            <Select labelId="gender"
              id="gender"
              label="Gender"
            >
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"non-binary"}>Non-binary</MenuItem>
              <MenuItem value={"trans"}>Transgender</MenuItem>
              <MenuItem value={"intersex"}>Intersex</MenuItem>
              <MenuItem value={"other"}>Other</MenuItem>
              <MenuItem value={"not-disclosed"}>Prefer not to say</MenuItem>
            </Select>
          </FormControl>
          <Controller
            control={control}
            name="user_pic"
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState,
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
              formState,
            }) => (
              <TextField
                label="User Bio"
                variant="outlined"
                multiline
                minRows={2}
                sx={{ mb: 2, width: '100%' }}
                inputRef={ref}
                helperText={
                  !!error && isTouched && <>Please say something about yourself.</>
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
              formState,
            }) => (
              <TextField
                label="Zip Code"
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                inputRef={ref}
                placeholder={"20036"}
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
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="max_distance">Max Distance (miles)</InputLabel>
            <Select labelId="max_distance"
              id="max_distance"
              label="Max Distance (miles)"
            >
              <MenuItem value={2}>2 miles</MenuItem>
              <MenuItem value={5}>5 miles</MenuItem>
              <MenuItem value={10}>10 miles</MenuItem>
              <MenuItem value={20}>20 miles</MenuItem>
              <MenuItem value={50}>50 miles</MenuItem>
              <MenuItem value={100}>100 miles</MenuItem>
            </Select>
          </FormControl>
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
}

export default UserSettingsPage;