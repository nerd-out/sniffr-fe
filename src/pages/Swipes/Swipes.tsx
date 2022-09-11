import { Box, Typography } from '@mui/material';

const Swipes: React.FC = (): React.ReactElement => {
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
      <Box sx={{ width: '25%', maxWidth: '350px', minWidth: '250px' }}>
        <Typography variant="h1">Find a Match!</Typography>
      </Box>
    </Box>
  );
};

export default Swipes;
