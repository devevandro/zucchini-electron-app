import { useState } from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo'
// import Link from '@mui/material/Link';
import { mainListItems, secondaryListItems } from './components/ListItems'
import { MusicPlayer } from './components/MusicPlayer'
import Header from './components/AppBar'
import { MusicTable } from './components/MusicTable'
import { HomePlayer } from './components/HomePlayer'
import { IItems } from '../../../utils/interface/playlist'

const drawerWidth: number = 240

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}))

const mdTheme = createTheme()

function DashboardContent() {
  const [openMusicTable, setOpenMusicTable] = useState(false)
  const [playlistId, setPlaylistId] = useState<string>('')
  const [doubleClick, setDoubleClick] = useState<boolean>(false)
  const [currentIndex, setCurrentIndex] = useState<number>(-1)
  const [music, setMusic] = useState<IItems>({} as IItems)
  const [musics, setMusics] = useState<IItems[]>([])

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Drawer variant="permanent" open={true}>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              px: [1],
              backgroundColor: '#293644',
            }}
          >
            <SlowMotionVideoIcon sx={{ color: '#ffffff' }} />
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ ml: 1, fontFamily: 'Handlee', color: '#ffffff' }}
            >
              Zucchini
            </Typography>
          </Toolbar>
          <Divider />
          <List
            component="nav"
            sx={{ height: 'auto', backgroundColor: '#293644' }}
          >
            {mainListItems}
            <Divider sx={{ my: 1, backgroundColor: '#ffffff' }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            backgroundColor: '#293644',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: openMusicTable ? '#345' : '#293644',
                  }}
                >
                  {openMusicTable ? (
                    <Container component="main" maxWidth="xl">
                      <MusicTable
                        currentIndex={currentIndex}
                        playlistId={playlistId}
                        onClickMusic={value => setDoubleClick(value)}
                        getMusic={value => setMusic(value)}
                        getMusics={values => setMusics(values)}
                      />
                    </Container>
                  ) : (
                    <>
                      <Container
                        maxWidth="xl"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          margin: '220px auto',
                        }}
                      >
                        <HomePlayer
                          onClose={value => {
                            setPlaylistId(value)
                            setOpenMusicTable(true)
                          }}
                        />
                      </Container>
                    </>
                  )}
                </Box>
              </Grid>
            </Grid>
            <Box
              component="footer"
              sx={{
                position: 'fixed',
                width: '100%',
                right: 0,
                bottom: 0,
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
                  prevNextMusic={musicToChange => setMusic(musicToChange)}
                  setIndex={value => setCurrentIndex(value)}
                />
              )}
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default function Dashboard() {
  return <DashboardContent />
}
