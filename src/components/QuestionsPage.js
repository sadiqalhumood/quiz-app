import React, { useState } from "react";
import { questions } from "../questions"; // import the array of questions
import Question from "./Questions"; // import the Question component

// QuestionsPage component that will manage which question to show
const QuestionsPage = ({
                           score, // current score
                           setScore, // function to update the score
                           setShowQuestionsPage, // function to hide the questions page
                           setShowFinalPage, // function to show the final page
                       }) => {
    // state hook to keep track of the current question index
    const [questionIndex, setQuestionIndex] = useState(0);

    // renders the Question component with props passed down
    return (
        <Question
            questionIndex={questionIndex} // current question index
            questions={questions} // the array of questions
            setQuestionIndex={setQuestionIndex} // function to update the question index
            setShowQuestionsPage={setShowQuestionsPage} // function to hide the questions page
            setShowFinalPage={setShowFinalPage} // function to show the final page
            score={score} // current score
            setScore={setScore} // function to update the score
        />
    );
};

export default QuestionsPage; // export the QuestionsPage component
