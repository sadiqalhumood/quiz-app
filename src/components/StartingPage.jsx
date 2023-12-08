import React from 'react';
import './StartingPage.css';
import Card from './Card';


const StartingPage = () => {
  return (
    <Card>
      <h1 className='header'>Welcome to the CS392 Quiz Page</h1>
      <h3 className='main-text'>Enter your name to take the quiz</h3>
      <input type="text" className='input-user' placeholder="Enter your name" />
      <button className='start-button'>Start Quiz</button>
      <p className='top-score'>High Score:
        <span>0</span>
      </p>
    </Card>
  )

}

export default StartingPage;