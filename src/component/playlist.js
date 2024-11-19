import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Container, Button } from 'react-bootstrap';

const Playlist = () => {
    const { categoryId } = useParams();
    const [playlists, setPlaylists] = useState([]);
    const navigate = useNavigate();

    const getPlaylists = async () => {
        try {
            let response = await fetch(
                `https://v1.nocodeapi.com/omambure/spotify/lJWDshZvgpudURMR/browse/categoryPlaylist?category_id=${categoryId}`
            );
            let converted_data = await response.json();
            setPlaylists(converted_data.playlists.items);
        } catch (error) {
            console.error('Error fetching playlists:', error);
        }
    };

    useEffect(() => {
        getPlaylists();
    }, [categoryId]);

    const handlePlaylistClick = (playlistId) => {
        navigate(`/playlistshow/${playlistId}`);
    };

    return (
        <Container style={{ marginTop: 100 }}>
            <Row>
                {playlists.map((playlist) => (
                    <Col key={playlist.id} sm={12} md={3} className="text-center mb-4">
                        <div
                            className="playlist-card position-relative rounded border border-secondary"
                            style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                            onClick={() => handlePlaylistClick(playlist.id)}
                        >
                            {playlist.images && playlist.images.length > 0 && (
                                <img
                                    src={playlist.images[0].url}
                                    alt={playlist.name}
                                    className="img-fluid rounded-circle"
                                />
                            )}
                            <h5 className="mt-2 text-white">{playlist.name}</h5>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Playlist;
