import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { FullWidthCenteredWrapper } from '../ReusableComponents';
import NoMoreMatchesDogs from './NoMoreMatchesDogs.jpg';

const NoMoreSwipes: React.FC = (): React.ReactElement => {
  return (
    <FullWidthCenteredWrapper>
      <Box
        sx={{
          width: '70%',
          maxWidth: '800px',
          minWidth: '250px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h1" sx={{ mb: 1 }}>
          Doggone it!
        </Typography>
        <Typography variant="body1">
          No more dogs found. Head over to your{' '}
          <Link component={RouterLink} to="/matches">
            matches
          </Link>{' '}
          to set up a play date!
        </Typography>
        <Box
          component="img"
          src={NoMoreMatchesDogs}
          alt="page not found"
          sx={{ height: '100%', width: '100%', borderRadius: '10px', mt: 2 }}
        />
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default NoMoreSwipes;
