import { useState } from "react";
import "./Counter.css";
import Button from "../button/Button";

const Counter = () => {
  const [value, setValue] = useState(0);

  const [show, setShow] = useState(false);

  const onMinusClick = () => {
    setValue((prevValue) => {
      return --prevValue;
    });
  };

  const onPlusClick = () => {
    setValue((prevValue) => {
      if (prevValue === 10) {
        setShow(!show);
      }
      return ++prevValue;
    });
  };

  const onResetClick = () => {
    setValue((prevValue) => {
      return (prevValue = 0);
    });
  };

  return (
    <div className="counterDiv">
      <h1>Counter</h1>
      <label className="value">{value}</label>
      <div className="buttonsDiv">
        <Button onClick={onMinusClick}>DECARASE</Button>
        <Button onClick={onResetClick}>RESET</Button>
        <Button onClick={onPlusClick} disabled={value === 10}>
          INCRASE
        </Button>
      </div>
      {show ? <h2>10 is the limit!</h2> : null}
    </div>
  );
};
export default Counter;
