import React, {useEffect} from 'react';
import chill from "../assets/Chill Vibes.jpeg";
import instrumental from "../assets/Instrumental.png";
import meditation from "../assets/Meditation.jpg";
import '../pages_css/emoji.css';

function Emoji() {

  const handleRedirect = (page) => {
    window.location.href = `/${page}`;
  };

  const handleKeyword = (keyword) => {
    console.log(keyword);
    window.location.href = `/loadingResults?keyword=${keyword}`;
  }

  useEffect(() => {
    if (localStorage.getItem("code") === "null" || localStorage.getItem("code") === null)
        window.location = '/';
  }, []);

  return (
    <div className="emoji-contain">
      <div className ="home-icon" onClick={()=>handleRedirect("HomePage")}>
        <i className="fa-solid fa-house"></i>
      </div>
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
