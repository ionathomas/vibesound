// Questionnaire.js

import React from "react";
import { Link } from "react-router-dom";
import "./EmojiQuiz.css";

function EmojiQuiz() {
  return (
    <div className="questionnaire-container">
      <h1 className="question">How is your mood ?</h1>
      <div className="grid-container">
        <div className="grid-item">
          <div className="emoji-container">
            <Link className="emoji-link" to="/happy-page">
            😁
            </Link>
            {/* <Link to="/happy-page">
              <span className="large">😁</span>
            </Link> */}
            <Link className="emoji-name" to="/happy-page">
              Happy
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="emoji-container">
            <Link className="emoji-link" to="/sad-page">
              😔
            </Link>
            <Link className="emoji-name" to="/sad-page">
              Sad
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="emoji-container">
            <Link className="emoji-link" to="/angry-page">
              😠
            </Link>
            <Link className="emoji-name" to="/angry-page">
              Angry
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="emoji-container">
            <Link className="emoji-link" to="/anxious-page">
              😧
            </Link>
            <Link className="emoji-name" to="/anxious-page">
              Anxious
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="emoji-container">
            <Link className="emoji-link" to="/calm-page">
              😌
            </Link>
            <Link className="emoji-name" to="/calm-page">
              Calm
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="emoji-container">
            <Link className="emoji-link" to="/notSure-page">
            🤔
            </Link>
            <Link className="emoji-name" to="/notSure-page">
              Not Sure
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmojiQuiz;
