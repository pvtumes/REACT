import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
    "CE",
    "%",
    "+/-",
    "/",
    "*",
    "-",
    "+",
    "=",
  ];

  return (
    <div className="calculator">
      <Display></Display>
      <ButtonContainer calculatorButtons={calculatorButtons}></ButtonContainer>
    </div>
  );
}

export default App;
