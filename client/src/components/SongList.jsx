import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { Card } from 'react-bootstrap';
import '../App.css';

const SongList = () => {
  const { songs, setSongs } = useContext(AppContext);
  useEffect(() => {
    axios
      .get('/api/songs')
      .then((response) => setSongs(response.data))
      .catch((err) => console.log(err));
  }, [setSongs]);

  return (
    <div
      className="music_container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '5px'
      }}
    >
      {songs.map((song) => {
        return (
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{song.title}</Card.Title>
              <Card.Text>{song.artist}</Card.Text>
              <Card.Text>{song.runtime}</Card.Text>
              <Card.Link href={song.youtubeUrl}>YouTube Link</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default SongList;
