import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

import { useGetMatchesQuery } from '../../redux/matches/matchesApi';
import { isListEmptyNullOrUndefined } from '../../utils';
import {
  ErrorAlert,
  FullWidthCenteredWrapper,
  ProfileIconListItem
} from '../ReusableComponents';
import { CenteredLoader } from '../ReusableComponents/CenteredLoader';
import { demoDogImageGetter } from '../ReusableComponents/demoDogImageGetter';
import EmptyMatches from './EmptyMatches';

const Matches: React.FC = (): React.ReactElement => {
  const [reloadQuery, setReloadQuery] = useState(true);
  const useQueryResult = useGetMatchesQuery(reloadQuery, {
    refetchOnMountOrArgChange: true
  });

  console.log('useQueryResult', useQueryResult);

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
          backgroundColor: '#f2f2f2',
          borderRadius: '10px'
        }}
      >
        <Box sx={{ width: '100%', display: 'flex' }}>
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

          <Box sx={{ flexGrow: 1 }}></Box>

          <IconButton sx={{ width: '45px', height: '45px' }}>
            <DeleteOutlineIcon color="error" />
          </IconButton>
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
          maxWidth: '600px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        <CenteredLoader isLoading={useQueryResult.isLoading} />
        {useQueryResult.isError && (
          <ErrorAlert error="Error Finding Matches. Please try again." />
        )}
        {!isListEmptyNullOrUndefined(useQueryResult.data) &&
          useQueryResult.data.map((match: any) => (
            <MatchListItem key={match.dog_id} match={match} />
          ))}
        {isListEmptyNullOrUndefined(useQueryResult.data) && <EmptyMatches />}
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default Matches;
