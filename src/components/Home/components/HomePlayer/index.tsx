import { useState, FC } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Container from '@mui/material/Container';
import { AddButton, BootstrapDialog, TextFieldStyled } from './styles';

interface HomePlayerProps {
  onClose: (playlistId: string) => void;
}

export const HomePlayer: FC<HomePlayerProps> = props => {
  const { onClose } = props;
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [playlistId, setPlaylistId] = useState<string>('');

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 10,
      }}
    >
      <AddButton variant="outlined" onClick={handleClickOpen}>
        ADD Playlist ID
      </AddButton>
      <BootstrapDialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText sx={{ color: '#ffffff' }}>
            Para ouvir sua playlist favorita do Youtube basta inserir o ID da playlist
            no campo abaixo. Lembrando que somente playlists no modo pública serão aceitas.
          </DialogContentText>
          <TextFieldStyled
            error={error}
            helperText={error && 'Obrigatório'}
            autoFocus
            margin="dense"
            id="name"
            label="Playlist ID"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => {
              setPlaylistId(e.target.value);
              setError(false);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: '#ffffff' }} onClick={() => {
            handleClose();
            setError(false);
          }}>Cancelar</Button>
          <Button sx={{ color: '#ffffff' }} onClick={() => {
            if (playlistId !== '') {
              handleClose();
              onClose(playlistId);
              setError(false);
            }
            setError(true);
          }}>Adicionar</Button>
        </DialogActions>
      </BootstrapDialog>
    </Container>
  );
};
