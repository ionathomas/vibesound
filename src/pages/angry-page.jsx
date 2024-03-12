import React from 'react';
import frustrated from "../assets/Feeling frustrated.png";
import peace from "../assets/Finding Peace.png";
import justAngry from "../assets/Just Angry.png";
import './emoji.css';

function Emoji() {
  return (
    <div className="emoji-contain">
      <h1>So you are feeling angry. Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card">
          <img src={frustrated} alt="Form" />
          <div className="card-container">
            <h4><b>Feeling frustrated</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={peace} alt="Form" />
          <div className="card-container">
            <h4><b>Finding Peace</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={justAngry} alt="Form" />
          <div className="card-container">
            <h4><b>Just Angry</b></h4> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
