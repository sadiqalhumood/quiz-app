import React from "react";
import Card from "./Card";
import './FinalPage.css';

const FinalPage = () => {
  return (
    <Card>
      <h1 className="header">
        Thank you for taking the quiz!
      </h1>
      <h3 className="main-text">
        Your score is:
      </h3>
      <h3 className="final-score">
        10/10
      </h3>
      <button className="play-again-btn">Play Again</button>
    </Card>
  );

}

export default FinalPage;