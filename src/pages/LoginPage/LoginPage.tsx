import { Box, Button, Link, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';

import logo from '../../assets/logo/logo.svg';

interface LoginInputs {
  username: string;
  password: string;
}

const LoginPage: React.FC = (): React.ReactElement => {
  const { register } = useForm<LoginInputs>({
    defaultValues: {
      password: '',
      username: '', 
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
      <Box sx={{ width: '25%', maxWidth: '350px', minWidth: '250px' }}>
        <Box
          component="img"
          src={logo}
          alt="logo"
          sx={{ height: '100%', width: '100%' }}
        />
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          sx={{ mb: 2, width: '100%' }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          sx={{ mb: 2, width: '100%' }}
        />
        <Button variant="contained" fullWidth size="large" sx={{ mb: 2 }}>
          Login
        </Button>
        <Link component={RouterLink} to="/register">
          Don&apos;t have an account? Register here!
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
