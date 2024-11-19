import React, { useEffect, useRef, useState } from "react";
import { useParams } from 'react-router-dom';
import { Col, Row, ProgressBar, Button, Container } from "react-bootstrap";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";
import './musicplayer.css';

const Musicplayer = ({ currentTrack, onPlayPause, isPlaying, trackInfo }) => {
    const audioRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (audioRef.current && currentTrack) {
            audioRef.current.src = currentTrack;
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [currentTrack, isPlaying]);

    useEffect(() => {
        const audioElement = audioRef.current;
    
        const updateProgress = () => {
            if (audioElement) {
                const duration = audioElement.duration;
                const currentTime = audioElement.currentTime;
                setProgress((currentTime / duration) * 100);
            }
        };
    
        if (audioElement) {
            audioElement.addEventListener('timeupdate', updateProgress);
        }
    
        return () => {
            if (audioElement) {
                audioElement.removeEventListener('timeupdate', updateProgress);
            }
        };
    }, [currentTrack]);
    

    const handlePlayPause = () => {
        onPlayPause();
    };

    return (
        <Container className="spotify-player">
            <Row className="align-items-center">
                <Col xs={3} className="text-center">
                    <img src={trackInfo.albumArt} alt="Album Art" className="album-art" />
                </Col>
                <Col xs={5}>
                    <h5 className="song-title">{trackInfo.name}</h5>
                    <p className="artist-name">{trackInfo.artist}</p>
                    <ProgressBar now={progress} className="song-progress" />
                </Col>
                <Col xs={4} className="text-center">
                    <Button variant="link" className="control-btn">
                        <FaStepBackward />
                    </Button>
                    <Button
                        variant="link"
                        className="control-btn"
                        onClick={handlePlayPause}
                    >
                        {isPlaying ? <FaPause /> : <FaPlay />}
                    </Button>
                    <Button variant="link" className="control-btn">
                        <FaStepForward />
                    </Button>
                </Col>
            </Row>
            <audio ref={audioRef} />
        </Container>
    );
};

export default Musicplayer;
