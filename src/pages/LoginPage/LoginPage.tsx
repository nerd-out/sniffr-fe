import { Box, Button, Link, TextField } from '@mui/material';
import logo from '../../assets/logo/logo.svg';
import Image from 'mui-image';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage: React.FC = (): React.ReactElement => {
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
      <Box sx={{ width: '25%', maxWidth: '350px' }}>
        <Image
          src={logo}
          alt="logo"
          height="100%"
          width="100%"
          duration={0}
          easing="ease-in"
        />
        <TextField
          label="Username"
          variant="outlined"
          sx={{ mb: 2, width: '100%' }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          sx={{ mb: 2, width: '100%' }}
        />
        <Button variant="contained" fullWidth size="large" sx={{ mb: 2 }}>
          Login
        </Button>
      </Box>
      <Link component={RouterLink} to="/register">
        Don't have an account? Register here!
      </Link>
    </Box>
  );
};

export default LoginPage;
