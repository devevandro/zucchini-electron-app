import { styled } from '@mui/material';
import Card from '@mui/material/Card';

export const CardStyled = styled(Card)(() => ({
  backgroundColor: '#345',
  color: '#ffffff',

  '&:hover': {
    backgroundColor: '#40556a',
    opacity: '0.6',
    transition: '0.3s',
  }
}))
