import React, {useEffect} from 'react';
import frustrated from "../assets/Feeling frustrated.png";
import peace from "../assets/Finding Peace.png";
import justAngry from "../assets/Just Angry.png";
import './emoji.css';

function Emoji() {
  const handleKeyword = (keyword) => {
    console.log(keyword);
    window.location.href = `/loadingResults?keyword=${keyword}`;
  }

  const handleRedirect = (page) => {
    window.location.href = `/${page}`;
  };

  useEffect(() => {
    if (localStorage.getItem("code") === "null" || localStorage.getItem("code") === null)
        window.location = '/';
  }, []);

  return (
    <div className="emoji-contain">
      <div className ="home-icon" onClick={()=>handleRedirect("HomePage")}>
        <i className="fa-solid fa-house"></i>
      </div>
      <h1>So you are feeling angry. <br/>Tell me more... </h1>
      <div className="emoji-grid">
        <div className="card" onClick={() => handleKeyword("feeling frustrated")}>
          <img src={frustrated} alt="Form"/>
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("finding peace")}>
          <img src={peace} alt="Form" />
          <div className="card-container">
          </div>
        </div>
        <div className="card" onClick={() => handleKeyword("just angry")}>
          <img src={justAngry} alt="Form" />
          <div className="card-container">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emoji;
