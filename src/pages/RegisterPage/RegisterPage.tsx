import { LoadingButton } from '@mui/lab';
import { Box, Link, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import logo from '../../assets/logo/logo.svg';
import { useRegistrationMutation } from '../../redux/auth/authApi';
import { FullWidthCenteredWrapper } from '../ReusableComponents';

const RegisterPage: React.FC = (): React.ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [lengthError, setLengthError] = useState(false);

  useEffect(() => {
    if (passwordConfirmation.length === 0) setPasswordError(false);
    if (password === passwordConfirmation) setPasswordError(false);
    if (password.length >= 8) setLengthError(false);
  }, [password, passwordConfirmation]);

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
        <TextField
          label="Email"
          variant="outlined"
          sx={{ mb: 2, width: '100%' }}
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          sx={{ mb: 2, width: '100%' }}
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
          error={lengthError}
          helperText={
            lengthError && <>Passwords must be at least 8 characters long.</>
          }
          onBlur={() => setLengthError(password.length < 8)}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          sx={{ mb: 2, width: '100%' }}
          error={passwordError}
          helperText={passwordError && <>Passwords do not match.</>}
          value={passwordConfirmation}
          onChange={e => setPasswordConfirmation(e.currentTarget.value)}
          onBlur={() =>
            password !== passwordConfirmation
              ? setPasswordError(true)
              : setPasswordError(false)
          }
        />
        <LoadingButton
          variant="contained"
          disabled={password !== passwordConfirmation}
          fullWidth
          size="large"
          sx={{ mb: 2 }}
          type="submit"
          loading={registrationStatus.isLoading}
        >
          Register
        </LoadingButton>
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
