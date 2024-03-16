import React, {useRef, useState} from "react";
import Webcam from "react-webcam"; // Import Webcam component
import './FaceAnalyzer.css';
import axios from "axios";

function FaceAnalyzer() {
  // Function to handle face capture
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState("");

  async function capture () {
      const imageSrc = webcamRef.current.getScreenshot();

      try {
          await axios.post('/upload', {image: imageSrc})
              .then((response) => {
                  console.log(response);
                  if (response['data']['emotion'] === 404)
                      console.log("Error in processing the image. Try again");
                  else{
                      window.location.href = `/results?keyword=${response['data']['emotion']}`;
                  }
              });
          console.log('Image sent to server.');
          setImgSrc(imageSrc);
      } catch (error) {
          console.error('Error sending image to server:', error);
      }
  }

  return (
    <div className="face-analyzer-container">
      <h1>Face Analyzer</h1>
      <div className="webcam-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          mirrored={false}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
      </div>
      <button onClick={capture} className="capture-button">Capture</button>
    </div>
  );
}

export default FaceAnalyzer;
