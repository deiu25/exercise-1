import { useState } from "react";
import { useEffect } from "react";
import "./Auto-counter.css";

const AutoCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = () => setCount(count + 1);
    if (count === 60) {
      return;
    }
    const id = setInterval(timer, 100);
    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="counterDiv">
      <h1>Auto Counter</h1>
      <label className="value">{count}</label>
      <div className="buttonsDiv"></div>
    </div>
  );
};

export default AutoCounter;
