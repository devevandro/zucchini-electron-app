import { useState, useRef, FC, MutableRefObject } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
// import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import {
  BoxContainer,
  SliderTimeIndicator,
  SliderVolume,
  TinyText,
  WallPaper,
  Widget,
} from './styles';
import { formatDuration } from '../../../../utils/formatDuration';
import { Player } from '../Player';
import { IItems } from '../../../../utils/interface/playlist';

const mainIconColor = '#ffffff';
const lightIconColor = '#ffffff';

interface MusicPlayerProps {
  openMusicTable: boolean;
  music: IItems;
  musics: IItems[];
  prevNextMusic: (music: IItems) => void;
}

export const MusicPlayer: FC<MusicPlayerProps> = props => {
  const { openMusicTable, music, musics, prevNextMusic } = props;
  const playerRef: MutableRefObject<any> = useRef();
  const theme = useTheme();
  const [duration, setDuration] = useState<number>(0); // seconds
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState(false);

  /* function handleSayHello() {
    window.Main.sendMessage('Hello World')
    console.log('Message sent! Check main process log in terminal.')
    https://www.youtube.com/watch?v=ysz5S6PUM-U
  } */

  const handleFindIndex = () => {
    return musics?.findIndex(musicValue => musicValue?.id === music?.id);
  }

  const goPreviousMusic = () => {
    const prevIndex = handleFindIndex();
    const nextIndex = prevIndex - 1 < musics?.length ? prevIndex - 1 : 0;
    prevNextMusic(musics[nextIndex]);
  }

  const goNextMusic = () => {
    const prevIndex = handleFindIndex();
    const nextIndex = prevIndex + 1 < musics?.length ? prevIndex + 1 : 0;
    prevNextMusic(musics[nextIndex]);
  }

  return (
    <>
      {openMusicTable && <> <Player
        playerRef={playerRef}
        paused={paused} 
        url={`https://www.youtube.com/watch?v=${music?.snippet?.resourceId?.videoId}`}
      /></>}
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Widget>
          <BoxContainer sx={{ mb: -1 }}>
            <Box sx={{ minWidth: 0 }}>
              <Typography variant="caption" color="white" fontWeight={500}>
                {music?.snippet?.title}
              </Typography>
              <Typography color="white" noWrap>
                <b>{music?.snippet?.title}</b>
              </Typography>
            </Box>
          </BoxContainer>
          <SliderTimeIndicator
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value as number)}
            theme={theme}
          />
          <BoxContainer
            sx={{
              mt: -1,
            }}
          >
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </BoxContainer>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: -2,
            }}
          >
            <IconButton aria-label="previous song" onClick={goPreviousMusic}>
              <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <IconButton
              aria-label={paused ? 'play' : 'pause'}
              onClick={() => {
                setPaused(!paused);
                setDuration(playerRef?.current?.getDuration());
                console.log('hands-duration', playerRef?.current?.getDuration());
              }}
            >
              {!paused ? (
                <PlayArrowRounded
                  sx={{ fontSize: '1.8rem' }}
                  htmlColor={mainIconColor}
                />
              ) : (
                <PauseRounded
                  sx={{ fontSize: '1.8rem' }}
                  htmlColor={mainIconColor}
                />
              )}
            </IconButton>
            <IconButton aria-label="next song" onClick={goNextMusic}>
              <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
            </IconButton>
            <Stack
              spacing={2}
              direction="row"
              sx={{
                position: 'absolute',
                right: 15,
                top: 90,
                mb: 1,
                width: 115,
              }}
              alignItems="center"
            >
              {/* <VolumeDownRounded htmlColor={lightIconColor} /> */}
              <VolumeUpRounded htmlColor={lightIconColor} />
              <SliderVolume aria-label="Volume" defaultValue={30} />
            </Stack>
          </Box>
        </Widget>
        <WallPaper />
      </Box>
    </>
  )
}
