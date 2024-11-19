import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Musicplayer from './musicplayer';

const PlaylistShow = () => {
    const { playlistId } = useParams();
    const [tracks, setTracks] = useState([]);
    const [error, setError] = useState('');
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackInfo, setTrackInfo] = useState({ name: '', artist: '', albumArt: '' });

    const getTracks = async () => {
        try {
            let response = await fetch(
                `https://v1.nocodeapi.com/ambure/spotify/PBoNLlMkwfXzhKCk/playlists?id=${playlistId}`
            );
            let converted_data = await response.json();
            if (converted_data && converted_data.tracks && converted_data.tracks.items) {
                setTracks(converted_data.tracks.items);
            } else {
                setError('No tracks available for this playlist.');
            }
        } catch (error) {
            console.error('Error fetching tracks:', error);
            setError('Error fetching tracks.');
        }
    };

    useEffect(() => {
        const getTracks = async () => {
            try {
                let response = await fetch(
                    `https://v1.nocodeapi.com/omambure/spotify/lJWDshZvgpudURMR/playlists?id=${playlistId}`
                );
                let converted_data = await response.json();
                if (converted_data && converted_data.tracks && converted_data.tracks.items) {
                    setTracks(converted_data.tracks.items);
                } else {
                    setError('No tracks available for this playlist.');
                }
            } catch (error) {
                console.error('Error fetching tracks:', error);
                setError('Error fetching tracks.');
            }
        };
    
        getTracks();
    }, [playlistId]);
    

    const handlePlayPause = (url, track) => {
        if (currentTrack === url) {
            setIsPlaying(!isPlaying);
        } else {
            setCurrentTrack(url);
            setIsPlaying(true);
            setTrackInfo({
                name: track.name,
                artist: track.artists.map(artist => artist.name).join(', '),
                albumArt: track.album.images?.[1]?.url || 'default_image_url'
            });
        }
    };

    if (error) {
        return <div className="text-white text-center">{error}</div>;
    }

    return (
        <Container style={{ marginTop: 100 }}>
            <Row>
                {tracks.map((trackData) => {
                    const track = trackData.track;
                    const previewUrl = track.preview_url;

                    return (
                        <Col key={track.id} xs={12} sm={12} md={12} lg={12} className="mb-4">
                            <div
                                className="track-card rounded border border-secondary p-3"
                                style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
                            >
                                <Row className="align-items-center">
                                    <Col xs={2} className="">
                                        <img className="img-fluid rounded" style={{width:100+"px"}} src={track.album.images?.[1]?.url || 'default_image_url'} alt={track.name} />
                                    </Col>
                                    <Col xs={10}>
                                        <h5 className="text-white">{track.name}</h5>
                                        <p className="text-white">{track.artists.map(artist => artist.name).join(', ')}</p>
                                        
                                        {previewUrl ? (
                                            <Button 
                                                variant="primary" 
                                                onClick={() => handlePlayPause(previewUrl, track)}
                                                className="mt-2"
                                            >
                                                {currentTrack === previewUrl && isPlaying ? "Pause" : "Play"}
                                            </Button>
                                        ) : (
                                            <a 
                                                href={track.external_urls.spotify} 
                                                className="btn btn-primary mt-2"
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                Listen on Spotify
                                            </a>
                                        )}
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    );
                })}
            </Row>
            <Musicplayer currentTrack={currentTrack} onPlayPause={() => handlePlayPause(currentTrack, trackInfo)} isPlaying={isPlaying} trackInfo={trackInfo} />
        </Container>
    );
};

export default PlaylistShow;
