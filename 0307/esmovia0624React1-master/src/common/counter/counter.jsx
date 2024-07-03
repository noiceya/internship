import { useState } from "react";
import "./counter.css";

export const Counter = ({val}) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-design">
      <div onClick={() => setCounter(counter + val)}>+</div>
      <div>{counter}</div>
      <div onClick={() => setCounter(counter - val)}>-</div>
    </div>
  );
};
