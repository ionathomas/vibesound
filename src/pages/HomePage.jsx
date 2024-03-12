// import React, { useState } from "react";
import './HomePage.css';
import { Link } from "react-router-dom";
//import Choice from "./choice";
import musicalBackground from '../assets/bgmusic.jpeg'

function HomePage() {
  // const [isOn, setIsOn] = useState(false);
  // // Function to toggle the power button state and navigate to the desired page
  // const togglePower = () => {
  //   setIsOn(prevState => !prevState);
  //   // Add a delay before navigating to simulate animation
  //   setTimeout(() => {
  //     // Navigate to the desired page using window.location.href
  //     window.location.href = '/choice';
  //   }, 500); // Adjust the delay (in milliseconds) as needed
  // };
  return (
    <div
    className="home-container"
    style={{
      backgroundImage: `url(${musicalBackground})`,
      backdropFilter: "blur(5px)", // Adjust the blur intensity as needed
      WebkitBackdropFilter: "blur(5px)", // For Safari support
    }}
  >
      <div className="content">
        <h1 className="feelsound">VibeSound</h1>
        <p>Discover music tailored just for you.</p>
        <Link to="/choice">
          {
          <button className="get-started-button">Get Started</button>
          }
        </Link>
      </div> 
      
    </div> 
 );
}

export default HomePage;





