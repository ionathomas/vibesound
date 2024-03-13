import './HomePage.css';
import musicalBackground from '../assets/bgmusic.jpeg'
import ClientId from "../spotify/config.json";
import React, {useEffect} from "react";
import Choice from "./choice";


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

const getReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashtag = hash.substring(1);
  const paramsInUrl = stringAfterHashtag.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    console.log(currentValue);
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};


function HomePage() {

    useEffect(() => {
        if (window.location.hash) {
          const { access_token, expires_in, token_type } =
            getReturnedParamsFromSpotifyAuth(window.location.hash);

          localStorage.clear();

          localStorage.setItem("accessToken", access_token);
          localStorage.setItem("tokenType", token_type);
          localStorage.setItem("expiresIn", expires_in);
        }
    });

    const handleLogin = () => {
        console.log(localStorage.getItem("accessToken"));
        if(localStorage.getItem("accessToken")) {
            window.location.href = "/choice";
        }
        else{
            window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
        }

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





