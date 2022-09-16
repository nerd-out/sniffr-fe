import { Box, Typography } from '@mui/material';

import FullWidthCenteredWrapper from '../ReusableComponents';

const Swipes: React.FC = (): React.ReactElement => {
  return (
    <FullWidthCenteredWrapper>
      <Box sx={{ width: '25%', maxWidth: '350px', minWidth: '250px' }}>
        <Typography variant="h1">Find a Match!</Typography>
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default Swipes;
