import React, { useEffect, useState } from "react";
import { Col,  Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Search() {
  const [tracks, setTracks] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null); // Correctly defined useState
  const location = useLocation();

  const getTracks = async (query) => {
    let data = await fetch(
      `https://v1.nocodeapi.com/omambure/spotify/lJWDshZvgpudURMR/search?q=${query}&type=track`
    );
    let converted_data = await data.json();
    setTracks(converted_data.tracks.items);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get("q");
    if (searchTerm) {
      getTracks(searchTerm);
    }
  }, [location.search]);

  const handlePlayAudio = (audioElement) => {
    if (currentAudio && currentAudio !== audioElement) {
      currentAudio.pause(); // Pause the currently playing audio
    }
    setCurrentAudio(audioElement); // Set the new audio element as the current one
  };

  return (
    <div className="" style={{ marginTop: 80 }}>
      {/* Tracks Display */}
      <Row className="mt-5">
        {tracks.map((element) => (
          <Col key={element.id} sm={12} md={4} className="text-center mb-4">
            <div
              className="artist-card position-relative rounded border border-secondary"
              style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              <img
                src={element.album.images[2]?.url}
                alt={element.name}
                className="img-fluid rounded-circle"
              />
              <div className="artist-info text-white">
                <h5 className="mb-0">{element.name}</h5>
                <p className="mb-0">Artist name: {element.album.artists[0].name}</p>
                <div
                  className="w-100 bg-dark p-2 rounded border border-secondary"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                >
                  <audio
                    src={element.preview_url}
                    controls
                    className="w-100"
                    onPlay={(e) => handlePlayAudio(e.target)}
                  ></audio>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Search;
