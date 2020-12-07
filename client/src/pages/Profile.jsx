import React from "react";
import Navigation from "../components/Navigation";
import SongForm from "../components/SongForm";

const Profile = () => {
  return (
    <div>
      <Navigation />
      <h1 className="center" style={{ marginTop: "2rem" }}>
        Add a new song to the <span className="logo">Moodsic</span> stream!
      </h1>
      <SongForm />
    </div>
  );
};

export default Profile;
