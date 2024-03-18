import React, {useEffect, useRef} from "react";
import Webcam from "react-webcam"; // Import Webcam component
import './FaceAnalyzer.css';
import axios from "axios";


function FaceAnalyzer() {
  // Function to handle face capture
  const webcamRef = useRef(null);

  const handleRedirect = (page) => {
    window.location.href = `/${page}`;
  };

  useEffect(() => {
    if (localStorage.getItem("code") === "null" || localStorage.getItem("code") === null)
        window.location = '/';
  }, []);

  async function capture () {
      const imageSrc = webcamRef.current.getScreenshot();

      try {
          const loader = document.getElementById("loader");
          if(loader){
              loader.style.display = "block"
          }
          await axios.post('/upload', {image: imageSrc})
              .then((response) => {
                  console.log(response);
                  if (response['data']['emotion'] === 404){
                      const element = document.getElementById("ErrorMsg");
                      if (element) {
                          element.style.visibility = "visible";
                          loader.style.display = "none"
                      }
                      console.log("Error in processing the image. Try again");
                  }
                  else{
                      window.location.href = `/loadingResults?keyword=${response['data']['emotion']}`;
                  }
              });
          console.log('Image sent to server.');
      } catch (error) {
          console.error('Error sending image to server:', error);
      }
  }

  return (
    <div className="face-analyzer-container">
      <div className ="home-icon" onClick={()=>handleRedirect("HomePage")}>
        <i className="fa-solid fa-house"></i>
      </div>
      <h1>Face Analyzer</h1>
      <div id="loader" style={{display:"none"}}></div>
      <h3 id="ErrorMsg" style={{color:"darkred",
          textAlign:"center",
          visibility:"hidden"
      }}>There seemed to be an issue when analyzing your image. Please Try Again!!! </h3>
      <div className="webcam-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          mirrored={false}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
      </div>
      <button onClick={capture} className="capture-button">Identify My Mood</button>
    </div>
  );
}

export default FaceAnalyzer;
