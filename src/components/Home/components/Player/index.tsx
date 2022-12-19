import { FC, MutableRefObject } from 'react';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player';

interface PlayerProps {
  paused: boolean;
  url: string;
  playerRef: MutableRefObject<any>;
}

export const Player: FC<PlayerProps> = props => {
  const { paused, url, playerRef } = props;

  return (
    <Box sx={{ display: 'none' }}>
      <ReactPlayer
        ref={playerRef}
        playing={paused}
        url={url}
      />
    </Box>
  )
}
