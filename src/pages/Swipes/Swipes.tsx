import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';

import FullWidthCenteredWrapper from '../ReusableComponents';
import demoAugie from './demoAugie.png';
import demoMax from './demoMax.png';
import demoSiri from './demoSiri.png';

const demoDogImages = {
  Augie: demoAugie,
  Max: demoMax,
  Siri: demoSiri
};

const dog = {
  name: 'Max',
  breed: 'West Highland White Terrier',
  temperament: 'happy',
  size: 'Small (13 to 24 lbs)',
  age: 5,
  vaccinated: true,
  fixed: false,
  bio: "Max loves running around the yard, playing chase with other dogs, and finding the local vermin. He's not too good at fetch, but he'll always want to be your friend!",
  sex: 'Male'
};

const Swipes: React.FC = (): React.ReactElement => {
  return (
    <FullWidthCenteredWrapper>
      <Box sx={{ width: '50%', minWidth: '350px', p: 0 }}>
        <Box
          component="img"
          sx={{ width: '100%', borderRadius: '10px', pb: 1 }}
          src={demoDogImages['Max']}
        />
        <Typography variant="h1">{dog.name}</Typography>
        <Typography variant="subtitle2" sx={{ pb: 1 }}>
          A {dog.temperament} {dog.breed}
        </Typography>
        <Typography variant="h6">Bio:</Typography>
        <Typography variant="body1" sx={{ pb: 1 }}>
          {dog.bio}
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
              <ListItemText primary={`Fixed: ${dog.fixed ? 'Yes' : 'No'}`} />
            </ListItem>
            <ListItem sx={{ pt: 0, pb: 0 }}>
              <ListItemText
                primary={`Fully vaccinated: ${dog.vaccinated ? 'Yes' : 'No'}`}
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
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default Swipes;
