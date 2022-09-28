import { createTheme, Theme } from '@mui/material/styles';

import palette from './palette';
import typography from './typography';

const theme: Theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'success' && {
              color: '#fff'
            })
        })
      }
    }
  }
});

export default theme;
