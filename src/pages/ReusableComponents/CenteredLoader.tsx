import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

interface LoaderProps {
  isLoading: boolean;
}

export const CenteredLoader = (props: LoaderProps) => {
  const { isLoading } = props;

  return (
    <>
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
    </>
  );
};
