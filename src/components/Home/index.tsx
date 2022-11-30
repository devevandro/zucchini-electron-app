import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MusicPlayer from './components/musicPlayer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import WestIcon from '@mui/icons-material/West';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const HomeComponent = () => {
  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: '#345',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Toolbar>
            <WestIcon />
            <SlowMotionVideoIcon sx={{ ml: 3 }} />
            <Typography variant="h6" color="inherit" noWrap sx={{ ml: 1, fontFamily: 'Handlee' }}>
              Zucchini
            </Typography>
          </Toolbar>
          <Toolbar>
            <AccountBoxIcon sx={{ ml: 3 }} />
            <Typography variant="h6" color="inherit" noWrap sx={{ ml: 1 }}>
              Evandro
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#293644',
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Sticky footer
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {'Pin a footer to the bottom of the viewport.'}
            {'The footer will move as the main element of the page grows.'}
          </Typography>
          <Typography variant="body1">Sticky footer placeholder.</Typography>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 1,
            px: 2,
            mt: 'auto',
            backgroundColor: '#345',
          }}
        >
          <MusicPlayer />
        </Box>
      </Box>
    </>
  );
}

export default HomeComponent;
