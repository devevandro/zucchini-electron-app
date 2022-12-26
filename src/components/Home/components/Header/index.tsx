import { FC } from 'react';
import { Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import WestIcon from '@mui/icons-material/West';
import SettingsIcon from '@mui/icons-material/Settings';

interface HeaderProps {
  openMusicTable: boolean;
  returnOnHomePlayer: (value: boolean) => void;
}

const Header: FC<HeaderProps> = props => {
  const { openMusicTable, returnOnHomePlayer } = props

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#345',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Toolbar>
            {openMusicTable && (
              <Tooltip placement='top' title='Voltar'>
                <WestIcon
                  sx={{ cursor: 'pointer' }}
                  onClick={() => returnOnHomePlayer(false)}
                />
              </Tooltip>
            )}
            <SlowMotionVideoIcon sx={{ ml: openMusicTable ? 3 : 0 }} />
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{ ml: 1, fontFamily: 'Handlee' }}
            >
              Zucchini
            </Typography>
          </Toolbar>
          <Toolbar>
            <SettingsIcon sx={{ ml: 3 }} />
            <Typography variant="h6" color="inherit" noWrap sx={{ ml: 1 }}>
              Player
            </Typography>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  )
}

export default Header;
