import React from 'react';
import Navigation from '../components/Navigation';
import SongForm from '../components/SongForm';
import SongList from '../components/SongList';

const Home = () => {
  return (
    <div>
      <Navigation />
      {/* <h1 style={{ textAlign: 'center' }}>Welcome!</h1> */}
      <SongForm />
      <SongList />
    </div>
  );
};

export default Home;
