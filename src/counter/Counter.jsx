import { useState } from "react";
import "./Counter.css";
import Button from "../button/Button";
import { useMemo } from "react";
import InputAuto from "../input/InputAuto";

const Counter = () => {
  const [value, setValue] = useState(0);
  const [showDiv, setShowDiv] = useState(false);
  // const [name, setName] = useState([]);

  const nume = [
    "Irina Ionescu",
    "Andreea Vasilescu",
    "Ioana Gerogescu",
    "Ana Marinescu",
    "Viorica Ipatescu",
    "Veronica Ghinescu",
    "Veronica Ghita",
    "Diana Ghita",
  ];

  const onMinusClick = () => {
    setValue((prevValue) => {
      return --prevValue;
    });
  };

  useMemo(() => {
    if (value === 10) {
      setTimeout(() => {
        setShowDiv(true);
      }, 2000);
    } else {
      setShowDiv(false);
    }
  }, [value]);

  const onPlusClick = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const onResetClick = () => {
    setValue((prevValue) => {
      return (prevValue = 0);
    });
  };

  const getSelectedVal = (value) => {
    console.log(value);
  };

  const getChanges = (value) => {
    console.log(value);
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
      {value === 10 ? <h2 className="blink">10 is the limit!</h2> : null}
      {showDiv && (
        <InputAuto
          label=""
          pholder="Cautati Persoana..."
          data={nume}
          onSelected={getSelectedVal}
          onChange={getChanges}
        />
      )}
    </div>
  );
};
export default Counter;
