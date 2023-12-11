import React from "react";
import Card from "./Card";
import './FinalPage.css';

/**
 * FinalPage component renders the final screen of the quiz,
 * displaying the user's score and a button to play again.
 *
 * @param {Object} props - React props containing score, setScore,
 * setShowStartingPage, and setShowFinalPage.
 * @returns {JSX.Element} FinalPage component.
 */


const FinalPage = ({ score, setScore, setShowStartingPage, setShowFinalPage }) => {
  /**
   * Event handler for the Play Again button.
   * Resets the score and shows the starting page while hiding the final page.
   */
  const handlePlayAgain = () => {
    setScore(0); // Reset the score
    setShowStartingPage(true); // Show the starting page
    setShowFinalPage(false); // Hide the final page
  };

  return (
    <Card>
      {/* Header thanking the user for taking the quiz */}
      <h1 className="header">
        Thank you for taking the quiz!
      </h1>
      {/* Displaying the user's score */}
      <h3 className="main-text">
        Your score is:
      </h3>
      <h3 className="final-score">
        {score} / 1000
      </h3>
      {/* Play Again button with an attached click event handler */}
      <button
        className="play-again-btn"
        onClick={handlePlayAgain} // Attach the event handler here
      >
        Play Again
      </button>
    </Card>
  );
}

// Exporting FinalPage component as the default export
export default FinalPage;
