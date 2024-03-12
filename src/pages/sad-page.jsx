import React from 'react';
import comfort from "../assets/Finding Comfort.png";
import heartbroken from "../assets/Heartbroken.png";
import sad from "../assets/Just Sad.png";
import './emoji.css';

function Emoji() {
  return (
    <div className="emoji-contain">
      <h1>So you're feeling sad. Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card">
          <img src={comfort} alt="Form" />
          <div className="card-container">
            <h4><b>Finding Comfort</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={heartbroken} alt="Form" />
          <div className="card-container">
            <h4><b>Heartbroken</b></h4> 
          </div>
        </div>
        <div className="card">
          <img src={sad} alt="Form" />
          <div className="card-container">
            <h4><b>Just Sad</b></h4> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
