import React from "react";
import Navigation from "../components/Navigation";
import SongList from "../components/SongList";
import "../App.css";

const Profile = () => {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <Navigation />
      <h2 className="center">Check out the songs from our users!</h2>
      <SongList />
    </div>
  );
};

export default Profile;
