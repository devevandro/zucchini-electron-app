import { FC, MutableRefObject } from 'react';
import Box from '@mui/material/Box';
import ReactPlayer from 'react-player';

interface PlayerProps {
  url: string;
  muted: boolean;
  volume: number;
  paused: boolean;
  playerRef: MutableRefObject<any>;
  onFinish: () => void;
  onProgress: (progress: any) => void;
}

export const Player: FC<PlayerProps> = props => {
  const { paused, url, muted, volume, playerRef, onFinish, onProgress } = props;

  return (
    <Box sx={{ display: 'none' }}>
      <ReactPlayer
        ref={playerRef}
        playing={paused}
        url={url}
        volume={volume}
        muted={muted}
        onEnded={onFinish}
        onProgress={onProgress}
      />
    </Box>
  )
}
