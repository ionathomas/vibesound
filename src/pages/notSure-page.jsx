import React from 'react';
import nostalgic from "../assets/Feeling Nostalgic.png";
import anything from "../assets/Anything.png";
import niche from "../assets/Niche Mix.png";
import './emoji.css';

function Emoji() {
  return (
    <div className="emoji-contain">
      <h1>So you're feeling anxious. Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card">
          <img src={nostalgic} alt="Form" />
          <div className="card-container">
            <h4><b>Feeling Nostalgic</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={anything} alt="Form" />
          <div className="card-container">
            <h4><b>Anything</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={niche} alt="Form" />
          <div className="card-container">
            <h4><b>Niche Mix</b></h4> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
