import { Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { FullWidthCenteredWrapper } from '../ReusableComponents';

const options = [
  { option: 'Find a Match!', link: '/swipe' },
  { option: 'Matches List', link: '/matches' },
  { option: 'Dog Settings', link: '/dog-settings' },
  { option: 'User Settings', link: '/user-settings' }
];

const UserOptions: React.FC = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <FullWidthCenteredWrapper>
      <Box sx={{ width: '25%', maxWidth: '350px', minWidth: '250px' }}>
        {options.map(o => (
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 2,
              p: 1,
              color: '#FFF',
              height: 60,
              lineHeight: '60px',
              fontFamily: theme => theme.typography.h6,
              backgroundColor: theme => theme.palette.secondary.light,
              cursor: 'pointer'
            }}
            elevation={5}
            onClick={() => navigate(o.link)}
            key={o.option}
          >
            {o.option}
          </Paper>
        ))}
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default UserOptions;
