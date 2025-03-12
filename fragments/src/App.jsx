import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

import "./App.css";
import Conatainer from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  // let healthyfoods = [];

  let textState = useState("Item Entered By user");
  let texToShow = textState[0]; //current state
  let setTextState = textState[1]; //new state

  let [healthyfoods, sethealthyfoods] = useState([
    "Almonds",
    "Apples",
    "Avocados",
    "Bananas",
  ]);

  const handleOnChange = (event) => {
    if ((event.key === "Enter")) {
      let food_item = event.target.value;
      let newitems = [...healthyfoods, food_item];
      sethealthyfoods(newitems);
      console.log(food_item);
    }

    setTextState(event.target.value);
  };

  return (
    <>
      <Conatainer>
        <h1>Healthy foods</h1>
        <ErrorMessage items={healthyfoods}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{texToShow}</p>
        <FoodItems items={healthyfoods}></FoodItems>
      </Conatainer>
      <Conatainer>
        <p> these are the good and healthy foods</p>
      </Conatainer>
    </>
  );
}

export default App;
