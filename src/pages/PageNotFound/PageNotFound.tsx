import { LoadingButton } from '@mui/lab';
import { Alert, Box, Link, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import PageNotFoundDog from './PageNotFoundDog.jpg';

const LoginPage: React.FC = (): React.ReactElement => {
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
      <Box
        sx={{
          width: '70%',
          maxWidth: '500px',
          minWidth: '250px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h5">404: Uh oh!</Typography>
        <Typography variant="h5">Can&apos;t find that page</Typography>
        <Box
          component="img"
          src={PageNotFoundDog}
          alt="page not found"
          sx={{ height: '100%', width: '100%', borderRadius: '50px', mt: 2 }}
        />
      </Box>
    </Box>
  );
};

export default LoginPage;
