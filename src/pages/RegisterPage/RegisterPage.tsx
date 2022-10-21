// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { LoadingButton } from '@mui/lab';
import { Alert, Box, Link, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg';
import { useRegistrationMutation } from '../../redux/auth/authApi';
import { ErrorAlert, FullWidthCenteredWrapper } from '../ReusableComponents';

const RegisterPage: React.FC = (): React.ReactElement => {
  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  });

  const [registration, registrationStatus] = useRegistrationMutation();

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
          onSubmit={handleSubmit(({ email, password }) => {
            registration({
              email,
              password
            });
          })}
        >
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }}
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState
            }) => (
              <TextField
                label="Email"
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                value={value}
                onChange={onChange}
                inputRef={ref}
                error={!!error}
                helperText={error && 'Invalid email'}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: true, minLength: 4 }}
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState
            }) => (
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                value={value}
                onChange={onChange}
                name={name}
                inputRef={ref}
                error={!!error}
                helperText={
                  error && 'Password must be a minimum of 8 characters long'
                }
                // onBlur={() => setLengthError(password.length < 8)}
              />
            )}
          />
          <Controller
            control={control}
            name="passwordConfirmation"
            rules={{
              required: true,
              minLength: 4
              // validate: currentInputValue =>
              //   currentInputValue === formValues.password
            }}
            render={({
              field: { ref, onChange, onBlur, value, name },
              fieldState: { isTouched, isDirty, error },
              formState
            }) => (
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
                value={value}
                error={!!error}
                helperText={error && 'Passwords must match'}
                // onBlur={() =>
                //   password !== passwordConfirmation
                //     ? setPasswordError(true)
                //     : setPasswordError(false)
                // }
                onChange={onChange}
              />
            )}
          />

          {registrationStatus.isError && (
            <ErrorAlert error={registrationStatus.error.data.error} />
          )}
          {registrationStatus.isSuccess && (
            <Alert severity="success" sx={{ marginBottom: 2 }}>
              Success!
            </Alert>
          )}
          <LoadingButton
            variant="contained"
            // disabled={password !== passwordConfirmation}
            fullWidth
            size="large"
            sx={{ mb: 2 }}
            type="submit"
            loading={registrationStatus.isLoading}
          >
            Register
          </LoadingButton>
        </form>
        <Link component={RouterLink} to="/login">
          <Typography variant="body2">
            Already have an account? Login here!
          </Typography>
        </Link>
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default RegisterPage;
