import React, {useEffect} from 'react';
import partyVibe from "../assets/Party Vibes.png";
import beachVibe from "../assets/Beach Vibes.png";
import happyVibe from "../assets/Happy Vibes.png";
import './emoji.css';

function Emoji() {

  const handleKeyword = (keyword) => {
    console.log(keyword);
    window.location.href = `/loadingResults?keyword=${keyword}`;
  }

  const handleRedirect = (page) => {
    window.location.href = `/${page}`;
  };

  useEffect(() => {
    if (localStorage.getItem("code") === "null" || localStorage.getItem("code") === null)
        window.location = '/';
  }, []);

  return (
    <div className="emoji-contain">
      <div className ="home-icon" onClick={()=>handleRedirect("HomePage")}>
        <i className="fa-solid fa-house"></i>
      </div>
      <h1>So you're feeling happy. <br/>Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card" onClick={() => handleKeyword("party vibes")}>
          <img src={partyVibe} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("beach vibes")}>
          <img src={beachVibe} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("happy vibes")}>
          <img src={happyVibe} alt="Form" />
          <div className="card-container">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
