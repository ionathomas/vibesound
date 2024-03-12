import React from "react";
import Webcam from "react-webcam"; // Import Webcam component
import './FaceAnalyzer.css';

function FaceAnalyzer() {
  // Function to handle face capture
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Process the captured image or send it for analysis
  };

  // Reference to the webcam component
  const webcamRef = React.useRef(null);

  return (
    <div className="face-analyzer-container">
      <h1>Face Analyzer</h1>
      <div className="webcam-container">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
      </div>
      <button onClick={capture} className="capture-button">Capture</button>
    </div>
  );
}

export default FaceAnalyzer;
