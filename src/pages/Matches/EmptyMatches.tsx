import { Box, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { FullWidthCenteredWrapper } from '../ReusableComponents';
import EmptyMatchesDog from './EmptyMatchesDog.png';

const EmptyMatches: React.FC = (): React.ReactElement => {
  return (
    <FullWidthCenteredWrapper>
      <Box
        sx={{
          width: '60%',
          maxWidth: '800px',
          minWidth: '250px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h1" sx={{ mb: 1 }}>
          No matches yet!
        </Typography>
        <Typography variant="body1">
          Looks like you don&apos;t have any matches yet. Head over to the{' '}
          <Link component={RouterLink} to="/swipe">
            swipes
          </Link>{' '}
          page to find a friend for your pooch!
        </Typography>
        <Box
          component="img"
          src={EmptyMatchesDog}
          alt="page not found"
          sx={{ height: '100%', width: '100%', borderRadius: '10px', mt: 2 }}
        />
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default EmptyMatches;
