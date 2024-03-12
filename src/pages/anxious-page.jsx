import React from 'react';
import anxiety from "../assets/Anti-Anxiety.png";
import focus from "../assets/Focus.png";
import relax from "../assets/Relax.jpeg";
import './emoji.css';

function Emoji() {
  return (
    <div className="emoji-contain">
      <h1>So you're feeling anxious. Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card">
          <img src={anxiety} alt="Form" />
          <div className="card-container">
            <h4><b>Anti-Anxiety</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={focus} alt="Form" />
          <div className="card-container">
            <h4><b>Focus</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={relax} alt="Form" />
          <div className="card-container">
            <h4><b>Relax</b></h4> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
