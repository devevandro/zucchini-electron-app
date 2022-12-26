import { Button, TextField } from '@mui/material'
import { styled } from '@mui/styles'
import Dialog from '@mui/material/Dialog'
import DialogContentText from '@mui/material/DialogContentText'

export const AddButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '8px 30px',
  border: '1px solid #ffffff',
  lineHeight: 1.5,
  backgroundColor: 'transparent',
  color: '#ffffff',
  borderColor: '#ffffff',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
  },
})

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    background: '#345',
  },
  '& .MuiDialogActions-root': {
    background: '#345',
  },
}))

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  border: '1px solid transparent',
  color: '#ffffff',

  '& .MuiInputBase-input-MuiInput-input:focus': {
    color: '#345',
  },
}))

export const DialogContentTextStyled = styled(DialogContentText)(() => ({
  width: '410px',
  marginBottom: '25px',
  color: '#ffffff',
  textAlign: 'justify',
}))
