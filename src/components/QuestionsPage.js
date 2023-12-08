import React, { useState } from "react";
import { questions } from "../questions";
import Question from "./Questions";

const QuestionsPage = ({
                           score,
                           setScore,
                           setShowQuestionsPage,
                           setShowFinalPage,
                       }) => {
    const [questionIndex, setQuestionIndex] = useState(0);

    return (
        <Question
            questionIndex={questionIndex}
            questions={questions}
            setQuestionIndex={setQuestionIndex}
            setShowQuestionsPage={setShowQuestionsPage}
            setShowFinalPage={setShowFinalPage}
            score={score}
            setScore={setScore}
        />
    );
};

export default QuestionsPage;
