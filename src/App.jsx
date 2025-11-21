import React, { useState } from "react";
import GamePage from "./pages/GamePage/GamePage";
import IntroPage from "./pages/IntroPage/IntroPage";
import "./global.css";

function App() {
  const [view, setView] = useState("intro");

  const [playerNames, setPlayerNames] = useState({
    p1: "Player 1",
    p2: "Player 2",
  });

  const handleStartGame = (name1, name2) => {
    setPlayerNames({ p1: name1, p2: name2 });
    setView("game");
  };

  const renderContent = () => {
    switch (view) {
      case "intro":
        return <IntroPage onStartGame={handleStartGame} />;
      case "game":
        return (
          <GamePage player1Name={playerNames.p1} player2Name={playerNames.p2} />
        );
      default:
        return <IntroPage onStartGame={handleStartGame} />;
    }
  };

  return <div className="app-wrapper">{renderContent()}</div>;
}

export default App;
