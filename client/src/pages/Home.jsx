import React from "react";
import Navigation from "../components/Navigation";
import Header from "../assets/header.png";
import "../App.css";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navigation />
      <div className="header-img">
        <img alt="boom box" src={Header} />
      </div>
      <div className="header-text">
        <h1>
          You are what you <span className="logo">listen</span> to...{" "}
        </h1>
      </div>
      <h1 style={{ margin: "2rem" }}>
        {" "}
        What is <span className="logo"> MoodSicApp</span>?{" "}
      </h1>
      <div className="main-container">
        <div className="info-box">
          {" "}
          <h2>Listen</h2>{" "}
        </div>
        <div className="info-box">
          {" "}
          <h2>Add Music</h2>{" "}
        </div>
        <div className="info-box">
          {" "}
          <h2>Find Your New Favorite Song.</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
