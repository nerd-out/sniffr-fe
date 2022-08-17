import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

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
    name: 'Dan Johnson',
    github: 'https://github.com/danimal-johnson',
    linkedin: 'https://www.linkedin.com/in/danimal-johnson/',
    title: 'TypeScript Advocate',
    adjective: 'meticulous',
    line1: 'mostly reasonable...',
    line2: 'mostly',
  },
  {
    name: 'Joshua Gray',
    github: 'https://github.com/squashgray',
    linkedin: 'https://www.linkedin.com/in/joshuagraydev/',
    title: 'Idea Generator',
    adjective: 'big brain',
    line1: 'asks good questions',
    line2: '10/10 would code for cash',
  },
  {
    name: 'Mashima Button',
    github: 'https://github.com/zimashima',
    linkedin: 'https://www.linkedin.com/in/mashimabutton/',
    title: 'Tiny PR Maker',
    adjective: 'cute as a ^',
    line1: 'code hygienist',
    line2: 'tech debt tackler',
  },
  {
    name: 'Jonathan Finger',
    github: 'https://github.com/jae-finger',
    linkedin: 'https://www.linkedin.com/in/jaefinger/',
    title: 'Data Dude',
    adjective: 'poofy',
    line1: 'just here for the flask app',
    line2: 'idk JavaScript',
  },
  {
    name: 'Allie Robinson',
    github: 'https://github.com/allie-rae',
    linkedin: 'https://www.linkedin.com/in/allie-robinson/',
    title: 'TypeScript Adversary',
    adjective: 'may bite',
    line1: 'watch your back,',
    line2: "this one's feisty!",
  },
];

const AboutPage: React.FC = (): React.ReactElement => {
  return (
    <Box
      sx={{
        m: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4">The people who brought you sniffr:</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 4 }}>
        {badassDevs.map((dev) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Card variant="outlined" sx={{ width: '240px', m: 1 }}>
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
  );
};

export default AboutPage;
