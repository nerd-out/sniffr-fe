import { Box, Button, Link, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

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
  creation_time: string;
  last_update: string | null; // TODO: include?
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


  //  let now = new Date().toUTCString();

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
        </form>
      </Box>
    </Box>
  );
}

export default UserSettingsPage;