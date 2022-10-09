import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

export const CenteredLoader = (props: any) => {
  const { isLoading } = props;
  const Loader = isLoading ? (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="secondary" />
    </Box>
  ) : (
    <></>
  );

  return Loader;
};
