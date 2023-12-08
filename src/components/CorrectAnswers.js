import React from 'react';

const CorrectAnswers = ({ questions }) => {
    return (
        <div>
            <h2>Correct Answers</h2>
            <ul>
                {questions.map((question) => (
                    <li key={question.id}>
                        <strong>Question:</strong> {question.questionText} <br />
                        <strong style={{ color: 'green', fontWeight: 'bold' }}>Correct Answer:</strong> {question.answer}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CorrectAnswers;
