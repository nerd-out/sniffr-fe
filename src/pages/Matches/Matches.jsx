import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

import {
  useDeleteMatchMutation,
  useGetMatchesQuery
} from '../../redux/matches/matchesApi';
import { isListEmptyNullOrUndefined } from '../../utils';
import {
  DeleteConfirmationButton,
  ErrorAlert,
  FullWidthCenteredWrapper,
  ProfileIconListItem
} from '../ReusableComponents';
import { CenteredLoader } from '../ReusableComponents/CenteredLoader';
import { demoDogImageGetter } from '../ReusableComponents/demoDogImageGetter';
import EmptyMatches from './EmptyMatches';

const Matches = () => {
  const [reloadQuery, setReloadQuery] = useState(true);
  const useQueryResult = useGetMatchesQuery(reloadQuery, {
    refetchOnMountOrArgChange: true
  });
  const [deleteMatch, deleteMatchStatus] = useDeleteMatchMutation();

  console.log('deleteMatchStatus', deleteMatchStatus);

  const MatchListItem = props => {
    const { match } = props;

    return (
      <Box
        sx={{
          width: '100%',
          // height: '100px',
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
            sx={{ width: '100px', borderRadius: '10px' }}
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

          <DeleteConfirmationButton
            deleteFunc={deleteMatch}
            deleteId={{ dog_id: match.dog_id }}
            isDeleting={deleteMatchStatus.isLoading}
          />
        </Box>
        {deleteMatchStatus.isError && !deleteMatchStatus.isLoading && (
          <ErrorAlert
            error={deleteMatchStatus.error.data.error}
            marginBottom={0}
            marginTop={2}
            isOutlined={true}
          />
        )}
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
          useQueryResult.data.map(match => (
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
