import React, { useEffect, useState } from "react";
import axios from "axios";

const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/search?q=";
const PLAYLIST_QUERY_TYPE = "&type=playlist";
const PLAYLIST_QUERY_MARKET = "&market=CA";

/*
  Need to add
  1. Token expire check. If expired-> login in again
*/
const SpotifyPlaylists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});
  const [PLAYLIST_QUERY, setQuery] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleKeyword = (e) => {
    let text = e.replaceAll(' ','+');
    setQuery(text);
  }

  const handleGetPlaylists = () => {
    console.log(PLAYLIST_QUERY)
    let endpoint = PLAYLISTS_ENDPOINT+PLAYLIST_QUERY+PLAYLIST_QUERY_TYPE+PLAYLIST_QUERY_MARKET;
    axios
      .get(endpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="text" placeholder="Enter keyword" onChange={e => handleKeyword(e.target.value)}/>
      <button onClick={handleGetPlaylists}>Get Playlists</button>
    </div>
  );
};

export default SpotifyPlaylists;
