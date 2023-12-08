import React, { useState } from 'react';
import './StartingPage.css';
import Card from './Card';

const StartingPage = ({ setShowStartingPage, setShowQuestionsPage, topScore, setUsername }) => {
    const [inputValue, setInputValue] = useState("");

    const handleStartQuiz = () => {
        // Set the username with the current input value
        setUsername(inputValue);

        // Hide the starting page and show the questions page
        setShowStartingPage(false);
        setShowQuestionsPage(true);
    };

    return (
        <Card>
            <h1 className='header'>Welcome to the CS392 Quiz Page</h1>
            <h3 className='main-text'>Enter your name to take the quiz</h3>
            <input
                type="text"
                className='input-user'
                placeholder="Enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='start-button' onClick={handleStartQuiz}>Start Quiz</button>
            <p className='top-score'>High Score: <span>{topScore}</span></p>
        </Card>
    );
}

export default StartingPage;
