import React from 'react';
import Navigation from '../components/Navigation';
import SongList from '../components/SongList';
import '../App.css';

const Profile = () => {
  return (
    <div>
      <Navigation />
      <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>
        Check out the songs from our users!
      </h3>
      <SongList />
    </div>
  );
};

export default Profile;
