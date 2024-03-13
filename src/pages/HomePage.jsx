import './HomePage.css';
import musicalBackground from '../assets/bgmusic.jpeg'
import ClientId from "../config.json";
import React, {useEffect} from "react";

const CLIENT_ID = ClientId['SPOTIFY_CLIENT_ID'];
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "http://localhost:3000/choice";
const SPACE_DELIMITER = "%20";
const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
  "user-read-private"
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

function HomePage() {
    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL_PARAM}&response_type=code&show_dialog=true`;
    };

    return (
        <div
        className="home-container"
        style={{
          backgroundImage: `url(${musicalBackground})`,
          backdropFilter: "blur(5px)", // Adjust the blur intensity as needed
          WebkitBackdropFilter: "blur(5px)", // For Safari support
        }}
        >
            <div className="content">
                <h1 className="feelsound">VibeSound</h1>
                <p>Discover music tailored just for you.</p>
                <button className="get-started-button" onClick={handleLogin}>Get Started</button>
            </div>
        </div>
 );
}

export default HomePage;





