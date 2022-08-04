import React, { useState } from "react";

function VotingButton({ ...props }) {
  const score = parseInt(props.score);
  const [counter, setCounter] = useState(score);
  return (
    <div>
      <button onClick={setCounter(counter++)}>+</button>
      <span>{counter}</span>
      <button onClick={setCounter(counter--)}>-</button>
    </div>
  );
}

export default VotingButton;
