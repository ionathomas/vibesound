import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import cameraImage from "../assets/left.png"; // Import image for camera window
import formImage from "../assets/right.jpg"; // Import image for form
import '../pages_css/HomePage.css';

function HomePage(){

  const handlePage = (page) => {
    window.location.href = `/${page}`;
  }

  const SurpriseButton = () => {
    let x = Math.floor((Math.random() * 100) + 1);
    if (x%2 === 0)
      window.location.href = '/FaceAnalyzer';
    else
      window.location.href = '/EmojiQuiz';
  }

  useEffect(() => {
    if(localStorage.getItem("signedIn") === "0"){
      window.location = '/';
    }
    if(localStorage.getItem("code") === "null" || localStorage.getItem("code") === null) {
      localStorage.setItem("code", new URLSearchParams(window.location.search).get("code"));
      localStorage.setItem("signedIn","1");
    }
    else if (new URLSearchParams(window.location.search).get("error") === "access_denied")
      window.location = '/';
    else if(!(new URLSearchParams(window.location.search).get("code"))){
      if (localStorage.getItem("code") === "null" || localStorage.getItem("code") === null)
        signout();
    }
  }, []);

  const signout = () => {
    window.location = '/';
    localStorage.clear();
    localStorage.setItem("signedIn","0");
  }

  return (
    <div className="choice-container" >
      <div className ="signout-icon" onClick={signout}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </div>
      <h1>Personalized Music Recommendations Await !</h1>
      <div className="options-container">
        {/* Left half with camera window  */}
        <div className="option">
          <h2>Face the Music</h2>
          <div className="camera-window">
            <img src={cameraImage} alt="Camera Window" onClick={()=> handlePage("FaceAnalyzer")}/>
          </div>
          <p>Let's detect your mood with our face analyzer.</p>
          <Link to="/FaceAnalyzer">
            <button className="option-button1">Face Analyzer</button>
          </Link>
        </div>
        <button className="surprise-button" onClick={() => SurpriseButton()}>Surprise Me</button>
        <div className="option">
          <h2>Form the Tune</h2>
          <div className="form-image">
            <img src={formImage} alt="Form" onClick={()=> handlePage("EmojiQuiz")}/>
          </div>
          <p>Let's find how you are feeling with our emoji quiz.</p>
          <Link to="/EmojiQuiz">
            <button className="option-button2">Quiz Zone</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
