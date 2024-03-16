import React from 'react';
import nostalgic from "../assets/Feeling Nostalgic.png";
import anything from "../assets/Anything.png";
import niche from "../assets/Niche Mix.png";
import './emoji.css';

function Emoji() {

  const handleKeyword = (keyword) => {
    console.log(keyword);
    window.location.href = `/recommendations?keyword=${keyword}`;
  }

  return (
    <div className="emoji-contain">
      <h1>So you're feeling anxious. <br/>Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card" onClick={() => handleKeyword("feeling nostalgic")}>
          <img src={nostalgic} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("anything")}>
          <img src={anything} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("niche")}>
          <img src={niche} alt="Form" />
          <div className="card-container">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
