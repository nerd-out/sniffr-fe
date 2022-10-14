import { Alert } from '@mui/material';

interface ErrorAlertProps {
  error: string;
  marginBottom: number;
  marginTop: number;
  isOutlined: boolean;
}

export const ErrorAlert = (props: ErrorAlertProps) => {
  const { marginBottom = 2, marginTop = 0, error, isOutlined = false } = props;
  const errorVariant = isOutlined ? 'outlined' : 'standard';

  return (
    <Alert
      sx={{ mb: marginBottom, mt: marginTop }}
      severity="error"
      variant={errorVariant}
    >
      Error: {error}
    </Alert>
  );
};
