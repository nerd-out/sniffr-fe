// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';

import { useGetAvailableSwipesQuery } from '../../redux/swipes/swipesApi';
import FullWidthCenteredWrapper from '../ReusableComponents';
import demoAugie from './demoAugie.png';
import demoCerberus from './demoCerberus.png';
import demoMax from './demoMax.png';
import demoSiri from './demoSiri.png';

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
      <Box sx={{ width: '50%', minWidth: '350px', p: 0 }}>
        {useQueryResult.isLoading && <CircularProgress color="secondary" />}
        {useQueryResult.isError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {useQueryResult.error.data.message}
          </Alert>
        )}
        {useQueryResult.isSuccess && <DogProfile data={useQueryResult.data} />}
      </Box>
    </FullWidthCenteredWrapper>
  );
};

const DogProfile = ({ data }) => {
  const dog = data[0];

  return (
    <>
      <Box
        component="img"
        sx={{ width: '100%', borderRadius: '10px', mb: 1 }}
        src={demoDogImages[dog.dog_name]}
      />
      <Typography variant="h1">{dog.dog_name}</Typography>
      <Typography variant="subtitle2" sx={{ pb: 1 }}>
        A {dog.temperament_type.toLowerCase()} {dog.breed}
      </Typography>
      <Typography variant="h6">Bio:</Typography>
      <Typography variant="body1" sx={{ pb: 1 }}>
        {dog.dog_bio}
      </Typography>
      <Typography variant="h6">Details:</Typography>
      <Typography variant="body1">
        <List dense={false}>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText primary={`Size: ${dog.size}`} />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText primary={`Sex: ${dog.sex}`} />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText primary={`Fixed: ${dog.is_fixed ? 'Yes' : 'No'}`} />
          </ListItem>
          <ListItem sx={{ pt: 0, pb: 0 }}>
            <ListItemText
              primary={`Fully vaccinated: ${dog.is_vaccinated ? 'Yes' : 'No'}`}
            />
          </ListItem>
        </List>
      </Typography>
      <Box
        sx={{
          width: '100%',
          mt: 4,
          mb: 4,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Button
          startIcon={<ClearIcon />}
          variant="contained"
          size="large"
          color="error"
        >
          Nope
        </Button>
        <Button
          startIcon={<CheckIcon />}
          variant="contained"
          size="large"
          color="success"
        >
          It&#39;s a Match!
        </Button>
      </Box>
    </>
  );
};

export default Swipes;
