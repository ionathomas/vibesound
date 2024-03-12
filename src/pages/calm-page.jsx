import React from 'react';
import chill from "../assets/Chill Vibes.jpeg";
import instrumental from "../assets/Instrumental.png";
import meditation from "../assets/Meditation.jpg";
// import nature from "../assets/Nature.png";
import './emoji.css';

function Emoji() {
  return (
    <div className="emoji-contain">
      <h1>So you're feeling calm. Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card">
          <img src={chill} alt="Form" />
          <div className="card-container">
            <h4><b>Chill Vibes</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={instrumental} alt="Form" />
          <div className="card-container">
            <h4><b>Instrumental</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={meditation} alt="Form" />
          <div className="card-container">
            <h4><b>Meditation</b></h4> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
