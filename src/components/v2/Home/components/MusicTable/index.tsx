import { Fragment, FC, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IItems, IPlaylist } from '../../../../../utils/interface/playlist';
import axios from 'axios';

interface MusicTableProps {
  currentIndex: number;
  playlistId: string;
  getMusic: (music: IItems) => void;
  getMusics: (musics: IItems[]) => void;
  onClickMusic: (value: boolean) => void;
}

export const MusicTable: FC<MusicTableProps> = props => {
  const { currentIndex, playlistId, getMusic, getMusics, onClickMusic } = props;
  const [musics, setMusics] = useState<IItems[]>([]);
  const [currentMusicIndex, setCurrentMusicIndex] = useState<number>(-1);
  
  useEffect(() => {
    setCurrentMusicIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    const response = axios.get<any>(
      `https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyB5kGresF2QzKJ3SLFhRax_qPS_Xmh3spc&playlistId=${playlistId}&part=snippet&maxResults=50`,
    );

    response.then(value => {
      const { data } = value;
      const { items }: IPlaylist = data;
      setMusics(items);
    })
  }, [])

  const handleMusics = (music: IItems, musics: IItems[]) => {
    getMusic(music);
    getMusics(musics);
  }

  return (
    <Fragment>
      <Table size="small" sx={{ color: '#ffffff', backgroundColor: '#345' }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#d3d3d3' }}>Artista</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {musics.map((music, index) => (
            <TableRow
              key={music.id}
              sx={{
                cursor: 'pointer', 
                opacity:  music ===
                musics[currentMusicIndex === -1 ? currentIndex : currentMusicIndex]
                  ? '0.4'
                  : '',
              }}
              onDoubleClick={() => {
                onClickMusic(true);
                handleMusics(music, musics);
                setCurrentMusicIndex(index);
              }}
            >
              <TableCell
                sx={{
                  color: '#ffffff',
                  padding: '10px 16px',
                  borderBottom: '1px dotted',
                  fontSize: '12px',
                }}>
                  {music?.snippet?.title}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
}
