import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MusicPlayer from './components/MusicPlayer';
import MusicTable from './components/MusicTable';
import Header from './components/Header';

const HomeComponent = () => {
  return (
    <>
      <Header />
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
