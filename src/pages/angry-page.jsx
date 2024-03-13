import React from 'react';
import frustrated from "../assets/Feeling frustrated.png";
import peace from "../assets/Finding Peace.png";
import justAngry from "../assets/Just Angry.png";
import './emoji.css';
import results from "./results";
import Results from "./results";

function Emoji() {
  const handleKeyword = (keyword) => {
    console.log(keyword);
    window.location.href = `/results?keyword=${keyword}`;
  }

  return (
    <div className="emoji-contain">
      <h1>So you are feeling angry. <br/>Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card" onClick={() => handleKeyword("frustrate")}>
          <img src={frustrated} alt="Form"/>
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("release anger")}>
          <img src={peace} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("angry mix")}>
          <img src={justAngry} alt="Form" />
          <div className="card-container">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
