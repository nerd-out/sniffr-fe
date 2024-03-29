import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material';

import { FullWidthCenteredWrapper } from '../ReusableComponents';

interface BadassDevs {
  name: string;
  github: string;
  linkedin: string;
  title: string;
  adjective: string;
  line1: string;
  line2: string;
}

const badassDevs: BadassDevs[] = [
  {
    name: 'Jonathan Finger',
    github: 'https://github.com/jae-finger',
    linkedin: 'https://www.linkedin.com/in/jaefinger/',
    title: 'Data Dude',
    adjective: 'poofy',
    line1: 'just here for the flask app',
    line2: 'idk JavaScript'
  },
  {
    name: 'Allie Robinson',
    github: 'https://github.com/allie-rae',
    linkedin: 'https://www.linkedin.com/in/allie-robinson/',
    title: 'Chaos Coordinator',
    adjective: 'sparkly',
    line1: 'maddeningly motivated',
    line2: 'will judge your ESlint config'
  }
];

const AboutPage: React.FC = (): React.ReactElement => {
  return (
    <FullWidthCenteredWrapper>
      <Box sx={{ ml: 2, mr: 2, mb: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '850px',
            width: '100%'
          }}
        >
          <Typography variant="h4">
            The people who brought you sniffr:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              mt: 4,
              justifyContent: 'center'
            }}
          >
            {badassDevs.map(dev => {
              return (
                <Card
                  variant="outlined"
                  key={dev.name}
                  sx={{ width: '250px', m: 1 }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {dev.title}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {dev.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {dev.adjective}
                    </Typography>
                    <Typography variant="body2">
                      {dev.line1}
                      <br />
                      {dev.line2}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <Button size="small">LinkedIn</Button>
                    </a>
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: 'none', color: '#000' }}
                    >
                      <Button size="small">Github</Button>
                    </a>
                  </CardActions>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Box>
    </FullWidthCenteredWrapper>
  );
};

export default AboutPage;
