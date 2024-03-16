import React from 'react';
import partyVibe from "../assets/Party Vibes.png";
import beachVibe from "../assets/Beach Vibes.png";
import happyVibe from "../assets/Happy Vibes.png";
import './emoji.css';

function Emoji() {

  const handleKeyword = (keyword) => {
    console.log(keyword);
    window.location.href = `/recommendations?keyword=${keyword}`;
  }

  return (
    <div className="emoji-contain">
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
