import React from 'react';
import comfort from "../assets/Finding Comfort.png";
import heartbroken from "../assets/Heartbroken.png";
import sad from "../assets/Just Sad.png";
import './emoji.css';

function Emoji() {

  const handleKeyword = (keyword) => {
    console.log(keyword);
    window.location.href = `/loadingResults?keyword=${keyword}`;
  }

  const handleRedirect = (page) => {
    window.location.href = `/${page}`;
  };

  return (
    <div className="emoji-contain">
      <div className ="home-icon" onClick={()=>handleRedirect("HomePage")}>
        <i className="fa-solid fa-house"></i>
      </div>
      <h1>So you're feeling sad. <br/>Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card" onClick={() => handleKeyword("finding comfort")}>
          <img src={comfort} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("heartbroken")}>
          <img src={heartbroken} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("just sad")}>
          <img src={sad} alt="Form" />
          <div className="card-container">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
