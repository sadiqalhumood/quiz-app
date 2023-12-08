import React, { useState } from 'react';

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
        {
            id: 3,
            questionText: 'Who wrote Hamlet?',
            options: ['Charles Dickens', 'William Shakespeare', 'Leo Tolstoy', 'Mark Twain'],
            answer: 'William Shakespeare'
        },
    ];

    // state to track the current question
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // handles answer submission
    const handleSubmit = (option) => {
        // checks the answer and move to the next question
        if (option === questions[currentQuestion].answer) {
            console.log('Correct!');
        } else {
            console.log('Incorrect!');
        }

        // moves to the next question
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // End of quiz logic
            console.log('Quiz Finished');
        }
    };

    return (
        <div>
            <h2>{questions[currentQuestion].questionText}</h2>
            <div>
                {questions[currentQuestion].options.map((option, index) => (
                    <button key={index} onClick={() => handleSubmit(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizContainer;
