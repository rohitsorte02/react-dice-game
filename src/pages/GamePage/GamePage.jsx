// react hook import
import React, {useState} from "react";

//components Import
import Dice from '../../components/Dice/Dice';
import Scoreboard from '../../components/Scoreboard/Scoreboard';

// style import
import '../../global.css';

// compontent fn
function GamePage(){
  // state define & component logic 
  const [dice1Value, setDice1Value] = useState(1);
  const [dice2Value, setDice2Value] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [headerText, setHeaderText] = useState("Click Flip To Start");
  const [isGameOver, setIsGameOver ] = useState(false);
  const [isRolling, setIsRolling] = useState(false);

  return(
    <div className="container">
      <h1>{headerText}</h1>
      <Scoreboard player2Score={player2Score}
                  player1Score={player1Score}/>
      <div id="cont">
        <Dice value={dice1Value}
              isRolling={isRolling}/>
        <Dice value={dice2Value}
              isRolling={isRolling}/>
        <button onClick={flips}  
                disabled={isGameOver || isRolling}>{isGameOver ? "Game Over" : "Flip" }
        </button>
      </div>
    </div>
  );
}


// export to use this in App.jsx
export default GamePage;
