import React from "react";
import { Link } from "react-router-dom";
import cameraImage from "../assets/left.png"; // Import image for camera window
import formImage from "../assets/right.jpg"; // Import image for form
import './choice.css';
//import mainBack from '../assets/backgroundNew.png'
import SurpriseButton from '../components/Buttons/Surprise-Button';



function Choice() 
  {return (
    <div className="choice-container" >
      <h1>Personalized Music Recommendations Await !</h1>
      <div className="options-container">
        {/* Left half with camera window  */}
        <div className="option">
          <h2>Face the Music</h2>
          <div className="camera-window">
            <img src={cameraImage} alt="Camera Window" />
          </div>
          <p>Let's detect your mood with our face analyzer.</p>
          <Link to="/FaceAnalyzer">
            <button className="option-button1">Face Analyzer</button>
          </Link>
        </div>
        <button className="surprise-button" onClick={SurpriseButton} href="/Emoji">Surprise Me</button>
        {/* Right half with form image */}
        <div className="option">
          <h2>Form the Tune</h2>
          <div className="form-image">
            <img src={formImage} alt="Form" />
          </div>
          <p>Let's find how you are feeling with our emoji quiz.</p>
          <Link to="/Questionnaire">
            <button className="option-button2">Quiz Zone</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Choice;
