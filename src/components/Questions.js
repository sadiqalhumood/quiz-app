import React from "react";
import Card from "./Card";
import "./QuizStyles.css";

// component for displaying a question and its answers
const Question = ({
                      questionIndex, // index of the current question
                      setQuestionIndex, // function to update the current question index
                      questions, // array of all questions
                      setShowQuestionsPage, // function to hide the questions page
                      setShowFinalPage, // function to show the final page
                      score, // current score
                      setScore, // function to update the score
                  }) => {
    // handles the click on an answer
    const handleClick = (isCorrect) => {
        if (questionIndex < 9) { // checks if there are more questions
            if (isCorrect) {
                // increment score by 100 if the answer is correct
                setScore((score) => score += 100);
            }
            // move to the next question
            setQuestionIndex((prevIndex) => prevIndex + 1);
        }
        else {
            // if it's the last question
            if (isCorrect) {
                // increment score if the answer is correct
                setScore((score) => score += 100);
            }
            // show the final page and hide the questions page
            setShowQuestionsPage(false);
            setShowFinalPage(true);
        }
    };

    // render the question card with question text, answers, score, and question number
    return (
        <Card>
            <h1 className="question">{questions[questionIndex].questionText}</h1>
            <div className="answers">
                {questions[questionIndex].answers.map((answer, index) => (
                    <div
                        className="answer"
                        key={index} // react key for list items
                        onClick={() => handleClick(answer.correctAnswer)} // calls handleClick when an answer is clicked
                    >
                        <p>{answer.answerText}</p>
                    </div>
                ))}
            </div>
            <p className="score">
                Score: <span>{score}</span> {/* displays the current score */}
            </p>
            <p className="question_number">
                Question <span>{questionIndex + 1}</span>/10 {/* displays the current question number */}
            </p>
        </Card>
    );
};

export default Question;
