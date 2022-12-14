import { FC, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { IPlaylist } from '../../../../utils/interface/playlist'
import { VirtualizedTable } from './styles';

interface Data {
  calories: number
  carbs: number
  dessert: string
  fat: number
  id: number
  protein: number
}

interface MusicTableProps {
  playlistId: string;
};

export const MusicTable: FC<MusicTableProps> = props => {
  const { playlistId } = props;
  const rows: Data[] = []
  console.log('hands-music-table', playlistId);
  
  useEffect(() => {
    const response = axios.get<IPlaylist | any>(`https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyB5kGresF2QzKJ3SLFhRax_qPS_Xmh3spc&playlistId=${playlistId}&part=snippet&maxResults=50`);
    response.then(value => {
      const { data } = value;
      console.log(data?.items);
    });
  }, []);

  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 780,
            label: 'Nome',
            dataKey: 'dessert',
          },
          {
            width: 120,
            label: 'ID',
            dataKey: 'calories',
            numeric: true,
          },
        ]}
      />
    </Paper>
  )
}
