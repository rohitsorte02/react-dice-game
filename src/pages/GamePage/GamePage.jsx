// react hook import
import React, { useState } from "react";

//components Import
import Dice from "../../components/Dice/Dice";
import Scoreboard from "../../components/Scoreboard/Scoreboard";

// style import
import "../../global.css";

// score to be made for win
const winningScore = 5;

// compontent fn
function GamePage({ player1Name = "Player 1", player2Name = "Player 2" }) {
  // state define & component logic
  const [dice1Value, setDice1Value] = useState(1);
  const [dice2Value, setDice2Value] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [headerText, setHeaderText] = useState(
    `First to ${winningScore} points wins!`
  );
  const [isGameOver, setIsGameOver] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  // game logic
  const flips = () => {
    if (isGameOver || isRolling) return;

    setIsRolling(true);

    const newRandom1 = Math.floor(Math.random() * 6) + 1;
    const newRandom2 = Math.floor(Math.random() * 6) + 1;

    setTimeout(() => {
      let newP1Score = player1Score;
      let newP2Score = player2Score;
      let newHeaderText = "";
      let gameEnded = false;

      if (newRandom1 > newRandom2) {
        newP1Score += 1;
        newHeaderText = `${player1Name} wins the round`;
      } else if (newRandom1 < newRandom2) {
        newP2Score += 1;
        newHeaderText = `${player2Name} wins the round`;
      } else {
        newHeaderText = "Draw Roll again.";
      }

      if (newP1Score >= 5) {
        newHeaderText = `🎉 ${player1Name} is the final winner! 🎉`;
        gameEnded = true;
      } else if (newP2Score >= 5) {
        newHeaderText = `🎉 ${player2Name} is the final winner! 🎉`;
        gameEnded = true;
      }

      setIsGameOver(gameEnded);

      //setting points of player
      setPlayer1Score(newRandom1);
      setPlayer2Score(newRandom2);

      // setting dice value
      setDice1Value(newRandom1);
      setDice2Value(newRandom2);

      setHeaderText(newHeaderText);
      setIsRolling(false);
    }, 1000);
  };

  const resetGame = () => {
    setDice1Value(1);
    setDice2Value(1);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setHeaderText(`First to ${winningScore} points wins!`);
    setIsGameOver(false);
    setIsRolling(false);
  };

  return (
    <div className="container">
      <h1 className="game-status">{headerText}</h1>
      <Scoreboard
        player1Name={player1Name}
        player2Name={player2Name}
        player1Score={player1Score}
        player2Score={player2Score}
      />
      <div id="cont">
        <Dice value={dice1Value} isRolling={isRolling} />
        <Dice value={dice2Value} isRolling={isRolling} />
      </div>
      <div className="button-group">
        <button
          onClick={flips}
          disabled={isGameOver || isRolling}
          className="flip-button"
        >
          {isGameOver ? "Game Over" : "Flip"}
        </button>
        {isGameOver && (
          <button onClick={resetGame} className="reset-button">
            New Game
          </button>
        )}
      </div>
    </div>
  );
}

export default GamePage;
