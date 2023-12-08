import React, { useState } from 'react';
import CorrectAnswers from './CorrectAnswers';
import './QuizStyles.css';

const QuizContainer = () => {
    const questions = [
        {
            id: 1,
            questionText: 'What is the capital of France?',
            options: ['New York', 'London', 'Paris', 'Tokyo'],
            answer: 'Paris',
        },
        {
            id: 2,
            questionText: 'Who wrote Hamlet?',
            options: ['Charles Dickens', 'William Shakespeare', 'Leo Tolstoy', 'Mark Twain'],
            answer: 'William Shakespeare',
        },
        // ... add more questions as needed
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleSubmit = (option) => {
        const isCorrect = option === questions[currentQuestion].answer;

        setUserAnswers([...userAnswers, { questionId: questions[currentQuestion].id, selectedAnswer: option, isCorrect }]);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizFinished(true);
        }
    };

    return (
        <div className="question">
            {!quizFinished ? (
                <>
                    <h2>{questions[currentQuestion].questionText}</h2>
                    <div className="answers">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button key={index} className="answer" onClick={() => handleSubmit(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </>
            ) : (
                <CorrectAnswers questions={questions} userAnswers={userAnswers} />
            )}
        </div>
    );
};

export default QuizContainer;

