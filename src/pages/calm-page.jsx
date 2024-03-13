import React from 'react';
import chill from "../assets/Chill Vibes.jpeg";
import instrumental from "../assets/Instrumental.png";
import meditation from "../assets/Meditation.jpg";
// import nature from "../assets/Nature.png";
import './emoji.css';

function Emoji() {

  const handleKeyword = (keyword) => {
    console.log(keyword);
    window.location.href = `/results?keyword=${keyword}`;
  }

  return (
    <div className="emoji-contain">
      <h1>So you're feeling calm. <br/>Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card" onClick={() => handleKeyword("chill")}>
          <img src={chill} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("instrumental")}>
          <img src={instrumental} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("meditation")}>
          <img src={meditation} alt="Form" />
          <div className="card-container">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
