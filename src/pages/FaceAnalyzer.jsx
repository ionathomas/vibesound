import React, {useRef} from "react";
import Webcam from "react-webcam"; // Import Webcam component
import './FaceAnalyzer.css';
import axios from "axios";

function FaceAnalyzer() {
  // Function to handle face capture
  const webcamRef = useRef(null);

  async function capture () {
      const imageSrc = webcamRef.current.getScreenshot();

      try {
          await axios.post('/upload', {image: imageSrc})
              .then((response) => {
                  console.log(response);
                  if (response['data']['emotion'] === 404){
                      const element = document.getElementById("ErrorMsg");
                      if (element)
                        element.style.visibility = "visible";
                      console.log("Error in processing the image. Try again");
                  }
                  else{
                      window.location.href = `/recommendations?keyword=${response['data']['emotion']}`;
                  }
              });
          console.log('Image sent to server.');
      } catch (error) {
          console.error('Error sending image to server:', error);
      }
  }

  return (
    <div className="face-analyzer-container">
      <h1>Face Analyzer</h1>
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
