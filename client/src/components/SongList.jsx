import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const SongList = () => {
  const { songs, setSongs } = useContext(AppContext);
  useEffect(() => {
    axios
      .get('/api/songs')
      .then((response) => setSongs(response.data))
      .catch((err) => console.log(err));
  }, [setSongs]);

  return (
    <>
      <h1>These are the songs</h1>
      {songs.map((song) => {
        return (
          <div>
            <h2>{song.title}</h2>
            <h3>{song.artist}</h3>
            <h4>{song.runtime}</h4>
            <a href={song.youtubeUrl} target="_blank">
              YouTube
            </a>
          </div>
        );
      })}
    </>
  );
};

export default SongList;
