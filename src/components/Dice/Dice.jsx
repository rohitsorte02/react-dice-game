import React from "react";

function Dice({ value, isRolling }) {
  const imageSource = `/images/dice${value}.png`;
  const className = `player ${isRolling ? "rot" : ""}`;

  return (
    <div className={className}>
      <img src={imageSource} alt={`Dice showing ${value}`} />
    </div>
  );
}

export default Dice;
