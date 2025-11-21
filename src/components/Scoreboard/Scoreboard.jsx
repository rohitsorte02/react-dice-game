import React from "react";

function Scoreboard({ player1Name, player2Name, player1Score, player2Score }) {
  return (
    <div id="name">
      <p>
        {player1Name}
        <br />
        <span id="sum1">{player1Score}</span>
      </p>

      <p>VS</p>

      <p>
        {player2Name}
        <br />
        <span id="sum2">{player2Score}</span>
      </p>
    </div>
  );
}

export default Scoreboard;
