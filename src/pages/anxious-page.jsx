import React from 'react';
import anxiety from "../assets/Anti-Anxiety.png";
import focus from "../assets/Focus.png";
import relax from "../assets/Relax.jpeg";
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
        <div className="card" onClick={() => handleKeyword("anti anxiety")}>
          <img src={anxiety} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("focus")}>
          <img src={focus} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("relax")}>
          <img src={relax} alt="Form" />
          <div className="card-container">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
