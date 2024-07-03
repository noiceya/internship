import { useState } from "react";
import "./counter.css";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-design">
      <div onClick={() => setCounter(counter + 1)}>+</div>
      <div>{counter}</div>
      <div onClick={() => setCounter(counter - 1)}>-</div>
    </div>
  );
};
