import React, {useEffect} from 'react';
import anxiety from "../assets/Anti-Anxiety.png";
import focus from "../assets/Focus.png";
import relax from "../assets/Relax.jpeg";
import '../pages_css/emoji.css';

function Emoji() {

  const handleKeyword = (keyword) => {
    console.log(keyword);
    window.location.href = `/loadingResults?keyword=${keyword}`;
  }

  const handleRedirect = (page) => {
    window.location.href = `/${page}`;
  };

  useEffect(() => {
    const body = document.body;
    body.style.backgroundColor = "#353d45";
    body.style.backgroundImage = "radial-gradient(#97a3af, #353d45)";
    if (localStorage.getItem("code") === "null" || localStorage.getItem("code") === null)
        window.location = '/';
  }, []);

  return (
    <div className="emoji-contain">
      <div className ="home-icon" onClick={()=>handleRedirect("HomePage")}>
        <i className="fa-solid fa-house"></i>
      </div>
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
