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
import {
  Alert,
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';

import {
  useCreateSwipeMutation,
  useGetAvailableSwipesQuery
} from '../../redux/swipes/swipesApi';
import FullWidthCenteredWrapper from '../ReusableComponents';
import demoAugie from './demoAugie.png';
import demoCerberus from './demoCerberus.png';
import demoMax from './demoMax.png';
import demoSiri from './demoSiri.png';
import NoMoreMatches from './NoMoreMatches';

const demoDogImages = {
  Augie: demoAugie,
  Max: demoMax,
  Siri: demoSiri,
  Cerberus: demoCerberus
};

const Swipes: React.FC = (): React.ReactElement => {
  const useQueryResult = useGetAvailableSwipesQuery('swipes', {
    refetchOnMountOrArgChange: true
  });
  console.log('useQueryResult', useQueryResult);

  return (
    <FullWidthCenteredWrapper>
      <Box sx={{ width: '50%', minWidth: '350px', maxWidth: '950px', p: 0 }}>
        {useQueryResult.isLoading && <CircularProgress color="secondary" />}
        {useQueryResult.isError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {useQueryResult.error.data.message}
          </Alert>
        )}
        {useQueryResult.isSuccess && useQueryResult.data.length && (
          <DogProfile data={useQueryResult.data} />
        )}
        {useQueryResult.isSuccess && !useQueryResult.data.length && (
          <NoMoreMatches />
        )}
      </Box>
    </FullWidthCenteredWrapper>
  );
};

const DogProfile = ({ data }) => {
  const dog = data[0];

  const [match, matchStatus] = useCreateSwipeMutation();

  const handleMatchClick = isInterested => {
    match({
      swiped_dog_id: dog.dog_id,
      is_interested: isInterested
    })
      .then(response => {
        console.log('response', response);
      })
      .error(error => {
        console.log('error', error);
      });
  };

  return (
    <>
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
          src={demoDogImages[dog.dog_name]}
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
          A {dog.temperament_type.toLowerCase()} {dog.breed}
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
          Siri loves playing catch in the yard, herding unsuspecting poodles,
          and drooling on the slobberiest tennis balls. She&apos;s pro at fetch
          and will always want to be your friend!
        </Typography>
        <Typography variant="body1">
          <List dense={false} sx={{ pl: 0 }}>
            <ListItem sx={{ pt: 0, pb: 0, pl: 0 }}>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BalanceIcon sx={{ mr: 1 }} /> {dog.size}
                  </Box>
                }
              />
            </ListItem>
            <ListItem sx={{ pt: 0, pb: 0, pl: 0 }}>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CakeIcon sx={{ mr: 1 }} /> {dog.age} years old
                  </Box>
                }
              />
            </ListItem>
            <ListItem sx={{ pt: 0, pb: 0, pl: 0 }}>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {dog.sex.toLowerCase() === 'female' ? (
                      <FemaleIcon sx={{ mr: 1 }} />
                    ) : (
                      <MaleIcon sx={{ mr: 1 }} />
                    )}{' '}
                    {dog.sex}
                  </Box>
                }
              />
            </ListItem>
            <ListItem sx={{ pt: 0, pb: 0, pl: 0 }}>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ContentCutIcon sx={{ mr: 1 }} />{' '}
                    {dog.is_fixed ? 'Fixed' : 'Not Fixed'}
                  </Box>
                }
              />
            </ListItem>
            <ListItem sx={{ pt: 0, pb: 0, pl: 0 }}>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <VaccinesIcon sx={{ mr: 1 }} />{' '}
                    {dog.is_vaccinated ? 'Vaccinated' : 'Not Vaccinated'}
                  </Box>
                }
              />
            </ListItem>
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
          <LoadingButton
            startIcon={<ClearIcon />}
            variant="contained"
            size="large"
            color="error"
            onClick={() => handleMatchClick(false)}
            fullWidth
            loading={matchStatus.isLoading}
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
            loading={matchStatus.isLoading}
            sx={{ ml: 0.5 }}
          >
            Match Me!
          </LoadingButton>
        </Box>
      </Box>
    </>
  );
};

export default Swipes;
