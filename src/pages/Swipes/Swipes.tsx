// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import BalanceIcon from '@mui/icons-material/Balance';
import CakeIcon from '@mui/icons-material/Cake';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import { LoadingButton } from '@mui/lab';
import { Box, CircularProgress, Grow, List, Typography } from '@mui/material';
import { useState } from 'react';

import {
  useCreateSwipeMutation,
  useGetSwipeQuery
} from '../../redux/swipes/swipesApi';
import { isObjectEmptyNullOrUndefined } from '../../utils';
import {
  FullWidthCenteredWrapper,
  ProfileIconListItem
} from '../ReusableComponents';
import { demoDogImageGetter } from '../ReusableComponents/demoDogImageGetter';
import { ErrorAlert } from '../ReusableComponents/ErrorAlert';
import NoMoreMatches from './NoMoreMatches';

const Swipes: React.FC = (): React.ReactElement => {
  const [reloadQuery, setReloadQuery] = useState(true);
  const useQueryResult = useGetSwipeQuery(reloadQuery, {
    refetchOnMountOrArgChange: true
  });

  return (
    <FullWidthCenteredWrapper>
      <Box sx={{ width: '50%', minWidth: '350px', maxWidth: '950px', p: 0 }}>
        {useQueryResult.isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress color="secondary" />
          </Box>
        )}
        {useQueryResult.isError && (
          <ErrorAlert error={useQueryResult.error.data.message} />
        )}
        {useQueryResult.isSuccess &&
          !isObjectEmptyNullOrUndefined(useQueryResult.data) && (
            <DogProfile
              dog={useQueryResult.data}
              setReloadQuery={setReloadQuery}
              reloadQuery={reloadQuery}
            />
          )}
        {useQueryResult.isSuccess &&
          isObjectEmptyNullOrUndefined(useQueryResult.data) && (
            <NoMoreMatches />
          )}
      </Box>
    </FullWidthCenteredWrapper>
  );
};

const DogProfile = ({ dog, setReloadQuery, reloadQuery }) => {
  const [error, setError] = useState(null);
  const [isMatchButton, setIsMatchButton] = useState();
  const [match, matchStatus] = useCreateSwipeMutation();

  const handleMatchClick = isInterested => {
    setIsMatchButton(isInterested);
    match({
      swiped_dog_id: dog.dog_id,
      is_interested: isInterested
    })
      .then(response => {
        setReloadQuery(!reloadQuery);
      })
      .error(error => {
        setError(error);
      });
  };

  return (
    <Grow in={true}>
      <Box>
        <Box sx={{ position: 'relative', zIndex: 0 }}>
          <Box
            component="img"
            sx={{
              width: '100%',
              borderRadius: '10px',
              mb: 1,
              boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)',
              zIndex: 1
            }}
            src={demoDogImageGetter(dog)}
          />
          <Typography
            variant="h1"
            sx={{
              fontWeight: '500',
              textShadow: '1px 1px 4px rgba(255,255,255,1)',
              position: 'absolute',
              bottom: '50px',
              left: '10px',
              zIndex: 3
            }}
          >
            {dog.dog_name}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: '500',
              textShadow: '1px 1px 4px rgba(255,255,255,1)',
              position: 'absolute',
              bottom: '27px',
              left: '10px',
              zIndex: 3
            }}
          >
            A {dog.temperament_type.toLowerCase()} {dog.breed_name}
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: '10px',
            mb: 4,
            p: 2,
            mt: -4,
            boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)'
          }}
        >
          <Typography variant="body1" sx={{ pb: 1, mt: 3 }}>
            {dog.dog_bio}
          </Typography>
          <Typography variant="body1">
            <List dense={false} sx={{ pl: 0 }}>
              <ProfileIconListItem>
                <BalanceIcon sx={{ mr: 1 }} /> {dog.size}
              </ProfileIconListItem>
              <ProfileIconListItem>
                <CakeIcon sx={{ mr: 1 }} /> {dog.age} years old
              </ProfileIconListItem>
              <ProfileIconListItem>
                {dog.sex.toLowerCase() === 'female' ? (
                  <FemaleIcon sx={{ mr: 1 }} />
                ) : (
                  <MaleIcon sx={{ mr: 1 }} />
                )}{' '}
                {dog.sex}
              </ProfileIconListItem>
              <ProfileIconListItem>
                <ContentCutIcon sx={{ mr: 1 }} />{' '}
                {dog.is_fixed ? 'Fixed' : 'Not Fixed'}
              </ProfileIconListItem>
              <ProfileIconListItem>
                <VaccinesIcon sx={{ mr: 1 }} />{' '}
                {dog.is_vaccinated ? 'Vaccinated' : 'Not Vaccinated'}
              </ProfileIconListItem>
            </List>
          </Typography>
          <Box
            sx={{
              width: '100%',
              mt: 2,
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            {error && <ErrorAlert error={error} />}
            <LoadingButton
              startIcon={<ClearIcon />}
              variant="contained"
              size="large"
              color="error"
              onClick={() => handleMatchClick(false)}
              fullWidth
              loading={!isMatchButton && matchStatus.isLoading}
              disabled={matchStatus.isLoading}
              sx={{ mr: 0.5 }}
            >
              Nope
            </LoadingButton>
            <LoadingButton
              startIcon={<CheckIcon />}
              variant="contained"
              size="large"
              color="success"
              onClick={() => handleMatchClick(true)}
              fullWidth
              loading={isMatchButton && matchStatus.isLoading}
              disabled={matchStatus.isLoading}
              sx={{ ml: 0.5 }}
            >
              Match Me!
            </LoadingButton>
          </Box>
        </Box>
      </Box>
    </Grow>
  );
};

export default Swipes;
