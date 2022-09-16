import { Box } from '@mui/material';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const FullWidthCenteredWrapper: React.FC<Props> = ({
  children
}): React.ReactElement => {
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
      {children}
    </Box>
  );
};

export default FullWidthCenteredWrapper;
