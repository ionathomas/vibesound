import React from 'react';
import partyVibe from "../assets/Party Vibes.png";
import beachVibe from "../assets/Beach Vibes.png";
import happyVibe from "../assets/Happy Vibes.png";
import './emoji.css';

function Emoji() {
  return (
    <div className="emoji-contain">
      <h1>So you're feeling happy. Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card">
          <img src={partyVibe} alt="Form" />
          <div className="card-container">
            <h4><b>Party Vibes</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={beachVibe} alt="Form" />
          <div className="card-container">
            <h4><b>Beach Vibes</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={happyVibe} alt="Form" />
          <div className="card-container">
            <h4><b>Happy Vibes</b></h4> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
