import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

export const WallPaper = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  overflow: 'hidden',
});

export const BoxContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Widget = styled('div')(() => ({
  padding: 16,
  borderRadius: 16,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor: '#575757',
}))

export const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
  color: 'white',
});

export const SliderVolume = styled(Slider)({
  color: '#ffffff',
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    width: 12,
    height: 12,
    backgroundColor: '#ffffff',
    '&:before': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
    },
    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      boxShadow: 'none',
    },
  },
});

export const SliderTimeIndicator = styled(Slider)(({ theme }) => ({
  color: 'white',
  height: 4,
  '& .MuiSlider-thumb': {
    width: 8,
    height: 8,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    '&:before': {
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
    },
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${
        theme.palette.mode === 'dark'
          ? 'rgb(255 255 255 / 16%)'
          : 'rgb(0 0 0 / 16%)'
      }`,
    },
    '&.Mui-active': {
      width: 20,
      height: 20,
    },
  },
  '& .MuiSlider-rail': {
    opacity: 0.28,
  },
}));
