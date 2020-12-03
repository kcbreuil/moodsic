import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const CardStyle = styled.div`
  .music_container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const SongList = () => {
  const { songs, setSongs } = useContext(AppContext);
  useEffect(() => {
    axios
      .get('/api/songs')
      .then((response) => setSongs(response.data))
      .catch((err) => console.log(err));
  }, [setSongs]);

  return (
    <CardStyle>
      <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>
        Check out the songs from our users!
      </h3>
      <div className="music_container">
        {songs.map((song) => {
          return (
            <Card style={{ width: '18rem', display: 'flex' }}>
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
    </CardStyle>
  );
};

export default SongList;
