import {
  Avatar,
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

const ages = [
  {
    value: 'PUPPY',
    label: 'Puppy: 1-2'
  },
  {
    value: 'ADULT',
    label: 'Adult: 3-10'
  },
  {
    value: 'SENIOR',
    label: 'Senior: 10+'
  }
];

interface IBreed {
  breed_id: number;
  breed_name: string;
}

interface IFormInput {
  petSex: string;
  petName: string;
  petAge: string;
  petBio: string;
  petBreed: string;
  petNeutered: boolean;
  petVaccinations: boolean;
  petSize: string;
}

const DogProfileSettingsPage: React.FC = (): React.ReactElement => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      petSex: '',
      petName: '',
      petAge: '',
      petBreed: '',
      petBio: '',
      petVaccinations: false,
      petNeutered: false,
      petSize: ''
    }
  });
  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
  };

  const [breeds, setBreeds] = useState([
    { label: 'select breed', value: 'default' }
  ]);
  // const [ageDropDown, setAgeDropDown] = useState();
  // const [temperamentDropDown, setTemperamentDropDown] = useState();

  useEffect(() => {
    fetch('http://sniffr-be.herokuapp.com/breeds')
      .then(response => response.json())
      .then(data => {
        const dropDownData = data.map((breed: IBreed) => ({
          label: breed.breed_name,
          value: breed.breed_id
        }));
        setBreeds(dropDownData);
      });
    console.log(breeds);

    // fetch("http://sniffr-be.herokuapp.com/")
    // .then(response => response.json())
    // .then(data => setBreeds(data))
  }, []);

  return (
    <Box sx={{ width: 300 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Typography variant="h1" data-testid="dog-settings-header">
            Create Dog
          </Typography>
          <Avatar sx={{ width: 56, height: 56, bgcolor: deepPurple[500] }}>
            OP
          </Avatar>
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                required
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
              />
            )}
            name="petName"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Age"
                required
                select
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
              >
                {ages.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
            name="petAge"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                label="Breed"
                required
                select
                variant="outlined"
                sx={{ mb: 2, width: '100%' }}
              >
                {breeds.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
            name="petBreed"
            control={control}
            defaultValue=""
          />

          <FormLabel
            id="pet-sex-label"
            sx={{ fontWeight: 600, fontSize: 20 }}
            required
          >
            Sex
          </FormLabel>
          <Controller
            render={({ field }) => (
              <RadioGroup
                aria-labelledby="pet-sex-label"
                defaultValue="female"
                {...field}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio required />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio required />}
                  label="Male"
                />
              </RadioGroup>
            )}
            name="petSex"
            control={control}
          />
          <FormLabel
            id="pet-vaccinations-label"
            required
            sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}
          >
            Up to date on vaccinations?
          </FormLabel>
          <Controller
            render={({ field }) => (
              <RadioGroup
                aria-label="pet-vaccinations-label"
                defaultValue={false}
                {...field}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio required />}
                  label="Yes"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio required />}
                  label="No"
                />
              </RadioGroup>
            )}
            name="petVaccinations"
            control={control}
          />
          <FormLabel
            id="pet-neutered-label"
            required
            sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}
          >
            Is this dog neutered/spayed?
          </FormLabel>
          <Controller
            render={({ field }) => (
              <RadioGroup
                aria-label="pet-neutered-label"
                defaultValue={false}
                {...field}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio required />}
                  label="Yes"
                />
                <FormControlLabel
                  value={false}
                  control={<Radio required />}
                  label="No"
                />
              </RadioGroup>
            )}
            name="petNeutered"
            control={control}
          />
          <FormLabel
            id="pet-size-label"
            required
            sx={{ mt: 2, fontWeight: 600, fontSize: 20 }}
          >
            Size
          </FormLabel>
          <Controller
            render={({ field }) => (
              <RadioGroup aria-labelledby="pet-size-label" {...field}>
                <FormControlLabel
                  value="small"
                  control={<Radio required />}
                  label="Small (up to 20 lbs)"
                />
                <FormControlLabel
                  value="medium"
                  control={<Radio required />}
                  label="Medium (20 to 50 lbs)"
                />
                <FormControlLabel
                  value="large"
                  control={<Radio required />}
                  label="Large (50+ lbs)"
                />
              </RadioGroup>
            )}
            name="petSize"
            control={control}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                id="pet-bio-field"
                label="Pet Bio"
                multiline
                rows={4}
              />
            )}
            name="petBio"
            control={control}
            defaultValue=""
          />
          <Button
            type="submit"
            data-testid="submit-button"
            variant="contained"
            fullWidth
            size="large"
            sx={{ mb: 2 }}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default DogProfileSettingsPage;
