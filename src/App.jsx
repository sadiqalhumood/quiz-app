import React, { useState } from 'react';
import './App.css';
import StartingPage from "./components/StartingPage";
import Result from "./components/Result";
import QuizContainer from "./components/Questions";


const App = () => {
  /* State variables for managing quiz state */
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userScore, setUserScore] = useState(0);

  /* Starting the quiz */
  const handleQuizStart = () => {
    setQuizStarted(true);
  };

  /* Finishing the quiz and updating user score */
  const handleQuizFinish = (score) => {
    setQuizFinished(true);
    setUserScore(score);
  };

  /* Restarting the quiz */
  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setUserScore(0);
  };

  /* Render the App component */
  return (
      <div className="app">
        <h1>CS392 Quiz App</h1>

        {/* Show the starting page if the quiz hasn't started or finished */}
        {!quizStarted && !quizFinished && (
            <StartingPage onStartQuiz={handleQuizStart} />
        )}

        {/* Show the quiz container if the quiz has started but not finished */}
        {quizStarted && !quizFinished && (
            <QuizContainer onQuizFinish={handleQuizFinish} />
        )}

        {/* Show the result and restart button if the quiz has finished */}
        {quizFinished && (
            <>
              <Result score={userScore} totalQuestions={5} />
              <button onClick={handleRestartQuiz}>Restart Quiz</button>
            </>
        )}
      </div>
  );
};

/* Export the App component as the default export */
export default App;
