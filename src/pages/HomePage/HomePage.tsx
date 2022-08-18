import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import frenchie from './frenchie.jpg';

const HomePage: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box
        sx={{
          width: '350px',
          position: 'fixed',
          top: '20%',
          left: '10%',
          zIndex: 2,
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{ fontWeight: 'semibold', fontSize: '2.5rem' }}
        >
          find your dog a playmate today
        </Typography>

        <Typography variant="body1">
          sniffr brings good dogs together to have fun, play fetch, and get a
          few good scratches
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 3 }}
          onClick={() => navigate('/register')}
        >
          Register Now
        </Button>
      </Box>

      <Box
        component="img"
        src={frenchie}
        sx={{
          borderRadius: '61% 39% 41% 59% / 31% 44% 56% 69%',
          height: '120vh',
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default HomePage;
