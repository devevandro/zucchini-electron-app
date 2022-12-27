import { Fragment } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RadioIcon from '@mui/icons-material/Radio';
import SearchIcon from '@mui/icons-material/Search';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import NotStartedIcon from '@mui/icons-material/NotStarted';

export const mainListItems = (
  <Fragment>
    <ListItemButton>
      <ListItemIcon>
        <PlaylistAddIcon sx={{ color: '#ffffff' }} />
      </ListItemIcon>
      <ListItemText sx={{ ml: -2.5, color: '#ffffff' }} primary="Ouvir Playlist" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FeaturedPlayListIcon sx={{ color: '#ffffff' }} />
      </ListItemIcon>
      <ListItemText sx={{ ml: -2.5, color: '#ffffff' }} primary="Minhas Playlists" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SearchIcon sx={{ color: '#ffffff' }} />
      </ListItemIcon>
      <ListItemText sx={{ ml: -2.5, color: '#ffffff' }} primary="Search" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PlaylistPlayIcon sx={{ color: '#ffffff' }} />
      </ListItemIcon>
      <ListItemText sx={{ ml: -2.5, color: '#ffffff' }} primary="Assistir Playlist" />
    </ListItemButton>
  </Fragment>
);

export const secondaryListItems = (
  <Fragment>
    <ListItemButton>
      <ListItemIcon>
        <RadioIcon sx={{ color: '#ffffff' }} />
      </ListItemIcon>
      <ListItemText sx={{ ml: -2.5, color: '#ffffff' }} primary="Rádios" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NotStartedIcon sx={{ color: '#ffffff' }} />
      </ListItemIcon>
      <ListItemText sx={{ ml: -2.5, color: '#ffffff' }} primary="Player" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FileDownloadIcon sx={{ color: '#ffffff' }} />
      </ListItemIcon>
      <ListItemText sx={{ ml: -2.5, color: '#ffffff' }} primary="Baixar Música Youtube" />
    </ListItemButton>
  </Fragment>
);