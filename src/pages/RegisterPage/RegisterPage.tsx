import { LoadingButton } from '@mui/lab';
import { Box, Link, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg';
import { useRegisterMutation } from '../../redux/auth/authApi';
import FullWidthCenteredWrapper from '../ReusableComponents';

const RegisterPage: React.FC = (): React.ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [passError, setPassError] = useState(false);
  const [lengthError, setLengthError] = useState(false);

  useEffect(() => {
    if (password2.length === 0) setPassError(false);
    if (password === password2) setPassError(false);
    if (password.length >= 8) setLengthError(false);
  }, [password, password2]);

  const [register, registerStatus] = useRegisterMutation();
  
  return (
    <FullWidthCenteredWrapper>
      <Box sx={{ width: '25%', maxWidth: '350px', minWidth: '250px' }}>
        <Box /* sniffr logo box */
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
          error={passError}
          helperText={passError && <>Passwords do not match.</>}
          value={password2}
          onChange={e => setPassword2(e.currentTarget.value)}
          onBlur={() =>
            password !== password2 ? setPassError(true) : setPassError(false)
          }
        />
        <LoadingButton
          variant="contained"
          disabled={password !== password2}
          fullWidth
          size="large"
          sx={{ mb: 2 }}
          type="submit"
          loading={registerStatus.isLoading}
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
