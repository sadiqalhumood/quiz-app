import React, { useState, useEffect } from 'react';

const Result = ({ score, totalQuestions }) => {
  // State to track the best score
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    // Retrieve the best score from local storage when the component mounts
    const storedBestScore = localStorage.getItem('bestScore');

    // If there's a stored best score, update the state with its value
    if (storedBestScore) {
      setBestScore(parseInt(storedBestScore, 10));
    }

    // Update the best score if the current score is higher
    if (score > bestScore) {
      // Update the state with the new best score
      setBestScore(score);
      
      // Store the new best score in local storage for persistence
      localStorage.setItem('bestScore', score.toString());
    }
  }, [score, bestScore]);  // Run this effect whenever the score or bestScore changes

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Your score: {score} / {totalQuestions}</p>
      <p>Best score: {bestScore} / {totalQuestions}</p>
    </div>
  );
};

export default Result;
