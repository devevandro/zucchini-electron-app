import { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IItems, IPlaylist } from '../../../../utils/interface/playlist';
import { CardStyled } from './styles';
import axios from 'axios';

interface MusicTableProps {
  playlistId: string;
  getMusic: (music: IItems) => void;
  getMusics: (musics: IItems[]) => void;
}

export const MusicTable: FC<MusicTableProps> = props => {
  const { playlistId, getMusic, getMusics } = props;
  const [musics, setMusics] = useState<IItems[]>();

  useEffect(() => {
    const response = axios.get<any>(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyB5kGresF2QzKJ3SLFhRax_qPS_Xmh3spc&playlistId=${playlistId}&part=snippet&maxResults=50`,
    );

    response.then(value => {
      const { data } = value;
      const { items }: IPlaylist = data;
      setMusics(items);
    });
  }, []);

  const handleMusics = (music: IItems, musics: IItems[]) => {
    getMusic(music);
    getMusics(musics);
  };

  return (
    <>
      {musics?.map((music, index) => {
        return (
          <>
            <CardStyled
            key={index}
            sx={{
              display: 'flex',
              marginBottom: '8px',
              cursor: 'pointer'
            }}
            onClick={() => handleMusics(music, musics)}
          >
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={music?.snippet?.thumbnails?.default?.url}
              alt="Thumbnails of music"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" sx={{ fontSize: '14px',  fontWeight: '700' }}>
                  {music?.snippet?.title}
                </Typography>
                <Typography
                  component="div"
                  sx={{ fontSize: '11px', color: '#d3d3d3'}}
                >
                  {music?.snippet?.title}
                </Typography>
              </CardContent>
            </Box>
          </CardStyled>
          </>
        )
      })}
    </>
  )
}
