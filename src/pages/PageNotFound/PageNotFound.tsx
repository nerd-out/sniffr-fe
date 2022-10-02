import { Box, Typography } from '@mui/material';

import { FullWidthCenteredWrapper } from '../ReusableComponents';
import PageNotFoundDog from './PageNotFoundDog.jpg';

const PageNotFound: React.FC = (): React.ReactElement => {
  return (
    <FullWidthCenteredWrapper>
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
    </FullWidthCenteredWrapper>
  );
};

export default PageNotFound;
