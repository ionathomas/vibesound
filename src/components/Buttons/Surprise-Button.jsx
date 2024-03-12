import React from 'react';
import { Link } from 'react-router-dom';

function SurpriseButton() {
  // Function to generate a random number between 0 and 1
  const getRandomNumber = () => Math.random();

  // Function to determine the destination page based on the random number
  const getDestinationPage = () => {
    const randomNumber = getRandomNumber();
    return randomNumber < 0.5 ? '/Questionnaire' : '/FaceAnalyzer';
  };

  return (
    // Use the Link component with the computed destination page
    <Link to={getDestinationPage()}>
      <button>Surprise Me</button>
    </Link>
  );
}

export default SurpriseButton;
