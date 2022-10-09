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

  const MatchListItem = (props: any) => {
    const { match } = props;

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
        {/* if loading */}
        <CenteredLoader isLoading={useQueryResult.isLoading} />
        {/* if error */}
        {useQueryResult.isError && (
          <ErrorAlert error="Error Finding Matches. Please try again." />
        )}
        {/* if success + matches */}
        {!isListEmptyNullOrUndefined(useQueryResult.data) &&
          useQueryResult.data.map((match: any) => (
            <MatchListItem key={match.dog_id} match={match} />
          ))}
        {/* if success + no matches */}
        {isListEmptyNullOrUndefined(useQueryResult.data) &&
          !useQueryResult.isLoading && <EmptyMatches />}
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default Matches;
