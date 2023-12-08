import React, { useState } from 'react';
import './QuizStyles.css';

const QuizContainer = () => {
    // example questions
    const questions = [
        {
            id: 1,
            questionText: 'What is the capital of France?',
            options: ['New York', 'London', 'Paris', 'Tokyo'],
            answer: 'Paris'
        },
        {
            id: 2,
            questionText: 'Who wrote Hamlet?',
            options: ['Charles Dickens', 'William Shakespeare', 'Leo Tolstoy', 'Mark Twain'],
            answer: 'William Shakespeare'
        },
        // ... add more questions as needed
    ];

    // state to track the current question
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // function to handle answer submission
    const handleSubmit = (option) => {
        // logic to check the answer and move to the next question
        if (option === questions[currentQuestion].answer) {
            console.log('correct!');
        } else {
            console.log('incorrect!');
        }

        // move to the next question
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // end of quiz logic
            console.log('quiz finished');
        }
    };

    return (
        <div className="question">
            <h2>{questions[currentQuestion].questionText}</h2>
            <div className="answers">
                {questions[currentQuestion].options.map((option, index) => (
                    <button key={index} className="answer" onClick={() => handleSubmit(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizContainer;
