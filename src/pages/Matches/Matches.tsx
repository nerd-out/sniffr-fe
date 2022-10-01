import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EmailIcon from '@mui/icons-material/Email';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PetsIcon from '@mui/icons-material/Pets';
import { Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

import { useGetMatchesQuery } from '../../redux/matches/matchesApi';
import {
  FullWidthCenteredWrapper,
  ProfileIconListItem
} from '../ReusableComponents';
import { demoDogImageGetter } from '../ReusableComponents/demoDogImageGetter';

const dummyMatches = [
  {
    dog_name: 'Max',
    owner_name: 'Allie',
    owner_email: 'allie@gmail.com',
    dog_id: 1
  },
  {
    dog_name: 'Cerberus',
    owner_name: 'Jon',
    owner_email: 'jon@gmail.com',
    dog_id: 2
  },
  {
    dog_name: 'Siri',
    owner_name: 'Dan',
    owner_email: 'dan@gmail.com',
    dog_id: 3
  },
  {
    dog_name: 'Augie',
    owner_name: 'Josh',
    owner_email: 'josh@gmail.com',
    dog_id: 4
  }
];

const Matches: React.FC = (): React.ReactElement => {
  const [reloadQuery, setReloadQuery] = useState(true);
  const useQueryResult = useGetMatchesQuery(reloadQuery, {
    refetchOnMountOrArgChange: true
  });

  const MatchListItem = (props: any) => {
    const { match } = props;
    console.log('match', match);
    return (
      <Box
        sx={{
          width: '100%',
          height: '100px',
          m: 1,
          p: 2,
          boxShadow: '2px 2px 10px 2px rgba(0,0,0,0.3)',
          borderRadius: '10px'
        }}
      >
        <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
          <Box
            component="img"
            src={demoDogImageGetter(match)}
            sx={{ width: '100px', borderRadius: '10px', mb: 2 }}
          />
          <Box sx={{ ml: 2 }}>
            <Typography variant="h2" sx={{ mb: 1 }}>
              {match.dog_name}
            </Typography>
            <ProfileIconListItem>
              <InsertEmoticonIcon sx={{ mr: 1 }} /> {match.owner_name}
            </ProfileIconListItem>
            <ProfileIconListItem>
              <MailOutlineIcon sx={{ mr: 1 }} /> {match.owner_email}
            </ProfileIconListItem>
          </Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}
          >
            <IconButton sx={{ width: '40px', height: '40px' }}>
              <DeleteOutlineIcon color="error" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <FullWidthCenteredWrapper>
      <Box
        sx={{
          width: '100%',
          minWidth: '300px',
          maxWidth: '500px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        {dummyMatches.map(match => (
          <MatchListItem key={match.dog_id} match={match} />
        ))}
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default Matches;
