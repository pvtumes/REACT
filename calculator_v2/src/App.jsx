import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  const calculatorButtons = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "C",
    "/",
    "*",
    "-",
    "+",
    "=",
  ];

  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      try {
        setCalVal(eval(calVal)); // ⚠️ Be careful using eval() in production!
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      setCalVal(calVal + buttonText);
    }
  };

  return (
    <div className="calculator">
      <Display displayvalue={calVal || "0"} />
      <ButtonContainer
        calculatorButtons={calculatorButtons}
        onButtonClick={onButtonClick}
      />
    </div>
  );
}

export default App;
