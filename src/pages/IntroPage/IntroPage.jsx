import React, { useState } from "react";

function IntroPage({ onStartGame }) {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [error, setError] = useState("");

  const handleStart = () => {
    if (!player1.trim() || !player2.trim()) {
      setError("Please enter names for both players to start the game.");
      return;
    }
    setError("");

    onStartGame(player1.trim(), player2.trim());
  };

  return (
    <div className="container intro-container">
      <h1>Welcome to the Dice Game!</h1>
      <p className="subtitle">
        Enter the player names below to begin the match.
      </p>

      <div className="input-group">
        <label htmlFor="player1-name">Player 1 Name:</label>
        <input
          id="player1-name"
          type="text"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          placeholder="e.g., Dinga"
          maxLength="15"
        />
      </div>

      <div className="input-group">
        <label htmlFor="player2-name">Player 2 Name:</label>
        <input
          id="player2-name"
          type="text"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          placeholder="e.g., Dingi"
          maxLength="15"
        />
      </div>

      {error && <p className="error-message">{error}</p>}

      <button
        onClick={handleStart}
        disabled={!player1.trim() || !player2.trim()}
      >
        Start Game
      </button>
    </div>
  );
}

export default IntroPage;
