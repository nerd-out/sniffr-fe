// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { LoadingButton } from '@mui/lab';
import { Box, Link, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg';
import { useLoginMutation } from '../../redux/auth/authApi';
import { FullWidthCenteredWrapper } from '../ReusableComponents';
import { ErrorAlert } from '../ReusableComponents/ErrorAlert';

interface LoginInputs {
  email: string;
  password: string;
}

const LoginPage: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<LoginInputs>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      password: '',
      email: ''
    }
  });

  const [login, loginStatus] = useLoginMutation();

  useEffect(() => {
    if (loginStatus.isError === true) {
      return;
    }
    if (loginStatus.isSuccess === true) {
      localStorage.setItem('x-access-token', loginStatus.data.token || '');
      navigate('/user-options');
    }
  }, [loginStatus, navigate]);

  return (
    <FullWidthCenteredWrapper>
      <Box sx={{ width: '25%', maxWidth: '350px', minWidth: '250px' }}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{ height: '100%', width: '100%' }}
        />
        <form
          onSubmit={handleSubmit((values: LoginInputs) => {
            login({
              email: values.email,
              password: values.password
            });
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
              formState
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
          {loginStatus.isError && (
            <ErrorAlert
              error={`Error ${loginStatus.error?.status}: ${loginStatus.error?.data?.error}`}
            />
          )}
          <LoadingButton
            variant="contained"
            fullWidth
            size="large"
            sx={{ mb: 2 }}
            type="submit"
            loading={loginStatus.isLoading}
          >
            Login
          </LoadingButton>
        </form>
        <Link component={RouterLink} to="/register">
          <Typography variant="body2">
            Don&apos;t have an account? Register here!
          </Typography>
        </Link>
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default LoginPage;
