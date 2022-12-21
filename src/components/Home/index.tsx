import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { MusicPlayer } from './components/MusicPlayer';
import { MusicTable } from './components/MusicTable';
import Header from './components/Header';
import { HomePlayer } from './components/HomePlayer';
import { IItems } from '../../utils/interface/playlist';

const HomeComponent = () => {
  const [openMusicTable, setOpenMusicTable] = useState(false);
  const [playlistId, setPlaylistId] = useState<string>('');
  const [doubleClick, setDoubleClick] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [music, setMusic] = useState<IItems>({} as IItems);
  const [musics, setMusics] = useState<IItems[]>([]);

  return (
    <>
      <Header
        openMusicTable={openMusicTable}
        returnOnHomePlayer={value => setOpenMusicTable(value)}
      />
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
          <Container sx={{ marginTop: '95px' }} component="main" maxWidth="xl">
            <MusicTable
              currentIndex={currentIndex}
              playlistId={playlistId}
              onClickMusic={(value) => setDoubleClick(value)}
              getMusic={value => setMusic(value)}
              getMusics={values => setMusics(values)}
            />
          </Container>
        ) : (
          <>
            <Container sx={{ margin: '90px auto' }} maxWidth="xl" />
            <HomePlayer
              onClose={value => {
                setPlaylistId(value)
                setOpenMusicTable(true)
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
          {openMusicTable && (
            <MusicPlayer
              openMusicTable={openMusicTable}
              doubleClick={doubleClick}
              music={music}
              musics={musics}
              prevNextMusic={(musicToChange) => setMusic(musicToChange)}
              setIndex={(value) => setCurrentIndex(value)}
            />
          )}
        </Box>
      </Box>
    </>
  )
}

export default HomeComponent
