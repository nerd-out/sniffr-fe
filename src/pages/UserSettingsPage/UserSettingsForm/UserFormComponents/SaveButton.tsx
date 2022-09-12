import { Button } from '@mui/material';
import React from 'react';

const SaveButton: React.FC = (): React.ReactElement => (
  <Button
    variant="contained"
    fullWidth
    size="large"
    sx={{ mb: 2 }}
    type="submit"
  >
    Save
  </Button>
);

export default SaveButton;
