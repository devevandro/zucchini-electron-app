import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import WestIcon from '@mui/icons-material/West';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header = () => {
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
    </>
  );
}

export default Header;
