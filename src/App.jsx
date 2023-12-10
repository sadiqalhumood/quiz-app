import { useState } from "react";
import './App.css';
import FinalPage from "./components/FinalPage";
import StartingPage from "./components/StartingPage";
import QuestionsPage from "./components/QuestionsPage";

function App() {

  /* State variables to manage component visibility, scores, and username */
  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  const [username, setUsername] = useState("");

  /* Render different components based on state */
  return (
      <>
        {showStartingPage && (
            /* Render StartingPage component*/
            <StartingPage
                setShowStartingPage={setShowStartingPage}
                setShowQuestionsPage={setShowQuestionsPage}
                topScore={topScore}
                setUsername={setUsername}
            />
        )}

        {showQuestionsPage && (
            /* Render QuestionsPage component */
            <QuestionsPage
                score={score}
                setScore={setScore}
                setShowQuestionsPage={setShowQuestionsPage}
                setShowFinalPage={setShowFinalPage}
            />
        )}

        {showFinalPage && (
            /* Render FinalPage component*/
            <FinalPage
                score={score}
                setScore={setScore}
                setShowStartingPage={setShowStartingPage}
                setShowFinalPage={setShowFinalPage}
            />
        )}
      </>
  );
}

export default App;

