import React from "react";
import Card from "./Card";
import './FinalPage.css';
const FinalPage = ({ score, setScore, setShowStartingPage, setShowFinalPage }) => {
  // Event handler for the Play Again button
  const handlePlayAgain = () => {
    setScore(0); // Reset the score
    setShowStartingPage(true); // Show the starting page
    setShowFinalPage(false); // Hide the final page
  };

  return (
    <Card>
      <h1 className="header">
        Thank you for taking the quiz!
      </h1>
      <h3 className="main-text">
        Your score is:
      </h3>
      <h3 className="final-score">
        {score}
      </h3>
      <button
        className="play-again-btn"
        onClick={handlePlayAgain} // Attach the event handler here
      >
        Play Again
      </button>
    </Card>
  );
}

export default FinalPage;
