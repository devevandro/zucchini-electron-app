import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MusicPlayer from './components/MusicPlayer';
import { MusicTable } from './components/MusicTable';
import Header from './components/Header';
import { HomePlayer } from './components/HomePlayer';

const HomeComponent = () => {
  const [openMusicTable, setOpenMusicTable] = useState(false);
  const [playlistId, setPlaylistId] = useState<string>('');

  return (
    <>
      <Header openMusicTable={openMusicTable} returnOnHomePlayer={(value) => setOpenMusicTable(value)} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: '#293644',
        }}
      >
        <CssBaseline />
        {openMusicTable ? (
          <Container sx={{ marginTop: '90px' }} component="main" maxWidth="xl">
              <MusicTable playlistId={playlistId} />
          </Container>
        ) : (
          <>
            <Container sx={{ margin: '90px auto' }} maxWidth="xl" />
            <HomePlayer
              onClose={value => {
                setPlaylistId(value)
                setOpenMusicTable(true);
              }}
            />
          </>
        )}
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
  )
};

export default HomeComponent;
