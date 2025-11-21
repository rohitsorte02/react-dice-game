import React from "react";

function Scoreborad({ player1Name = "Player 1", player2Name = "Player 2", player1Score, player2Score}) {

  return (
    <div id = 'name'>
      <p>{player1Name}</p>
      <p id="sum1">{player1Score} Points</p>

      <p>{player2Name}</p>
      <p id="sum2">{player2Score} Points</p>
    </div>
  );

};


export default Scoreborad;