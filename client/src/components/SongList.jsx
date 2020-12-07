import React, { useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { Card } from "react-bootstrap";
import "../App.css";

const SongList = () => {
  const { songs, setSongs } = useContext(AppContext);
  useEffect(() => {
    axios
      .get("/api/songs")
      .then((response) => setSongs(response.data))
      .catch((err) => console.log(err));
  }, [setSongs]);

  return (
    <div
      className="music_container"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {songs.map((song) => {
        return (
          <Card
            className="d-flex align-items-center"
            style={{ width: "30rem", background: "rgba(255, 255, 255, 0.2)" }}
          >
            <Card.Body>
              <Card.Title>{song.title}</Card.Title>
              <Card.Text>{song.artist}</Card.Text>
              <iframe
                width="460"
                height="270"
                src={song.youtubeUrl}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
              ></iframe>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default SongList;
