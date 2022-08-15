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
  Avatar,
  Button,
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';

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
    <Box sx={{width: 300 }}>
      <Stack spacing={4}>
        <Typography variant="h1">Create Dog</Typography>
        <Avatar sx={{ width: 56, height: 56, bgcolor: deepPurple[500] }}>
          OP
        </Avatar>
        <TextField
          label="Name"
          name="petName"
          variant="outlined"
          sx={{ mb: 2, width: '100%' }}
        />
        <TextField
          label="Age"
          name="petAge"
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
          name="petBreed"
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
          <FormLabel id="pet-sex-label">
            <Typography sx={{ fontWeight: 600, fontSize: 20}} >Sex</Typography></FormLabel>
          <RadioGroup
            aria-labelledby="pet-sex-label"
            defaultValue="female"
            name="petSex"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
          <FormLabel id="pet-vaccinations-label"  sx={{ fontWeight: 600, fontSize: 20}} >
            Up to date on vaccinations?
          </FormLabel>
          <RadioGroup
            aria-labelledby="pet-vaccinations-label"
            defaultValue={false}
            name="petVaccinations"
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="pet-neutered-label"  sx={{ fontWeight: 600, fontSize: 20}} >
            Is this dog neutered/spayed?
          </FormLabel>
          <RadioGroup
            aria-labelledby="pet-neutered-label"
            defaultValue={false}
            name="petNeutered"
          >
            <FormControlLabel value={true} control={<Radio />} label="Yes" />
            <FormControlLabel value={false} control={<Radio />} label="No" />
          </RadioGroup>
          <FormLabel id="pet-size-label" sx={{ fontWeight: 600, fontSize: 20}}>Size</FormLabel>
          <RadioGroup
            aria-labelledby="pet-size-label"
            defaultValue="small"
            name="petSize"
          >
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel
              value="medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
          </RadioGroup>
        </FormControl>
        <TextField
          id="pet-bio-field"
          label="Pet Bio"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
         <Button type="submit" variant="contained" >Submit</Button>
      </Stack>
   
    </Box>
  );
};

export default CreateDogProfilePage;
