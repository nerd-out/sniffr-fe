import { Alert } from '@mui/material';

export const ErrorAlert = props => {
  return (
    <Alert sx={{ mb: 2 }} severity="error">
      {props.error}
    </Alert>
  );
};
