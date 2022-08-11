import { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Avatar
} from '@mui/material';
import {  deepPurple } from '@mui/material/colors';

const ages = [
  {
    value: 'PUPPY',
    label: 'Puppy: 1-2',
  },
  {
    value: 'ADULT',
    label: 'Adult: 3-10',
  },
  {
    value: 'SENIOR',
    label: 'Senior: 10+',
  },
];

const breeds = [
  {
    value: 'PITBULL',
    label: 'Pitbull',
  },
  {
    value: 'POODLE',
    label: 'Poodle',
  },
  {
    value: 'TERRIER',
    label: 'Terrier',
  },
];

const CreateDogProfilePage: React.FC = (): React.ReactElement => {
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };
  
  const handleBreedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBreed(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h1" >Create Dog</Typography>
      <br/>
      <Avatar sx={{ width: 56, height: 56, bgcolor: deepPurple[500] }}>OP</Avatar>
      <br/>
      <Stack spacing={2}>
        <TextField
          label="Name"
          variant="outlined"
          sx={{ mb: 2, width: '100%' }}
        />
        <TextField
          label="Age"
          select
          variant="outlined"
          value={age}
          onChange={handleAgeChange}
          sx={{ mb: 2, width: '100%' }}
        >
          {ages.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Breed"
          select
          variant="outlined"
          value={breed}
          onChange={handleBreedChange}
          sx={{ mb: 2, width: '100%' }}
        >
          {breeds.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Sex</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">Up to date on vaccinations?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={false}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">Is this dog neutered/spayed?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={false}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value={true}
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="demo-radio-buttons-group-label">Size</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="small"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="small"
              control={<Radio />}
              label="Small"
            />
            <FormControlLabel value="medium" control={<Radio />} label="Medium" />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-multiline-static"
          label="Pet Bio"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </Stack>
    </Box>
  );
};

export default CreateDogProfilePage;
