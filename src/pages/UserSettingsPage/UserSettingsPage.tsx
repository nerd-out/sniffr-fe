import { Box } from '@mui/material';

import UserSettingsForm from './UserSettingsForm';

const UserSettingsPage: React.FC = (): React.ReactElement => {
  return (

    <Box
        sx={{
          width: '300px',
          maxWidth: '350px',
          minWidth: '250px'
        }}
      >
        <Box
      sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      
        <UserSettingsForm />
      </Box>
    
    </Box>
  );
};

export default UserSettingsPage;
