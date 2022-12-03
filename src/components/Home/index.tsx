import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MusicPlayer from './components/MusicPlayer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import WestIcon from '@mui/icons-material/West';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MusicTable from './components/MusicTable';

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
        <Container component="main" sx={{ mt: 10 }} maxWidth="xl">
          <MusicTable />
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
