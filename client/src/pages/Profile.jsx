import React from 'react';
import Navigation from '../components/Navigation';
import SongForm from '../components/SongForm';

const Profile = () => {
  return (
    <div>
      <Navigation />
      <h1 className="center">Add a new song to the Moodsic Stream!</h1>
      <SongForm />
    </div>
  );
};

export default Profile;
