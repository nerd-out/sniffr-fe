import { Box, ListItem, ListItemText } from '@mui/material';

export const ProfileIconListItem = ({ children }) => {
  return (
    <ListItem sx={{ pt: 0, pb: 0, pl: 0 }}>
      <ListItemText
        primary={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>{children}</Box>
        }
      />
    </ListItem>
  );
};
