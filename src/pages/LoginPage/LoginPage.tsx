import { Box, Button, Link, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg';

interface LoginInputs {
  username: string;
  password: string;
}

const LoginPage: React.FC = (): React.ReactElement => {
  const { control, handleSubmit } = useForm<LoginInputs>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      password: '',
      username: '',
    },
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
      <Box sx={{ width: '25%', maxWidth: '350px', minWidth: '250px' }}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{ height: '100%', width: '100%' }}
        />
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
          <Controller
            control={control}
            name="password"
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                label="Password"
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
                type="password"
              />
            )}
            rules={{ required: true }}
          />
          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{ mb: 2 }}
            type="submit"
          >
            Login
          </Button>
        </form>
        <Link component={RouterLink} to="/register">
          Don&apos;t have an account? Register here!
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
